// src/sections/HeroSection.tsx
export function HeroSection() {
  return (
    <section className="relative overflow-hidden border-b border-white/5 py-24">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(93,124,193,0.18),transparent_24%),radial-gradient(circle_at_bottom_right,rgba(20,184,166,0.18),transparent_22%)]" />
      <div className="container-page relative grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
        <div className="max-w-2xl">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-3.5 py-1 text-xs font-semibold tracking-wide text-slate-300 backdrop-blur-md">
            <span className="flex h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
            AI systems for growth-stage operators
          </div>
          <h1 className="mt-6 text-4xl font-black tracking-tight leading-none sm:text-5xl lg:text-6xl text-white">
            Build smarter operations with AI that <span className="aintric-gradient-text">actually works</span>
          </h1>
          <p className="mt-5 max-w-xl text-sm leading-relaxed text-slate-400">
            We help ambitious businesses deploy AI agents and workflow intelligence that improve decision-making, automate repeat work, and accelerate growth without adding complexity.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-4">
            <a className="btn-aintric-primary" href="/contact">
              Book a strategy call
            </a>
            <a className="text-xs font-bold uppercase tracking-widest text-[#5D7CC1] hover:text-[#A9B9E2] transition-colors duration-200" href="#services">
              Explore the approach →
            </a>
          </div>
          <div className="mt-10 flex flex-wrap items-center gap-4 text-[10px] font-semibold uppercase tracking-[0.28em] text-slate-500">
            <span className="rounded-full border border-white/10 px-3 py-1">Enterprise AI</span>
            <span className="rounded-full border border-white/10 px-3 py-1">Automation</span>
            <span className="rounded-full border border-white/10 px-3 py-1">Governance</span>
          </div>
        </div>

        <div className="aintric-card p-8 bg-gradient-to-br from-white/[0.02] to-transparent">
          <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#5D7CC1]">
            Why modern teams choose us
          </p>
          <div className="mt-6 space-y-4">
            {[
              ['Identify the leverage', 'We pinpoint where AI can create measurable business impact.'],
              ['Design the workflow', 'We turn ideas into practical systems your team can actually use.'],
              ['Scale with confidence', 'We create structure, governance, and adoption for long-term value.'],
            ].map(([title, body]) => (
              <div key={title} className="rounded-2xl border border-white/[0.04] bg-slate-950/40 p-4 transition-all duration-300 hover:border-white/10">
                <p className="text-xs font-bold text-white tracking-tight">{title}</p>
                <p className="mt-1 text-[11px] leading-relaxed text-slate-400">{body}</p>
              </div>
            ))}
          </div>
          <div className="mt-6 grid grid-cols-3 gap-3 text-center">
            {[
              ['8–12', 'weeks'],
              ['315%', 'ROI uplift'],
              ['24/7', 'monitoring'],
            ].map(([value, label]) => (
              <div key={label} className="rounded-2xl border border-white/5 bg-white/[0.02] px-3 py-4">
                <p className="text-lg font-black text-white">{value}</p>
                <p className="text-[8px] font-semibold uppercase tracking-[0.28em] text-slate-500">{label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
