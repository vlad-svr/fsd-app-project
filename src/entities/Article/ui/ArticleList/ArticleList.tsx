import { memo } from 'react'
import { useTranslation } from 'react-i18next'
import classNames from 'shared/lib/classNames/classNames'
import { ArticleListItemSkeleton } from 'entities/Article/ui/ArticleListItem/ArticleListItemSkeleton'
import { ArticleListItem } from '../ArticleListItem/ArticleListItem'
import cls from './ArticleList.module.scss'
import { type Article, ArticleView } from '../../model/types/article'
import { Text } from 'shared/ui/Text'
import { TextSize } from 'shared/ui/Text/Text'

interface ArticleListProps {
  articles: Article[]
  view?: ArticleView
  isLoading?: boolean
  className?: string
}

const getSkeletons = (view: ArticleView) => new Array(view === ArticleView.SMALL ? 9 : 3)
  .fill(0)
  .map((_, index) => (
      <ArticleListItemSkeleton className={cls.card} key={index} view={view} />
  ))

export const ArticleList = memo((props: ArticleListProps) => {
  const { t } = useTranslation()
  const {
    className,
    articles,
    view = ArticleView.SMALL,
    isLoading
  } = props

  const renderArticle = (article: Article) => (
      <ArticleListItem
          article={article}
          view={view}
          className={cls.card}
          key={article.id}
        />
  )

  if (!isLoading && !articles.length) {
    return (
        <div className={classNames(cls.wrapper, {}, [className, cls[view]])}>
            <Text size={TextSize.L} text={t('articles_not_found')} />
        </div>
    )
  }

  return (
      <div className={classNames(cls.wrapper, {}, [className, cls[view]])}>
          {articles.length > 0
            ? articles.map(renderArticle)
            : null}
          {isLoading && getSkeletons(view)}
      </div>
  )
})
