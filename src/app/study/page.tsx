'use client'

import { Notification } from '@modules/notification'
import { Disclosure, Timeline } from '../components/ui'
import { StudyConst } from '../shared/constants'
import { StudyCard } from './components/card'

const Study = () => {
  return (
    <div>
      <div>
        <div>
          <img src='https://thumb.tildacdn.com/tild3562-3833-4132-b338-353861376137/-/format/webp/Union.png' />
        </div>

        <div className='relative z-10 flex items-center justify-center'>
          <h1 className='text-white text-3xl font-bold uppercase'>
            Как поступить в школу «{process.env.NEXT_PUBLIC_SCHOOL_NAME}»?
          </h1>
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
