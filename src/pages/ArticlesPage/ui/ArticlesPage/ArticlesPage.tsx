import { memo, useCallback } from 'react'
import { useSearchParams } from 'react-router-dom'
import classNames from '@/shared/lib/classNames/classNames'
import cls from './ArticlesPage.module.scss'
import { DynamicModuleLoader, type ReducersList } from '@/shared/lib/components/DynamicModuleLoader/DynamicModuleLoader'
import { useAppDispatch, useInitialEffect } from '@/shared/lib/hooks'
import { articlesPageReducer } from '../../model/slices/articlesPageSlice'
import { Page } from '@/widgets/Page/Page'
import { fetchNextArticlesPage } from '../../model/services/fetchNextArticlesPage/fetchNextArticlesPage'
import { initArticlesPage } from '../../model/services/initArticlesPage/initArticlesPage'
import { ArticlesPageFilters } from '../ArticlesPageFilters/ArticlesPageFilters'
import { ArticleInfiniteList } from '../../ui/ArticleInfiniteList/ArticleInfiniteList'

interface ArticlesPageProps {
  className?: string
}

const reducers: ReducersList = {
  articlesPage: articlesPageReducer
}

const ArticlesPage = (props: ArticlesPageProps) => {
  const { className } = props
  const dispatch = useAppDispatch()
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
              <ArticleInfiniteList/>
          </Page>
      </DynamicModuleLoader>
  )
}

export default memo(ArticlesPage)
