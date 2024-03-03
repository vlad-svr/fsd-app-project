import { memo } from 'react'
import classNames from 'shared/lib/classNames/classNames'
import cls from './Overlay.module.scss'

interface OverlayProps {
  isOpen?: boolean
  className?: string
  onClick?: () => void
}

export const Overlay = memo((props: OverlayProps) => {
  const { isOpen, className, onClick } = props

  return (
      <div onClick={onClick} role="dialog" className={classNames(cls.wrapper, {
        [cls.opened]: isOpen
      }, [className])} />
  )
})
