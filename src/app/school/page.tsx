import { Metadata } from 'next'

export const metadata: Metadata = {
  title: `Учиться у нас ${process.env.NEXT_PUBLIC_SCHOOL_NAME}`,
}

const School = () => {
  return <div>school</div>
}

export default School
