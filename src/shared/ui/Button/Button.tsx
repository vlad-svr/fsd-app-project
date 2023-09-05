import cls from './Button.module.scss'
import classNames from 'shared/lib/classNames/classNames'
import { type ButtonHTMLAttributes } from 'react'

enum ButtonTheme {
  PURE = 'pure',
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  theme?: ButtonTheme
  className?: string
}

function Button (props: ButtonProps) {
  const { className, children, theme = ButtonTheme.PURE, ...restProps } = props

  return (
      <button
          className={classNames(cls.wrapper, {}, [className, cls[theme]])}
          {...restProps}
        >
          {children}
      </button>
  )
}

export { Button, ButtonTheme }
