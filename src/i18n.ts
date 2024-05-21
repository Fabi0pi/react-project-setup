
import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import en_lng from './locales/en/en-en.json'
import it_lng from './locales/it/it-it.json'

i18n.use(initReactI18next).init({
    resources: {
      en: { translation: en_lng },
      it: { translation: it_lng }
    },
    lng: 'en', // lingua predefinita
    fallbackLng: 'en', // lingua di fallback
    interpolation: {
      escapeValue: false // react già gestisce l'escaping
    }
})
