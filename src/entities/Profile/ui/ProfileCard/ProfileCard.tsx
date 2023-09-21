import { useTranslation } from 'react-i18next'
import { useSelector } from 'react-redux'
import classNames from 'shared/lib/classNames/classNames'
import { getProfileData } from 'entities/Profile/model/selectors/getProfileData/getProfileData'
// import { getProfileIsLoading } from 'entities/Profile/model/selectors/getProfileIsLoading/getProfileIsLoading'
// import { getProfileError } from 'entities/Profile/model/selectors/getProfileError/getProfileError'
import { Text } from 'shared/ui/Text/Text'
import { Button, ButtonTheme } from 'shared/ui/Button/Button'
import { Input } from 'shared/ui/Input/Input'
import cls from './ProfileCard.module.scss'

interface ProfileCardProps {
  className?: string
}

export const ProfileCard = ({ className }: ProfileCardProps) => {
  const { t } = useTranslation('profile')
  const data = useSelector(getProfileData)
  // const isLoading = useSelector(getProfileIsLoading)
  // const error = useSelector(getProfileError)

  return (
      <div className={classNames(cls.profile_card, {}, [className])}>
          <div className={cls.header}>
              <Text title={t('profile')} />
              <Button
                  className={cls.edit_btn}
                  theme={ButtonTheme.OUTLINE}
                >
                  {t('edit')}
              </Button>
          </div>
          <div className={cls.data}>
              <Input
                  value={data?.first}
                  placeholder={t('your_name')}
                  className={cls.input}
                />
              <Input
                  value={data?.lastname}
                  placeholder={t('your_surname')}
                  className={cls.input}
                />
          </div>
      </div>
  )
}
