import fs from 'fs'
import path from 'path'
import { SUBURB_LINKS } from '@/lib/suburbs'
const suburbs = [
  'Parramatta','Liverpool','Blacktown','Penrith','Fairfield','Cabramatta','Bankstown',
  'Castle Hill','Rouse Hill','Mount Druitt','Hornsby','Ryde','Chatswood','Strathfield',
  'Burwood','Hurstville','Sydney CBD','Sutherland','Manly','Bondi',
]
const suburbLinks = SUBURB_LINKS
export default function Areas() {
  const settingsPath = path.join(process.cwd(), 'content/settings/main.json')
  const settings = JSON.parse(fs.readFileSync(settingsPath, 'utf-8'))
  return (
    <>
      <style>{`
        .areas-grid { display:grid; grid-template-columns:1fr 1fr; gap:48px; align-items:start; }
        @media(max-width:768px){ .areas-grid { grid-template-columns:1fr; gap:28px; } }
      `}</style>
      <section className="section section--alt">
        <div className="wrap areas-grid">
          <div>
            <span className="eyebrow">Where we work</span>
            <h2>Licensed plumber near you, across Sydney</h2>
            <p style={{marginTop:'10px',maxWidth:'500px'}}>
              Based in Liverpool, our team covers suburbs right across Sydney. Not sure if we cover yours? Just give us a call.
            </p>
            <div style={{display:'flex',flexWrap:'wrap',gap:'7px',marginTop:'16px'}}>
              {suburbs.map((suburb,i)=>{
                const href = suburbLinks[suburb]
                const base = {background:'#fff',border:'1.5px solid #e5e5e5',borderRadius:'100px',padding:'5px 14px',fontSize:'0.82rem',fontWeight:600,color:'#444'}
                return href ? (
                  <a key={i} href={href} style={{...base,color:'#a4151a',borderColor:'#f5c0c0',textDecoration:'none'}}>{suburb}</a>
                ) : (
                  <span key={i} style={base}>{suburb}</span>
                )
              })}
            </div>
            <div style={{fontSize:'clamp(1.2rem,2.5vw,1.6rem)',fontWeight:800,fontStyle:'italic',color:'#a4151a',marginTop:'14px'}}>and everything in between</div>
          </div>
          <div style={{background:'#1c1c1c',borderRadius:'14px',padding:'28px'}}>
            <h3 style={{color:'#fff',marginBottom:'6px'}}>Get in touch fast</h3>
            <p style={{color:'rgba(255,255,255,0.55)',fontSize:'0.9rem',marginBottom:'24px'}}>
              Fastest way to get a fixed quote and lock in a time. Call or message Nathan directly.
            </p>
            {[
              {icon:'📞',label:'Call or SMS',val:settings.phone,href:`tel:+61${settings.phone.replace(/\s/g,'').replace(/^0/,'')}`},
{icon:'✉️',label:'Email',val:settings.email,href:`mailto:${settings.email}`},
{icon:'🕐',label:'Hours',val:settings.hours,href:null},
            ].map((row,i)=>(
              <div key={i} style={{display:'flex',gap:'12px',alignItems:'center',padding:'14px 0',borderBottom:i<2?'1px solid rgba(255,255,255,0.08)':'none'}}>
                <div style={{width:'38px',height:'38px',borderRadius:'8px',background:'rgba(164,21,26,0.25)',display:'flex',alignItems:'center',justifyContent:'center',flexShrink:0,fontSize:'1rem'}}>{row.icon}</div>
                <div>
                  <div style={{fontSize:'0.72rem',textTransform:'uppercase',letterSpacing:'0.07em',fontWeight:700,color:'rgba(255,255,255,0.4)',marginBottom:'2px'}}>{row.label}</div>
                  {row.href ? (
                    <a href={row.href} style={{fontSize:'0.95rem',fontWeight:600,color:'#fff',textDecoration:'none'}}>{row.val}</a>
                  ) : (
                    <span style={{fontSize:'0.95rem',fontWeight:600,color:'#fff'}}>{row.val}</span>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}