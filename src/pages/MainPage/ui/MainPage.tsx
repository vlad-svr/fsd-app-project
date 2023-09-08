import { useTranslation } from 'react-i18next'
import { BugButton } from 'app/providers/ErrorBoundary'

function MainPage () {
  const { t } = useTranslation()

  return <div><BugButton/>{t('main_page')}</div>
}

export default MainPage
