import { useLanguage } from '../i18n/useLanguage.js'

/**
 * The status filters. Rendered from the status list, so adding a status
 * in statuses.js adds a chip here automatically.
 */
export function FilterChips({ filters, active, onChange }) {
  const { t, tr } = useLanguage()

  const options = [{ key: 'all', label: { te: t('filterAll'), en: t('filterAll') } }, ...filters]

  return (
    <div
      className="-mx-4 flex [scrollbar-width:none] gap-2 overflow-x-auto px-4 pb-1 [&::-webkit-scrollbar]:hidden"
      role="tablist"
      aria-label={t('issuesTitle')}
    >
      {options.map((option) => {
        const isActive = option.key === active
        return (
          <button
            key={option.key}
            type="button"
            role="tab"
            aria-selected={isActive}
            onClick={() => onChange(option.key)}
            className={`shrink-0 rounded-full px-4 py-2 text-sm font-bold transition ${
              isActive
                ? 'bg-brand-700 text-white shadow-sm'
                : 'text-ink-soft hover:text-ink bg-white ring-1 ring-black/5'
            }`}
          >
            {tr(option.label)}
          </button>
        )
      })}
    </div>
  )
}
