import { PropsWithChildren } from 'react'
import { Container, CropImage } from '../components/ui'
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

      <div className='bg-accent py-16'>
        <h2 className='text-4xl font-bold text-center text-white mb-16'>
          О финансировании
        </h2>

        <Container className='flex flex-col mx-4 items-center'>
          <div className='flex items-start gap-6'>
            <FinanceCard title='Успейте подать заявку' showControls>
              Если вам требуется поддержка или вы планируете искать
              финансирование на участие в программе после того, как узнаете о
              зачислении,{' '}
              <strong>
                подавайте заявку как можно раньше – это даст нам больше времени,
                чтобы предложить поддержку учеников потенциальным меценатам.
              </strong>
            </FinanceCard>
            <FinanceCard title='Стипендия на программу'>
              Любой кандидат при подаче заявки может указать необходимость
              финансовой поддержки для оплаты участия в программе.
              {` ${process.env.NEXT_PUBLIC_SCHOOL_NAME} `}
              предоставляет такую возможность и стремится привлечь для этого
              партнеров и сообщество, но мы не можем гарантировать конкретное
              число мест и зачисление на ближайший поток.
            </FinanceCard>
          </div>

          <div className='bg-white rounded-xl py-5 px-8 mt-6 w-full'>
            <div className='h-72 w-full'>
              <img
                src={SRC}
                alt='octopus'
                className='h-72 w-full object-cover rounded-2xl'
              />
            </div>
            <div className='my-4'>
              <p className='text-xl text-justify [text-align-last:center]'>
                <strong>{process.env.NEXT_PUBLIC_SCHOOL_NAME}</strong> стремится
                привлекать бизнес-компании и частных филантропов для
                финансирования обучения наших учеников, чтобы как можно больше
                детей имело возможность получить новые навыки и ресурсы для
                развития своих творческих проектов.
              </p>
            </div>
          </div>
        </Container>
      </div>

      <div className='py-16'>
        <Container>
          <div className='flex items-start gap-6'>
            <div className='bg-warn text-white rounded-3xl p-8'>
              <h3 className='text-2xl font-bold w-2/3'>
                Финансовая поддержка для оплаты участия в программе может
                покрывать до 100% от стоимости курса.
              </h3>
              <div className='flex justify-between items-end relative mt-3'>
                <p className='text-lg'>
                  Мы уверены, что осознанная инвестиция в свое образование
                  мотивирует студентов максимально отдаваться учебе и добиваться
                  результатов уже в процессе прохождения программы. Это
                  доказывают и многочисленные примеры выпускников, сообщество
                  которых уже пересекло отметку в 800 участников!
                </p>
                <SvgIcon
                  name='more'
                  className='absolute right-0'
                  width={35}
                  height={50}
                />
              </div>
            </div>
            <div className='h-full rounded-3xl'>
              <img
                src={SRC}
                alt='octopus finance'
                className='h-full rounded-3xl object-cover'
              />
            </div>
          </div>

          <div className='bg-black flex items-center justify-between px-8 pt-14 pb-8 rounded-3xl mt-6'>
            <div className='text-white w-2/3'>
              <p className='text-2xl font-bold'>
                Изучайте возможности софинансирования на нашем сайте и
                заполняйте заявку на участие в программе{' '}
                {process.env.NEXT_PUBLIC_SCHOOL_NAME} — их прием продлится до 20
                июня
              </p>
            </div>
            <button className='bg-white text-dark rounded-3xl text-2xl font-bold px-12 py-4'>
              Заполнить форму
            </button>
          </div>
        </Container>
      </div>
    </div>
  )
}

type FinanceProps = {
  title: string
  showControls?: boolean
} & PropsWithChildren

const FinanceCard = ({ title, children, showControls }: FinanceProps) => (
  <div className='bg-black text-white py-8 px-6 max-w-xl rounded-2xl flex-1'>
    <div className='flex items-center gap-2'>
      <SvgIcon name='star' width={32} height={32} />
      <h4 className='text-3xl font-bold'>{title}</h4>
    </div>
    <div className='my-4'>
      <p className='text-xl font-normal'>{children}</p>
    </div>
    {showControls && (
      <div className='my-8'>
        <a
          target='_blank'
          rel='noopener noreferrer'
          href='#'
          className='bg-warn p-4 rounded-full text-lg font-semibold'
        >
          Подать заявку на поступление
        </a>
      </div>
    )}
  </div>
)
