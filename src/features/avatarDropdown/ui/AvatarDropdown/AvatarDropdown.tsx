import { useTranslation } from 'react-i18next'
import React, { memo, useCallback } from 'react'
import { Avatar } from '@/shared/ui/Avatar/Avatar'
import { Dropdown } from '@/shared/ui/Popups'
import { useDispatch, useSelector } from 'react-redux'
import {
  getUserAuthData, isUserAdmin, isUserManager, userActions
} from '@/entities/User'
import classNames from '@/shared/lib/classNames/classNames'

import { RoutePaths } from '@/shared/constants/router'

interface AvatarDropdownProps {
  className?: string
}

export const AvatarDropdown = memo((props: AvatarDropdownProps) => {
  const { className } = props
  const { t } = useTranslation()
  const dispatch = useDispatch()
  const isAdmin = useSelector(isUserAdmin)
  const isManager = useSelector(isUserManager)
  const authData = useSelector(getUserAuthData)

  const onLogout = useCallback(() => {
    dispatch(userActions.logout())
  }, [dispatch])

  const isAdminPanelAvailable = isAdmin || isManager

  if (!authData) {
    return null
  }

  return (
      <Dropdown
          direction="bottom left"
          className={classNames('', {}, [className])}
          items={[
            {
              content: t('admin_panel'),
              href: RoutePaths.admin_panel,
              hidden: !isAdminPanelAvailable
            },
            {
              content: t('profile'),
              href: RoutePaths.profile + authData.id
            },
            {
              content: t('logout'),
              onClick: onLogout
            }
          ]}
          trigger={<Avatar size={30} src={authData.avatar} />}
        />
  )
})
