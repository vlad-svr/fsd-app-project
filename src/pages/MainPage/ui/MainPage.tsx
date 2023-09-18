import { useTranslation } from 'react-i18next'
import { BugButton } from 'app/providers/ErrorBoundary'
import { Counter } from 'entities/Counter'

function MainPage () {
  const { t } = useTranslation()

  return <div>
      <BugButton/>{t('main_page')}
      <Counter/>
  </div>
}

export default MainPage
