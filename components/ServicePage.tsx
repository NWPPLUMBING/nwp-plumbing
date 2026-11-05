import QuoteStrip from '@/components/QuoteStrip'
import { Service, AREA_SUBURBS } from '@/lib/services'

const tick = (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#a4151a" strokeWidth="2.5" style={{flexShrink:0}}><polyline points="20 6 9 17 4 12"/></svg>
)

export default function ServicePage({ s }: { s: Service }) {
  const ticks = [
    'Fixed itemised quote first',
    s.showZeroCallout ? '$0 call-out on standard jobs*' : 'On call 24/7',
    'Licensed and fully insured',
    'Lifetime workmanship guarantee',
  ]
  return (
    <main>
      <style>{`
        .svc-hero { display:grid; grid-template-columns:1fr 460px; gap:40px; align-items:start; }
        .svc-cols { display:grid; grid-template-columns:1fr 1fr; gap:48px; align-items:start; }
        .svc-reviews { display:grid; grid-template-columns:repeat(3,1fr); gap:16px; }
        .svc-steps { display:grid; grid-template-columns:repeat(3,1fr); gap:16px; }
        @media (max-width: 900px) {
          .svc-hero, .svc-cols, .svc-reviews, .svc-steps { grid-template-columns:1fr; gap:20px; }
          .svc-hero-pad { padding:24px 0 32px !important; }
        }
      `}</style>

      {/* Hero: headline, rating, call button and quote form above the fold */}
      <section className="svc-hero-pad" style={{background:'#fff',padding:'44px 0 52px',borderBottom:'1px solid #e5e5e5'}}>
        <div className="wrap svc-hero">
          <div>
            <div style={{display:'inline-flex',alignItems:'center',gap:'7px',background:'#fdf2f2',border:'1px solid #f5c0c0',borderRadius:'100px',padding:'5px 14px',fontSize:'0.78rem',fontWeight:600,color:'#a4151a',letterSpacing:'0.04em',textTransform:'uppercase',marginBottom:'16px'}}>
              <span style={{width:'7px',height:'7px',background:'#a4151a',borderRadius:'50%'}}></span>
              {s.badge}
            </div>
            <h1 style={{marginBottom:'14px'}}>
              {s.h1}<br /><span style={{color:'#a4151a'}}>{s.h1Accent}</span>
            </h1>
            <div style={{display:'flex',alignItems:'center',gap:'8px',marginBottom:'14px',fontSize:'0.9rem',fontWeight:600,color:'#1c1c1c'}}>
              <span style={{color:'#f5a623',letterSpacing:'1px'}}>&#9733;&#9733;&#9733;&#9733;&#9733;</span>
              5-star rated on Google
            </div>
            <p style={{fontSize:'1.02rem',lineHeight:1.65,marginBottom:'20px',maxWidth:'560px'}}>{s.intro}</p>
            <a href="tel:+61477160911" className="btn btn--red" style={{fontSize:'1.05rem',padding:'15px 26px'}}>
              📞 Call now: 0477 160 911
            </a>
            <div style={{display:'flex',flexWrap:'wrap',gap:'10px 20px',marginTop:'22px'}}>
              {ticks.map((t,i)=>(
                <div key={i} style={{display:'flex',alignItems:'center',gap:'7px',fontSize:'0.84rem',fontWeight:600,color:'#444'}}>{tick}{t}</div>
              ))}
            </div>
            {s.showZeroCallout && (
              <p style={{fontSize:'0.72rem',color:'#888',marginTop:'10px'}}>*Standard jobs when work goes ahead. <a href="/terms" style={{color:'#888'}}>T&amp;Cs apply</a>.</p>
            )}
          </div>
          <div id="quote">
            <QuoteStrip preselect={s.quoteIssue ? [s.quoteIssue] : []} />
          </div>
        </div>
      </section>

      {/* What we do */}
      <section className="section">
        <div className="wrap svc-cols">
          <div>
            <span className="eyebrow">What we do</span>
            <h2 style={{marginBottom:'16px'}}>{s.whatWeDoHeading}</h2>
            <ul style={{listStyle:'none',display:'flex',flexDirection:'column',gap:'10px',marginBottom:'18px'}}>
              {s.whatWeDo.map((w,i)=>(
                <li key={i} style={{display:'flex',gap:'9px',alignItems:'center',fontSize:'0.95rem',color:'#444'}}>{tick}{w}</li>
              ))}
            </ul>
            <p style={{lineHeight:1.7}}>{s.body}</p>
          </div>
          {s.photo ? (
            <img src={s.photo.src} alt={s.photo.alt} style={{width:'100%',borderRadius:'14px',border:'1px solid #e5e5e5',display:'block'}} />
          ) : (
            <div style={{background:'#1c1c1c',borderRadius:'14px',padding:'32px'}}>
              <h3 style={{color:'#fff',marginBottom:'10px'}}>Talk to Nathan now</h3>
              <p style={{color:'rgba(255,255,255,0.65)',marginBottom:'20px'}}>Tell us what is going on and we will give you a straight answer on what it needs and what it costs.</p>
              <a href="tel:+61477160911" className="btn btn--red">📞 0477 160 911</a>
            </div>
          )}
        </div>
      </section>

      {/* How the fixed quote works */}
      <section className="section section--alt">
        <div className="wrap">
          <span className="eyebrow">No surprises</span>
          <h2 style={{marginBottom:'20px'}}>How our fixed quote works</h2>
          <div className="svc-steps">
            {[
              {n:'1',t:'Call or send the form',d:'Tell us what is happening. We book a time that suits you, same day where you need it.'},
              {n:'2',t:'Fixed itemised quote',d:'We assess the job and give you a written quote with every line item before any work starts.'},
              {n:'3',t:'You approve, we fix it',d:'The price you approve is the price you pay. If we find something unexpected, we stop and talk to you first.'},
            ].map(step=>(
              <div key={step.n} style={{background:'#fff',border:'1.5px solid #e5e5e5',borderRadius:'10px',padding:'22px'}}>
                <div style={{width:'32px',height:'32px',borderRadius:'50%',background:'#a4151a',color:'#fff',fontWeight:700,display:'flex',alignItems:'center',justifyContent:'center',marginBottom:'12px'}}>{step.n}</div>
                <h3 style={{marginBottom:'6px'}}>{step.t}</h3>
                <p style={{fontSize:'0.9rem',lineHeight:1.6}}>{step.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Reviews */}
      <section className="section">
        <div className="wrap">
          <span className="eyebrow">5-star rated on Google</span>
          <h2 style={{marginBottom:'20px'}}>What our customers say</h2>
          <div className="svc-reviews">
            {s.reviews.map((r,i)=>(
              <div key={i} style={{border:'1.5px solid #e5e5e5',borderRadius:'10px',padding:'22px',background:'#fff'}}>
                <div style={{color:'#f5a623',marginBottom:'8px'}}>&#9733;&#9733;&#9733;&#9733;&#9733;</div>
                <p style={{fontSize:'0.92rem',lineHeight:1.65,marginBottom:'12px'}}>&ldquo;{r.text}&rdquo;</p>
                <div style={{fontSize:'0.85rem',fontWeight:700,color:'#1c1c1c'}}>{r.name} <span style={{fontWeight:500,color:'#888'}}>&middot; Google review</span></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Area + final call */}
      <section className="section section--alt">
        <div className="wrap">
          <span className="eyebrow">Where we work</span>
          <h2 style={{marginBottom:'10px'}}>Local to you</h2>
          <p style={{maxWidth:'640px',marginBottom:'16px'}}>Based in Liverpool, our team covers suburbs right across Sydney.</p>
          <div style={{display:'flex',flexWrap:'wrap',gap:'7px'}}>
            {AREA_SUBURBS.map((a,i)=>(
              <span key={i} style={{background:'#fff',border:'1.5px solid #e5e5e5',borderRadius:'100px',padding:'5px 14px',fontSize:'0.82rem',fontWeight:600,color:'#444'}}>{a}</span>
            ))}
          </div>
          <div style={{fontSize:'clamp(1.2rem,2.5vw,1.6rem)',fontWeight:800,fontStyle:'italic',color:'#a4151a',margin:'14px 0 32px'}}>and everything in between</div>
          <div style={{background:'#1c1c1c',borderRadius:'14px',padding:'32px',display:'flex',justifyContent:'space-between',alignItems:'center',flexWrap:'wrap',gap:'20px'}}>
            <div>
              <h2 style={{color:'#fff',fontSize:'1.4rem',marginBottom:'6px'}}>Ready to get it sorted?</h2>
              <p style={{color:'rgba(255,255,255,0.6)'}}>Call Nathan directly for the fastest response.</p>
            </div>
            <a href="tel:+61477160911" className="btn btn--red" style={{fontSize:'1rem',padding:'15px 28px'}}>📞 0477 160 911</a>
          </div>
        </div>
      </section>
    </main>
  )
}
