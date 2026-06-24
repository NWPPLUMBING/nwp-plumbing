'use client'
import { useState } from 'react'

export default function Contact() {
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  const [form, setForm] = useState({
    name: '', phone: '', email: '', suburb: '', service: '', message: ''
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setError('')
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      })
      if (res.ok) {
        setSubmitted(true)
      } else {
        setError('Something went wrong. Please call us directly on 0477 160 911.')
      }
    } catch {
      setError('Something went wrong. Please call us directly on 0477 160 911.')
    }
    setLoading(false)
  }

  return (
    <>
      <style>{`
        .contact-grid { display:grid; grid-template-columns:1fr 1fr; gap:48px; align-items:start; }
        @media(max-width:768px){ .contact-grid { grid-template-columns:1fr; gap:28px; } }
      `}</style>
      <section className="section" id="contact">
        <div className="wrap contact-grid">

          <div>
            <span className="eyebrow">Get in touch</span>
            <h2>Get a fixed quote, free and no obligation</h2>
            <p style={{marginTop:'10px',marginBottom:'32px',maxWidth:'420px'}}>
              Fill in the form and Nathan will call you back, talk through the job and give you a written price. No surprise costs, no pressure to proceed. Usually back to you within a couple of hours.
            </p>
            {[
              {icon:'📞',label:'Call or SMS',val:'0477 160 911',href:'tel:+61477160911'},
              {icon:'✉️',label:'Email',val:'nwpplumbing@outlook.com',href:'mailto:nwpplumbing@outlook.com'},
              {icon:'🕐',label:'Hours',val:'Mon-Sun, 24/7',href:null},
            ].map((row,i)=>(
              <div key={i} style={{display:'flex',gap:'14px',alignItems:'flex-start',padding:i===0?'0 0 18px':'18px 0',borderBottom:i<2?'1px solid #e5e5e5':'none'}}>
                <div style={{width:'38px',height:'38px',borderRadius:'8px',background:'#fdf2f2',border:'1px solid #f5c0c0',display:'flex',alignItems:'center',justifyContent:'center',flexShrink:0,fontSize:'1rem'}}>{row.icon}</div>
                <div>
                  <div style={{fontSize:'0.75rem',textTransform:'uppercase',letterSpacing:'0.07em',fontWeight:700,color:'#555',marginBottom:'2px'}}>{row.label}</div>
                  {row.href ? (
                    <a href={row.href} style={{fontWeight:700,color:'#1c1c1c',textDecoration:'none',fontSize:'1.1rem'}}>{row.val}</a>
                  ) : (
                    <span style={{fontWeight:600,color:'#1c1c1c'}}>{row.val}</span>
                  )}
                </div>
              </div>
            ))}
          </div>

          <div style={{background:'#fff',border:'1.5px solid #e5e5e5',borderRadius:'12px',padding:'32px'}}>
            <h3 style={{marginBottom:'24px'}}>Request a quote</h3>
            {submitted ? (
              <div style={{textAlign:'center',padding:'40px 20px'}}>
                <div style={{fontSize:'3rem',marginBottom:'16px'}}>✅</div>
                <h3 style={{color:'#1c1c1c',marginBottom:'8px'}}>Thanks, we will be in touch soon!</h3>
                <p style={{color:'#444',fontSize:'0.95rem'}}>Nathan will call you back usually within a couple of hours.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit}>
                <div style={{display:'grid',gridTemplateColumns:'1fr 1fr',gap:'14px',marginBottom:'14px'}}>
                  <div>
                    <label style={{display:'block',fontSize:'0.75rem',fontWeight:700,textTransform:'uppercase',letterSpacing:'0.06em',color:'#444',marginBottom:'6px'}}>Name</label>
                    <input name="name" type="text" placeholder="Your name" required onChange={handleChange} value={form.name} style={{width:'100%',padding:'11px 14px',border:'1.5px solid #e5e5e5',borderRadius:'6px',fontFamily:'inherit',fontSize:'0.925rem',color:'#1c1c1c',outline:'none'}}/>
                  </div>
                  <div>
                    <label style={{display:'block',fontSize:'0.75rem',fontWeight:700,textTransform:'uppercase',letterSpacing:'0.06em',color:'#444',marginBottom:'6px'}}>Phone</label>
                    <input name="phone" type="tel" placeholder="0400 000 000" required onChange={handleChange} value={form.phone} style={{width:'100%',padding:'11px 14px',border:'1.5px solid #e5e5e5',borderRadius:'6px',fontFamily:'inherit',fontSize:'0.925rem',color:'#1c1c1c',outline:'none'}}/>
                  </div>
                </div>
                <div style={{marginBottom:'14px'}}>
                  <label style={{display:'block',fontSize:'0.75rem',fontWeight:700,textTransform:'uppercase',letterSpacing:'0.06em',color:'#444',marginBottom:'6px'}}>Email</label>
                  <input name="email" type="email" placeholder="your@email.com" onChange={handleChange} value={form.email} style={{width:'100%',padding:'11px 14px',border:'1.5px solid #e5e5e5',borderRadius:'6px',fontFamily:'inherit',fontSize:'0.925rem',color:'#1c1c1c',outline:'none'}}/>
                </div>
                <div style={{marginBottom:'14px'}}>
                  <label style={{display:'block',fontSize:'0.75rem',fontWeight:700,textTransform:'uppercase',letterSpacing:'0.06em',color:'#444',marginBottom:'6px'}}>Suburb</label>
                  <input name="suburb" type="text" placeholder="e.g. Manly, Parramatta" onChange={handleChange} value={form.suburb} style={{width:'100%',padding:'11px 14px',border:'1.5px solid #e5e5e5',borderRadius:'6px',fontFamily:'inherit',fontSize:'0.925rem',color:'#1c1c1c',outline:'none'}}/>
                </div>
                <div style={{marginBottom:'14px'}}>
                  <label style={{display:'block',fontSize:'0.75rem',fontWeight:700,textTransform:'uppercase',letterSpacing:'0.06em',color:'#444',marginBottom:'6px'}}>Service needed</label>
                  <select name="service" required onChange={handleChange} value={form.service} style={{width:'100%',padding:'11px 14px',border:'1.5px solid #e5e5e5',borderRadius:'6px',fontFamily:'inherit',fontSize:'0.925rem',color:'#1c1c1c',outline:'none',background:'#fff'}}>
                    <option value="">Select a service</option>
                    <option>Blocked Drain</option>
                    <option>Hot Water System</option>
                    <option>Burst Pipe or Leak</option>
                    <option>Taps and Toilets</option>
                    <option>Gas Fitting</option>
                    <option>Emergency Plumbing</option>
                    <option>Whole Home Filtration</option>
                    <option>Other</option>
                  </select>
                </div>
                <div style={{marginBottom:'14px'}}>
                  <label style={{display:'block',fontSize:'0.75rem',fontWeight:700,textTransform:'uppercase',letterSpacing:'0.06em',color:'#444',marginBottom:'6px'}}>Tell us about the problem</label>
                  <textarea name="message" placeholder="Describe what is happening" onChange={handleChange} value={form.message} style={{width:'100%',padding:'11px 14px',border:'1.5px solid #e5e5e5',borderRadius:'6px',fontFamily:'inherit',fontSize:'0.925rem',color:'#1c1c1c',outline:'none',minHeight:'100px',resize:'vertical'}}/>
                </div>
                {error && <p style={{color:'#a4151a',fontSize:'0.875rem',marginBottom:'12px'}}>{error}</p>}
                <button type="submit" disabled={loading} style={{width:'100%',background:loading?'#888':'#a4151a',color:'#fff',fontFamily:'inherit',fontWeight:700,fontSize:'1rem',border:'none',borderRadius:'6px',padding:'14px',cursor:loading?'not-allowed':'pointer',marginTop:'6px'}}>
                  {loading ? 'Sending...' : 'Send quote request'}
                </button>
              </form>
            )}
          </div>

        </div>
      </section>
    </>
  )
}