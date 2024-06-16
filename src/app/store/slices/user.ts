import { WindowRef } from '@/app/refs'
import { createSlice } from '@reduxjs/toolkit'
import { StoreType } from '../types'

const valueFromStorage = (key: string, defaultValue: any) => {
  if (WindowRef.isExist) {
    const storageValue = JSON.parse(localStorage.getItem(key) as string)
    return storageValue ? storageValue : defaultValue
  } else {
    return defaultValue
  }
}

const initialState: StoreType.Reducer['user'] = {
  profile: valueFromStorage('@user', null),
}

export const userSlice = createSlice({
  name: 'userSlice',
  initialState,
  reducers: {
    onSet(state, action) {
      state.profile = action.payload
    },
    reset() {
      return initialState
    },
  },
  extraReducers() {},
})

export const { reset, onSet } = userSlice.actions

export default userSlice.reducer
