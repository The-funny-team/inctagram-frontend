import React from 'react'

import { FavoritesIcon, LikeOutlineIcon, ShareIcon } from '@/shared/assets'
import { Avatar, Input, ModalRadix, Typography } from '@/shared/ui'
import { Slider } from '@/widgets/CreatePost/ui/Slider'
import { PostManageDropdown } from '@/widgets/PostManageDropdown'
import Image from 'next/image'
import Link from 'next/link'

import styles from './ViewPostModal.module.scss'

type Props = {
  avatar: string
  comments: any
  createdAt: string
  description: string
  imageUrls: string[]
  isMyPost: boolean
  likesCount: number
  userName: string
}

export const ViewPostModal = ({
  avatar,
  comments,
  createdAt,
  description,
  imageUrls,
  isMyPost,
  likesCount,
  userName,
}: Props) => {
  return (
    <ModalRadix
      className={styles.modal}
      trigger={
        <Image
          alt={'post image'}
          height={228}
          src={imageUrls[0]}
          style={{ borderRadius: '2px' }}
          width={234}
        />
      }
    >
      <>
        <div className={styles.leftSide}>
          <Slider sliderLength={imageUrls.length}>
            {imageUrls.map(url => (
              <Image
                alt={'post image'}
                height={580}
                key={url}
                objectFit={'contain'}
                src={url}
                width={490}
              />
            ))}
          </Slider>
        </div>
        <div className={styles.rightSide}>
          <div className={styles.header}>
            <Link className={styles.userName} href={'/'}>
              <Avatar size={36} src={avatar} userName={userName} />
              <Typography as={'h3'} variant={'h3'}>
                {userName}
              </Typography>
            </Link>
            <PostManageDropdown isMyPost={isMyPost} />
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
                  {description}
                </Typography>
                <Typography as={'time'} className={styles.postCreatedAt} variant={'smallText'}>
                  2 hours ago
                </Typography>
              </div>
            </div>
            <div className={styles.comments}>
              {comments.map((comment, index) => (
                <div className={styles.commentWrapper} key={index}>
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
                </div>
              ))}
            </div>
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
      </>
    </ModalRadix>
  )
}
