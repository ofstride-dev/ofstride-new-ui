import { ConsultForm } from '../components/ConsultForm';
import { CalendlyEmbed } from '../components/Calendly/CalendlyEmbed';
import { SEO } from '../components/SEO';
import { siteContent } from '../data/siteContent';

export function Contact() {
  const calendlyUrl = (import.meta as ImportMeta & { env?: Record<string, string | undefined> }).env?.VITE_CALENDLY_URL || 'https://calendly.com/ofstride/30min';

  return (
    <>
      <SEO 
        title="Contact Us — Book a Free Consultation"
        description="Book a 30-minute discovery call or send us a message. We typically respond within 24 hours."
        canonical="/contact"
      />
      <main>
        <section className="bg-slate-950 py-16 text-white">
          <div className="container-page">
            <div className="max-w-3xl">
              <p className="eyebrow text-primary-400">
                Start a Conversation
              </p>
              <h1 className="mt-3 text-4xl font-bold gradient-text">Contact Us</h1>
              <p className="mt-4 text-lg text-slate-300">
                Book a discovery call directly or send a message. Both paths are live and ready.
              </p>
              <div className="mt-6 flex flex-wrap items-center gap-4 text-sm text-slate-400">
                <a href={`tel:${siteContent.brand.phone.replace(/\s/g, '')}`} className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-2 hover:text-white transition">
                  <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  {siteContent.brand.phone}
                </a>
                <a href={`mailto:${siteContent.brand.email}`} className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-2 hover:text-white transition">
                  <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  {siteContent.brand.email}
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
                  <p className="text-sm font-semibold uppercase tracking-[0.25em] text-primary-600">Calendar</p>
                </div>
                <h2 className="mt-4 text-xl font-semibold text-slate-900">Book a 30-min discovery call</h2>
                <p className="mt-2 text-sm text-slate-600">
                  Pick a time that works for you. No back-and-forth emails needed.
                </p>
                <div className="mt-6 overflow-hidden rounded-2xl border border-slate-200 bg-slate-50">
                  <CalendlyEmbed url={calendlyUrl} height={650} />
                </div>
              </div>
              
              <div className="premium-card p-6 sm:p-8">
                <div className="flex items-center gap-2">
                  <span className="h-2.5 w-2.5 rounded-full bg-primary-600" />
                  <p className="text-sm font-semibold uppercase tracking-[0.25em] text-primary-600">Message</p>
                </div>
                <h2 className="mt-4 text-xl font-semibold text-slate-900">Or send a message</h2>
                <p className="mt-2 text-sm text-slate-600">
                  Share your requirements and we'll get back to you with next steps.
                </p>
                <div className="mt-6">
                  <ConsultForm 
                    submitLabel="Send message" 
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
                <div className="text-3xl mb-2" role="img" aria-label="Clock">⏱️</div>
                <p className="font-semibold">&lt; 24h Response</p>
                <p className="text-sm text-slate-500 mt-1">We reply to every inquiry within one business day.</p>
              </div>
              <div className="card">
                <div className="text-3xl mb-2" role="img" aria-label="Shield">🛡️</div>
                <p className="font-semibold">No Spam, Ever</p>
                <p className="text-sm text-slate-500 mt-1">Your information is confidential and never shared.</p>
              </div>
              <div className="card">
                <div className="text-3xl mb-2" role="img" aria-label="People">🤝</div>
                <p className="font-semibold">Free First Consultation</p>
                <p className="text-sm text-slate-500 mt-1">No obligation. We'll map your needs to the right solution.</p>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
