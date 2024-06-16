'use client'

import { SvgIcon } from '@/app/shared/ui'
import { useDispatch } from '@/app/store'
import { AuthSlice } from '@/app/store/slices'
import { AuthType } from '@/app/store/types'
import { Button } from 'flowbite-react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { ChangeEvent, SyntheticEvent, useState } from 'react'

export default function RegisterView() {
  const router = useRouter()
  const dispatch = useDispatch()
  const [disabled, setDisabled] = useState(false)
  const [showPassword, setShowPassword] = useState({
    password: false,
    confirmPassword: false,
  })
  const [userData, setUserData] = useState<AuthType.Register>({
    email: '',
    password: '',
    confirmPassword: '',
  })

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setUserData((state) => ({
      ...state,
      [event.target.name]: event.target.value,
    }))
  }

  const handleToggleVisibility = (entity: keyof typeof showPassword) => {
    setShowPassword((state) => ({ ...state, [entity]: !state[entity] }))
  }

  const handleSubmit = async (event: SyntheticEvent) => {
    event.preventDefault()
    try {
      setDisabled(true)
      const { confirmPassword, ...prepareData } = userData
      await dispatch(AuthSlice.register(prepareData)).unwrap()

      localStorage.setItem('user', JSON.stringify(userData))
      router.replace('/profile')
    } finally {
      setDisabled(false)
    }
  }

  return (
    <form
      onSubmit={handleSubmit}
      className='flex flex-col gap-4 justify-center w-2/5 mx-auto'
    >
      <input
        type='text'
        disabled={disabled}
        onChange={handleChange}
        placeholder='Введите почту'
        name='email'
        className='w-full py-2 text-white px-6 rounded-lg bg-[#141414] placeholder-gray-400 border-none outline-none'
      />
      <div className='flex py-2 items-center w-full text-white px-6 rounded-lg bg-[#141414] placeholder-gray-400 border-none outline-none'>
        <input
          placeholder='Пароль'
          disabled={disabled}
          name='password'
          onChange={handleChange}
          type={showPassword.password ? 'text' : 'password'}
          className='bg-[#141414] p-0 outline-none focus:outline-none border-none flex-1'
        />
        <button
          type='button'
          disabled={disabled}
          onClick={() => handleToggleVisibility('password')}
        >
          <SvgIcon
            name={showPassword.password ? 'eye' : 'eye-off'}
            height={16}
            width={16}
            fill='white'
          />
        </button>
      </div>
      <div className='flex py-2 items-center w-full text-white px-6 rounded-lg bg-[#141414] placeholder-gray-400 border-none outline-none'>
        <input
          placeholder='Потвердите пароль'
          disabled={disabled}
          name='confirmPassword'
          onChange={handleChange}
          type={showPassword.confirmPassword ? 'text' : 'password'}
          className='bg-[#141414] p-0 outline-none focus:outline-none border-none flex-1'
        />
        <button
          type='button'
          disabled={disabled}
          onClick={() => handleToggleVisibility('password')}
        >
          <SvgIcon
            name={showPassword.confirmPassword ? 'eye' : 'eye-off'}
            height={16}
            width={16}
            fill='white'
          />
        </button>
      </div>
      <div className='flex items-center justify-center gap-4'>
        <Link href='/login' className='text-blue-600'>
          Авторизация
        </Link>
        <Button
          type='submit'
          className='bg-blue-700 disabled:bg-blue-900 duration-150'
          disabled={disabled}
        >
          Зарегистрироваться
        </Button>
      </div>
    </form>
  )
}
