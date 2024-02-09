'use client'

import { SvgIcon } from '@shared/ui'
import { PropsWithChildren, useContext } from 'react'
import { DisclosureContext } from './provider'

export const DisclosureButton = ({ children }: PropsWithChildren) => {
  const ICON_SIZE = 24
  const { isOpen, toggleHandler } = useContext(DisclosureContext)

  return (
    <div
      onClick={toggleHandler}
      className='flex items-center justify-between select-none text-1.5xl font-bold py-7 cursor-pointer'
    >
      {children}

      {isOpen ? (
        <SvgIcon name='cross' height={ICON_SIZE} width={ICON_SIZE} />
      ) : (
        <SvgIcon name='plus' height={ICON_SIZE} width={ICON_SIZE} />
      )}
    </div>
  )
}
