import { memo, useMemo, useState } from 'react'
import cls from './Sidebar.module.scss'
import classNames from 'shared/lib/classNames/classNames'
import { ThemeSwitcher } from 'widgets/ThemeSwitcher'
import { LanguageSwitcher } from 'widgets/LanguageSwitcher'
import { Button, ButtonSize, ButtonTheme } from 'shared/ui/Button/Button'
import { SidebarItem } from '../SidebarItem/SidebarItem'
import { SidebarItemsList } from '../../model/items'

interface SidebarProps {
  className?: string
}

const Sidebar = memo(({ className }: SidebarProps) => {
  const [collapsed, setCollapsed] = useState(false)

  const onToggle = (): void => {
    setCollapsed(prevState => !prevState)
  }

  const itemList = useMemo(() => {
    return SidebarItemsList.map(item => (
        <SidebarItem
            key={item.path}
            item={item}
            collapsed={collapsed}
        />
    ))
  }, [collapsed])

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
              {itemList}
          </div>
          <div className={classNames(cls.switchers)}>
              <ThemeSwitcher />
              <LanguageSwitcher short={collapsed} className={cls.lang} />
          </div>
      </div>
  )
})

export { Sidebar }
