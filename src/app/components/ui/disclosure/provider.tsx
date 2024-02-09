'use client'

import { PropsWithChildren, createContext, useState } from 'react'

interface IProvider {
  isOpen: boolean
  toggleHandler: () => void
}

export const DisclosureContext = createContext({} as IProvider)

export const DisclosureProvider = ({ children }: PropsWithChildren) => {
  const [isOpen, setIsOpen] = useState(false)

  const toggleHandler = () => setIsOpen((state) => !state)

  return (
    <DisclosureContext.Provider value={{ isOpen, toggleHandler }}>
      {children}
    </DisclosureContext.Provider>
  )
}
