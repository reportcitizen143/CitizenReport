import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

/**
 * Start every page at the top.
 *
 * Without this, tapping an issue half-way down the list opens the detail
 * page already scrolled — which reads as a broken page to most people.
 */
export function ScrollToTop() {
  const { pathname } = useLocation()

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' })
  }, [pathname])

  return null
}
