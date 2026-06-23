export default function Pricing() {
  return (
    <section className="section section--alt" id="pricing">
      <div className="wrap">
        <span className="eyebrow">Transparent pricing</span>
        <h2>How much does a plumber cost in Sydney?</h2>
        <p style={{marginTop:'10px',maxWidth:'620px'}}>
          It is the most-searched plumbing question in Sydney right now. I have seen customers get hit with bills that doubled after the job because nothing was agreed upfront. That is not how I work. I do not publish set prices because every job is genuinely different, but what I do guarantee is this: you will always get a full, written, itemised quote before any work starts. The number I quote is the number you pay. No exceptions, no add-ons, no surprises.
        </p>

        <div style={{display:'grid',gridTemplateColumns:'repeat(3,1fr)',gap:'16px',marginTop:'32px'}}>
          
          <div style={{border:'1.5px solid #e5e5e5',borderRadius:'10px',padding:'28px 24px',background:'#fff',position:'relative'}}>
            <div style={{fontSize:'0.72rem',fontWeight:700,letterSpacing:'0.1em',textTransform:'uppercase',color:'#444',marginBottom:'6px'}}>Our promise</div>
            <div style={{fontSize:'1.15rem',fontWeight:700,color:'#1c1c1c',marginBottom:'20px',paddingBottom:'16px',borderBottom:'1px solid #e5e5e5'}}>Fixed written quote, every time</div>
            <div style={{fontSize:'1.4rem',fontWeight:700,color:'#a4151a',lineHeight:1.3,marginBottom:'8px'}}>Every job, every time</div>
            <div style={{fontSize:'0.8rem',color:'#444',marginBottom:'16px'}}>No work starts until you approve the price in writing</div>
            <ul style={{listStyle:'none',display:'flex',flexDirection:'column',gap:'9px'}}>
              {['Full on-site assessment included','Every cost itemised clearly','No obligation, your choice','Price locked in before we start'].map((item,i) => (
                <li key={i} style={{fontSize:'0.875rem',color:'#444',display:'flex',gap:'9px',alignItems:'flex-start'}}>
                  <span style={{color:'#a4151a',fontWeight:700,flexShrink:0}}>✓</span>{item}
                </li>
              ))}
            </ul>
          </div>

          <div style={{border:'1.5px solid #a4151a',borderRadius:'10px',padding:'28px 24px',background:'#fff',position:'relative',boxShadow:'0 0 0 1px #a4151a'}}>
            <div style={{position:'absolute',top:'-12px',left:'50%',transform:'translateX(-50%)',background:'#a4151a',color:'#fff',fontSize:'0.7rem',fontWeight:700,letterSpacing:'0.08em',textTransform:'uppercase',padding:'3px 14px',borderRadius:'100px',whiteSpace:'nowrap'}}>Key benefit</div>
            <div style={{fontSize:'0.72rem',fontWeight:700,letterSpacing:'0.1em',textTransform:'uppercase',color:'#444',marginBottom:'6px'}}>Call-out fee</div>
            <div style={{fontSize:'1.15rem',fontWeight:700,color:'#1c1c1c',marginBottom:'20px',paddingBottom:'16px',borderBottom:'1px solid #e5e5e5'}}>$0 when work is commenced</div>
            <div style={{fontSize:'2.4rem',fontWeight:700,color:'#a4151a',letterSpacing:'-0.03em',lineHeight:1}}>
              <sup style={{fontSize:'1.1rem',verticalAlign:'top',marginTop:'4px'}}>$</sup>0
            </div>
            <div style={{fontSize:'0.8rem',color:'#444',margin:'4px 0 20px'}}>call-out fee when work proceeds on the day</div>
            <ul style={{listStyle:'none',display:'flex',flexDirection:'column',gap:'9px',marginBottom:'14px'}}>
              {['We come to you at no charge','Assess the job and quote in writing','You approve and we get started','No call-out fee charged when work is commenced'].map((item,i) => (
                <li key={i} style={{fontSize:'0.875rem',color:'#444',display:'flex',gap:'9px',alignItems:'flex-start'}}>
                  <span style={{color:'#a4151a',fontWeight:700,flexShrink:0}}>✓</span>{item}
                </li>
              ))}
            </ul>
            <p style={{fontSize:'0.75rem',color:'#555',lineHeight:1.5,marginBottom:'16px'}}>Small assessment fee may apply if you choose not to proceed. We will always tell you upfront.</p>
            <a href="#contact" className="btn btn--red" style={{width:'100%',justifyContent:'center'}}>Get a free quote</a>
          </div>

          <div style={{border:'1.5px solid #e5e5e5',borderRadius:'10px',padding:'28px 24px',background:'#fff',position:'relative'}}>
            <div style={{fontSize:'0.72rem',fontWeight:700,letterSpacing:'0.1em',textTransform:'uppercase',color:'#444',marginBottom:'6px'}}>Our guarantee</div>
            <div style={{fontSize:'1.15rem',fontWeight:700,color:'#1c1c1c',marginBottom:'20px',paddingBottom:'16px',borderBottom:'1px solid #e5e5e5'}}>Price Beat Guarantee*</div>
            <div style={{fontSize:'1.8rem',fontWeight:700,color:'#a4151a',letterSpacing:'-0.02em',lineHeight:1.2,marginBottom:'8px'}}>We will beat any written quote</div>
            <div style={{fontSize:'0.8rem',color:'#444',marginBottom:'16px'}}>from a licensed Sydney plumber, like-for-like</div>
            <ul style={{listStyle:'none',display:'flex',flexDirection:'column',gap:'9px'}}>
              {['Show us a written quote','Same scope of work','Licensed and insured competitor','We beat it. Guaranteed.'].map((item,i) => (
                <li key={i} style={{fontSize:'0.875rem',color:'#444',display:'flex',gap:'9px',alignItems:'flex-start'}}>
                  <span style={{color:'#a4151a',fontWeight:700,flexShrink:0}}>✓</span>{item}
                </li>
              ))}
            </ul>
            <p style={{fontSize:'0.75rem',color:'#555',marginTop:'14px',lineHeight:1.5}}>*T&Cs apply. Must be presented prior to work commencing.</p>
          </div>

        </div>
        <p style={{textAlign:'center',fontSize:'0.82rem',color:'#444',marginTop:'20px'}}>
          All jobs confirmed with a fixed written quote before work starts. Ask about government rebates on heat-pump hot water upgrades.{' '}
          <a href="#contact" style={{color:'#a4151a'}}>Get a quote</a>
        </p>
      </div>
    </section>
  )
}