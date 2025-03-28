import { useTranslation } from 'react-i18next'
import classNames, { type Mods } from '@/shared/lib/classNames/classNames'
import { Text, TextAlign, TextTheme } from '@/shared/ui/Text'
import { Input } from '@/shared/ui/Input'
import cls from './ProfileCard.module.scss'
import { type Profile } from '../../model/types/profile'
import { Loader } from '@/shared/ui/Loader'
import { Avatar } from '@/shared/ui/Avatar'
import { type Currency, CurrencySelect } from '@/entities/Currency'
import { type Country, CountrySelect } from '@/entities/Country'
import { HStack, VStack } from '@/shared/ui/Stack'

interface ProfileCardProps {
  data?: Profile
  error?: string
  isLoading?: boolean
  className?: string
  readonly?: boolean
  onChangeLastname?: (value?: string) => void
  onChangeFirstname?: (value?: string) => void
  onChangeCity?: (value?: string) => void
  onChangeAge?: (value?: string) => void
  onChangeUsername?: (value?: string) => void
  onChangeAvatar?: (value?: string) => void
  onChangeCurrency?: (currency: Currency) => void
  onChangeCountry?: (country: Country) => void
}

export const ProfileCard = (props: ProfileCardProps) => {
  const {
    data,
    error,
    isLoading,
    readonly,
    className,
    onChangeFirstname,
    onChangeLastname,
    onChangeAge,
    onChangeCity,
    onChangeAvatar,
    onChangeUsername,
    onChangeCountry,
    onChangeCurrency
  } = props
  const { t } = useTranslation('profile')

  const mods: Mods = {
    [cls.editing]: !readonly
  }

  if (isLoading) {
    return (
        <HStack justify="center" max className={classNames(cls.profile_card, {}, [className, cls.loading])}>
            <Loader />
        </HStack>
    )
  }

  if (error) {
    return (
        <HStack justify="center" max className={classNames(cls.profile_card, {}, [className, cls.error])}>
            <Text
                title={t('loading_profile_error')}
                text={t('try_to_reload_page')}
                theme={TextTheme.ERROR}
                align={TextAlign.CENTER}
            />
        </HStack>
    )
  }

  return (
      <VStack gap="8" max className={classNames(cls.profile_card, mods, [className])}>
          {data?.avatar && (
          <HStack justify="center" max className={cls.avatar_wrapper}>
              <Avatar src={data?.avatar} />
          </HStack>
          )}
          <Input
              value={data?.first}
              label={t('your_name')}
              placeholder={t('your_name')}
              className={cls.input}
              onChange={onChangeFirstname}
              readonly={readonly}
              data-testid="ProfileCard.firstname"
          />
          <Input
              value={data?.lastname}
              label={t('your_surname')}
              placeholder={t('your_surname')}
              className={cls.input}
              onChange={onChangeLastname}
              readonly={readonly}
              data-testid="ProfileCard.lastname"
          />
          <Input
              value={data?.age}
              label={t('your_age')}
              placeholder={t('your_age')}
              className={cls.input}
              onChange={onChangeAge}
              readonly={readonly}
              type="number"
              max={110}
              min={1}
              />
          <Input
              value={data?.city}
              label={t('city')}
              placeholder={t('city')}
              className={cls.input}
              onChange={onChangeCity}
              readonly={readonly}
              />
          <Input
              value={data?.username}
              label={t('enter_username')}
              placeholder={t('enter_username')}
              className={cls.input}
              onChange={onChangeUsername}
              readonly={readonly}
              />
          <Input
              value={data?.avatar}
              label={t('put_avatar_link')}
              placeholder={t('put_avatar_link')}
              className={cls.input}
              onChange={onChangeAvatar}
              readonly={readonly}
              />
          <CurrencySelect
              value={data?.currency}
              onChange={onChangeCurrency}
              readonly={readonly}
              className={cls.input}
              />
          <CountrySelect
              value={data?.country}
              onChange={onChangeCountry}
              readonly={readonly}
              className={cls.input}
              />
      </VStack>
  )
}
