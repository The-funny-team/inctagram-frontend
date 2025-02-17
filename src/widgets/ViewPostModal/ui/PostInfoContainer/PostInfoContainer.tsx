import React from 'react'
import { Controller } from 'react-hook-form'

import { useCreateNewCommentMutation, useGetPostCommentsQuery } from '@/shared/api/commentsApi'
import { GetPostResponse } from '@/shared/api/postsApi'
import { useGetTimeAgo, useTranslation } from '@/shared/lib/hooks'
import { Avatar, Button, TextField, Typography } from '@/shared/ui'
import { PostManageDropdown } from '@/widgets/PostManageDropdown'
import Link from 'next/link'

import s from './PostInfoContainer.module.scss'

import { Actions } from '../Actions'
import { Comments } from '../Comments'
import { LikesInfo } from '../LikesInfo'
import { useAddComment } from './services'
import { AddCommentType } from './services/addCommentSchema'

type Props = {
  isAuth: boolean
  isFollowing?: boolean
  loggedUserId?: number
  onChangeEditMode: () => void
  onOpenConfirmationDeletePostModal: () => void
  postDescription: string
  postInfo: GetPostResponse
}

export const PostInfoContainer = ({
  isAuth,
  isFollowing,
  loggedUserId,
  onChangeEditMode,
  onOpenConfirmationDeletePostModal,
  postDescription,
  postInfo,
}: Props) => {
  const { text } = useTranslation()
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
  const timeAgo = useGetTimeAgo(postInfo.updatedAt)

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
        {isAuth && (
          <PostManageDropdown
            isMyFollowing={isFollowing}
            isMyPost={isMyPost}
            onDeleteMode={onOpenConfirmationDeletePostModal}
            onEditMode={onChangeEditMode}
            ownerId={postInfo.ownerId}
          />
        )}
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
              {timeAgo}
            </Typography>
          </div>
        </div>
        <Comments comments={postComments?.items || []} />
      </div>
      <div className={s.actionsContainer}>
        <Actions isMyPost={isMyPost} postId={postInfo.id} />
      </div>
      <div className={s.postLikes}>
        <LikesInfo postId={postInfo.id} />
        <Typography as={'time'} className={s.postCreatedAt} variant={'smallText'}>
          {timeAgo}
        </Typography>
      </div>
      {isAuth && (
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
      )}
    </div>
  )
}
