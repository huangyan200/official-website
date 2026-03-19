import React, { useEffect, useMemo, useState } from 'react';
import { Link, NavLink, Outlet, useLocation } from 'react-router-dom';
import { Globe, MenuIcon, XIcon } from 'lucide-react';
import { cn } from '@/lib/utils';
import { LanguageProvider, useLanguage } from './LanguageContext';
import { UniversalLink } from '@lark-apaas/client-toolkit/components/UniversalLink';
import { localizedText, siteContent } from '@/content/site-content';

const LayoutContent: React.FC = () => {
  const { pathname } = useLocation();
  const { language, toggleLanguage } = useLanguage();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const brand = siteContent.identity;
  const navigation = useMemo(
    () =>
      siteContent.navigation.map((item) => ({
        ...item,
        label: localizedText(item.label, language),
      })),
    [language]
  );

  useEffect(() => {
    window.scrollTo(0, 0);
    setMobileMenuOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = mobileMenuOpen ? 'hidden' : 'unset';

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [mobileMenuOpen]);

  return (
    <div className="quant-shell text-white">
      <div className="brand-grid" />
      <div className="ambient-glow left-[-6rem] top-14 h-56 w-56 bg-[radial-gradient(circle,rgba(76,242,255,0.22),transparent_68%)]" />
      <div className="ambient-glow right-[-8rem] top-36 h-72 w-72 bg-[radial-gradient(circle,rgba(125,255,136,0.16),transparent_70%)]" />

      <header className="fixed inset-x-0 top-0 z-50 border-b border-cyan-300/12 bg-[#040913]/88 backdrop-blur-xl">
        <nav className="mx-auto flex h-14 max-w-7xl items-center justify-between px-6 md:h-16 md:px-12 lg:px-20">
          <Link to="/" className="flex items-center gap-3 text-white">
            <span className="flex size-9 items-center justify-center border border-cyan-300/35 bg-cyan-300/8 font-mono text-sm text-cyan-100 shadow-[0_0_24px_rgba(76,242,255,0.16)]">
              {brand.mark}
            </span>
            <span className="font-display text-sm font-semibold tracking-[0.04em] text-slate-50 sm:block">
              {localizedText(brand.name, language)}
            </span>
          </Link>

          <div className="hidden items-center gap-4 lg:flex">
            {navigation.map((item) => (
              <NavLink
                key={item.key}
                to={item.path}
                className={({ isActive }) =>
                  cn(
                    'quant-nav-link px-2 py-2 text-cyan-50/68 transition-colors hover:text-white',
                    isActive && 'text-white'
                  )
                }
              >
                {item.label}
              </NavLink>
            ))}
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={toggleLanguage}
              className="flex items-center gap-2 border border-cyan-300/20 bg-cyan-300/[0.05] px-3 py-1.5 font-mono text-[0.72rem] uppercase tracking-[0.18em] text-cyan-50/78 transition-colors hover:border-cyan-300/40 hover:text-white"
              aria-label="Toggle language"
              type="button"
            >
              <Globe className="size-4" />
              <span>{language === 'zh' ? 'EN' : 'CN'}</span>
            </button>
            <button
              type="button"
              onClick={() => setMobileMenuOpen((value) => !value)}
              className="border border-cyan-300/18 bg-white/[0.02] p-2 text-cyan-50/72 transition-colors hover:border-cyan-300/38 hover:text-white lg:hidden"
              aria-label="Toggle mobile navigation"
            >
              {mobileMenuOpen ? <XIcon className="size-5" /> : <MenuIcon className="size-5" />}
            </button>
          </div>
        </nav>
      </header>

      {mobileMenuOpen && (
        <div className="fixed inset-0 z-40 bg-[#040913]/96 pt-20 backdrop-blur-xl lg:hidden">
          <div className="mx-auto flex max-w-7xl flex-col gap-3 px-6 md:px-12 lg:px-20">
            {navigation.map((item) => (
              <NavLink
                key={item.key}
                to={item.path}
                onClick={() => setMobileMenuOpen(false)}
                className={({ isActive }) =>
                  cn(
                    'section-frame px-4 py-4 font-mono text-sm uppercase tracking-[0.16em] text-cyan-50/78',
                    isActive && 'border-cyan-300/34 text-white'
                  )
                }
              >
                {item.label}
              </NavLink>
            ))}
          </div>
        </div>
      )}

      <div className="relative z-10 flex min-h-screen flex-col">
        <main className="flex-1 pt-14 md:pt-16">
          <Outlet />
        </main>

        <footer className="border-t border-cyan-300/12 bg-[#040913]/86 py-10 backdrop-blur-xl">
          <div className="mx-auto grid max-w-7xl gap-8 px-6 md:grid-cols-[1.5fr_0.9fr_0.9fr] md:px-12 lg:px-20">
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <span className="flex size-10 items-center justify-center border border-cyan-300/32 bg-cyan-300/8 font-mono text-base text-cyan-100">
                  {brand.mark}
                </span>
                <div>
                  <p className="font-display text-lg font-semibold text-white">
                    {localizedText(brand.name, language)}
                  </p>
                  <p className="terminal-line mt-2">
                    {language === 'zh' ? 'Quant Systems / Energy Markets' : 'Quant Systems / Energy Markets'}
                  </p>
                </div>
              </div>
              <p className="max-w-xl text-sm leading-7 text-slate-300/72">
                {localizedText(brand.footerSummary, language)}
              </p>
            </div>

            <div className="space-y-3">
              <p className="section-kicker">{language === 'zh' ? '导航' : 'Navigation'}</p>
              <ul className="space-y-2 text-sm text-slate-300/72">
                {navigation.map((item) => (
                  <li key={item.key}>
                    <NavLink to={item.path} className="transition-colors hover:text-white">
                      {item.label}
                    </NavLink>
                  </li>
                ))}
              </ul>
            </div>

            <div className="space-y-3">
              <p className="section-kicker">{language === 'zh' ? '公开联系' : 'Public Contact'}</p>
              <ul className="space-y-3 text-sm text-slate-300/72">
                <li>
                  <span className="font-mono text-[0.72rem] uppercase tracking-[0.16em] text-cyan-100/56">
                    {language === 'zh' ? 'Email' : 'Email'}
                  </span>
                  <div className="mt-1">
                    <UniversalLink
                      to={`mailto:${brand.email}`}
                      className="transition-colors hover:text-white"
                    >
                      {brand.email}
                    </UniversalLink>
                  </div>
                </li>
                <li>
                  <span className="font-mono text-[0.72rem] uppercase tracking-[0.16em] text-cyan-100/56">
                    {language === 'zh' ? 'Location' : 'Location'}
                  </span>
                  <div className="mt-1">{localizedText(brand.address, language)}</div>
                </li>
              </ul>
            </div>
          </div>

          <div className="mx-auto mt-8 max-w-7xl border-t border-cyan-300/10 px-6 pt-5 font-mono text-[0.72rem] uppercase tracking-[0.16em] text-slate-400/56 md:px-12 lg:px-20">
            © 2026 {localizedText(brand.name, language)} · {localizedText(brand.rights, language)}
          </div>
        </footer>
      </div>
    </div>
  );
};

const Layout: React.FC = () => {
  return (
    <LanguageProvider>
      <LayoutContent />
    </LanguageProvider>
  );
};

export default Layout;
