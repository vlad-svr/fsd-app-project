import { useTranslation } from 'react-i18next'
import { Page } from '@/widgets/Page'

function MainPage () {
  const { t } = useTranslation()

  return (
      <Page data-testid="MainPage">
          {t('main_page')}
      </Page>
  )
}

export default MainPage
