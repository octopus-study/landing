import { AdminParticipantCard } from './card'

const getData = async () => {
  try {
    return [{ name: 'lox' }]
  } catch (err) {
    console.log(err)
  }
}

export default async function AdminParticipant() {
  const participants = await getData()

  console.log('part: ', participants)

  return (
    <main>
      {participants?.map((participant, idx) => (
        <AdminParticipantCard key={idx} info={participant} />
      ))}
    </main>
  )
}
