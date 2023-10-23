import { useTranslation } from 'react-i18next'
import { BugButton } from 'app/providers/ErrorBoundary'
import { Page } from 'shared/ui/Page/Page'
// import { Counter } from 'entities/Counter'

function MainPage () {
  const { t } = useTranslation()

  return <Page>
      <BugButton/>{t('main_page')}
      {/* <Counter/> */}
  </Page>
}

export default MainPage
