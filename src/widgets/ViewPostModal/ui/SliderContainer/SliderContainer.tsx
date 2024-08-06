import React from 'react'

import { PostResponseImages } from '@/shared/api/postsApi'
import { Slider } from '@/widgets/CreatePost/ui/Slider'
import Image from 'next/image'

import s from './SliderContainer.module.scss'

type Props = {
  imageUrls: PostResponseImages[]
}

export const SliderContainer = ({ imageUrls }: Props) => {
  return (
    <div className={s.sliderContainer}>
      <Slider isDots={imageUrls.length > 1} sizeBtn={36} sliderLength={imageUrls.length}>
        {imageUrls.map(photo => (
          <div className={s.imageContainer} key={photo.uploadId}>
            <Image
              alt={'post image'}
              fill
              sizes={'485px'}
              src={photo.url}
              style={{ objectFit: 'contain' }}
            />
          </div>
        ))}
      </Slider>
    </div>
  )
}
