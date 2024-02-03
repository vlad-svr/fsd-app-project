import { memo, useCallback } from 'react'
import { useTranslation } from 'react-i18next'
import classNames from 'shared/lib/classNames/classNames'
import { Country } from '../../model/types/country'
import { ListBox } from 'shared/ui/ListBox'

interface CountrySelectProps {
  className?: string
  value?: Country
  onChange?: (value: Country) => void
  readonly?: boolean
}

const options = [
  { value: Country.Belarus, content: Country.Belarus },
  { value: Country.Poland, content: Country.Poland },
  { value: Country.Russia, content: Country.Russia }
]

export const CountrySelect = memo(({
  className, value, onChange, readonly
}: CountrySelectProps) => {
  const { t } = useTranslation()

  const onChangeHandler = useCallback((value: string) => {
    onChange?.(value as Country)
  }, [onChange])

  return (
      <ListBox
          onChange={onChangeHandler}
          value={value}
          defaultValue="Select a country"
          items={options}
          readonly={readonly}
          label={t('select_country')}
          direction="top right"
          className={classNames('', {}, [className])}
      />
  )
})
