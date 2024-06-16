import { WindowRef } from '@/app/refs'
import { ApiConst } from '@/app/shared/constants'
import { TransformUtils } from '@/app/shared/utils'
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { toast } from 'sonner'
import { UserSlice } from '.'
import { AuthType, StoreType, UserType } from '../types'

const initialState: StoreType.Reducer['auth'] = {
  isAuth: WindowRef.isExist
    ? !!JSON.parse(localStorage.getItem('@user') as string)
    : false,
}

export const authSlice = createSlice({
  name: 'authSlice',
  initialState,
  reducers: {
    hydrate: (state, action) => {
      return { ...state, ...action.payload }
    },
    logout: (state) => {
      return { ...state, isAuth: false }
    },
  },
  extraReducers(builder) {
    builder
      .addCase(login.fulfilled, (state) => {
        state.isAuth = true
      })
      .addCase(register.fulfilled, (state) => {
        state.isAuth = true
      })
  },
})

export const { hydrate, logout } = authSlice.actions

export const login = createAsyncThunk<unknown, AuthType.Login>(
  'authSlice/login',
  async (userData) => {
    const response = await fetch(`${ApiConst.API_URL}/users.json`)
    const usersRaw = await response.json()
    const users = TransformUtils.normalizeFbData(usersRaw) as UserType.General[]
    const candidate = users.find(
      (user) =>
        user.email === userData.email && user.password === userData.password
    )
    if (!candidate) {
      throw new Error('er')
    }
    return candidate
  }
)

export const register = createAsyncThunk<
  void,
  Omit<AuthType.Register, 'confirmPassword'>
>('auth/register', async (userData, { dispatch }) => {
  const usersResponse = await fetch(`${ApiConst.API_URL}/users.json`)
  const usersRaw = await usersResponse.json()
  if (usersRaw) {
    const users = Object.keys(usersRaw).map((key) => {
      return usersRaw[key]
    }) as UserType.General[]
    if (users.some((user) => user.email === userData.email)) {
      toast('Что-то пошло не так')
      throw new Error('is Exist')
    }
  }
  await fetch(`${ApiConst.API_URL}/users.json`, {
    method: 'POST',
    body: JSON.stringify(userData),
  })
  dispatch(UserSlice.onSet(userData))
})

export default authSlice.reducer
