import { useLanguage } from '../i18n/useLanguage.js'

/**
 * Two words, always in the same corner, always visible.
 *
 * Deliberately NOT a dropdown: a dropdown hides the other language behind
 * a tap, and someone who cannot read the current language cannot find it.
 * Both options stay on screen at all times.
 */
export function LanguageSwitch({ className = '' }) {
  const { lang, setLang, languages, t } = useLanguage()

  return (
    <div
      className={`flex shrink-0 items-center rounded-full bg-zinc-100 p-1 ${className}`}
      role="group"
      aria-label={t('languageLabel')}
    >
      {languages.map((option) => {
        const isActive = option.code === lang
        return (
          <button
            key={option.code}
            type="button"
            onClick={() => setLang(option.code)}
            aria-pressed={isActive}
            lang={option.code}
            className={`rounded-full px-3 py-1.5 text-sm font-bold transition sm:px-4 ${
              isActive ? 'bg-brand-700 text-white shadow-sm' : 'text-ink-soft hover:text-ink'
            }`}
          >
            {option.label}
          </button>
        )
      })}
    </div>
  )
}
