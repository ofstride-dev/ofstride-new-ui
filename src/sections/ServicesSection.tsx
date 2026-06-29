export function ServicesSection() {
  const services = [
    {
      title: 'Strategy',
      description: 'Clarify priorities, operating models, and growth opportunities before you invest in execution.',
      points: ['Roadmaps', 'Governance', 'Decision support'],
    },
    {
      title: 'Build',
      description: 'Implement the systems, processes, and leadership rituals that make scale sustainable.',
      points: ['Enablement', 'Process design', 'Change management'],
    },
    {
      title: 'Scale',
      description: 'Create repeatable structures so you can expand without losing control or speed.',
      points: ['Analytics', 'Automation', 'High-performance teams'],
    },
  ];

  return (
    <section id="services" className="py-20 bg-white">
      <div className="container-page">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-primary-600">Service framing</p>
          <h2 className="mt-3 text-3xl font-bold text-slate-900">Strategy → Build → Scale</h2>
          <p className="mt-4 text-lg text-slate-600">We help growth-stage teams bridge strategy and execution with a practical, outcomes-first approach.</p>
        </div>
        <div className="mt-10 grid gap-6 lg:grid-cols-3">
          {services.map((service) => (
            <article key={service.title} className="card">
              <p className="text-sm font-semibold uppercase tracking-[0.25em] text-primary-600">{service.title}</p>
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
