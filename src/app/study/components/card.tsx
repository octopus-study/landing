type Props = {
  img: string
}

export const StudyCard = ({ img }: Props) => {
  return (
    <div className='inline-flex flex-col'>
      <div
        className='h-96 w-72 bg-cover flex flex-col justify-end'
        style={{ backgroundImage: `url(${img})` }}
      >
        {/* <img src={img} alt='img card' /> */}
        <div className='flex items-center mb-2 bg-white mx-2 rounded-2xl'>
          <div className='flex justify-center items-center bg-red-500 px-4 py-2 rounded-full text-xl text-white'>
            1
          </div>
          <p className='text-center'>Заявка на сайте</p>
        </div>
      </div>
      <div>text</div>
    </div>
  )
}
