import React, { memo } from 'react'
import classNames from '@/shared/lib/classNames/classNames'
import { Button, ButtonTheme } from '@/shared/ui/Button/Button'
import { Icon } from '@/shared/ui/Icon/Icon'
import NotificationIcon from '@/shared/assets/icons/notification-20-20.svg'
import { NotificationList } from '@/entities/Notification'
import { Popover } from '@/shared/ui/Popups'
import cls from './NotificationButton.module.scss'
import { Drawer } from '@/shared/ui/Drawer/Drawer'
import { BrowserView, MobileView } from 'react-device-detect'
import { useModalControl } from '@/shared/lib/hooks'
import { AnimationProvider } from '@/shared/lib/components/AnimationProvider'

interface NotificationButtonProps {
  className?: string
}

export const NotificationButton = memo((props: NotificationButtonProps) => {
  const { className } = props
  const { isOpen, openModal: openDrawer, closeModal: closeDrawer } = useModalControl()

  const trigger = (
      <Button onClick={openDrawer} theme={ButtonTheme.PURE}>
          <Icon Svg={NotificationIcon} inverted />
      </Button>
  )

  return (
      <div>
          <BrowserView>
              <Popover
                  className={classNames(cls.NotificationButton, {}, [className])}
                  direction="bottom left"
                  trigger={trigger}
              >
                  <NotificationList className={cls.notifications} />
              </Popover>
          </BrowserView>
          <MobileView>
              {trigger}
              <AnimationProvider>
                  <Drawer isOpen={isOpen} onClose={closeDrawer}>
                      <NotificationList className={classNames(cls.notifications, {}, [cls.mobile_notifications])} />
                  </Drawer>
              </AnimationProvider>
          </MobileView>
      </div>
  )
})
