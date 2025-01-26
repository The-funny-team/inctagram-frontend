import { useEffect, useState } from 'react'

import { useMeQuery } from '@/shared/api/authApi'
import { useGetUserProfileQuery } from '@/shared/api/followApi'
import { GetPostResponse, useGetUserPostsByUserNameQuery } from '@/shared/api/postsApi'
import { Loader, ProfileHeader, ProfilePosts } from '@/shared/ui'
import { useRouter } from 'next/router'

import s from './ProfileMain.module.scss'

export const ProfileMain = () => {
  const router = useRouter()
  const urlUserName = router.query.userName
  const { data: myProfileInfo, isLoading } = useMeQuery()
  const myId = Number(myProfileInfo?.userId)
  const myName = myProfileInfo?.userName

  const username = urlUserName ?? myName

  const [currentPage, setCurrentPage] = useState(1)
  const [fetching, setFetching] = useState(true)
  const [pagesCount, setPagesCount] = useState(0)
  const [allPosts, setAllPosts] = useState<GetPostResponse[]>([])
  const {
    data: profileInfo,
    isLoading: profileInfoLoading,
    refetch,
  } = useGetUserProfileQuery({
    userName: username as string,
  })

  const { data: profilePosts } = useGetUserPostsByUserNameQuery({
    pageNumber: currentPage,
    pageSize: 8,
    userName: username as string,
  })

  const scrollHandler = () => {
    const scrollTop = document.documentElement.scrollTop
    const windowHeight = window.innerHeight
    const fullHeight = document.documentElement.scrollHeight

    if (fullHeight - (scrollTop + windowHeight) < 100 && currentPage <= pagesCount && !fetching) {
      setFetching(true)
    }
  }

  useEffect(() => {
    if (fetching && profilePosts) {
      setAllPosts(prevPosts => [...prevPosts, ...profilePosts.items])
      setPagesCount(profilePosts.pagesCount)
      setCurrentPage(prevState => prevState + 1)
      setFetching(false)
    }
  }, [fetching, profilePosts])

  useEffect(() => {
    window.addEventListener('scroll', scrollHandler)

    return () => {
      window.removeEventListener('scroll', scrollHandler)
    }
  }, [currentPage, pagesCount])

  if (profileInfoLoading) {
    return <Loader />
  }

  if (!myProfileInfo || !profileInfo || !profilePosts) {
    return null
  }

  return (
    <>
      {!isLoading ? (
        <main className={s.rootPage}>
          <ProfileHeader
            isAuth={!!myProfileInfo}
            myId={myId}
            updateInfo={refetch}
            user={profileInfo}
          />
          <ProfilePosts
            isAuth={!!myProfileInfo}
            isFollow={profileInfo.isFollowing}
            profilePosts={allPosts}
          />
        </main>
      ) : (
        <Loader />
      )}
    </>
  )
}
