import { memo, useMemo, useState } from 'react'
import { useSelector } from 'react-redux'
import cls from './Sidebar.module.scss'
import classNames from 'shared/lib/classNames/classNames'
import { ThemeSwitcher } from 'widgets/ThemeSwitcher'
import { LanguageSwitcher } from 'widgets/LanguageSwitcher'
import { Button, ButtonSize, ButtonTheme } from 'shared/ui/Button/Button'
import { SidebarItem } from '../SidebarItem/SidebarItem'
import { getSidebarItems } from '../../model/selectors/getSidebarItems'
import { VStack } from 'shared/ui/Stack'

interface SidebarProps {
  className?: string
}

const Sidebar = memo(({ className }: SidebarProps) => {
  const [collapsed, setCollapsed] = useState(false)
  const sidebarItemsList = useSelector(getSidebarItems)

  const onToggle = (): void => {
    setCollapsed(prevState => !prevState)
  }

  const itemList = useMemo(() => {
    return sidebarItemsList.map(item => (
        <SidebarItem
            key={item.path}
            item={item}
            collapsed={collapsed}
        />
    ))
  }, [collapsed, sidebarItemsList])

  return (
      <aside
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
          <VStack role="navigation" gap="8" className={cls.navbar}>
              {itemList}
          </VStack>
          <div className={classNames(cls.switchers)}>
              <ThemeSwitcher />
              <LanguageSwitcher short={collapsed} className={cls.lang} />
          </div>
      </aside>
  )
})

export { Sidebar }
