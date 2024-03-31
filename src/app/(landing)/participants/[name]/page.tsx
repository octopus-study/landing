type Props = {
  params: {
    name: string
  }
}

const Participant = ({ params }: Props) => {
  console.log('params: ', params.name)

  return (
    <div className='text-white'>
      <p>
        Participant slug: <strong>{params.name}</strong>
      </p>
    </div>
  )
}

export default Participant
