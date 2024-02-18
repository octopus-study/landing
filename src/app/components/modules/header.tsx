'use client'

import { useScrollDirection } from '@shared/hooks'
import Link from 'next/link'

export const Header = () => {
  const scrollDirection = useScrollDirection()
  console.log(scrollDirection)

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
          <Link
            className='bg-gray-300 text-dark py-2 px-4 rounded-3xl hover:bg-gray-500 duration-300'
            href='/'
          >
            О школе
          </Link>
          <Link
            className='bg-gray-300 text-dark py-2 px-4 rounded-3xl hover:bg-gray-500 duration-300'
            href='/study'
          >
            Учиться у нас
          </Link>
          <Link
            className='bg-gray-300 text-dark py-2 px-4 rounded-3xl hover:bg-gray-500 duration-300'
            href={{ pathname: '/support', query: 'entity=education' }}
          >
            Поддержка в обучении
          </Link>
          <Link
            className='bg-gray-300 text-dark py-2 px-4 rounded-3xl hover:bg-gray-500 duration-300'
            href={{ pathname: '/support', query: 'entity=school' }}
          >
            Поддержка школы
          </Link>
          <Link
            className='bg-gray-300 text-dark py-2 px-4 rounded-3xl hover:bg-gray-500 duration-300'
            href='/'
          >
            События
          </Link>
          <Link
            className='bg-dark text-white py-2 px-4 rounded-3xl hover:bg-gray-500 duration-300'
            href='/'
          >
            Контакты
          </Link>
        </ul>
      </nav>
    </header>
  )
}
