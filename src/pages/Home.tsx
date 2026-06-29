import React, { useState, useMemo } from 'react';
import { SEO } from '../components/SEO';
import { HeroSection } from "../sections/HeroSection";
import { ServicesSection } from "../sections/ServicesSection";
import { PainPointSection } from "../sections/PainPointSection";
import { TestimonialsSection } from "../sections/TestimonialsSection";
import { ProcessSection } from "../sections/ProcessSection";
import { AnalyticsSection } from "../sections/AnalyticsSection";

export function Home() {
  // ROI Calculation States
  const [hoursSpent, setHoursSpent] = useState<number>(160);
  const [laborCost, setLaborCost] = useState<number>(35);
  const [efficiency, setEfficiency] = useState<number>(45);

  const calculatedSavings = useMemo(() => {
    const defaultCost = hoursSpent * laborCost;
    const monthly = defaultCost * (efficiency / 100);
    return {
      monthly: Math.round(monthly),
      annual: Math.round(monthly * 12)
    };
  }, [hoursSpent, laborCost, efficiency]);

  return (
    <>
      <SEO 
        title="Ofstride Services LLP — Intelligent AI & Agentic Systems for MSMEs"
        description="Transforming operational bottlenecks using production-grade AI frameworks, agentic automation, and strategy consulting."
        canonical="/"
      />
      <main>
        <HeroSection />
        <ServicesSection />
        <PainPointSection />
        
        {/* Built-in Small Business Tool: ROI Automation Engine */}
        <section id="roi-calculator" className="py-20 bg-slate-100 border-t border-b border-slate-200/60">
          <div className="container-page max-w-4xl mx-auto px-4">
            <div className="text-center mb-10">
              <span className="text-xs font-bold uppercase tracking-widest text-[#5D7CC1] bg-white px-3 py-1 rounded-full border border-slate-200">
                ROI Quantifier
              </span>
              <h2 className="text-3xl font-bold text-slate-900 tracking-tight mt-3">Calculate Your Agentic Automation Value</h2>
              <p className="text-slate-500 text-sm mt-1">Fine tune the inputs below to calculate your projected capital conservation metric.</p>
            </div>

            <div className="bg-white rounded-2xl p-6 md:p-8 shadow-xl border border-slate-200 grid md:grid-cols-2 gap-8">
              <div className="space-y-6">
                <div>
                  <div className="flex justify-between text-xs font-semibold text-slate-700 mb-2">
                    <span>Monthly Labor Task Hours</span>
                    <span className="text-[#00209F] font-bold">{hoursSpent} Hours</span>
                  </div>
                  <input
                    type="range"
                    min="20"
                    max="500"
                    step="10"
                    value={hoursSpent}
                    onChange={(e) => setHoursSpent(Number(e.target.value))}
                    style={{ width: '100%', accentColor: '#00209F' }}
                  />
                </div>

                <div>
                  <div className="flex justify-between text-xs font-semibold text-slate-700 mb-2">
                    <span>Hourly Resource Labor Cost</span>
                    <span className="text-[#00209F] font-bold">${laborCost}/hr</span>
                  </div>
                  <input
                    type="range"
                    min="15"
                    max="150"
                    step="5"
                    value={laborCost}
                    onChange={(e) => setLaborCost(Number(e.target.value))}
                    style={{ width: '100%', accentColor: '#00209F' }}
                  />
                </div>

                <div>
                  <div className="flex justify-between text-xs font-semibold text-slate-700 mb-2">
                    <span>Estimated Efficiency Yield</span>
                    <span className="text-[#00209F] font-bold">{efficiency}% Gain</span>
                  </div>
                  <input
                    type="range"
                    min="10"
                    max="90"
                    step="5"
                    value={efficiency}
                    onChange={(e) => setEfficiency(Number(e.target.value))}
                    style={{ width: '100%', accentColor: '#00209F' }}
                  />
                </div>
              </div>

              <div className="bg-[#A9B9E2]/10 border border-[#A9B9E2]/40 rounded-xl p-6 flex flex-col justify-between">
                <div className="space-y-4">
                  <div>
                    <span className="text-[10px] font-bold uppercase tracking-widest text-[#5D7CC1]">Monthly Resource Value Saved</span>
                    <p className="text-3xl font-black text-[#00209F] mt-1">${calculatedSavings.monthly.toLocaleString()}</p>
                  </div>
                  <div className="border-t border-slate-200 pt-4">
                    <span className="text-[10px] font-bold uppercase tracking-widest text-[#5D7CC1]">Annual Reinvestable Capital Saved</span>
                    <p className="text-4xl font-black text-emerald-600 mt-1">${calculatedSavings.annual.toLocaleString()}</p>
                  </div>
                </div>
                <p className="text-[10px] text-slate-400 italic mt-4">*Calculated metrics map down cleanly to typical custom workflow integrations.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="cta-band py-16 text-white">
          <div className="container-page grid gap-8 lg:grid-cols-[1.15fr,0.85fr] items-center">
            <div className="max-w-2xl">
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-primary-200">
                Start a Conversation
              </p>
              <h2 className="mt-3 text-3xl font-bold leading-tight sm:text-4xl">Ready to Automate Scale?</h2>
              <p className="mt-4 text-primary-100">
                Let us map your operations to a high-fidelity AI roadmap — sharp, deterministic, and built for real business efficiency.
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                <a className="btn bg-white text-[#00209F] hover:bg-slate-100" href="/contact">
                  Book a Consultation
                </a>
                <a className="btn border border-white/30 text-white hover:bg-white/10" href="#services">
                  Explore Ecosystem
                </a>
              </div>
            </div>
            <div className="grid grid-cols-3 gap-4 text-center">
              <div className="kpi-card">
                <p className="text-3xl font-bold">&lt; 24h</p>
                <p className="mt-1 text-xs text-primary-200">Response SLA</p>
              </div>
              <div className="kpi-card">
                <p className="text-3xl font-bold">40%+</p>
                <p className="mt-1 text-xs text-primary-200">Avg Efficiency</p>
              </div>
              <div className="kpi-card">
                <p className="text-3xl font-bold">MSME</p>
                <p className="mt-1 text-xs text-primary-200">Optimized</p>
              </div>
            </div>
          </div>
        </section>
        
        <TestimonialsSection />
        <ProcessSection />
        <AnalyticsSection />
      </main>
    </>
  );
}
