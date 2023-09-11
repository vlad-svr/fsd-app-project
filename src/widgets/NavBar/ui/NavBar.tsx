import { useTranslation } from 'react-i18next'
import cls from './NavBar.module.scss'
import cn from 'shared/lib/classNames/classNames'
import { Button, ButtonTheme } from 'shared/ui/Button/Button'
import { Modal } from 'shared/ui/Modal/Modal'
import { useCallback, useState } from 'react'

interface NavBarProps {
  className?: string
}

function NavBar ({ className }: NavBarProps) {
  const { t } = useTranslation()
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false)

  const onToggleModal = useCallback(() => {
    setIsAuthModalOpen((prevState) => !prevState)
  }, [])

  return (
      <div className={cn(cls.navbar, {}, [className])}>
          <Button
              onClick={onToggleModal}
              theme={ButtonTheme.PURE_INVERTED}
              className={cn(cls.links)}
          >
              {t('login')}
          </Button>
          <Modal isOpen={isAuthModalOpen} onClose={onToggleModal}>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid commodi consequatur eligendi impedit incidunt necessitatibus possimus quis saepe sunt totam.
          </Modal>
      </div>

  )
}

export { NavBar }
