import React from 'react'
import { Controller } from 'react-hook-form'

import { useCreateNewCommentMutation, useGetPostCommentsQuery } from '@/shared/api/commentsApi'
import { GetPostResponse } from '@/shared/api/postsApi'
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
  loggedUserId?: number | undefined
  onChangeEditMode: () => void
  onOpenConfirmationDeletePostModal: () => void
  postDescription: string
  postInfo: GetPostResponse
}

export const PostInfoContainer = ({
  loggedUserId,
  onChangeEditMode,
  onOpenConfirmationDeletePostModal,
  postDescription,
  postInfo,
}: Props) => {
  const { router, text } = useTranslation()
  const t = text.modals.viewPostModal
  const { data: postComments, refetch: getUpdatedComments } = useGetPostCommentsQuery({
    postId: postInfo.id,
  })

  const [publishComment] = useCreateNewCommentMutation()

  const {
    control,
    formState: { isValid },
    handleSubmit,
    reset,
  } = useAddComment(text.validation)

  const isUserAuthorized = loggedUserId !== undefined
  const isMyPost = postInfo.ownerId === loggedUserId

  const timeIntervalSinceUpdated = useCalculateUpdatedInterval(
    postInfo.updatedAt ?? postInfo.createdAt
  )

  const onFormSubmit = (data: AddCommentType) => {
    publishComment({ content: data.text, postId: postInfo.id })
      .unwrap()
      .then(() => {
        reset()
        getUpdatedComments()
      })
  }

  return (
    <div className={s.postInfoContainer}>
      <div className={s.header}>
        <Link className={s.postAuthorName} href={'/'}>
          <Avatar size={36} src={postInfo.avatarOwner || ''} userName={postInfo.userName} />
          <Typography as={'h3'} variant={'h3'}>
            {postInfo.userName}
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
            <Avatar size={36} src={postInfo.avatarOwner || ''} userName={postInfo.userName} />
          </div>
          <div>
            <Typography as={'p'} variant={'regularText14'}>
              <Typography as={'span'} variant={'boldText14'}>
                {`${postInfo.userName} `}
              </Typography>
              {postDescription}
            </Typography>
            <Typography as={'time'} className={s.postCreatedAt} variant={'smallText'}>
              {timeIntervalSinceUpdated}
            </Typography>
          </div>
        </div>
        <Comments comments={postComments?.items || []} />
      </div>
      <Actions />
      <div className={s.postLikes}>
        <LikesInfo likesCount={postInfo.likesCount} />
        <Typography as={'time'} className={s.postCreatedAt} variant={'smallText'}>
          {`${new Date(postInfo.createdAt).toLocaleDateString(
            router.locale === 'en' ? 'en-US' : 'ru-RU',
            {
              day: 'numeric',
              month: 'long',
              year: 'numeric',
            }
          )}`}
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

        <Button disabled={!isValid} type={'submit'} variant={'link'}>
          {t.publishCommentBtn}
        </Button>
      </form>
    </div>
  )
}
