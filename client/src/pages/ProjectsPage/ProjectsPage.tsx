import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowRightIcon, MapPinIcon } from 'lucide-react';
import { Button } from '@/components/ui/button';
import SEO from '@/components/SEO';
import ScrollReveal from '@/components/ScrollReveal';
import Image from '@/components/ui/image';
import { localizedText, siteContent } from '@/content/site-content';
import { useLanguage } from '@/components/LanguageContext';

const ProjectsPage: React.FC = () => {
  const navigate = useNavigate();
  const { language } = useLanguage();
  const seo = siteContent.seo.projects;
  const projects = siteContent.projects;
  const caseStudies = projects.items.filter((item) => item.type === 'case-study');
  const solutions = projects.items.filter((item) => item.type === 'solution');
  const breadcrumbs = [
    { name: localizedText(siteContent.navigation[0].label, language), path: '/' },
    { name: localizedText(siteContent.navigation[1].label, language), path: '/projects' },
  ];

  return (
    <>
      <SEO
        title={localizedText(seo.title, language)}
        description={localizedText(seo.description, language)}
        keywords={localizedText(seo.keywords, language)}
        breadcrumbs={breadcrumbs}
      />

      <div className="relative overflow-hidden">
        <section className="relative mx-auto max-w-7xl px-6 py-20 md:px-12 md:py-24 lg:px-20">
          <ScrollReveal direction="from-bottom" delay={100}>
            <div className="space-y-6">
              <p className="section-kicker">{localizedText(projects.tagline, language)}</p>
              <div className="grid gap-8 lg:grid-cols-[1.1fr_0.95fr] lg:items-end">
                <div className="space-y-4">
                  <h1 className="font-display text-5xl font-semibold text-white md:text-7xl">
                    {localizedText(projects.title, language)}
                  </h1>
                  <p className="max-w-3xl text-base leading-8 text-slate-300/82 md:text-lg">
                    {localizedText(projects.subtitle, language)}
                  </p>
                </div>

                <div className="signal-panel p-4">
                  <div className="grid gap-3 md:grid-cols-3">
                    {projects.stats.map((stat) => (
                      <div key={localizedText(stat.label, language)} className="metric-rail p-4">
                        <p className="font-mono text-[0.68rem] uppercase tracking-[0.18em] text-cyan-100/52">
                          {localizedText(stat.label, language)}
                        </p>
                        <p className="mt-3 font-display text-4xl text-white">{stat.value}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </section>

        <section className="relative mx-auto max-w-7xl px-6 pb-18 md:px-12 lg:px-20">
          <ScrollReveal direction="from-bottom" delay={140}>
            <div className="space-y-7">
              <div className="flex items-center gap-4">
                <p className="section-kicker">{localizedText(projects.caseStudiesTitle, language)}</p>
              </div>

              <div className="grid gap-7">
                {caseStudies.map((item, index) => (
                  <ScrollReveal key={item.key} direction="from-bottom" delay={200 + index * 70}>
                    <article className="case-band">
                      <div className="grid gap-0 xl:grid-cols-[0.92fr_1.08fr]">
                        <div className="relative min-h-[320px] overflow-hidden">
                          <Image
                            src={item.image}
                            alt={localizedText(item.title, language)}
                            className="h-full w-full object-cover opacity-90"
                          />
                          <div className="absolute inset-0 bg-gradient-to-r from-[#040913]/20 via-transparent to-[#040913]/88" />
                          <div className="absolute left-6 top-6">
                            <p className="font-display text-6xl text-white/20">0{index + 1}</p>
                          </div>
                        </div>

                        <div className="p-6 md:p-8">
                          <div className="flex flex-wrap items-center gap-3">
                            <span className="border border-cyan-300/18 bg-cyan-300/[0.05] px-3 py-1.5 font-mono text-[0.68rem] uppercase tracking-[0.16em] text-cyan-100/78">
                              {localizedText(item.domain, language)}
                            </span>
                            <span className="flex items-center gap-2 font-mono text-[0.68rem] uppercase tracking-[0.16em] text-emerald-300/80">
                              <MapPinIcon className="size-3.5" />
                              {localizedText(item.region, language)}
                            </span>
                          </div>

                          <h2 className="mt-5 font-display text-3xl font-semibold text-white md:text-4xl">
                            {localizedText(item.title, language)}
                          </h2>
                          <p className="mt-4 max-w-3xl text-sm leading-7 text-slate-300/78 md:text-base">
                            {localizedText(item.description, language)}
                          </p>

                          <div className="mt-6 flex flex-wrap gap-2">
                            {item.features.map((feature) => (
                              <span
                                key={localizedText(feature, language)}
                                className="border border-cyan-300/14 bg-cyan-300/[0.04] px-3 py-1.5 font-mono text-[0.7rem] uppercase tracking-[0.14em] text-slate-200/76"
                              >
                                {localizedText(feature, language)}
                              </span>
                            ))}
                          </div>

                          <div className="mt-7 grid gap-4 md:grid-cols-3">
                            <div className="section-frame p-4">
                              <p className="font-mono text-[0.68rem] uppercase tracking-[0.18em] text-cyan-100/52">
                                {localizedText(projects.detailsLabel.background, language)}
                              </p>
                              <p className="mt-3 text-sm leading-7 text-slate-300/76">
                                {localizedText(item.details.background, language)}
                              </p>
                            </div>
                            <div className="section-frame p-4">
                              <p className="font-mono text-[0.68rem] uppercase tracking-[0.18em] text-cyan-100/52">
                                {localizedText(projects.detailsLabel.solution, language)}
                              </p>
                              <p className="mt-3 text-sm leading-7 text-slate-300/76">
                                {localizedText(item.details.solution, language)}
                              </p>
                            </div>
                            <div className="section-frame p-4">
                              <p className="font-mono text-[0.68rem] uppercase tracking-[0.18em] text-cyan-100/52">
                                {localizedText(projects.detailsLabel.results, language)}
                              </p>
                              <p className="mt-3 text-sm leading-7 text-emerald-300/82">
                                {localizedText(item.details.results, language)}
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </article>
                  </ScrollReveal>
                ))}
              </div>
            </div>
          </ScrollReveal>
        </section>

        <section className="relative mx-auto max-w-7xl px-6 pb-18 md:px-12 lg:px-20">
          <ScrollReveal direction="from-bottom" delay={180}>
            <div className="space-y-7">
              <div className="flex items-center gap-4">
                <p className="section-kicker">{localizedText(projects.solutionsTitle, language)}</p>
              </div>

              <div className="grid gap-6 lg:grid-cols-2">
                {solutions.map((item, index) => (
                  <ScrollReveal key={item.key} direction="from-bottom" delay={220 + index * 70}>
                    <article className="cut-corner-card p-6 md:p-7">
                      <div className="flex items-start justify-between gap-4">
                        <div>
                          <p className="font-mono text-[0.68rem] uppercase tracking-[0.18em] text-cyan-100/56">
                            {localizedText(item.domain, language)}
                          </p>
                          <h2 className="mt-3 font-display text-3xl font-semibold text-white">
                            {localizedText(item.title, language)}
                          </h2>
                        </div>
                        <p className="font-display text-5xl text-white/16">0{index + 1}</p>
                      </div>

                      <p className="mt-4 text-sm leading-7 text-slate-300/78">
                        {localizedText(item.description, language)}
                      </p>

                      <div className="mt-5 grid gap-4">
                        <div className="metric-rail p-4">
                          <p className="font-mono text-[0.68rem] uppercase tracking-[0.18em] text-cyan-100/52">
                            {localizedText(projects.detailsLabel.solution, language)}
                          </p>
                          <p className="mt-3 text-sm leading-7 text-slate-300/76">
                            {localizedText(item.details.solution, language)}
                          </p>
                        </div>
                        <div className="metric-rail p-4">
                          <p className="font-mono text-[0.68rem] uppercase tracking-[0.18em] text-cyan-100/52">
                            {localizedText(projects.detailsLabel.results, language)}
                          </p>
                          <p className="mt-3 text-sm leading-7 text-emerald-300/82">
                            {localizedText(item.details.results, language)}
                          </p>
                        </div>
                      </div>

                      <div className="mt-5 flex flex-wrap gap-2">
                        {item.features.map((feature) => (
                          <span
                            key={localizedText(feature, language)}
                            className="border border-cyan-300/14 bg-cyan-300/[0.04] px-3 py-1.5 font-mono text-[0.7rem] uppercase tracking-[0.14em] text-slate-200/76"
                          >
                            {localizedText(feature, language)}
                          </span>
                        ))}
                      </div>
                    </article>
                  </ScrollReveal>
                ))}
              </div>
            </div>
          </ScrollReveal>
        </section>

        <section className="relative mx-auto max-w-7xl px-6 pb-24 md:px-12 lg:px-20">
          <ScrollReveal direction="from-bottom" delay={260}>
            <div className="terminal-panel p-8 md:p-10">
                <div className="grid gap-6 md:grid-cols-[1.3fr_0.8fr] md:items-center">
                <div>
                  <p className="section-kicker">{localizedText(siteContent.identity.name, language)}</p>
                  <h2 className="mt-3 font-display text-4xl font-semibold text-white">
                    {localizedText(projects.cta.title, language)}
                  </h2>
                  <p className="mt-4 max-w-3xl text-sm leading-7 text-slate-300/76 md:text-base">
                    {localizedText(projects.cta.subtitle, language)}
                  </p>
                </div>
                <div className="flex flex-wrap gap-4 md:justify-end">
                  <Button
                    onClick={() => navigate('/contact')}
                    className="quant-button-primary h-12 px-6 font-mono text-[0.78rem] uppercase tracking-[0.16em]"
                  >
                    {localizedText(projects.cta.button, language)}
                    <ArrowRightIcon className="size-4" />
                  </Button>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </section>
      </div>
    </>
  );
};

export default ProjectsPage;
