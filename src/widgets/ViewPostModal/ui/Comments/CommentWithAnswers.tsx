import React, { useState } from 'react'

import { CommentsViewModel, useGetAnswersToPostCommentQuery } from '@/shared/api/commentsApi'
import { useTranslation } from '@/shared/lib/hooks'
import { Typography } from '@/shared/ui'
import { Answer } from '@/widgets/ViewPostModal/ui/Comments/Answer'
import { Comment } from '@/widgets/ViewPostModal/ui/Comments/Comment'

import s from './Comments.module.scss'

type Props = {
  comment: CommentsViewModel
}

export const CommentsWithAnswers = ({ comment }: Props) => {
  const { text } = useTranslation()
  const t = text.modals.viewPostModal
  const { data: answersToComment } = useGetAnswersToPostCommentQuery({
    commentId: comment.id,
    postId: comment.postId,
  })
  const [isShowAnswers, setIsShowAnswers] = useState(true)

  const toggleShowAnswer = () => {
    setIsShowAnswers(!isShowAnswers)
  }

  return (
    <div className={s.commentsWithAnswers}>
      <Comment comment={comment} />
      <div className={s.answers}>
        {answersToComment &&
          answersToComment.items.length !== 0 &&
          (isShowAnswers ? (
            <div>
              <Typography onClick={toggleShowAnswer} variant={'semiBoldSmallText'}>
                {t.hideAnswers} ({answersToComment.items.length})
              </Typography>
              {answersToComment.items.map(answer => (
                <Answer answer={answer} key={answer.id} postId={comment.postId} />
              ))}{' '}
            </div>
          ) : (
            <Typography onClick={toggleShowAnswer} variant={'semiBoldSmallText'}>
              {t.showAnswers} ({answersToComment.items.length})
            </Typography>
          ))}
      </div>
    </div>
  )
}
