import { Image as ImageIcon, Instagram, Youtube } from 'lucide-react'
import { useLanguage } from '../i18n/useLanguage.js'
import { XIcon } from './icons.jsx'

/**
 * Proof, kept deliberately secondary to the email button.
 *
 * Each tile is built from the issue's `evidence` object. A field that is
 * null simply does not appear — no empty boxes, no dead links.
 */
export function EvidenceLinks({ evidence }) {
  const { t } = useLanguage()
  if (!evidence) return null

  const tiles = [
    {
      key: 'image',
      href: evidence.image,
      label: t('evidencePhoto'),
      Icon: ImageIcon,
      className: 'bg-brand-100 text-brand-700',
    },
    {
      key: 'youtube',
      href: evidence.youtube,
      label: t('evidenceYoutube'),
      Icon: Youtube,
      className: 'bg-red-50 text-red-600',
    },
    {
      key: 'instagram',
      href: evidence.instagram,
      label: t('evidenceInstagram'),
      Icon: Instagram,
      className: 'bg-fuchsia-50 text-fuchsia-600',
    },
    {
      key: 'twitter',
      href: evidence.twitter,
      label: t('evidenceTwitter'),
      Icon: XIcon,
      className: 'bg-zinc-100 text-zinc-900',
    },
  ].filter((tile) => Boolean(tile.href))

  if (tiles.length === 0) return null

  return (
    <section>
      <h2 className="mb-3 text-base font-bold">{t('evidenceTitle')}</h2>

      <ul className="grid grid-cols-4 gap-2 sm:gap-3">
        {tiles.map(({ key, href, label, Icon, className }) => (
          <li key={key}>
            <a
              href={href}
              target="_blank"
              rel="noreferrer noopener"
              className="card flex h-full flex-col items-center gap-2 p-3 text-center transition hover:shadow-md active:scale-[0.97]"
            >
              <span
                className={`flex h-11 w-11 items-center justify-center rounded-xl ${className}`}
              >
                <Icon className="h-6 w-6" aria-hidden="true" />
              </span>
              <span className="text-ink-soft text-xs leading-tight font-semibold">{label}</span>
            </a>
          </li>
        ))}
      </ul>
    </section>
  )
}
