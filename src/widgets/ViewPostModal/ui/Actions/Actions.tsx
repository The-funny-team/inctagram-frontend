import React, { useEffect, useState } from 'react'

import { useGetPostLikesQuery, useUpdateLikeStatusPostMutation } from '@/shared/api/postsApi'
import { FavoritesIcon, LikeIcon, LikeOutlineIcon, MessageIcon, ShareIcon } from '@/shared/assets'
import { LIKE_STATUS, ROUTES_URL } from '@/shared/const'
import { useRouter } from 'next/router'

import s from './Actions.module.scss'

type Props = {
  isMyPost: boolean
  postId: number
}

export const Actions = ({ isMyPost, postId }: Props) => {
  const router = useRouter()

  const { data: postLikes } = useGetPostLikesQuery({ postId: postId })
  const [isLikedPost, setIsLikedPost] = useState(false)

  useEffect(() => {
    if (postLikes) {
      setIsLikedPost(postLikes.isLiked)
    }
  }, [postLikes])

  const [updateLikeStatus] = useUpdateLikeStatusPostMutation()
  const toggleLikeHandler = () => {
    updateLikeStatus({
      likeStatus: isLikedPost ? LIKE_STATUS.UNLIKE : LIKE_STATUS.LIKE,
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
