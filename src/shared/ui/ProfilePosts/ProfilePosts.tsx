import { GetPostResponse } from '@/shared/api/postsApi'
import { ViewPostModal } from '@/widgets/ViewPostModal'

import s from './ProfilePosts.module.scss'

type PropsType = {
  profilePosts: GetPostResponse[]
}

export const ProfilePosts = ({ profilePosts }: PropsType) => {
  return (
    <div className={s.postsList}>
      {profilePosts.map(post => (
        <ViewPostModal key={post.id} post={post} />
      ))}
    </div>
  )
}
