import React from 'react'

import { FavoritesIcon, LikeOutlineIcon, ShareIcon } from '@/shared/assets'

import s from './Actions.module.scss'

export const Actions = () => {
  return (
    <div className={s.actions}>
      <div className={s.likeAndShareContainer}>
        <span className={s.likePostIcon}>
          <LikeOutlineIcon />
        </span>
        <span className={s.sharePostIcon}>
          <ShareIcon />
        </span>
      </div>
      <span className={s.favoritesIcon}>
        <FavoritesIcon />
      </span>
    </div>
  )
}
