import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Terms & Conditions | NWP Plumbing',
  description: 'Call-out and assessment fees, quotes, Price Beat Guarantee and lifetime workmanship guarantee terms for NWP Plumbing.',
}

const sections: { h: string; p: string[] }[] = [
  {
    h: 'Quotes',
    p: [
      'Every job gets a fixed, itemised written quote before any work starts. The quote you approve is the price you pay.',
      'If we find something unexpected once work is underway, we stop and talk it through with you before doing anything extra. No extras are added without your approval.',
    ],
  },
  {
    h: 'Call-out and assessment fees',
    p: [
      '$0 call-out on standard jobs: if you approve our quote and the work goes ahead, there is no call-out fee.',
      'Assessment fee: if we attend, assess the job and you decide not to go ahead, an assessment fee of $35 (weekdays) or $85 (weekends) applies.',
      'Emergency call-outs: a $185 emergency call-out fee applies to all emergency call-outs, whether or not further work goes ahead.',
      'We confirm any applicable fee with you on the phone before we book you in.',
    ],
  },
  {
    h: 'Price Beat Guarantee',
    p: [
      'Show us a written quote from another licensed and insured plumber for the same scope of work, within our service area, before any work commences, and we will beat it.',
      'The quote must be like-for-like: same job, same materials, same outcome. Excludes promotional or loss-leader pricing.',
    ],
  },
  {
    h: 'Lifetime workmanship guarantee',
    p: [
      'Our installation workmanship is guaranteed for life. If something we installed is not right because of our workmanship, we come back and fix it at no charge.',
      'Parts and materials are covered by the manufacturer’s warranty, not by our lifetime workmanship guarantee.',
    ],
  },
  {
    h: 'Service area',
    p: [
      'We are based in Liverpool and cover suburbs across Sydney. Not sure if we cover your suburb? Call us on 0477 160 911.',
    ],
  },
  {
    h: 'Your rights',
    p: [
      'Nothing in these terms limits your rights under the Australian Consumer Law.',
    ],
  },
]

export default function Terms() {
  return (
    <main>
      <section style={{background:'#fff',padding:'56px 0'}}>
        <div className="wrap" style={{maxWidth:'760px'}}>
          <h1 style={{fontSize:'clamp(1.8rem,4vw,2.6rem)',fontWeight:700,color:'#1c1c1c',marginBottom:'12px',letterSpacing:'-0.02em'}}>
            Terms &amp; Conditions
          </h1>
          <p style={{fontSize:'0.95rem',color:'#555',marginBottom:'36px'}}>
            NWP Plumbing (NW Pro Plumbing Pty Ltd). Licence 499323C.
          </p>
          {sections.map((s, i) => (
            <div key={i} style={{marginBottom:'28px'}}>
              <h2 style={{fontSize:'1.15rem',fontWeight:700,color:'#1c1c1c',marginBottom:'10px'}}>{s.h}</h2>
              {s.p.map((t, j) => (
                <p key={j} style={{fontSize:'0.95rem',color:'#444',lineHeight:1.7,marginBottom:'8px'}}>{t}</p>
              ))}
            </div>
          ))}
          <a href="tel:+61477160911" className="btn btn--red" style={{marginTop:'12px'}}>📞 Call Nathan on 0477 160 911</a>
        </div>
      </section>
    </main>
  )
}
