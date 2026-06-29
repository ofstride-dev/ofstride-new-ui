export function HeroSection() {
  return (
    <section className="bg-slate-950 py-20 text-white">
      <div className="container-page grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
        <div className="max-w-2xl">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-3 py-1 text-sm text-slate-200">
            <img src="/assets/logo/logo.svg" alt="Ofstride logo" className="h-6 w-6 rounded-full" />
            AI systems for modern growth teams
          </div>
          <h1 className="mt-6 text-4xl font-semibold leading-tight sm:text-5xl lg:text-6xl">
            Build smarter operations with AI that actually works
          </h1>
          <p className="mt-5 max-w-2xl text-lg text-slate-300">
            We help ambitious businesses deploy AI agents and workflow intelligence that improve decision-making, automate repeat work, and accelerate growth without adding complexity.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a className="btn bg-white text-slate-900 hover:bg-slate-100" href="/contact">Book a strategy call</a>
            <a className="btn border border-white/20 text-white hover:bg-white/10" href="#services">Explore the approach</a>
          </div>
          <div className="mt-8 flex flex-wrap gap-3 text-sm text-slate-300">
            <span className="metric-pill">⚡ Faster workflows</span>
            <span className="metric-pill">🧠 Smarter decisions</span>
            <span className="metric-pill">📈 Measurable ROI</span>
          </div>
        </div>
        <div className="hero-panel rounded-3xl p-8">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-primary-200">Why modern teams choose us</p>
          <div className="mt-6 space-y-4">
            {[
              ['Identify the leverage', 'We pinpoint where AI can create measurable business impact.'],
              ['Design the workflow', 'We turn ideas into practical systems your team can actually use.'],
              ['Scale with confidence', 'We create structure, governance, and adoption for long-term value.'],
            ].map(([title, body]) => (
              <div key={title} className="rounded-2xl border border-white/10 bg-slate-900/50 p-4">
                <p className="font-semibold">{title}</p>
                <p className="mt-1 text-sm text-slate-300">{body}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
