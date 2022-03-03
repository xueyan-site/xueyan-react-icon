import React, { forwardRef } from 'react'
import { Icon, IconRef, PackedIconProps } from './icon'

const ICON = `
<svg viewBox="0 0 200 200">
  <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round">
    <circle stroke="currentColor" stroke-width="16" cx="100" cy="100" r="75"></circle>
    <polyline stroke="currentColor" stroke-width="16" points="135 65 88.3333333 135 65 111.666667"></polyline>
  </g>
</svg>
`

export const ResolvedIcon = forwardRef<IconRef, PackedIconProps>((props, ref) => {
  return <Icon {...props} type="_RESOLVED" src={ICON} ref={ref} />
})
