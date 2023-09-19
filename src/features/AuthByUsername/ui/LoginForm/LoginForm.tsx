import { memo, useCallback } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useTranslation } from 'react-i18next'
import cls from './LoginForm.module.scss'
import classNames from 'shared/lib/classNames/classNames'
import { Button, ButtonTheme } from 'shared/ui/Button/Button'
import { Input } from 'shared/ui/Input/Input'
import { loginActions, loginReducer } from '../../model/slice/loginSlice'
import { loginByUsername } from '../../model/services/loginByUsername/loginByUsername'
import { Text, TextTheme } from 'shared/ui/Text/Text'
import { getLoginUsername } from '../../model/selectors/getLoginUsername/getLoginUsername'
import { getLoginPassword } from '../../model/selectors/getLoginPassword/getLoginPassword'
import { getLoginError } from '../../model/selectors/getLoginError/getLoginError'
import { getLoginIsLoading } from '../../model/selectors/getLoginIsLoading/getLoginIsLoading'
import { DynamicModuleLoader, type ReducersList } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader'

interface LoginFormProps {
  className?: string
}

const initialReducers: ReducersList = {
  loginForm: loginReducer
}

const LoginForm = memo(({ className }: LoginFormProps) => {
  const { t } = useTranslation()
  const dispatch = useDispatch()
  const username = useSelector(getLoginUsername)
  const password = useSelector(getLoginPassword)
  const isLoading = useSelector(getLoginIsLoading)
  const error = useSelector(getLoginError)

  const onChangeUsername = useCallback((value: string) => {
    dispatch(loginActions.setUsername(value))
  }, [dispatch])

  const onChangePassword = useCallback((value: string) => {
    dispatch(loginActions.setPassword(value))
  }, [dispatch])

  const onLoginClick = useCallback(() => {
    dispatch(loginByUsername({ username, password }) as any)
  }, [dispatch, password, username])

  return (
      <DynamicModuleLoader reducers={initialReducers} removeAfterUnmount>
          <div className={classNames(cls.wrapper, {}, [className])}>
              <Text title={t('login_form')} />
              {error && <Text text={t('wrong_auth_data')} theme={TextTheme.ERROR} />}
              <Input
                  value={username}
                  onChange={onChangeUsername}
                  label={t('enter_username')}
                  className={cls.input}
                  type="text"
                  autoFocus
              />
              <Input
                  value={password}
                  onChange={onChangePassword}
                  label={t('enter_password')}
                  className={cls.input}
                  type="password"
              />
              <Button
                  onClick={onLoginClick}
                  theme={ButtonTheme.OUTLINE}
                  className={cls.login_btn}
                  disabled={isLoading}
              >
                  {t('Login')}
              </Button>
          </div>
      </DynamicModuleLoader>
  )
})

export default LoginForm
export type { LoginFormProps }
