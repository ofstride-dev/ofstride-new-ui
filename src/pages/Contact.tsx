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
      <main>
        <section className="bg-slate-950 py-16 text-white">
          <div className="container-page">
            <div className="max-w-3xl">
              <p className="eyebrow text-primary-200">
                System Intake
              </p>
              <h1 className="mt-3 text-4xl font-bold gradient-text">Contact Our Engineers</h1>
              <p className="mt-4 text-lg text-slate-300">
                Connect with an automation architect or schedule your live architectural review session seamlessly.
              </p>
              <div className="mt-6 flex flex-wrap items-center gap-4 text-sm text-slate-400">
                <a href={`tel:${siteContent.brand.phone.replace(/\s/g, '')}`} className="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-4 py-2.5 hover:text-white transition">
                  <span className="text-[#5D7CC1]">📞</span> {siteContent.brand.phone}
                </a>
                <a href={`mailto:${siteContent.brand.email}`} className="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-4 py-2.5 hover:text-white transition">
                  <span className="text-[#5D7CC1]">✉️</span> {siteContent.brand.email}
                </a>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16">
          <div className="container-page max-w-6xl">
            <div className="grid gap-8 lg:grid-cols-2">
              <div className="premium-card p-6 sm:p-8">
                <div className="flex items-center gap-2">
                  <span className="h-2.5 w-2.5 rounded-full bg-emerald-400" />
                  <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#00209F]">Calendar Engine</p>
                </div>
                <h2 className="mt-4 text-xl font-semibold text-slate-900">Book Infrastructure Sync</h2>
                <p className="mt-2 text-sm text-slate-600">
                  Select a live discovery window directly via our scheduling calendar hub.
                </p>
                <div className="mt-6 overflow-hidden rounded-2xl border border-slate-200 bg-slate-50">
                  <CalendlyEmbed url={calendlyUrl} height={650} />
                </div>
              </div>
              
              <div className="premium-card p-6 sm:p-8">
                <div className="flex items-center gap-2">
                  <span className="h-2.5 w-2.5 rounded-full bg-[#00209F]" />
                  <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#00209F]">Intake Transmission</p>
                </div>
                <h2 className="mt-4 text-xl font-semibold text-slate-900">Secure Message Routing</h2>
                <p className="mt-2 text-sm text-slate-600">
                  Provide project parameters and operational targets to generate compliance profiles.
                </p>
                <div className="mt-6">
                  <ConsultForm 
                    submitLabel="Initialize Requirements Setup" 
                    compact 
                    description=""
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-slate-50 py-12">
          <div className="container-page">
            <div className="grid gap-6 md:grid-cols-3 text-center">
              <div className="card">
                <div className="text-3xl mb-2">⏱️</div>
                <p className="font-semibold">&lt; 24h Response SLA</p>
                <p className="text-sm text-slate-500 mt-1">Every system intake receives a design proposal back within a single business day.</p>
              </div>
              <div className="card">
                <div className="text-3xl mb-2">🛡️</div>
                <p className="font-semibold">Confidentiality Assured</p>
                <p className="text-sm text-slate-500 mt-1">All data parameters remain strictly isolated under automated security provisions.</p>
              </div>
              <div className="card">
                <div className="text-3xl mb-2">🤝</div>
                <p className="font-semibold">Complimentary System Review</p>
                <p className="text-sm text-slate-500 mt-1">Your initial technical exploratory sync includes an active workflow roadmap proposal.</p>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
