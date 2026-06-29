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
        description="Book an implementation call or file an architecture review directly with our technical delivery leads."
        canonical="/contact"
      />
      <main>
        {/* Header Block */}
        <section className="bg-slate-950 py-16 text-white border-b border-slate-900">
          <div className="container-page px-6">
            <div className="max-w-3xl">
              <p className="text-xs font-bold uppercase tracking-[0.25em] text-[#5D7CC1]">
                System Intake
              </p>
              <h1 className="mt-3 text-4xl font-black tracking-tight text-white">Connect with an Architect</h1>
              <p className="mt-3 text-base text-slate-400 max-w-xl leading-relaxed">
                Schedule an live system mapping review with an implementation advisor or send your operational documentation securely.
              </p>
              
              <div className="mt-6 flex flex-wrap items-center gap-4 text-xs text-slate-300">
                <a href={`tel:${siteContent.brand.phone.replace(/\s/g, '')}`} className="inline-flex items-center gap-2 rounded-lg border border-slate-800 bg-slate-900/50 px-3 py-2 hover:border-[#5D7CC1] transition-colors">
                  <svg className="h-3.5 w-3.5 text-[#5D7CC1]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  {siteContent.brand.phone}
                </a>
                <a href={`mailto:${siteContent.brand.email}`} className="inline-flex items-center gap-2 rounded-lg border border-slate-800 bg-slate-900/50 px-3 py-2 hover:border-[#5D7CC1] transition-colors">
                  <svg className="h-3.5 w-3.5 text-[#5D7CC1]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  {siteContent.brand.email}
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Channels Selection Layout */}
        <section className="py-16 bg-slate-50">
          <div className="container-page max-w-6xl px-6">
            <div className="grid gap-8 lg:grid-cols-2">
              {/* Calendly Interactive Interface */}
              <div className="bg-white rounded-2xl border border-slate-200 shadow-xl p-6 md:p-8">
                <div className="flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-emerald-500" />
                  <p className="text-xs font-bold uppercase tracking-widest text-[#5D7CC1]">Direct Calendar Link</p>
                </div>
                <h2 className="mt-3 text-lg font-bold text-slate-900">Book Implementation Sync</h2>
                <p className="mt-1 text-xs text-slate-500">
                  Select a live 30-minute block directly on our operations dashboard.
                </p>
                <div className="mt-6 overflow-hidden rounded-xl border border-slate-200 bg-slate-50">
                  <CalendlyEmbed url={calendlyUrl} height={600} />
                </div>
              </div>
              
              {/* Form Communication Channel */}
              <div className="bg-white rounded-2xl border border-slate-200 shadow-xl p-6 md:p-8">
                <div className="flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-[#00209F]" />
                  <p className="text-xs font-bold uppercase tracking-widest text-[#5D7CC1]">Encrypted Intake Form</p>
                </div>
                <h2 className="mt-3 text-lg font-bold text-slate-900">Transmit Requirements</h2>
                <p className="mt-1 text-xs text-slate-500">
                  Provide overview profiles and specific target tasks requiring workflow model integration.
                </p>
                <div className="mt-6 text-sm text-slate-700">
                  <ConsultForm 
                    submitLabel="Initialize Inquiry Setup" 
                    compact 
                    description=""
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Corporate Assurance Badges */}
        <section className="bg-white py-12 border-t border-slate-200">
          <div className="container-page px-6">
            <div className="grid gap-6 md:grid-cols-3 text-center">
              <div className="p-4 bg-slate-50 border border-slate-200/60 rounded-xl">
                <div className="text-2xl mb-1">⏱️</div>
                <p className="font-bold text-slate-900 text-sm">Industrial Response</p>
                <p className="text-xs text-slate-500 mt-1">All engineering sync requests verified within 24 operational hours.</p>
              </div>
              <div className="p-4 bg-slate-50 border border-slate-200/60 rounded-xl">
                <div className="text-2xl mb-1">🛡️</div>
                <p className="font-bold text-slate-900 text-sm">NDAs Assured</p>
                <p className="text-xs text-slate-500 mt-1">Intellectual architecture data maps remain secure under legal protocols.</p>
              </div>
              <div className="p-4 bg-slate-50 border border-slate-200/60 rounded-xl">
                <div className="text-2xl mb-1">💼</div>
                <p className="font-bold text-slate-900 text-sm">Architecture Scoping</p>
                <p className="text-xs text-slate-500 mt-1">First diagnostic system assessment occurs completely complimentary.</p>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
