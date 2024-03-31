import { UiContext } from '@/app/contexts/ui'
import { LinkConst } from '@/app/shared/constants'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useContext } from 'react'

export const Drawer = () => {
  const pathname = usePathname()
  const { modalOpen, hideModal } = useContext(UiContext)

  console.log(pathname)

  return (
    modalOpen.drawer && (
      <>
        <div
          className='bg-black opacity-80 h-screen w-screen fixed top-0 left-0 z-50'
          onClick={() => hideModal('drawer')}
        />
        <div className='absolute z-50 top-0 right-0 w-3/4'>
          <div className='relative z-[60] bg-black h-screen'>
            <ul className='flex flex-col text-white text-right'>
              {LinkConst.MAIN.map((route: any, idx) => (
                <Link
                  href={route.href}
                  key={idx}
                  className={
                    pathname ===
                    `${
                      route.href?.query
                        ? `${route.href.pathname}?${route.href.query}`
                        : route.href
                    }`
                      ? 'text-warn'
                      : ''
                  }
                >
                  {`${route.href.pathname}?${route.href.query}`}
                  {route.text}
                </Link>
              ))}
              <li></li>
            </ul>
          </div>
        </div>
      </>
    )
  )
}
