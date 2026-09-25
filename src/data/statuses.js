/**
 * ISSUE STATUSES
 * --------------
 * The full life of an issue. An issue's `status` field must be one of
 * these keys. Change an issue's status and every screen updates by itself —
 * the badge, the colour, the filter it appears under.
 *
 * To add a new stage (say 'acknowledged'), add an entry here and give it
 * an `order`. Nothing else in the app has to change.
 */
export const statuses = {
  pending: {
    order: 1,
    dot: '🟡',
    label: { te: 'పెండింగ్', en: 'Pending' },
    help: { te: 'ఇంకా పరిష్కారం కాలేదు', en: 'Not fixed yet' },
    // Tailwind classes live here so the colours stay next to their meaning.
    badgeClass: 'bg-yellow-300 text-yellow-950',
  },

  'in-progress': {
    order: 2,
    dot: '🔵',
    label: { te: 'పరిష్కారంలో', en: 'In progress' },
    help: { te: 'చర్యలు జరుగుతున్నాయి', en: 'Action is being taken' },
    badgeClass: 'bg-sky-300 text-sky-950',
  },

  resolved: {
    order: 3,
    dot: '🟢',
    label: { te: 'పరిష్కరించబడింది', en: 'Resolved' },
    help: { te: 'సమస్య పరిష్కరించబడింది', en: 'The problem is fixed' },
    badgeClass: 'bg-brand-200 text-brand-800',
  },
}

/** Fallback used if an issue has a status that is not listed above. */
export const fallbackStatus = {
  order: 99,
  dot: '⚪',
  label: { te: 'తెలియదు', en: 'Unknown' },
  help: { te: '', en: '' },
  badgeClass: 'bg-zinc-200 text-zinc-800',
}
