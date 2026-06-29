const testimonials = [
  {
    quote: "Ofstride transformed our hiring process. We reduced time-to-hire by 60% and found quality candidates we wouldn't have reached otherwise.",
    author: 'Rajesh Kumar',
    role: 'CEO, TechStart India',
    metric: '60% faster hiring',
    initials: 'RK',
  },
  {
    quote: "Their financial advisory helped us secure Series A funding with clean books and a compelling growth narrative. Truly strategic partners.",
    author: 'Priya Sharma',
    role: 'Founder, GreenLeaf Organics',
    metric: '₹2.5Cr funding raised',
    initials: 'PS',
  },
  {
    quote: "The legal compliance audit saved us from a potential regulatory nightmare. Proactive, thorough, and business-friendly approach.",
    author: 'Amit Patel',
    role: 'COO, Manufacturing Co.',
    metric: 'Zero compliance issues',
    initials: 'AP',
  },
];

export function TestimonialsSection() {
  return (
    <section id="testimonials" className="py-24 border-t border-slate-900/40">
      <div className="container-page">
        <div className="max-w-3xl mb-12">
          <span className="text-xs font-bold uppercase tracking-[0.3em] text-[#5D7CC1]">Client Stories</span>
          <h2 className="text-3xl md:text-4xl font-black text-white aintric-gradient-text mt-3">Don't Take Our Word For It</h2>
          <p className="text-slate-400 text-sm mt-3 leading-relaxed max-w-xl">A few examples of how our team helps founders and operators turn AI into practical growth and execution gains.</p>
        </div>
        
        <div className="grid gap-6 md:grid-cols-3">
          {testimonials.map((t) => (
            <article key={t.author} className="aintric-card flex flex-col justify-between">
              <div className="flex-1">
                <svg className="mb-4 h-6 w-6 text-[#5D7CC1]/30" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                </svg>
                <p className="text-sm leading-relaxed text-slate-300">"{t.quote}"</p>
              </div>
              <div className="mt-6 border-t border-white/5 pt-5">
                <div className="flex items-center gap-3">
                  <div className="flex h-9 w-9 items-center justify-center rounded-full bg-[#00209F]/20 border border-[#00209F]/40 text-xs font-bold text-[#A9B9E2]">
                    {t.initials}
                  </div>
                  <div>
                    <p className="text-xs font-bold text-white">{t.author}</p>
                    <p className="text-[11px] text-slate-500">{t.role}</p>
                  </div>
                </div>
                <p className="mt-3 text-xs font-bold text-[#5D7CC1]">{t.metric}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
