const steps = [
  {
    num: '1',
    title: 'Call or send a quote request',
    desc: 'Tell Nathan what is going on. Phone, message or use the form below. He will confirm availability and talk through the job with you straight away.',
  },
  {
    num: '2',
    title: 'Get a fixed, itemised quote',
    desc: 'We assess the job and put a full, written quote in front of you. Every line item, no mystery charges. You decide whether to go ahead. Zero obligation.',
  },
  {
    num: '3',
    title: 'We do the work at the agreed price',
    desc: 'Once you approve the quote, we get it done properly, on time and tidy. If anything changes mid-job, we stop and talk to you first.',
  },
  {
    num: '4',
    title: 'Done, clean and guaranteed',
    desc: 'Job complete, area left as we found it, and backed by our workmanship guarantee. We will also ask you for a Google review. Honest feedback only.',
  },
]

export default function HowItWorks() {
  return (
    <section className="section">
      <div className="wrap">
        <span className="eyebrow">Simple from start to finish</span>
        <h2>How it works. No surprises, ever.</h2>

        <div style={{display:'grid',gridTemplateColumns:'repeat(4,1fr)',marginTop:'32px',border:'1.5px solid #e5e5e5',borderRadius:'10px',overflow:'hidden'}}>
          {steps.map((step, i) => (
            <div key={i} style={{padding:'24px 22px',borderRight:i<3?'1.5px solid #e5e5e5':'none'}}>
              <div style={{fontSize:'2.2rem',fontWeight:800,color:'#e5e5e5',lineHeight:1,marginBottom:'12px'}}>
                {step.num}
              </div>
              <h3 style={{fontSize:'1rem',marginBottom:'6px'}}>{step.title}</h3>
              <p style={{fontSize:'0.875rem',color:'#444',lineHeight:1.6}}>{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}