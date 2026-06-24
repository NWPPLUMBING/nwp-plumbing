export default function HowItWorks() {
  const steps = [
    {num:'1',title:'Call or send a quote request',desc:'Tell Nathan what is going on. Phone, message or use the form below. He will confirm availability and talk through the job with you straight away.'},
    {num:'2',title:'Get a fixed, itemised quote',desc:'We assess the job and put a full, written quote in front of you. Every line item, no mystery charges. You decide whether to go ahead. Zero obligation.'},
    {num:'3',title:'We do the work at the agreed price',desc:'Once you approve the quote, we get it done properly, on time and tidy. If anything changes mid-job, we stop and talk to you first.'},
    {num:'4',title:'Done, clean and guaranteed',desc:'Job complete, area left as we found it, and backed by our workmanship guarantee. We will also ask you for a Google review. Honest feedback only.'},
  ]
  return (
    <>
      <style>{`
        .steps-grid { display:grid; grid-template-columns:repeat(4,1fr); margin-top:32px; border:1.5px solid #e5e5e5; border-radius:10px; overflow:hidden; }
        .step-item { padding:24px 22px; border-right:1.5px solid #e5e5e5; }
        .step-item:last-child { border-right:none; }
        @media(max-width:768px){
          .steps-grid { grid-template-columns:1fr; border:none; border-radius:0; }
          .step-item { border-right:none; border-bottom:1.5px solid #e5e5e5; border-radius:0; }
          .step-item:last-child { border-bottom:none; }
        }
      `}</style>
      <section className="section">
        <div className="wrap">
          <span className="eyebrow">Simple from start to finish</span>
          <h2>How it works. No surprises, ever.</h2>
          <div className="steps-grid">
            {steps.map((step,i)=>(
              <div key={i} className="step-item">
                <div style={{fontSize:'2.2rem',fontWeight:800,color:'#e5e5e5',lineHeight:1,marginBottom:'12px'}}>{step.num}</div>
                <h3 style={{fontSize:'1rem',marginBottom:'6px'}}>{step.title}</h3>
                <p style={{fontSize:'0.875rem',color:'#444',lineHeight:1.6}}>{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}