import React, { useState } from 'react'

import { useGetUserProfileQuery } from '@/shared/api/followApi'
import {
  GetPostResponse,
  useDeletePostMutation,
  useUpdatePostMutation,
} from '@/shared/api/postsApi'
import { useTranslation } from '@/shared/lib/hooks'
import { ModalRadix } from '@/shared/ui'
import { ClosePostConfirmationModal } from '@/widgets/ClosePostConfirmationModal'
import { DeletePostConfirmationModal } from '@/widgets/DeletePostConfirmationModal'
import { EditContainer } from '@/widgets/ViewPostModal/ui/EditContainer/EditContainer'
import { PostInfoContainer } from '@/widgets/ViewPostModal/ui/PostInfoContainer/PostInfoContainer'
import { SliderContainer } from '@/widgets/ViewPostModal/ui/SliderContainer/SliderContainer'
import Image from 'next/image'

import s from './ViewPostModal.module.scss'

type PropsType = {
  isAuth: boolean
  post: GetPostResponse
}

export const ViewPostModal = ({ isAuth, post }: PropsType) => {
  const [isEditMode, setIsEditMode] = useState<boolean>(false)
  const [isOpenPost, setIsOpenPost] = useState<boolean>(false)
  const [isOpenConfirmDeletePostModal, setIsOpenConfirmDeletePostModal] = useState<boolean>(false)
  const [isOpenConfirmCloseModal, setIsOpenConfirmCloseModal] = useState<boolean>(false)
  const [postDescription, setPostDescription] = useState<string>(post?.description || '')
  const { data: postOwner } = useGetUserProfileQuery({ userName: post.userName })

  const { text } = useTranslation()
  const t = text.modals.viewPostModal

  const [deletePost, {}] = useDeletePostMutation()

  const [updatePost, {}] = useUpdatePostMutation()

  const handleChangeEditMode = () => {
    setIsEditMode(true)
  }

  const handleCloseConfirmation = () => {
    setIsOpenConfirmCloseModal(prev => !prev)
  }

  const handleCancelChanges = () => {
    setIsOpenConfirmCloseModal(prev => !prev)
    setIsEditMode(false)
    setPostDescription(post?.description)
  }

  const handlePostModalState = () => {
    if (!isOpenPost) {
      setIsOpenPost(true)
    }
    if (isOpenPost && !isEditMode) {
      setIsOpenPost(false)
    }
    if (isEditMode && post?.description !== postDescription) {
      setIsOpenConfirmCloseModal(true)
    } else {
      setIsEditMode(false)
    }
  }

  const handleChangeDescription = (value: string) => {
    setPostDescription(value)
  }

  const handleSaveChanges = async () => {
    updatePost({ description: postDescription, postId: post.id })
      .unwrap()
      .then(() => {
        setIsEditMode(prev => !prev)
      })
  }

  const handleOpenConfirmationDeletePostModal = () => {
    setIsOpenConfirmDeletePostModal(prev => !prev)
  }

  const handleDeletePost = async () => {
    deletePost({ postId: post.id })
  }

  if (!post) {
    return <div>Loading post...</div>
  }

  if (!postOwner) {
    return null
  }

  return (
    <ModalRadix
      className={s.modal}
      onOpenChange={handlePostModalState}
      open={isOpenPost}
      title={isEditMode ? t.editHeader : undefined}
      trigger={
        <Image
          alt={'post image'}
          height={228}
          src={post?.images[0].url || ''}
          style={{ borderRadius: '2px', objectFit: 'cover' }}
          width={234}
        />
      }
      triggerClassName={s.triggerClassName}
    >
      {isEditMode ? (
        <div className={s.main}>
          <SliderContainer imageUrls={post.images} />
          <EditContainer
            avatar={post.avatarOwner}
            description={post.description}
            onChangeDescription={handleChangeDescription}
            onSaveChanges={handleSaveChanges}
            postDescription={postDescription}
            userName={post.userName}
          />
          <ClosePostConfirmationModal
            onCancelChanges={handleCancelChanges}
            onOpenChange={handleCloseConfirmation}
            open={isOpenConfirmCloseModal}
          />
        </div>
      ) : (
        <div className={s.main}>
          <SliderContainer imageUrls={post?.images || []} />
          <PostInfoContainer
            isAuth={isAuth}
            isFollowing={postOwner.isFollowing}
            onChangeEditMode={handleChangeEditMode}
            onOpenConfirmationDeletePostModal={handleOpenConfirmationDeletePostModal}
            postDescription={postDescription}
            postInfo={post}
          />
          <DeletePostConfirmationModal
            onDeletePost={handleDeletePost}
            onOpenChange={handleOpenConfirmationDeletePostModal}
            open={isOpenConfirmDeletePostModal}
          />
        </div>
      )}
    </ModalRadix>
  )
}
