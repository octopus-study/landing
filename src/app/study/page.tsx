'use client'

import { Notification } from '@modules/notification'
import { CropImage, Disclosure, Timeline } from '../components/ui'
import { StudyConst } from '../shared/constants'
import { SvgIcon } from '../shared/ui'
import { StudyCard } from './components/card'

const Study = () => {
  return (
    <div>
      <div>
        <div className='h-96 relative'>
          <div className='absolute z-10 w-screen top-44 flex flex-col items-center gap-14 justify-center'>
            <h1 className='text-white text-5xl font-bold text-center'>
              Как поступить в школу <br />«{process.env.NEXT_PUBLIC_SCHOOL_NAME}
              »?
            </h1>
            <SvgIcon name='more' height={50} width={35} />
          </div>
          <CropImage
            src='https://sun9-37.userapi.com/impg/Zu9K6EYqvqUgsghDNiUdD2UFdJXBxen2NTT8OQ/V0GYp_A0Ces.jpg?size=1280x960&quality=95&sign=5e712b2e20470552318a48aac700163c&type=album'
            className='h-96 w-full object-cover'
          />
        </div>
      </div>

      <Notification text='Количество мест в 2023-2024 учебном году - 100' />

      <div className='bg-accent'>
        <div className='mx-8'>
          <h2 className='text-center text-white text-3xl font-bold'>
            Процесс отбора
          </h2>
          <div className='flex items-start justify-center gap-4'>
            {StudyConst.PROC_SELECTION.map((selection, idx) => (
              <StudyCard key={idx} number={idx + 1} {...selection} />
            ))}
          </div>
        </div>
      </div>

      <div className='bg-white'>
        {StudyConst.DESCRIPTION_TIMELINE.map((desc, idx) => (
          <Disclosure className='w-full' key={idx}>
            <Disclosure.Button>
              {idx + 1}. {StudyConst.TIMELINE[idx]}
            </Disclosure.Button>
            <Disclosure.Panel>{desc}</Disclosure.Panel>
          </Disclosure>
        ))}
      </div>

      <div className='bg-warn'>
        <Timeline steps={StudyConst.TIMELINE} />
      </div>
    </div>
  )
}

export default Study
