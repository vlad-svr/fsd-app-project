import classNames, { type Mods } from 'shared/lib/classNames/classNames'
import React, { memo, type ReactNode } from 'react'
import { useModal } from 'shared/lib/hooks/useModal'
import { Overlay } from '../Overlay/Overlay'
import cls from './Drawer.module.scss'
import { Portal } from '../Portal/Portal'

const ANIMATION_DELAY_MS = 300
interface DrawerProps {
  className?: string
  children: ReactNode
  isOpen?: boolean
  onClose?: () => void
  lazy?: boolean
}

export const Drawer = memo((props: DrawerProps) => {
  const {
    className,
    children,
    onClose,
    isOpen,
    lazy
  } = props
  const { close, isClosing, isMounted } = useModal({
    animationDelay: ANIMATION_DELAY_MS,
    onClose,
    isOpen
  })

  const mods: Mods = {
    [cls.opened]: isOpen,
    [cls.is_closing]: isClosing
  }

  if (lazy && !isMounted) {
    return null
  }

  return (
      <Portal>
          <div className={classNames(cls.wrapper, mods, [className])}>
              <Overlay onClick={close} />
              <div
                  className={cls.content}
                >
                  {children}
              </div>
          </div>
      </Portal>
  )
})
