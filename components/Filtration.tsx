const features = [
  {
    icon:'🚰',
    title:'Every tap in your home, filtered',
    desc:'Unlike under-sink or bench-top filters that only cover one outlet, a whole-home system treats water at the mains entry point. Every tap, shower, dishwasher and washing machine gets clean water.',
  },
  {
    icon:'🏠',
    title:'Protects your appliances and hot water system',
    desc:'Sediment and mineral build-up quietly destroys hot water systems, dishwashers and washing machines over time. Filtered water extends appliance life and reduces maintenance costs.',
  },
  {
    icon:'💧',
    title:'Removes chlorine, sediment and heavy metals',
    desc:'Our systems use multi-stage filtration, removing chlorine, chloramines, sediment, rust and heavy metals that Sydney treated mains water can carry through older pipes.',
  },
  {
    icon:'⚡',
    title:'Professional install, fully licensed',
    desc:'Fitted by a licensed plumber, compliant with all Australian standards. We assess your home water pressure and pipe configuration first to recommend the right system, then install it cleanly with zero mess.',
  },
  {
    icon:'🔧',
    title:'Ongoing filter servicing available',
    desc:'Filter cartridges need replacing periodically to stay effective. NWP offers annual servicing to keep your system performing at its best. Just call Nathan when it is time.',
  },
]

export default function Filtration() {
  return (
    <section className="section" id="filtration">
      <div className="wrap" style={{display:'grid',gridTemplateColumns:'1fr 400px',gap:'52px',alignItems:'center'}}>
        
        <div>
          <div style={{display:'inline-flex',alignItems:'center',gap:'8px',background:'#e8f5e9',border:'1px solid #a5d6a7',borderRadius:'100px',padding:'5px 14px',fontSize:'0.72rem',fontWeight:700,letterSpacing:'0.1em',textTransform:'uppercase',color:'#2e7d32',marginBottom:'16px'}}>
            New Service Now Available
          </div>
          <h2 style={{fontSize:'clamp(1.8rem,3.5vw,2.6rem)',fontWeight:800,color:'#1c1c1c',letterSpacing:'-0.02em',lineHeight:1.1,marginBottom:'16px'}}>
            Entire Home Water<br />Filtration Systems<br /><span style={{color:'#a4151a'}}>Installed from $1,099</span>
          </h2>
          <p style={{fontSize:'1rem',color:'#444',lineHeight:1.75,marginBottom:'28px',maxWidth:'520px'}}>
            Most Sydney homes run on water treated with chlorine, chloramines and other chemicals that affect taste, smell and long-term appliance health. A whole-home filtration system puts clean, filtered water through every tap, shower and appliance in your house, installed by a licensed plumber, backed by a workmanship guarantee.
          </p>

          <div style={{display:'flex',flexDirection:'column',gap:0,marginBottom:'20px'}}>
            {features.map((f, i) => (
              <div key={i} style={{display:'flex',gap:'14px',alignItems:'flex-start',padding:'14px 0',borderBottom:i<features.length-1?'1px solid #e5e5e5':'none'}}>
                <div style={{width:'38px',height:'38px',borderRadius:'8px',background:'#e8f5e9',border:'1px solid #a5d6a7',display:'flex',alignItems:'center',justifyContent:'center',flexShrink:0,fontSize:'1.1rem'}}>
                  {f.icon}
                </div>
                <div>
                  <h4 style={{fontSize:'0.95rem',fontWeight:700,color:'#1c1c1c',marginBottom:'3px'}}>{f.title}</h4>
                  <p style={{fontSize:'0.85rem',color:'#444',lineHeight:1.55}}>{f.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <div style={{display:'flex',gap:'12px',flexWrap:'wrap'}}>
            <a href="#contact" className="btn btn--red" style={{fontSize:'1rem',padding:'15px 28px'}}>Get a filtration quote</a>
            <a href="tel:+61477160911" className="btn btn--outline" style={{fontSize:'1rem',padding:'15px 28px'}}>Call Nathan now</a>
          </div>
        </div>

        <div>
          <div style={{background:'#1c1c1c',borderRadius:'16px',padding:'32px',position:'relative',overflow:'hidden'}}>
            <div style={{position:'absolute',top:'-40px',right:'-40px',width:'180px',height:'180px',borderRadius:'50%',background:'rgba(164,21,26,0.15)',pointerEvents:'none'}}></div>
            <div style={{display:'inline-block',background:'#2e7d32',color:'white',fontSize:'0.7rem',fontWeight:700,letterSpacing:'0.08em',textTransform:'uppercase',padding:'4px 12px',borderRadius:'100px',marginBottom:'16px'}}>
              Now Available Across Sydney
            </div>
            <h3 style={{color:'#fff',fontSize:'1.2rem',marginBottom:'6px'}}>Whole Home Filtration</h3>
            <p style={{color:'rgba(255,255,255,0.55)',fontSize:'0.875rem',marginBottom:'24px',lineHeight:1.6}}>
              Supply and professional installation of a complete whole-home water filtration system. Fixed written quote before any work starts.
            </p>
            <div style={{fontSize:'0.78rem',color:'rgba(255,255,255,0.5)',fontWeight:600,textTransform:'uppercase',letterSpacing:'0.06em',marginBottom:'4px'}}>Installed from</div>
            <div style={{fontSize:'3.4rem',fontWeight:800,color:'#fff',lineHeight:1,letterSpacing:'-0.03em',marginBottom:'4px'}}>
              <sup style={{fontSize:'1.5rem',verticalAlign:'super'}}>$</sup>1,099
            </div>
            <div style={{fontSize:'0.78rem',color:'rgba(255,255,255,0.4)',marginBottom:'24px'}}>Price varies by home size and system selected. Fixed quote provided after assessment.</div>
            <ul style={{listStyle:'none',display:'flex',flexDirection:'column',gap:'8px',marginBottom:'28px',paddingTop:'20px',borderTop:'1px solid rgba(255,255,255,0.1)'}}>
              {[
                'Whole-home mains entry filtration',
                'Multi-stage sediment and carbon filter',
                'Chlorine and chloramine removal',
                'Heavy metal and rust filtration',
                'Professional licensed installation',
                'Pressure testing and system check',
                'Workmanship guarantee included',
                'Annual service reminders',
              ].map((item, i) => (
                <li key={i} style={{fontSize:'0.875rem',color:'rgba(255,255,255,0.75)',display:'flex',gap:'10px',alignItems:'flex-start'}}>
                  <span style={{color:'#66bb6a',fontWeight:700,flexShrink:0}}>✓</span>{item}
                </li>
              ))}
            </ul>
            <a href="#contact" className="btn btn--red" style={{width:'100%',justifyContent:'center',fontSize:'1rem'}}>
              Book a free assessment
            </a>
          </div>

          <div style={{marginTop:'16px',background:'#f7f7f7',border:'1.5px solid #e5e5e5',borderRadius:'10px',padding:'20px 22px'}}>
            <div style={{fontSize:'0.75rem',fontWeight:700,textTransform:'uppercase',letterSpacing:'0.08em',color:'#444',marginBottom:'6px'}}>Why now?</div>
            <p style={{fontSize:'0.875rem',color:'#444',lineHeight:1.65}}>
              Sydney water quality varies significantly across suburbs and older pipe networks. With families spending more time at home and awareness of water quality growing, whole-home filtration is one of the fastest-growing home improvement categories in Australia.
            </p>
          </div>
        </div>

      </div>
    </section>
  )
}