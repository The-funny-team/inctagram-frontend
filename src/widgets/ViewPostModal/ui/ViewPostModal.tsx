import React, { useState } from 'react'

import { useDeletePostMutation } from '@/shared/api/postsApi'
import { FavoritesIcon, LikeOutlineIcon, ShareIcon } from '@/shared/assets'
import { ROUTES_URL } from '@/shared/const'
import { Avatar, Button, Input, ModalRadix, TextField, Typography } from '@/shared/ui'
import { ClosePostConfirmationModal } from '@/widgets/ClosePostConfirmationModal'
import { Slider } from '@/widgets/CreatePost/ui/Slider'
import { DeletePostConfirmationModal } from '@/widgets/DeletePostConfirmationModal'
import { PostManageDropdown } from '@/widgets/PostManageDropdown'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'

import styles from './ViewPostModal.module.scss'

type Props = {
  avatar: string
  comments?: any
  createdAt: string
  description: string
  id: string
  imageUrls: string[]
  isMyPost: boolean
  likesCount?: number
  userName: string
}

export const ViewPostModal = ({
  avatar,
  comments = [],
  createdAt,
  description,
  id,
  imageUrls,
  isMyPost,
  likesCount,
  userName,
}: Props) => {
  const [isEditMode, setIsEditMode] = useState<boolean>(false)
  const [isOpenPost, setIsOpenPost] = useState<boolean>(false)
  const [isOpenConfirmDeletePostModal, setIsOpenConfirmDeletePostModal] = useState<boolean>(false)
  const [isOpenConfirmCloseModal, setIsOpenConfirmCloseModal] = useState<boolean>(false)
  const [postDescription, setPostDescription] = useState<string>(description ?? '')
  const router = useRouter()

  const [deletePost, {}] = useDeletePostMutation()

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
    if (isEditMode) {
      setIsOpenConfirmCloseModal(true)
    }
  }

  const handleChangeDescription = (value: string) => {
    setPostDescription(value)
  }

  const handleSaveChanges = async () => {
    setIsEditMode(prev => !prev)
  }

  const handleOpenConfirmationDeletePostModal = () => {
    setIsOpenConfirmDeletePostModal(prev => !prev)
  }

  const handleDeletePost = async () => {
    deletePost({ id })
      .unwrap()
      .then(() => router.push(ROUTES_URL.HOME))
  }

  return (
    <ModalRadix
      className={styles.modal}
      onOpenChange={handlePostModalState}
      open={isOpenPost}
      title={isEditMode ? 'Edit Post' : undefined}
      trigger={
        <Image
          alt={'post image'}
          height={228}
          src={imageUrls[0]}
          style={{ borderRadius: '2px' }}
          width={234}
        />
      }
      triggerClassName={styles.triggerClassName}
    >
      {isEditMode ? (
        <div className={styles.postContent}>
          <div className={styles.sliderContainerEdit}>
            <Slider sliderLength={imageUrls.length}>
              {imageUrls.map(url => (
                <div className={styles.imageContainerEdit} key={url}>
                  <Image
                    alt={'post image'}
                    fill
                    key={url}
                    sizes={'490px'}
                    src={url}
                    style={{ objectFit: 'contain' }}
                  />
                </div>
              ))}
            </Slider>
          </div>
          <div className={styles.editContainer}>
            <div>
              <Link className={styles.postAuthorName} href={'/'}>
                <Avatar size={36} src={avatar} userName={userName} />
                <Typography as={'h3'} variant={'h3'}>
                  {userName}
                </Typography>
              </Link>
              <TextField
                className={styles.editInput}
                onValueChange={handleChangeDescription}
                value={postDescription}
              />
            </div>
            <Button className={styles.saveChangesBtn} onClick={handleSaveChanges}>
              Save Changes
            </Button>
          </div>
          <ClosePostConfirmationModal
            onCancelChanges={handleCancelChanges}
            onOpenChange={handleCloseConfirmation}
            open={isOpenConfirmCloseModal}
          />
        </div>
      ) : (
        <div className={styles.postContent}>
          <div className={styles.sliderContainer}>
            <Slider sliderLength={imageUrls.length}>
              {imageUrls.map(url => (
                <div className={styles.imageContainer} key={url}>
                  <Image
                    alt={'post image'}
                    fill
                    sizes={'490px'}
                    src={url}
                    style={{ objectFit: 'contain' }}
                  />
                </div>
              ))}
            </Slider>
          </div>
          <div className={styles.postInfoContainer}>
            <div className={styles.header}>
              <Link className={styles.postAuthorName} href={'/'}>
                <Avatar size={36} src={avatar} userName={userName} />
                <Typography as={'h3'} variant={'h3'}>
                  {userName}
                </Typography>
              </Link>
              <PostManageDropdown
                isMyPost={isMyPost}
                onDeleteMode={handleOpenConfirmationDeletePostModal}
                onEditMode={handleChangeEditMode}
              />
            </div>
            <div className={styles.descriptionAndComments}>
              <div className={styles.description}>
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
                  <Typography as={'time'} className={styles.postCreatedAt} variant={'smallText'}>
                    2 hours ago
                  </Typography>
                </div>
              </div>
              <ul className={styles.comments}>
                {comments.map((comment, index) => (
                  <li className={styles.commentWrapper} key={index}>
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
                          <Typography
                            as={'time'}
                            className={styles.commentCreatedAt}
                            variant={'smallText'}
                          >
                            {comment.createdAt}
                          </Typography>
                          <button className={styles.answerBtn}>
                            <Typography as={'span'} variant={'semiBoldSmallText'}>
                              Answer
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
            </div>
            <div className={styles.actions}>
              <div className={styles.likeAndShareContainer}>
                <span className={styles.likePostIcon}>
                  <LikeOutlineIcon />
                </span>
                <span className={styles.sharePostIcon}>
                  <ShareIcon />
                </span>
              </div>
              <span className={styles.favoritesIcon}>
                <FavoritesIcon />
              </span>
            </div>
            <div className={styles.postLikes}>
              <div className={styles.avatarsLikes}>
                <Avatar
                  className={styles.avatarLikesOne}
                  size={24}
                  src={comments[0].avatar}
                  userName={comments[0].userName}
                />
                <Avatar
                  className={styles.avatarLikesTwo}
                  size={24}
                  src={comments[1].avatar}
                  userName={comments[1].userName}
                />
                <Avatar
                  className={styles.avatarLikesThree}
                  size={24}
                  src={comments[2].avatar}
                  userName={comments[2].userName}
                />
                <div className={styles.likesCount}>
                  <Typography as={'span'} variant={'regularText14'}>
                    {`${likesCount} `}
                    <Typography as={'span'} variant={'boldText14'}>
                      &quot;Like&quot;
                    </Typography>
                  </Typography>
                </div>
              </div>
              <Typography as={'time'} className={styles.postCreatedAt} variant={'smallText'}>
                {`"${createdAt}"`}
              </Typography>
            </div>
            <div className={styles.sendCommentContainer}>
              <Input
                className={styles.sendCommentInput}
                placeholder={'Add a Comment...'}
                type={'text'}
              />
              <Typography as={'h3'} className={styles.publishBtn}>
                Publish
              </Typography>
            </div>
          </div>
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
