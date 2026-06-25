import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Plumber Strathfield | Licensed & Insured | NWP Plumbing',
  description: 'NWP Plumbing — your local licensed plumber in Strathfield. Fixed itemised quote before any work starts. Blocked drains, hot water, burst pipes, gas fitting. Call Nathan on 0477 160 911.',
}

export default function PlumberStrathfield() {
  return (
    <main>
      <section style={{background:'#fff',padding:'56px 0',borderBottom:'1px solid #e5e5e5'}}>
        <div className="wrap">
          <div style={{display:'inline-flex',alignItems:'center',gap:'7px',background:'#fdf2f2',border:'1px solid #f5c0c0',borderRadius:'100px',padding:'5px 14px',fontSize:'0.78rem',fontWeight:600,color:'#a4151a',letterSpacing:'0.04em',textTransform:'uppercase',marginBottom:'22px'}}>
            <span style={{width:'7px',height:'7px',background:'#a4151a',borderRadius:'50%',flexShrink:0}}></span>
            Serving Strathfield and surrounds
          </div>
          <h1 style={{fontSize:'clamp(1.8rem,4vw,3rem)',fontWeight:700,color:'#1c1c1c',marginBottom:'20px',letterSpacing:'-0.02em'}}>
            Licensed Plumber in Strathfield
          </h1>
          <p style={{fontSize:'1.05rem',color:'#444',lineHeight:1.75,maxWidth:'640px',marginBottom:'32px'}}>
            NWP Plumbing provides fully licensed and insured plumbing services across Strathfield and the Inner West. Whether you have a blocked drain, no hot water, a burst pipe or a gas issue, our team arrives fast and gives you a fixed, itemised quote before any work starts. The price we give you is the price you pay.
          </p>
          <div style={{display:'flex',flexWrap:'wrap',gap:'12px',marginBottom:'48px'}}>
            <a href="tel:+61477160911" className="btn btn--red">📞 Call Nathan on 0477 160 911</a>
            <a href="/#contact" className="btn btn--outline">Get a free quote</a>
          </div>
          <div style={{display:'grid',gridTemplateColumns:'repeat(3,1fr)',gap:'16px',marginBottom:'48px'}}>
            {[
              {title:'Blocked Drains Strathfield',desc:'CCTV camera inspection and high-pressure jetting to clear blocked drains fast across Strathfield and the Inner West.'},
              {title:'Hot Water Repair Strathfield',desc:'No hot water? We repair and replace electric, gas, solar and heat-pump systems. Same-day service available.'},
              {title:'Emergency Plumber Strathfield',desc:'Burst pipe or major leak in Strathfield? We are on call 24/7. Fixed quote before we start, even after hours.'},
              {title:'Gas Fitting Strathfield',desc:'Licensed gas fitting for cooktops, heaters and BBQs across Strathfield. Compliance certificates on every job.'},
              {title:'Leaking Taps Strathfield',desc:'Dripping taps and running toilets fixed fast. Quoted upfront, done in a single visit.'},
              {title:'Pipe Relining Strathfield',desc:'No-dig pipe relining available across Strathfield — fix damaged pipes without excavation.'},
            ].map((s,i)=>(
              <div key={i} style={{border:'1.5px solid #e5e5e5',borderRadius:'10px',padding:'24px',background:'#fff'}}>
                <h3 style={{fontSize:'1rem',fontWeight:700,color:'#1c1c1c',marginBottom:'8px'}}>{s.title}</h3>
                <p style={{fontSize:'0.875rem',color:'#444',lineHeight:1.6}}>{s.desc}</p>
              </div>
            ))}
          </div>
          <div style={{background:'#1c1c1c',borderRadius:'14px',padding:'40px',display:'flex',justifyContent:'space-between',alignItems:'center',flexWrap:'wrap',gap:'24px'}}>
            <div>
              <h2 style={{color:'#fff',fontSize:'1.5rem',fontWeight:700,marginBottom:'8px'}}>Need a plumber in Strathfield?</h2>
              <p style={{color:'rgba(255,255,255,0.6)',fontSize:'0.95rem'}}>Call Nathan directly for the fastest response. Fixed quote, $0 call-out when work proceeds.</p>
            </div>
            <a href="tel:+61477160911" className="btn btn--red" style={{fontSize:'1rem',padding:'15px 28px'}}>📞 0477 160 911</a>
          </div>
        </div>
      </section>
    </main>
  )
}