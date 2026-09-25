import { Check, ShieldCheck, X } from 'lucide-react'
import { siteConfig } from '../config/siteConfig.js'
import { useLanguage } from '../i18n/useLanguage.js'

const DOES = ['aboutDo1', 'aboutDo2', 'aboutDo3']
const DOES_NOT = ['aboutDont1', 'aboutDont2']

/**
 * The honesty page. It says plainly what the site can and cannot do,
 * because credibility is the only real asset a project like this has.
 */
export function About() {
  const { t } = useLanguage()

  return (
    <div className="mx-auto max-w-3xl space-y-5 px-4 py-6">
      <h1 className="text-2xl font-extrabold sm:text-3xl">{t('aboutTitle')}</h1>

      <p className="text-ink-soft text-base leading-relaxed">{t('aboutBody')}</p>

      <section className="card p-5">
        <h2 className="mb-4 text-lg font-bold">{t('aboutPromiseTitle')}</h2>

        <ul className="space-y-3">
          {DOES.map((key) => (
            <li key={key} className="flex gap-3">
              <span className="bg-brand-100 flex h-6 w-6 shrink-0 items-center justify-center rounded-full">
                <Check className="text-brand-700 h-4 w-4" aria-hidden="true" />
              </span>
              <span>{t(key)}</span>
            </li>
          ))}

          {DOES_NOT.map((key) => (
            <li key={key} className="flex gap-3">
              <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-red-100">
                <X className="h-4 w-4 text-red-600" aria-hidden="true" />
              </span>
              <span>{t(key)}</span>
            </li>
          ))}
        </ul>
      </section>

      <section className="bg-brand-50 ring-brand-100 flex items-center gap-3 rounded-2xl p-4 ring-1">
        <ShieldCheck className="text-brand-700 h-6 w-6 shrink-0" aria-hidden="true" />
        <p className="font-semibold">{t('aboutNoAccount')}</p>
      </section>

      {siteConfig.contactEmail && (
        <p className="text-ink-soft text-center text-sm">
          <a href={`mailto:${siteConfig.contactEmail}`} className="text-brand-700 font-bold">
            {siteConfig.contactEmail}
          </a>
        </p>
      )}
    </div>
  )
}
