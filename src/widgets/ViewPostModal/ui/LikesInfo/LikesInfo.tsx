import React from 'react'

import { Avatar, Typography } from '@/shared/ui'

import styles from './LikesInfo.module.scss'

type Props = {
  likesCount: number
  userName?: string
}

export const LikesInfo = ({ likesCount, userName }: Props) => {
  return (
    <div className={styles.likesContainer}>
      <Avatar className={styles.avatarLikesFirst} size={24} userName={'test'} />
      <Avatar className={styles.avatarLikesSecond} size={24} userName={'test'} />
      <Avatar className={styles.avatarLikesThird} size={24} userName={'test'} />

      <div className={styles.likesCount}>
        <Typography as={'span'} variant={'regularText14'}>
          {`${likesCount} `}
          <Typography as={'span'} variant={'boldText14'}>
            &quot;Like&quot;
          </Typography>
        </Typography>
      </div>
    </div>
  )
}
