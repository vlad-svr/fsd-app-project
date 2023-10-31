import { useTranslation } from 'react-i18next'
import { memo, useCallback } from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import classNames from 'shared/lib/classNames/classNames'
import { RoutePaths } from 'shared/config/routeConfig/routeConfig'
import { Button, ButtonTheme } from 'shared/ui/Button/Button'
import cls from './ArticleDetailsPageHeader.module.scss'
import { getArticleDetailsData } from 'entities/Article'
import { getCanEditArticle } from 'pages/ArticleDetailsPage'

interface ArticleDetailsPageHeaderProps {
  className?: string
}

export const ArticleDetailsPageHeader = memo((props: ArticleDetailsPageHeaderProps) => {
  const { className } = props
  const { t } = useTranslation('article-details')
  const navigate = useNavigate()
  const canEdit = useSelector(getCanEditArticle)
  const article = useSelector(getArticleDetailsData)

  const handleBackToList = useCallback(() => {
    navigate(RoutePaths.articles)
  }, [navigate])

  const onEditArticle = useCallback(() => {
    navigate(`${RoutePaths.article_details}${article?.id}/edit`)
  }, [article?.id, navigate])

  return (
      <div className={classNames(cls.wrapper, {}, [className])}>
          <Button theme={ButtonTheme.OUTLINE} onClick={handleBackToList}>
              {t('back_to_list')}
          </Button>
          {canEdit && (
              <Button
                  className={cls.edit_btn}
                  theme={ButtonTheme.OUTLINE}
                  onClick={onEditArticle}
              >
                  {t('edit')}
              </Button>
          )}
      </div>
  )
})
