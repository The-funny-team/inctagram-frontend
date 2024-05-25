import React from 'react'

import { Slider } from '@/widgets/CreatePost/ui/Slider'
import Image from 'next/image'

import s from './SliderContainer.module.scss'

type Props = {
  imageUrls: string[]
}

export const SliderContainer = ({ imageUrls }: Props) => {
  return (
    <div className={s.sliderContainer}>
      <Slider sliderLength={imageUrls.length}>
        {imageUrls.map(url => (
          <div className={s.imageContainer} key={url}>
            <Image
              alt={'post image'}
              fill
              sizes={'485px'}
              src={url}
              style={{ objectFit: 'contain' }}
            />
          </div>
        ))}
      </Slider>
    </div>
  )
}
