import { HTMLAttributes } from 'react'

type Props = {
  number: number
} & HTMLAttributes<HTMLDivElement>

export const NumericDot = ({ number, ...props }: Props) => (
  <div
    className='relative w-10 h-10 bg-warn rounded-full text-white text-xl animate-out fade-in repeat-1'
    {...props}
  >
    <div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2'>
      {number}
    </div>
  </div>
)
