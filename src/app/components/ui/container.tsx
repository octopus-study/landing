import { HTMLAttributes, PropsWithChildren } from 'react'

export const Container = ({
  children,
  className,
  ...props
}: PropsWithChildren & HTMLAttributes<HTMLDivElement>) => (
  <div {...props} className={`w-3/4 mx-auto ${className}`}>
    {children}
  </div>
)
