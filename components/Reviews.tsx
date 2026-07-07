'use client'
import { useEffect, useRef, useState } from 'react'

 const reviews = [
  {name:'Roisin Hayes',suburb:'Sydney',rating:5,text:'Amazing service and perfectly priced. Nathan arrived same day and on time. Have used him multiple times, highly recommend.',date:'July 2025'},
  {name:'Jessica Mundey',suburb:'Sydney',rating:5,text:'NWP Plumbing was professional and prompt, reliable and transparent. Highly recommend!!',date:'July 2025'},
  {name:'Linda Waltho',suburb:'Sydney',rating:5,text:'Excellent service! Arrived on time, fixed the issue quickly, and was professional throughout. Highly recommend!',date:'July 2025'},
  {name:'Kim Treseder',suburb:'Sydney',rating:5,text:'Great and reliable service! Would definitely hire again!',date:'July 2025'},
]

function Stars({rating}: {rating: number}) {
  return (
    <div style={{display:'flex',gap:'2px',marginBottom:'12px'}}>
      {[...Array(5)].map((_,i) => (
        <span key={i} style={{color:i < rating ? '#a4151a' : '#ddd',fontSize:'1.2rem'}}>{'★'}</span>
      ))}
    </div>
  )
}

export default function Reviews() {
  const trackRef = useRef<HTMLDivElement>(null)
  const [isPaused, setIsPaused] = useState(false)
  const posRef = useRef(0)
  const animRef = useRef<number>(0)
  const allReviews = [...reviews, ...reviews]

  useEffect(() => {
    const track = trackRef.current
    if (!track) return
    const step = () => {
      if (!isPaused) {
        posRef.current += 0.4
        const totalWidth = track.scrollWidth / 2
        if (posRef.current >= totalWidth) posRef.current = 0
        track.style.transform = `translateX(-${posRef.current}px)`
      }
      animRef.current = requestAnimationFrame(step)
    }
    animRef.current = requestAnimationFrame(step)
    return () => { if (animRef.current) cancelAnimationFrame(animRef.current) }
  }, [isPaused])

  return (
    <section className="section" id="reviews" style={{overflow:'hidden',background:'#f7f7f7'}}>
      <div className="wrap">
        <div style={{display:'flex',justifyContent:'space-between',alignItems:'flex-end',marginBottom:'32px',flexWrap:'wrap',gap:'12px'}}>
          <div>
            <span className="eyebrow">What customers say</span>
            <h2>Real reviews from Sydney homeowners</h2>
          </div>
          <a href="https://g.page/r/CWsEZUJmBDGWEBM/review" target="_blank" rel="noopener noreferrer" className="btn btn--red" style={{fontSize:'0.9rem',padding:'11px 20px'}}>
            Leave us a review
          </a>
        </div>
        <div style={{display:'flex',alignItems:'center',gap:'10px',marginBottom:'24px'}}>
          <div style={{background:'#fff',border:'1.5px solid #e5e5e5',borderRadius:'8px',padding:'8px 16px',display:'flex',alignItems:'center',gap:'10px'}}>
            <span style={{fontSize:'1.4rem',fontWeight:800,color:'#4285F4'}}>G</span>
            <div>
              <div style={{fontSize:'0.85rem',fontWeight:700,color:'#1c1c1c'}}>Google Reviews</div>
              <div style={{display:'flex',gap:'2px',alignItems:'center'}}>
                {[...Array(5)].map((_,i) => (
                  <span key={i} style={{color:'#a4151a',fontSize:'0.9rem'}}>{'★'}</span>
                ))}
                <span style={{fontSize:'0.78rem',color:'#555',marginLeft:'4px'}}>5.0 — Growing daily</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div style={{width:'100%',overflow:'hidden',cursor:'grab',paddingBottom:'8px'}} onMouseEnter={() => setIsPaused(true)} onMouseLeave={() => setIsPaused(false)} onTouchStart={() => setIsPaused(true)} onTouchEnd={() => setIsPaused(false)}>
        <div ref={trackRef} style={{display:'flex',gap:'20px',width:'max-content',paddingLeft:'40px'}}>
          {allReviews.map((review, i) => (
            <div key={i} style={{width:'320px',flexShrink:0,background:'#fff',borderRadius:'12px',padding:'24px',border:'1.5px solid #e5e5e5',boxShadow:'0 2px 12px rgba(0,0,0,0.04)'}}>
              <Stars rating={review.rating} />
              <p style={{fontSize:'0.9rem',color:'#333',lineHeight:1.7,marginBottom:'20px',minHeight:'80px'}}>
                {'"'}{review.text}{'"'}
              </p>
              <div style={{display:'flex',alignItems:'center',gap:'12px',paddingTop:'16px',borderTop:'1px solid #f0f0f0'}}>
                <div style={{width:'40px',height:'40px',borderRadius:'50%',background:'#a4151a',color:'#fff',display:'flex',alignItems:'center',justifyContent:'center',fontWeight:800,fontSize:'1rem',flexShrink:0}}>
                  {review.name.charAt(0)}
                </div>
                <div>
                  <div style={{fontWeight:700,fontSize:'0.9rem',color:'#1c1c1c'}}>{review.name}</div>
                  <div style={{fontSize:'0.78rem',color:'#777'}}>{review.suburb}{' · '}{review.date}</div>
                </div>
                <div style={{marginLeft:'auto',fontSize:'1.2rem',fontWeight:800,color:'#4285F4'}}>G</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}