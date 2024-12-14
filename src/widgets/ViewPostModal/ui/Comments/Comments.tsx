import React from 'react'

import { CommentsViewModel } from '@/shared/api/commentsApi'
import { LikeOutlineIcon } from '@/shared/assets'
import { useTranslation } from '@/shared/lib/hooks'
import { useCalculateUpdatedInterval } from '@/shared/lib/hooks/useCalculateTimePassed'
import { Avatar, Typography } from '@/shared/ui'

import s from './Comments.module.scss'

// type CommentType = {
//   avatar: string
//   createdAt: string
//   id: string
//   text: string
//   userName: string
// }

type Props = {
  comments: CommentsViewModel[]
}

export const Comments = ({ comments }: Props) => {
  const { text } = useTranslation()
  const t = text.modals.viewPostModal

  return (
    <ul className={s.comments}>
      {comments.map(comment => (
        <li className={s.commentWrapper} key={comment.id}>
          <div className={s.comment}>
            <div>
              <Avatar
                size={36}
                src={comment.from.avatars.length !== 0 ? comment.from.avatars[0].url : ''}
                userName={comment.from.username}
              />
            </div>
            <div>
              <Typography as={'p'} variant={'regularText14'}>
                <Typography as={'span'} variant={'boldText14'}>
                  {`${comment.from.username} `}
                </Typography>
                {comment.content}
              </Typography>
              <div>
                <Typography as={'time'} className={s.commentCreatedAt} variant={'smallText'}>
                  {`${useCalculateUpdatedInterval(comment.createdAt)} ago`}
                </Typography>
                <button className={s.answerBtn}>
                  <Typography as={'span'} variant={'semiBoldSmallText'}>
                    {t.answer}
                  </Typography>
                </button>
              </div>
            </div>
          </div>
          <span className={s.commentLike}>
            <LikeOutlineIcon />
          </span>
        </li>
      ))}
    </ul>
  )
}
