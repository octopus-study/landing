import { NumericDot } from '@ui/index'

type Props = {
  img: string
  title: string
  description: string
  number: number
}

export const StudyCard = ({ img, title, description, number }: Props) => {
  return (
    <div className='inline-flex flex-col w-52 md:w-72 rounded-lg'>
      <div
        className='h-72 md:h-96 bg-cover rounded-lg flex flex-col justify-end'
        style={{ backgroundImage: `url(${img})` }}
      >
        {/* <img src={img} alt='img card' /> */}
        <div className='flex items-center mb-2 bg-white mx-2 rounded-3xl gap-2 md:gap-8 p-1'>
          <NumericDot number={number} />
          <p className='text-center'>{title}</p>
        </div>
      </div>
      <div className='mt-4'>
        <p className='text-white'>{description}</p>
      </div>
    </div>
  )
}
