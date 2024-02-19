'use client'

import { Modal } from 'flowbite-react'
import { useState } from 'react'
import PhoneInput from 'react-phone-number-input'
import 'react-phone-number-input/style.css'

export const Auxiliary = () => {
  const [modalOpen, setModalOpen] = useState(false)

  return (
    <>
      <div className='fixed h-screen w-screen'>
        {/* -rotate-90  */}
        <div className='flex  text-red-600 text-base justify-between'>
          <div>
            <span className='h-2 bg-dark w-full'></span>
            <button>Наверх</button>
          </div>
          <div>
            <p>Подписывайся</p>
            <div>
              <a href='#'>Vk</a>
              <span>/</span>
              <a href='#'>Tg</a>
              <span>/</span>
              <a href='#'>YT</a>
              <span>/</span>
            </div>
          </div>
        </div>

        <div>
          <button
            className='bg-dark text-white p-2 rounded-2xl font-semibold'
            onClick={() => {
              setModalOpen(true)
            }}
          >
            Записать на экскурсию
          </button>
        </div>
      </div>
      <ExcursionModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />
    </>
  )
}

type ModalProps = {
  isOpen: boolean
  onClose: () => void
}

const ExcursionModal = ({ isOpen, onClose }: ModalProps) => {
  const init_phone = '+7'
  const [phone, setPhone] = useState(init_phone)

  const changeInputHandler = (value: string) => {
    setPhone(!value?.trim() ? init_phone : value)
  }

  return (
    <Modal dismissible show={isOpen} onClose={onClose}>
      <Modal.Header>Записаться на экскурсию</Modal.Header>
      <Modal.Body>
        <div className='space-y-6'>
          <PhoneInput
            placeholder='Enter phone number'
            value={phone}
            defaultCountry='RU'
            smartCaret
            onChange={changeInputHandler}
            onBlur={() => {
              if (!phone.trim()) {
                changeInputHandler(init_phone)
              }
            }}
          />
          <p className='text-base leading-relaxed text-gray-500 dark:text-gray-400'>
            With less than a month to go before the European Union enacts new
            consumer privacy laws for its citizens, companies around the world
            are updating their terms of service agreements to comply.
          </p>
          <p className='text-base leading-relaxed text-gray-500 dark:text-gray-400'>
            The European Union’s General Data Protection Regulation (G.D.P.R.)
            goes into effect on May 25 and is meant to ensure a common set of
            data rights in the European Union. It requires organizations to
            notify users as soon as possible of high-risk data breaches that
            could personally affect them.
          </p>
        </div>
      </Modal.Body>
      <Modal.Footer>footer</Modal.Footer>
    </Modal>
  )
}
