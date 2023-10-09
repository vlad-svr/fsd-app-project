import { Text } from 'shared/ui/Text/Text'
import { Button, ButtonTheme } from 'shared/ui/Button/Button'
import { useTranslation } from 'react-i18next'
import { useSelector } from 'react-redux'
import { getProfileData, getProfileReadonly, profileActions, updateProfileData } from 'entities/Profile'
import { useCallback } from 'react'
import cls from './ProfilePageHeader.module.scss'
import classNames from 'shared/lib/classNames/classNames'
import { useAppDispatch } from 'shared/lib/hooks'
import { getUserAuthData } from 'entities/User'

interface ProfilePageHeaderProps {
  className?: string
}

export const ProfilePageHeader = (props: ProfilePageHeaderProps) => {
  const {
    className
  } = props

  const { t } = useTranslation('profile')
  const authData = useSelector(getUserAuthData)
  const profileData = useSelector(getProfileData)
  const canEdit = authData?.id === profileData?.id
  const readonly = useSelector(getProfileReadonly)
  const dispatch = useAppDispatch()

  const onEdit = useCallback(() => {
    dispatch(profileActions.setReadonly(false))
  }, [dispatch])

  const onCancelEdit = useCallback(() => {
    dispatch(profileActions.cancelEdit())
  }, [dispatch])

  const onSave = useCallback(() => {
    void dispatch(updateProfileData())
  }, [dispatch])

  return (
      <div className={classNames(cls.profile_page_header, {}, [className])}>
          <Text title={t('profile')} />
          {canEdit && (
              <div className={cls.btns_wrapper}>{
                readonly
                  ? (
                      <Button

                          className={cls.edit_btn}
                          theme={ButtonTheme.OUTLINE}
                          onClick={onEdit}
                >
                          {t('edit')}
                      </Button>
                    )
                  : (
                      <>
                          <Button
                              className={cls.edit_btn}
                              theme={ButtonTheme.OUTLINE_RED}
                              onClick={onCancelEdit}
                  >
                              {t('cancel')}
                          </Button>
                          <Button
                              theme={ButtonTheme.OUTLINE}
                              onClick={onSave}
                  >
                              {t('save')}
                          </Button>
                      </>
                    )}
              </div>
          )
          }
      </div>
  )
}
