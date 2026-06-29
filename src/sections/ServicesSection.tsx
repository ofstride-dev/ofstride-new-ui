export function ServicesSection() {
  const services = [
    {
      title: 'Discover',
      description: 'Identify where AI can create the highest business impact across customer operations, internal workflows, and growth initiatives.',
      points: ['Opportunity mapping', 'Process analysis', 'ROI framing'],
    },
    {
      title: 'Design',
      description: 'Prototype practical AI agents and workflows that fit your team, tools, and operating model.',
      points: ['Agent workflows', 'Tool integration', 'Governance setup'],
    },
    {
      title: 'Scale',
      description: 'Deploy, measure, and optimize so AI becomes a reliable driver of productivity and growth.',
      points: ['Performance tracking', 'Automation rollout', 'Team adoption'],
    },
  ];

  return (
    <section id="services" className="bg-white py-20">
      <div className="container-page">
        <div className="max-w-3xl">
          <p className="eyebrow">Service framing</p>
          <h2 className="section-title mt-3">From idea to implementation, with clarity</h2>
          <p className="section-copy">We help ambitious businesses move from experimentation to execution with AI systems that are practical, measurable, and built for real growth.</p>
        </div>
        <div className="mt-10 grid gap-6 lg:grid-cols-3">
          {services.map((service) => (
            <article key={service.title} className="service-card">
              <div className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-primary-100 text-primary-700">
                {service.title === 'Discover' ? '01' : service.title === 'Design' ? '02' : '03'}
              </div>
              <p className="mt-5 text-sm font-semibold uppercase tracking-[0.25em] text-primary-600">{service.title}</p>
              <h3 className="mt-3 text-xl font-semibold text-slate-900">{service.title}</h3>
              <p className="mt-3 text-sm text-slate-600">{service.description}</p>
              <ul className="mt-5 space-y-2 text-sm text-slate-600">
                {service.points.map((point) => (
                  <li key={point} className="flex items-center gap-2"><span className="h-2 w-2 rounded-full bg-primary-600" />{point}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
