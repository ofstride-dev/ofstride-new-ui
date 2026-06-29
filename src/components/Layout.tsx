import { Link } from 'react-router-dom';

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="site-shell">
      <header className="site-header">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <Link to="/" className="brand-mark text-lg text-slate-900">
            <img src="/assets/logo/logo.svg" alt="Ofstride logo" className="h-10 w-10 rounded-2xl" />
            <span className="flex flex-col leading-none">
              <span className="text-[1rem] font-semibold">Ofstride</span>
              <span className="text-[0.7rem] font-medium uppercase tracking-[0.25em] text-slate-500">Strategic Growth</span>
            </span>
          </Link>
          <nav className="flex gap-4 text-sm text-slate-600">
            <Link to="/" className="transition hover:text-slate-900">
              Home
            </Link>
            <Link to="/contact" className="transition hover:text-slate-900">
              Contact
            </Link>
          </nav>
        </div>
      </header>
      <main>{children}</main>
    </div>
  );
}
