import { SvgIcon } from '@/app/shared/ui'
import { SvgNames } from '@/app/shared/ui/svg-icon'
import { PropsWithChildren } from 'react'

type Props = {
  iconName: SvgNames
} & PropsWithChildren

export const ExpectationCard = ({ iconName, children }: Props) => (
  <div className='flex items-end gap-4'>
    <div className='w-1 h-full bg-black pt-8' />
    <div className='flex flex-col'>
      <SvgIcon name={iconName} width={45} height={45} />
      <p className='text-xl font-normal mt-4'>{children}</p>
    </div>
  </div>
)
