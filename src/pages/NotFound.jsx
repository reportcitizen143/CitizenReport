import { Link } from 'react-router-dom'
import { Home as HomeIcon, SearchX } from 'lucide-react'
import { useLanguage } from '../i18n/useLanguage.js'

export function NotFound() {
  const { t } = useLanguage()

  return (
    <div className="mx-auto flex max-w-md flex-col items-center gap-4 px-4 py-20 text-center">
      <SearchX className="h-12 w-12 text-zinc-300" aria-hidden="true" />
      <h1 className="text-xl font-extrabold">{t('notFoundTitle')}</h1>
      <Link to="/" className="btn-primary">
        <HomeIcon className="h-5 w-5" aria-hidden="true" />
        {t('notFoundCta')}
      </Link>
    </div>
  )
}
