import { SvgIcon } from '@/app/shared/ui'
import Image from 'next/image'
import Link from 'next/link'

export const Footer = () => {
  return (
    <footer className='w-screen bg-black text-white px-6 md:px-56 py-16 text-base relative'>
      {/* first */}
      <div className='flex items-start flex-wrap md:flex-nowrap gap-4'>
        {/* logo */}
        <div className='w-1/4'>
          <Image
            src='/assets/images/octopus.png'
            alt='footer brand'
            width={52}
            height={52}
          />
        </div>
        {/* feedback */}
        <div className='flex flex-col w-2/4'>
          <p className='font-bold'>Есть вопросы? Напиши нам</p>
          <ul className='flex items-center gap-3 text-white mt-4'>
            <li className='rounded-full border-solid border-2 border-blue-700 flex items-center p-3'>
              <a href='#' target='_blank' rel='noopener noreferrer'>
                <SvgIcon
                  prefix='social'
                  name='whatsapp'
                  height={24}
                  width={24}
                />
              </a>
            </li>
            <li className='rounded-full border-solid border-2 border-blue-700 flex items-center p-3'>
              <a href='#' target='_blank' rel='noopener noreferrer'>
                <SvgIcon
                  prefix='social'
                  name='telegram'
                  height={24}
                  width={24}
                />
              </a>
            </li>
          </ul>
        </div>
        {/* address */}
        <div className='text-base w-1/4'>
          <p>Адрес: </p>
          <a href='#' target='_blank' rel='noopener noreferrer'>
            123100, Россия, Москва, ул. Мантулинская, 7 стр. 3
          </a>
        </div>
        {/* legal */}
        <div className='w-1/4'>
          <ul className='absolute whitespace-nowrap'>
            <li>
              <Link href='/legal/docs'>Список юридических документов</Link>
            </li>
            <li>
              <Link href='/legal/requisites'>
                Реквизиты {process.env.NEXT_PUBLIC_SCHOOL_NAME}
              </Link>
            </li>
            <li>
              <Link href='/legal/sale'>Правила акций</Link>
            </li>
            <li>
              <Link href='/legal/privacy'>Политика конфиденциальности</Link>
            </li>
          </ul>
        </div>
      </div>
      {/* second */}
      <div className='flex items-start mt-4 gap-8'>
        {/* social */}
        <div className='flex flex-col w-1/4'>
          <p>Следи за нами в соцсетях</p>
          <ul className='flex flex-wrap items-center gap-3 text-white mt-4'>
            <li className='rounded-full border-solid border-2 border-blue-700 flex items-center p-3'>
              <a href='#' target='_blank' rel='noopener noreferrer'>
                <SvgIcon
                  prefix='social'
                  name='whatsapp'
                  height={24}
                  width={24}
                />
              </a>
            </li>
            <li className='rounded-full border-solid border-2 border-blue-700 flex items-center p-3'>
              <a href='#' target='_blank' rel='noopener noreferrer'>
                <SvgIcon
                  prefix='social'
                  name='telegram'
                  height={24}
                  width={24}
                />
              </a>
            </li>
            <li className='rounded-full border-solid border-2 border-blue-700 flex items-center p-3'>
              <a href='#' target='_blank' rel='noopener noreferrer'>
                <SvgIcon
                  prefix='social'
                  name='telegram'
                  height={24}
                  width={24}
                />
              </a>
            </li>
          </ul>
        </div>
        {/* form */}
        <div className='w-2/4'>
          <p>Подпишись на рассылку и получи скидку на обучение</p>
          <form className='flex flex-col items-start gap-4 mt-3'>
            <input
              type='text'
              placeholder='Имя'
              className='w-full pl-4 py-2 bg-[#141414] placeholder-gray-400 border-none outline-none'
            />
            <input
              type='text'
              placeholder='Вам e-mail'
              className='w-full pl-4 py-2 bg-[#141414] placeholder-gray-400 border-none outline-none'
            />
            <div className='flex gap-2 items-center'>
              <input type='checkbox' id='agreement' />
              <label htmlFor='agreement'>
                Даю согласие на обработку персональных данных
              </label>
            </div>
            <button type='submit' className='bg-warn p-3'>
              Подписаться
            </button>
          </form>
        </div>
        {/* contact */}
        <div className='w-1/4'>
          <ul className='mt-4'>
            <li>
              <a href='#' target='_blank' rel='noopener noreferrer'>
                +7 (495) 646-02-73
              </a>
            </li>
            <li>
              <a href='#' target='_blank' rel='noopener noreferrer'>
                info@tumo.moscow
              </a>
            </li>
            <p>Для сотрудничества и организации мероприятий:</p>
            <li>
              <a href='#' target='_blank' rel='noopener noreferrer'>
                partners@tumo.moscow
              </a>
            </li>
          </ul>
        </div>
        {/* noop */}
        <div className='w-1/4' />
      </div>

      <div className='absolute right-0 px-56 bottom-16'>
        © {new Date().getFullYear()} {process.env.NEXT_PUBLIC_SCHOOL_NAME}. Все
        права защищены
      </div>
    </footer>
  )
}
