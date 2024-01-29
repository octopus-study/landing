'use client'

import { useScrollDirection } from '@shared/hooks'
import Link from 'next/link'

export const Header = () => {
  const scrollDirection = useScrollDirection()

  return (
    <header
      className={`flex z-50 items-center gap-8 justify-between bg-white w-full p-4 sticky transition-all duration-500 ${
        scrollDirection === 'down' ? '-top-24' : 'top-0'
      }`}
    >
      <div>
        <Link href='/'>
          <img src='' alt='logo' />
        </Link>
      </div>

      <nav>
        <ul className='flex items-center gap-4 flex-wrap'>
          <li className='bg-gray-300 text-dark py-2 px-4 rounded-3xl hover:bg-gray-500 duration-300'>
            <Link href='/'>О школе</Link>
          </li>
          <li className='bg-gray-300 text-dark py-2 px-4 rounded-3xl hover:bg-gray-500 duration-300'>
            <Link href='/study'>Учиться у нас</Link>
          </li>
          <li className='bg-gray-300 text-dark py-2 px-4 rounded-3xl hover:bg-gray-500 duration-300'>
            <Link href='/'>Поддержка в обучении</Link>
          </li>
          <li className='bg-gray-300 text-dark py-2 px-4 rounded-3xl hover:bg-gray-500 duration-300'>
            <Link href='/'>Поддержка школы</Link>
          </li>
          <li className='bg-gray-300 text-dark py-2 px-4 rounded-3xl hover:bg-gray-500 duration-300'>
            <Link href='/'>События</Link>
          </li>
          <li className='bg-dark text-white py-2 px-4 rounded-3xl hover:bg-gray-500 duration-300'>
            <Link href='/'>Контакты</Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}
