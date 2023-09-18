import { memo, type InputHTMLAttributes, type ChangeEvent, useRef } from 'react'
import cls from './Input.module.scss'
import classNames from 'shared/lib/classNames/classNames'

type HTMLInputProps = Omit<InputHTMLAttributes<HTMLInputElement>, 'value' | 'onChange'>
interface InputProps extends HTMLInputProps {
  value?: string
  label?: string
  onChange?: (value: string) => void
  className?: string
}

const Input = memo((props: InputProps) => {
  const ref = useRef<HTMLInputElement>(null)
  const { value, onChange, type = 'text', label, className, ...otherProps } = props

  const onChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
    onChange?.(event.target.value)
  }

  return (
      <div className={classNames(cls.wrapper, {}, [className])}>
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
              {...otherProps}
        />
      </div>
  )
})

export { Input }
