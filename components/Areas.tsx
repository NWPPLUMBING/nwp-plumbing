const suburbs = [
  'Manly','Balgowlah','Frenchs Forest','Cremorne','Stanmore','Enmore',
  'Strathfield','Liverpool','Bankstown','Milperra','Fairfield','Eastern Creek',
  'Northern Beaches','Inner West','North Shore','Eastern Suburbs','Sydney CBD',
  'Hills District','Sutherland Shire','Western Sydney','Parramatta','Blacktown',
]

export default function Areas() {
  return (
    <section className="section section--alt">
      <div className="wrap" style={{display:'grid',gridTemplateColumns:'1fr 1fr',gap:'48px',alignItems:'start'}}>
        
        <div>
          <span className="eyebrow">Where we work</span>
          <h2>Licensed plumber near you, across all of Greater Sydney</h2>
          <p style={{marginTop:'10px',maxWidth:'500px'}}>
            Our team services all of Greater Sydney, from the city to the outer suburbs. We are servicing locally in the Northern Beaches area and across the Inner West, South West, Western Sydney and everything in between. Not sure if we cover your suburb? Just give us a call.
          </p>
          <div style={{display:'flex',flexWrap:'wrap',gap:'7px',marginTop:'16px'}}>
            {suburbs.map((suburb, i) => (
              <span key={i} style={{background:'#fff',border:'1.5px solid #e5e5e5',borderRadius:'100px',padding:'5px 14px',fontSize:'0.82rem',fontWeight:600,color:'#444'}}>
                {suburb}
              </span>
            ))}
          </div>
        </div>

        <div style={{background:'#1c1c1c',borderRadius:'14px',padding:'28px'}}>
          <h3 style={{color:'#fff',marginBottom:'6px'}}>Get in touch fast</h3>
          <p style={{color:'rgba(255,255,255,0.55)',fontSize:'0.9rem',marginBottom:'24px'}}>
            Fastest way to get a fixed quote and lock in a time. Call or message Nathan directly.
          </p>
          {[
            {icon:'📞',label:'Call or SMS',val:'0477 160 911',href:'tel:+61477160911'},
            {icon:'✉️',label:'Email',val:'nwpplumbing@outlook.com',href:'mailto:nwpplumbing@outlook.com'},
            {icon:'🕐',label:'Hours',val:'Mon-Sun, 24/7',href:null},
          ].map((row, i) => (
            <div key={i} style={{display:'flex',gap:'12px',alignItems:'center',padding:'14px 0',borderBottom:i<2?'1px solid rgba(255,255,255,0.08)':'none'}}>
              <div style={{width:'38px',height:'38px',borderRadius:'8px',background:'rgba(164,21,26,0.25)',display:'flex',alignItems:'center',justifyContent:'center',flexShrink:0,fontSize:'1rem'}}>
                {row.icon}
              </div>
              <div>
                <div style={{fontSize:'0.72rem',textTransform:'uppercase',letterSpacing:'0.07em',fontWeight:700,color:'rgba(255,255,255,0.4)',marginBottom:'2px'}}>{row.label}</div>
                {row.href ? (
                  <a href={row.href} style={{fontSize:'0.95rem',fontWeight:600,color:'#fff',textDecoration:'none'}}>{row.val}</a>
                ) : (
                  <span style={{fontSize:'0.95rem',fontWeight:600,color:'#fff'}}>{row.val}</span>
                )}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}