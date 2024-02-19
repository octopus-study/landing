import { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: `404 | ${process.env.NEXT_PUBLIC_SCHOOL_NAME}`,
}

export default function NotFound() {
  return (
    <div className='text-white text-center h-[calc(100vh-70px)] justify-center flex flex-col items-center w-3/4 mx-auto'>
      <img
        src='/assets/images/octopus.png'
        className='h-36 w-36'
        alt='логотип'
      />
      <h2 className='text-3xl font-semibold my-8'>
        Увы, такой страницы не существует. <br /> Но вы можете перейти на
        главную страницу школы
      </h2>
      <Link href='/' className='bg-warn py-3 px-8 rounded-3xl'>
        На главную
      </Link>
    </div>
  )
}
