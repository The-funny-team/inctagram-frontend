import * as React from 'react'
import { Ref, SVGProps, forwardRef, memo } from 'react'
const SvgComponent = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg
    fill={'currentColor'}
    height={'24'}
    viewBox={'0 0 24 24'}
    width={'24'}
    xmlns={'http://www.w3.org/2000/svg'}
  >
    <g clipPath={'url(#clip0_301_4077)'}>
      <path
        d={
          'M12 21C11.8684 21.0008 11.7379 20.9755 11.6161 20.9258C11.4943 20.876 11.3834 20.8027 11.29 20.71L3.51999 12.93C2.54536 11.9452 1.99866 10.6156 1.99866 9.23C1.99866 7.84443 2.54536 6.51482 3.51999 5.53C4.50226 4.55051 5.83283 4.00047 7.21999 4.00047C8.60716 4.00047 9.93773 4.55051 10.92 5.53L12 6.61L13.08 5.53C14.0623 4.55051 15.3928 4.00047 16.78 4.00047C18.1672 4.00047 19.4977 4.55051 20.48 5.53C21.4546 6.51482 22.0013 7.84443 22.0013 9.23C22.0013 10.6156 21.4546 11.9452 20.48 12.93L12.71 20.71C12.6166 20.8027 12.5057 20.876 12.3839 20.9258C12.2621 20.9755 12.1316 21.0008 12 21ZM7.21999 6C6.79667 5.99808 6.37717 6.08018 5.9858 6.24154C5.59443 6.40289 5.23897 6.6403 4.93999 6.94C4.33605 7.54712 3.99703 8.36865 3.99703 9.225C3.99703 10.0814 4.33605 10.9029 4.93999 11.51L12 18.58L19.06 11.51C19.6639 10.9029 20.003 10.0814 20.003 9.225C20.003 8.36865 19.6639 7.54712 19.06 6.94C18.4437 6.35771 17.6279 6.0333 16.78 6.0333C15.9321 6.0333 15.1163 6.35771 14.5 6.94L12.71 8.74C12.617 8.83373 12.5064 8.90812 12.3846 8.95889C12.2627 9.00966 12.132 9.0358 12 9.0358C11.868 9.0358 11.7373 9.00966 11.6154 8.95889C11.4936 8.90812 11.383 8.83373 11.29 8.74L9.49999 6.94C9.20102 6.6403 8.84556 6.40289 8.45419 6.24154C8.06282 6.08018 7.64332 5.99808 7.21999 6Z'
        }
      />
    </g>
    <defs>
      <clipPath id={'clip0_301_4077'}>
        <rect height={'24'} width={'24'} />
      </clipPath>
    </defs>
  </svg>
)
const ForwardRef = forwardRef(SvgComponent)

export const LikeOutlineIcon = memo(ForwardRef)
