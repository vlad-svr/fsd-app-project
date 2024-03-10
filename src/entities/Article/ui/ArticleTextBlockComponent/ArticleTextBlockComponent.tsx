import { memo } from 'react'
import { Text } from '@/shared/ui/Text'
import cls from './ArticleTextBlockComponent.module.scss'
import { type ArticleTextBlock } from '../../model/types/article'
import classNames from '@/shared/lib/classNames/classNames'

interface ArticleTextBlockComponentProps {
  className?: string
  block: ArticleTextBlock
}

export const ArticleTextBlockComponent = memo((props: ArticleTextBlockComponentProps) => {
  const { className, block } = props

  return (
      <div className={classNames(cls.wrapper, {}, [className])}>
          {block.title && (
          <Text title={block.title} className={cls.title} />
          )}
          {block.paragraphs.map((paragraph) => (
              <Text key={paragraph} text={paragraph} className={cls.paragraph} />
          ))}
      </div>
  )
})
