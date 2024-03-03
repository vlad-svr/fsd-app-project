import cls from './Modal.module.scss'
import classNames, { type Mods } from 'shared/lib/classNames/classNames'
import React, { type ReactNode, useCallback, useRef, useState } from 'react'
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
  const [isClosing, setIsClosing] = useState(false)
  const [isMounted, setIsMounted] = useState(false)
  const timerRef = useRef<ReturnType<typeof setTimeout>>()

  const mods: Mods = {
    [cls.opened]: isOpen,
    [cls.is_closing]: isClosing
  }

  const closeHandler = useCallback(() => {
    if (onClose) {
      setIsClosing(true)
      timerRef.current = setTimeout(() => {
        onClose()
        setIsClosing(false)
      }, ANIMATION_DELAY_MS)
    }
  }, [onClose])

  const onKeyDown = useCallback((e: KeyboardEvent) => {
    if (e.key === 'Escape') {
      closeHandler()
    }
  }, [closeHandler])

  React.useEffect(() => {
    if (isOpen) {
      window.addEventListener('keydown', onKeyDown)
    }

    return () => {
      clearTimeout(timerRef.current)
      window.removeEventListener('keydown', onKeyDown)
    }
  }, [isOpen, onKeyDown])

  React.useEffect(() => {
    setIsMounted(isOpen)
  }, [isOpen])

  if (lazy && !isMounted) {
    return null
  }

  return (
      <Portal>
          <div className={classNames(cls.modal, mods, [className])}>
              <Overlay isOpen={isOpen} onClick={closeHandler}/>
              <div className={cls.content}>
                  {children}
              </div>
          </div>
      </Portal>
  )
}

export { Modal }
