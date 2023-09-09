import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'

import Backend from 'i18next-http-backend'
import LanguageDetector from 'i18next-browser-languagedetector'

void i18n
  .use(Backend)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    fallbackLng: 'en',
    debug: _IS_DEV_,
    defaultNS: 'translation',
    load: 'languageOnly',
    interpolation: {
      escapeValue: false
    }
  })

export { i18n }
