import { SyntheticEvent } from 'react'

export default function AdminSignIn() {
  const submitHandler = async (event: SyntheticEvent) => {
    event.preventDefault()
  }

  return (
    <main>
      <form>
        <input type='text' placeholder='name' />
        <input type='text' placeholder='password' />
      </form>
    </main>
  )
}
