import fs from 'fs'
import path from 'path'
import QuoteStrip from '@/components/QuoteStrip'
import JobCarousel from '@/components/JobCarousel'
export default function Hero() {
  const heroPath = path.join(process.cwd(), 'content/hero/main.json')
  const settingsPath = path.join(process.cwd(), 'content/settings/main.json')

  const hero = JSON.parse(fs.readFileSync(heroPath, 'utf-8'))
  const settings = JSON.parse(fs.readFileSync(settingsPath, 'utf-8'))
  return (
    <>
      <style>{`
        .hero-main {
          display: grid;
          grid-template-columns: 1fr 460px;
          gap: 40px;
          align-items: stretch;
        }
        .hero-left { display: flex; flex-direction: column; }
        .hero-photo {
          flex: 1;
          min-height: 280px;
          margin-top: 24px;
          border-radius: 14px;
          overflow: hidden;
          border: 1px solid #e5e5e5;
        }
        .hero-photo img { width: 100%; height: 100%; object-fit: cover; display: block; }
        @media (max-width: 900px) {
          .hero-main { grid-template-columns: 1fr; gap: 28px; }
          .hero-photo { min-height: 260px; }
        }
      `}</style>
      <section style={{background:'#fff',padding:'48px 0 56px',borderBottom:'1px solid #e5e5e5'}}>
        <div className="wrap">
          <div className="hero-main">
            <div className="hero-left">
              <div style={{display:'inline-flex',alignSelf:'flex-start',alignItems:'center',gap:'7px',background:'#fdf2f2',border:'1px solid #f5c0c0',borderRadius:'100px',padding:'5px 14px',fontSize:'0.78rem',fontWeight:600,color:'#a4151a',letterSpacing:'0.04em',textTransform:'uppercase',marginBottom:'22px'}}>
                <span style={{width:'7px',height:'7px',background:'#a4151a',borderRadius:'50%',flexShrink:0}}></span>
                Licensed plumber, Greater Sydney
              </div>
              <h1 style={{marginBottom:'18px'}}>
                {hero.heading1}<br />
                {hero.heading2}<br />
                <span style={{color:'#a4151a'}}>{hero.heading3}</span>
              </h1>
              <p style={{fontSize:'1.05rem',color:'#444',lineHeight:1.7,marginBottom:'24px',maxWidth:'560px'}}>
                {hero.subtext}
              </p>
              <div style={{display:'flex',flexWrap:'wrap',gap:'12px'}}>
                <a href={`tel:+61${settings.phone.replace(/\s/g,'').replace(/^0/,'')}`} className="btn btn--red">
                  📞 Call Nathan on {settings.phone}
                </a>
                <a href="#contact" className="btn btn--outline">Get a free quote</a>
              </div>
              <div className="hero-photo">
                <img src="/images/Ute.png" alt="NWP Plumbing ute" />
              </div>
            </div>

            <div>
              <QuoteStrip />
              <div style={{marginTop:'20px'}}>
                <JobCarousel />
              </div>
            </div>
          </div>

          <div style={{display:'flex',flexWrap:'wrap',gap:'20px',alignItems:'center',marginTop:'32px',paddingTop:'24px',borderTop:'1px solid #e5e5e5'}}>
            {['Fixed itemised quote first','$0 call-out fee on quoted jobs','Licensed and fully insured','Same-day, 24/7 emergencies'].map((item,i)=>(
              <div key={i} style={{display:'flex',alignItems:'center',gap:'7px',fontSize:'0.82rem',fontWeight:600,color:'#444'}}>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#a4151a" strokeWidth="2.5"><polyline points="20 6 9 17 4 12"/></svg>
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}