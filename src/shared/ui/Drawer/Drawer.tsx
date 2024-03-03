import classNames, { type Mods } from 'shared/lib/classNames/classNames'
import React, { memo, type ReactNode } from 'react'
import { useTheme } from 'app/providers/ThemeProvider'
import { Overlay } from '../Overlay/Overlay'
import cls from './Drawer.module.scss'
import { Portal } from '../Portal/Portal'

interface DrawerProps {
  className?: string
  children: ReactNode
  isOpen?: boolean
  onClose?: () => void
}

export const Drawer = memo((props: DrawerProps) => {
  const {
    className,
    children,
    onClose,
    isOpen
  } = props
  const { theme } = useTheme()

  const mods: Mods = {
    [cls.opened]: isOpen
  }

  return (
      <Portal>
          <div className={classNames(cls.wrapper, mods, [className, theme])}>
              <Overlay onClick={onClose} />
              <div
                  className={cls.content}
                >
                  {children}
              </div>
          </div>
      </Portal>
  )
})
