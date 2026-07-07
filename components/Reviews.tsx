'use client'
import { useEffect, useRef, useState } from 'react'

const reviews = [
  {
    name: 'David M.',
    suburb: 'Manly',
    rating: 5,
    text: 'Burst pipe under the sink at 9pm on a Sunday. Nathan was here within 45 minutes, fixed the problem and the price was exactly what he quoted. Couldn\'t ask for more.',
    date: 'June 2025',
  },
  {
    name: 'Sarah K.',
    suburb: 'Parramatta',
    rating: 5,
    text: 'Had a blocked drain that two other plumbers couldn\'t sort out. NWP used camera inspection and found the issue immediately. Professional, clean and reasonably priced.',
    date: 'May 2025',
  },
  {
    name: 'Tom W.',
    suburb: 'Chatswood',
    rating: 5,
    text: 'New hot water system installed. Nathan was on time, done in 3 hours, price matched the quote exactly and he explained how to maintain it. Already recommended him to two neighbours.',
    date: 'April 2025',
  },
  {
    name: 'Jessica L.',
    suburb: 'Stanmore',
    rating: 5,
    text: 'Called Nathan for a leaking tap that had been dripping for months. He came out same day, quoted upfront and had it fixed in under an hour. Great service.',
    date: 'March 2025',
  },
  {
    name: 'Mike R.',
    suburb: 'Frenchs Forest',
    rating: 5,
    text: 'Had NWP install a whole home filtration system. Nathan was knowledgeable, tidy and the price was exactly what was quoted. Water tastes so much better now.',
    date: 'June 2025',
  },
]

function Stars({ rating }: { rating: number }) {
  return (
    <div style={{display:'flex',gap:'2px',marginBottom:'12px'}}>
      {[...Array(5)].map((_,i) => (
        <span key={i} style={{color: i < rating ? '#a4151a' : '#ddd', fontSize:'1.2rem'}}>★</span>
      ))}
    </div>
  )
}

export default function Reviews() {
  const trackRef = useRef<HTMLDivElement>(null)
  const [isPaused, setIsPaused] = useState(false)
  const posRef = useRef(0)
  const animRef = useRef<number>()

  // Duplicate reviews for seamless loop
  const allReviews = [...reviews, ...reviews]

  useEffect(() => {
    const track = trackRef.current
    if (!track) return

    const step = () => {
      if (!isPaused) {
        posRef.current += 0.4
        const totalWidth = track.scrollWidth / 2
        if (posRef.current >= totalWidth) {
          posRef.current = 0
        }
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
          
            href="https://g.page/r/CWsEZUJmBDGWEBM/review"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn--red"
            style={{fontSize:'0.9rem',padding:'11px 20px'}}
          >
            Leave us a review 
          </a>
        </div>

        {/* Google badge */}
        <div style={{display:'flex',alignItems:'center',gap:'10px',marginBottom:'24px'}}>
          <div style={{background:'#fff',border:'1.5px solid #e5e5e5',borderRadius:'8px',padding:'8px 16px',display:'flex',alignItems:'center',gap:'10px'}}>
            <span style={{fontSize:'1.4rem',fontWeight:800,color:'#4285F4'}}>G</span>
            <div>
              <div style={{fontSize:'0.85rem',fontWeight:700,color:'#1c1c1c'}}>Google Reviews</div>
              <div style={{display:'flex',gap:'2px',alignItems:'center'}}>
                {[...Array(5)].map((_,i)=>(
                  <span key={i} style={{color:'#a4151a',fontSize:'0.9rem'}}>★</span>
                ))}
                <span style={{fontSize:'0.78rem',color:'#555',marginLeft:'4px'}}>5.0 — Growing daily</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Carousel — full width, no wrap constraint */}
      <div
        style={{width:'100%',overflow:'hidden',cursor:'grab',paddingBottom:'8px'}}
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
        onTouchStart={() => setIsPaused(true)}
        onTouchEnd={() => setIsPaused(false)}
      >
        <div
          ref={trackRef}
          style={{display:'flex',gap:'20px',width:'max-content',paddingLeft:'40px'}}
        >
          {allReviews.map((review, i) => (
            <div
              key={i}
              style={{
                width:'320px',
                flexShrink:0,
                background:'#fff',
                borderRadius:'12px',
                padding:'24px',
                border:'1.5px solid #e5e5e5',
                boxShadow:'0 2px 12px rgba(0,0,0,0.04)',
              }}
            >
              <Stars rating={review.rating} />
              <p style={{fontSize:'0.9rem',color:'#333',lineHeight:1.7,marginBottom:'20px',minHeight:'80px'}}>
                "{review.text}"
              </p>
              <div style={{display:'flex',alignItems:'center',gap:'12px',paddingTop:'16px',borderTop:'1px solid #f0f0f0'}}>
                <div style={{
                  width:'40px',height:'40px',borderRadius:'50%',
                  background:'#a4151a',color:'#fff',
                  display:'flex',alignItems:'center',justifyContent:'center',
                  fontWeight:800,fontSize:'1rem',flexShrink:0,
                }}>
                  {review.name.charAt(0)}
                </div>
                <div>
                  <div style={{fontWeight:700,fontSize:'0.9rem',color:'#1c1c1c'}}>{review.name}</div>
                  <div style={{fontSize:'0.78rem',color:'#777'}}>{review.suburb} · {review.date}</div>
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