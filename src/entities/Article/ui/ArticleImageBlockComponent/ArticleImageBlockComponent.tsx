import { memo } from 'react'
import { Text, TextAlign } from '@/shared/ui/Text'
import cls from './ArticleImageBlockComponent.module.scss'
import { type ArticleImageBlock } from '../../model/types/article'
import classNames from '@/shared/lib/classNames/classNames'

interface ArticleImageBlockComponentProps {
  className?: string
  block: ArticleImageBlock
}

export const ArticleImageBlockComponent = memo((props: ArticleImageBlockComponentProps) => {
  const { className, block } = props

  return (
      <div className={classNames(cls.ArticleImageBlockComponent, {}, [className])}>
          <img src={block.src} alt={block.title} className={cls.img} />
          {block.title && (
          <Text text={block.title} align={TextAlign.CENTER} />
          )}
      </div>
  )
})
