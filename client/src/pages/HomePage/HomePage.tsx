import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowRightIcon, ChevronRightIcon, CpuIcon, OrbitIcon, ShieldCheckIcon, WorkflowIcon } from 'lucide-react';
import { Button } from '@/components/ui/button';
import ScrollReveal from '@/components/ScrollReveal';
import SEO from '@/components/SEO';
import CountUpNumber from '@/components/CountUpNumber';
import DataFlowParticles from '@/components/DataFlowParticles';
import { localizedText, siteContent } from '@/content/site-content';
import { useLanguage } from '@/components/LanguageContext';

const capabilityIcons = [WorkflowIcon, OrbitIcon, CpuIcon, ShieldCheckIcon];

const HomePage: React.FC = () => {
  const navigate = useNavigate();
  const { language } = useLanguage();
  const home = siteContent.home;
  const seo = siteContent.seo.home;
  const breadcrumbs = [{ name: localizedText(siteContent.navigation[0].label, language), path: '/' }];

  return (
    <>
      <SEO
        title={localizedText(seo.title, language)}
        description={localizedText(seo.description, language)}
        keywords={localizedText(seo.keywords, language)}
        breadcrumbs={breadcrumbs}
      />

      <div className="relative overflow-hidden">
        <div className="absolute inset-0 opacity-90">
          <DataFlowParticles />
        </div>
        <div className="ambient-glow left-[6%] top-24 h-64 w-64 bg-[radial-gradient(circle,rgba(76,242,255,0.18),transparent_70%)]" />
        <div className="ambient-glow right-[8%] top-40 h-72 w-72 bg-[radial-gradient(circle,rgba(125,255,136,0.14),transparent_72%)]" />

        <section className="relative mx-auto max-w-7xl px-6 py-20 md:px-12 md:py-28 lg:px-20">
          <div className="grid gap-12 lg:grid-cols-[1.1fr_0.95fr] lg:items-end">
            <ScrollReveal direction="from-bottom" delay={100}>
              <div className="space-y-7">
                <div className="space-y-5">
                  <p className="section-kicker">{localizedText(home.hero.tagline, language)}</p>
                  <h1 className="font-display max-w-5xl text-5xl font-semibold leading-[0.98] text-white md:text-7xl xl:text-[5.5rem]">
                    {localizedText(home.hero.slogan, language)}
                  </h1>
                  <p className="max-w-3xl text-base leading-8 text-slate-300/84 md:text-lg">
                    {localizedText(home.hero.subtitle, language)}
                  </p>
                </div>

                <div className="quant-stat-strip flex flex-wrap gap-6 px-0 py-4 text-sm text-slate-300/72">
                  <div>
                    <p className="font-mono text-[0.7rem] uppercase tracking-[0.18em] text-cyan-100/56">
                      Signal
                    </p>
                    <p className="mt-2 font-display text-lg text-white">
                      Quant + Energy
                    </p>
                  </div>
                  <div>
                    <p className="font-mono text-[0.7rem] uppercase tracking-[0.18em] text-cyan-100/56">
                      Focus
                    </p>
                    <p className="mt-2 font-display text-lg text-white">
                      Models / Pricing / Execution
                    </p>
                  </div>
                </div>

                <div className="flex flex-wrap gap-4">
                  <Button
                    onClick={() => navigate('/projects')}
                    className="quant-button-primary h-12 px-6 font-mono text-[0.78rem] uppercase tracking-[0.16em]"
                  >
                    {localizedText(home.hero.ctaProjects, language)}
                    <ArrowRightIcon className="size-4" />
                  </Button>
                  <Button
                    onClick={() => navigate('/knowledge')}
                    className="quant-button-secondary h-12 px-6 font-mono text-[0.78rem] uppercase tracking-[0.16em]"
                    variant="outline"
                  >
                    {localizedText(home.hero.ctaKnowledge, language)}
                  </Button>
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal direction="from-bottom" delay={180}>
              <div className="signal-panel p-6 md:p-8">
                <div className="mb-6 flex items-start justify-between gap-4">
                  <div className="space-y-2">
                    <p className="section-kicker">{localizedText(home.evidence.tagline, language)}</p>
                    <h2 className="font-display text-3xl font-semibold text-white">
                      {localizedText(home.evidence.title, language)}
                    </h2>
                  </div>
                  <div className="flex size-12 items-center justify-center border border-cyan-300/20 bg-cyan-300/8 text-cyan-100">
                    <ShieldCheckIcon className="size-5" />
                  </div>
                </div>

                <div className="grid gap-3">
                  {home.evidence.metrics.map((metric, index) => (
                    <div
                      key={metric.key}
                      className="metric-rail grid gap-3 p-4 md:grid-cols-[0.85fr_0.85fr_1fr]"
                    >
                      <div>
                        <p className="font-mono text-[0.68rem] uppercase tracking-[0.18em] text-cyan-100/56">
                          {localizedText(metric.label, language)}
                        </p>
                        <div className="mt-3 flex items-end gap-2">
                          <CountUpNumber
                            end={metric.value}
                            duration={1500}
                            delay={index * 100}
                            suffix={metric.unit}
                            className="font-display text-3xl font-semibold text-white md:text-4xl"
                          />
                        </div>
                      </div>
                      <div className="space-y-2">
                        <p className="font-mono text-[0.68rem] uppercase tracking-[0.18em] text-cyan-100/44">
                          Context
                        </p>
                        <p className="text-sm leading-6 text-slate-300/78">
                          {localizedText(metric.detail, language)}
                        </p>
                      </div>
                      <div className="space-y-2">
                        <p className="font-mono text-[0.68rem] uppercase tracking-[0.18em] text-cyan-100/44">
                          Delta
                        </p>
                        <p className="text-sm leading-6 text-emerald-300/86">
                          {localizedText(metric.trend, language)}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </ScrollReveal>
          </div>
        </section>

        <section className="relative mx-auto max-w-7xl px-6 pb-20 md:px-12 lg:px-20">
          <ScrollReveal direction="from-bottom" delay={140}>
            <div className="section-frame p-0">
              <div className="px-6 py-6 md:px-8">
                <p className="section-kicker">{localizedText(home.capabilities.subtitle, language)}</p>
                <h2 className="mt-3 font-display text-3xl font-semibold text-white md:text-4xl">
                  {localizedText(home.capabilities.title, language)}
                </h2>
              </div>

              <div>
                {home.capabilities.items.map((item, index) => {
                  const Icon = capabilityIcons[index] ?? CpuIcon;

                  return (
                    <div
                      key={item.key}
                      className="capability-band grid gap-5 px-6 py-6 md:px-8 lg:grid-cols-[0.18fr_0.52fr_0.8fr]"
                    >
                      <div className="flex items-start gap-4">
                        <span className="font-display text-4xl text-cyan-100/34">0{index + 1}</span>
                        <div className="flex size-11 items-center justify-center border border-cyan-300/18 bg-cyan-300/8 text-cyan-100">
                          <Icon className="size-5" />
                        </div>
                      </div>

                      <div className="space-y-2">
                        <p className="font-mono text-[0.7rem] uppercase tracking-[0.18em] text-cyan-100/56">
                          {localizedText(item.subtitle, language)}
                        </p>
                        <h3 className="font-display text-2xl font-semibold text-white">
                          {localizedText(item.title, language)}
                        </h3>
                      </div>

                      <div className="space-y-4">
                        <p className="text-sm leading-7 text-slate-300/78">
                          {localizedText(item.description, language)}
                        </p>
                        <div className="flex flex-wrap gap-2">
                          {item.metrics.map((entry) => (
                            <span
                              key={localizedText(entry, language)}
                              className="border border-cyan-300/14 bg-cyan-300/[0.04] px-3 py-1.5 font-mono text-[0.7rem] uppercase tracking-[0.14em] text-slate-200/76"
                            >
                              {localizedText(entry, language)}
                            </span>
                          ))}
                        </div>
                        <div className="flex items-start gap-2 text-sm text-emerald-300/84">
                          <ChevronRightIcon className="mt-0.5 size-4 shrink-0" />
                          <span>{localizedText(item.deliverable, language)}</span>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </ScrollReveal>
        </section>

        <section className="relative mx-auto max-w-7xl px-6 pb-24 md:px-12 lg:px-20">
          <ScrollReveal direction="from-bottom" delay={200}>
            <div className="cut-corner-card p-8 md:p-10">
              <div className="grid gap-8 lg:grid-cols-[1.2fr_0.85fr] lg:items-end">
                <div className="space-y-4">
                  <p className="section-kicker">{localizedText(siteContent.identity.name, language)}</p>
                  <h2 className="font-display text-4xl font-semibold leading-tight text-white">
                    {localizedText(home.cta.title, language)}
                  </h2>
                  <p className="max-w-3xl text-sm leading-7 text-slate-300/76 md:text-base">
                    {localizedText(home.cta.subtitle, language)}
                  </p>
                </div>

                <div className="space-y-4 lg:text-right">
                  <p className="font-display text-2xl text-cyan-100">{localizedText(home.cta.stats, language)}</p>
                  <div className="flex flex-wrap gap-4 lg:justify-end">
                    <Button
                      onClick={() => navigate('/projects')}
                      className="quant-button-primary h-12 px-6 font-mono text-[0.78rem] uppercase tracking-[0.16em]"
                    >
                      {localizedText(home.cta.button, language)}
                    </Button>
                    <Button
                      onClick={() => navigate('/contact')}
                      className="quant-button-secondary h-12 px-6 font-mono text-[0.78rem] uppercase tracking-[0.16em]"
                      variant="outline"
                    >
                      {localizedText(home.cta.secondaryButton, language)}
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </section>
      </div>
    </>
  );
};

export default HomePage;
