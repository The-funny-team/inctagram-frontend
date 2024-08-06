import { useMeQuery } from '@/shared/api/authApi'
import { useGetUserPostsQuery } from '@/shared/api/postsApi'
import { useGetProfileInfoQuery } from '@/shared/api/profileApi'
import { Loader, ProfileHeader } from '@/shared/ui'
import { ViewPostModal } from '@/widgets/ViewPostModal'

import s from './ProfileMain.module.scss'

export const ProfileMain = () => {
  const { data: userInfo } = useMeQuery()
  const { data: profileInfo, isLoading } = useGetProfileInfoQuery()
  const myId = userInfo?.userId
  const { data: profilePosts } = useGetUserPostsQuery({ userId: myId as number })

  const { data: userPosts, isLoading } = useGetUserPostsQuery({})
  const authorId = userPosts && userPosts.data.length !== 0 ? userPosts.data[0].author.id : ''
  const isMyPost = myId === authorId

  if (!userInfo) {
    return null
  }

  if (!profileInfo) {
    return null
  }

  if (!userPosts) {
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
            {userPosts &&
              userPosts.data.map(post => (
                <ViewPostModal
                  author={post.author}
                  comments={[]}
                  createdAt={post.createdAt}
                  description={post.description}
                  id={post.id}
                  imagesUrl={post.imagesUrl}
                  isMyPost={isMyPost}
                  key={post.id}
                  updatedAt={post.updatedAt}
                />
              ))}
          </div>
        </main>
      ) : (
        <Loader />
      )}
    </>
  )
}
