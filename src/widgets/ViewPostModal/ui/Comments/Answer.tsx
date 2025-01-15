import React, { useEffect, useState } from 'react'

import { AnswersViewModel, useUpdateAnswerLikeStatusMutation } from '@/shared/api/commentsApi'
import { LikeIcon, LikeOutlineIcon } from '@/shared/assets'
import { useTranslation } from '@/shared/lib/hooks'
import { Avatar, Typography } from '@/shared/ui'
import { formatDistanceToNowStrict, parseISO } from 'date-fns'
import { enUS, ru } from 'date-fns/locale'
import { useRouter } from 'next/router'

import s from './Comments.module.scss'

type Props = {
  answer: AnswersViewModel
  postId: number
}

export const Answer = ({ answer, postId }: Props) => {
  const { locale } = useRouter()
  const [timeAgo, setTimeAgo] = useState<null | string>(null)

  const [isLiked, setIsLiked] = useState<boolean>(answer.isLiked)
  const [updateLikeAnswerStatus] = useUpdateAnswerLikeStatusMutation()
  const toggleLikeAnswer = () => {
    updateLikeAnswerStatus({
      answerId: answer.id,
      commentId: answer.commentId,
      likeStatus: isLiked ? 'NONE' : 'LIKE',
      postId,
    })
      .unwrap()
      .then(() => {
        setIsLiked(prevState => !prevState)
      })
  }

  useEffect(() => {
    setTimeAgo(
      formatDistanceToNowStrict(parseISO(answer.createdAt as string), {
        addSuffix: true,
        locale: locale === 'ru' ? ru : enUS,
      })
    )
  }, [locale, answer.createdAt])

  return (
    <>
      <div className={s.commentWrapper} key={answer.id}>
        <div className={s.comment}>
          <div>
            <Avatar
              size={36}
              src={answer.from.avatars.length !== 0 ? answer.from.avatars[0].url : ''}
              userName={answer.from.username}
            />
          </div>
          <div>
            <Typography as={'span'} variant={'boldText14'}>
              {`${answer.from.username} `}
            </Typography>
            <Typography as={'span'} variant={'regularText14'}>
              {answer.content}
            </Typography>
            <div>
              <Typography as={'time'} className={s.commentCreatedAt} variant={'smallText'}>
                {timeAgo}
              </Typography>
            </div>
          </div>
        </div>
        <span className={s.commentLike} onClick={toggleLikeAnswer}>
          {isLiked ? <LikeIcon /> : <LikeOutlineIcon />}
        </span>
      </div>
    </>
  )
}
