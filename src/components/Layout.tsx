import { Link, useLocation, useNavigate } from 'react-router-dom';

export function Layout({ children }: { children: React.ReactNode }) {
  const location = useLocation();
  const navigate = useNavigate();

  const handleScrollToId = (e: React.MouseEvent<HTMLAnchorElement>, elementId: string) => {
    e.preventDefault();
    if (location.pathname !== '/') {
      navigate('/');
      setTimeout(() => {
        const target = document.getElementById(elementId);
        if (target) target.scrollIntoView({ behavior: 'smooth' });
      }, 250);
    } else {
      const target = document.getElementById(elementId);
      if (target) target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="flex flex-col min-h-screen bg-[#030712]">
      <header className="sticky top-0 z-50 border-b border-white/5 bg-[#050816]/70 backdrop-blur-2xl">
        <div className="container-page flex items-center justify-between py-4">
          <Link to="/" className="flex items-center gap-3">
            <img src="/assets/logo/logo.png" alt="Ofstride logo" className="h-10 w-10 object-contain" />
            <span className="flex flex-col leading-none">
              <span className="text-[0.92rem] font-black tracking-[0.38em] text-white uppercase">Ofstride</span>
              <span className="text-[0.46rem] font-semibold uppercase tracking-[0.34em] text-[#A9B9E2] mt-1">Services LLP</span>
            </span>
          </Link>
          <nav className="hidden md:flex items-center gap-8 text-sm font-medium">
            <Link to="/" className="text-slate-300 transition hover:text-white">Home</Link>
            <a href="#services" onClick={(e) => handleScrollToId(e, 'services')} className="text-slate-300 transition hover:text-white">Services</a>
            <a href="#analytics" onClick={(e) => handleScrollToId(e, 'analytics')} className="text-slate-300 transition hover:text-white">Impact</a>
            <a href="#process" onClick={(e) => handleScrollToId(e, 'process')} className="text-slate-300 transition hover:text-white">Process</a>
            <a href="#testimonials" onClick={(e) => handleScrollToId(e, 'testimonials')} className="text-slate-300 transition hover:text-white">Stories</a>
            <Link to="/contact" className="btn-aintric-primary !py-2 !px-4 !text-[10px]">Book Call</Link>
          </nav>
        </div>
      </header>

      <main className="flex-grow">{children}</main>

      <footer className="mt-24 border-t border-white/10 bg-[linear-gradient(180deg,rgba(8,15,28,0.65),rgba(4,8,17,0.92))]">
        <div className="container-page grid grid-cols-1 gap-12 px-6 py-16 md:grid-cols-12">
          <div className="md:col-span-4">
            <div className="flex items-center gap-3">
              <img src="/assets/logo/logo.png" alt="Ofstride logo" className="h-10 w-10 object-contain" />
              <div className="flex flex-col leading-none">
                <span className="text-base font-black tracking-[0.35em] text-white uppercase">Ofstride</span>
                <span className="text-[0.46rem] font-semibold uppercase tracking-[0.32em] text-[#A9B9E2] mt-1">Services LLP</span>
              </div>
            </div>
            <p className="mt-6 max-w-xs text-sm leading-relaxed text-slate-400">
              Industrial-grade AI automation architectures and deterministic agent execution frameworks optimized for small business growth.
            </p>
          </div>

          <div className="md:col-span-2">
            <h4 className="text-white font-semibold text-[0.62rem] tracking-[0.35em] uppercase mb-4">Resources</h4>
            <ul className="space-y-3 text-sm text-slate-400">
              <li><a href="#services" onClick={(e) => handleScrollToId(e, 'services')} className="hover:text-white transition-colors">Services</a></li>
              <li><a href="#analytics" onClick={(e) => handleScrollToId(e, 'analytics')} className="hover:text-white transition-colors">Impact</a></li>
              <li><a href="#process" onClick={(e) => handleScrollToId(e, 'process')} className="hover:text-white transition-colors">Process</a></li>
            </ul>
          </div>

          <div className="md:col-span-2">
            <h4 className="text-white font-semibold text-[0.62rem] tracking-[0.35em] uppercase mb-4">Solutions</h4>
            <ul className="space-y-3 text-sm text-slate-400">
              <li><a href="#services" onClick={(e) => handleScrollToId(e, 'services')} className="hover:text-white transition-colors">AI Workflow Design</a></li>
              <li><a href="#services" onClick={(e) => handleScrollToId(e, 'services')} className="hover:text-white transition-colors">Automation Governance</a></li>
              <li><a href="/contact" className="hover:text-white transition-colors">Book a Discovery Call</a></li>
            </ul>
          </div>

          <div className="md:col-span-4">
            <h4 className="text-white font-semibold text-[0.62rem] tracking-[0.35em] uppercase mb-4">Location</h4>
            <p className="text-sm text-slate-400">Indira Nagar, Bengaluru, India</p>
            <p className="mt-4 text-sm text-slate-400">hello@ofstride.in</p>
          </div>
        </div>
        <div className="container-page border-t border-white/5 px-6 py-6 text-center text-[0.62rem] uppercase tracking-[0.3em] text-slate-600">
          &copy; {new Date().getFullYear()} Ofstride Services LLP. All Rights Reserved.
        </div>
      </footer>
    </div>
  );
}
