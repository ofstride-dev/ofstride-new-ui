export function ProcessSection() {
  const steps = [
    ['01', 'Discover', 'We map your current operating reality, bottlenecks, and goals.'],
    ['02', 'Design', 'We shape a focused plan with clear owners and next actions.'],
    ['03', 'Deliver', 'We help your team implement, measure, and improve over time.'],
  ];

  return (
    <section id="process" className="py-24 border-t border-slate-900/40">
      <div className="container-page">
        <div className="max-w-3xl mb-12">
          <span className="text-xs font-bold uppercase tracking-[0.3em] text-[#5D7CC1]">Our process</span>
          <h2 className="text-3xl md:text-4xl font-black text-white aintric-gradient-text mt-3">A simple, high-trust engagement model</h2>
          <p className="text-slate-400 text-sm mt-3 leading-relaxed max-w-xl">A practical path from initial conversation to measurable business results.</p>
        </div>
        
        <div className="grid gap-6 md:grid-cols-3">
          {steps.map(([step, title, body]) => (
            <div key={step} className="aintric-card flex flex-col justify-between">
              <div>
                <p className="text-xs font-bold uppercase tracking-wider text-[#5D7CC1]">{step}</p>
                <h3 className="mt-4 text-lg font-bold text-white tracking-tight">{title}</h3>
                <p className="mt-2.5 text-xs text-slate-400 leading-relaxed">{body}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
