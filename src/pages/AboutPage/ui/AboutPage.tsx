import { useTranslation } from 'react-i18next'
import { Page } from '@/widgets/Page'

function AboutPage () {
  const { t } = useTranslation('about')

  return <Page>{t('about_us')}</Page>
}

export default AboutPage
