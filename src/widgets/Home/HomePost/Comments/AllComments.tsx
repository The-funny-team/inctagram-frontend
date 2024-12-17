import { useState } from 'react'

import { CommentsViewModel, useCreateNewCommentMutation } from '@/shared/api/commentsApi'
import { useTranslation } from '@/shared/lib/hooks'
import { Button, Input, Typography } from '@/shared/ui'

import s from './AllComments.module.scss'

type Props = {
  comments: CommentsViewModel[]
  postId: number
  updateCommentsCount: () => void
}

const minLength = 1
const maxLength = 300

export const AllComments = ({ comments, postId, updateCommentsCount }: Props) => {
  const { text } = useTranslation()
  const t = text.pages.home
  const [commentValue, setCommentValue] = useState<string>('')
  const [publishComment] = useCreateNewCommentMutation()

  const isValidLength = commentValue.length > minLength && commentValue.length < maxLength

  const onPublishComment = (comment: string) => {
    publishComment({ content: comment, postId: postId })
      .unwrap()
      .then(() => {
        setCommentValue('')
        updateCommentsCount()
      })
  }

  return (
    <div className={s.commentsWrapper}>
      <div className={s.commentsCount}>
        <Typography className={s.commentsText} variant={'boldText14'}>
          {t.viewComments} ( {comments.length} )
        </Typography>
      </div>
      <div className={s.commentsInput}>
        <Input
          maxLength={maxLength}
          minLength={minLength}
          onChange={e => setCommentValue(e.currentTarget.value)}
          placeholder={t.placeholder}
          type={'text'}
          value={commentValue}
        />
        <Button
          className={s.commentsButton}
          disabled={!isValidLength}
          onClick={() => onPublishComment(commentValue)}
          variant={'link'}
        >
          {t.publicComment}
        </Button>
      </div>
    </div>
  )
}
