import { type UserRole } from '../consts/consts'

export interface User {
  id: string
  username: string
  avatar?: string
  roles?: UserRole[]
}
