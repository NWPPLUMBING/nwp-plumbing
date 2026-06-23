'use client'
import { useState } from 'react'

const faqs = [
  {
    q: 'How much does a plumber cost in Sydney?',
    a: 'Every job is different, which is exactly why we give you a fixed, itemised written quote before any work starts. Call or message Nathan and he will talk through the job with you and give you a clear price. No guessing, no surprises.',
  },
  {
    q: 'What does the $0 call-out fee actually mean?',
    a: 'We charge $0 call-out fee when work is commenced on the day. We come out, assess the job and give you a written quote at no charge. If you approve the quote and we start work, there is no separate call-out fee on top. If you decide not to proceed, a small assessment fee may apply. We will always tell you upfront.',
  },
  {
    q: 'Why did I get such a high plumber bill?',
    a: 'Most bill shock happens because the quote came after the job, or did not include everything. With NWP, the quote you approve is the invoice you receive. Every line item listed, no extras added mid-job without your say-so. If we find something unexpected, we stop and discuss the cost before going further.',
  },
  {
    q: 'How does the Price Beat Guarantee work?',
    a: 'Show us a written quote from another licensed and insured Sydney plumber for the same scope of work, before any work commences, and we will beat it. Must be like-for-like: same job, same materials, same outcome. T&Cs apply, excludes promotional or loss-leader pricing.',
  },
  {
    q: 'Are you a licensed plumber near me?',
    a: 'Yes. NWP Plumbing is fully licensed and insured across Greater Sydney. We are locally based, on the road daily, and cover the whole metro including the Northern Beaches, Inner West, North Shore, Eastern Suburbs, Western Sydney and everywhere in between. Every job comes with a workmanship guarantee.',
  },
  {
    q: 'Do you do hot water system replacement in Sydney?',
    a: 'Yes. Electric, gas, solar and heat-pump hot water systems. Hot water demand peaks in winter as old systems fail in the cold, so do not wait until yours gives out. Ask us about government rebates on heat-pump upgrades, which can significantly reduce the install cost.',
  },
  {
    q: 'Can you do no-dig pipe relining for blocked drains?',
    a: 'Yes. Where it is the right solution, no-dig pipe relining lets us repair or reline a damaged pipe from the inside with no excavation, no tearing up your yard or floors. We use CCTV camera inspection first to confirm whether relining is the best fix for your situation.',
  },
  {
    q: 'Are you available 24/7 for emergency plumbing in Sydney?',
    a: 'Yes. Burst pipes, gas leaks and major drain blockages do not wait for business hours, and neither do we. Call Nathan on 0477 160 911 any time. You will get a clear price before we start, even in an emergency.',
  },
  {
    q: 'What is a whole home water filtration system and how much does it cost?',
    a: 'A whole-home filtration system installs at the mains entry point of your home, filtering every tap, shower, appliance and pipe throughout the property. It removes chlorine, sediment, rust and heavy metals, unlike bench-top filters that only cover one outlet. NWP Plumbing installs them from $1,099, fully licensed, with a fixed written quote before any work starts.',
  },
]

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(0)

  return (
    <section className="section">
      <div className="wrap">
        <span className="eyebrow">Questions people actually search for</span>
        <h2>Common questions about plumber costs and service</h2>

        <div style={{marginTop:'32px',borderTop:'1.5px solid #e5e5e5'}}>
          {faqs.map((faq, i) => (
            <div key={i} style={{borderBottom:'1.5px solid #e5e5e5'}}>
              <button
                onClick={() => setOpen(open === i ? null : i)}
                style={{width:'100%',background:'none',border:'none',cursor:'pointer',display:'flex',justifyContent:'space-between',alignItems:'center',padding:'16px 0',textAlign:'left',fontFamily:'inherit',fontSize:'1rem',fontWeight:600,color:'#1c1c1c',gap:'16px'}}
              >
                {faq.q}
                <span style={{flexShrink:0,fontSize:'1.2rem',color:'#a4151a',transition:'transform 0.2s',transform:open===i?'rotate(180deg)':'none'}}>
                  ▾
                </span>
              </button>
              {open === i && (
                <div style={{fontSize:'0.925rem',color:'#444',lineHeight:1.75,paddingBottom:'20px'}}>
                  {faq.a}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}