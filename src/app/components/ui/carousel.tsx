import { Carousel as FlowCarousel } from 'flowbite-react'
import { HTMLAttributes } from 'react'

type Props = {
  imgList: string[]
  autoSlideInterval?: number
  autoSlide?: boolean
}

export const Carousel = ({
  imgList,
  autoSlide,
  autoSlideInterval = 3000,
  ...props
}: Props & HTMLAttributes<HTMLDivElement>) => {
  return (
    <div className='h-96'>
      <FlowCarousel slide indicators>
        {imgList.map((item, idx) => (
          <img className='w-screen' key={idx} src={item} />
        ))}
      </FlowCarousel>
    </div>
  )
}
