export function ProcessSection() {
  const steps = [
    ['01', 'Discover', 'We map your current operating reality, bottlenecks, and goals.'],
    ['02', 'Design', 'We shape a focused plan with clear owners and next actions.'],
    ['03', 'Deliver', 'We help your team implement, measure, and improve over time.'],
  ];

  return (
    <section className="bg-slate-50 py-20">
      <div className="container-page">
        <div className="max-w-3xl">
          <p className="eyebrow">Our process</p>
          <h2 className="section-title mt-3">A simple, high-trust engagement model</h2>
          <p className="section-copy">A practical path from initial conversation to measurable business results.</p>
        </div>
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {steps.map(([step, title, body]) => (
            <div key={step} className="service-card">
              <p className="text-sm font-semibold text-primary-600">{step}</p>
              <h3 className="mt-3 text-xl font-semibold text-slate-900">{title}</h3>
              <p className="mt-3 text-sm text-slate-600">{body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
