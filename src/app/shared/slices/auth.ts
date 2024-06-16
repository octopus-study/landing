import { ApiConst } from '../constants'
import { UserType } from '../types'
import { TransformUtils } from '../utils'

export const login = async (userData: UserType.Auth) => {
  try {
    const response = await fetch(`${ApiConst.API_URL}/users.json`)
    const users = TransformUtils.normalizeFbData(
      await response.json()
    ) as UserType.Auth[]
    const candidate = users.some(
      (user) =>
        user.email === userData.email && user.password === userData.password
    )
    if (!candidate) {
      throw new Error('403')
    }
    return candidate
  } catch (err) {
    console.log(err)
  }
}

export const register = async (userData: UserType.Auth) => {
  try {
    const usersResponse = await fetch(`${ApiConst.API_URL}/users.json`)
    const usersRaw = await usersResponse.json()
    if (usersRaw) {
      const users = Object.keys(usersRaw).map((key) => {
        return usersRaw[key]
      }) as UserType.Auth[]
      if (users.some((user) => user.email === userData.email)) {
        throw new Error('is Exist')
      }
    }
    await fetch(`${ApiConst.API_URL}/users.json`, {
      method: 'POST',
      body: JSON.stringify(userData),
    })
    return userData
  } catch (err) {
    console.log(err)
  }
}
