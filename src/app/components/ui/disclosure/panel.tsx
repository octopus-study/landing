'use client'

import { PropsWithChildren, useContext } from 'react'
import { DisclosureContext } from './provider'

export const DisclosurePanel = ({ children }: PropsWithChildren) => {
  const { isOpen } = useContext(DisclosureContext)

  return (
    isOpen && (
      <div>
        {children}
        <hr className='mt-7' />
      </div>
    )
  )
}
