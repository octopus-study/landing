'use client'

import { PropsWithChildren, createContext, useEffect, useState } from 'react'
import { StorageEnum } from '../shared/enums'
import { UserInterfaces } from '../shared/interfaces'

export const UserContext = createContext({})

export const UserState = ({ children }: PropsWithChildren) => {
  const [data, setaData] = useState<UserInterfaces.IUser | null>(null)

  const signedHandler = () => {
    setaData(JSON.parse(localStorage.getItem(StorageEnum.user) as string))
  }

  const onSign = (data: UserInterfaces.IUser) => {
    setaData(data)
  }

  useEffect(() => {
    signedHandler()
  }, [])

  return (
    <UserContext.Provider value={{ data, onSign }}>
      {children}
    </UserContext.Provider>
  )
}
