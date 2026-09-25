import { Landmark, Mail, Phone } from 'lucide-react'
import { useLanguage } from '../i18n/useLanguage.js'

/** Who the complaint goes to. Shown plainly — no surprises about the recipient. */
export function AuthorityCard({ authority }) {
  const { t, tr } = useLanguage()
  if (!authority) return null

  return (
    <section className="card p-4">
      <div className="flex items-start gap-3">
        <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-zinc-100">
          <Landmark className="text-ink-soft h-5 w-5" aria-hidden="true" />
        </span>

        <div className="min-w-0 flex-1">
          <p className="text-ink-soft text-xs font-semibold tracking-wide uppercase">
            {t('authorityTitle')}
          </p>
          <p className="text-base font-bold">{tr(authority.name)}</p>
          {authority.office && <p className="text-ink-soft text-sm">{tr(authority.office)}</p>}

          <div className="mt-2 space-y-1 text-sm">
            <p className="text-ink-soft flex items-center gap-2 break-all">
              <Mail className="h-4 w-4 shrink-0" aria-hidden="true" />
              {authority.email}
            </p>
            {authority.phone && (
              <a
                href={`tel:${authority.phone}`}
                className="text-brand-700 flex items-center gap-2 font-semibold"
              >
                <Phone className="h-4 w-4 shrink-0" aria-hidden="true" />
                {authority.phone}
              </a>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
