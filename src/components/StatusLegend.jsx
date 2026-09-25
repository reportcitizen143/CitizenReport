import { getStatusFilters } from '../utils/issueHelpers.js'
import { useLanguage } from '../i18n/useLanguage.js'

/**
 * Explains the three colours in one glance.
 * Shown on the home page so the colours are learned before they are used.
 */
export function StatusLegend() {
  const { t, tr } = useLanguage()
  const items = getStatusFilters()

  return (
    <section className="card p-5">
      <h2 className="mb-4 text-lg font-bold">{t('statusLegendTitle')}</h2>
      <ul className="grid grid-cols-1 gap-3 sm:grid-cols-3">
        {items.map((item) => (
          <li key={item.key} className="text-center">
            <span
              className={`inline-flex items-center gap-1.5 rounded-full px-3 py-1.5 text-sm font-bold ${item.badgeClass}`}
            >
              <span aria-hidden="true">{item.dot}</span>
              {tr(item.label)}
            </span>
            <p className="text-ink-soft mt-2 text-sm">{tr(item.help)}</p>
          </li>
        ))}
      </ul>
    </section>
  )
}
