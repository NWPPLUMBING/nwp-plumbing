export default function CTABand() {
  return (
    <div style={{background:'#a4151a',padding:'48px 0'}}>
      <div className="wrap" style={{textAlign:'center'}}>
        <h2 style={{color:'#fff',marginBottom:'12px'}}>Need a licensed plumber in Greater Sydney?</h2>
        <p style={{color:'rgba(255,255,255,0.75)',marginBottom:'28px',fontSize:'1.05rem'}}>
          Call Nathan for a fixed, itemised quote agreed before any work starts. Same-day available, 24/7 for emergencies.
        </p>
        <div style={{display:'flex',justifyContent:'center',gap:'12px',flexWrap:'wrap'}}>
          <a href="tel:+61477160911" className="btn" style={{background:'#fff',color:'#a4151a',fontWeight:700}}>
            📞 0477 160 911
          </a>
          <a href="#contact" className="btn btn--outline-white">
            Get a free quote
          </a>
        </div>
      </div>
    </div>
  )
}