import { Avatar, Typography } from '@/shared/ui'

import s from './Likes.module.scss'

type Props = {
  avatarsWhoLiked: string[]
  likesCount: number
}
export const Likes = ({ avatarsWhoLiked, likesCount }: Props) => {
  return (
    <div className={s.likesWrapper}>
      {likesCount > 0 && (
        <div className={s.avatarsBlock}>
          {avatarsWhoLiked.slice(0, 3).map(ava => (
            <div className={s.avatar} key={ava}>
              <Avatar size={24} src={ava} userName={'L A'} />
            </div>
          ))}
        </div>
      )}
      <div className={s.countBlock}>
        <Typography variant={'regularText14'}>{likesCount}</Typography>
        <Typography variant={'boldText14'}>&quot;Like&quot;</Typography>
      </div>
    </div>
  )
}
