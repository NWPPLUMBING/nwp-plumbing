export default function TrustStrip() {
  const items = [
    'Fixed itemised quote agreed before any work starts',
    '$0 call-out fee when work proceeds',
    'Licensed and fully insured',
    'Available Mon-Sun, 24/7',
    '24/7 emergency plumber Sydney',
  ]

  return (
    <>
      <style>{`
        .trust-strip-inner {
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          gap: 6px 28px;
          align-items: center;
        }
        @media (max-width: 768px) {
          .trust-strip-inner {
            flex-direction: column;
            align-items: flex-start;
            gap: 8px;
          }
        }
      `}</style>
      <div style={{background:'#1c1c1c',padding:'14px 0',width:'100%'}}>
        <div className="wrap trust-strip-inner">
          {items.map((item, i) => (
            <div key={i} style={{display:'flex',alignItems:'center',gap:'8px',fontSize:'0.82rem',fontWeight:600,color:'rgba(255,255,255,0.8)'}}>
              <span style={{width:'6px',height:'6px',background:'#a4151a',borderRadius:'50%',flexShrink:0}}></span>
              {item}
            </div>
          ))}
        </div>
      </div>
    </>
  )
}