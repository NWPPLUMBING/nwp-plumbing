export default function Footer() {
  return (
    <footer style={{background:'#1c1c1c',color:'rgba(255,255,255,0.6)'}}>
      <div className="wrap">
        <div style={{display:'grid',gridTemplateColumns:'2fr 1fr 1fr 1fr',gap:'40px',padding:'40px 0 36px',borderBottom:'1px solid rgba(255,255,255,0.08)'}}>
          
          <div>
            <a href="/" style={{display:'flex',alignItems:'center',gap:'10px',textDecoration:'none',marginBottom:'14px'}}>
              <div style={{width:'44px',height:'44px',borderRadius:'50%',background:'#a4151a',border:'2px solid #444',display:'flex',alignItems:'center',justifyContent:'center',flexShrink:0}}>
                <span style={{color:'white',fontWeight:900,fontSize:'0.7rem',letterSpacing:'0.5px'}}>NWP</span>
              </div>
              <strong style={{color:'#fff',fontSize:'1rem'}}>NWP Plumbing</strong>
            </a>
            <p style={{fontSize:'0.875rem',lineHeight:1.7,maxWidth:'300px'}}>
              Licensed plumber across Greater Sydney. Fixed, itemised quotes before any work starts. Price Beat Guarantee. Same-day bookings. 24/7 emergency plumbing. Whole home filtration systems installed.
            </p>
            <a href="tel:+61477160911" style={{display:'block',marginTop:'16px',color:'#fff',fontWeight:700,textDecoration:'none',fontSize:'1.05rem'}}>
              0477 160 911
            </a>
          </div>

          <div>
            <h4 style={{fontSize:'0.75rem',fontWeight:700,textTransform:'uppercase',letterSpacing:'0.1em',color:'#fff',marginBottom:'14px'}}>Services</h4>
            {['Emergency Plumber','Blocked Drains','Hot Water Systems','Burst Pipes and Leaks','Gas Fitting','Taps and Toilets','Whole Home Filtration'].map((item, i) => (
              <a key={i} href="#services" style={{display:'block',color:'rgba(255,255,255,0.55)',textDecoration:'none',fontSize:'0.875rem',marginBottom:'8px'}}>
                {item}
              </a>
            ))}
          </div>

          <div>
            <h4 style={{fontSize:'0.75rem',fontWeight:700,textTransform:'uppercase',letterSpacing:'0.1em',color:'#fff',marginBottom:'14px'}}>Company</h4>
            {[['About','#about'],['Pricing','#pricing'],['Contact','#contact']].map(([label, href], i) => (
              <a key={i} href={href} style={{display:'block',color:'rgba(255,255,255,0.55)',textDecoration:'none',fontSize:'0.875rem',marginBottom:'8px'}}>
                {label}
              </a>
            ))}
          </div>

          <div>
            <h4 style={{fontSize:'0.75rem',fontWeight:700,textTransform:'uppercase',letterSpacing:'0.1em',color:'#fff',marginBottom:'14px'}}>Service Area</h4>
            {['Northern Beaches','Inner West','North Shore','Eastern Suburbs','Sydney CBD','Western Sydney','Parramatta','Blacktown'].map((item, i) => (
              <a key={i} href="#contact" style={{display:'block',color:'rgba(255,255,255,0.55)',textDecoration:'none',fontSize:'0.875rem',marginBottom:'8px'}}>
                {item}
              </a>
            ))}
          </div>

        </div>

        <div style={{display:'flex',justifyContent:'space-between',alignItems:'center',padding:'16px 0',fontSize:'0.8rem',flexWrap:'wrap',gap:'10px'}}>
          <span>2026 NWP Plumbing. All rights reserved. Licensed and insured, Greater Sydney</span>
          <a href="tel:+61477160911" style={{color:'#fff',fontWeight:700,textDecoration:'none'}}>
            Call Nathan on 0477 160 911
          </a>
        </div>
      </div>
    </footer>
  )
}