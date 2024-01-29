import { SvgIcon } from '@shared/ui'
import Link from 'next/link'

export const AdminSidebar = () => {
  return (
    <nav>
      <ul>
        <li className='text-white'>
          <Link href='/admin/participant' className='flex items-center'>
            <SvgIcon name='participant' width={24} height={24} fill='white' />
            Учителя
          </Link>
        </li>
        <li className='text-white'>
          <Link href='/admin/participant' className='flex items-center'>
            <SvgIcon
              name='calendar'
              prefix='sidebar'
              width={24}
              height={24}
              fill='white'
            />
            Календарь
          </Link>
        </li>
      </ul>
    </nav>
  )
}
