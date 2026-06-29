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
      }, 180);
    } else {
      const el = document.getElementById('roi-calculator');
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="flex flex-col min-h-screen justify-between">
      {/* Premium Navigation Strip */}
      <header className="site-header">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <Link to="/" className="flex items-center gap-2 text-white">
            <span className="flex flex-col leading-none select-none">
              <span className="text-[1.25rem] font-black tracking-wider text-[#ffffff] italic">
                OFSTRIDE
              </span>
              <span className="text-[0.62rem] font-bold uppercase tracking-[0.3em] text-[#A9B9E2] mt-0.5">
                SERVICES LLP
              </span>
            </span>
          </Link>
          <nav className="flex gap-8 text-sm font-medium items-center">
            <Link to="/" className="text-slate-300 transition hover:text-white">
              Home
            </Link>
            <a href="#roi-calculator" onClick={handleCalculatorScroll} className="text-slate-300 transition hover:text-white">
              ROI Calculator
            </a>
            <Link to="/contact" className="btn-aintric-primary py-2 px-4 text-xs font-bold">
              Get Started
            </Link>
          </nav>
        </div>
      </header>
      
      {/* Content Rendering Grid */}
      <main className="flex-grow">{children}</main>

      {/* Modern High-Fidelity Deep Footer */}
      <footer className="bg-slate-950 border-t border-slate-900 text-slate-400 pt-16 pb-12 mt-24">
        <div className="mx-auto max-w-6xl px-6 grid grid-cols-1 md:grid-cols-4 gap-12">
          <div className="space-y-4">
            <div className="flex flex-col">
              <span className="text-xl font-black tracking-wider text-white italic leading-none">OFSTRIDE</span>
              <span className="text-[0.65rem] font-bold tracking-[0.25em] text-[#5D7CC1] uppercase mt-0.5">SERVICES LLP</span>
            </div>
            <p className="text-xs text-slate-400 leading-relaxed">
              Industrial-grade AI integrations, deterministic agentic operations pipelines, and computing architecture customized precisely for small businesses and high-growth MSMEs.
            </p>
          </div>
          
          <div>
            <h4 className="text-white font-semibold text-xs tracking-wider uppercase mb-4">Core Focus Elements</h4>
            <ul className="space-y-2.5 text-xs">
              <li><Link to="/" className="hover:text-white transition-colors">Agentic Logic Routing</Link></li>
              <li><Link to="/" className="hover:text-white transition-colors">Custom LLM Training</Link></li>
              <li><Link to="/" className="hover:text-white transition-colors">Small Business Scalers</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold text-xs tracking-wider uppercase mb-4">Operational Assurance</h4>
            <ul className="space-y-2.5 text-xs text-slate-500">
              <li>Data Integrity Protocol</li>
              <li>Privacy Matrix Layout</li>
              <li>SOC 2 Framework Logs</li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold text-xs tracking-wider uppercase mb-4">Corporate Office</h4>
            <p className="text-xs text-slate-400 leading-relaxed">
              Indira Nagar, Bengaluru,<br />
              Karnataka, India
            </p>
          </div>
        </div>
        <div className="mx-auto max-w-6xl px-6 mt-12 pt-8 border-t border-slate-900 text-center text-xs text-slate-600">
          &copy; {new Date().getFullYear()} Ofstride Services LLP. All Rights Reserved. Engineered for enterprise precision.
        </div>
      </footer>
    </div>
  );
}
