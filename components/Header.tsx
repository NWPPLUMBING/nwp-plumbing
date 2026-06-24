'use client'
import { useState } from 'react'
import Link from 'next/link'

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <>
      <div style={{background:'#1c1c1c',color:'rgba(255,255,255,0.7)',fontSize:'0.8rem',padding:'9px 0',textAlign:'center',borderBottom:'1px solid rgba(255,255,255,0.07)'}}>
        You get a fixed, itemised quote before any work starts. The price we say is the price you pay. Same-day bookings, 24/7 for emergencies.{' '}
        <a href="tel:+61477160911" style={{color:'rgba(255,255,255,0.9)',textDecoration:'none',fontWeight:600}}>Call Nathan 0477 160 911</a>
      </div>

      <header style={{background:'#fff',borderBottom:'1px solid #e5e5e5',position:'sticky',top:0,zIndex:100}}>
        <div className="wrap" style={{display:'flex',alignItems:'center',justifyContent:'space-between',height:'76px',gap:'32px'}}>
          
          <a href="/" style={{display:'flex',alignItems:'center',gap:'10px',textDecoration:'none',flexShrink:0}}>
<div style={{width:'80px',height:'80px',borderRadius:'50%',overflow:'hidden',flexShrink:0}}>
              <img src="/images/logo.png" alt="NWP Plumbing logo" style={{width:'100%',height:'100%',objectFit:'contain',display:'block'}} />
            </div>
            <div style={{lineHeight:1}}>
              <strong style={{display:'block',fontSize:'1.05rem',fontWeight:700,color:'#1c1c1c'}}>NWP Plumbing</strong>
              <span style={{display:'block',fontSize:'0.68rem',fontWeight:600,letterSpacing:'0.1em',textTransform:'uppercase',color:'#444'}}>Greater Sydney</span>
            </div>
          </a>

          <nav style={{display:'flex',alignItems:'center',gap:'6px'}}>
            <a href="#services" style={{color:'#444',textDecoration:'none',fontSize:'0.875rem',fontWeight:500,padding:'8px 12px',borderRadius:'5px'}}>Services</a>
            <a href="#pricing" style={{color:'#444',textDecoration:'none',fontSize:'0.875rem',fontWeight:500,padding:'8px 12px',borderRadius:'5px'}}>Pricing</a>
            <a href="#about" style={{color:'#444',textDecoration:'none',fontSize:'0.875rem',fontWeight:500,padding:'8px 12px',borderRadius:'5px'}}>About</a>
            <a href="#contact" style={{color:'#444',textDecoration:'none',fontSize:'0.875rem',fontWeight:500,padding:'8px 12px',borderRadius:'5px'}}>Contact</a>
            <a href="tel:+61477160911" style={{color:'#1c1c1c',fontWeight:700,fontSize:'0.95rem',textDecoration:'none',marginLeft:'8px',display:'flex',alignItems:'center',gap:'6px'}}>
              📞 0477 160 911
            </a>
            <a href="#contact" className="btn btn--red" style={{marginLeft:'8px',padding:'9px 18px',fontSize:'0.85rem'}}>Get a quote</a>
            <button 
              onClick={() => setMenuOpen(true)}
              style={{display:'none',background:'none',border:'none',cursor:'pointer',padding:'8px',color:'#1c1c1c'}}
              className="mobile-menu-btn"
              aria-label="Open menu"
            >
              ☰
            </button>
          </nav>
        </div>
      </header>

      {menuOpen && (
        <div style={{position:'fixed',top:0,left:0,right:0,bottom:0,background:'#fff',zIndex:300,padding:'24px 20px',overflowY:'auto'}}>
          <div style={{display:'flex',justifyContent:'space-between',alignItems:'center',marginBottom:'32px',paddingBottom:'20px',borderBottom:'1px solid #e5e5e5'}}>
            <strong style={{fontSize:'1.1rem',color:'#1c1c1c'}}>NWP Plumbing</strong>
            <button onClick={() => setMenuOpen(false)} style={{background:'none',border:'none',cursor:'pointer',fontSize:'1.5rem',color:'#1c1c1c'}}>✕</button>
          </div>
          {['#services','#pricing','#about','#filtration','#contact'].map((href, i) => (
            <a key={i} href={href} onClick={() => setMenuOpen(false)} style={{display:'block',fontSize:'1.2rem',fontWeight:600,color:'#1c1c1c',textDecoration:'none',padding:'14px 0',borderBottom:'1px solid #e5e5e5'}}>
              {['Services','Pricing','About','Whole Home Filtration','Contact'][i]}
            </a>
          ))}
          <div style={{marginTop:'28px',display:'flex',flexDirection:'column',gap:'12px'}}>
            <a href="tel:+61477160911" className="btn btn--red" style={{justifyContent:'center',fontSize:'1rem',padding:'15px'}}>
              Call Nathan on 0477 160 911
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