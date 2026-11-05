import QuoteStrip from '@/components/QuoteStrip'
import { Suburb } from '@/lib/suburbs'

const tick = (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#a4151a" strokeWidth="2.5" style={{flexShrink:0}}><polyline points="20 6 9 17 4 12"/></svg>
)

const SERVICES = [
  ['Emergency plumber, 24/7','/emergency-plumber'],
  ['Blocked drains','/blocked-drains'],
  ['Hot water','/hot-water'],
  ['Burst pipes and leaks','/burst-pipes-leaks'],
  ['Gas fitting','/gas-fitting'],
  ['Toilet replacement','/toilet-replacement'],
  ['Bathroom renovations','/bathroom-renovations'],
  ['Whole-home water filtration','/water-filtration'],
]

export default function SuburbPage({ s }: { s: Suburb }) {
  return (
    <main>
      <style>{`
        .sub-hero { display:grid; grid-template-columns:1fr 460px; gap:40px; align-items:start; }
        .sub-cols { display:grid; grid-template-columns:1fr 1fr; gap:48px; align-items:start; }
        .sub-reviews { display:grid; grid-template-columns:repeat(3,1fr); gap:16px; }
        .sub-svc { display:grid; grid-template-columns:1fr 1fr; gap:10px; }
        @media (max-width: 900px) {
          .sub-hero, .sub-cols, .sub-reviews { grid-template-columns:1fr; gap:20px; }
          .sub-hero-pad { padding:24px 0 32px !important; }
        }
      `}</style>

      <section className="sub-hero-pad" style={{background:'#fff',padding:'44px 0 52px',borderBottom:'1px solid #e5e5e5'}}>
        <div className="wrap sub-hero">
          <div>
            <div style={{display:'inline-flex',alignItems:'center',gap:'7px',background:'#fdf2f2',border:'1px solid #f5c0c0',borderRadius:'100px',padding:'5px 14px',fontSize:'0.78rem',fontWeight:600,color:'#a4151a',letterSpacing:'0.04em',textTransform:'uppercase',marginBottom:'16px'}}>
              <span style={{width:'7px',height:'7px',background:'#a4151a',borderRadius:'50%'}}></span>
              Local plumber, {s.name}
            </div>
            <h1 style={{marginBottom:'14px'}}>
              Plumber in {s.name}.<br /><span style={{color:'#a4151a'}}>Fixed price before we start.</span>
            </h1>
            <div style={{display:'flex',alignItems:'center',gap:'8px',marginBottom:'14px',fontSize:'0.9rem',fontWeight:600,color:'#1c1c1c'}}>
              <span style={{color:'#f5a623',letterSpacing:'1px'}}>&#9733;&#9733;&#9733;&#9733;&#9733;</span>
              5-star rated on Google
            </div>
            <p style={{fontSize:'1.02rem',lineHeight:1.65,marginBottom:'20px',maxWidth:'560px'}}>
              Licensed and insured plumbing in {s.name} and surrounds. Same-day service, 24/7 for emergencies, and a fixed itemised quote before any work starts.
            </p>
            <a href="tel:+61477160911" className="btn btn--red" style={{fontSize:'1.05rem',padding:'15px 26px'}}>
              📞 Call now: 0477 160 911
            </a>
            <div style={{display:'flex',flexWrap:'wrap',gap:'10px 20px',marginTop:'22px'}}>
              {['Fixed itemised quote first','$0 call-out on standard jobs*','Licensed and fully insured','Lifetime workmanship guarantee'].map((t,i)=>(
                <div key={i} style={{display:'flex',alignItems:'center',gap:'7px',fontSize:'0.84rem',fontWeight:600,color:'#444'}}>{tick}{t}</div>
              ))}
            </div>
            <p style={{fontSize:'0.72rem',color:'#888',marginTop:'10px'}}>*Standard jobs when work goes ahead. <a href="/terms" style={{color:'#888'}}>T&amp;Cs apply</a>.</p>
          </div>
          <div id="quote"><QuoteStrip /></div>
        </div>
      </section>

      <section className="section">
        <div className="wrap sub-cols">
          <div>
            <span className="eyebrow">{s.council}</span>
            <h2 style={{marginBottom:'14px'}}>Plumbing in {s.name}</h2>
            {s.local.map((p,i)=>(<p key={i} style={{lineHeight:1.7,marginBottom:'12px'}}>{p}</p>))}
            <h3 style={{marginTop:'18px',marginBottom:'10px'}}>Nearby suburbs we cover</h3>
            <div style={{display:'flex',flexWrap:'wrap',gap:'7px'}}>
              {s.nearby.map((n,i)=>(
                <span key={i} style={{background:'#fff',border:'1.5px solid #e5e5e5',borderRadius:'100px',padding:'5px 14px',fontSize:'0.82rem',fontWeight:600,color:'#444'}}>{n}</span>
              ))}
            </div>
            <div style={{fontSize:'1.2rem',fontWeight:800,fontStyle:'italic',color:'#a4151a',marginTop:'12px'}}>and everything in between</div>
          </div>
          <div>
            <span className="eyebrow">Services in {s.name}</span>
            <h2 style={{marginBottom:'14px'}}>What we do</h2>
            <div className="sub-svc">
              {SERVICES.map(([label,href])=>(
                <a key={href} href={href} style={{display:'flex',alignItems:'center',gap:'8px',border:'1.5px solid #e5e5e5',borderRadius:'10px',padding:'14px',textDecoration:'none',color:'#1c1c1c',fontWeight:600,fontSize:'0.9rem'}}>
                  {tick}{label}
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section section--alt">
        <div className="wrap">
          <span className="eyebrow">5-star rated on Google</span>
          <h2 style={{marginBottom:'20px'}}>What our customers say</h2>
          <div className="sub-reviews">
            {s.reviews.map((r,i)=>(
              <div key={i} style={{border:'1.5px solid #e5e5e5',borderRadius:'10px',padding:'22px',background:'#fff'}}>
                <div style={{color:'#f5a623',marginBottom:'8px'}}>&#9733;&#9733;&#9733;&#9733;&#9733;</div>
                <p style={{fontSize:'0.92rem',lineHeight:1.65,marginBottom:'12px'}}>&ldquo;{r.text}&rdquo;</p>
                <div style={{fontSize:'0.85rem',fontWeight:700,color:'#1c1c1c'}}>{r.name} <span style={{fontWeight:500,color:'#888'}}>&middot; Google review</span></div>
              </div>
            ))}
          </div>
          <div style={{background:'#1c1c1c',borderRadius:'14px',padding:'32px',display:'flex',justifyContent:'space-between',alignItems:'center',flexWrap:'wrap',gap:'20px',marginTop:'32px'}}>
            <div>
              <h2 style={{color:'#fff',fontSize:'1.4rem',marginBottom:'6px'}}>Need a plumber in {s.name}?</h2>
              <p style={{color:'rgba(255,255,255,0.6)'}}>Call Nathan directly for the fastest response.</p>
            </div>
            <a href="tel:+61477160911" className="btn btn--red" style={{fontSize:'1rem',padding:'15px 28px'}}>📞 0477 160 911</a>
          </div>
        </div>
      </section>
    </main>
  )
}
