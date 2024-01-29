import { SyntheticEvent } from 'react'

export const AdminParticipantEditPopup = () => {
  const submitHandler = async (event: SyntheticEvent) => {
    event.preventDefault()
  }

  return (
    <form onSubmit={submitHandler}>
      <input type='text' placeholder='holder' />
    </form>
  )
}
