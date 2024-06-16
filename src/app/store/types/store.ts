import { UserType } from '.'

type AuthProps = {
  isAuth: boolean
}

type UserProps = {
  profile: UserType.General | null
}

export type Reducer = {
  auth: AuthProps
  user: UserProps
}
