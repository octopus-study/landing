'use client'

import { HTMLAttributes, PropsWithChildren } from 'react'

type Props = {
  fullScreen?: boolean
} & PropsWithChildren &
  HTMLAttributes<HTMLDivElement>

export const Section = ({ children, fullScreen, ...props }: Props) => {
  return (
    <div {...props} className={fullScreen ? 'h-screen' : 'h-full'}>
      {children}
    </div>
  )
}
