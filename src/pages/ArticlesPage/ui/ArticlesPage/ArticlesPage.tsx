import { memo, useCallback } from 'react'
import { useSelector } from 'react-redux'
import classNames from 'shared/lib/classNames/classNames'
import cls from './ArticlesPage.module.scss'
import { ArticleList, ArticleViewSelector, type ArticleView } from 'entities/Article'
import { DynamicModuleLoader, type ReducersList } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader'
import { useAppDispatch, useInitialEffect } from 'shared/lib/hooks'
import { fetchArticlesList } from '../../model/services/fetchArticlesList/fetchArticlesList'
import { articlesPageActions, articlesPageReducer, getArticles } from '../../model/slices/articlesPageSlice'
import {
  getArticlesPageError,
  getArticlesPageIsLoading,
  getArticlesPageView
} from '../../model/selectors/articlesPageSelectors'

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
  const error = useSelector(getArticlesPageError)

  const handleChangeView = useCallback((view: ArticleView) => {
    dispatch(articlesPageActions.setView(view))
  }, [dispatch])

  useInitialEffect(() => {
    void dispatch(fetchArticlesList())
    void dispatch(articlesPageActions.initState())
  })

  return (
      <DynamicModuleLoader reducers={reducers}>
          <div className={classNames(cls.wrapper, {}, [className])}>
              <ArticleViewSelector view={view} onViewClick={handleChangeView}/>
              <ArticleList articles={articles} isLoading={isLoading} view={view} />
          </div>
      </DynamicModuleLoader>
  )
}

export default memo(ArticlesPage)
