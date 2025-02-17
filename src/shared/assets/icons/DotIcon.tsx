import * as React from 'react'
import { Ref, SVGProps, forwardRef, memo } from 'react'
const SvgComponent = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg
    fill={'currentColor'}
    height={'8'}
    ref={ref}
    viewBox={'0 0 8 8'}
    width={'8'}
    xmlns={'http://www.w3.org/2000/svg'}
    {...props}
  >
    <circle cx={'4'} cy={'4'} r={'4'} />
  </svg>
)
const ForwardRef = forwardRef(SvgComponent)

export const DotIcon = memo(ForwardRef)
