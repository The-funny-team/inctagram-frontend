import { useEffect, useState } from 'react'

import { GetPostResponse } from '@/shared/api/postsApi'
import { DotSmallIcon } from '@/shared/assets'
import { Avatar, Typography } from '@/shared/ui'
import { Slider } from '@/widgets/CreatePost/ui/Slider'
import { PostManageDropdown } from '@/widgets/PostManageDropdown'
import { formatDistanceToNowStrict, parseISO } from 'date-fns'
import { enUS, ru } from 'date-fns/locale'
import Image from 'next/image'
import { useRouter } from 'next/router'

import s from './HomePost.module.scss'

import { Actions } from './Actions'

type Props = {
  post: GetPostResponse
}
export const HomePost = ({ post }: Props) => {
  const { locale } = useRouter()
  const [timeAgo, setTimeAgo] = useState<null | string>(null)

  useEffect(() => {
    setTimeAgo(
      formatDistanceToNowStrict(parseISO(post.createdAt as string), {
        addSuffix: true,
        locale: locale === 'ru' ? ru : enUS,
      })
    )
  }, [locale, post.createdAt])

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
        <PostManageDropdown isMyPost={false} onDeleteMode={() => {}} onEditMode={() => {}} />
      </div>
      <div className={s.postSlider}>
        <Slider isDots={post.images.length > 1} sizeBtn={48} sliderLength={post.images.length}>
          {post.images.map(photo => (
            <Image alt={'post-item'} height={500} key={photo.url} src={photo.url} width={490} />
          ))}
        </Slider>
      </div>
      <Actions isLiked={post.isLiked} />
    </div>
  )
}
