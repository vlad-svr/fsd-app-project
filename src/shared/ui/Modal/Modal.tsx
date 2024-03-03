import React, { type ReactNode } from 'react'
import { useModal } from '@/shared/lib/hooks/useModal'
import cls from './Modal.module.scss'
import classNames, { type Mods } from '@/shared/lib/classNames/classNames'
import { Portal } from '../Portal/Portal'
import { Overlay } from '../Overlay/Overlay'

const ANIMATION_DELAY_MS = 200

interface ModalProps {
  className?: string
  children?: ReactNode
  lazy?: boolean
  isOpen?: boolean
  onClose?: () => void
}

function Modal (props: Readonly<ModalProps>) {
  const { className, children, isOpen = false, onClose, lazy } = props
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
          <div className={classNames(cls.modal, mods, [className])}>
              <Overlay isOpen={isOpen} onClick={close}/>
              <div className={cls.content}>
                  {children}
              </div>
          </div>
      </Portal>
  )
}

export { Modal }
