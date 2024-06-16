import { Container } from '@components/ui'
import { EventConst } from '@shared/constants'
import { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: `События ${process.env.NEXT_PUBLIC_SCHOOL_NAME}`,
}

const SRC =
  'https://sun9-37.userapi.com/impg/Zu9K6EYqvqUgsghDNiUdD2UFdJXBxen2NTT8OQ/V0GYp_A0Ces.jpg?size=1280x960&quality=95&sign=5e712b2e20470552318a48aac700163c&type=album' as const

const Events = () => {
  return (
    <div>
      <div className='bg-black'>
        <div className='py-16'>
          <Container>
            <div className='grid grid-cols-[320px_320px_320px] justify-center gap-8'>
              {EventConst.list.map((event, idx) => (
                <Link
                  href={`/events/${event.slug}`}
                  key={idx}
                  className='flex w-80 flex-col'
                >
                  <div className='h-80 rounded-3xl'>
                    <img
                      src={event.background_img}
                      alt='event'
                      className='border-warn h-80 rounded-3xl border-4 border-solid object-cover'
                    />
                  </div>
                  <div className='border-warn hover:bg-accent mt-1 flex-1 rounded-3xl border-4 border-solid bg-white px-4 pb-6 pt-4 duration-300 hover:text-white'>
                    <div className='flex items-center gap-2 text-sm'>
                      <p>События</p>
                      <div className='bg-warn h-2 w-2 rounded-full' />
                    </div>
                    <p className='text-xl font-bold '>{event.text}</p>
                  </div>
                </Link>
              ))}
            </div>
          </Container>
        </div>
      </div>

      {/* <div className='bg-white'>carousel</div> */}
    </div>
  )
}

export default Events
