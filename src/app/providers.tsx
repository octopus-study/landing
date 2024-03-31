import { PropsWithChildren } from 'react'
import { UiState } from './contexts/ui'
import { UserState } from './contexts/user'

export const Providers = ({ children }: PropsWithChildren) => (
  <UiState>
    <UserState>{children}</UserState>
  </UiState>
)
