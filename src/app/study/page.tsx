'use client'

import { Container, CropImage, Disclosure, Timeline } from '../components/ui'
import { StudyConst } from '../shared/constants'
import { SvgIcon } from '../shared/ui'
import { StudyCard } from './components/card'
import { ExpectationCard } from './components/expectation-card'

const Study = () => {
  return (
    <div className='bg-white'>
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

      <div className='bg-accent mt-8'>
        <p className='text-xl text-white font-bold text-center py-2'>
          Количество мест в 2023-2024 учебном году - 100
        </p>
      </div>

      <Container className='py-12'>
        <div className='grid grid-cols-2 gap-8'>
          <div>
            <p className='text-4xl font-semibold'>
              Профиль ученика просветительской программы
            </p>
            <p className='text-2xl'>
              Возраст <strong className='text-warn'>от 12 до 17 лет</strong>
            </p>
          </div>
          <ExpectationCard iconName='society'>
            Готовность к кооперации и командному взаимодействию, коммуникативные
            навыки и критическое мышление, устойчивость, толерантность к
            высокому уровню неопределенности, гибкость, умение формулировать
            идеи и решать проблемы.
          </ExpectationCard>
          <ExpectationCard iconName='chart-line'>
            Желание развивать свои навыки в современных творческих и
            технологических направлениях.
          </ExpectationCard>
          <ExpectationCard iconName='lightbulb'>
            Активные, эрудированные, хорошо обучаемые, креативные, умные и
            талантливые дети, интересующиеся современными трендами в науке,
            технологиях и искусстве.
          </ExpectationCard>
        </div>
      </Container>

      <div className='bg-accent pb-10'>
        <Container className='mx-8'>
          <h2 className='text-center text-white text-3xl py-12 font-bold'>
            Процесс отбора
          </h2>
          <div className='flex items-start justify-center gap-4'>
            {StudyConst.PROC_SELECTION.map((selection, idx) => (
              <StudyCard key={idx} number={idx + 1} {...selection} />
            ))}
          </div>
          <button className='bg-warn w-full text-white mt-4 text-base rounded-3xl py-4'>
            Подать заявку на поступление
          </button>
        </Container>
      </div>

      <div>
        <img
          src='https://sun9-37.userapi.com/impg/Zu9K6EYqvqUgsghDNiUdD2UFdJXBxen2NTT8OQ/V0GYp_A0Ces.jpg?size=1280x960&quality=95&sign=5e712b2e20470552318a48aac700163c&type=album'
          alt='promo'
          className='object-cover h-96 w-full bg-center'
        />
      </div>

      <div className='py-12'>
        <Container>
          <h2 className='text-center font-bold text-3xl mb-12'>
            Карта проведения программы
          </h2>
          <Timeline steps={StudyConst.TIMELINE} />
          <div className='text-white bg-accent py-10 px-14 mt-8 rounded-3xl w-4/5 mx-auto'>
            <p className='text-2xl text-center font-semibold'>
              Три уровня достижений!
            </p>
            <p className='text-base text-justify mt-8'>
              Учеба по каждому направлению делится на уровни, как в компьютерной
              игре. А каждый уровень делится на два интересных этапа. Завершив
              воркшоп, студент возвращается к самостоятельной работе, где
              готовится к следующему проекту
            </p>
          </div>
        </Container>
      </div>

      <div className='py-12'>
        <Container>
          {StudyConst.DESCRIPTION_TIMELINE.map((desc, idx) => (
            <Disclosure className='w-full' key={idx}>
              <Disclosure.Button>
                {idx + 1}. {StudyConst.TIMELINE[idx]}
              </Disclosure.Button>
              <Disclosure.Panel>{desc}</Disclosure.Panel>
            </Disclosure>
          ))}
        </Container>
      </div>

      <div className='bg-warn'></div>
    </div>
  )
}

export default Study
