import { Container, CropImage } from '../components/ui'
import { SvgIcon } from '../shared/ui'

const SRC =
  'https://sun9-37.userapi.com/impg/Zu9K6EYqvqUgsghDNiUdD2UFdJXBxen2NTT8OQ/V0GYp_A0Ces.jpg?size=1280x960&quality=95&sign=5e712b2e20470552318a48aac700163c&type=album' as const

export const SchoolSupportPage = () => {
  return (
    <div className='bg-white'>
      <div className='h-96 relative'>
        <div className='absolute z-10 w-screen top-44 flex flex-col items-center gap-20 justify-center'>
          <h1 className='text-white text-5xl font-bold'>Поддержка школы</h1>
          <SvgIcon name='more' height={50} width={35} />
        </div>
        <CropImage src={SRC} className='h-96 w-full object-cover' />
      </div>

      <div className='bg-white'>
        <div className='py-16'>
          <Container>
            <h3 className='font-bold text-4xl text-center'>Стать партнером</h3>

            <div className='flex items-start gap-4 mt-8'>
              <div className='flex flex-col justify-between'>
                <div>
                  <p className='text-2xl'>
                    <strong className='font-bold'>
                      {process.env.NEXT_PUBLIC_SCHOOL_NAME}
                    </strong>{' '}
                    — уникальная инновационная школа. Здесь подростки получают
                    навыки в ультра-современном здании, а команда школы создает
                    уникальные программы, используя новейшие технологии.
                  </p>
                </div>
                <div className='flex'>
                  <SvgIcon
                    name='red-arrow'
                    prefix='special'
                    width={125}
                    height={22}
                  />
                  <p className='text-xl'>
                    <strong className='font-bold'>Друзья школы</strong> —
                    представители самых разных целевых групп, вовлеченные в
                    развитие современного образования представители
                    технологических компаний, медиа и дизайна.
                  </p>
                </div>
              </div>
              <div className='bg-[#f1f1f1] p-6 rounded-2xl'>
                <p className='text-2xl'>
                  <strong className='font-bold'>
                    Выступая Партнером школы,
                  </strong>{' '}
                  ваша компания принимает участие в создании новых
                  образовательных проектов и реализации просветительских
                  программ; содействует развитию инклюзивного направления.
                </p>

                <div className='flex gap-4 bg-warn text-white text-xl rounded-2xl p-4 mt-6'>
                  <SvgIcon
                    name='trophy'
                    prefix='special'
                    width={100}
                    height={35}
                    fill='white'
                  />
                  <p>
                    <strong className='font-bold'>В статусе Партнера</strong>{' '}
                    школы вы открываете для вашего бизнеса широкие возможности
                    по ассоциации с образовательной институцией, обозначаете
                    свою социальную ответственность и получаете доступ к
                    уникальной аудитории.
                  </p>
                </div>
              </div>
            </div>
          </Container>
        </div>
      </div>

      <div className='bg-accent'>
        <div className='py-16'>
          <Container>
            <div className='flex justify-between bg-white rounded-2xl'>
              <div className='py-16 pl-8 flex flex-col justify-between w-full'>
                <h4 className='font-bold text-2xl'>
                  Вы можете реализовать самые смелые идеи в современном
                  пространстве школы.
                </h4>
                <p className='text-lg w-2/3'>
                  Позвоните нам, и мы предложим вам эффективные решения.
                </p>
              </div>
              <div className='h-72 w-3/4 rounded-2xl'>
                <img
                  src={SRC}
                  alt='idea'
                  className='h-72 w-full object-cover rounded-2xl'
                />
              </div>
            </div>
          </Container>
        </div>
      </div>
    </div>
  )
}
