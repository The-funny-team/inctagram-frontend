import React from 'react'

import { useGetPostLikesQuery } from '@/shared/api/postsApi'
import { Avatar, Typography } from '@/shared/ui'

import s from './LikesInfo.module.scss'

type Props = {
  postId: number
}

export const LikesInfo = ({ postId }: Props) => {
  const { data: postLikes, isLoading } = useGetPostLikesQuery({ postId: postId })
  const likesInfo = postLikes?.items.slice(0, 3) || []

  return (
    <>
      {!isLoading && (
        <div className={s.likesContainer}>
          <div className={s.likesAvatars}>
            {likesInfo.map(user => (
              <Avatar
                key={user.userId}
                size={24}
                src={user.avatars[0].url || ''}
                userName={user.userName}
              />
            ))}
          </div>
          <div className={s.likesCount}>
            <Typography as={'span'} variant={'regularText14'}>
              {postLikes?.totalCount || 0}
              <Typography as={'span'} variant={'boldText14'}>
                &nbsp;&quot;Like&quot;
              </Typography>
            </Typography>
          </div>
        </div>
      )}
    </>
  )
}
