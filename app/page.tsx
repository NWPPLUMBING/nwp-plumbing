import Hero from '@/components/Hero'
import TrustStrip from '@/components/TrustStrip'
import Services from '@/components/Services'
import PriceBeat from '@/components/PriceBeat'
import PromoStrip from '@/components/PromoStrip'
import Difference from '@/components/Difference'
import HowItWorks from '@/components/HowItWorks'
import Pricing from '@/components/Pricing'
import Trust from '@/components/Trust'
import Areas from '@/components/Areas'
import Filtration from '@/components/Filtration'
import FAQ from '@/components/FAQ'
import CTABand from '@/components/CTABand'
import Reviews from '@/components/Reviews'
import Contact from '@/components/Contact'

export default function Home() {
  return (
    <main>
      <Hero />
      <TrustStrip />
      <Services />
      <PriceBeat />
      <PromoStrip />
      <Difference />
      <HowItWorks />
      <Pricing />
      <Trust />
      <Reviews />
      <Areas />
      <Filtration />
      <FAQ />
      <CTABand />
      <Contact />
    </main>
  )
}