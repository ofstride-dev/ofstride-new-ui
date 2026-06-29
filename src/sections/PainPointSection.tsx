export function PainPointSection() {
  const painPoints = [
    'Manual work slowing down sales, support, and operations',
    'Teams using AI tools inconsistently without clear processes',
    'Leaders needing faster insights without adding overhead',
    'Growth initiatives getting stuck in disconnected workflows',
  ];

  return (
    <section className="bg-slate-900 py-20 text-white">
      <div className="container-page">
        <div className="grid gap-10 lg:grid-cols-2 items-center">
          <div>
            <p className="eyebrow text-primary-400">
              The Challenge
            </p>
            <h2 className="mt-4 text-3xl font-bold leading-tight">
              The growth trap: when activity is high but momentum is low
            </h2>
            <p className="mt-4 text-slate-400 leading-relaxed">
              As your business grows, fragmented workflows and reactive decision-making create drag across the company. 
              The real opportunity is not more tools — it is better systems that help teams move faster with confidence.
            </p>
            <ul className="mt-6 space-y-3">
              {painPoints.map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm text-slate-300">
                  <span className="mt-1 h-2 w-2 rounded-full bg-red-400 shrink-0" aria-hidden="true" />
                  {item}
                </li>
              ))}
            </ul>
            <a 
              href="/contact" 
              className="inline-flex items-center gap-2 mt-6 text-primary-400 hover:text-primary-300 text-sm font-medium transition"
            >
              Get your free assessment →
            </a>
          </div>
          <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
            <div className="space-y-5">
              {[
                { label: 'Operational Efficiency', value: 45, color: 'bg-red-400', status: 'Suboptimal' },
                { label: 'AI Workflow Adoption', value: 30, color: 'bg-amber-400', status: 'Low' },
                { label: 'Decision Velocity', value: 85, color: 'bg-emerald-400', status: 'With Ofstride' },
              ].map((bar) => (
                <div key={bar.label} className="insight-card">
                  <div className="flex justify-between text-sm mb-2">
                    <span className="text-slate-300">{bar.label}</span>
                    <span className={`font-semibold ${bar.color.replace('bg-', 'text-')}`}>{bar.status}</span>
                  </div>
                  <div className="h-2.5 rounded-full bg-white/10 overflow-hidden">
                    <div 
                      className={`h-full rounded-full ${bar.color} transition-all duration-1000`}
                      style={{ width: `${bar.value}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-6 rounded-xl bg-white/5 p-5 text-center border border-white/5">
              <p className="text-xs text-slate-500 uppercase tracking-wider">Potential Business Impact</p>
              <p className="mt-1 text-3xl font-bold gradient-text">20%–40% faster execution</p>
              <p className="text-xs text-slate-500 mt-1">For operations-heavy teams ready to scale</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
