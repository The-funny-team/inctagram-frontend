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
          avatarOwner={p.avatarOwner}
          createdAt={p.createdAt}
          description={p.description}
          id={p.id}
          images={p.images}
          isLiked
          key={p.id}
          likesCount={1}
          location={''}
          owner={p.owner}
          ownerId={p.ownerId}
          updatedAt={p.updatedAt}
          userName={p.userName}
        />
      ))}
    </div>
  )
}
