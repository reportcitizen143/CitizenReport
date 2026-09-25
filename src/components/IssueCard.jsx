import { Link } from 'react-router-dom'
import { ChevronRight, MapPin } from 'lucide-react'
import { useLanguage } from '../i18n/useLanguage.js'
import { IssueImage } from './IssueImage.jsx'
import { StatusBadge } from './StatusBadge.jsx'

/**
 * One row in the issue list: picture, what it is, where it is, where it stands.
 * The whole card is one big tap target — no small links to aim at.
 */
export function IssueCard({ issue }) {
  const { tr } = useLanguage()
  const title = tr(issue.title)

  return (
    <li>
      <Link
        to={`/issue/${issue.id}`}
        className="card hover:border-brand-200 flex items-center gap-3 p-3 transition hover:shadow-md active:scale-[0.99]"
      >
        <IssueImage
          src={issue.evidence?.image}
          alt={title}
          className="h-20 w-24 shrink-0 rounded-xl"
        />

        <div className="min-w-0 flex-1">
          <h3 className="text-base leading-snug font-bold">{title}</h3>

          <p className="text-ink-soft mt-1 flex items-center gap-1 text-sm">
            <MapPin className="text-brand-700 h-4 w-4 shrink-0" aria-hidden="true" />
            <span className="truncate">{tr(issue.location)}</span>
          </p>

          <div className="mt-2">
            <StatusBadge status={issue.status} />
          </div>
        </div>

        <ChevronRight className="h-6 w-6 shrink-0 text-zinc-300" aria-hidden="true" />
      </Link>
    </li>
  )
}
