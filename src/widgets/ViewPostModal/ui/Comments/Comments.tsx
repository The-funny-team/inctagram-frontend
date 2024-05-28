import React from 'react'

import { LikeOutlineIcon } from '@/shared/assets'
import { useTranslation } from '@/shared/lib/hooks'
import { Avatar, Typography } from '@/shared/ui'

import s from './Comments.module.scss'

type CommentType = {
  avatar: string
  createdAt: string
  id: string
  text: string
  userName: string
}

type Props = {
  comments: CommentType[]
}

export const Comments = ({ comments }: Props) => {
  const { text } = useTranslation()
  const t = text.modals.viewPostModal

  return (
    <ul className={s.comments}>
      {comments.map((comment: CommentType) => (
        <li className={s.commentWrapper} key={comment.id}>
          <div className={s.comment}>
            <div>
              <Avatar size={36} src={comment.avatar} userName={comment.userName} />
            </div>
            <div>
              <Typography as={'p'} variant={'regularText14'}>
                <Typography as={'span'} variant={'boldText14'}>
                  {`${comment.userName} `}
                </Typography>
                {comment.text}
              </Typography>
              <div>
                <Typography as={'time'} className={s.commentCreatedAt} variant={'smallText'}>
                  {comment.createdAt}
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
