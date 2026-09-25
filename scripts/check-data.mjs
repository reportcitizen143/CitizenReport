/**
 * Data check — run it after editing any file in src/data/.
 *
 *   npm run check:data
 *
 * It catches the mistakes that are easy to make by hand: a duplicated id,
 * a status that does not exist, an authority that was never defined, a
 * missing translation, a date typed the wrong way round. It prints plain
 * sentences, not stack traces.
 */
import { issues } from '../src/data/issues.js'
import { authorities } from '../src/data/authorities.js'
import { statuses } from '../src/data/statuses.js'

const LANGUAGES = ['te', 'en']
const DATE_PATTERN = /^\d{4}-\d{2}-\d{2}$/
const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

const problems = []
const warnings = []

const fail = (where, message) => problems.push(`${where}: ${message}`)
const warn = (where, message) => warnings.push(`${where}: ${message}`)

/** A translatable field must exist and carry text for every language. */
function checkText(where, field, value, { required = true } = {}) {
  if (value === null || value === undefined || value === '') {
    if (required) fail(where, `"${field}" is missing.`)
    return
  }
  if (typeof value === 'string') return
  if (typeof value !== 'object') {
    fail(where, `"${field}" must be text, or { te: '...', en: '...' }.`)
    return
  }
  for (const lang of LANGUAGES) {
    if (!value[lang]) warn(where, `"${field}" has no ${lang.toUpperCase()} translation.`)
  }
}

// ---------- authorities ----------
const authorityIds = new Set()

for (const [index, authority] of authorities.entries()) {
  const where = `authorities.js → ${authority.id ?? `entry #${index + 1}`}`

  if (!authority.id) fail(where, 'is missing an "id".')
  else if (authorityIds.has(authority.id)) fail(where, `id "${authority.id}" is used twice.`)
  else authorityIds.add(authority.id)

  checkText(where, 'name', authority.name)

  if (!authority.email) fail(where, 'is missing an "email".')
  else if (!EMAIL_PATTERN.test(authority.email))
    fail(where, `"${authority.email}" does not look like an email address.`)
  else if (authority.email.includes('example.gov.in'))
    warn(where, 'still uses the placeholder address example.gov.in.')

  for (const cc of authority.cc ?? []) {
    if (!EMAIL_PATTERN.test(cc)) fail(where, `cc address "${cc}" does not look like an email.`)
  }
}

// ---------- issues ----------
const issueIds = new Set()
const usedAuthorities = new Set()

for (const [index, issue] of issues.entries()) {
  const where = `issues.js → ${issue.id ?? `entry #${index + 1}`}`

  if (!issue.id) fail(where, 'is missing an "id".')
  else if (issueIds.has(issue.id)) fail(where, `id "${issue.id}" is used twice.`)
  else issueIds.add(issue.id)

  checkText(where, 'title', issue.title)
  checkText(where, 'location', issue.location)
  checkText(where, 'description', issue.description)

  if (!statuses[issue.status]) {
    fail(where, `status "${issue.status}" is not one of: ${Object.keys(statuses).join(', ')}.`)
  }

  if (!DATE_PATTERN.test(issue.reportedDate ?? '')) {
    fail(where, `reportedDate "${issue.reportedDate}" must be written as YYYY-MM-DD.`)
  }

  if (!issue.authorityId) fail(where, 'is missing an "authorityId".')
  else if (!authorityIds.has(issue.authorityId))
    fail(where, `authorityId "${issue.authorityId}" does not exist in authorities.js.`)
  else usedAuthorities.add(issue.authorityId)

  if (issue.evidence?.image && !issue.evidence.image.startsWith('/'))
    fail(where, `evidence.image should start with "/" (e.g. /images/issues/${issue.id}.jpg).`)

  if (issue.status === 'resolved' && !issue.resolution)
    warn(where, 'is resolved but has no "resolution" block — the after-photo will be missing.')

  if (issue.resolution) {
    checkText(where, 'resolution.description', issue.resolution.description, { required: false })
    if (issue.resolution.resolvedDate && !DATE_PATTERN.test(issue.resolution.resolvedDate))
      fail(where, `resolution.resolvedDate "${issue.resolution.resolvedDate}" must be YYYY-MM-DD.`)
    if (issue.resolution.resolvedDate && issue.resolution.resolvedDate < issue.reportedDate)
      fail(where, 'was resolved before it was reported — check the dates.')
  }
}

for (const id of authorityIds) {
  if (!usedAuthorities.has(id)) warn(`authorities.js → ${id}`, 'is not used by any issue.')
}

// ---------- report ----------
console.log(`\nChecked ${issues.length} issues and ${authorities.length} authorities.\n`)

if (warnings.length) {
  console.log('Worth a look:')
  for (const warning of warnings) console.log(`  • ${warning}`)
  console.log('')
}

if (problems.length) {
  console.log('Must be fixed:')
  for (const problem of problems) console.log(`  ✗ ${problem}`)
  console.log('')
  process.exit(1)
}

console.log('All good. Nothing is broken.\n')
