import { useState } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, Images, ListChecks, Mail, Users } from 'lucide-react'
import { siteConfig } from '../config/siteConfig.js'
import { useLanguage } from '../i18n/useLanguage.js'
import { StatusLegend } from '../components/StatusLegend.jsx'

/** Three promises, each one line, each with a picture next to it. */
const FEATURES = [
  { key: 'homeFeature1', Icon: Mail, className: 'bg-blue-500' },
  { key: 'homeFeature2', Icon: Images, className: 'bg-brand-600' },
  { key: 'homeFeature3', Icon: Users, className: 'bg-orange-500' },
]

const STEPS = ['homeStep1', 'homeStep2', 'homeStep3']

export function Home() {
  const { t, tr } = useLanguage()
  const [heroFailed, setHeroFailed] = useState(false)
  const showHeroImage = siteConfig.heroImage && !heroFailed

  return (
    <div className="mx-auto max-w-3xl px-4 py-5">
      {/* ---------- Hero: one sentence saying what this is for ---------- */}
      <section className="bg-brand-800 relative overflow-hidden rounded-3xl">
        {showHeroImage && (
          <img
            src={siteConfig.heroImage}
            alt=""
            aria-hidden="true"
            onError={() => setHeroFailed(true)}
            className="absolute inset-0 h-full w-full object-cover"
          />
        )}
        <div className="absolute inset-0 bg-linear-to-t from-black/85 via-black/55 to-black/25" />

        <div className="relative px-6 py-12 sm:py-16">
          <h1 className="max-w-md text-3xl leading-tight font-extrabold text-white sm:text-4xl">
            {tr(siteConfig.heroHeadline)}
          </h1>
        </div>
      </section>

      {/* ---------- What you get, in three lines ---------- */}
      <ul className="mt-5 space-y-3">
        {FEATURES.map(({ key, Icon, className }) => (
          <li key={key} className="card flex items-center gap-3 p-3">
            <span
              className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-xl ${className}`}
            >
              <Icon className="h-5 w-5 text-white" aria-hidden="true" />
            </span>
            <span className="text-base font-semibold">{t(key)}</span>
          </li>
        ))}
      </ul>

      {/* ---------- The single way forward ---------- */}
      <Link to="/issues" className="btn-primary mt-6">
        <ListChecks className="h-6 w-6 shrink-0" aria-hidden="true" />
        {t('homeCta')}
        <ArrowRight className="h-5 w-5 shrink-0" aria-hidden="true" />
      </Link>

      {/* ---------- How it works: three numbered steps ---------- */}
      <section className="card mt-8 p-5">
        <h2 className="mb-4 text-lg font-bold">{t('homeHowTitle')}</h2>
        <ol className="space-y-3">
          {STEPS.map((key, index) => (
            <li key={key} className="flex items-center gap-3">
              <span className="bg-brand-100 text-brand-800 flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-sm font-extrabold">
                {index + 1}
              </span>
              <span className="font-semibold">{t(key)}</span>
            </li>
          ))}
        </ol>
      </section>

      {/* ---------- What the colours mean ---------- */}
      <div className="mt-5">
        <StatusLegend />
      </div>
    </div>
  )
}
