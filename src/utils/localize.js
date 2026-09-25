/**
 * Turns a translatable value into a plain string.
 *
 * Content may be written either as a plain string (same in every language)
 * or as { te: '...', en: '...' }. Everything in the app reads content
 * through this one function, so a missing translation degrades gracefully
 * instead of rendering "[object Object]".
 */
export function localize(value, lang, fallbackLang = 'te') {
  if (value === null || value === undefined) return ''
  if (typeof value === 'string' || typeof value === 'number') return String(value)
  if (typeof value !== 'object') return ''

  return value[lang] ?? value[fallbackLang] ?? Object.values(value).find(Boolean) ?? ''
}
