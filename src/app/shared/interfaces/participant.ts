export interface IParticipant {
  first_name: string
  last_name: string
  age: number
  sex: 'male' | 'female'
  role: string
  about: string
  slug: string
  img: {
    offset: number
    url: string
  }
}
