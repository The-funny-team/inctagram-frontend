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
    <g clipPath={'url(#clip0_75550_7159)'}>
      <path
        d={
          'M9.21978 12.6667C9.12019 12.667 9.02178 12.645 8.93179 12.6024C8.84181 12.5597 8.76253 12.4974 8.69978 12.42L5.47978 8.42002C5.38173 8.30073 5.32812 8.1511 5.32812 7.99669C5.32812 7.84227 5.38173 7.69264 5.47978 7.57335L8.81312 3.57335C8.92628 3.43721 9.08888 3.35159 9.26517 3.33534C9.44145 3.31909 9.61697 3.37353 9.75312 3.48669C9.88926 3.59985 9.97488 3.76245 9.99113 3.93874C10.0074 4.11502 9.95294 4.29054 9.83978 4.42669L6.85978 8.00002L9.73978 11.5734C9.82131 11.6712 9.87309 11.7904 9.88901 11.9167C9.90493 12.0431 9.88432 12.1714 9.82961 12.2864C9.77491 12.4014 9.6884 12.4984 9.58033 12.5658C9.47226 12.6332 9.34714 12.6682 9.21978 12.6667Z'
        }
        fill={'white'}
      />
    </g>
    <defs>
      <clipPath id={'clip0_75550_7159'}>
        <rect fill={'white'} height={'16'} width={'16'} />
      </clipPath>
    </defs>
  </svg>
)
const ForwardRef = forwardRef(SvgComponent)

export const ArrowLeftPaginationIcon = memo(ForwardRef)
