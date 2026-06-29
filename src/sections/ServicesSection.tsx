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
          <span className="text-xs font-bold uppercase tracking-[0.3em] text-[#5D7CC1]">
            Operational Lifecycle
          </span>
          <h2 className="text-3xl md:text-4xl font-black text-white aintric-gradient-text mt-3">
            From Blueprint to Execution, with Precision
          </h2>
          <p className="text-slate-400 text-sm mt-3 leading-relaxed max-w-xl">
            We move small businesses and growing companies away from fragmented experiments and toward production-grade systems built for real operations.
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-3">
          {services.map((service, idx) => (
            <article key={service.title} className="aintric-card flex flex-col justify-between">
              <div>
                <div className="inline-flex h-9 w-9 items-center justify-center rounded-lg bg-[#00209F]/20 border border-[#00209F]/40 text-xs font-bold text-[#A9B9E2] mb-5">
                  0{idx + 1}
                </div>
                <h3 className="text-lg font-bold text-white tracking-tight">{service.title}</h3>
                <p className="mt-3 text-xs text-slate-400 leading-relaxed">{service.description}</p>
              </div>
              
              <ul className="mt-6 pt-5 border-t border-white/5 space-y-2 text-xs font-medium text-slate-300">
                {service.points.map((point) => (
                  <li key={point} className="flex items-center gap-2">
                    <span className="h-1 w-1 rounded-full bg-[#5D7CC1]" />
                    {point}
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
