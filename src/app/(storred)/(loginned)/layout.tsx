'use client'

import { useSelector } from '@/app/store'
import { useRouter } from 'next/navigation'
import { PropsWithChildren, useEffect } from 'react'

export default function ProfileLayout({ children }: PropsWithChildren) {
  const router = useRouter()
  const { isAuth } = useSelector((s) => s.auth)
  console.log(isAuth)
  useEffect(() => {
    if (!isAuth) {
      // router.replace('/login')
    }
  }, [isAuth])

  return isAuth ? children : <></>
}
