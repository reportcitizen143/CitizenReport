import { issues } from '../data/issues.js'
import { authorities } from '../data/authorities.js'
import { statuses, fallbackStatus } from '../data/statuses.js'

/**
 * Read-only helpers over the data files.
 *
 * Components ask questions here ("give me this issue", "which status is
 * this?") instead of reaching into the data arrays themselves. That keeps
 * one place to change when the data moves to an API in V2.
 */

/** Newest issue first. This is the order every list in the app uses. */
export function getAllIssues() {
  return [...issues].sort((a, b) => String(b.reportedDate).localeCompare(String(a.reportedDate)))
}

export function getIssueById(id) {
  return issues.find((issue) => issue.id === id) ?? null
}

export function getAuthorityById(id) {
  return authorities.find((authority) => authority.id === id) ?? null
}

/** Always returns a usable status object, even for an unknown status key. */
export function getStatus(statusKey) {
  return statuses[statusKey] ?? fallbackStatus
}

/** The filter chips on the issues page, in life-cycle order, counts included. */
export function getStatusFilters() {
  const all = getAllIssues()
  return Object.entries(statuses)
    .sort(([, a], [, b]) => a.order - b.order)
    .map(([key, status]) => ({
      key,
      ...status,
      count: all.filter((issue) => issue.status === key).length,
    }))
}

export function filterIssuesByStatus(list, statusKey) {
  if (!statusKey || statusKey === 'all') return list
  return list.filter((issue) => issue.status === statusKey)
}

/** True when there is at least one photo or post worth showing. */
export function hasEvidence(issue) {
  const evidence = issue?.evidence
  if (!evidence) return false
  return Boolean(evidence.image || evidence.youtube || evidence.instagram || evidence.twitter)
}

/** '2026-09-25' → '25 సెప్టెంబర్ 2026' / '25 September 2026'. */
export function formatDate(isoDate, lang = 'te') {
  if (!isoDate) return ''
  const date = new Date(`${isoDate}T00:00:00`)
  if (Number.isNaN(date.getTime())) return String(isoDate)

  try {
    return new Intl.DateTimeFormat(lang === 'te' ? 'te-IN' : 'en-IN', {
      day: 'numeric',
      month: 'long',
      year: 'numeric',
    }).format(date)
  } catch {
    const [year, month, day] = String(isoDate).split('-')
    return `${day}-${month}-${year}`
  }
}
