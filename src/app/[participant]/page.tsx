type Props = {
  params: {
    participant: string
  }
}

const Participant = ({ params }: Props) => {
  console.log('params: ', params.participant)

  return (
    <div>
      <p>Participant {params.participant}</p>
    </div>
  )
}

export default Participant
