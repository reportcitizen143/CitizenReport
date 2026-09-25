import { useContext } from 'react'
import { LanguageContext } from './language-context.js'

/**
 * The only way components read language state.
 *
 *   const { lang, setLang, t, tr } = useLanguage()
 *   t('sendEmailCta')          → a fixed UI label from strings.js
 *   tr(issue.title)            → a piece of content from the data files
 */
export function useLanguage() {
  const context = useContext(LanguageContext)
  if (!context) {
    throw new Error('useLanguage() must be used inside <LanguageProvider>.')
  }
  return context
}
