import { useEffect, useState } from 'react'

import { useMeQuery } from '@/shared/api/authApi'
import { GetPostResponse, useGetUserPostsQuery } from '@/shared/api/postsApi'
import { useGetProfileInfoQuery } from '@/shared/api/profileApi'
import { Loader, ProfileHeader } from '@/shared/ui'
import { ViewPostModal } from '@/widgets/ViewPostModal'

import s from './ProfileMain.module.scss'

export const ProfileMain = () => {
  const { data: userInfo } = useMeQuery()
  const { data: profileInfo } = useGetProfileInfoQuery()
  const myId = Number(userInfo?.userId)

  const [endCursorPostId, setEndCursorPostId] = useState(0)
  const [allPosts, setAllPosts] = useState<GetPostResponse[]>([] as GetPostResponse[])
  const { data: profilePosts, isLoading } = useGetUserPostsQuery({
    endCursorPostId: endCursorPostId,
    pageSize: 8,
    userId: myId,
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

  if (!userInfo || !profileInfo || !profilePosts) {
    return null
  }

  return (
    <>
      {!isLoading ? (
        <main className={s.rootPage}>
          <ProfileHeader
            isAuth={!!userInfo}
            postsTotalCount={profilePosts?.totalCount}
            user={profileInfo}
          />
          <div className={s.postsList}>
            {allPosts.map(post => (
              <ViewPostModal key={post.id} post={post} />
            ))}
          </div>
        </main>
      ) : (
        <Loader />
      )}
    </>
  )
}
