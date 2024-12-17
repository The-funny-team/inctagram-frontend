import { useState } from 'react'

import { FavoritesIcon, LikeIcon, LikeOutlineIcon, MessageIcon, ShareIcon } from '@/shared/assets'

import s from './Actions.module.scss'

type Props = {
  isLiked: boolean
}

export const Actions = ({ isLiked }: Props) => {
  const [isPostLiked, setIsPostLiked] = useState<boolean>(isLiked)

  const likeHandler = () => {
    setIsPostLiked(prevState => !prevState)
  }

  return (
    <div className={s.actionsWrapper}>
      <div className={s.actionsRight}>
        <div className={s.icon} onClick={likeHandler}>
          {isPostLiked ? <LikeIcon /> : <LikeOutlineIcon />}
        </div>
        <div className={s.icon}>
          <MessageIcon />
        </div>
        <div className={s.icon}>
          <ShareIcon />
        </div>
      </div>
      <div className={s.icon}>
        <FavoritesIcon />
      </div>
    </div>
  )
}
