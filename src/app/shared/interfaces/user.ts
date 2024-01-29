export interface IUser {
  first_name: string
  last_name: string
  age: number
  sex: 'male' | 'female'
  img: {
    offset: number
    url: string
  }
}
