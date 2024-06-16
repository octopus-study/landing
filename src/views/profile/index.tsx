'use client'

import { useSelector } from '@/app/store'
import { AuthSlice, UserSlice } from '@/app/store/slices'
import { useDispatch } from 'react-redux'
import InfoProfile from './info'

export default function ProfileView() {
  const dispatch = useDispatch()
  const { profile: detail } = useSelector((s) => s.user)

  const handleLogout = () => {
    dispatch(UserSlice.reset())
    dispatch(AuthSlice.logout())
  }

  return (
    detail && (
      <>
        <div className='mx-2 my-4'>
          <div className='flex flex-col gap-4 bg-blue-800 py-4 rounded-xl'>
            <div className='flex items-center justify-between px-4'>
              <div className='flex items-center gap-3'>
                <div className='rounded-full py-2 px-4 bg-black text-white'>
                  {detail.email.charAt(0).toUpperCase()}
                </div>
                <div className='flex flex-col'>
                  <h4 className='font-bold text-white'>{detail.email}</h4>
                  <p className='text-sm text-gray-400 font-bold'>User</p>
                </div>
              </div>
              <div className='text-sm bg-black px-3 py-1 rounded-full select-none'>
                <button className='text-warn font-bold' onClick={handleLogout}>
                  Выйти
                </button>
              </div>
            </div>
          </div>
        </div>

        <InfoProfile detail={detail} />
      </>
    )
  )
}
