import { useCallback } from 'react'
import { useSelector } from 'react-redux'
import { useTranslation } from 'react-i18next'
import { useParams } from 'react-router-dom'
import classNames from 'shared/lib/classNames/classNames'
import { DynamicModuleLoader, type ReducersList } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader'
import {
  fetchProfileData,
  getProfileError,
  getProfileForm,
  getProfileIsLoading,
  getProfileReadonly,
  getProfileValidationErrors,
  profileActions,
  ProfileCard,
  profileReducer,
  ValidateProfileError
} from 'entities/Profile'
import { useAppDispatch, useInitialEffect } from 'shared/lib/hooks'
import { ProfilePageHeader } from '../ui/ProfilePageHeader/ProfilePageHeader'
import { type Country } from 'entities/Country'
import { type Currency } from 'entities/Currency'
import { Text, TextTheme } from 'shared/ui/Text/Text'
import { Page } from 'widgets/Page/Page'

const reducers: ReducersList = {
  profile: profileReducer
}

interface ProfilePageProps {
  className?: string
}

const ProfilePage = ({ className }: ProfilePageProps) => {
  const { t } = useTranslation('profile')
  const { id } = useParams<{ id: string }>()
  const dispatch = useAppDispatch()
  const formData = useSelector(getProfileForm)
  const isLoading = useSelector(getProfileIsLoading)
  const error = useSelector(getProfileError)
  const readonly = useSelector(getProfileReadonly)
  const validationErrors = useSelector(getProfileValidationErrors)

  const validateProfileErrorTranslates = {
    [ValidateProfileError.INCORRECT_COUNTRY]: t('validation_errors.incorrect_country'),
    [ValidateProfileError.INCORRECT_USER_DATA]: t('validation_errors.incorrect_user_data'),
    [ValidateProfileError.INCORRECT_AGE]: t('validation_errors.incorrect_age'),
    [ValidateProfileError.SERVER_ERROR]: t('validation_errors.server_error'),
    [ValidateProfileError.NO_DATA]: t('validation_errors.no_data')
  }

  useInitialEffect(() => {
    if (id) {
      void dispatch(fetchProfileData(id))
    }
  })

  const onChangeFirstname = useCallback((value?: string) => {
    dispatch(profileActions.updateProfile({ first: value || '' }))
  }, [dispatch])

  const onChangeLastname = useCallback((value?: string) => {
    dispatch(profileActions.updateProfile({ lastname: value || '' }))
  }, [dispatch])

  const onChangeCity = useCallback((value?: string) => {
    dispatch(profileActions.updateProfile({ city: value || '' }))
  }, [dispatch])

  const onChangeAge = useCallback((value?: string) => {
    dispatch(profileActions.updateProfile({ age: Number(value || 0) }))
  }, [dispatch])

  const onChangeUsername = useCallback((value?: string) => {
    dispatch(profileActions.updateProfile({ username: value || '' }))
  }, [dispatch])

  const onChangeAvatar = useCallback((value?: string) => {
    dispatch(profileActions.updateProfile({ avatar: value || '' }))
  }, [dispatch])

  const onChangeCurrency = useCallback((currency: Currency) => {
    dispatch(profileActions.updateProfile({ currency }))
  }, [dispatch])

  const onChangeCountry = useCallback((country: Country) => {
    dispatch(profileActions.updateProfile({ country }))
  }, [dispatch])

  return (
      <DynamicModuleLoader reducers={reducers}>
          <Page className={classNames('', {}, [className])}>
              <ProfilePageHeader/>
              {validationErrors?.length && validationErrors.map((error) => (
                  <Text
                      key={error}
                      text={validateProfileErrorTranslates[error]}
                      theme={TextTheme.ERROR}
                  />
              ))}
              <ProfileCard
                  data={formData}
                  error={error}
                  isLoading={isLoading}
                  readonly={readonly}
                  onChangeFirstname={onChangeFirstname}
                  onChangeLastname={onChangeLastname}
                  onChangeAge={onChangeAge}
                  onChangeCity={onChangeCity}
                  onChangeUsername={onChangeUsername}
                  onChangeAvatar={onChangeAvatar}
                  onChangeCurrency={onChangeCurrency}
                  onChangeCountry={onChangeCountry}
              />
          </Page>
      </DynamicModuleLoader>
  )
}

export default ProfilePage
