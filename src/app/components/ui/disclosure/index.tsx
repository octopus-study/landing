'use client'

import { HTMLAttributes, PropsWithChildren } from 'react'
import { DisclosureButton } from './button'
import { DisclosurePanel } from './panel'
import { DisclosureProvider } from './provider'

type Props = {} & PropsWithChildren & HTMLAttributes<HTMLDivElement>

export const Disclosure = ({ children, ...props }: Props) => {
  return (
    <DisclosureProvider>
      <div {...props} className='px-4'>
        {children}
      </div>
    </DisclosureProvider>
  )
}

Disclosure.Panel = DisclosurePanel
Disclosure.Button = DisclosureButton
