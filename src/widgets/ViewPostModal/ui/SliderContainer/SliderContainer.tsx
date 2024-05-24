import React from 'react'

import { Slider } from '@/widgets/CreatePost/ui/Slider'
import Image from 'next/image'

import styles from './SliderContainer.module.scss'

type Props = {
  imageUrls: string[]
}

export const SliderContainer = ({ imageUrls }: Props) => {
  return (
    <div className={styles.sliderContainer}>
      <Slider sliderLength={imageUrls.length}>
        {imageUrls.map(url => (
          <div className={styles.imageContainer} key={url}>
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
