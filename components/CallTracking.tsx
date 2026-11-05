'use client'
import { useEffect } from 'react'

// Fires a Google Ads conversion + GA4 event + Meta Contact event
// whenever someone taps any phone (tel:) link on the site.
export default function CallTracking() {
  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      const link = (e.target as HTMLElement)?.closest?.('a[href^="tel:"]')
      if (!link) return
      const w = window as any
      w.gtag?.('event', 'conversion', { send_to: 'AW-18340910694/xSj2CLqZq7IdEOas0KlE' })
      w.gtag?.('event', 'phone_click', { link_url: link.getAttribute('href') })
      w.fbq?.('track', 'Contact')
    }
    document.addEventListener('click', onClick)
    return () => document.removeEventListener('click', onClick)
  }, [])
  return null
}
