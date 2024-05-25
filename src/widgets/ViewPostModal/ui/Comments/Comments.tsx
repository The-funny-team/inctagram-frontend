import React from 'react'

import { LikeOutlineIcon } from '@/shared/assets'
import { useTranslation } from '@/shared/lib/hooks'
import { Avatar, Typography } from '@/shared/ui'

import styles from './Comments.module.scss'

type Props = {
  comments: any
}

export const Comments = ({ comments }: Props) => {
  const { text } = useTranslation()
  const t = text.modals.viewPostModal

  return (
    <ul className={styles.comments}>
      {comments.map(comment => (
        <li className={styles.commentWrapper} key={comment.id}>
          <div className={styles.comment}>
            <div>
              <Avatar size={36} src={comment.avatar} userName={comment.userName} />
            </div>
            <div>
              <Typography as={'p'} variant={'regularText14'}>
                <Typography as={'span'} variant={'boldText14'}>
                  {`${comment.userName} `}
                </Typography>
                {comment.comment}
              </Typography>
              <div>
                <Typography as={'time'} className={styles.commentCreatedAt} variant={'smallText'}>
                  {comment.createdAt}
                </Typography>
                <button className={styles.answerBtn}>
                  <Typography as={'span'} variant={'semiBoldSmallText'}>
                    {t.answer}
                  </Typography>
                </button>
              </div>
            </div>
          </div>
          <span className={styles.commentLike}>
            <LikeOutlineIcon />
          </span>
        </li>
      ))}
    </ul>
  )
}
