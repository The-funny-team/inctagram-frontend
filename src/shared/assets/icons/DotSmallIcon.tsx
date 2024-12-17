import * as React from 'react'
import { Ref, SVGProps, forwardRef, memo } from 'react'

const SvgComponent = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg
    fill={'none'}
    height={'4'}
    ref={ref}
    viewBox={'0 0 4 4'}
    width={'4'}
    xmlns={'http://www.w3.org/2000/svg'}
    {...props}
  >
    <circle cx={'2'} cy={'2'} fill={'#D5DAE0'} r={'2'} />
  </svg>
)
const ForwardRef = forwardRef(SvgComponent)

export const DotSmallIcon = memo(ForwardRef)
