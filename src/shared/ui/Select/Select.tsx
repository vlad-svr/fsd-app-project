import { type ChangeEvent, memo, useMemo } from 'react'
import classNames, { type Mods } from '@/shared/lib/classNames/classNames'
import cls from './Select.module.scss'

export interface SelectOption<V = string> {
  value: V
  content: string
}

interface SelectProps<T extends string> {
  className?: string
  label?: string
  options?: Array<SelectOption<T>>
  value?: T
  onChange?: (value: T) => void
  readonly?: boolean
}

const InternalSelect = <T extends string>(props: SelectProps<T>) => {
  const {
    className,
    label,
    options,
    onChange,
    value,
    readonly
  } = props

  const onChangeHandler = (e: ChangeEvent<HTMLSelectElement>) => {
    if (onChange) {
      onChange(e.target.value as T)
    }
  }

  const optionsList = useMemo(() => options?.map((opt) => (
      <option
          className={cls.option}
          value={opt.value}
          key={opt.value}
        >
          {opt.content}
      </option>
  )), [options])

  const mods: Mods = {}

  return (
      <div className={classNames(cls.Wrapper, mods, [className])}>
          {label && (
          <span className={cls.label}>
              {label}
          </span>
          )}
          <select
              disabled={readonly}
              className={cls.select}
              value={value}
              onChange={onChangeHandler}
            >
              {optionsList}
          </select>
      </div>
  )
}

export const Select = memo(InternalSelect)
