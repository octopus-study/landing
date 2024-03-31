'use client'

import { SectionWithBackground } from '@components/modules/section/with-background'
import { Carousel } from '@components/ui'
import { SvgIcon } from '@shared/ui'
import { TranslateUtils } from '@shared/utils'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { Fragment, useEffect, useMemo, useRef, useState } from 'react'
import data from './MOCK'

interface IParticipant {
  first_name: string
  last_name: string
  role: string
  about: string
  slug: string
  isLead: boolean
  personal_img: string
}

export type SubjectDoc = {
  subject: string
  background_url: string
  participants: IParticipant[]
  about: string
  program: string[]
  full_program: {
    title: string
    description: string
    stages: string[]
    slider: string[]
    result: string
  }[]
  profit: {
    title: string
    text: string
  }
}

type Props = {
  params: {
    subject: string
  }
}

const Subject = ({ params }: Props) => {
  const [info, setInfo] = useState<SubjectDoc>()
  const trialRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!data[params.subject]) {
      return notFound()
    }

    window.scrollTo(0, 0)
    setInfo(data[params.subject])
  }, [params.subject])

  const leadParticipant = useMemo(
    () =>
      info?.participants.find(
        (participant) => participant.isLead
      ) as IParticipant,
    [info]
  )

  return (
    info && (
      <div>
        <div className='hidden'>
          <Carousel
            className='h-[680px] text-white bg-warn'
            imgList={[
              'https://thumb.tildacdn.com/tild3964-6265-4563-b666-373135633766/-/format/webp/116.png',
              'https://thumb.tildacdn.com/tild3939-3036-4634-a430-346335613438/-/format/webp/27.png',
            ]}
          />
        </div>

        <SectionWithBackground imgList={[info!.background_url]} fullScreen>
          <div className='flex flex-col items-center justify-center h-full gap-4'>
            <div className='mx-auto inline-flex gap-2 self-start items-center bg-black text-white justify-center px-3 py-1 rounded-2xl text-xl'>
              <p>{leadParticipant.role}</p>
              <div className='w-1.5 h-1.5 rounded-full bg-warn' />
              <Link
                href={`/participants/${leadParticipant.slug}`}
                className='hover:text-warn ease-in-out duration-300'
              >{`${leadParticipant.first_name} ${leadParticipant.last_name}`}</Link>
            </div>
            <h3 className='text-7xl text-white font-semibold'>
              {info!.subject}
            </h3>
          </div>
        </SectionWithBackground>

        <div className='bg-white py-14'>
          {/* container */}
          <div className='flex items-start gap-12 mx-12'>
            {/* left */}
            <div>
              <h4 className='text-4xl font-semibold'>О чем курс?</h4>
              <p className='mt-6 text-xl font-medium'>
                Этот курс для тех, кто мечтает сделать свое видео и с первых же
                секунд захватить зрителя. В мастерских TUMO ты пройдешь все
                этапы кинопроизводства, подружишься с профессиональной техникой
                и поймешь, почему так важно уметь работать в команде.
              </p>
            </div>
            {/* right */}
            <div className='grid grid-cols-3'>
              <div>
                <p className='text-base font-bold'>Програма курса</p>
                <hr className='bg-black h-[1px] my-6 w-4/5' />
                <div className='flex items-center text-base gap-3'>
                  <SvgIcon name='star' width={16} height={16} />
                  <p>Уровень 1</p>
                </div>
                <p className='mt-8 font-medium text-base'>{info!.program[0]}</p>
              </div>
              <div className='mt-6'>
                <hr className='bg-black h-[1px] my-6 w-4/5' />
                <div className='flex items-center text-base gap-3'>
                  <SvgIcon name='star' width={16} height={16} />
                  <p>Уровень 2</p>
                </div>
                <p className='mt-8 font-medium text-base'>{info!.program[1]}</p>
              </div>
              <div className='mt-6'>
                <hr className='bg-black h-[1px] my-6 w-4/5' />
                <div className='flex items-center text-base gap-3'>
                  <SvgIcon name='star' width={16} height={16} />
                  <p>Уровень 3</p>
                </div>
                <p className='mt-8 font-medium text-base'>{info!.program[2]}</p>
              </div>
            </div>
          </div>
        </div>

        {info!.full_program.map((program, idx) => (
          <Fragment key={idx}>
            <Carousel
              className='h-[680px] text-white bg-warn'
              imgList={[
                'https://thumb.tildacdn.com/tild3964-6265-4563-b666-373135633766/-/format/webp/116.png',
                'https://thumb.tildacdn.com/tild3939-3036-4634-a430-346335613438/-/format/webp/27.png',
              ]}
            />
            <div className='bg-white py-14'>
              {/* container */}
              <div className='flex items-start gap-12 mx-12'>
                {/* left */}
                <div>
                  <p className='text-2xl font-semibold'>Уровень {idx + 1}</p>
                  <p className='text-4xl font-semibold my-6'>{program.title}</p>
                  <p className='text-xl font-medium'>{program.description}</p>
                  {idx === 0 && (
                    <button
                      className='bg-accent text-white text-xl font-semibold p-4 rounded-3xl mt-10'
                      onClick={() => {
                        trialRef.current?.scrollIntoView({ behavior: 'smooth' })
                      }}
                    >
                      Бесплатный пробный урок
                    </button>
                  )}
                </div>
                {/* right */}
                <div className='grid grid-cols-2 gap-8'>
                  {program.stages.map((stage, stageIdx) => (
                    <div className='flex items-start gap-4' key={stageIdx}>
                      <div className='w-[1px] h-32 bg-black pt-8' />
                      <div className='flex flex-col'>
                        <p className='text-2xl font-medium'>
                          {(stageIdx + 1).toLocaleString('en-US', {
                            minimumIntegerDigits: 2,
                            useGrouping: false,
                          })}
                          .
                        </p>
                        <p className='text-xl font-normal'>{stage}</p>
                      </div>
                    </div>
                  ))}
                  <div className='bg-black rounded-3xl text-white p-10'>
                    <div className='flex items-center gap-4'>
                      <SvgIcon name='star' width={14} height={14} />
                      <p className='text-2xl font-medium'>
                        Итог{' '}
                        {TranslateUtils.toGenitive(
                          TranslateUtils.textFromIdx(idx)
                        )}{' '}
                        уровня
                      </p>
                    </div>
                    <p className='text-xl font-medium mt-8'>{program.result}</p>
                  </div>
                </div>
              </div>
            </div>
          </Fragment>
        ))}

        <div className='bg-white px-8'>
          <h3 className='text-4xl font-semibold mb-16'>Кураторы</h3>

          {info!.participants.map((participant, idx) => (
            <div className='flex items-start gap-10' key={idx}>
              <div className='w-full h-[1000px]'>
                <img
                  className='w-full object-cover h-full'
                  src={participant.personal_img}
                  alt={`${participant.first_name} ${participant.last_name}`}
                />
              </div>
              <div className='w-3/4'>
                <h4 className='font-bold text-3xl'>
                  {participant.first_name} {participant.last_name}
                </h4>
                <p className='text-xl mt-8'>{participant.about}</p>
              </div>
            </div>
          ))}
        </div>

        <div className='bg-white pb-10'>
          <div className='mx-8 py-12'>
            <div className='flex items-start justify-between gap-8'>
              <div>
                <p className='text-4xl font-medium'>{info!.profit.title}</p>
              </div>

              <div className='bg-black text-white rounded-3xl p-8'>
                <p className='text-2xl'>{info!.profit.text}</p>
              </div>
            </div>

            <div
              className='bg-black mt-12 text-white rounded-[48px] py-10 px-16 flex justify-between relative'
              ref={trialRef}
            >
              <div className='w-1/2'>
                <div className='text-6xl'>
                  <p className='bg-[#FF0000] inline-block rounded-3xl px-4 font-bold'>
                    Бесплатный
                  </p>
                  <p className='font-bold ml-5'>пробный урок</p>
                </div>
                <div className='my-8'>
                  <p className='text-xl'>
                    Познакомьтесь с командой и программой обучения в{' '}
                    {process.env.NEXT_PUBLIC_SCHOOL_NAME} на пробном уроке по
                    любому из направлений
                  </p>
                </div>
                <button className='bg-accent text-xl font-semibold p-4 rounded-3xl'>
                  Оставить заявку
                </button>
              </div>
              <div className='w-96 h-96 absolute -right-5 top-20'>
                <img
                  src='https://thumb.tildacdn.com/tild3239-3566-4936-b438-373761323032/-/resize/862x/-/format/webp/Copy_of_0325_1.png'
                  alt='заявка'
                  className='h-96 w-96 object-cover'
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  )
}

export default Subject
