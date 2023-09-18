import { useTranslation } from 'react-i18next'
import cls from './LoginForm.module.scss'
import classNames from 'shared/lib/classNames/classNames'
import { Button } from 'shared/ui/Button/Button'
import { Input } from 'shared/ui/Input/Input'

interface LoginFormProps {
  className?: string
}

function LoginForm ({ className }: LoginFormProps) {
  const { t } = useTranslation()

  return (
      <div className={classNames(cls.wrapper, {}, [className])}>
          <Input label={t('enter_username')} className={cls.input} type="text" autoFocus/>
          <Input label={t('enter_password')} className={cls.input} type="text"/>
          <Button className={cls.login_btn}>{t('Login')}</Button>
      </div>
  )
}

export { LoginForm }
