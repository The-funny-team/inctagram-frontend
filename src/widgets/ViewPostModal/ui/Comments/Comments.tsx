import React from 'react'

import { CommentsViewModel } from '@/shared/api/commentsApi'
import { CommentsWithAnswers } from '@/widgets/ViewPostModal/ui/Comments/CommentWithAnswers'

import s from './Comments.module.scss'

type Props = {
  comments: CommentsViewModel[]
}

export const Comments = ({ comments }: Props) => {
  return (
    <div className={s.comments}>
      {comments.map(comment => (
        <CommentsWithAnswers comment={comment} key={comment.id} />
      ))}
    </div>
  )
}
