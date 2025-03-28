import classNames from '@/shared/lib/classNames/classNames'
import { useTranslation } from 'react-i18next'
import { memo, useCallback } from 'react'
import { useSelector } from 'react-redux'
import { useAppDispatch, useInitialEffect } from '@/shared/lib/hooks'
import { type Currency } from '@/entities/Currency'
import { type Country } from '@/entities/Country'
import { Text, TextTheme } from '@/shared/ui/Text'
import { ProfileCard } from '@/entities/Profile'
import { DynamicModuleLoader, type ReducersList } from '@/shared/lib/components/DynamicModuleLoader/DynamicModuleLoader'
import { VStack } from '@/shared/ui/Stack'
import { getProfileForm } from '../../model/selectors/getProfileForm/getProfileForm'
import { getProfileIsLoading } from '../../model/selectors/getProfileIsLoading/getProfileIsLoading'
import { getProfileError } from '../../model/selectors/getProfileError/getProfileError'
import { getProfileReadonly } from '../../model/selectors/getProfileReadonly/getProfileReadonly'
import { getProfileValidateErrors } from '../../model/selectors/getProfileValidateErrors/getProfileValidateErrors'
import { fetchProfileData } from '../../model/services/fetchProfileData/fetchProfileData'
import { profileActions, profileReducer } from '../../model/slice/profileSlice'
import { ValidateProfileError } from '../../model/consts/consts'
import { EditableProfileCardHeader } from '../EditableProfileCardHeader/EditableProfileCardHeader'

interface EditableProfileCardProps {
  id?: string | number
  className?: string
}

const reducers: ReducersList = {
  profile: profileReducer
}

export const EditableProfileCard = memo((props: EditableProfileCardProps) => {
  const { className, id } = props
  const { t } = useTranslation('profile')

  const dispatch = useAppDispatch()
  const formData = useSelector(getProfileForm)
  const isLoading = useSelector(getProfileIsLoading)
  const error = useSelector(getProfileError)
  const readonly = useSelector(getProfileReadonly)
  const validateErrors = useSelector(getProfileValidateErrors)

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
          <VStack
              gap="8"
              max
              className={classNames('', {}, [className])}
            >
              <EditableProfileCardHeader />
              {validateErrors?.length && validateErrors.map((err) => (
                  <Text
                      key={err}
                      theme={TextTheme.ERROR}
                      text={validateProfileErrorTranslates[err]}
                      data-testid="EditableProfileCard.Error"
                    />
              ))}
              <ProfileCard
                  data={formData}
                  isLoading={isLoading}
                  error={error}
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
          </VStack>
      </DynamicModuleLoader>
  )
})
