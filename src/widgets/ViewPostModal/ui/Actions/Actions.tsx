import React from 'react'

import { FavoritesIcon, LikeOutlineIcon, ShareIcon } from '@/shared/assets'

import styles from './Actions.module.scss'

export const Actions = () => {
  return (
    <div className={styles.actions}>
      <div className={styles.likeAndShareContainer}>
        <span className={styles.likePostIcon}>
          <LikeOutlineIcon />
        </span>
        <span className={styles.sharePostIcon}>
          <ShareIcon />
        </span>
      </div>
      <span className={styles.favoritesIcon}>
        <FavoritesIcon />
      </span>
    </div>
  )
}
