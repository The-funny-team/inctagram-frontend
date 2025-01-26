import { useEffect, useState } from 'react'

import { useMeQuery } from '@/shared/api/authApi'
import { useGetUserProfileQuery } from '@/shared/api/followApi'
import { GetPostResponse, useGetUserPostsQuery } from '@/shared/api/postsApi'
import { Loader, ProfileHeader } from '@/shared/ui'
import { ViewPostModal } from '@/widgets/ViewPostModal'
import { useRouter } from 'next/router'

import s from './ProfileMain.module.scss'

export const ProfileMain = () => {
  const router = useRouter()
  const urlUserName = router.query.userName
  const { data: myProfileInfo, isLoading } = useMeQuery()
  const myId = Number(myProfileInfo?.userId)
  const myName = myProfileInfo?.userName

  const username = urlUserName ?? myName

  const [endCursorPostId, setEndCursorPostId] = useState(0)
  const [allPosts, setAllPosts] = useState<GetPostResponse[]>([] as GetPostResponse[])
  const { data: profilePosts } = useGetUserPostsQuery({
    endCursorPostId: endCursorPostId,
    pageSize: 8,
    userId: myId,
  })

  const {
    data: profileInfo,
    isLoading: profileInfoLoading,
    refetch,
  } = useGetUserProfileQuery({
    userName: username as string,
  })

  useEffect(() => {
    if (profilePosts && profilePosts.items.length !== 0) {
      setAllPosts(prevPosts => [...prevPosts, ...profilePosts.items])
    }
  }, [profilePosts])
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = document.documentElement.scrollTop
      const windowHeight = window.innerHeight
      const fullHeight = document.documentElement.scrollHeight

      if (windowHeight + scrollTop >= fullHeight - 100) {
        if (allPosts.length > 0) {
          const lastId = allPosts[allPosts.length - 1].id

          setEndCursorPostId(lastId)
        }
      }
    }

    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [profilePosts, allPosts])

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
          <div className={s.postsList}>
            {allPosts.map(post => (
              <ViewPostModal isAuth={!!myProfileInfo} key={post.id} post={post} />
            ))}
          </div>
        </main>
      ) : (
        <Loader />
      )}
    </>
  )
}
