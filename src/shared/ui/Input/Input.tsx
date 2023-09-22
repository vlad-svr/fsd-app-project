import { memo, type InputHTMLAttributes, type ChangeEvent, useRef } from 'react'
import cls from './Input.module.scss'
import classNames, { type Mods } from 'shared/lib/classNames/classNames'

type HTMLInputProps = Omit<InputHTMLAttributes<HTMLInputElement>, 'value' | 'onChange' | 'readOnly'>
interface InputProps extends HTMLInputProps {
  value?: string | number
  label?: string
  onChange?: (value: string) => void
  readonly?: boolean
  className?: string
}

const Input = memo((props: InputProps) => {
  const ref = useRef<HTMLInputElement>(null)
  const {
    value,
    onChange,
    type = 'text',
    label,
    className,
    readonly,
    ...otherProps
  } = props

  const onChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
    onChange?.(event.target.value)
  }

  const mods: Mods = {
    [cls.readonly]: readonly
  }

  return (
      <div className={classNames(cls.wrapper, mods, [className])}>
          {label && (
          <div className={cls.placeholder}>
              {label}:
          </div>
          )}
          <input
              ref={ref}
              type={type}
              value={value}
              onChange={onChangeHandler}
              className={cls.input}
              readOnly={readonly}
              {...otherProps}
        />
      </div>
  )
})

export { Input }
