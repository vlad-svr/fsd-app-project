import { Fragment, type ReactNode } from 'react'
import { Listbox as HListBox } from '@headlessui/react'
import { HStack } from '../Stack'
import { Button } from '../Button/Button'
import cls from './ListBox.module.scss'
import classNames from 'shared/lib/classNames/classNames'
import { type DropdownDirection } from 'shared/types/ui'

export interface ListBoxItem {
  value: string
  content: ReactNode
  disabled?: boolean
}

interface ListBoxProps {
  items?: ListBoxItem[]
  className?: string
  value?: string
  defaultValue?: string
  onChange: (value: string) => void
  readonly?: boolean
  direction?: DropdownDirection
  label?: string
}

const mapDirectionClass: Record<DropdownDirection, string> = {
  'bottom left': cls.options_bottom_left,
  'bottom right': cls.options_bottom_right,
  'top left': cls.options_top_left,
  'top right': cls.options_top_right
}

export function ListBox (props: ListBoxProps) {
  const {
    className,
    items,
    value,
    defaultValue,
    onChange,
    readonly,
    direction = 'bottom left',
    label
  } = props

  const optionsClasses = [mapDirectionClass[direction]]

  return (
      <HStack gap="4">
          {label && <span>{`${label}>`}</span>}
          <HListBox
              disabled={readonly}
              as="div"
              className={classNames(cls.wrapper, {}, [className])}
              value={value}
              onChange={onChange}
            >
              <HListBox.Button className={cls.trigger}>
                  <Button disabled={readonly}>
                      {value ?? defaultValue}
                  </Button>
              </HListBox.Button>
              <HListBox.Options className={classNames(cls.options, {}, optionsClasses)}>
                  {items?.map((item) => (
                      <HListBox.Option
                          key={item.value}
                          value={item.value}
                          disabled={item.disabled}
                          as={Fragment}
                        >
                          {({ active, selected }) => (
                              <li
                                  className={classNames(
                                    cls.item,
                                    {
                                      [cls.active]: active,
                                      [cls.disabled]: item.disabled
                                    }
                                  )}
                                >
                                  {selected && '!!!'}
                                  {item.content}
                              </li>
                          )}
                      </HListBox.Option>
                  ))}
              </HListBox.Options>
          </HListBox>
      </HStack>
  )
}
