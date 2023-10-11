import { memo } from 'react'
import classNames from 'shared/lib/classNames/classNames'
import cls from './ArticlesPage.module.scss'
import { ArticleList } from 'entities/Article'

interface ArticlesPageProps {
  className?: string
}

const ArticlesPage = (props: ArticlesPageProps) => {
  const { className } = props

  return (
      <div className={classNames(cls.wrapper, {}, [className])}>
          <ArticleList articles={[]} />
      </div>
  )
}

export default memo(ArticlesPage)
