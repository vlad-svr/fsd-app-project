import { memo, useCallback } from 'react'
import { useTranslation } from 'react-i18next'
import { useSelector } from 'react-redux'
import classNames from '@/shared/lib/classNames/classNames'
import { Card } from '@/shared/ui/Card'
import { Input } from '@/shared/ui/Input'
import { type SortOrder } from '@/shared/types'
import {
  type ArticleType,
  type ArticleView,
  type ArticleSortField
} from '@/entities/Article'
import { fetchArticlesList } from '../../model/services/fetchArticlesList/fetchArticlesList'
import cls from './ArticlesPageFilters.module.scss'
import {
  getArticlesPageOrder, getArticlesPageSearch,
  getArticlesPageSort, getArticlesPageType,
  getArticlesPageView
} from '../../model/selectors/articlesPageSelectors'
import { articlesPageActions } from '../../model/slices/articlesPageSlice'
import { useAppDispatch, useDebounce } from '@/shared/lib/hooks'
import { ArticleViewSelector } from '@/features/ArticleViewSelector'
import { ArticleSortSelector } from '@/features/ArticleSortSelector'
import { ArticleTypeTabs } from '@/features/ArticleTypeTabs'

interface ArticlesPageFiltersProps {
  className?: string
}

export const ArticlesPageFilters = memo((props: ArticlesPageFiltersProps) => {
  const { className } = props
  const { t } = useTranslation()
  const dispatch = useAppDispatch()
  const view = useSelector(getArticlesPageView)
  const sort = useSelector(getArticlesPageSort)
  const order = useSelector(getArticlesPageOrder)
  const search = useSelector(getArticlesPageSearch)
  const type = useSelector(getArticlesPageType)

  const fetchData = useCallback(() => {
    void dispatch(fetchArticlesList({ replace: true }))
  }, [dispatch])

  const debouncedFetchData = useDebounce(fetchData, 500)

  const onChangeView = useCallback((view: ArticleView) => {
    dispatch(articlesPageActions.setView(view))
  }, [dispatch])

  const onChangeSort = useCallback((newSort: ArticleSortField) => {
    dispatch(articlesPageActions.setSort(newSort))
    dispatch(articlesPageActions.setPage(1))
    fetchData()
  }, [dispatch, fetchData])

  const onChangeOrder = useCallback((newOrder: SortOrder) => {
    dispatch(articlesPageActions.setOrder(newOrder))
    dispatch(articlesPageActions.setPage(1))
    fetchData()
  }, [dispatch, fetchData])

  const onChangeSearch = useCallback((search: string) => {
    dispatch(articlesPageActions.setSearch(search))
    dispatch(articlesPageActions.setPage(1))
    debouncedFetchData()
  }, [dispatch, debouncedFetchData])

  const onChangeType = useCallback((value: ArticleType) => {
    dispatch(articlesPageActions.setType(value))
    dispatch(articlesPageActions.setPage(1))
    fetchData()
  }, [dispatch, fetchData])

  return (
      <div className={classNames(cls.wrapper, {}, [className])}>
          <div className={cls.sort_wrapper}>
              <ArticleSortSelector
                  order={order}
                  sort={sort}
                  onChangeOrder={onChangeOrder}
                  onChangeSort={onChangeSort}
                />
              <ArticleViewSelector
                  view={view}
                  onViewClick={onChangeView}
                />
          </div>
          <Card className={cls.search}>
              <Input
                  onChange={onChangeSearch}
                  value={search}
                  placeholder={t('search')}
                />
          </Card>
          <ArticleTypeTabs
              value={type}
              onChangeType={onChangeType}
              className={cls.tabs}
            />
      </div>
  )
})
