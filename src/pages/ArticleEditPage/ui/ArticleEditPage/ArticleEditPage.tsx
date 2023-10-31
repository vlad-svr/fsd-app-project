import { memo } from 'react'
import { useTranslation } from 'react-i18next'
import { useParams } from 'react-router-dom'
import classNames from 'shared/lib/classNames/classNames'
import { Page } from 'widgets/Page/Page'
import cls from './ArticleEditPage.module.scss'

interface ArticleEditPageProps {
  className?: string
}

const ArticleEditPage = memo((props: ArticleEditPageProps) => {
  const { className } = props
  const { t } = useTranslation()
  const { id } = useParams<{ id: string }>()
  const isEdit = Boolean(id)

  return (
      <Page className={classNames(cls.wrapper, {}, [className])}>
          {isEdit
            ? t('edit_article_with_id') + ' = ' + id
            : t('create_new_article')}
      </Page>
  )
})

export default ArticleEditPage
