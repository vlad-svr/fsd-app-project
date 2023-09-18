import { useTranslation } from 'react-i18next'
import cls from './NavBar.module.scss'
import cn from 'shared/lib/classNames/classNames'
import { useModalControl } from 'shared/hooks'
import { Button, ButtonTheme } from 'shared/ui/Button/Button'
import { LoginModal } from 'features/AuthByUsername'

interface NavBarProps {
  className?: string
}

function NavBar ({ className }: NavBarProps) {
  const { t } = useTranslation()
  const { isOpen: isAuthModalOpen, openModal, closeModal } = useModalControl()

  return (
      <div className={cn(cls.navbar, {}, [className])}>
          <Button
              onClick={openModal}
              theme={ButtonTheme.PURE_INVERTED}
              className={cn(cls.links)}
          >
              {t('login')}
          </Button>
          <LoginModal isOpen={isAuthModalOpen} onClose={closeModal} />
      </div>

  )
}

export { NavBar }
