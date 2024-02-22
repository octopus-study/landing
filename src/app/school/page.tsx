import { Metadata } from 'next'
import { Container } from '../components/ui'

export const metadata: Metadata = {
  title: `Учиться у нас ${process.env.NEXT_PUBLIC_SCHOOL_NAME}`,
}

const SRC =
  'https://sun9-37.userapi.com/impg/Zu9K6EYqvqUgsghDNiUdD2UFdJXBxen2NTT8OQ/V0GYp_A0Ces.jpg?size=1280x960&quality=95&sign=5e712b2e20470552318a48aac700163c&type=album' as const

const School = () => {
  return (
    <div>
      <div
        style={{ backgroundImage: `url(${SRC})` }}
        className='h-[748px] bg-cover bg-center relative'
      >
        <div className='bg-black text-white absolute bottom-0 w-3/4 flex'>
          <div className='w-full flex-1' />
          <Container>
            <div className='flex'>
              <div>
                <p>
                  <strong>{process.env.NEXT_PUBLIC_SCHOOL_NAME}</strong> — это
                  международная школа креативных технологий, где подростки 12-18
                  лет раскрывают свой потенциал и становятся лидерами
                  завтрашнего дня.
                </p>
                <button className='bg-white text-black text-sm py-2 px-4 rounded-full font-semibold'>
                  показать видео
                </button>
              </div>
              <div className='bg-warn'>warn</div>
            </div>
          </Container>
        </div>
      </div>
    </div>
  )
}

export default School
