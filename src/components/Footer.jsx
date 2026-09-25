import { Link } from 'react-router-dom'
import { Instagram, Youtube } from 'lucide-react'
import { siteConfig } from '../config/siteConfig.js'
import { useLanguage } from '../i18n/useLanguage.js'
import { XIcon } from './icons.jsx'

const SOCIAL_LINKS = [
  { key: 'youtube', Icon: Youtube, label: 'YouTube' },
  { key: 'instagram', Icon: Instagram, label: 'Instagram' },
  { key: 'twitter', Icon: XIcon, label: 'X' },
]

export function Footer() {
  const { t } = useLanguage()
  const links = SOCIAL_LINKS.filter(({ key }) => siteConfig.social?.[key])

  return (
    <footer className="mt-12 border-t border-black/5 bg-white">
      <div className="mx-auto max-w-3xl space-y-5 px-4 py-8 text-center">
        {links.length > 0 && (
          <div className="flex justify-center gap-3">
            {links.map(({ key, Icon, label }) => (
              <a
                key={key}
                href={siteConfig.social[key]}
                target="_blank"
                rel="noreferrer noopener"
                aria-label={label}
                className="text-ink-soft hover:text-ink flex h-11 w-11 items-center justify-center rounded-xl bg-zinc-100 transition hover:bg-zinc-200"
              >
                <Icon className="h-5 w-5" />
              </a>
            ))}
          </div>
        )}

        <p className="text-ink-soft mx-auto max-w-md text-sm">{t('footerNote')}</p>

        <nav className="text-brand-700 flex justify-center gap-5 text-sm font-semibold">
          <Link to="/issues">{t('navIssues')}</Link>
          <Link to="/about">{t('navAbout')}</Link>
        </nav>

        <p className="text-ink-soft text-xs">
          © {new Date().getFullYear()} {siteConfig.name}
        </p>
      </div>
    </footer>
  )
}
