import { type HTMLAttributes, memo, type ReactNode } from 'react'
import classNames from '@/shared/lib/classNames/classNames'
import cls from './Card.module.scss'

export enum CardTheme {
  NORMAL = 'normal',
  OUTLINED = 'outlined',
}

interface CardProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode
  theme?: CardTheme
  className?: string
  max?: boolean
}

export const Card = memo((props: CardProps) => {
  const {
    className,
    children,
    theme = CardTheme.NORMAL,
    max,
    ...otherProps
  } = props

  return (
      <div
          className={classNames(cls.wrapper, { [cls.max]: max }, [className, cls[theme]])}
          {...otherProps}
        >
          {children}
      </div>
  )
})
