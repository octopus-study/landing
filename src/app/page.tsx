import { Notification } from './components/modules/notification'
import { SectionWithBackground } from './components/modules/section/with-background'
import { ParticipantCard } from './components/participant-card'

export default function Home() {
  return (
    <div>
      <div className='mt-16 absolute z-50 w-full'>
        <Notification
          link={{ href: '/study' }}
          text='Прием заявок на 2023-2024 учебный год закрыт! Благодарим всех, кто прислал свою заявку!'
        />
      </div>
      <SectionWithBackground
        imgList={[
          'https://sun9-37.userapi.com/impg/Zu9K6EYqvqUgsghDNiUdD2UFdJXBxen2NTT8OQ/V0GYp_A0Ces.jpg?size=1280x960&quality=95&sign=5e712b2e20470552318a48aac700163c&type=album',
          'https://sun9-3.userapi.com/impg/7ZmTU4OLSk2Ru0K-aCRuc-O1oKZDVdj_LXVpQg/ybBMVF4ihrA.jpg?size=1280x960&quality=95&sign=834e38ef9e44ea687f9f01edf9836eb4&type=album',
        ]}
        fullScreen
      >
        <div className='flex justify-center items-center h-full'>
          <h1 className='text-white text-4xl tracking-widest opacity-65'>
            {process.env.NEXT_PUBLIC_SCHOOL_NAME!.toUpperCase()}
          </h1>
        </div>
      </SectionWithBackground>

      <SectionWithBackground
        fullScreen
        imgList={[
          'https://sun9-37.userapi.com/impg/Zu9K6EYqvqUgsghDNiUdD2UFdJXBxen2NTT8OQ/V0GYp_A0Ces.jpg?size=1280x960&quality=95&sign=5e712b2e20470552318a48aac700163c&type=album',
        ]}
      >
        <ParticipantCard
          subject={{
            icon: '',
            name: 'Кинопроизводство',
            participant: {
              first_name: 'Александра',
              last_name: 'Петровская',
              role: 'Куратор',
            },
          }}
          theme='dark'
          nextReactionText='Интересно!'
        />
      </SectionWithBackground>

      <SectionWithBackground
        fullScreen
        imgList={[
          'https://sun9-37.userapi.com/impg/Zu9K6EYqvqUgsghDNiUdD2UFdJXBxen2NTT8OQ/V0GYp_A0Ces.jpg?size=1280x960&quality=95&sign=5e712b2e20470552318a48aac700163c&type=album',
        ]}
      >
        <ParticipantCard
          subject={{
            icon: '',
            name: '3D-моделирование',
            participant: {
              first_name: 'Егор',
              last_name: 'Иванов',
              role: 'Куратор',
            },
          }}
          theme='light'
          nextReactionText='Интересно!'
        />
      </SectionWithBackground>
    </div>
  )
}
