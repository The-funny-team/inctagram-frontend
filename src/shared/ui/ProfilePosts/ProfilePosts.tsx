import { GetPostResponse } from '@/shared/api/postsApi'
import { ViewPostModal } from '@/widgets/ViewPostModal'

import s from './ProfilePosts.module.scss'

type PropsType = {
  isAuth: boolean
  isFollow?: boolean
  profilePosts: GetPostResponse[]
}

export const ProfilePosts = ({ isAuth, isFollow, profilePosts }: PropsType) => {
  return (
    <div className={s.postsList}>
      {profilePosts.map(post => (
        <ViewPostModal isAuth={isAuth} isFollow={isFollow} key={post.id} post={post} />
      ))}
    </div>
  )
}
