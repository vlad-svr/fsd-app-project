import { memo, useCallback } from 'react'
import { useSelector } from 'react-redux'
import classNames from 'shared/lib/classNames/classNames'
import cls from './ArticlesPage.module.scss'
import { ArticleList, ArticleViewSelector, type ArticleView } from 'entities/Article'
import { DynamicModuleLoader, type ReducersList } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader'
import { useAppDispatch, useInitialEffect } from 'shared/lib/hooks'
import { fetchArticlesList } from '../../model/services/fetchArticlesList/fetchArticlesList'
import { articlesPageActions, articlesPageReducer, getArticles } from '../../model/slices/articlesPageSlice'
import { Page } from 'shared/ui/Page/Page'
import {
  getArticlesPageIsLoading,
  getArticlesPageView
} from '../../model/selectors/articlesPageSelectors'
import { fetchNextArticlesPage } from 'pages/ArticlesPage/model/services/fetchNextArticlesPage/fetchNextArticlesPage'

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

  const handleChangeView = useCallback((view: ArticleView) => {
    dispatch(articlesPageActions.setView(view))
  }, [dispatch])

  const onLoadNextPage = useCallback(() => {
    void dispatch(fetchNextArticlesPage())
  }, [dispatch])

  const handleScrollEnd = useCallback(() => {
    onLoadNextPage()
  }, [onLoadNextPage])

  useInitialEffect(() => {
    void dispatch(articlesPageActions.initState())
    void dispatch(fetchArticlesList({ page: 1 }))
  })

  return (
      <DynamicModuleLoader reducers={reducers}>
          <Page
              onScrollEnd={handleScrollEnd}
              className={classNames(cls.wrapper, {}, [className])}
          >
              <ArticleViewSelector view={view} onViewClick={handleChangeView}/>
              <ArticleList articles={articles} isLoading={isLoading} view={view} />
          </Page>
      </DynamicModuleLoader>
  )
}

export default memo(ArticlesPage)
