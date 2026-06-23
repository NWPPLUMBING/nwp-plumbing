export default function PromoStrip() {
  return (
    <div style={{background:'#a4151a',overflow:'hidden'}}>
      <div style={{display:'grid',gridTemplateColumns:'1fr 1fr'}}>
        
        <div style={{padding:'36px 48px',borderRight:'1px solid rgba(255,255,255,0.2)'}}>
          <div style={{display:'inline-block',background:'rgba(255,255,255,0.15)',border:'1px solid rgba(255,255,255,0.3)',borderRadius:'100px',padding:'4px 14px',fontSize:'0.72rem',fontWeight:700,letterSpacing:'0.1em',textTransform:'uppercase',color:'rgba(255,255,255,0.9)',marginBottom:'12px'}}>
            Special Offer
          </div>
          <div style={{fontSize:'0.82rem',color:'rgba(255,255,255,0.7)',fontWeight:600,marginBottom:'4px'}}>
            Hot water system service from
          </div>
          <div style={{fontSize:'clamp(2.4rem,5vw,3.8rem)',fontWeight:800,color:'#fff',lineHeight:1,letterSpacing:'-0.03em',marginBottom:'10px'}}>
            <sup style={{fontSize:'1.4rem',verticalAlign:'super'}}>$</sup>99
          </div>
          <div style={{fontSize:'1.2rem',fontWeight:700,color:'#fff',marginBottom:'8px'}}>Hot Water System Service</div>
          <p style={{fontSize:'0.9rem',color:'rgba(255,255,255,0.75)',lineHeight:1.6,marginBottom:'20px'}}>
            Keep your hot water system running at peak efficiency. Includes full inspection, pressure relief valve test, anode check and flush. Extends system life and prevents costly failures. Fixed quote, no hidden charges.
          </p>
          <a href="#contact" style={{display:'inline-flex',alignItems:'center',gap:'8px',background:'#fff',color:'#a4151a',fontWeight:700,fontSize:'0.9rem',textDecoration:'none',padding:'12px 22px',borderRadius:'6px'}}>
            Book a service
          </a>
        </div>

        <div style={{padding:'36px 48px',background:'#831015'}}>
          <div style={{display:'inline-block',background:'rgba(255,255,255,0.15)',border:'1px solid rgba(255,255,255,0.3)',borderRadius:'100px',padding:'4px 14px',fontSize:'0.72rem',fontWeight:700,letterSpacing:'0.1em',textTransform:'uppercase',color:'rgba(255,255,255,0.9)',marginBottom:'12px'}}>
            New Service
          </div>
          <div style={{fontSize:'0.82rem',color:'rgba(255,255,255,0.7)',fontWeight:600,marginBottom:'4px'}}>
            Whole home filtration systems installed from
          </div>
          <div style={{fontSize:'clamp(2.4rem,5vw,3.8rem)',fontWeight:800,color:'#fff',lineHeight:1,letterSpacing:'-0.03em',marginBottom:'10px'}}>
            <sup style={{fontSize:'1.4rem',verticalAlign:'super'}}>$</sup>1,099
          </div>
          <div style={{fontSize:'1.2rem',fontWeight:700,color:'#fff',marginBotto