import { useEffect, useState } from 'react'
import InfiniteScroll from 'react-infinite-scroll-component'

import { useMeQuery } from '@/shared/api/authApi'
import { useGetUserProfileQuery } from '@/shared/api/followApi'
import { GetPostResponse, useGetUserPostsByUserNameQuery } from '@/shared/api/postsApi'
import { useTranslation } from '@/shared/lib/hooks'
import { Loader, ProfileHeader, ProfilePosts, Typography } from '@/shared/ui'
import { debounce } from 'lodash'

import s from './ProfileMain.module.scss'

export const ProfileMain = () => {
  const { router, text } = useTranslation()
  const t = text.pages.publicProfile
  const urlUserName = router.query.userName
  const { data: myProfileInfo, isLoading } = useMeQuery()
  const myId = Number(myProfileInfo?.userId)
  const myName = myProfileInfo?.userName

  const username = urlUserName ?? myName

  const [currentPage, setCurrentPage] = useState(1)
  const [pagesCount, setPagesCount] = useState(0)
  const [allPosts, setAllPosts] = useState<GetPostResponse[]>([])
  const {
    data: profileInfo,
    isLoading: profileInfoLoading,
    refetch,
  } = useGetUserProfileQuery({
    userName: username as string,
  })

  const { data: profilePosts, isLoading: profilePostsLoad } = useGetUserPostsByUserNameQuery({
    pageNumber: currentPage,
    pageSize: 12,
    userName: username as string,
  })

  useEffect(() => {
    if (profilePosts?.items && currentPage === 1) {
      setPagesCount(profilePosts.pagesCount)
      setAllPosts(prevPosts => [...prevPosts, ...profilePosts.items])
      setCurrentPage(prevState => prevState + 1)
    }
  }, [currentPage, profilePosts])

  const fetchMorePosts = debounce(() => {
    if (currentPage > pagesCount) {
      return
    }

    if (!profilePostsLoad && profilePosts) {
      setAllPosts(prevPosts => [...prevPosts, ...profilePosts.items])
    }
    setCurrentPage(prev => prev + 1)
  }, 500)

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
          <InfiniteScroll
            dataLength={allPosts.length}
            endMessage={
              <div style={{ margin: '10px 0', textAlign: 'center' }}>
                <Typography variant={'regularText14'}>{t.noMorePosts}</Typography>
              </div>
            }
            hasMore={currentPage <= pagesCount}
            loader={
              <div style={{ margin: '10px 0', textAlign: 'center' }}>
                <Typography variant={'regularText14'}>{t.loadingPosts}</Typography>
              </div>
            }
            next={fetchMorePosts}
          >
            <ProfilePosts
              isAuth={!!myProfileInfo}
              isFollow={profileInfo.isFollowing}
              profilePosts={allPosts}
            />
          </InfiniteScroll>
        </main>
      ) : (
        <Loader />
      )}
    </>
  )
}
