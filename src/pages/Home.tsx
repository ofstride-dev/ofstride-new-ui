// src/pages/Home.tsx
import { SEO } from '../components/SEO';
import { HeroSection } from "../sections/HeroSection";
import { ServicesSection } from "../sections/ServicesSection";
import { PainPointSection } from "../sections/PainPointSection";
import { TestimonialsSection } from "../sections/TestimonialsSection";
import { ProcessSection } from "../sections/ProcessSection";
import { AnalyticsSection } from "../sections/AnalyticsSection";

export function Home() {
  return (
    <>
      <SEO 
        title="Ofstride Services LLP — Premium Consulting for MSMEs"
        description="Expert consulting across HR, Finance, Legal, and IT. Helping MSMEs take bigger strides towards success since 2019."
        canonical="/"
      />
      <main>
        <HeroSection />
        <ServicesSection />
        <PainPointSection />
        
        {/* RECONFIGURED HIGH-CONVERSION CTA MATRIX */}
        <section className="py-28 border-t border-b border-white/5 bg-gradient-to-b from-transparent to-slate-950/30">
          <div className="container-page grid gap-12 lg:grid-cols-[1.02fr_0.98fr] items-center">
            <div className="max-w-xl">
              <span className="text-xs font-bold uppercase tracking-[0.3em] text-[#5D7CC1]">
                Start a Conversation
              </span>
              <h2 className="mt-4 text-3xl md:text-4xl font-black text-white tracking-tight leading-none">
                Ready to build what's next?
              </h2>
              <p className="mt-4 text-sm leading-relaxed text-slate-400">
                Talk to an Ofstride systems architect. We will map your operational bottlenecks to a practical workflow automation blueprint — clear, measurable, and tailored for growth.
              </p>
              
              <div className="mt-10 grid grid-cols-3 gap-4 border-t border-white/5 pt-8 text-left">
                {[
                  ['< 24h', 'Response Time'],
                  ['315%', 'Avg. Project ROI'],
                  ['65+', 'Global Clients']
                ].map(([stat, label]) => (
                  <div key={label}>
                    <p className="text-xl font-black text-white tracking-tight">{stat}</p>
                    <p className="mt-1 text-[10px] font-semibold uppercase tracking-wider text-slate-500">{label}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="aintric-card p-8 bg-gradient-to-tr from-white/[0.01] to-transparent">
              <h3 className="text-sm font-bold text-white tracking-wide uppercase mb-6">
                Request a Discovery Consultation
              </h3>
              <div className="space-y-4">
                <a className="btn-aintric-primary w-full block text-center" href="/contact">
                  Book a Consultation Session →
                </a>
                <p className="text-center text-[10px] text-slate-500 font-medium tracking-wide uppercase mt-3">
                  No obligation • Initial system scoping included
                </p>
              </div>
            </div>
          </div>
        </section>

        <ProcessSection />
        <AnalyticsSection />
        <TestimonialsSection />
      </main>
    </>
  );
}
