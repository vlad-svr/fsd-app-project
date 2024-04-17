import { type ButtonHTMLAttributes, forwardRef } from 'react';
import cls from './Button.module.scss';
import { type Mods } from '@/shared/lib/classNames/classNames';

enum ButtonTheme {
  PURE = 'pure',
  PURE_INVERTED = 'pure_inverted',
  OUTLINE = 'outline',
  OUTLINE_RED = 'outline_red',
  BACKGROUND = 'background',
  BACKGROUND_INVERTED = 'background_inverted',
}

enum ButtonSize {
  M = 'size_m',
  L = 'size_l',
  XL = 'size_xl',
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  theme?: ButtonTheme;
  className?: string;
  square?: boolean;
  fullWidth?: boolean;
  size?: ButtonSize;
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>((props, ref) => {
  const {
    className,
    children,
    theme = ButtonTheme.OUTLINE,
    square,
    disabled,
    size = ButtonSize.M,
    fullWidth,
    ...restProps
  } = props;

  const mods: Mods = {
    [cls[theme]]: true,
    [cls.square]: square,
    [cls[size]]: size,
    [cls.disabled]: disabled,
    [cls.full_width]: fullWidth,
  };

  return (
    <div></div>
    // <button
    //   ref={ref}
    //   disabled={disabled}
    //   className={classNames(cls.wrapper, mods, [className])}
    //   {...restProps}
    // >
    //   {children}
    // </button>
  );
});

export { Button, ButtonTheme, ButtonSize };
