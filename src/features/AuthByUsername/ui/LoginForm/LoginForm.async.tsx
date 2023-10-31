import { type FC, lazy } from 'react'
import { type LoginFormProps } from 'features/AuthByUsername/ui/LoginForm/LoginForm'

const LoginFormAsync = lazy<FC<LoginFormProps>>(() => import('./LoginForm'))

export { LoginFormAsync }
