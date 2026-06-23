import type { Metadata } from 'next'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import SideContacts from '@/components/SideContacts'
import StickyCall from '@/components/StickyCall'

export const metadata: Metadata = {
  title: 'Licensed Plumber Greater Sydney | Fixed Upfront Pricing | NWP Plumbing',
  description: 'NWP Plumbing, licensed plumber near you across Greater Sydney. Blocked drains, hot water repair, burst pipes, gas fitting. Fixed itemised quote before we start. Same-day and 24/7 emergency. Call Nathan on 0477 160 911.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet" />
      </head>
      <body>
        <Header />
        {children}
        <Footer />
        <SideContacts />
        <StickyCall />
      </body>
    </html>
  )
}