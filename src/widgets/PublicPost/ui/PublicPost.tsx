import React, { useEffect, useRef, useState } from 'react'

import { GetPostResponse } from '@/shared/api/postsApi'
import { ROUTES_URL } from '@/shared/const'
import { Avatar, PublicPostDescription, Typography } from '@/shared/ui'
import { Slider } from '@/widgets/CreatePost/ui/Slider'
import clsx from 'clsx'
import { formatDistanceToNowStrict, parseISO } from 'date-fns'
import { enUS, ru } from 'date-fns/locale'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'

import s from './PublicPost.module.scss'

export const PublicPost = (props: GetPostResponse) => {
  const { author, description, id, imagesUrl, updatedAt } = props
  const { locale } = useRouter()
  const [isExpanded, setIsExpanded] = useState(false)
  const contentRef = useRef<HTMLDivElement>(null)
  const [height, setHeight] = useState(72)

  const timeAgo = formatDistanceToNowStrict(parseISO(updatedAt as string), {
    addSuffix: true,
    locale: locale === 'ru' ? ru : enUS,
  })

  const handleToggle = () => {
    setIsExpanded(prev => !prev)
  }

  useEffect(() => {
    if (isExpanded && contentRef.current) {
      setHeight(contentRef.current?.scrollHeight)
    } else {
      setHeight(72)
    }
  }, [height, isExpanded])

  const top = 240 - (height - 72)
  const topStyle = !isExpanded ? `240px` : `${top}px`

  return (
    <div className={s.post}>
      <div className={s.slider}>
        <Slider isDots={imagesUrl.length > 1} sliderLength={imagesUrl.length}>
          {imagesUrl.map((photo: string) => (
            <Image
              alt={'post image'}
              className={s.image}
              height={240}
              key={photo}
              src={photo}
              width={234}
            />
          ))}
        </Slider>
      </div>
      <div className={clsx(s.postInfo, { [s.expanded]: isExpanded })} style={{ top: topStyle }}>
        <Link href={`${ROUTES_URL.PUBLIC_PROFILE}/${author.id}`} style={{ textDecoration: 'none' }}>
          <div style={{ alignItems: 'center', display: 'flex', gap: '13px' }}>
            <Avatar size={36} src={author.avatarUrl} userName={author.name} />
            <Typography as={'h3'} className={s.userName} variant={'h3'}>
              {author.name}
            </Typography>
          </div>
        </Link>
        <Typography as={'p'} className={s.date}>
          {timeAgo}
        </Typography>
        <div ref={contentRef}>
          <PublicPostDescription
            descriptionMaxLength={80}
            isFullText={isExpanded}
            toggleText={handleToggle}
          >
            {description}
          </PublicPostDescription>
        </div>
      </div>
    </div>
  )
}
