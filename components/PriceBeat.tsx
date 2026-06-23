export default function PriceBeat() {
  return (
    <div style={{background:'#1c1c1c',padding:'40px 0',textAlign:'center',borderTop:'4px solid #a4151a',borderBottom:'4px solid #a4151a'}}>
      <div style={{maxWidth:'900px',margin:'0 auto',padding:'0 40px'}}>
        <div style={{fontSize:'clamp(2rem,7vw,5.5rem)',fontWeight:800,color:'#fff',lineHeight:1,letterSpacing:'-0.03em',marginBottom:'6px'}}>
          Price Beat <span style={{color:'#a4151a'}}>Guarantee</span>
          <span style={{fontSize:'clamp(1rem,3vw,2rem)',color:'rgba(255,255,255,0.5)'}}>*</span>
        </div>
        <p style={{fontSize:'1.05rem',color:'rgba(255,255,255,0.6)',margin:'14px auto 24px',maxWidth:'560px'}}>
          Find a lower written quote from a licensed Sydney plumber for the same job? We will beat it. Simple as that.
        </p>
        <a href="#contact" className="btn btn--red" style={{fontSize:'1rem',padding:'15px 32px'}}>
          Get a free quote to compare
        </a>
        <p style={{fontSize:'0.75rem',color:'rgba(255,255,255,0.3)',marginTop:'16px',lineHeight:1.6}}>
          * Price beat applies to like-for-like written quotes from licensed and insured plumbers for the same scope of work within Greater Sydney. Quote must be presented prior to work commencing. Excludes promotional or loss-leader pricing.
        </p>
      </div>
    </div>
  )
}