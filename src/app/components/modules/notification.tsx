import Link from 'next/link'

type Props = {
  text: string
  link?: {
    href: string
  }
}

export const Notification = ({ text, link }: Props) => {
  return (
    <div className='bg-blue-500 text-white text-center text-base py-4 font-bold'>
      {link?.href ? <Link href={link.href}>{text}</Link> : text}
    </div>
  )
}
