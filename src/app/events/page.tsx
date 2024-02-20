import { Metadata } from 'next'
import Link from 'next/link'
import { Container } from '../components/ui'
import { EventConst } from '../shared/constants'

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
            <div className='grid gap-8 justify-center grid-cols-[320px_320px_320px]'>
              {EventConst.list.map((event, idx) => (
                <Link href={`/events/${event.slug}`} key={idx} className='w-80'>
                  <div className='h-80 rounded-3xl'>
                    <img
                      src={event.background_img}
                      alt='event'
                      className='object-cover rounded-3xl h-80 border-solid border-4 border-warn'
                    />
                  </div>
                  <div className='bg-white pt-4 px-4 pb-6 mt-1 rounded-3xl border-solid border-4 border-warn hover:bg-accent hover:text-white duration-300'>
                    <div className='flex items-center gap-2 text-sm'>
                      <p>События</p>
                      <div className='w-2 h-2 bg-warn rounded-full' />
                    </div>
                    <p className='text-xl font-bold '>{event.text}</p>
                  </div>
                </Link>
              ))}
            </div>
          </Container>
        </div>
      </div>

      <div className='bg-white'>carousel</div>
    </div>
  )
}

export default Events
