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
    <div className="quant-shell text-slate-950">
      <div className="brand-grid" />
      <div className="ambient-glow left-[-6rem] top-14 h-56 w-56 bg-[radial-gradient(circle,rgba(119,185,148,0.18),transparent_68%)]" />
      <div className="ambient-glow right-[-8rem] top-36 h-72 w-72 bg-[radial-gradient(circle,rgba(93,147,212,0.2),transparent_70%)]" />

      <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-[#0d1b2f]/96 backdrop-blur-xl">
        <nav className="mx-auto flex h-18 max-w-7xl items-center justify-between px-6 md:h-22 md:px-12 lg:px-20">
          <Link to="/" className="flex min-w-0 items-center gap-3 text-white">
            <img
              src="/favicon.svg"
              alt={localizedText(brand.name, language)}
              className="h-11 w-11 shrink-0 rounded-2xl drop-shadow-[0_12px_30px_rgba(2,8,22,0.28)] md:h-12 md:w-12"
            />
            <div className="min-w-0">
              <p className="truncate font-display text-[1.1rem] font-semibold leading-none text-white md:text-[1.35rem]">
                {brand.name.zh}
              </p>
              <p className="mt-1 hidden truncate text-[0.72rem] font-semibold tracking-[0.04em] text-blue-100/88 sm:block md:text-[0.82rem]">
                {brand.name.en}
              </p>
            </div>
          </Link>

          <div className="hidden items-center gap-10 lg:flex">
            {navigation.map((item) => (
              <NavLink
                key={item.key}
                to={item.path}
                className={({ isActive }) => cn('main-nav-link', isActive && 'is-active')}
              >
                {item.label}
              </NavLink>
            ))}
          </div>

          <div className="flex shrink-0 items-center gap-2 sm:gap-3">
            <button
              onClick={toggleLanguage}
              className="flex items-center gap-2 rounded-full border border-white/18 bg-white/8 px-3 py-2.5 text-[0.92rem] font-semibold tracking-[0.02em] text-white transition-colors hover:border-white/34 hover:bg-white/12 sm:px-4 sm:text-[0.98rem]"
              aria-label="Toggle language"
              type="button"
            >
              <Globe className="size-4" />
              <span>{language === 'zh' ? 'EN' : '中文'}</span>
            </button>
            <button
              type="button"
              onClick={() => setMobileMenuOpen((value) => !value)}
              className="rounded-full border border-white/18 bg-white/8 p-2.5 text-white transition-colors hover:border-white/34 hover:bg-white/12 lg:hidden"
              aria-label="Toggle mobile navigation"
            >
              {mobileMenuOpen ? <XIcon className="size-5" /> : <MenuIcon className="size-5" />}
            </button>
          </div>
        </nav>
      </header>

      {mobileMenuOpen && (
        <div className="fixed inset-0 z-40 bg-[#0d1b2f]/96 pt-24 backdrop-blur-xl lg:hidden">
          <div className="mx-auto flex max-w-7xl flex-col gap-4 px-6 md:px-12 lg:px-20">
            <div className="surface-panel flex items-center justify-between gap-3 rounded-[1.5rem] px-5 py-4">
              <div className="flex min-w-0 items-center gap-3">
                <img
                  src="/favicon.svg"
                  alt={localizedText(brand.name, language)}
                  className="h-11 w-11 shrink-0 rounded-2xl"
                />
                <div className="min-w-0">
                  <p className="truncate font-display text-[1.02rem] font-semibold text-slate-950">
                    {brand.name.zh}
                  </p>
                  <p className="truncate text-[0.78rem] font-semibold tracking-[0.04em] text-slate-600">
                    {brand.name.en}
                  </p>
                </div>
              </div>
              <span className="hidden text-right text-[0.84rem] font-medium tracking-[0.04em] text-slate-700 sm:block">
                {language === 'zh' ? '量化研究 / 能源市场' : 'Quant Research / Energy Markets'}
              </span>
            </div>
            {navigation.map((item) => (
              <NavLink
                key={item.key}
                to={item.path}
                onClick={() => setMobileMenuOpen(false)}
                className={({ isActive }) =>
                  cn(
                    'surface-panel rounded-[1.35rem] px-5 py-4.5 text-[1.15rem] font-semibold text-slate-900 transition-colors',
                    isActive && 'border-[#4c9fe2]/45'
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
        <main className="flex-1 pt-16 md:pt-20">
          <Outlet />
        </main>

        <footer className="border-t border-slate-300/70 bg-[#eef3f7]/94 py-12 backdrop-blur-xl">
          <div className="mx-auto grid max-w-7xl gap-8 px-6 md:grid-cols-[1.45fr_0.9fr_0.9fr] md:px-12 lg:px-20">
            <div className="space-y-5">
              <div className="flex items-center gap-3">
                <img
                  src="/favicon.svg"
                  alt={localizedText(brand.name, language)}
                  className="h-12 w-12 shrink-0 rounded-2xl"
                />
                <div className="min-w-0">
                  <p className="truncate font-display text-[1.22rem] font-semibold text-slate-950">
                    {brand.name.zh}
                  </p>
                  <p className="truncate text-[0.82rem] font-semibold tracking-[0.04em] text-slate-600">
                    {brand.name.en}
                  </p>
                </div>
              </div>
              <p className="terminal-line">
                {language === 'zh' ? 'Quant Systems / Energy Markets' : 'Quant Systems / Energy Markets'}
              </p>
              <p className="max-w-xl text-[1.06rem] leading-8 text-slate-700">
                {localizedText(brand.footerSummary, language)}
              </p>
            </div>

            <div className="space-y-4">
              <p className="section-kicker">{language === 'zh' ? '导航' : 'Navigation'}</p>
              <ul className="space-y-3 text-[1.05rem] text-slate-700">
                {navigation.map((item) => (
                  <li key={item.key}>
                    <NavLink to={item.path} className="font-medium transition-colors hover:text-slate-950">
                      {item.label}
                    </NavLink>
                  </li>
                ))}
              </ul>
            </div>

            <div className="space-y-4">
              <p className="section-kicker">{language === 'zh' ? '公开联系' : 'Public Contact'}</p>
              <ul className="space-y-4 text-[1.05rem] text-slate-700">
                <li>
                  <span className="text-[0.94rem] font-semibold tracking-[0.03em] text-slate-500">
                    Email
                  </span>
                  <div className="mt-2">
                    <UniversalLink
                      to={`mailto:${brand.email}`}
                      className="text-[1.1rem] font-semibold transition-colors hover:text-slate-950"
                    >
                      {brand.email}
                    </UniversalLink>
                  </div>
                </li>
                <li>
                  <span className="text-[0.94rem] font-semibold tracking-[0.03em] text-slate-500">
                    Location
                  </span>
                  <div className="mt-2">{localizedText(brand.address, language)}</div>
                </li>
              </ul>
            </div>
          </div>

          <div className="mx-auto mt-10 max-w-7xl border-t border-slate-300/70 px-6 pt-6 text-[0.96rem] text-slate-500 md:px-12 lg:px-20">
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
