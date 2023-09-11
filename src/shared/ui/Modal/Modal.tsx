import cls from './Modal.module.scss'
import classNames from 'shared/lib/classNames/classNames'
import React, { type MouseEvent, type ReactNode, useCallback, useRef, useState } from 'react'
import { Portal } from 'shared/ui/Portal/Portal'

const ANIMATION_DELAY_MS = 200

interface ModalProps {
  className?: string
  children?: ReactNode
  isOpen?: boolean
  onClose?: () => void
}

function Modal (props: ModalProps) {
  const { className, children, isOpen, onClose } = props
  const [isClosing, setIsClosing] = useState(false)
  const timerRef = useRef<ReturnType<typeof setTimeout>>()

  const mods: Record<string, boolean> = {
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

  const onContentClick = (e: MouseEvent<HTMLDivElement>) => {
    e.stopPropagation()
  }

  return (
      <Portal>
          <div className={classNames(cls.modal, mods, [className])}>
              <div className={cls.overlay} onClick={closeHandler}>
                  <div
                      className={cls.content}
                      onClick={onContentClick}
                  >
                      {children}
                  </div>
              </div>
          </div>
      </Portal>
  )
}

export { Modal }
