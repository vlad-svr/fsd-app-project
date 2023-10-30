import { memo, useCallback } from 'react'
import { useSelector } from 'react-redux'
import { useSearchParams } from 'react-router-dom'
import classNames from 'shared/lib/classNames/classNames'
import cls from './ArticlesPage.module.scss'
import { ArticleList } from 'entities/Article'
import { DynamicModuleLoader, type ReducersList } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader'
import { useAppDispatch, useInitialEffect } from 'shared/lib/hooks'
import { articlesPageReducer, getArticles } from '../../model/slices/articlesPageSlice'
import { Page } from 'widgets/Page/Page'
import {
  getArticlesPageIsLoading,
  getArticlesPageView
} from '../../model/selectors/articlesPageSelectors'
import { fetchNextArticlesPage } from '../../model/services/fetchNextArticlesPage/fetchNextArticlesPage'
import { initArticlesPage } from '../../model/services/initArticlesPage/initArticlesPage'
import { ArticlesPageFilters } from '../ArticlesPageFilters/ArticlesPageFilters'

interface ArticlesPageProps {
  className?: string
}

const reducers: ReducersList = {
  articlesPage: articlesPageReducer
}

const ArticlesPage = (props: ArticlesPageProps) => {
  const { className } = props
  const dispatch = useAppDispatch()
  const articles = useSelector(getArticles.selectAll)
  const isLoading = useSelector(getArticlesPageIsLoading)
  const view = useSelector(getArticlesPageView)
  const [searchParams] = useSearchParams()

  const onLoadNextPage = useCallback(() => {
    void dispatch(fetchNextArticlesPage())
  }, [dispatch])

  const handleScrollEnd = useCallback(() => {
    onLoadNextPage()
  }, [onLoadNextPage])

  useInitialEffect(() => {
    void dispatch(initArticlesPage(searchParams))
  })

  return (
      <DynamicModuleLoader reducers={reducers} removeAfterUnmount={false}>
          <Page
              onScrollEnd={handleScrollEnd}
              className={classNames(cls.wrapper, {}, [className])}
          >
              <ArticlesPageFilters/>
              <ArticleList articles={articles} isLoading={isLoading} view={view} />
          </Page>
      </DynamicModuleLoader>
  )
}

export default memo(ArticlesPage)
