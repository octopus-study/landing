import { SVGProps } from 'react'
import { EmojiNames } from '../interfaces/emoji'

type GenSvgNames =
  | 'participant'
  | 'plus'
  | 'cross'
  | 'more'
  | 'star'
  | 'society'
  | 'lightbulb'
  | 'chart-line'
type SocialSvgNames = 'whatsapp' | 'telegram'
type SidebarSvgNames = 'calendar'
export type SvgNames =
  | GenSvgNames
  | SidebarSvgNames
  | EmojiNames
  | SocialSvgNames

type PrefixNames = 'general' | 'sidebar' | 'emoji' | 'social'

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
