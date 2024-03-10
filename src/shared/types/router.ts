import type { RouteProps } from 'react-router-dom'
// eslint-disable-next-line
import { UserRole } from '@/entities/User'

type AppRoutesProps = RouteProps & {
  authOnly?: boolean
  roles?: UserRole[]
}
export type { AppRoutesProps }
