import { memo } from 'react'
import classNames from 'shared/lib/classNames/classNames'
import { Code } from 'shared/ui/Code/Code'
import cls from './ArticleCodeBlockComponent.module.scss'
import { type ArticleCodeBlock } from '../../model/types/article'

interface ArticleCodeBlockComponentProps {
  className?: string
  block: ArticleCodeBlock
}

export const ArticleCodeBlockComponent = memo((props: ArticleCodeBlockComponentProps) => {
  const { className, block } = props

  return (
      <div className={classNames(cls.wrapper, {}, [className])}>
          <Code text={block.code} />
      </div>
  )
})
