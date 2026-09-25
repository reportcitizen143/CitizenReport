import { createContext } from 'react'

/** Holds { lang, setLang, t, tr }. Consumed through the useLanguage() hook. */
export const LanguageContext = createContext(null)
