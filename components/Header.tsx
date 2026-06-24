'use client'
import { useState } from 'react'

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <>
      <style>{`
        @media (max-width: 768px) {
          .desktop-nav { display: none !important; }
          .mobile-nav-right { display: flex !important; }
        }
        @media (min-width: 769px) {
          .desktop-nav { display: flex !important; }
          .mobile-nav-right { display: none !important; }
        }
      `}</style>

      <div style={{background:'#1c1c1c',color:'rgba(255,255,255,0.7)',fontSize:'0.8rem',padding:'9px 0',textAlign:'center',borderBottom:'1px solid rgba(255,255,255,0.07)'}}>
        <div className="wrap">
          Fixed, itemised quote before any work starts.{' '}
          <a href="tel:+61477160911" style={{color:'rgba(255,255,255,0.9)',textDecoration:'none',fontWeight:600}}>Call Nathan 0477 160 911</a>
        </div>
      </div>

      <header style={{background:'#fff',borderBottom:'1px solid #e5e5e5',position:'sticky',top:0,zIndex:100}}>
        <div className="wrap" style={{display:'flex',alignItems:'center',justifyContent:'space-between',height:'70px',gap:'16px'}}>

          <a href="/" style={{display:'flex',alignItems:'center',gap:'10px',textDecoration:'none',flexShrink:0}}>
            <div style={{width:'58px',height:'58px',borderRadius:'50%',overflow:'hidden',flexShrink:0}}>
              <img src="/images/logo.png" alt="NWP Plumbing logo" style={{width:'100%',height:'100%',objectFit:'contain',display:'block'}} />
            </div>
            <div style={{lineHeight:1}}>
              <strong style={{display:'block',fontSize:'1rem',fontWeight:700,color:'#1c1c1c'}}>NWP Plumbing</strong>
              <span style={{display:'block',fontSize:'0.65rem',fontWeight:600,letterSpacing:'0.1em',textTransform:'uppercase',color:'#555'}}>Greater Sydney</span>
            </div>
          </a>

          <nav className="desktop-nav" style={{alignItems:'center',gap:'6px'}}>
            <a href="#services" style={{color:'#444',textDecoration:'none',fontSize:'0.875rem',fontWeight:500,padding:'8px 12px',borderRadius:'5px'}}>Services</a>
            <a href="#pricing" style={{color:'#444',textDecoration:'none',fontSize:'0.875rem',fontWeight:500,padding:'8px 12px',borderRadius:'5px'}}>Pricing</a>
            <a href="#about" style={{color:'#444',textDecoration:'none',fontSize:'0.875rem',fontWeight:500,padding:'8px 12px',borderRadius:'5px'}}>About</a>
            <a href="#contact" style={{color:'#444',textDecoration:'none',fontSize:'0.875rem',fontWeight:500,padding:'8px 12px',borderRadius:'5px'}}>Contact</a>
            <a href="tel:+61477160911" style={{color:'#1c1c1c',fontWeight:700,fontSize:'0.9rem',textDecoration:'none',marginLeft:'8px'}}>
              📞 0477 160 911
            </a>
            <a href="#contact" className="btn btn--red" style={{marginLeft:'8px',padding:'9px 18px',fontSize:'0.85rem'}}>Get a quote</a>
          </nav>

          <div className="mobile-nav-right" style={{alignItems:'center',gap:'10px'}}>
            <a href="tel:+61477160911" className="btn btn--red" style={{padding:'10px 16px',fontSize:'0.85rem'}}>
              📞 Call
            </a>
            <button
              onClick={() => setMenuOpen(true)}
              style={{background:'none',border:'1.5px solid #e5e5e5',borderRadius:'6px',cursor:'pointer',padding:'8px 10px',color:'#1c1c1c',fontSize:'1.2rem',lineHeight:1}}
              aria-label="Open menu"
            >
              ☰
            </button>
          </div>

        </div>
      </header>

      {menuOpen && (
        <div style={{position:'fixed',top:0,left:0,right:0,bottom:0,background:'#fff',zIndex:300,padding:'24px 20px',overflowY:'auto'}}>
          <div style={{display:'flex',justifyContent:'space-between',alignItems:'center',marginBottom:'32px',paddingBottom:'20px',borderBottom:'1px solid #e5e5e5'}}>
            <div style={{display:'flex',alignItems:'center',gap:'10px'}}>
              <img src="/images/logo.png" alt="NWP Plumbing" style={{width:'44px',height:'44px',objectFit:'contain'}} />
              <strong style={{fontSize:'1.1rem',color:'#1c1c1c'}}>NWP Plumbing</strong>
            </div>
            <button onClick={() => setMenuOpen(false)} style={{background:'none',border:'none',cursor:'pointer',fontSize:'1.5rem',color:'#1c1c1c',padding:'4px'}}>✕</button>
          </div>
          {[
            {href:'#services',label:'Services'},
            {href:'#pricing',label:'Pricing'},
            {href:'#about',label:'About'},
            {href:'#filtration',label:'Whole Home Filtration'},
            {href:'#contact',label:'Contact'},
          ].map((item, i) => (
            <a key={i} href={item.href} onClick={() => setMenuOpen(false)} style={{display:'block',fontSize:'1.2rem',fontWeight:600,color:'#1c1c1c',textDecoration:'none',padding:'14px 0',borderBottom:'1px solid #e5e5e5'}}>
              {item.label}
            </a>
          ))}
          <div style={{marginTop:'28px',display:'flex',flexDirection:'column',gap:'12px'}}>
            <a href="tel:+61477160911" className="btn btn--red" style={{justifyContent:'center',fontSize:'1rem',padding:'15px'}}>
              📞 Call Nathan on 0477 160 911
            </a>
            <a href="mailto:nwpplumbing@outlook.com" className="btn btn--outline" style={{justifyContent:'center',fontSize:'1rem',padding:'15px'}}>
              Send an email
            </a>
          </div>
        </div>
      )}
    </>
  )
}