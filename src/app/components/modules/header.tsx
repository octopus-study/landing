'use client'

import { UiContext } from '@/app/contexts/ui'
import { LinkConst } from '@/app/shared/constants'
import { SvgIcon } from '@/app/shared/ui'
import { useScrollDirection } from '@shared/hooks'
import Image from 'next/image'
import Link from 'next/link'
import { useContext } from 'react'
import { Drawer } from './drawer'

export const Header = () => {
  const scrollDirection = useScrollDirection()
  const { modalOpen, showModal } = useContext(UiContext)

  return (
    <div className='relative'>
      <header
        className={`flex z-40 items-center gap-8 justify-between bg-white w-full p-4 sticky transition-all duration-500 ${
          scrollDirection === 'down' ? '-top-24' : 'top-0'
        }`}
      >
        <div>
          <Link href='/' className='flex items-center gap-2'>
            <Image
              src='/assets/images/octopus.png'
              alt='brand'
              width={52}
              height={52}
            />
            <p className='font-bold text-2xl hidden max-lg:block xl:block'>
              {process.env.NEXT_PUBLIC_SCHOOL_NAME}
            </p>
          </Link>
        </div>

        <nav className='max-lg:hidden'>
          <ul className='flex items-center gap-4 flex-wrap'>
            {LinkConst.MAIN.map((route, idx) => (
              <Link
                key={idx}
                className={`bg-gray-300 text-dark py-2 px-4 rounded-3xl hover:bg-gray-500 duration-300 ${
                  route.className ? route.className : ''
                }`}
                href={route.href}
              >
                {route.text}
              </Link>
            ))}
          </ul>
        </nav>

        <div
          className='lg:hidden cursor-pointer'
          onClick={() => showModal('drawer')}
        >
          <SvgIcon prefix='special' name='bars' width={32} height={32} />
        </div>
      </header>
      <Drawer />
    </div>
  )
}
