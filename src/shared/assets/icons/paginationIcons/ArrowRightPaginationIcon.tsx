import * as React from 'react'
import { Ref, SVGProps, forwardRef, memo } from 'react'
const SvgComponent = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg
    fill={'none'}
    height={'16'}
    viewBox={'0 0 16 16'}
    width={'16'}
    xmlns={'http://www.w3.org/2000/svg'}
    {...props}
    ref={ref}
  >
    <g clipPath={'url(#clip0_75550_7164)'}>
      <path
        d={
          'M6.66686 12.6665C6.5111 12.6669 6.36014 12.6126 6.2402 12.5132C6.17269 12.4572 6.11689 12.3885 6.07599 12.3109C6.03509 12.2334 6.00989 12.1485 6.00184 12.0612C5.99379 11.9739 6.00304 11.8858 6.02907 11.8021C6.0551 11.7184 6.0974 11.6406 6.15353 11.5732L9.1402 7.99988L6.2602 4.41988C6.20482 4.35169 6.16347 4.27322 6.13851 4.189C6.11356 4.10477 6.10549 4.01644 6.11479 3.92909C6.12408 3.84174 6.15054 3.75708 6.19266 3.67999C6.23478 3.6029 6.29171 3.53489 6.3602 3.47988C6.42917 3.41919 6.50995 3.37341 6.59746 3.34542C6.68497 3.31742 6.77732 3.30782 6.86871 3.31721C6.96011 3.3266 7.04858 3.35478 7.12856 3.39998C7.20855 3.44518 7.27833 3.50643 7.33353 3.57988L10.5535 7.57988C10.6516 7.69917 10.7052 7.8488 10.7052 8.00321C10.7052 8.15763 10.6516 8.30726 10.5535 8.42655L7.2202 12.4265C7.15332 12.5072 7.06836 12.571 6.97222 12.6127C6.87608 12.6544 6.77147 12.6728 6.66686 12.6665Z'
        }
        fill={'white'}
      />
    </g>
    <defs>
      <clipPath id={'clip0_75550_7164'}>
        <rect fill={'white'} height={'16'} width={'16'} />
      </clipPath>
    </defs>
  </svg>
)
const ForwardRef = forwardRef(SvgComponent)

export const ArrowRightPaginationIcon = memo(ForwardRef)
