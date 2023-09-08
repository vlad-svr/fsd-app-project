import React from 'react'
import styles from './NotFoundPage.module.scss'
import { useTranslation } from 'react-i18next'

function NotFoundPage () {
  const { t } = useTranslation()

  return (
      <div className={styles.wrapper}>
          {t('page_not_found')}
      </div>
  )
}

export { NotFoundPage }
