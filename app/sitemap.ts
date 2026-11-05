import type { MetadataRoute } from 'next'
import { SERVICES } from '@/lib/services'
import { SUBURBS } from '@/lib/suburbs'

const BASE = 'https://nwpplumbing.com'

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date()
  return [
    { url: `${BASE}/`, lastModified: now, changeFrequency: 'weekly', priority: 1 },
    ...Object.keys(SERVICES).map(slug => ({ url: `${BASE}/${slug}`, lastModified: now, changeFrequency: 'monthly' as const, priority: 0.9 })),
    ...Object.keys(SUBURBS).map(slug => ({ url: `${BASE}/plumber-${slug}`, lastModified: now, changeFrequency: 'monthly' as const, priority: 0.7 })),
    { url: `${BASE}/terms`, lastModified: now, changeFrequency: 'yearly', priority: 0.2 },
  ]
}
