'use client'

import { useSelector } from '@/app/store'
import { useRouter } from 'next/navigation'
import { PropsWithChildren, useEffect } from 'react'

export default function AuthLayout({ children }: PropsWithChildren) {
  const router = useRouter()
  const { isAuth } = useSelector((s) => s.auth)

  useEffect(() => {
    if (isAuth) {
      router.replace('/profile')
    }
  }, [isAuth])

  return !isAuth ? (
    <div className='bg-black/90 flex items-center justify-center flex-col h-[calc(100vh-70px)] w-full mx-auto'>
      {children}
    </div>
  ) : (
    <></>
  )
}
