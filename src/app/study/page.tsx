import { Notification } from '@modules/notification'
import { StudyCard } from './components/card'

const Study = () => {
  return (
    <div>
      <div>
        <div className=''>
          <img src='https://thumb.tildacdn.com/tild3562-3833-4132-b338-353861376137/-/format/webp/Union.png' />
        </div>

        <div className='relative z-10 flex items-center justify-center'>
          <h1 className='text-white text-3xl font-bold uppercase'>
            Как поступить в школу «...»?
          </h1>
        </div>
      </div>

      <Notification text='Количество мест в 2023-2024 учебном году - 100' />

      <StudyCard img='https://thumb.tildacdn.com/tild6366-6665-4236-a336-363561333962/-/cover/556x716/center/center/-/format/webp/fab65e30-8eae-4872-b.png' />
    </div>
  )
}

export default Study
