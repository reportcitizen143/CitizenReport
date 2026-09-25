import { Link, Navigate, useParams } from 'react-router-dom'
import { ArrowLeft, CalendarDays, CheckCircle2, MapPin } from 'lucide-react'
import { useLanguage } from '../i18n/useLanguage.js'
import { formatDate, getAuthorityById, getIssueById } from '../utils/issueHelpers.js'
import { IssueImage } from '../components/IssueImage.jsx'
import { StatusBadge } from '../components/StatusBadge.jsx'
import { SendComplaint } from '../components/SendComplaint.jsx'
import { EvidenceLinks } from '../components/EvidenceLinks.jsx'
import { AuthorityCard } from '../components/AuthorityCard.jsx'
import { WhatsAppIcon } from '../components/icons.jsx'

export function IssueDetails() {
  const { issueId } = useParams()
  const { lang, t, tr } = useLanguage()

  const issue = getIssueById(issueId)
  if (!issue) return <Navigate to="/not-found" replace />

  const authority = getAuthorityById(issue.authorityId)
  const title = tr(issue.title)
  const resolution = issue.status === 'resolved' ? issue.resolution : null

  const shareText = `${title} — ${tr(issue.location)}\n${window.location.href}`
  const shareUrl = `https://wa.me/?text=${encodeURIComponent(shareText)}`

  return (
    <article className="mx-auto max-w-3xl px-4 py-4 pb-10">
      <Link
        to="/issues"
        className="text-brand-700 mb-3 inline-flex items-center gap-1.5 text-sm font-bold"
      >
        <ArrowLeft className="h-5 w-5" aria-hidden="true" />
        {t('back')}
      </Link>

      {/* ---------- The photo, with the status right on top of it ---------- */}
      <div className="relative">
        <IssueImage
          src={issue.evidence?.image}
          alt={title}
          className="aspect-[16/10] w-full rounded-2xl"
        />
        <span className="absolute bottom-3 left-3">
          <StatusBadge status={issue.status} size="lg" />
        </span>
      </div>

      {/* ---------- What and where ---------- */}
      <header className="mt-4">
        <h1 className="text-2xl leading-tight font-extrabold sm:text-3xl">{title}</h1>

        <p className="text-ink-soft mt-2 flex items-center gap-1.5 text-base">
          <MapPin className="text-brand-700 h-5 w-5 shrink-0" aria-hidden="true" />
          {tr(issue.location)}
        </p>

        <p className="text-ink-soft mt-1 flex items-center gap-1.5 text-sm">
          <CalendarDays className="h-4 w-4 shrink-0" aria-hidden="true" />
          {t('reportedOn')}: {formatDate(issue.reportedDate, lang)}
        </p>
      </header>

      {/* ---------- The problem, in plain words ---------- */}
      <div className="bg-brand-50 ring-brand-100 mt-4 flex gap-3 rounded-2xl p-4 ring-1">
        <CheckCircle2 className="text-brand-600 mt-0.5 h-5 w-5 shrink-0" aria-hidden="true" />
        <p className="text-base leading-relaxed">{tr(issue.description)}</p>
      </div>

      {/* ---------- The main action ---------- */}
      <div className="mt-5">
        <SendComplaint issue={issue} />
      </div>

      {/* ---------- Everything below is supporting material ---------- */}
      <div className="mt-8 space-y-6">
        <EvidenceLinks evidence={issue.evidence} />

        <AuthorityCard authority={authority} />

        {resolution && (
          <section className="bg-brand-50 ring-brand-200 rounded-2xl p-4 ring-1">
            <h2 className="text-brand-800 flex items-center gap-2 text-base font-bold">
              <CheckCircle2 className="h-5 w-5" aria-hidden="true" />
              {t('resolutionTitle')}
            </h2>

            {resolution.description && (
              <p className="mt-2 text-base leading-relaxed">{tr(resolution.description)}</p>
            )}

            {resolution.resolvedDate && (
              <p className="text-ink-soft mt-1 text-sm">
                {t('resolvedOn')}: {formatDate(resolution.resolvedDate, lang)}
              </p>
            )}

            {/* Before / after, side by side — the whole accountability story */}
            <div className="mt-4 grid grid-cols-2 gap-3">
              <figure>
                <IssueImage
                  src={issue.evidence?.image}
                  alt={`${t('beforeLabel')} — ${title}`}
                  className="aspect-4/3 w-full rounded-xl"
                />
                <figcaption className="text-ink-soft mt-1 text-center text-sm font-bold">
                  {t('beforeLabel')}
                </figcaption>
              </figure>

              <figure>
                <IssueImage
                  src={resolution.image}
                  alt={`${t('afterLabel')} — ${title}`}
                  className="aspect-4/3 w-full rounded-xl"
                />
                <figcaption className="text-brand-700 mt-1 text-center text-sm font-bold">
                  {t('afterLabel')}
                </figcaption>
              </figure>
            </div>
          </section>
        )}

        <a
          href={shareUrl}
          target="_blank"
          rel="noreferrer noopener"
          className="btn-secondary border-[#25D366] text-[#128C4A] hover:bg-[#25D366]/10"
        >
          <WhatsAppIcon className="h-5 w-5" />
          {t('shareIssue')}
        </a>
      </div>
    </article>
  )
}
