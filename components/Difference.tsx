export default function Difference() {
  return (
    <section className="section section--alt" id="about">
      <div className="wrap" style={{display:'grid',gridTemplateColumns:'1fr 1fr',gap:'40px',alignItems:'center'}}>
        
        <div>
          <span className="eyebrow">Why NWP Plumbing</span>
          <h2 style={{marginBottom:'20px'}}>The one thing most Sydney plumbers will not do</h2>
          
          <div style={{display:'flex',flexDirection:'column',gap:0}}>
            {[
              {
                icon:'$',
                title:'A fixed, itemised quote before a spanner moves',
                desc:'Most Sydney plumbers quote after the job. We do it first. You see every line item in writing and approve it. If we hit something unexpected mid-job, we stop and discuss. We never add costs without your sign-off.'
              },
              {
                icon:'✓',
                title:'Licensed, insured and Google-verified',
                desc:'We are fully licensed and insured, and we are building our Google reviews from day one so you can check our track record as it grows. Every job is backed by a workmanship guarantee. If something is not right, we come back and fix it.'
              },
              {
                icon:'🕐',
                title:'Same-day, 24/7 for emergencies',
                desc:'Based in Sydney and on the road every day. Same-day bookings for most jobs, and around-the-clock availability when a burst pipe or gas leak cannot wait until morning.'
              },
            ].map((point, i) => (
              <div key={i} style={{display:'flex',gap:'16px',padding:'18px 0',borderBottom:i<2?'1px solid #e5e5e5':'none'}}>
                <div style={{width:'44px',height:'44px',borderRadius:'10px',background:'#fdf2f2',border:'1px solid #f5c0c0',display:'flex',alignItems:'center',justifyContent:'center',flexShrink:0,fontSize:'1.1rem'}}>
                  {point.icon}
                </div>
                <div>
                  <h3 style={{marginBottom:'5px'}}>{point.title}</h3>
                  <p style={{fontSize:'0.9rem',color:'#444'}}>{point.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div style={{background:'#1c1c1c',borderRadius:'14px',padding:'36px'}}>
          <h3 style={{color:'#fff',fontSize:'1.5rem',fontWeight:700,marginBottom:'16px',lineHeight:1.25}}>
            Worried about a high plumber bill?
          </h3>
          <p style={{color:'rgba(255,255,255,0.6)',fontSize:'0.95rem',marginBottom:'28px'}}>
            You are not alone. It is one of the top searches in Sydney right now. The answer is simple: call us, get a fixed written quote, and only go ahead when you are happy with the number. No pressure, no hidden extras.
          </p>
          <a href="tel:+61477160911" style={{fontSize:'1.9rem',fontWeight:700,color:'#fff',textDecoration:'none',display:'block',letterSpacing:'-0.02em',marginBottom:'20px'}}>
            0477 160 911
          </a>
          <a href="tel:+61477160911" className="btn btn--red" style={{width:'100%',justifyContent:'center'}}>
            📞 Call for a free quote now
          </a>
          <p style={{fontSize:'0.8rem',color:'rgba(255,255,255,0.4)',marginTop:'14px'}}>
            Or fill in the form below and Nathan calls you back, usually within a couple of hours.
          </p>
        </div>

      </div>
    </section>
  )
}