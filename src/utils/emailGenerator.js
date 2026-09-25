import { emailTemplates } from '../data/emailTemplates.js'
import { siteConfig } from '../config/siteConfig.js'
import { localize } from './localize.js'
import { formatDate, getAuthorityById } from './issueHelpers.js'

/**
 * Turns an issue into a ready-to-send complaint email.
 *
 * This is the heart of the product, so it does exactly one thing and
 * returns plain data. Nothing here touches the DOM — that makes it easy
 * to preview the email on screen, to copy it, and to swap `mailto:` for
 * a real backend in V2 without changing any component.
 */

/**
 * Some email clients (and Windows in particular) truncate very long
 * mailto: links. Past this length we still build the link, but the UI
 * offers "copy the email" as the reliable path.
 */
export const MAILTO_SAFE_LENGTH = 1800

/**
 * A permanent link back to this issue's page, or '' when opened from a
 * plain file:// folder where no shareable URL exists.
 *
 * The '#' is always included because the app uses HashRouter — see App.jsx.
 */
function buildIssueLink(issueId) {
  if (typeof window === 'undefined') return ''
  const { origin, pathname } = window.location
  if (!origin || origin === 'null' || origin.startsWith('file:')) return ''
  return `${origin}${pathname.replace(/\/+$/, '')}/#/issue/${issueId}`
}

/**
 * @returns {{ to: string, cc: string[], subject: string, body: string,
 *             mailtoUrl: string, isLong: boolean, authority: object|null }}
 */
export function buildEmail(issue, lang = 'te') {
  const template = emailTemplates[lang] ?? emailTemplates.te
  const authority = getAuthorityById(issue.authorityId)

  const context = {
    title: localize(issue.title, lang),
    location: localize(issue.location, lang),
    description: localize(issue.description, lang),
    issueId: issue.id,
    reportedDate: formatDate(issue.reportedDate, lang),
    authority: localize(authority?.name, lang),
    signature: localize(siteConfig.emailSignature, lang),
    siteName: siteConfig.name,
    link: buildIssueLink(issue.id),
  }

  const to = authority?.email ?? ''
  const cc = authority?.cc?.filter(Boolean) ?? []
  const subject = template.subject(context)
  const body = template.body(context)

  return {
    to,
    cc,
    subject,
    body,
    authority,
    mailtoUrl: buildMailtoUrl({ to, cc, subject, body }),
    isLong: encodeURIComponent(body).length > MAILTO_SAFE_LENGTH,
  }
}

/** Builds the `mailto:` link. Exported separately so it can be unit-tested. */
export function buildMailtoUrl({ to, cc = [], subject = '', body = '' }) {
  const params = new URLSearchParams()
  if (cc.length) params.set('cc', cc.join(','))
  params.set('subject', subject)
  params.set('body', body)

  // URLSearchParams encodes spaces as '+', which mail clients show literally.
  const query = params.toString().replace(/\+/g, '%20')
  return `mailto:${encodeURIComponent(to).replace(/%40/g, '@')}?${query}`
}

/** Opens the visitor's own email app with everything filled in. Sends nothing. */
export function openEmailClient(mailtoUrl) {
  window.location.href = mailtoUrl
}

/** Plain-text version of the email, for the Copy button. */
export function formatEmailAsText({ to, cc, subject, body }, labels) {
  const lines = [`${labels.to}: ${to}`]
  if (cc?.length) lines.push(`CC: ${cc.join(', ')}`)
  lines.push(`${labels.subject}: ${subject}`, '', body)
  return lines.join('\n')
}
