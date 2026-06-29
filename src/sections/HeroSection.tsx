export function HeroSection() {
  return (
    <section className="bg-slate-950 py-20 text-white">
      <div className="container-page grid gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:items-center">
        <div>
          <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-3 py-1 text-sm text-slate-200">
            <span className="h-2.5 w-2.5 rounded-full bg-emerald-400" />
            Trusted by fast-moving MSMEs since 2019
          </div>
          <h1 className="mt-6 text-4xl font-semibold leading-tight sm:text-5xl lg:text-6xl">
            Premium consulting that turns complexity into momentum
          </h1>
          <p className="mt-5 max-w-2xl text-lg text-slate-300">
            Strategy, execution, and operations support for HR, finance, legal, and technology — built to help ambitious teams scale without friction.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a className="btn bg-white text-slate-900 hover:bg-slate-100" href="/contact">Book a consultation</a>
            <a className="btn border border-white/20 text-white hover:bg-white/10" href="#services">Explore services</a>
          </div>
          <div className="mt-8 flex flex-wrap gap-6 text-sm text-slate-300">
            <span>✓ 24-hour response</span>
            <span>✓ Hands-on delivery</span>
            <span>✓ Clear ROI framing</span>
          </div>
        </div>
        <div className="rounded-3xl border border-white/10 bg-white/10 p-8 shadow-2xl shadow-black/20">
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
