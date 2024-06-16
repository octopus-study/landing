import { LinkProps } from 'next/link'

interface Props extends LinkProps {
  text: string
  className?: string
}

export const MAIN: Props[] = [
  // { href: '/school', text: 'О школе' },
  { href: '/study', text: 'Учиться у нас' },
  {
    href: { pathname: '/support', query: 'entity=education' },
    text: 'Поддержка в обучении',
  },
  {
    href: { pathname: '/support', query: 'entity=school' },
    text: 'Поддержка школы',
  },
  { href: '/events', text: 'События', className: '!bg-dark !text-white' },
]
