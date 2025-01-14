import { GetPostResponse } from '@/shared/api/postsApi'
import { ViewPostModal } from '@/widgets/ViewPostModal'

import s from './ProfilePosts.module.scss'

type PropsType = {
  isAuth: boolean
  profilePosts: GetPostResponse[]
}

export const ProfilePosts = ({ isAuth, profilePosts }: PropsType) => {
  return (
    <div className={s.postsList}>
      {profilePosts.map(post => (
        <ViewPostModal isAuth={isAuth} key={post.id} post={post} />
      ))}
    </div>
  )
}
