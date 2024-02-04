import classNames from 'shared/lib/classNames/classNames'
import { useTranslation } from 'react-i18next'
import { memo, useCallback, useMemo } from 'react'
import { Select, type SelectOption } from 'shared/ui/Select/Select'
import { ArticleSortField } from '../../model/consts/consts'
import { type SortOrder } from 'shared/types'
import cls from './ArticleSortSelector.module.scss'

interface ArticleSortSelectorProps {
  className?: string
  sort: ArticleSortField
  order: SortOrder
  onChangeOrder: (newOrder: SortOrder) => void
  onChangeSort: (newSort: ArticleSortField) => void
}

export const ArticleSortSelector = memo((props: ArticleSortSelectorProps) => {
  const {
    className, onChangeOrder, onChangeSort, order, sort
  } = props
  const { t } = useTranslation()

  const orderOptions = useMemo<Array<SelectOption<SortOrder>>>(() => [
    {
      value: 'asc',
      content: t('increasing')
    },
    {
      value: 'desc',
      content: t('descending')
    }
  ], [t])

  const sortFieldOptions = useMemo<Array<SelectOption<ArticleSortField>>>(() => [
    {
      value: ArticleSortField.CREATED,
      content: t('created_date')
    },
    {
      value: ArticleSortField.TITLE,
      content: t('name')
    },
    {
      value: ArticleSortField.VIEWS,
      content: t('views')
    }
  ], [t])

  const changeSortHandler = useCallback((newSort: string) => {
    onChangeSort(newSort as ArticleSortField)
  }, [onChangeSort])

  const changeOrderHandler = useCallback((newOrder: string) => {
    onChangeOrder(newOrder as SortOrder)
  }, [onChangeOrder])

  return (
      <div className={classNames(cls.wrapper, {}, [className])}>
          <Select
              options={sortFieldOptions}
              label={t('sort_by')}
              value={sort}
              onChange={changeSortHandler}
            />
          <Select
              options={orderOptions}
              label={t('by')}
              value={order}
              onChange={changeOrderHandler}
              className={cls.order}
            />
      </div>
  )
})
