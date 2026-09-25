import { getStatus } from '../utils/issueHelpers.js'
import { useLanguage } from '../i18n/useLanguage.js'

/**
 * The coloured pill that says where an issue stands.
 * Colour AND a word AND a dot — so it reads even if colour alone is missed.
 */
export function StatusBadge({ status, size = 'md' }) {
  const { tr } = useLanguage()
  const config = getStatus(status)

  const sizeClass = size === 'lg' ? 'px-4 py-2 text-base' : 'px-3 py-1 text-sm'

  return (
    <span
      className={`inline-flex items-center gap-1.5 rounded-full font-bold ${config.badgeClass} ${sizeClass}`}
    >
      <span aria-hidden="true">{config.dot}</span>
      {tr(config.label)}
    </span>
  )
}
