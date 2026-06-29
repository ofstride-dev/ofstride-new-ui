import React from 'react';
import { useNavigate } from 'react-router-dom';

export function HeroSection() {
  const navigate = useNavigate();

  const handleExploreServices = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    const element = document.getElementById('services');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="py-24 relative overflow-hidden">
      <div className="container-page grid gap-12 lg:grid-cols-[1.15fr_0.85fr] lg:items-center">
        <div className="max-w-2xl">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-xs font-semibold text-slate-300 tracking-wide">
            <span className="flex h-2 w-2 rounded-full bg-[#5D7CC1] animate-pulse" />
            Production-Ready AI Agent Infrastructure for MSMEs
          </div>
          <h1 className="mt-6 text-4xl font-black leading-tight sm:text-5xl lg:text-6xl text-white aintric-gradient-text">
            Build Smarter Operations With Automated Systems
          </h1>
          <p className="mt-5 max-w-xl text-sm md:text-base text-slate-400 leading-relaxed">
            We help growing businesses design and deploy deterministic autonomous agents and operational pipelines—improving margins, removing repeat tasks, and driving metric efficiency.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <button className="btn-aintric-primary" onClick={() => navigate('/contact')}>
              Book a Strategy Call
            </button>
            <button className="btn-aintric-secondary" onClick={handleExploreServices}>
              Explore the Approach
            </button>
          </div>
          <div className="mt-10 flex flex-wrap gap-4 text-xs font-bold uppercase tracking-wider text-slate-400">
            <span className="flex items-center gap-1.5 bg-white/5 px-3 py-1.5 rounded-lg border border-white/5">⚡ Accelerated Automation</span>
            <span className="flex items-center gap-1.5 bg-white/5 px-3 py-1.5 rounded-lg border border-white/5">🧠 Targeted Workflows</span>
            <span className="flex items-center gap-1.5 bg-white/5 px-3 py-1.5 rounded-lg border border-white/5">📈 Quantified ROI Metrics</span>
          </div>
        </div>

        <div className="aintric-card bg-gradient-to-br from-white/[0.03] to-transparent">
          <p className="text-xs font-bold uppercase tracking-[0.25em] text-[#A9B9E2]">Why Growth Teams Integrate Us</p>
          <div className="mt-6 space-y-4">
            {[
              ['Isolate High-Leverage Bottlenecks', 'We audit exactly where autonomous logic modules create capital retention advantages.'],
              ['Design Interconnected Agent Blueprints', 'We translate processing models into reliable micro-services your team can interact with.'],
              ['Scale Enterprise Workflows Confidently', 'We inject governance safeguards and structured tracking tools for lasting operational yield.'],
            ].map(([title, body]) => (
              <div key={title} className="rounded-xl border border-white/5 bg-slate-950/40 p-4 transition hover:border-white/10">
                <p className="font-bold text-sm text-white flex items-center gap-2">
                  <span className="text-[#5D7CC1]">✓</span> {title}
                </p>
                <p className="mt-1.5 text-xs text-slate-400 leading-relaxed">{body}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
