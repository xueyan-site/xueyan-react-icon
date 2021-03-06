import React, { forwardRef } from 'react'
import { Icon, IconRef, PackedIconProps } from './icon'

const ICON = `
<svg viewBox="0 0 200 200">
  <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round">
    <line x1="130" y1="50" x2="130" y2="150" stroke="currentColor" stroke-width="16"></line>
    <line x1="70" y1="50" x2="70" y2="150" stroke="currentColor" stroke-width="16"></line>
  </g>
</svg>
`

export const PauseIcon = forwardRef<IconRef, PackedIconProps>((props, ref) => {
  return <Icon {...props} type="_PAUSE" src={ICON} ref={ref} />
})
