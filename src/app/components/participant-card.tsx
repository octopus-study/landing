import Link from 'next/link'
import { EmojiNames } from '../shared/interfaces/emoji'
import { SvgIcon } from '../shared/ui'

type Props = {
  theme: 'dark' | 'light'
  nextButton: {
    text: string
    emoji: EmojiNames
    goto: string
  }
  subject: {
    name: string
    icon: string
    participant: {
      role: string
      first_name: string
      last_name: string
      slug: string
    }
  }
}

export const ParticipantCard = ({ theme, subject, nextButton }: Props) => {
  return (
    <div className='flex ml-56 items-center h-full'>
      <div
        className={`inline-flex flex-col bg-opacity-90 px-5 py-4 rounded-2xl ${
          theme === 'dark' ? 'bg-dark text-white' : 'bg-white text-dark'
        }`}
      >
        <div className='h-20 w-20 rounded-full'>
          <img
            className='object-cover'
            src='https://thumb.tildacdn.com/tild3732-3337-4661-a138-633261393339/-/cover/170x170/center/center/-/format/webp/7.png'
            alt='subject img'
          />
        </div>
        <div className='inline-flex gap-2 self-start items-center bg-black text-white justify-center px-3 py-1 rounded-2xl text-xl my-3'>
          <p>{subject.participant.role}</p>
          <div className='w-1.5 h-1.5 rounded-full bg-white' />
          <Link
            href={`/participants/${subject.participant.slug}`}
            className='hover:text-warn ease-in-out duration-300'
          >{`${subject.participant.first_name} ${subject.participant.last_name}`}</Link>
        </div>

        <div className='flex flex-col'>
          <div id='body-card' className='flex-1'>
            <h1 className='text-5xl my-3 font-bold'>{subject.name}</h1>
            <div className='max-w-[470px]'>
              <p className='text-base text-justify'>
                Здесь ты освоишь весь процесс создания кино: напишешь сценарий,
                снимешь яркие сцены, смонтируешь фильм или клип. Ты станешь
                режиссером и поймешь, что кино – это не только творчество, но и
                умение
              </p>
            </div>
          </div>
          {nextButton && (
            <div className='inline-flex self-start bg-dark hover:bg-zinc-700 text-white px-4 py-3 rounded-2xl duration-150 mt-6'>
              <Link
                href={`/${nextButton.goto}`}
                className='text-base font-bold'
              >
                <div className='flex items-center justify-between'>
                  <p>{nextButton.text}</p>
                  {nextButton.emoji && (
                    <SvgIcon
                      prefix='emoji'
                      name={nextButton.emoji}
                      width={16}
                      height={16}
                      fill='white'
                    />
                  )}
                </div>
                <p>Узнать больше...</p>
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
