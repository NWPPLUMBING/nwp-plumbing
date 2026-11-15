import type { Metadata } from 'next'
import ServicePage from '@/components/ServicePage'
import { SERVICES } from '@/lib/services'

const s = SERVICES['toilet-replacement']

export const metadata: Metadata = { title: s.title, description: s.description, alternates: { canonical: 'https://nwpplumbing.com/toilet-replacement' } }

export default function Page() {
  return <ServicePage s={s} />
}
