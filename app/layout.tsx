import type { Metadata } from 'next'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import SideContacts from '@/components/SideContacts'
import StickyCall from '@/components/StickyCall'
import CallTracking from '@/components/CallTracking'

export const metadata: Metadata = {
  metadataBase: new URL('https://nwpplumbing.com'),
  alternates: { canonical: 'https://nwpplumbing.com/' },
  title: 'Licensed Plumber Greater Sydney | Fixed Upfront Pricing | NWP Plumbing',
  description: 'NWP Plumbing, licensed plumber near you across Greater Sydney. Blocked drains, hot water repair, burst pipes, gas fitting. Fixed itemised quote before we start. Same-day and 24/7 emergency. Call Nathan on 0477 160 911.',
}

const businessJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Plumber',
  name: 'NWP Plumbing',
  legalName: 'NW Pro Plumbing Pty Ltd',
  url: 'https://nwpplumbing.com',
  telephone: '+61477160911',
  address: { '@type': 'PostalAddress', addressLocality: 'Liverpool', addressRegion: 'NSW', postalCode: '2170', addressCountry: 'AU' },
  areaServed: ['Liverpool', 'Fairfield', 'Bankstown', 'Parramatta', 'Blacktown', 'Penrith', 'Strathfield', 'Stanmore', 'Castle Hill', 'Hornsby', 'Frenchs Forest', 'Manly'].map(name => ({ '@type': 'Place', name: `${name} NSW` })),
  openingHoursSpecification: [{ '@type': 'OpeningHoursSpecification', dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'], opens: '00:00', closes: '23:59' }],
  hasCredential: { '@type': 'EducationalOccupationalCredential', credentialCategory: 'license', name: 'NSW plumbing licence 499323C' },
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
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-58677RRKVS"></script>
        <script dangerouslySetInnerHTML={{__html:`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-58677RRKVS');
          gtag('config', 'AW-18340910694');
        `}}/>
        <script dangerouslySetInnerHTML={{__html:`
          !function(f,b,e,v,n,t,s)
          {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
          n.callMethod.apply(n,arguments):n.queue.push(arguments)};
          if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
          n.queue=[];t=b.createElement(e);t.async=!0;
          t.src=v;s=b.getElementsByTagName(e)[0];
          s.parentNode.insertBefore(t,s)}(window, document,'script',
          'https://connect.facebook.net/en_US/fbevents.js');
          fbq('init', '2144868019777764');
          fbq('track', 'PageView');
        `}}/>
      </head>
      <body>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(businessJsonLd) }} />
        <noscript>
          <img height="1" width="1" style={{ display: 'none' }} alt=""
            src="https://www.facebook.com/tr?id=2144868019777764&ev=PageView&noscript=1" />
        </noscript>
        <Header />
        {children}
        <Footer />
        <SideContacts />
        <StickyCall />
        <CallTracking />
      </body>
    </html>
  )
}