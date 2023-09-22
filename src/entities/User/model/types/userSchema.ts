import { type User } from './user'

interface UserSchema {
  authData?: User

  _initialized: boolean
}

export type { UserSchema }
