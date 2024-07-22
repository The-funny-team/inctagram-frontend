import type { GetPostResponse } from '@/shared/api/postsApi'

import { PublicPost } from '@/widgets/PublicPost'

import s from './PublicPosts.module.scss'

type Props = {
  publicPosts: GetPostResponse[]
}
export const PublicPosts = ({ publicPosts }: Props) => {
  return (
    <div className={s.postsWrapper}>
      {publicPosts?.map(p => (
        <PublicPost
          author={p.author}
          createdAt={p.createdAt}
          description={p.description}
          id={p.id}
          imagesUrl={p.imagesUrl}
          key={p.id}
          updatedAt={p.updatedAt}
        />
      ))}
    </div>
  )
}
