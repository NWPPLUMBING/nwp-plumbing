'use client'

import { useState } from 'react'

type Issue = { label: string; tint: string; mid: string; deep: string; path: string }

const ISSUES: Issue[] = [
  { label: 'Blocked drain', tint: '#e7f0f9', mid: '#2f6fb0', deep: '#245a91', path: 'M12 22a7 7 0 0 0 7-7c0-2-1-3.9-3-5.5s-3.5-4-4-6.5c-.5 2.5-2 4.9-4 6.5C6 11.1 5 13 5 15a7 7 0 0 0 7 7z' },
  { label: 'No hot water', tint: '#fbf1e0', mid: '#c9821b', deep: '#8a5709', path: 'M14 4v10.54a4 4 0 1 1-4 0V4a2 2 0 0 1 4 0Z' },
  { label: 'Burst pipe or leak', tint: '#fbeaea', mid: '#c0392b', deep: '#a4151a', path: 'M21.73 18 13.73 4a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3ZM12 9v4M12 17h.01' },
  { label: 'Tap or toilet', tint: '#e2f4f0', mid: '#0f7a64', deep: '#0c6552', path: 'M2 6c.6.5 1.2 1 2.5 1C7 7 7 5 9.5 5c2.5 0 2.5 2 5 2 2.6 0 2.6-2 5-2 1.3 0 1.9.5 2.5 1M2 12c.6.5 1.2 1 2.5 1 2.5 0 2.5-2 5-2 2.6 0 2.4 2 5 2 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1M2 18c.6.5 1.2 1 2.5 1 2.5 0 2.5-2 5-2 2.6 0 2.4 2 5 2 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1' },
  { label: 'Gas fitting', tint: '#faece7', mid: '#c8502a', deep: '#a83f1f', path: 'M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 0 0 2.5 2.5Z' },
  { label: 'Water filtration', tint: '#eef6e3', mid: '#4f8a1e', deep: '#3f6f18', path: 'M22 3H2l8 9.46V19l4 2v-8.54L22 3Z' },
  { label: 'Reno or fit-off', tint: '#eeecf9', mid: '#5b4bb0', deep: '#493c8f', path: 'M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76Z' },
  { label: 'Something else', tint: '#f0efec', mid: '#6b6e72', deep: '#444441', path: 'M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20ZM9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3M12 17h.01' },
]

function paths(d: string) {
  return d.split('M').filter(Boolean).map((seg, i) => <path key={i} d={'M' + seg} />)
}

function Check({ color, w = 12, sw = 4 }: { color: string; w?: number; sw?: number }) {
  return (
    <svg width={w} height={w} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth={sw} strokeLinecap="round" strokeLinejoin="round"><path d="M20 6 9 17l-5-5" /></svg>
  )
}

export default function QuoteStrip() {
  const [selected, setSelected] = useState<string[]>([])
  const [name, setName] = useState('')
  const [phone, setPhone] = useState('')
  const [suburb, setSuburb] = useState('')
  const [email, setEmail] = useState('')
  const [status, setStatus] = useState<'idle' | 'sending' | 'done' | 'error'>('idle')

  const open = selected.length > 0

  function toggle(label: string) {
    setSelected(s => (s.includes(label) ? s.filter(x => x !== label) : [...s, label]))
  }

  async function submit() {
    if (!name.trim() || !phone.trim() || !suburb.trim()) {
      setStatus('error')
      return
    }
    setStatus('sending')
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, phone, suburb, email, service: selected.join(', '), message: '' }),
      })
      if (!res.ok) throw new Error()
      if (typeof window !== 'undefined' && (window as any).gtag) {
        (window as any).gtag('event', 'conversion', {
          send_to: 'AW-18340910694/GzQHCJ_3mtQcEOas0KlE',
          value: 1.0,
          currency: 'AUD',
        })
      }
      setStatus('done')
    } catch {
      setStatus('error')
    }
  }

  return (
    <section className="nwe-strip">
      <div className="nwe-card">
        {status === 'done' ? (
          <div className="nwe-done">
            <div className="nwe-done-mark"><Check color="#fff" w={27} sw={3} /></div>
            <p className="nwe-done-msg">Thanks{name.trim() ? ', ' + name.trim() : ''}. Nathan will call you back shortly to confirm a fixed price.</p>
          </div>
        ) : (
          <>
            <div className="nwe-hd">
              <span className="nwe-live"><span className="nwe-dot" />Same-day service available</span>
              <h2>What&rsquo;s the problem?</h2>
              <div className="nwe-stars">
                <span className="nwe-star">&#9733;&#9733;&#9733;&#9733;&#9733;</span>
                <b>5.0 on Google &middot; Fixed prices</b>
              </div>
            </div>

            <div className="nwe-body">
              <div className="nwe-grid">
                {ISSUES.map((issue, i) => {
                  const on = selected.includes(issue.label)
                  return (
                    <button
                      key={issue.label}
                      type="button"
                      className="nwe-chip"
                      aria-pressed={on}
                      onClick={() => toggle(issue.label)}
                      style={{
                        background: on ? issue.deep : issue.tint,
                        boxShadow: on ? '0 10px 22px ' + issue.mid + '55' : 'none',
                        animationDelay: i * 45 + 'ms',
                      }}
                    >
                      <span className="nwe-tick"><Check color={issue.deep} /></span>
                      <span className="nwe-ic" style={{ background: on ? 'rgba(255,255,255,.22)' : issue.mid, color: '#fff' }}>
                        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">{paths(issue.path)}</svg>
                      </span>
                      <span className="nwe-label" style={{ color: on ? '#fff' : issue.deep }}>{issue.label}</span>
                    </button>
                  )
                })}
              </div>

              <div className={'nwe-wrap' + (open ? ' on' : '')}>
                <div className="nwe-fields">
                  <input type="text" placeholder="First name" value={name} onChange={e => setName(e.target.value)} autoComplete="given-name" />
                  <input type="tel" placeholder="Mobile" value={phone} onChange={e => setPhone(e.target.value)} autoComplete="tel" />
                  <input className="w" type="text" placeholder="Suburb" value={suburb} onChange={e => setSuburb(e.target.value)} />
                  <input className="w" type="email" placeholder="Email (optional)" value={email} onChange={e => setEmail(e.target.value)} autoComplete="email" />
                </div>
                <button type="button" className="nwe-sub" onClick={submit} disabled={status === 'sending'}>
                  {status === 'sending' ? 'Sending\u2026' : 'Get my fixed quote'}
                  {status !== 'sending' && (
                    <svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M13 6l6 6-6 6" /></svg>
                  )}
                </button>
                {status === 'error' && <p className="nwe-err">Please add your name, mobile and suburb &mdash; or call 0477 160 911.</p>}
                <p className="nwe-call">Or call now &mdash; <a href="tel:+61477160911">0477 160 911</a></p>
              </div>
            </div>
          </>
        )}
      </div>

      <style jsx>{`
        @keyframes nwePop { from { opacity: 0; transform: translateY(10px) scale(.96); } to { opacity: 1; transform: none; } }
        @keyframes nweDot { 0%, 100% { box-shadow: 0 0 0 0 rgba(75,181,67,.7); } 70% { box-shadow: 0 0 0 7px rgba(75,181,67,0); } }
        @keyframes nweCta { 0%, 100% { box-shadow: 0 0 0 0 rgba(164,21,26,.45); } 70% { box-shadow: 0 0 0 12px rgba(164,21,26,0); } }
        .nwe-strip { font-family: Archivo, system-ui, -apple-system, sans-serif; display: flex; justify-content: center; }
        .nwe-strip * { box-sizing: border-box; }
        .nwe-card { width: 100%; max-width: 440px; background: #fff; border-radius: 20px; overflow: hidden; box-shadow: 0 22px 50px rgba(164,21,26,.16), 0 4px 12px rgba(22,24,26,.06); }
        .nwe-hd { background: #a4151a; padding: 20px 22px; position: relative; overflow: hidden; }
        .nwe-hd:after { content: ""; position: absolute; top: -40px; right: -40px; width: 130px; height: 130px; border-radius: 50%; background: rgba(255,255,255,.07); }
        .nwe-live { display: inline-flex; align-items: center; gap: 7px; background: rgba(255,255,255,.16); color: #fff; font-size: 11.5px; font-weight: 600; padding: 5px 11px; border-radius: 999px; margin-bottom: 11px; }
        .nwe-dot { width: 8px; height: 8px; border-radius: 50%; background: #4bb543; animation: nweDot 1.8s infinite; }
        .nwe-hd h2 { color: #fff; font-size: 23px; font-weight: 800; margin: 0; letter-spacing: -.02em; line-height: 1.05; }
        .nwe-stars { display: flex; align-items: center; gap: 7px; margin-top: 9px; }
        .nwe-star { color: #ffc531; font-size: 15px; letter-spacing: 1px; }
        .nwe-stars b { color: #fff; font-size: 12.5px; font-weight: 600; }
        .nwe-body { padding: 16px; }
        .nwe-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 10px; }
        .nwe-chip { position: relative; display: flex; flex-direction: column; gap: 11px; text-align: left; padding: 15px; border-radius: 15px; cursor: pointer; border: none; font: inherit; opacity: 0; animation: nwePop .4s ease forwards; transition: transform .16s, box-shadow .16s, filter .16s; }
        .nwe-chip:hover { transform: translateY(-3px); filter: brightness(.98); }
        .nwe-chip:active { transform: scale(.96); }
        .nwe-ic { width: 42px; height: 42px; border-radius: 12px; display: flex; align-items: center; justify-content: center; transition: transform .16s; }
        .nwe-chip:hover .nwe-ic { transform: scale(1.08) rotate(-4deg); }
        .nwe-label { font-size: 14.5px; font-weight: 700; line-height: 1.15; letter-spacing: -.01em; }
        .nwe-tick { position: absolute; top: 10px; right: 10px; width: 20px; height: 20px; border-radius: 50%; background: #fff; display: flex; align-items: center; justify-content: center; opacity: 0; transform: scale(.3); transition: opacity .16s, transform .18s cubic-bezier(.34,1.56,.64,1); }
        .nwe-chip[aria-pressed="true"] .nwe-tick { opacity: 1; transform: scale(1); }
        .nwe-wrap { max-height: 0; opacity: 0; overflow: hidden; transition: max-height .32s ease, opacity .25s ease, margin-top .32s ease; }
        .nwe-wrap.on { max-height: 400px; opacity: 1; margin-top: 16px; }
        .nwe-fields { display: grid; grid-template-columns: 1fr 1fr; gap: 9px; }
        .nwe-fields input { border: 1.5px solid #ddd9d3; border-radius: 11px; padding: 13px; font-size: 16px; font-family: inherit; background: #fbfaf8; color: #16181a; width: 100%; transition: border-color .14s; }
        .nwe-fields input:focus { outline: none; border-color: #a4151a; }
        .nwe-fields .w { grid-column: span 2; }
        .nwe-sub { width: 100%; margin-top: 12px; padding: 15px; border: none; border-radius: 13px; background: #a4151a; color: #fff; font: inherit; font-size: 16px; font-weight: 800; letter-spacing: -.01em; cursor: pointer; display: flex; align-items: center; justify-content: center; gap: 9px; animation: nweCta 2s infinite; transition: background .16s, transform .1s; }
        .nwe-sub:hover { background: #7c0d14; }
        .nwe-sub:active { transform: scale(.98); }
        .nwe-sub:disabled { animation: none; opacity: .75; cursor: default; }
        .nwe-err { text-align: center; font-size: 13.5px; font-weight: 600; color: #a4151a; margin: 12px 0 0; }
        .nwe-call { text-align: center; font-size: 13px; color: #6b6e72; margin: 12px 0 0; }
        .nwe-call a { color: #a4151a; font-weight: 700; text-decoration: none; }
        .nwe-done { padding: 30px 20px; text-align: center; }
        .nwe-done-mark { width: 52px; height: 52px; margin: 0 auto; border-radius: 50%; background: #a4151a; display: flex; align-items: center; justify-content: center; box-shadow: 0 8px 20px rgba(164,21,26,.3); }
        .nwe-done-msg { font-size: 15px; color: #6b6e72; margin: 14px auto 0; max-width: 30ch; line-height: 1.5; }
        @media (max-width: 520px) { .nwe-fields { grid-template-columns: 1fr; } .nwe-fields .w { grid-column: auto; } }
      `}</style>
    </section>
  )
}