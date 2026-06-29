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
        
        <section className="cta-band py-16 text-white">
          <div className="container-page grid gap-8 lg:grid-cols-[1.2fr,0.8fr] items-center">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-primary-200">
                Start a Conversation
              </p>
              <h2 className="mt-3 text-3xl font-bold">Ready to Build What's Next?</h2>
              <p className="mt-4 text-primary-100">
                Let us map your growth blockers to a practical AI roadmap — clear, measurable, and designed for real business momentum.
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                <a className="btn bg-white text-primary-700 hover:bg-primary-50" href="/contact">
                  Book a Consultation
                </a>
                <a className="btn border border-white/30 text-white hover:bg-white/10" href="/services">
                  Explore Services
                </a>
              </div>
            </div>
            <div className="grid grid-cols-3 gap-4 text-center">
              <div className="kpi-card">
                <p className="text-3xl font-bold">&lt; 24h</p>
                <p className="mt-1 text-xs text-primary-200">Response Time</p>
              </div>
              <div className="kpi-card">
                <p className="text-3xl font-bold">315%</p>
                <p className="mt-1 text-xs text-primary-200">Avg. Project ROI</p>
              </div>
              <div className="kpi-card">
                <p className="text-3xl font-bold">65+</p>
                <p className="mt-1 text-xs text-primary-200">Clients Served</p>
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
