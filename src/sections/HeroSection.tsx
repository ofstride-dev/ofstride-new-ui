// src/sections/HeroSection.tsx
export function HeroSection() {
  return (
    <section className="relative py-24 overflow-hidden border-b border-white/5">
      <div className="container-page grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
        <div className="max-w-2xl">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-3.5 py-1 text-xs font-semibold tracking-wide text-slate-300 backdrop-blur-md">
            <span className="flex h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
            AI systems for modern growth teams
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
              <div key={title} className="p-4 rounded-xl border border-white/[0.04] bg-slate-950/40 transition-all duration-300 hover:border-white/10">
                <p className="text-xs font-bold text-white tracking-tight">{title}</p>
                <p className="mt-1 text-[11px] leading-relaxed text-slate-400">{body}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
