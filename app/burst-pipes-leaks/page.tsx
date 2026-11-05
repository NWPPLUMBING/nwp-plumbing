import type { Metadata } from 'next'
import ServicePage from '@/components/ServicePage'
import { SERVICES } from '@/lib/services'

const s = SERVICES['burst-pipes-leaks']

export const metadata: Metadata = { title: s.title, description: s.description }

export default function Page() {
  return <ServicePage s={s} />
}
