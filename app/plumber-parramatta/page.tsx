import type { Metadata } from 'next'
import SuburbPage from '@/components/SuburbPage'
import { SUBURBS } from '@/lib/suburbs'

const s = SUBURBS['parramatta']

export const metadata: Metadata = {
  title: `Plumber ${s.name} | Fixed Price, 24/7 | NWP Plumbing`,
  description: `Licensed plumber in ${s.name}. Fixed itemised quote before we start, same-day service, 24/7 emergencies. Blocked drains, hot water, gas, leaks. Call 0477 160 911.`,
}

export default function Page() {
  return <SuburbPage s={s} />
}
