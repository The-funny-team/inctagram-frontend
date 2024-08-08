import { useMeQuery } from '@/shared/api/authApi'
import { useGetUserPostsQuery } from '@/shared/api/postsApi'
import { useGetProfileInfoQuery } from '@/shared/api/profileApi'
import { Loader, ProfileHeader } from '@/shared/ui'
import { ViewPostModal } from '@/widgets/ViewPostModal'

import s from './ProfileMain.module.scss'

export const ProfileMain = () => {
  const { data: userInfo } = useMeQuery()
  const { data: profileInfo } = useGetProfileInfoQuery()
  const myId = userInfo?.userId
  const { data: profilePosts, isLoading } = useGetUserPostsQuery({ userId: myId as number })

  //const { data: userPosts, isLoading } = useGetUserPostsQuery({})
  const authorId =
    profilePosts && profilePosts.items.length !== 0 ? profilePosts.items[0].ownerId : ''
  const isMyPost = myId === authorId

  if (!userInfo) {
    return null
  }

  if (!profileInfo) {
    return null
  }

  if (!profilePosts) {
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
            {profilePosts &&
              profilePosts.items.map(post => (
                <ViewPostModal
                  avatarOwner={post.avatarOwner}
                  comments={[]}
                  createdAt={post.createdAt}
                  description={post.description}
                  id={post.id}
                  images={post.images}
                  isLiked
                  isMyPost={isMyPost}
                  key={post.id}
                  likesCount={3}
                  location={''}
                  owner={post.owner}
                  ownerId={post.ownerId}
                  updatedAt={post.updatedAt}
                  userName={post.userName}
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
