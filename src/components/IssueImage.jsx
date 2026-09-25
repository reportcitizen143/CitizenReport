import { useState } from 'react'
import { ImageOff } from 'lucide-react'

/**
 * A photo that never breaks the layout.
 *
 * Photos are added over time, and a missing or slow file should not leave
 * a torn page behind. When there is no `src`, or the file fails to load,
 * this falls back to a calm placeholder instead of a broken-image icon.
 */
export function IssueImage({ src, alt = '', className = '', imgClassName = '' }) {
  const [failed, setFailed] = useState(false)
  const showPlaceholder = !src || failed

  if (showPlaceholder) {
    return (
      <div
        className={`from-brand-100 to-brand-200 flex items-center justify-center bg-linear-to-br ${className}`}
        role="img"
        aria-label={alt}
      >
        <ImageOff className="text-brand-700/40 h-8 w-8" aria-hidden="true" />
      </div>
    )
  }

  return (
    <div className={`bg-brand-100 overflow-hidden ${className}`}>
      <img
        src={src}
        alt={alt}
        loading="lazy"
        decoding="async"
        onError={() => setFailed(true)}
        className={`h-full w-full object-cover ${imgClassName}`}
      />
    </div>
  )
}
