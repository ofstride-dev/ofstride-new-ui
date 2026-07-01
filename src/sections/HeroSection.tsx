// src/sections/HeroSection.tsx
export function HeroSection() {
  return (
    <section className="relative overflow-hidden border-b border-white/5 py-24 lg:py-32">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(93,124,193,0.42),transparent_26%),radial-gradient(circle_at_bottom_right,rgba(20,184,166,0.24),transparent_22%)]" />
      <div className="container-page relative grid gap-14 lg:grid-cols-[1.02fr_0.98fr] lg:items-center">
        <div className="max-w-2xl">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-3.5 py-1 text-[10px] font-semibold uppercase tracking-[0.32em] text-slate-200 backdrop-blur-xl">
            <span className="flex h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
            Enterprise AI delivery studio
          </div>
          <h1 className="mt-6 text-4xl font-black tracking-[-0.07em] leading-[0.92] sm:text-5xl lg:text-6xl text-white">
            AI systems built to <span className="aintric-gradient-text">move the business</span>
          </h1>
          <p className="mt-5 max-w-2xl text-base leading-7 text-slate-400">
            We help teams architect, deploy, and scale AI workflows that improve decision speed, automate repeat work, and create measurable operating leverage in weeks—not years.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-4">
            <a className="btn-aintric-primary" href="/contact">
              Book a discovery call
            </a>
            <a className="text-xs font-bold uppercase tracking-[0.3em] text-[#5D7CC1] hover:text-[#A9B9E2] transition-colors duration-200" href="#services">
              Explore our model →
            </a>
          </div>
          <div className="mt-10 grid max-w-xl grid-cols-3 gap-3 text-center">
            {[
              ['8–12', 'Week sprints'],
              ['315%', 'Average ROI'],
              ['24/7', 'Monitoring'],
            ].map(([value, label]) => (
              <div key={label} className="rounded-2xl border border-white/5 bg-white/[0.02] px-3 py-4">
                <p className="text-2xl font-black tracking-[-0.05em] text-white">{value}</p>
                <p className="mt-1 text-[7px] font-semibold uppercase tracking-[0.3em] text-slate-500">{label}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="aintric-card max-w-[28rem] justify-self-end p-7 bg-gradient-to-br from-white/[0.02] to-transparent">
          <div className="flex items-center justify-between">
            <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#5D7CC1]">
              Operating blueprint
            </p>
            <span className="rounded-full border border-emerald-400/20 bg-emerald-400/10 px-2.5 py-1 text-[7px] font-semibold uppercase tracking-[0.3em] text-emerald-300">
              Live
            </span>
          </div>
          <div className="mt-6 space-y-4">
            {[
              ['Workflow mapping', 'Identify the highest leverage use cases across teams.'],
              ['Agent orchestration', 'Connect systems, data, and rules with governed automation.'],
              ['Adoption velocity', 'Train teams with clear ownership and measurable outcomes.'],
            ].map(([title, body]) => (
              <div key={title} className="rounded-2xl border border-white/[0.04] bg-slate-950/45 p-4 transition-all duration-300 hover:border-white/10">
                <div className="flex items-center justify-between">
                  <p className="text-sm font-semibold text-white tracking-tight">{title}</p>
                  <span className="h-2 w-2 rounded-full bg-[#5D7CC1]" />
                </div>
                <p className="mt-2 text-[11px] leading-relaxed text-slate-400">{body}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
