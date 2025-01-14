import type { GetPostResponse } from '@/shared/api/postsApi'

import { PublicPost } from '@/widgets/PublicPost'

import s from './PublicPosts.module.scss'

type Props = {
  publicPosts: GetPostResponse[]
}
export const PublicPosts = ({ publicPosts }: Props) => {
  return (
    <div className={s.postsWrapper}>
      {publicPosts?.map(p => <PublicPost key={p.id} postInfo={p} />)}
    </div>
  )
}
