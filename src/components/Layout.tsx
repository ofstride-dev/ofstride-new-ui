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
      {/* Sticky Top Bar Container */}
      <header className="sticky top-0 z-50 bg-[#030712]/80 backdrop-blur-md border-b border-white/5">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <Link to="/" className="flex items-center gap-2">
            <span className="flex flex-col leading-none">
              <span className="text-[1.2rem] font-black tracking-wider text-white italic">OFSTRIDE</span>
              <span className="text-[0.62rem] font-bold uppercase tracking-[0.28em] text-[#A9B9E2] mt-0.5">Services LLP</span>
            </span>
          </Link>
          <nav className="flex gap-6 text-sm font-medium items-center">
            <Link to="/" className="text-slate-300 transition hover:text-white">Home</Link>
            <a href="#services" onClick={(e) => handleScrollToId(e, 'services')} className="text-slate-300 transition hover:text-white">Services</a>
            <a href="#roi-calculator" onClick={(e) => handleScrollToId(e, 'roi-calculator')} className="text-slate-300 transition hover:text-white">ROI Tool</a>
            <Link to="/contact" className="btn-aintric-primary !py-1.5 !px-3.5 !text-[11px]">Get Started</Link>
          </nav>
        </div>
      </header>

      {/* Main App Output Screen */}
      <main className="flex-grow">{children}</main>

      {/* Structured Dark Footer Grid */}
      <footer className="bg-slate-950 text-slate-400 pt-16 pb-12 border-t border-slate-900 mt-24">
        <div className="mx-auto max-w-6xl px-6 grid grid-cols-1 md:grid-cols-4 gap-12">
          <div className="space-y-4">
            <div className="flex flex-col">
              <span className="text-xl font-black tracking-wider text-white italic leading-none">OFSTRIDE</span>
              <span className="text-[0.65rem] font-bold tracking-[0.25em] text-[#5D7CC1] uppercase mt-0.5">SERVICES LLP</span>
            </div>
            <p className="text-xs text-slate-400 leading-relaxed">
              Industrial-grade AI automation architectures and deterministic agent execution frameworks optimized for small business growth.
            </p>
          </div>
          <div>
            <h4 className="text-white font-semibold text-xs tracking-wider uppercase mb-4">Core Ecosystem</h4>
            <ul className="space-y-2 text-xs">
              <li><a href="#services" onClick={(e) => handleScrollToId(e, 'services')} className="hover:text-white transition-colors">Agent Customization</a></li>
              <li><a href="#services" onClick={(e) => handleScrollToId(e, 'services')} className="hover:text-white transition-colors">LLM Fine-Tuning</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-semibold text-xs tracking-wider uppercase mb-4">Governance</h4>
            <p className="text-xs text-slate-500">Secure Data Isolation Protocol</p>
          </div>
          <div>
            <h4 className="text-white font-semibold text-xs tracking-wider uppercase mb-4">Location</h4>
            <p className="text-xs text-slate-400">Indira Nagar, Bengaluru, India</p>
          </div>
        </div>
        <div className="mx-auto max-w-6xl px-6 mt-12 pt-8 border-t border-slate-900 text-center text-xs text-slate-600">
          &copy; {new Date().getFullYear()} Ofstride Services LLP. All Rights Reserved.
        </div>
      </footer>
    </div>
  );
}
