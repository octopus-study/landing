'use client'

import { useSlideShow } from '@/app/shared/hooks'
import { PropsWithChildren } from 'react'
import { Section } from './index'

type Props = {
  imgList: string[]
  fullScreen?: boolean
} & PropsWithChildren

export const SectionWithBackground = ({
  imgList,
  children,
  ...props
}: Props) => {
  const { activeIdx } = useSlideShow(imgList.length, 6000)

  return (
    <Section
      style={{ backgroundImage: `url(${imgList[activeIdx]})` }}
      className='bg-cover'
      {...props}
    >
      {children}
    </Section>
  )
}
