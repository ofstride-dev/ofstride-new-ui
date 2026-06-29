import { Link, useLocation, useNavigate } from 'react-router-dom';

export function Layout({ children }: { children: React.ReactNode }) {
  const location = useLocation();
  const navigate = useNavigate();

  const handleCalculatorScroll = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    if (location.pathname !== '/') {
      navigate('/#roi-calculator');
      setTimeout(() => {
        const el = document.getElementById('roi-calculator');
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      }, 150);
    } else {
      const el = document.getElementById('roi-calculator');
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="site-shell">
      <header className="site-header">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <Link to="/" className="brand-mark text-slate-900">
            <span className="flex flex-col leading-none select-none">
              <span className="text-[1.2rem] font-black tracking-wider text-[#00209F] italic">OFSTRIDE</span>
              <span className="text-[0.62rem] font-bold uppercase tracking-[0.28em] text-[#5D7CC1] mt-0.5">Services LLP</span>
            </span>
          </Link>
          <nav className="flex gap-6 text-sm font-medium text-slate-600 items-center">
            <Link to="/" className="transition hover:text-[#00209F]">
              Home
            </Link>
            <a href="#roi-calculator" onClick={handleCalculatorScroll} className="transition hover:text-[#00209F]">
              ROI Calculator
            </a>
            <Link to="/contact" className="btn-primary px-4 py-1.5 rounded-lg text-xs font-bold text-white tracking-wide transition shadow-sm">
              Get Started
            </Link>
          </nav>
        </div>
      </header>
      
      <main style={{ flexGrow: 1 }}>{children}</main>

      <footer className="bg-slate-950 text-slate-400 pt-16 pb-12 border-t border-slate-900 mt-20">
        <div className="mx-auto max-w-6xl px-6 grid grid-cols-1 md:grid-cols-4 gap-12">
          <div className="space-y-4">
            <div className="flex flex-col">
              <span className="text-xl font-black tracking-wider text-white italic leading-none">OFSTRIDE</span>
              <span className="text-[0.65rem] font-bold tracking-[0.25em] text-[#A9B9E2] uppercase mt-0.5">SERVICES LLP</span>
            </div>
            <p className="text-xs text-slate-400 leading-relaxed">
              Industrial-grade AI deployment, autonomous agent workflows, and computational enterprise architectures built for small businesses and growing MSMEs.
            </p>
          </div>
          
          <div>
            <h4 className="text-white font-semibold text-xs tracking-wider uppercase mb-4">Core Ecosystem</h4>
            <ul className="space-y-2.5 text-xs">
              <li><Link to="/" className="hover:text-white transition-colors">Agentic Task Routing</Link></li>
              <li><Link to="/" className="hover:text-white transition-colors">Custom LLM Engineering</Link></li>
              <li><Link to="/" className="hover:text-white transition-colors">Operations Automation</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold text-xs tracking-wider uppercase mb-4">Governance</h4>
            <ul className="space-y-2.5 text-xs text-slate-500">
              <li>Data Protocol</li>
              <li>Privacy Matrix</li>
              <li>SOC 2 Mapping</li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold text-xs tracking-wider uppercase mb-4">Corporate Info</h4>
            <p className="text-xs text-slate-400 leading-relaxed">
              Indira Nagar, Bengaluru,<br />
              Karnataka, India
            </p>
          </div>
        </div>
        <div className="mx-auto max-w-6xl px-6 mt-12 pt-8 border-t border-slate-900 text-center text-xs text-slate-600">
          &copy; {new Date().getFullYear()} Ofstride Services LLP. All Rights Reserved. Built for production scaling.
        </div>
      </footer>
    </div>
  );
}
