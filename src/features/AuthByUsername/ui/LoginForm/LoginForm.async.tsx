import { type FC, lazy } from 'react'
import { type LoginFormProps } from 'features/AuthByUsername/ui/LoginForm/LoginForm'

const LoginFormAsync = lazy<FC<LoginFormProps>>(async () => await new Promise((resolve) => {
  setTimeout(() => {
    resolve(import('./LoginForm'))
  }, 1500)
}))

export { LoginFormAsync }
