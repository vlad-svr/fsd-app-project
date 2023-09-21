import { type Country, type Currency } from 'shared/constants/common'

export interface Profile {
  first: string
  lastname: string
  age: 22
  currency: Currency
  country: Country
  city: string
  username: string
  avatar: string
}

export interface ProfileSchema {
  data?: Profile
  isLoading: boolean
  error?: string
  readonly: boolean
}
