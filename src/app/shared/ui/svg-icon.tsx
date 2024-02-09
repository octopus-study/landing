import { SVGProps } from 'react'

type GenSvgNames = 'participant' | 'plus' | 'cross'
type SidebarSvgNames = 'calendar'
type SvgNames = GenSvgNames | SidebarSvgNames

type PrefixNames = 'general' | 'sidebar'

interface Props {
  height: number
  width: number
  name: SvgNames
  prefix?: PrefixNames
}

export const SvgIcon = ({
  name,
  prefix = 'general',
  ...props
}: SVGProps<SVGSVGElement> & Props) => (
  <svg {...props}>
    <use href={`/assets/icons/${prefix}-sprite.svg#${name}`} />
  </svg>
)
