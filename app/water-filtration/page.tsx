import type { Metadata } from 'next'
import ServicePage from '@/components/ServicePage'
import { SERVICES } from '@/lib/services'

const s = SERVICES['water-filtration']

export const metadata: Metadata = { title: s.title, description: s.description, alternates: { canonical: 'https://nwpplumbing.com/water-filtration' } }

export default function Page() {
  return <ServicePage s={s} />
}
