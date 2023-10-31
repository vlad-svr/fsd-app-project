import { memo } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useTranslation } from 'react-i18next'
import cls from './NavBar.module.scss'
import cn from 'shared/lib/classNames/classNames'
import { useModalControl } from 'shared/lib/hooks'
import { Button, ButtonTheme } from 'shared/ui/Button/Button'
import { LoginModal } from 'features/AuthByUsername'
import { getUserAuthData, userActions } from 'entities/User'
import { Text } from 'shared/ui/Text'
import { AppLink, AppLinkTheme } from 'shared/ui/AppLink/AppLink'
import { RoutePaths } from 'shared/config/routeConfig/routeConfig'
import { TextTheme } from 'shared/ui/Text/Text'

interface NavBarProps {
  className?: string
}

const NavBar = memo(({ className }: NavBarProps) => {
  const { t } = useTranslation()
  const authData = useSelector(getUserAuthData)
  const dispatch = useDispatch()
  const { isOpen: isAuthModalOpen, openModal, closeModal } = useModalControl()

  const logout = () => {
    dispatch(userActions.logout())
  }

  if (authData) {
    return (
        <header className={cn(cls.navbar, {}, [className])}>
            <Text
                className={cls.app_name}
                title="ShokingKnoweledge"
                theme={TextTheme.INVERTED}
            />
            <AppLink
                to={RoutePaths.article_create}
                theme={AppLinkTheme.SECONDARY}
                className={cls.create_link}
            >
                {t('create_article')}
            </AppLink>
            <Button
                theme={ButtonTheme.PURE_INVERTED}
                className={cn(cls.links)}
                onClick={logout}
            >
                {t('logout')}
            </Button>
            <LoginModal isOpen={isAuthModalOpen} onClose={closeModal} />
        </header>
    )
  }

  return (
      <header className={cn(cls.navbar, {}, [className])}>
          <Button
              theme={ButtonTheme.PURE_INVERTED}
              className={cn(cls.links)}
              onClick={openModal}
          >
              {t('login')}
          </Button>
          {isAuthModalOpen && <LoginModal isOpen={isAuthModalOpen} onClose={closeModal} /> }
      </header>
  )
})

export { NavBar }
