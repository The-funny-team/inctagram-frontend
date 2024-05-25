import { useState } from 'react'

import { ArrowSliderLeftIcon, ArrowSliderRightIcon, DotIcon } from '@/shared/assets'
import { clsx } from 'clsx'
import Image from 'next/image'

import s from './ImageSlider.module.scss'

type Props = {
  imageUrls: string[]
}

export const ImageSlider = ({ imageUrls }: Props) => {
  const [imageIndex, setImageIndex] = useState<number>(0)

  const showPrevImage = () => {
    setImageIndex(index => {
      if (imageIndex === 0) {
        return imageUrls.length - 1
      }

      return index - 1
    })
  }
  const showNextImage = () => {
    setImageIndex(index => {
      if (imageIndex === imageUrls.length - 1) {
        return 0
      }

      return index + 1
    })
  }

  return (
    <div className={s.container}>
      {imageUrls.map(url => {
        return (
          <Image
            alt={'post image'}
            className={s.image}
            height={562}
            key={url}
            src={url}
            style={{ translate: `${-100 * imageIndex}%` }}
            width={490}
          />
        )
      })}
      {imageUrls.length > 1 && (
        <>
          <button className={clsx(s.imgBtn, s.imgBtnLeft)} onClick={showPrevImage}>
            <ArrowSliderLeftIcon />
          </button>
          <button className={clsx(s.imgBtn, s.imgBtnRight)} onClick={showNextImage}>
            <ArrowSliderRightIcon />
          </button>

          <div className={s.dotWrapper}>
            {imageUrls.map((_, index) => (
              <span className={clsx(s.dot, index === imageIndex && s.checkedDot)} key={index}>
                <DotIcon />
              </span>
            ))}
          </div>
        </>
      )}
    </div>
  )
}
