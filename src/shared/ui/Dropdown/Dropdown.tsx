import { Fragment, type ReactNode } from 'react'
import { Menu } from '@headlessui/react'
import classNames from 'shared/lib/classNames/classNames'
import { type DropdownDirection } from 'shared/types/ui'
import { AppLink } from '../AppLink/AppLink'
import cls from './Dropdown.module.scss'

export interface DropdownItem {
  disabled?: boolean
  content?: ReactNode
  onClick?: () => void
  href?: string
}

interface DropdownProps {
  className?: string
  items: DropdownItem[]
  direction?: DropdownDirection
  trigger: ReactNode
}

const mapDirectionClass: Record<DropdownDirection, string> = {
  'bottom left': cls.options_bottom_left,
  'bottom right': cls.options_bottom_right,
  'top right': cls.options_top_right,
  'top left': cls.options_top_left
}

export function Dropdown (props: DropdownProps) {
  const {
    className, trigger, items, direction = 'bottom right'
  } = props

  const menuClasses = [mapDirectionClass[direction]]

  return (
      <Menu as="div" className={classNames(cls.wrapper, {}, [className])}>
          <Menu.Button className={cls.btn}>
              {trigger}
          </Menu.Button>
          <Menu.Items className={classNames(cls.menu, {}, menuClasses)}>
              {items.map((item) => {
                const content = ({ active }: { active: boolean }) => (
                    <button
                        type="button"
                        disabled={item.disabled}
                        onClick={item.onClick}
                        className={classNames(cls.item, { [cls.active]: active })}
                        >
                        {item.content}
                    </button>
                )

                if (item.href) {
                  return (
                      <Menu.Item as={AppLink} to={item.href} disabled={item.disabled} key={item.href}>
                          {content}
                      </Menu.Item>
                  )
                }

                return (
                    <Menu.Item as={Fragment} disabled={item.disabled} key={item.href}>
                        {content}
                    </Menu.Item>
                )
              })}

          </Menu.Items>
      </Menu>
  )
}
