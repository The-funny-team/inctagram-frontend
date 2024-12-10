import React from 'react'
import { Controller } from 'react-hook-form'

import { useCreateNewCommentMutation } from '@/shared/api/commentsApi'
import { useTranslation } from '@/shared/lib/hooks'
import { useCalculateUpdatedInterval } from '@/shared/lib/hooks/useCalculateTimePassed'
import { Avatar, Button, TextField, Typography } from '@/shared/ui'
import { PostManageDropdown } from '@/widgets/PostManageDropdown'
import { Actions } from '@/widgets/ViewPostModal/ui/Actions/Actions'
import { Comments } from '@/widgets/ViewPostModal/ui/Comments/Comments'
import { LikesInfo } from '@/widgets/ViewPostModal/ui/LikesInfo/LikesInfo'
import { useAddComment } from '@/widgets/ViewPostModal/ui/PostInfoContainer/services'
import { AddCommentType } from '@/widgets/ViewPostModal/ui/PostInfoContainer/services/addCommentSchema'
import Link from 'next/link'

import s from './PostInfoContainer.module.scss'

type Props = {
  avatar: string
  comments?: any
  createdAt: string
  likesCount?: number
  loggedUserId: number | undefined
  onChangeEditMode: () => void
  onOpenConfirmationDeletePostModal: () => void
  ownerId: number
  postDescription: string
  postId: number
  updatedAt: string
  userName: string
}

export const PostInfoContainer = ({
  avatar,
  comments = [],
  createdAt,
  likesCount,
  loggedUserId,
  onChangeEditMode,
  onOpenConfirmationDeletePostModal,
  ownerId,
  postDescription,
  postId,
  updatedAt,
  userName,
}: Props) => {
  const { router, text } = useTranslation()
  const t = text.modals.viewPostModal

  const [publishComment] = useCreateNewCommentMutation()

  const {
    control,
    formState: { isValid },
    handleSubmit,
    reset,
  } = useAddComment(text.validation)

  const isUserAuthorized = loggedUserId !== undefined
  const isMyPost = ownerId === loggedUserId

  const timeIntervalSinceUpdated = useCalculateUpdatedInterval(updatedAt ?? createdAt)

  const onFormSubmit = (data: AddCommentType) => {
    publishComment({ content: data.text, postId: postId })
      .unwrap()
      .then(() => {
        reset()
      })
  }

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
        {likesCount && <LikesInfo likesCount={likesCount} />}
        <Typography as={'time'} className={s.postCreatedAt} variant={'smallText'}>
          {`${new Date(createdAt).toLocaleDateString(router.locale === 'en' ? 'en-US' : 'ru-RU', {
            day: 'numeric',
            month: 'long',
            year: 'numeric',
          })}`}
        </Typography>
      </div>
      <form className={s.sendCommentContainer} onSubmit={handleSubmit(onFormSubmit)}>
        <Controller
          control={control}
          name={'text'}
          render={({ field }) => (
            <TextField
              className={s.sendCommentInput}
              disabled={!isUserAuthorized}
              placeholder={t.publishCommentPlaceholder}
              {...field}
            />
          )}
        />

        <Button disabled={!isValid || !isUserAuthorized} type={'submit'} variant={'link'}>
          {t.publishCommentBtn}
        </Button>
      </form>
    </div>
  )
}
