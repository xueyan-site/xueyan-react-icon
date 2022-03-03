import React, { forwardRef } from 'react'
import { Icon, IconRef, PackedIconProps } from './icon'

const ICON = `
<svg viewBox="0 0 200 200">
  <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
    <path d="M100,15 C146.944204,15 185,53.0557963 185,100 C185,146.944204 146.944204,185 100,185 C53.0557963,185 15,146.944204 15,100 C15,53.0557963 53.0557963,15 100,15 Z M146.437602,51.3435976 C142.761372,48.892778 137.794417,49.8861689 135.343598,53.5623984 L135.343598,53.5623984 L84.756,129.443 L63.6568542,108.343146 L63.4548388,108.147972 C60.3179931,105.220366 55.4008679,105.285424 52.3431458,108.343146 C49.2189514,111.46734 49.2189514,116.53266 52.3431458,119.656854 L52.3431458,119.656854 L80.3431458,147.656854 L80.5366208,147.844115 C84.1241379,151.204423 89.9060757,150.563092 92.6564024,146.437602 L92.6564024,146.437602 L148.656402,62.4376016 L148.799325,62.2155094 C151.066413,58.5637003 150.040306,53.7454009 146.437602,51.3435976 Z" fill="currentColor"></path>
  </g>
</svg>
`

export const SuccessIcon = forwardRef<IconRef, PackedIconProps>((props, ref) => {
  return <Icon {...props} type="_SUCCESS" src={ICON} ref={ref} />
})
