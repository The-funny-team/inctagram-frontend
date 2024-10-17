import { GetPostResponse } from '@/shared/api/postsApi'
import { ViewPostModal } from '@/widgets/ViewPostModal'

import s from './ProfilePosts.module.scss'

type PropsType = {
  isMyPost: boolean
  isShowPostId?: number | undefined
  profilePosts: GetPostResponse[]
}

export const ProfilePosts = ({ isMyPost, isShowPostId, profilePosts }: PropsType) => {
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
          isMyPost={isMyPost}
          isOpen={post.id === isShowPostId}
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
  )
}
