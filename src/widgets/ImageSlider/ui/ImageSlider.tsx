import { useState } from 'react'

import { ArrowSliderLeftIcon, ArrowSliderRightIcon, DotIcon } from '@/shared/assets'
import { clsx } from 'clsx'
import Image from 'next/image'

import styles from './ImageSlider.module.scss'

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
    <div className={styles.container}>
      {imageUrls.map((url, index) => {
        return (
          <Image
            alt={'post image'}
            className={styles.image}
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
          <button className={clsx(styles.imgBtn, styles.imgBtnLeft)} onClick={showPrevImage}>
            <ArrowSliderLeftIcon />
          </button>
          <button className={clsx(styles.imgBtn, styles.imgBtnRight)} onClick={showNextImage}>
            <ArrowSliderRightIcon />
          </button>

          <div className={styles.dotWrapper}>
            {imageUrls.map((_, index) => (
              <span
                className={clsx(styles.dot, index === imageIndex && styles.checkedDot)}
                key={index}
              >
                <DotIcon />
              </span>
            ))}
          </div>
        </>
      )}
    </div>
  )
}
