import { useGetPostCommentsQuery } from '@/shared/api/commentsApi'
import { GetPublicationsResponseItem } from '@/shared/api/postsApi'
import { DotSmallIcon } from '@/shared/assets'
import { useGetTimeAgo } from '@/shared/lib/hooks'
import { Avatar, Typography } from '@/shared/ui'
import { Slider } from '@/widgets/CreatePost/ui/Slider'
import { PostManageDropdown } from '@/widgets/PostManageDropdown'
import { Actions } from '@/widgets/ViewPostModal/ui/Actions'
import Image from 'next/image'

import s from './HomePost.module.scss'

import { AllComments } from './Comments'
import { Likes } from './Likes'

type Props = {
  post: GetPublicationsResponseItem
}
export const HomePost = ({ post }: Props) => {
  const timeAgo = useGetTimeAgo(post.createdAt)

  const { data: postComments, refetch: getUpdatedComments } = useGetPostCommentsQuery({
    postId: post.id,
  })

  return (
    <div className={s.postWrapper}>
      <div className={s.postHeader}>
        <div className={s.postHeaderLeft}>
          <Avatar size={36} src={post.avatarOwner} userName={post.userName} />
          <Typography variant={'boldText16'}>{post.userName}</Typography>
          <DotSmallIcon />
          <Typography className={s.postDate} variant={'smallText'}>
            {timeAgo}
          </Typography>
        </div>
        <PostManageDropdown
          isMyFollowing
          isMyPost={false}
          onDeleteMode={() => {}}
          onEditMode={() => {}}
          ownerId={post.ownerId}
        />
      </div>
      <div className={s.postSlider}>
        <Slider isDots={post.images.length > 1} sizeBtn={48} sliderLength={post.images.length}>
          {post.images.map(photo => (
            <Image alt={'post-item'} height={500} key={photo.url} src={photo.url} width={490} />
          ))}
        </Slider>
      </div>
      <div className={s.actions}>
        <Actions isMyPost={false} postId={post.id} />
      </div>
      <div className={s.postInfo}>
        <Avatar size={36} src={post.avatarOwner} userName={post.userName} />
        <div className={s.description}>
          <Typography variant={'regularText14'}>
            <Typography as={'span'} variant={'boldText14'}>
              {post.userName}
            </Typography>
            {post.description}
          </Typography>
        </div>
      </div>
      <Likes avatarsWhoLiked={post.avatarWhoLikes} likesCount={post.likesCount} />
      <AllComments
        comments={postComments?.items || []}
        postId={post.id}
        updateCommentsCount={getUpdatedComments}
      />
    </div>
  )
}
