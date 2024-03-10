import { useTranslation } from 'react-i18next'
import { BugButton } from '@/app/providers/ErrorBoundary'
import { Page } from '@/widgets/Page'

function MainPage () {
  const { t } = useTranslation()

  return <Page>
      <BugButton/>{t('main_page')}
  </Page>
}

export default MainPage
