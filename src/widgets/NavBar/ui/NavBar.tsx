import { memo } from 'react'
import { useSelector } from 'react-redux'
import { useTranslation } from 'react-i18next'
import cls from './NavBar.module.scss'
import cn from '@/shared/lib/classNames/classNames'
import { useModalControl } from '@/shared/lib/hooks'
import { Button, ButtonTheme } from '@/shared/ui/Button'
import { LoginModal } from '@/features/AuthByUsername'
import { getUserAuthData } from '@/entities/User'
import { Text, TextTheme } from '@/shared/ui/Text'
import { AppLink, AppLinkTheme } from '@/shared/ui/AppLink'
import { HStack } from '@/shared/ui/Stack'
import { AvatarDropdown } from '@/features/avatarDropdown'
import { NotificationButton } from '@/features/notificationButton'
import { RoutePaths } from '@/shared/constants/router'

interface NavBarProps {
  className?: string
}

const NavBar = memo(({ className }: NavBarProps) => {
  const { t } = useTranslation()
  const authData = useSelector(getUserAuthData)
  const { isOpen: isAuthModalOpen, openModal, closeModal } = useModalControl()

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
            <HStack gap='16' className={cls.actions}>
                <NotificationButton />
                <AvatarDropdown />
            </HStack>

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
