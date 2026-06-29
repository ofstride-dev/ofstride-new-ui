import { ConsultForm } from '../components/ConsultForm';
import { CalendlyEmbed } from '../components/Calendly/CalendlyEmbed';
import { SEO } from '../components/SEO';
import { siteContent } from '../data/siteContent';

export function Contact() {
  const calendlyUrl = (import.meta as ImportMeta & { env?: Record<string, string | undefined> }).env?.VITE_CALENDLY_URL || 'https://calendly.com/ofstride/30min';

  return (
    <>
      <SEO 
        title="Contact Engineering Operations — Ofstride Services LLP"
        description="Book a 30-minute system discovery review or securely transmit operational requirements."
        canonical="/contact"
      />
      <main className="py-12">
        <section className="relative max-w-6xl mx-auto px-6 mb-12">
          <div className="max-w-3xl">
            <span className="text-xs font-bold uppercase tracking-[0.25em] text-[#5D7CC1]">
              System Intake Terminal
            </span>
            <h1 className="mt-3 text-4xl font-bold text-white aintric-gradient-text">Connect With An Engineer</h1>
            <p className="mt-4 text-base text-slate-400 leading-relaxed max-w-xl">
              Initiate a live operational framework evaluation or securely route system specifications directly to our engineering coordinators.
            </p>
            
            <div className="mt-6 flex flex-wrap items-center gap-4 text-xs text-slate-400">
              <a href={`tel:${siteContent.brand.phone.replace(/\s/g, '')}`} className="inline-flex items-center gap-2 rounded-lg border border-white/5 bg-white/5 px-3 py-2 text-slate-300 hover:text-white transition">
                <span className="text-[#5D7CC1]">📞</span> {siteContent.brand.phone}
              </a>
              <a href={`mailto:${siteContent.brand.email}`} className="inline-flex items-center gap-2 rounded-lg border border-white/5 bg-white/5 px-3 py-2 text-slate-300 hover:text-white transition">
                <span className="text-[#5D7CC1]">✉️</span> {siteContent.brand.email}
              </a>
            </div>
          </div>
        </section>

        {/* Layout Container holding both Intake Form and Embedded Calendar Panel */}
        <section className="max-w-6xl mx-auto px-6">
          <div className="grid gap-8 lg:grid-cols-2">
            <div className="aintric-card">
              <div className="flex items-center gap-2 mb-4">
                <span className="h-2 w-2 rounded-full bg-emerald-500" />
                <p className="text-xs font-bold uppercase tracking-widest text-slate-400">Direct Calendar Link</p>
              </div>
              <h2 className="text-lg font-bold text-white">Book Infrastructure Sync</h2>
              <p className="text-xs text-slate-500 mt-1 mb-6">
                Reserve an agile 30-minute solution architecture window instantly below.
              </p>
              <div className="overflow-hidden rounded-xl border border-white/5 bg-slate-950">
                <CalendlyEmbed url={calendlyUrl} height={600} />
              </div>
            </div>
            
            <div className="aintric-card">
              <div className="flex items-center gap-2 mb-4">
                <span className="h-2 w-2 rounded-full bg-[#5D7CC1]" />
                <p className="text-xs font-bold uppercase tracking-widest text-slate-400">Encrypted Intake Matrix</p>
              </div>
              <h2 className="text-lg font-bold text-white">Transmit Operational Parameters</h2>
              <p className="text-xs text-slate-500 mt-1 mb-6">
                Outline specific tasks targeted for agentic automation deployment models.
              </p>
              <div className="text-sm text-slate-300">
                <ConsultForm 
                  submitLabel="Initialize Requirements Blueprint" 
                  compact 
                  description=""
                />
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
