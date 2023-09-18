import { memo, useCallback } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useTranslation } from 'react-i18next'
import cls from './LoginForm.module.scss'
import classNames from 'shared/lib/classNames/classNames'
import { Button, ButtonTheme } from 'shared/ui/Button/Button'
import { Input } from 'shared/ui/Input/Input'
import { loginActions } from '../../model/slice/loginSlice'
import { loginByUsername } from '../../model/services/loginByUsername/loginByUsername'
import { getLoginState } from '../../model/selectors/getLoginState/getLoginState'
import { Text, TextTheme } from 'shared/ui/Text/Text'

interface LoginFormProps {
  className?: string
}

const LoginForm = memo(({ className }: LoginFormProps) => {
  const { t } = useTranslation()
  const dispatch = useDispatch()
  const { username, password, isLoading, error } = useSelector(getLoginState)

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
  )
})

export { LoginForm }
