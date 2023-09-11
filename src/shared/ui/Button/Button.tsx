import cls from './Button.module.scss'
import classNames from 'shared/lib/classNames/classNames'
import { type ButtonHTMLAttributes } from 'react'

enum ButtonTheme {
  PURE = 'pure',
  PURE_INVERTED = 'pure_inverted',
  OUTLINE = 'outline',
  BACKGROUND = 'background',
  BACKGROUND_INVERTED = 'background_inverted',
}

enum ButtonSize {
  M = 'size_m',
  L = 'size_l',
  XL = 'size_xl',
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  theme?: ButtonTheme
  className?: string
  square?: boolean
  size?: ButtonSize
}

function Button (props: ButtonProps) {
  const { className, children, theme, square, size = ButtonSize.M, ...restProps } = props

  const mods: Record<string, boolean | ButtonSize> = {
    [cls[theme]]: true,
    [cls.square]: square,
    [cls[size]]: size
  }

  return (
      <button
          className={classNames(cls.wrapper, mods, [className])}
          {...restProps}
        >
          {children}
      </button>
  )
}

export { Button, ButtonTheme, ButtonSize }
