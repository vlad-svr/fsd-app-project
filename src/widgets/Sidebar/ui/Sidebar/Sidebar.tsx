import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import cls from './Sidebar.module.scss'
import classNames from 'shared/lib/classNames/classNames'
import { ThemeSwitcher } from 'widgets/ThemeSwitcher'
import { LanguageSwitcher } from 'widgets/LanguageSwitcher'

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
      <div className={classNames(cls.wrapper, { [cls.collapsed]: collapsed }, [className])}>
          <button onClick={onToggle}>{t('toggle')}</button>
          <div className={classNames(cls.switchers)}>
              <ThemeSwitcher />
              <LanguageSwitcher className={cls.lang} />
          </div>
      </div>
  )
}

export { Sidebar }
