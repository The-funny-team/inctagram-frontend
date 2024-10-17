import React, { ComponentProps, ReactNode, useState } from 'react'
import SlickSlider, { Settings } from 'react-slick'

import { ArrowLeftShortIcon, ArrowRightShortIcon } from '@/shared/assets'
import { SliderButton, SliderDot } from '@/widgets/CreatePost/ui/SliderButtons'

import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

import s from './Slider.module.scss'

type Props = {
  children: ReactNode
  isDots: boolean
  setSlideId?: (id: number) => void
  sizeBtn: number
  slideId?: number
  sliderLength: number
}

export const Slider = ({ children, isDots, setSlideId, sizeBtn, slideId, sliderLength }: Props) => {
  const [slideIdR, setSlideIdR] = useState<number>(0)

  const beforeChangeHandler = (currentSlide: number, nextSlide: number) => {
    if (setSlideId) {
      setSlideId(nextSlide)
    } else {
      setSlideIdR(nextSlide)
    }
  }

  const usedSlideId = slideId ? slideId : slideIdR

  const settings: Settings = {
    arrows: sliderLength > 1,
    beforeChange: beforeChangeHandler,
    customPaging: index => {
      return <SliderDot isActive={usedSlideId === index} />
    },
    dots: isDots,
    dotsClass: s.slickDots,
    infinite: false,
    nextArrow: (
      <Btn
        disabled={sliderLength - 1 === usedSlideId || sliderLength === 0}
        isRight
        size={sizeBtn}
      />
    ),
    prevArrow: <Btn disabled={usedSlideId === 0} isRight={false} size={sizeBtn} />,
    slidesToScroll: 1,
    slidesToShow: 1,
    speed: 500,
    swipe: false,
    swipeToSlide: false,
  }

  return (
    <SlickSlider {...settings} className={s.slider}>
      {children}
    </SlickSlider>
  )
}

type BtnType = {
  disabled?: boolean
  isRight: boolean
  onClick?: ComponentProps<'button'>['onClick']
  size: number
}

const Btn = ({ disabled, isRight, onClick, size }: BtnType) => {
  return (
    <SliderButton
      className={isRight ? s.nextBtn : s.prevBtn}
      disabled={disabled}
      onClick={onClick}
      size={size}
    >
      {isRight ? <ArrowRightShortIcon /> : <ArrowLeftShortIcon />}
    </SliderButton>
  )
}
