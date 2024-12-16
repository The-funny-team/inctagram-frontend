import { useEffect, useState } from 'react'

import { GetPostResponse } from '@/shared/api/postsApi'
import { DotSmallIcon } from '@/shared/assets'
import { Avatar, Typography } from '@/shared/ui'
import { PostManageDropdown } from '@/widgets/PostManageDropdown'
import { formatDistanceToNowStrict, parseISO } from 'date-fns'
import { enUS, ru } from 'date-fns/locale'
import { useRouter } from 'next/router'

import s from './HomePost.module.scss'

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
    </div>
  )
}
