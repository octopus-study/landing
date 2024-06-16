import { combineReducers, configureStore } from '@reduxjs/toolkit'
import {
  TypedUseSelectorHook,
  useDispatch as useAppDispatch,
  useSelector as useAppSelector,
} from 'react-redux'
import authReducer from './slices/auth'
import userReducer from './slices/user'

const rootReducer = combineReducers({
  auth: authReducer,
  user: userReducer,
})

export type RootState = ReturnType<typeof rootReducer>

const store = configureStore({
  reducer: rootReducer,
})

export type AppDispatch = typeof store.dispatch

const { dispatch } = store

const useDispatch = () => useAppDispatch<AppDispatch>()
const useSelector: TypedUseSelectorHook<RootState> = useAppSelector

export { dispatch, store, useDispatch, useSelector }
