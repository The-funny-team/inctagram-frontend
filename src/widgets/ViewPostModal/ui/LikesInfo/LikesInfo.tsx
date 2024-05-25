import React from 'react'

import { Avatar, Typography } from '@/shared/ui'

import s from './LikesInfo.module.scss'

type Props = {
  likesCount: number
  userName?: string
}

export const LikesInfo = ({ likesCount }: Props) => {
  return (
    <div className={s.likesContainer}>
      <Avatar className={s.avatarLikesFirst} size={24} userName={'test'} />
      <Avatar className={s.avatarLikesSecond} size={24} userName={'test'} />
      <Avatar className={s.avatarLikesThird} size={24} userName={'test'} />

      <div className={s.likesCount}>
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
