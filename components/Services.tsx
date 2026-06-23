const services = [
  {
    title: '24/7 Emergency Plumber',
    desc: 'Burst pipe, major leak or overflow that cannot wait? We are on call around the clock. You will get a clear price before work starts, even at 2am. No inflated after-hours rates.',
    cta: 'Get help now',
  },
  {
    title: 'Blocked Drains and Pipe Relining',
    desc: 'Slow or fully blocked drain? We use CCTV camera inspection to find the real cause, then clear it with high-pressure water jetting. Where it makes sense, no-dig pipe relining fixes the problem without tearing up your yard or floors.',
    cta: 'Book a drain clear',
  },
  {
    title: 'Hot Water Repair and Replacement',
    desc: 'No hot water? We repair or replace fast. Electric, gas, solar and heat-pump hot water systems. Ask us about government rebates on heat-pump upgrades that can cover a large chunk of the install cost.',
    cta: 'Fix my hot water',
  },
  {
    title: 'Burst Pipes and Leaks',
    desc: 'A slow leak costs you hundreds in water bills before you notice it. A burst pipe can wreck a home in hours. We find and fix leaks fast, with a written quote before any pipe gets touched.',
    cta: 'Stop the leak',
  },
  {
    title: 'Gas Plumber Sydney',
    desc: 'Licensed gas fitting for cooktops, heaters, BBQs and new gas line connections. Gas leaks are treated as an emergency. Compliance certificates issued on every job so you are covered, fully and legally.',
    cta: 'Book a gas plumber',
  },
  {
    title: 'Leaking Tap and Toilet Repair',
    desc: 'A dripping tap wastes up to 20,000 litres a year. A running toilet even more. We fix leaking taps, replace washers and O-rings, fix running cisterns and upgrade tired tapware. Quoted, fixed and done in a single visit.',
    cta: 'Book a repair',
  },
]

export default function Services() {
  return (
    <section className="section" id="services">
      <div className="wrap">
        <span className="eyebrow">What we do</span>
        <h2>Plumbing services across Greater Sydney</h2>
        <p style={{marginTop:'10px',maxWidth:'580px'}}>
          From a blocked drain at 2am to a heat-pump hot water installation. Every job gets a fixed, itemised quote before we start. No surprises on the invoice, guaranteed.
        </p>

        <div style={{display:'grid',gridTemplateColumns:'repeat(3,1fr)',gap:'14px',marginTop:'32px'}}>
          {services.map((s, i) => (
            <a key={i} href="#contact" style={{border:'1.5px solid #e5e5e5',borderRadius:'10px',padding:'24px 22px',textDecoration:'none',background:'#fff',display:'flex',flexDirection:'column',transition:'border-color 0.18s'}}>
              <div style={{fontSize:'0.75rem',fontWeight:600,color:'#a4151a',letterSpacing:'0.04em',textTransform:'uppercase',marginBottom:'8px'}}>
                Fixed quote, $0 call-out when work proceeds
              </div>
              <div style={{fontSize:'1.05rem',fontWeight:700,color:'#1c1c1c',marginBottom:'10px'}}>{s.title}</div>
              <p style={{fontSize:'0.875rem',color:'#444',lineHeight:1.6,flex:1}}>{s.desc}</p>
              <div style={{marginTop:'20px',fontSize:'0.82rem',fontWeight:600,color:'#a4151a',display:'flex',alignItems:'center',gap:'5px'}}>
                {s.cta} →
              </div>
            </a>
          ))}
        </div>

        <div style={{marginTop:'40px',textAlign:'center'}}>
          <p style={{fontSize:'1rem',color:'#555',maxWidth:'520px',margin:'0 auto 16px'}}>
            Not sure which service you need, or want to talk through the job first? Nathan is happy to have a chat. No pressure, no obligation.
          </p>
          <a href="#contact" className="btn btn--red">Get in touch, it is free</a>
        </div>
      </div>
    </section>
  )
}