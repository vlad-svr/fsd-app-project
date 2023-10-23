import React from 'react'
import styles from './NotFoundPage.module.scss'
import { useTranslation } from 'react-i18next'
import { Page } from 'widgets/Page/Page'

function NotFoundPage () {
  const { t } = useTranslation()

  return (
      <Page className={styles.wrapper}>
          {t('page_not_found')}
      </Page>
  )
}

export { NotFoundPage }
