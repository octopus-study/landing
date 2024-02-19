'use client'

import { HTMLAttributes, PropsWithChildren } from 'react'

type Props = {
  fullScreen?: boolean
} & PropsWithChildren

export const Section = ({
  children,
  fullScreen,
  className,
  ...props
}: Props & HTMLAttributes<HTMLDivElement>) => {
  return (
    <div
      {...props}
      className={`${fullScreen ? 'h-screen' : 'h-full'} ${className}`}
    >
      {children}
    </div>
  )
}
