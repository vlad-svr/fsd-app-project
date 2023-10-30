import { memo, useCallback } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { useSelector } from 'react-redux'
import classNames from 'shared/lib/classNames/classNames'
import { useAppDispatch, useInitialEffect } from 'shared/lib/hooks'
import cls from './ArticleDetailsPage.module.scss'
import { ArticleDetails, ArticleList } from 'entities/Article'
import { Text, TextSize } from 'shared/ui/Text/Text'
import { CommentList } from 'entities/Comment'
import { DynamicModuleLoader, type ReducersList } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader'
import { getArticleComments } from '../../model/slices/articleDetailsCommentsSlice'
import { getArticleCommentsIsLoading } from '../../model/selectors/comments'
import { AddCommentForm } from 'features/addCommentForm'
import { fetchCommentsByArticleId } from '../../model/services/fetchCommentsByArticleId/fetchCommentsByArticleId'
import { addCommentForArticle } from '../../model/services/addCommentForArticle/addCommentForArticle'
import { Button, ButtonTheme } from 'shared/ui/Button/Button'
import { Page } from 'widgets/Page/Page'
import { RoutePaths } from 'shared/config/routeConfig/routeConfig'
import {
  getArticleRecommendations
} from '../../model/slices/articleDetailsPageRecommendationsSlice'
import { getArticleRecommendationsIsLoading } from '../../model/selectors/recommendations'
import {
  fetchArticleRecommendations
} from '../../model/services/fetchArticleRecommendations/fetchArticleRecommendations'
import { articleDetailsPageReducer } from '../../model/slices'

interface ArticleDetailsPageProps {
  className?: string
}

const reducers: ReducersList = {
  articleDetailsPage: articleDetailsPageReducer
}

const ArticleDetailsPage = (props: ArticleDetailsPageProps) => {
  const { className } = props
  const { id } = useParams<{ id: string }>()
  const { t } = useTranslation('article-details')
  const navigate = useNavigate()
  const dispatch = useAppDispatch()
  const comments = useSelector(getArticleComments.selectAll)
  const recommendations = useSelector(getArticleRecommendations.selectAll)
  const recommendationsIsLoading = useSelector(getArticleRecommendationsIsLoading)
  const commentsIsLoading = useSelector(getArticleCommentsIsLoading)

  const handleSendComment = useCallback((text: string) => {
    void dispatch(addCommentForArticle(text))
  }, [dispatch])

  const handleBackToList = useCallback(() => {
    navigate(RoutePaths.articles)
  }, [navigate])

  useInitialEffect(() => {
    void dispatch(fetchCommentsByArticleId(id))
    void dispatch(fetchArticleRecommendations())
  })

  if (!id) {
    return (
        <Page className={classNames(cls.wrapper, {}, [className])}>
            {t('article_not_found')}
        </Page>
    )
  }
  return (
      <DynamicModuleLoader reducers={reducers}>
          <Page className={classNames(cls.wrapper, {}, [className])}>
              <Button theme={ButtonTheme.OUTLINE} onClick={handleBackToList}>
                  {t('back_to_list')}
              </Button>
              <ArticleDetails id={id}/>
              <Text
                  size={TextSize.L}
                  className={cls.commentTitle}
                  title={t('recommend')}
              />
              <ArticleList
                  articles={recommendations}
                  isLoading={recommendationsIsLoading}
                  className={cls.recommendations}
                  target="_blank"
              />
              <Text className={cls.comment_title} title={t('comments')}/>
              <AddCommentForm onSendComment={handleSendComment}/>
              <CommentList comments={comments} isLoading={commentsIsLoading}/>
          </Page>
      </DynamicModuleLoader>
  )
}

export default memo(ArticleDetailsPage)
