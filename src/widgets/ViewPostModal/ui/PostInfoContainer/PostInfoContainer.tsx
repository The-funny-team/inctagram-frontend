import React, { ChangeEvent } from 'react'

import { useTranslation } from '@/shared/lib/hooks'
import { useCalculateUpdatedInterval } from '@/shared/lib/hooks/useCalculateTimePassed'
import { Avatar, Button, TextField, Typography } from '@/shared/ui'
import { PostManageDropdown } from '@/widgets/PostManageDropdown'
import { Actions } from '@/widgets/ViewPostModal/ui/Actions/Actions'
import { Comments } from '@/widgets/ViewPostModal/ui/Comments/Comments'
import { LikesInfo } from '@/widgets/ViewPostModal/ui/LikesInfo/LikesInfo'
import Link from 'next/link'

import s from './PostInfoContainer.module.scss'

type Props = {
  avatar: string
  comments?: any
  createdAt: string
  isMyPost: boolean
  likesCount: number
  onChangeEditMode: () => void
  onOpenConfirmationDeletePostModal: () => void
  postDescription: string
  updatedAt: string
  userName: string
}

export const PostInfoContainer = ({
  avatar,
  comments = [],
  createdAt,
  isMyPost,
  likesCount,
  onChangeEditMode,
  onOpenConfirmationDeletePostModal,
  postDescription,
  updatedAt,
  userName,
}: Props) => {
  const { router, text } = useTranslation()
  const t = text.modals.viewPostModal

  const handleCommentChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    e.target.style.height = '24px'
    e.target.style.height = `${e.target.scrollHeight}px`
  }

  const timeIntervalSinceUpdated = useCalculateUpdatedInterval(updatedAt ?? createdAt)

  return (
    <div className={s.postInfoContainer}>
      <div className={s.header}>
        <Link className={s.postAuthorName} href={'/'}>
          <Avatar size={36} src={avatar} userName={userName} />
          <Typography as={'h3'} variant={'h3'}>
            {userName}
          </Typography>
        </Link>
        <PostManageDropdown
          isMyPost={isMyPost}
          onDeleteMode={onOpenConfirmationDeletePostModal}
          onEditMode={onChangeEditMode}
        />
      </div>
      <div className={s.descriptionAndComments}>
        <div className={s.description}>
          <div>
            <Avatar size={36} src={avatar} userName={userName} />
          </div>
          <div>
            <Typography as={'p'} variant={'regularText14'}>
              <Typography as={'span'} variant={'boldText14'}>
                {`${userName} `}
              </Typography>
              {postDescription}
            </Typography>
            <Typography as={'time'} className={s.postCreatedAt} variant={'smallText'}>
              {timeIntervalSinceUpdated}
            </Typography>
          </div>
        </div>
        <Comments comments={comments} />
      </div>
      <Actions />
      <div className={s.postLikes}>
        {likesCount > 0 && <LikesInfo likesCount={likesCount} />}
        <Typography as={'time'} className={s.postCreatedAt} variant={'smallText'}>
          {`${new Date(createdAt).toLocaleDateString(router.locale === 'en' ? 'en-US' : 'ru-RU', {
            day: 'numeric',
            month: 'long',
            year: 'numeric',
          })}`}
        </Typography>
      </div>
      <div className={s.sendCommentContainer}>
        <TextField
          className={s.sendCommentInput}
          onChange={handleCommentChange}
          placeholder={t.publishCommentPlaceholder}
        />
        <Button variant={'link'}>{t.publishCommentBtn}</Button>
      </div>
    </div>
  )
}
