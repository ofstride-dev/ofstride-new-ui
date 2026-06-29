export function HeroSection() {
  return (
    <section className="bg-slate-950 py-20 text-white">
      <div className="container-page grid gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:items-center">
        <div>
          <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-3 py-1 text-sm text-slate-200">
            <img src="/assets/logo/logo.svg" alt="Ofstride logo" className="h-6 w-6 rounded-full" />
            AI agents for business growth, operations, and decision support
          </div>
          <h1 className="mt-6 text-4xl font-semibold leading-tight sm:text-5xl lg:text-6xl">
            Turn AI into a growth engine for your business
          </h1>
          <p className="mt-5 max-w-2xl text-lg text-slate-300">
            We help founders and leadership teams deploy practical AI agents and operating systems that improve execution, reduce manual work, and unlock faster growth across sales, support, finance, and operations.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a className="btn bg-white text-slate-900 hover:bg-slate-100" href="/contact">Book a strategy call</a>
            <a className="btn border border-white/20 text-white hover:bg-white/10" href="#services">See how it works</a>
          </div>
          <div className="mt-8 flex flex-wrap gap-3 text-sm text-slate-300">
            <span className="metric-pill">✓ Faster workflows</span>
            <span className="metric-pill">✓ Smarter decisions</span>
            <span className="metric-pill">✓ Measurable ROI</span>
          </div>
        </div>
        <div className="hero-panel rounded-3xl p-8">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-primary-200">Why teams choose us</p>
          <div className="mt-6 space-y-4">
            {[
              ['Clarify the problem', 'We turn messy priorities into actionable roadmaps.'],
              ['Align the team', 'We build practical operating rhythms that reduce friction.'],
              ['Move with confidence', 'You get clear ownership, milestones, and decision support.'],
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
