'use client'
import { useSearchParams } from 'next/navigation'
import { PropsWithChildren, useEffect, useState } from 'react'

export default function AdminHashGuard({ children }: PropsWithChildren) {
  const searchParams = useSearchParams()
  const [isAdmin, setIsAdmin] = useState(true)

  useEffect(() => {
    const sid = searchParams.get('sid')
    // process.env.NEXT_PUBLIC_ADMIN_SID
    if (sid !== '1') {
      // redirect('/')
    } else {
      setIsAdmin(true)
      // redirect('', RedirectType.replace)
    }
  }, [])

  return isAdmin && children
}
