import { memo } from 'react'
import { useParams } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import classNames from 'shared/lib/classNames/classNames'
import cls from './ArticleDetailsPage.module.scss'
import { ArticleDetails } from 'entities/Article'

interface ArticleDetailsPageProps {
  className?: string
}

const ArticleDetailsPage = (props: ArticleDetailsPageProps) => {
  const { className } = props
  const { id } = useParams<{ id: string }>()
  const { t } = useTranslation('article-details')

  if (!id) {
    return (
        <div className={classNames(cls.wrapper, {}, [className])}>
            {t('article_not_found')}
        </div>
    )
  }
  return (
      <div className={classNames(cls.wrapper, {}, [className])}>
          <ArticleDetails id={id}/>
      </div>
  )
}

export default memo(ArticleDetailsPage)
