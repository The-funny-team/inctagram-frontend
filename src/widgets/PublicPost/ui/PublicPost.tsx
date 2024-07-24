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

const DESCRIPTION_SIZES = {
  length: 80,
  maxHeight: 240,
  minHeight: 72,
}

export const PublicPost = (props: GetPostResponse) => {
  const { author, description, id, imagesUrl, updatedAt } = props
  const { locale } = useRouter()
  const [isExpanded, setIsExpanded] = useState(false)
  const contentRef = useRef<HTMLDivElement>(null)
  const [height, setHeight] = useState(DESCRIPTION_SIZES.minHeight)

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
      setHeight(DESCRIPTION_SIZES.minHeight)
    }
  }, [height, isExpanded])

  const top = DESCRIPTION_SIZES.maxHeight - (height - DESCRIPTION_SIZES.minHeight)
  const topStyle = !isExpanded ? `${DESCRIPTION_SIZES.maxHeight}px` : `${top}px`

  return (
    <div className={s.post}>
      <div className={s.slider}>
        <Link href={`${ROUTES_URL.PUBLIC_PROFILE}/${author.id}/${id}`}>
          <Slider isDots={imagesUrl.length > 1} sizeBtn={24} sliderLength={imagesUrl.length}>
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
        </Link>
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
            descriptionMaxLength={DESCRIPTION_SIZES.length}
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
