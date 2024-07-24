import React, { useState } from 'react'

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

type AddPropsType = {
  comments?: any
  isMyPost: boolean
  isOpen?: boolean
  likesCount?: number
}
type PropsType = GetPostResponse & AddPropsType

export const ViewPostModal = ({
  author,
  comments,
  createdAt,
  description,
  id,
  imagesUrl,
  isMyPost,
  isOpen = false,
  likesCount,
  updatedAt,
}: PropsType) => {
  const [isEditMode, setIsEditMode] = useState<boolean>(false)
  const [isOpenPost, setIsOpenPost] = useState<boolean>(isOpen)
  const [isOpenConfirmDeletePostModal, setIsOpenConfirmDeletePostModal] = useState<boolean>(false)
  const [isOpenConfirmCloseModal, setIsOpenConfirmCloseModal] = useState<boolean>(false)
  const [postDescription, setPostDescription] = useState<string>(description ?? '')

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
    setPostDescription(description)
  }

  const handlePostModalState = () => {
    if (!isOpenPost) {
      setIsOpenPost(true)
    }
    if (isOpenPost && !isEditMode) {
      setIsOpenPost(false)
    }
    if (isEditMode && description !== postDescription) {
      setIsOpenConfirmCloseModal(true)
    } else {
      setIsEditMode(false)
    }
  }

  const handleChangeDescription = (value: string) => {
    setPostDescription(value)
  }

  const handleSaveChanges = async () => {
    updatePost({ description: postDescription, id })
      .unwrap()
      .then(() => {
        setIsEditMode(prev => !prev)
      })
  }

  const handleOpenConfirmationDeletePostModal = () => {
    setIsOpenConfirmDeletePostModal(prev => !prev)
  }

  const handleDeletePost = async () => {
    deletePost({ id })
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
          src={imagesUrl[0]}
          style={{ borderRadius: '2px', objectFit: 'cover' }}
          width={234}
        />
      }
      triggerClassName={s.triggerClassName}
    >
      {isEditMode ? (
        <div className={s.main}>
          <SliderContainer imageUrls={imagesUrl} />
          <EditContainer
            avatar={author.avatarUrl}
            description={description}
            onChangeDescription={handleChangeDescription}
            onSaveChanges={handleSaveChanges}
            postDescription={postDescription}
            userName={author.name}
          />
          <ClosePostConfirmationModal
            onCancelChanges={handleCancelChanges}
            onOpenChange={handleCloseConfirmation}
            open={isOpenConfirmCloseModal}
          />
        </div>
      ) : (
        <div className={s.main}>
          <SliderContainer imageUrls={imagesUrl} />
          <PostInfoContainer
            avatar={author.avatarUrl}
            comments={comments}
            createdAt={createdAt}
            isMyPost={isMyPost}
            likesCount={likesCount}
            onChangeEditMode={handleChangeEditMode}
            onOpenConfirmationDeletePostModal={handleOpenConfirmationDeletePostModal}
            postDescription={postDescription}
            updatedAt={updatedAt}
            userName={author.name}
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
