import classNames from 'shared/lib/classNames/classNames'
import { memo } from 'react'
import { ArticleListItemSkeleton } from 'entities/Article/ui/ArticleListItem/ArticleListItemSkeleton'
import { ArticleListItem } from '../ArticleListItem/ArticleListItem'
import cls from './ArticleList.module.scss'
import { type Article, ArticleView } from '../../model/types/article'

interface ArticleListProps {
  articles: Article[]
  view?: ArticleView
  isLoading?: boolean
  className?: string
}

const getSkeletons = (view: ArticleView) => new Array(view === ArticleView.SMALL ? 9 : 3)
  .fill(0)
  .map((item, index) => (
      <ArticleListItemSkeleton className={cls.card} key={index} view={view} />
  ))

export const ArticleList = memo((props: ArticleListProps) => {
  const {
    className,
    articles,
    view = ArticleView.SMALL,
    isLoading
  } = props

  if (isLoading) {
    return (
        <div className={classNames(cls.ArticleList, {}, [className, cls[view]])}>
            {getSkeletons(view)}
        </div>
    )
  }

  const renderArticle = (article: Article) => (
      <ArticleListItem
          article={article}
          view={view}
          className={cls.card}
          key={article.id}
        />
  )

  return (
      <div className={classNames(cls.ArticleList, {}, [className, cls[view]])}>
          {articles.length > 0
            ? articles.map(renderArticle)
            : null}
      </div>
  )
})
