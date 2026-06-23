export default function SideContacts() {
  return (
    <div style={{position:'fixed',right:0,top:'50%',transform:'translateY(-50%)',zIndex:150,display:'flex',flexDirection:'column',gap:0}}>
      
        href="tel:+61477160911"
        title="Call Nathan"
        style={{display:'flex',alignItems:'center',gap:'10px',background:'#1c1c1c',color:'#fff',textDecoration:'none',padding:'13px 14px',borderLeft:'3px solid #a4151a',borderRadius:'8px 0 0 0',overflow:'hidden',whiteSpace:'nowrap',maxWidth:'48px',transition:'max-width 0.25s, background 0.18s'}}
        onMouseEnter={e => {
          const el = e.currentTarget
          el.style.maxWidth = '220px'
          el.style.background = '#a4151a'
        }}
        onMouseLeave={e => {
          const el = e.currentTarget
          el.style.maxWidth = '48px'
          el.style.background = '#1c1c1c'
        }}
      >
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" style={{flexShrink:0}}>
          <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.3 11.69 19.79 19.79 0 01.22 3.06 2 2 0 012.22 1h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 8.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"/>
        </svg>
        <span style={{fontSize:'0.82rem',fontWeight:700,letterSpacing:'0.02em'}}>0477 160 911</span>
      </a>
      
        href="mailto:nwpplumbing@outlook.com"
        title="Email Nathan"
        style={{display:'flex',alignItems:'center',gap:'10px',background:'#1c1c1c',color:'#fff',textDecoration:'none',padding:'13px 14px',borderLeft:'3px solid #a4151a',borderTop:'1px solid rgba(255,255,255,0.08)',borderRadius:'0 0 0 8px',overflow:'hidden',whiteSpace:'nowrap',maxWidth:'48px',transition:'max-width 0.25s, background 0.18s'}}
        onMouseEnter={e => {
          const el = e.currentTarget
          el.style.maxWidth = '220px'
          el.style.background = '#a4151a'
        }}
        onMouseLeave={e => {
          const el = e.currentTarget
          el.style.maxWidth = '48px'
          el.style.background = '#1c1c1c'
        }}
      >
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" style={{flexShrink:0}}>
          <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
          <polyline points="22,6 12,13 2,6"/>
        </svg>
        <span style={{fontSize:'0.82rem',fontWeight:700,letterSpacing:'0.02em'}}>Send an email</span>
      </a>
    </div>
  )
}