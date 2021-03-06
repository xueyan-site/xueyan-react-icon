import React, { forwardRef } from 'react'
import { Icon, IconRef, PackedIconProps } from './icon'

const ICON = `
<svg viewBox="0 0 200 200">
  <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round">
    <polyline stroke="currentColor" stroke-width="16" points="165 125 165 175 35 175 35 125"></polyline>
    <polyline stroke="currentColor" stroke-width="16" points="150 75 100 25 50 75"></polyline>
    <line x1="100" y1="25" x2="100" y2="150" stroke="currentColor" stroke-width="16"></line>
  </g>
</svg>
`

export const UploadIcon = forwardRef<IconRef, PackedIconProps>((props, ref) => {
  return <Icon {...props} type="_UPLOAD" src={ICON} ref={ref} />
})
