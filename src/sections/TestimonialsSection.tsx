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
    <section className="py-20 bg-slate-50">
      <div className="container-page">
        <div className="text-center mb-12">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-primary-600">
            Client Stories
          </p>
          <h2 className="mt-3 text-3xl font-bold">Don't Take Our Word For It</h2>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {testimonials.map((t) => (
            <article key={t.author} className="card flex flex-col">
              <div className="flex-1">
                <svg className="h-8 w-8 text-primary-200 mb-3" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                </svg>
                <p className="text-lg text-slate-700 leading-relaxed">"{t.quote}"</p>
              </div>
              <div className="mt-6 pt-6 border-t border-slate-100">
                <div className="flex items-center gap-3">
                  <div className="h-10 w-10 rounded-full bg-primary-100 flex items-center justify-center text-primary-700 font-bold text-sm">
                    {t.initials}
                  </div>
                  <div>
                    <p className="text-sm font-semibold">{t.author}</p>
                    <p className="text-xs text-slate-500">{t.role}</p>
                  </div>
                </div>
                <p className="mt-3 text-sm font-semibold text-primary-600">{t.metric}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
