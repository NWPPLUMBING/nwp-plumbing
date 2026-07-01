export default function Trust() {
  return (
    <>
      <style>{`
        .trust-grid { display:grid; grid-template-columns:repeat(3,1fr); gap:16px; margin-top:32px; }
        @media(max-width:768px){ .trust-grid { grid-template-columns:1fr; } }
      `}</style>
      <section className="section">
        <div className="wrap">
          <span className="eyebrow">Building trust from day one</span>
          <h2>Every review earned the old-fashioned way</h2>
          <p style={{marginTop:'10px',maxWidth:'580px'}}>Reviews are how Sydney homeowners choose a plumber. Our team builds ours honestly, one job at a time. We ask every customer for a Google review after every job. No buying, no faking, no chasing stars we have not earned.</p>
        <a href="https://g.page/r/CWsEZUJmBDGWEBM/review" target="_blank" rel="noopener noreferrer" className="btn btn--red" style={{marginTop:'24px',display:'inline-flex'}}>
          Leave us a Google review ★
        </a>
          <div className="trust-grid">
            {[
              {icon:'✓',label:'On every job',title:'Workmanship guarantee',desc:'Every job our team completes is backed by our workmanship guarantee. If something is not right after we leave, we come back and fix it. No charge, no argument.'},
              {icon:'G',label:'Real reviews, growing daily',title:'Honest Google reviews',desc:'We ask every customer for an honest review after every job. Check our Google listing to see how we are tracking and become one of our first reviews by booking today.'},
              {icon:'$',label:'Always',title:'Price we quote is price you pay',desc:'The itemised quote you approve is the invoice you receive. No while-we-were-there add-ons, no surprises when the job is done. That is the whole point.'},
            ].map((card,i)=>(
              <div key={i} style={{border:'1.5px solid #e5e5e5',borderRadius:'10px',padding:'24px 22px',background:'#fff'}}>
                <div style={{width:'40px',height:'40px',borderRadius:'8px',background:'#fdf2f2',border:'1px solid #f5c0c0',display:'flex',alignItems:'center',justifyContent:'center',marginBottom:'16px',fontSize:'1.2rem',fontWeight:800,color:'#a4151a'}}>{card.icon}</div>
                <div style={{fontSize:'0.75rem',fontWeight:700,color:'#444',textTransform:'uppercase',letterSpacing:'0.05em',marginBottom:'4px'}}>{card.label}</div>
                <div style={{fontSize:'1rem',fontWeight:700,color:'#1c1c1c',marginBottom:'6px'}}>{card.title}</div>
                <p style={{fontSize:'0.875rem',color:'#444',lineHeight:1.6}}>{card.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}