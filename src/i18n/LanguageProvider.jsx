import { useCallback, useEffect, useMemo, useState } from 'react'
import { LanguageContext } from './language-context.js'
import { languages, strings } from './strings.js'
import { localize } from '../utils/localize.js'
import { siteConfig } from '../config/siteConfig.js'

const STORAGE_KEY = 'citizen-report:lang'
const SUPPORTED = languages.map((language) => language.code)

/** Remembered choice → otherwise the site default. Never throws in private mode. */
function readStoredLanguage() {
  try {
    const stored = window.localStorage.getItem(STORAGE_KEY)
    if (stored && SUPPORTED.includes(stored)) return stored
  } catch {
    // localStorage can be blocked; the default below is a fine answer.
  }
  return SUPPORTED.includes(siteConfig.defaultLanguage) ? siteConfig.defaultLanguage : SUPPORTED[0]
}

export function LanguageProvider({ children }) {
  const [lang, setLangState] = useState(readStoredLanguage)

  const setLang = useCallback((next) => {
    if (!SUPPORTED.includes(next)) return
    setLangState(next)
    try {
      window.localStorage.setItem(STORAGE_KEY, next)
    } catch {
      // Not being able to remember the choice is not worth breaking the page.
    }
  }, [])

  // Keep <html lang> honest — screen readers and fonts both depend on it.
  useEffect(() => {
    document.documentElement.lang = lang
  }, [lang])

  const value = useMemo(
    () => ({
      lang,
      setLang,
      languages,
      /** Fixed UI label, by key, from strings.js */
      t: (key) => localize(strings[key], lang) || key,
      /** Any translatable content value from the data files */
      tr: (value) => localize(value, lang),
    }),
    [lang, setLang],
  )

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>
}
