export default function Hero() {
  return (
    <section style={{background:'#fff',padding:'48px 0 56px',borderBottom:'1px solid #e5e5e5'}}>
      <div className="wrap" style={{display:'grid',gridTemplateColumns:'1fr 500px',gap:'48px',alignItems:'center'}}>
        
        <div>
          <div style={{display:'inline-flex',alignItems:'center',gap:'7px',background:'#fdf2f2',border:'1px solid #f5c0c0',borderRadius:'100px',padding:'5px 14px',fontSize:'0.78rem',fontWeight:600,color:'#a4151a',letterSpacing:'0.04em',textTransform:'uppercase',marginBottom:'22px'}}>
            <span style={{width:'7px',height:'7px',background:'#a4151a',borderRadius:'50%',flexShrink:0}}></span>
            Licensed plumber, Greater Sydney
          </div>

          <h1 style={{marginBottom:'18px'}}>
            Hi, I am Nathan,<br />
            your local Sydney plumber.<br />
            <span style={{color:'#a4151a'}}>You will know the price before I start.</span>
          </h1>

          <p style={{fontSize:'1.05rem',color:'#444',lineHeight:1.7,marginBottom:'28px',maxWidth:'560px'}}>
            Hi, I am Nathan, founder of NWP Plumbing. Our team of fully licensed and insured plumbers are based right here in Greater Sydney. We started NWP Plumbing because we were tired of customers getting blindsided by bills they never saw coming. Every job we take on gets a fixed, itemised quote in writing before we pick up a tool. Blocked drains, hot water, burst pipes, gas fitting and more. Done properly, the first time.
          </p>

          <div style={{display:'flex',flexWrap:'wrap',gap:'12px',marginBottom:'28px'}}>
            <a href="tel:+61477160911" className="btn btn--red">
              📞 Call Nathan on 0477 160 911
            </a>
            <a href="#contact" className="btn btn--outline">Get a free quote</a>
          </div>

          <div style={{display:'flex',flexWrap:'wrap',gap:'20px',alignItems:'center',paddingTop:'28px',borderTop:'1px solid #e5e5e5'}}>
            {['Fixed itemised quote first','$0 call-out fee on quoted jobs','Licensed and fully insured','Same-day, 24/7 emergencies'].map((item, i) => (
              <div key={i} style={{display:'flex',alignItems:'center',gap:'7px',fontSize:'0.82rem',fontWeight:600,color:'#444'}}>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#a4151a" strokeWidth="2.5"><polyline points="20 6 9 17 4 12"/></svg>
                {item}
              </div>
            ))}
          </div>
        </div>

        <div style={{borderRadius:'14px',overflow:'hidden',background:'#f7f7f7',border:'1px solid #e5e5e5',aspectRatio:'4/3',position:'relative',display:'flex',alignItems:'center',justifyContent:'center'}}>
          <img src="/images/Ute.png" alt="NWP Plumbing ute" style={{width:'100%',height:'100%',objectFit:'cover',display:'block'}} />
          <div style={{position:'absolute',bottom:0,left:0,right:0,background:'rgba(255,255,255,0.95)',borderTop:'1px solid #e5e5e5',display:'flex'}}>
            {[['$0','Call-out fee on quoted jobs'],['24/7','Emergency response'],['Fixed','Price agreed before we start']].map(([val,label],i) => (
              <div key={i} style={{flex:1,padding:'14px 16px',textAlign:'center',borderRight:i<2?'1px solid #e5e5e5':'none'}}>
                <div style={{fontSize:'1.3rem',fontWeight:700,color:'#a4151a',letterSpacing:'-0.02em',lineHeight:1}}>{val}</div>
                <div style={{fontSize:'0.72rem',color:'#444',fontWeight:500,marginTop:'3px',lineHeight:1.3}}>{label}</div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  )
}