import { Link } from 'react-router-dom';

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="site-shell min-h-screen flex flex-col justify-between bg-slate-50">
      {/* Premium Corporate Navbar */}
      <header className="sticky top-0 z-50 border-b border-slate-200/80 bg-white/90 backdrop-blur-md">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <Link to="/" className="flex items-center gap-3 hover:opacity-90 transition-opacity">
            <div className="flex flex-col select-none">
              <span className="text-xl font-black tracking-wider text-[#00209F] italic leading-none">
                OFSTRIDE
              </span>
              <span className="text-[0.65rem] font-bold tracking-[0.28em] text-[#5D7CC1] uppercase mt-0.5">
                SERVICES LLP
              </span>
            </div>
          </Link>
          <nav className="flex items-center gap-6 text-sm font-medium text-slate-600">
            <Link to="/" className="transition hover:text-[#00209F]">
              Home
            </Link>
            <a href="/#roi-calculator" className="transition hover:text-[#00209F]">
              ROI Calculator
            </a>
            <Link 
              to="/contact" 
              className="inline-flex items-center justify-center px-4 py-2 rounded-lg text-xs font-semibold text-white bg-[#00209F] hover:bg-[#112d91] transition-all shadow-sm"
            >
              Consult an Expert
            </Link>
          </nav>
        </div>
      </header>

      {/* Main Page View */}
      <main className="flex-grow">{children}</main>

      {/* Comprehensive Corporate Footer */}
      <footer className="bg-slate-950 text-slate-400 pt-16 pb-12 border-t border-slate-900 mt-auto">
        <div className="mx-auto max-w-6xl px-6 grid grid-cols-1 md:grid-cols-4 gap-12">
          <div className="space-y-4">
            <div className="flex flex-col">
              <span className="text-xl font-black tracking-wider text-white italic leading-none">OFSTRIDE</span>
              <span className="text-[0.65rem] font-bold tracking-[0.25em] text-[#A9B9E2] uppercase mt-0.5">SERVICES LLP</span>
            </div>
            <p className="text-xs text-slate-400 leading-relaxed">
              Industrial-grade AI deployment, intelligent agentic workflows, and digital operations systems tailored explicitly for modern small businesses and expanding MSMEs.
            </p>
          </div>
          
          <div>
            <h4 className="text-white font-semibold text-xs tracking-wider uppercase mb-4">Core Frameworks</h4>
            <ul className="space-y-2.5 text-xs">
              <li><Link to="/" className="hover:text-white transition-colors">Agentic Task Automation</Link></li>
              <li><Link to="/" className="hover:text-white transition-colors">Custom LLM Architectures</Link></li>
              <li><Link to="/" className="hover:text-white transition-colors">MSME Infrastructure Scaling</Link></li>
              <li><Link to="/" className="hover:text-white transition-colors">Deterministic AI Controls</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold text-xs tracking-wider uppercase mb-4">Governance & Assurance</h4>
            <ul className="space-y-2.5 text-xs">
              <li><span className="text-slate-500">Data Integrity Protocol</span></li>
              <li><span className="text-slate-500">Privacy First Framework</span></li>
              <li><span className="text-slate-500">SOC 2 Alignment Matrices</span></li>
              <li><span className="text-slate-500">Terms of Engagement</span></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold text-xs tracking-wider uppercase mb-4">Corporate Office</h4>
            <p className="text-xs text-slate-400 leading-relaxed">
              Indira Nagar, Bengaluru,<br />
              Karnataka, India
            </p>
            <div className="mt-4 pt-2 border-t border-slate-900 text-[11px] text-slate-500">
              Registered Partnership LLP
            </div>
          </div>
        </div>
        
        <div className="mx-auto max-w-6xl px-6 mt-12 pt-8 border-t border-slate-900 text-center text-xs text-slate-600">
          &copy; {new Date().getFullYear()} Ofstride Services LLP. All Rights Reserved. Engineered for enterprise precision.
        </div>
      </footer>
    </div>
  );
}
