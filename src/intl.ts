import { useMemo, useState } from 'react'
import en_lng from './lang/en/en-en.json'
import it_lng from './lang/it/it-it.json'
import { Locale, Messages } from './lang/types'

export const useIntl = () => {
  const [locale, setLocale] = useState<Locale>('en')

  const messages: Messages | Record<string, any>= useMemo(() => {
    console.log("Aggiorno messages");
    return {
      en: en_lng,
      it: it_lng
    }
  }, [en_lng, it_lng])

  return { messages: messages[locale], locale, setLocale }
}

  