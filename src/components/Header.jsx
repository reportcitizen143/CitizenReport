import { Link } from 'react-router-dom'
import { siteConfig } from '../config/siteConfig.js'
import { useLanguage } from '../i18n/useLanguage.js'
import { LanguageSwitch } from './LanguageSwitch.jsx'

/** Logo on the left, the two languages on the right. Same on every page. */
export function Header() {
  const { tr } = useLanguage()

  return (
    <header className="sticky top-0 z-30 border-b border-black/5 bg-white/95 backdrop-blur-sm">
      <div className="mx-auto flex max-w-3xl items-center justify-between gap-3 px-4 py-3">
        <Link to="/" className="flex min-w-0 items-center gap-2.5">
          {/* Decorative: the site name is spelled out right beside it. */}
          <img
            src={siteConfig.logo}
            alt=""
            aria-hidden="true"
            width="40"
            height="40"
            className="h-10 w-10 shrink-0 rounded-xl object-contain ring-1 ring-black/5"
          />
          <span className="min-w-0">
            <span className="block truncate text-lg leading-tight font-extrabold">
              {siteConfig.name}
            </span>
            <span className="text-ink-soft block truncate text-xs leading-tight">
              {tr(siteConfig.tagline)}
            </span>
          </span>
        </Link>

        <LanguageSwitch />
      </div>
    </header>
  )
}
