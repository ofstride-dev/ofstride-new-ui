export function ServicesSection() {
  const services = [
    {
      title: 'Discover',
      description: 'Audit operations to map exact bottlenecks where automated execution paths maximize margins.',
      points: ['Opportunity Matrix Mapping', 'Process Data Analysis', 'Capital Conservation Projections'],
    },
    {
      title: 'Design',
      description: 'Prototype production-ready operational pipelines tailored directly to your tool infrastructure.',
      points: ['Agent Logic Architecture', 'API Platform Integration', 'Governance Boundary Controls'],
    },
    {
      title: 'Scale',
      description: 'Roll out automated systems seamlessly alongside your team with live telemetry monitoring logs.',
      points: ['Performance Optimization', 'Workflow Automation Rollout', 'Adoption Strategy Mapping'],
    },
  ];

  return (
    <section id="services" className="py-24 border-t border-slate-900/40">
      <div className="container-page">
        <div className="max-w-3xl mb-12">
          <span className="section-label">
            Operational Lifecycle
          </span>
          <h2 className="section-title aintric-gradient-text mt-3">
            From blueprint to execution, with precision
          </h2>
          <p className="section-copy mt-4 max-w-2xl">
            We move small businesses and growing companies away from fragmented experiments and toward production-grade systems built for real operations.
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-3">
          {services.map((service, idx) => (
            <article key={service.title} className="aintric-card flex flex-col justify-between p-6">
              <div>
                <div className="inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-br from-[#5D7CC1]/25 to-[#14B8A6]/20 border border-white/10 text-sm font-black text-[#A9B9E2] mb-6">
                  0{idx + 1}
                </div>
                <h3 className="text-xl font-bold text-white tracking-tight">{service.title}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-400">{service.description}</p>
              </div>
              
              <ul className="mt-6 pt-5 border-t border-white/5 space-y-3 text-sm font-medium text-slate-300">
                {service.points.map((point) => (
                  <li key={point} className="flex items-start gap-3">
                    <span className="mt-2 h-1.5 w-1.5 rounded-full bg-[#5D7CC1] shrink-0" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
