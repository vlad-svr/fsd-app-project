import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import cls from './Sidebar.module.scss'
import classNames from 'shared/lib/classNames/classNames'
import { ThemeSwitcher } from 'widgets/ThemeSwitcher'
import { LanguageSwitcher } from 'widgets/LanguageSwitcher'
import { Button, ButtonSize, ButtonTheme } from 'shared/ui/Button/Button'
import { AppLink, AppLinkTheme } from 'shared/ui/AppLink/AppLink'
import { RoutePaths } from 'shared/config/routeConfig/routeConfig'
import AboutIcon from 'shared/assets/icons/about-20-20.svg'
import MainIcon from 'shared/assets/icons/main-20-20.svg'

interface SidebarProps {
  className?: string
}

function Sidebar ({ className }: SidebarProps) {
  const { t } = useTranslation()
  const [collapsed, setCollapsed] = useState(false)

  const onToggle = (): void => {
    setCollapsed(prevState => !prevState)
  }

  return (
      <div
          data-testid="sidebar"
          className={classNames(cls.wrapper, { [cls.collapsed]: collapsed }, [className])}
      >
          <Button
              onClick={onToggle}
              className={cls.collapse_btn}
              theme={ButtonTheme.BACKGROUND_INVERTED}
              data-testid="sidebar-toggle"
              size={ButtonSize.L}
              square
          >
              {collapsed ? '>' : '<'}
          </Button>
          <div className={cls.navbar}>
              <AppLink to={RoutePaths.main} theme={AppLinkTheme.SECONDARY} className={cls.navbar_item}>
                  <MainIcon className={cls.icon}/>
                  <span className={cls.link}>{t('main_page')}</span>
              </AppLink>
              <AppLink to={RoutePaths.about} theme={AppLinkTheme.SECONDARY} className={cls.navbar_item}>
                  <AboutIcon className={cls.icon}/>
                  <span className={cls.link}>{t('about_us')}</span>
              </AppLink>
          </div>
          <div className={classNames(cls.switchers)}>
              <ThemeSwitcher />
              <LanguageSwitcher short={collapsed} className={cls.lang} />
          </div>
      </div>
  )
}

export { Sidebar }
