import { GetPostResponse } from '@/shared/api/postsApi'
import { ViewPostModal } from '@/widgets/ViewPostModal'

import s from './ProfilePosts.module.scss'

type PropsType = {
  isShowPostId?: number | undefined
  loggedUserId: number | undefined
  profilePosts: GetPostResponse[]
}

export const ProfilePosts = ({ isShowPostId, loggedUserId, profilePosts }: PropsType) => {
  return (
    <div className={s.postsList}>
      {profilePosts.map(post => (
        <ViewPostModal
          avatarOwner={post.avatarOwner}
          createdAt={post.createdAt}
          description={post.description}
          id={post.id}
          images={post.images}
          isLiked
          isOpen={post.id === isShowPostId}
          key={post.id}
          likesCount={3}
          location={''}
          loggedUserId={loggedUserId}
          owner={post.owner}
          ownerId={post.ownerId}
          updatedAt={post.updatedAt}
          userName={post.userName}
        />
      ))}
    </div>
  )
}
