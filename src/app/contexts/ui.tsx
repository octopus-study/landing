'use client'

import { PropsWithChildren, createContext, useState } from 'react'

type ModalNames = 'drawer'

interface IProvde {
  modalOpen: Record<ModalNames, boolean>
  showModal: (entity: ModalNames) => void
  hideModal: (entity: ModalNames) => void
}

export const UiContext = createContext({} as IProvde)

export const UiState = ({ children }: PropsWithChildren) => {
  const [modalOpen, setModalOpen] = useState<Record<ModalNames, boolean>>({
    drawer: false,
  })

  const showModal = (entity: ModalNames) => {
    setModalOpen((state) => ({ ...state, [entity]: true }))
  }

  const hideModal = (entity: ModalNames) => {
    setModalOpen((state) => ({ ...state, [entity]: false }))
  }

  return (
    <UiContext.Provider value={{ modalOpen, hideModal, showModal }}>
      {children}
    </UiContext.Provider>
  )
}
