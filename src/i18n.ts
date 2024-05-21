
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
    fallbackLng: 'it', // lingua di fallback
    interpolation: {
      escapeValue: false // react già gestisce l'escaping
    }
})


/**
 * Escaping --> sostituire caratteri speciali con una 
 * rappresentazione sicura. 
 * Ad esempio, < diventerebbe &lt; e > diventerebbe &gt;. 
 * Questo è particolarmente importante per prevenire attacchi XSS (Cross-Site Scripting), 
 * dove un utente malintenzionato potrebbe inserire codice 
 * HTML o JavaScript dannoso nelle variabili interpolate.
 * 
 * con react React.
 * React di per sé gestisce l'escaping delle variabili 
 * interpolate per prevenire XSS. Quando usi i18next con React, 
 * puoi disabilitare l'escaping di i18next impostando escapeValue a false. 
 * Questo evita una doppia operazione di escaping
 */