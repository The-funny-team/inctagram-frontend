import * as React from 'react'
import { Ref, SVGProps, forwardRef, memo } from 'react'
const SvgComponent = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg
    fill={'currentColor'}
    height={'48'}
    ref={ref}
    viewBox={'0 0 48 48'}
    width={'48'}
    xmlns={'http://www.w3.org/2000/svg'}
    {...props}
  >
    <g clipPath={'url(#clip0_31810_8097)'}>
      <path
        d={
          'M27.6603 38C27.3615 38.001 27.0663 37.9351 26.7964 37.807C26.5264 37.679 26.2886 37.492 26.1003 37.26L16.4403 25.26C16.1462 24.9021 15.9854 24.4533 15.9854 23.99C15.9854 23.5268 16.1462 23.0779 16.4403 22.72L26.4403 10.72C26.7798 10.3116 27.2676 10.0547 27.7965 10.006C28.3253 9.9572 28.8519 10.1205 29.2603 10.46C29.6688 10.7995 29.9256 11.2873 29.9744 11.8162C30.0231 12.345 29.8598 12.8716 29.5203 13.28L20.5803 24L29.2203 34.72C29.4649 35.0136 29.6202 35.3711 29.668 35.7502C29.7158 36.1292 29.6539 36.5141 29.4898 36.8592C29.3257 37.2042 29.0662 37.495 28.742 37.6972C28.4177 37.8994 28.0424 38.0045 27.6603 38Z'
        }
      />
    </g>
    <defs>
      <clipPath id={'clip0_31810_8097'}>
        <rect height={'48'} width={'48'} />
      </clipPath>
    </defs>
  </svg>
)
const ForwardRef = forwardRef(SvgComponent)

export const ArrowSliderLeftIcon = memo(ForwardRef)
