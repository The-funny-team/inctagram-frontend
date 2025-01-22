import React, { useState } from 'react'

import { useUpdateLikeStatusPostMutation } from '@/shared/api/postsApi'
import { FavoritesIcon, LikeIcon, LikeOutlineIcon, MessageIcon, ShareIcon } from '@/shared/assets'
import { LIKE_STATUS, ROUTES_URL } from '@/shared/const'
import { useRouter } from 'next/router'

import s from './Actions.module.scss'

type Props = {
  isLiked: boolean
  isMyPost: boolean
  postId: number
}

export const Actions = ({ isLiked, isMyPost, postId }: Props) => {
  const router = useRouter()
  const [isLikedPost, setIsLikedPost] = useState(isLiked)

  const [updateLikeStatus] = useUpdateLikeStatusPostMutation()
  const toggleLikeHandler = () => {
    updateLikeStatus({
      likeStatus: isLiked ? LIKE_STATUS.UNLIKE : LIKE_STATUS.LIKE,
      postId: postId,
    })
      .unwrap()
      .then(() => {
        setIsLikedPost(prevState => !prevState)
      })
  }
  const onClickMessage = () => {
    void router.push(ROUTES_URL.MESSENGER)
  }

  return (
    <div className={s.actions}>
      <div className={s.likeAndShareContainer}>
        <span onClick={toggleLikeHandler}>{isLikedPost ? <LikeIcon /> : <LikeOutlineIcon />}</span>
        {!isMyPost && (
          <span onClick={onClickMessage}>
            <MessageIcon />
          </span>
        )}
        <span>
          <ShareIcon />
        </span>
      </div>
      <span>
        <FavoritesIcon />
      </span>
    </div>
  )
}
