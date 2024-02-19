'use client'

import { useSlideShow } from '@/app/shared/hooks'
import { HTMLAttributes, PropsWithChildren } from 'react'
import { Section } from './index'

type Props = {
  imgList: string[]
  fullScreen?: boolean
} & PropsWithChildren

export const SectionWithBackground = ({
  imgList,
  children,
  className,
  ...props
}: Props & HTMLAttributes<HTMLDivElement>) => {
  const { activeIdx } = useSlideShow(imgList.length, 6000)

  return (
    <Section
      {...props}
      style={{ backgroundImage: `url(${imgList[activeIdx]})` }}
      className={`bg-cover bg-center ${className}`}
    >
      {children}
    </Section>
  )
}
