import { useSearchParams } from 'react-router-dom'
import { Inbox } from 'lucide-react'
import { useLanguage } from '../i18n/useLanguage.js'
import { filterIssuesByStatus, getAllIssues, getStatusFilters } from '../utils/issueHelpers.js'
import { FilterChips } from '../components/FilterChips.jsx'
import { IssueCard } from '../components/IssueCard.jsx'

export function Issues() {
  const { t } = useLanguage()

  // The filter lives in the URL (?status=pending) so the back button works
  // and a filtered list can be shared as a link.
  const [searchParams, setSearchParams] = useSearchParams()
  const activeFilter = searchParams.get('status') ?? 'all'

  const filters = getStatusFilters()
  const visibleIssues = filterIssuesByStatus(getAllIssues(), activeFilter)

  function handleFilterChange(key) {
    setSearchParams(key === 'all' ? {} : { status: key }, { replace: true })
  }

  return (
    <div className="mx-auto max-w-3xl px-4 py-5">
      <div className="mb-4 flex items-baseline justify-between gap-3">
        <h1 className="text-2xl font-extrabold sm:text-3xl">{t('issuesTitle')}</h1>
        <span className="text-ink-soft shrink-0 text-sm font-semibold">
          {visibleIssues.length} {t('issuesCount')}
        </span>
      </div>

      <FilterChips filters={filters} active={activeFilter} onChange={handleFilterChange} />

      {visibleIssues.length === 0 ? (
        <div className="card mt-5 flex flex-col items-center gap-3 p-10 text-center">
          <Inbox className="h-10 w-10 text-zinc-300" aria-hidden="true" />
          <p className="text-ink-soft font-semibold">{t('issuesEmpty')}</p>
        </div>
      ) : (
        <ul className="mt-4 space-y-3">
          {visibleIssues.map((issue) => (
            <IssueCard key={issue.id} issue={issue} />
          ))}
        </ul>
      )}
    </div>
  )
}
