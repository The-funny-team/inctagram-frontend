import { GetPostResponse } from '@/shared/api/postsApi'
import { ViewPostModal } from '@/widgets/ViewPostModal'

import s from './ProfilePosts.module.scss'

type PropsType = {
  isMyPost: boolean
  profilePosts: GetPostResponse[]
}

export const ProfilePosts = ({ isMyPost, profilePosts }: PropsType) => {
  return (
    <div className={s.postsList}>
      {profilePosts.map(post => (
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
  )
}
