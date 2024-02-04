import React from 'react'
import { useTranslation } from 'react-i18next'
import { Page } from 'widgets/Page/Page'

const ForbiddenPage = () => {
  const { t } = useTranslation('')

  return (
      <Page>
          {t('forbidden_pag_title')}
      </Page>
  )
}

export default ForbiddenPage
