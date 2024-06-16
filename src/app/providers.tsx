'use client'

import { PropsWithChildren } from 'react'
import { Provider } from 'react-redux'
import { UiState } from './contexts/ui'
import { UserState } from './contexts/user'
import { store } from './store'

export const Providers = ({ children }: PropsWithChildren) => (
  <Provider store={store}>
    <UiState>
      <UserState>{children}</UserState>
    </UiState>
  </Provider>
)
