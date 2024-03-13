import { type HTMLAttributeAnchorTarget, memo } from 'react'
import { useTranslation } from 'react-i18next'
import classNames from '@/shared/lib/classNames/classNames'
import { Text } from '@/shared/ui/Text'
import { Icon } from '@/shared/ui/Icon'
import EyeIcon from '@/shared/assets/icons/eye-20-20.svg'
import { Card } from '@/shared/ui/Card'
import { Avatar } from '@/shared/ui/Avatar'
import { Button, ButtonTheme } from '@/shared/ui/Button'
import cls from './ArticleListItem.module.scss'
import type {
  Article, ArticleTextBlock
} from '../../model/types/article'
import {
  ArticleBlockType, ArticleView
} from '../../model/consts/consts'
import { ArticleTextBlockComponent } from '../ArticleTextBlockComponent/ArticleTextBlockComponent'
import { AppLink } from '@/shared/ui/AppLink'
import { getRouteArticleDetails } from '@/shared/constants/router'
import { AppImage } from '@/shared/ui/AppImage'
import { Skeleton } from '@/shared/ui/Skeleton'

interface ArticleListItemProps {
  article: Article
  view: ArticleView
  target?: HTMLAttributeAnchorTarget
  className?: string
}

export const ArticleListItem = memo((props: ArticleListItemProps) => {
  const { className, article, view, target } = props
  const { t } = useTranslation()

  const types = <Text text={article.type.join(', ')} className={cls.types} />
  const views = (
      <>
          <Text text={String(article.views)} className={cls.views} />
          <Icon Svg={EyeIcon} />
      </>
  )

  if (view === ArticleView.BIG) {
    const textBlock = article.blocks.find(
      (block) => block.type === ArticleBlockType.TEXT
    ) as ArticleTextBlock

    return (
        <div className={classNames('', {}, [className, cls[view]])}>
            <Card className={cls.card}>
                <div className={cls.header}>
                    <Avatar size={30} src={article.user.avatar} />
                    <Text text={article.user.username} className={cls.username} />
                    <Text text={article.createdAt} className={cls.date} />
                </div>
                <Text title={article.title} className={cls.title} />
                {types}
                <AppImage
                    src={article.img}
                    className={cls.img}
                    alt={article.title}
                    fallback={<Skeleton width="100%" height={250}/>}
                />
                {textBlock && (
                    <ArticleTextBlockComponent block={textBlock} className={cls.text_block} />
                )}
                <div className={cls.footer}>
                    <AppLink to={getRouteArticleDetails(article.id)} target={target}>
                        <Button theme={ButtonTheme.OUTLINE}>
                            {t('read_more') + '...'}
                        </Button>
                    </AppLink>
                    {views}
                </div>
            </Card>
        </div>
    )
  }

  return (
      <AppLink
          to={getRouteArticleDetails(article.id)}
          target={target}
          className={classNames(cls.wrapper, {}, [className, cls[view]])}
      >
          <Card className={cls.card}>
              <div className={cls.image_wrapper}>
                  <AppImage
                      alt={article.title}
                      src={article.img}
                      className={cls.img}
                      fallback={<Skeleton width={200} height={200}/>}
                  />
                  <Text text={article.createdAt} className={cls.date} />
              </div>
              <div className={cls.info_wrapper}>
                  {types}
                  {views}
              </div>
              <Text text={article.title} className={cls.title} />
          </Card>
      </AppLink>
  )
})
