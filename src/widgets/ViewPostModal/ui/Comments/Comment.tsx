import React, { useRef, useState } from 'react'

import {
  CommentsViewModel,
  useCreateNewAnswerToCommentMutation,
  useUpdateCommentLikeStatusMutation,
} from '@/shared/api/commentsApi'
import { LikeIcon, LikeOutlineIcon } from '@/shared/assets'
import { useGetTimeAgo, useTranslation } from '@/shared/lib/hooks'
import { Avatar, Button, Input, Typography } from '@/shared/ui'

import s from './Comments.module.scss'

type Props = {
  comment: CommentsViewModel
}

export const Comment = ({ comment }: Props) => {
  const { text } = useTranslation()

  const t = text.modals.viewPostModal

  const [isShowInput, setIsShowInput] = useState(false)
  const [commentValue, setCommentValue] = useState<string>('')
  const [isLiked, setIsLiked] = useState<boolean>(comment.isLiked)

  const [publishAnswerToComment] = useCreateNewAnswerToCommentMutation()

  const [updateLikeStatus] = useUpdateCommentLikeStatusMutation()

  const inputRef = useRef<HTMLInputElement>(null)
  const addAnswerToComment = () => {
    setIsShowInput(prevState => !prevState)
    setTimeout(() => inputRef.current?.focus(), 0)
  }
  const toggleLikeComment = () => {
    updateLikeStatus({
      commentId: comment.id,
      likeStatus: isLiked ? 'NONE' : 'LIKE',
      postId: comment.postId,
    })
      .unwrap()
      .then(() => {
        setIsLiked(prevState => !prevState)
      })
  }
  const addCommentToComment = () => {
    publishAnswerToComment({
      commentId: comment.id,
      content: commentValue,
      postId: comment.postId,
    })
      .unwrap()
      .then(() => {
        setCommentValue('')
        setIsShowInput(false)
      })
  }

  return (
    <>
      <div className={s.commentWrapper}>
        <div className={s.comment}>
          <div>
            <Avatar
              size={36}
              src={comment.from.avatars.length !== 0 ? comment.from.avatars[0].url : ''}
              userName={comment.from.username}
            />
          </div>
          <div>
            <Typography as={'span'} variant={'boldText14'}>
              {`${comment.from.username} `}
            </Typography>
            <Typography as={'span'} variant={'regularText14'}>
              {comment.content}
            </Typography>
            <div className={s.commentInfo}>
              <Typography variant={'smallText'}>{useGetTimeAgo(comment.createdAt)}</Typography>
              {comment.likeCount !== 0 && (
                <Typography variant={'smallText'}>
                  {t.like}: {comment.likeCount}
                </Typography>
              )}
              <Typography onClick={addAnswerToComment} variant={'semiBoldSmallText'}>
                {t.answer}
              </Typography>
            </div>
          </div>
        </div>
        <span className={s.commentLike} onClick={toggleLikeComment}>
          {isLiked ? <LikeIcon /> : <LikeOutlineIcon />}
        </span>
      </div>
      {isShowInput && (
        <div className={s.input}>
          <Input onValueChange={value => setCommentValue(value)} ref={inputRef} type={'text'} />
          <Button
            disabled={commentValue.trim().length === 0}
            onClick={addCommentToComment}
            type={'button'}
            variant={'link'}
          >
            {t.publishCommentBtn}
          </Button>
        </div>
      )}
    </>
  )
}
