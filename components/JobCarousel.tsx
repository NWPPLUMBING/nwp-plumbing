'use client'

import { useState, useEffect, useCallback } from 'react'

type Slide = { src: string; alt: string }

const SLIDES: Slide[] = [
  { src: '/images/work/NWP-before-after-hotwater.jpg', alt: 'Before and after gas hot water system replacement' },
  { src: '/images/work/NWP-before-after-tank.jpg', alt: 'Before and after storage hot water tank replacement' },
  { src: '/images/work/NWP-shower-mixer-conversion.jpg', alt: 'Before and after shower mixer conversion' },
  { src: '/images/work/NWP-before-after-tmv.jpg', alt: 'Before and after tempering valve replacement' },
  { src: '/images/work/NWP-home-filtration.jpg', alt: 'Whole-home water filtration system installation' },
  { src: '/images/work/NWP-filter-cartridge-before-after.jpg', alt: 'Before and after water filter cartridge replacement' },
  { src: '/images/work/NWP-commercial-hotwater.jpg', alt: 'Commercial hot water system installation' },
  { src: '/images/work/NWP-sewer-repairs.jpg', alt: 'Sewer pipe repair' },
  { src: '/images/work/NWP-sewer-repairs-2.jpg', alt: 'Sewer line repair with new junction' },
  { src: '/images/work/NWP-sewer-repairs-3.jpg', alt: 'Blocked sewer cleared and repaired' },
  { src: '/images/work/NWP-drain-cleaning.jpg', alt: 'Drain cleaning with high pressure jetter' },
  { src: '/images/work/NWP-before-after.jpg', alt: 'Before and after garden tap and valve repair' },
  { src: '/images/work/After_tank_final.jpg', alt: 'Completed hot water tank installation' },
]

const RED = '#a4151a'

export default function JobCarousel() {
  const [i, setI] = useState(0)
  const [paused, setPaused] = useState(false)
  const n = SLIDES.length

  const go = useCallback((d: number) => setI(prev => (prev + d + n) % n), [n])

  useEffect(() => {
    if (paused) return
    const t = setInterval(() => setI(prev => (prev + 1) % n), 4500)
    return () => clearInterval(t)
  }, [paused, n])

  return (
    <div className="jc" onMouseEnter={() => setPaused(true)} onMouseLeave={() => setPaused(false)}>
      <div className="jc-eyebrow">Our recent work</div>
      <div className="jc-frame">
        {SLIDES.map((s, idx) => (
          <img key={s.src} src={s.src} alt={s.alt} className={'jc-img' + (idx === i ? ' on' : '')} loading={idx === 0 ? 'eager' : 'lazy'} />
        ))}
        <button type="button" className="jc-arw jc-prev" aria-label="Previous photo" onClick={() => go(-1)}>
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M15 6l-6 6 6 6" /></svg>
        </button>
        <button type="button" className="jc-arw jc-next" aria-label="Next photo" onClick={() => go(1)}>
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M9 6l6 6-6 6" /></svg>
        </button>
      </div>
      <div className="jc-dots">
        {SLIDES.map((s, idx) => (
          <button key={s.src} type="button" aria-label={'Go to photo ' + (idx + 1)} className={'jc-dot' + (idx === i ? ' on' : '')} onClick={() => setI(idx)} />
        ))}
      </div>

      <style jsx>{`
        .jc { font-family: Archivo, system-ui, -apple-system, sans-serif; }
        .jc-eyebrow { font-size: 0.78rem; font-weight: 600; letter-spacing: 0.08em; text-transform: uppercase; color: ${RED}; margin-bottom: 10px; }
        .jc-frame { position: relative; width: 100%; height: 420px; border-radius: 14px; overflow: hidden; background: #f2f1ee; border: 1px solid #e5e5e5; }
        .jc-img { position: absolute; inset: 0; width: 100%; height: 100%; object-fit: contain; opacity: 0; transition: opacity .5s ease; }
        .jc-img.on { opacity: 1; }
        .jc-arw { position: absolute; top: 50%; transform: translateY(-50%); width: 40px; height: 40px; border-radius: 50%; border: none; background: rgba(22,24,26,.55); color: #fff; display: flex; align-items: center; justify-content: center; cursor: pointer; transition: background .15s; }
        .jc-arw:hover { background: ${RED}; }
        .jc-prev { left: 12px; }
        .jc-next { right: 12px; }
        .jc-dots { display: flex; justify-content: center; gap: 7px; margin-top: 12px; flex-wrap: wrap; }
        .jc-dot { width: 8px; height: 8px; border-radius: 50%; border: none; background: #d5d2cc; cursor: pointer; padding: 0; transition: background .15s, transform .15s; }
        .jc-dot.on { background: ${RED}; transform: scale(1.3); }
        @media (max-width: 768px) { .jc-frame { height: 300px; } }
      `}</style>
    </div>
  )
}