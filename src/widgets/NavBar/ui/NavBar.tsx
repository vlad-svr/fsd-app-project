import { useTranslation } from 'react-i18next'
import cls from './NavBar.module.scss'
import cn from 'shared/lib/classNames/classNames'
import { AppLink, AppLinkTheme } from 'shared/ui/AppLink/AppLink'

interface NavBarProps {
  className?: string
}

function NavBar ({ className }: NavBarProps) {
  const { t } = useTranslation()

  return (
      <div className={cn(cls.navbar, {}, [className])}>
          <div className={cn(cls.links)}>

          </div>
      </div>

  )
}

export { NavBar }
