import { CropImage } from '../components/ui'
import { SvgIcon } from '../shared/ui'

const SRC =
  'https://sun9-37.userapi.com/impg/Zu9K6EYqvqUgsghDNiUdD2UFdJXBxen2NTT8OQ/V0GYp_A0Ces.jpg?size=1280x960&quality=95&sign=5e712b2e20470552318a48aac700163c&type=album' as const

export const EducationSupportPage = () => {
  return (
    <div className='bg-white'>
      <div className='h-96 relative'>
        <div className='absolute z-10 w-screen top-44 flex flex-col items-center gap-20 justify-center'>
          <h1 className='text-white text-5xl font-bold'>
            Финансовая поддержка
          </h1>
          <SvgIcon name='more' height={50} width={35} />
        </div>
        <CropImage src={SRC} className='h-96 w-full object-cover' />
      </div>

      <div className='bg-white flex justify-center my-8'>
        <div className='bg-gray-200 text-center rounded-lg mx-20 max-w-4xl p-12 text-xl flex flex-col gap-4'>
          <p>
            <strong>{process.env.NEXT_PUBLIC_SCHOOL_NAME}</strong> предоставляет
            студентам возможность получить финансовую поддержку в оплате
            программы и стремится привлечь для этого партнеров и сообщество.
          </p>
          <p>
            К сожалению, мы не можем гарантировать конкретное число мест,
            которые смогут получить финансовую поддержку.
          </p>
          <p>
            Мы формируем список кандидатов на получение финансовой помощи в
            процессе отбора, а о финальном решении сообщаем на этапе зачисления.
          </p>
        </div>
      </div>

      <div className='bg-accent'>
        <p>hello</p>
      </div>
    </div>
  )
}
