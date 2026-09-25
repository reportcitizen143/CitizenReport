import { useMemo, useState } from 'react'
import { Check, ChevronDown, Copy, Mail } from 'lucide-react'
import { useLanguage } from '../i18n/useLanguage.js'
import { buildEmail, formatEmailAsText, openEmailClient } from '../utils/emailGenerator.js'
import { copyToClipboard } from '../utils/clipboard.js'

/**
 * The one action this whole product exists for.
 *
 * It prepares the email and opens the visitor's own mail app. It never
 * sends anything — the visitor reads it and decides. The preview below
 * the button exists so nobody has to trust a button blindly.
 */
export function SendComplaint({ issue }) {
  const { lang, t } = useLanguage()
  const [showPreview, setShowPreview] = useState(false)
  const [copied, setCopied] = useState(false)

  const email = useMemo(() => buildEmail(issue, lang), [issue, lang])

  async function handleCopy() {
    const text = formatEmailAsText(email, { to: t('emailTo'), subject: t('emailSubject') })
    const ok = await copyToClipboard(text)
    if (!ok) return
    setCopied(true)
    window.setTimeout(() => setCopied(false), 2000)
  }

  const copyButton = (
    <button type="button" onClick={handleCopy} className="btn-secondary">
      {copied ? (
        <Check className="h-5 w-5" aria-hidden="true" />
      ) : (
        <Copy className="h-5 w-5" aria-hidden="true" />
      )}
      {copied ? t('copied') : t('copyEmail')}
    </button>
  )

  return (
    <section className="space-y-3">
      <button
        type="button"
        onClick={() => openEmailClient(email.mailtoUrl)}
        className="btn-primary"
      >
        <Mail className="h-6 w-6 shrink-0" aria-hidden="true" />
        {t('sendEmailCta')}
      </button>

      <p className="text-ink-soft text-center text-sm">{t('sendEmailHelp')}</p>

      {/* Long messages (Telugu especially) can be truncated by some mail
          apps, so the copy-and-paste route is offered up front, not hidden. */}
      {email.isLong && (
        <div className="space-y-2 rounded-2xl bg-amber-50 p-3 ring-1 ring-amber-200">
          <p className="text-center text-sm text-amber-900">{t('emailLongHint')}</p>
          {copyButton}
        </div>
      )}

      <div className="text-center">
        <button
          type="button"
          onClick={() => setShowPreview((open) => !open)}
          aria-expanded={showPreview}
          className="text-brand-700 inline-flex items-center gap-1 text-sm font-bold underline underline-offset-4"
        >
          {showPreview ? t('hidePreview') : t('previewEmail')}
          <ChevronDown
            className={`h-4 w-4 transition-transform ${showPreview ? 'rotate-180' : ''}`}
            aria-hidden="true"
          />
        </button>
      </div>

      {showPreview && (
        <div className="card overflow-hidden">
          <dl className="divide-y divide-black/5 text-sm">
            <div className="flex gap-3 px-4 py-2.5">
              <dt className="text-ink-soft w-20 shrink-0 font-semibold">{t('emailTo')}</dt>
              <dd className="min-w-0 break-all">{email.to}</dd>
            </div>
            <div className="flex gap-3 px-4 py-2.5">
              <dt className="text-ink-soft w-20 shrink-0 font-semibold">{t('emailSubject')}</dt>
              <dd className="min-w-0">{email.subject}</dd>
            </div>
          </dl>

          <pre className="max-h-72 overflow-auto border-t border-black/5 bg-zinc-50 px-4 py-3 font-sans text-sm leading-relaxed whitespace-pre-wrap">
            {email.body}
          </pre>

          <div className="border-t border-black/5 p-3">{copyButton}</div>
        </div>
      )}
    </section>
  )
}
