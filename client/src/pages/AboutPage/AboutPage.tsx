import React from 'react';
import { CompassIcon, LandmarkIcon, NetworkIcon, SparklesIcon } from 'lucide-react';
import ScrollReveal from '@/components/ScrollReveal';
import SEO from '@/components/SEO';
import CountUpNumber from '@/components/CountUpNumber';
import { localizedText, siteContent } from '@/content/site-content';
import { useLanguage } from '@/components/LanguageContext';

const missionIcons = [CompassIcon, SparklesIcon, NetworkIcon];

const AboutPage: React.FC = () => {
  const { language } = useLanguage();
  const seo = siteContent.seo.about;
  const about = siteContent.about;
  const breadcrumbs = [
    { name: localizedText(siteContent.navigation[0].label, language), path: '/' },
    { name: localizedText(siteContent.navigation[4].label, language), path: '/about' },
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
            <div className="space-y-5">
              <p className="section-kicker">{localizedText(siteContent.identity.name, language)}</p>
              <h1 className="font-display text-5xl font-semibold text-white md:text-7xl">
                {localizedText(about.title, language)}
              </h1>
              <p className="max-w-3xl text-base leading-8 text-slate-300/82 md:text-lg">
                {localizedText(about.subtitle, language)}
              </p>
            </div>
          </ScrollReveal>
        </section>

        <section className="relative mx-auto max-w-7xl px-6 pb-16 md:px-12 lg:px-20">
          <ScrollReveal direction="from-bottom" delay={150}>
            <div className="section-frame p-7 md:p-8 lg:p-10">
              <div className="grid gap-8 lg:grid-cols-[1.08fr_0.92fr]">
                <div>
                  <div className="mb-5 flex items-center gap-3">
                    <div className="flex size-11 items-center justify-center border border-cyan-300/18 bg-cyan-300/8 text-cyan-100">
                      <LandmarkIcon className="size-5" />
                    </div>
                    <h2 className="font-display text-3xl font-semibold text-white">
                      {localizedText(about.company.title, language)}
                    </h2>
                  </div>

                  <div className="space-y-4">
                    <p className="text-sm leading-8 text-slate-300/78 md:text-base">
                      {localizedText(about.company.content, language)}
                    </p>
                    <p className="text-sm leading-8 text-slate-300/72 md:text-base">
                      {localizedText(about.company.history, language)}
                    </p>
                  </div>

                  <div className="mt-6 flex flex-wrap gap-2">
                    {about.company.coreBusiness.map((entry) => (
                      <span
                        key={localizedText(entry, language)}
                        className="border border-cyan-300/14 bg-cyan-300/[0.04] px-3 py-1.5 font-mono text-[0.7rem] uppercase tracking-[0.14em] text-slate-200/76"
                      >
                        {localizedText(entry, language)}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="grid gap-4 sm:grid-cols-2">
                  {about.company.stats.map((stat, index) => (
                    <div key={localizedText(stat.label, language)} className="metric-rail p-4">
                      <p className="font-mono text-[0.68rem] uppercase tracking-[0.18em] text-cyan-100/52">
                        {localizedText(stat.label, language)}
                      </p>
                      <div className="mt-3 text-white">
                        {Number.isNaN(Number(stat.value)) ? (
                          <span className="text-base leading-7 text-slate-200/84">{stat.value}</span>
                        ) : (
                          <CountUpNumber
                            end={Number(stat.value.replace(/[^\d.]/g, ''))}
                            suffix={stat.value.replace(/[\d.]/g, '')}
                            duration={1400}
                            delay={index * 120}
                            className="font-display text-4xl font-semibold text-white"
                          />
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </ScrollReveal>
        </section>

        <section className="relative mx-auto max-w-7xl px-6 pb-16 md:px-12 lg:px-20">
          <ScrollReveal direction="from-bottom" delay={190}>
            <div className="space-y-7">
              <div>
                <p className="section-kicker">{localizedText(about.mission.title, language)}</p>
              </div>
              <div className="grid gap-5 lg:grid-cols-3">
                {[
                  {
                    key: 'mission',
                    title: localizedText(about.mission.mission.label, language),
                    body: localizedText(about.mission.mission.text, language),
                  },
                  {
                    key: 'vision',
                    title: localizedText(about.mission.vision.label, language),
                    body: localizedText(about.mission.vision.text, language),
                  },
                  {
                    key: 'values',
                    title: localizedText(about.mission.values.label, language),
                    body: localizedText(about.mission.values.items[0], language),
                    bullets: about.mission.values.items.slice(1).map((item) => localizedText(item, language)),
                  },
                ].map((item, index) => {
                  const Icon = missionIcons[index] ?? CompassIcon;

                  return (
                    <article key={item.key} className="cut-corner-card p-6 md:p-7">
                      <div className="mb-5 flex size-11 items-center justify-center border border-cyan-300/18 bg-cyan-300/8 text-cyan-100">
                        <Icon className="size-5" />
                      </div>
                      <h3 className="font-display text-2xl font-semibold text-white">{item.title}</h3>
                      <p className="mt-4 text-sm leading-7 text-slate-300/78">{item.body}</p>
                      {'bullets' in item && item.bullets ? (
                        <ul className="mt-4 space-y-3 text-sm leading-7 text-slate-300/76">
                          {item.bullets.map((bullet) => (
                            <li key={bullet} className="border-l border-cyan-300/16 pl-3">
                              {bullet}
                            </li>
                          ))}
                        </ul>
                      ) : null}
                    </article>
                  );
                })}
              </div>
            </div>
          </ScrollReveal>
        </section>

        <section className="relative mx-auto max-w-7xl px-6 pb-24 md:px-12 lg:px-20">
          <ScrollReveal direction="from-bottom" delay={230}>
            <div className="grid gap-6 lg:grid-cols-[1fr_1fr]">
              <article className="section-frame p-7 md:p-8">
                <div className="mb-6">
                  <p className="section-kicker">{localizedText(about.research.title, language)}</p>
                  <p className="mt-3 text-sm leading-7 text-slate-300/74">
                    {localizedText(about.research.subtitle, language)}
                  </p>
                </div>

                <div className="space-y-6">
                  <div>
                    <h3 className="font-display text-2xl font-semibold text-white">
                      {localizedText(about.research.algorithm.title, language)}
                    </h3>
                    <div className="mt-4 grid gap-4 sm:grid-cols-3">
                      {about.research.algorithm.items.map((item, index) => (
                        <div key={localizedText(item.label, language)} className="metric-rail p-4">
                          <p className="font-mono text-[0.68rem] uppercase tracking-[0.18em] text-cyan-100/52">
                            {localizedText(item.label, language)}
                          </p>
                          <CountUpNumber
                            end={item.value}
                            suffix={item.unit}
                            duration={1400}
                            delay={index * 120}
                            className="mt-3 font-display text-4xl font-semibold text-white"
                          />
                        </div>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h3 className="font-display text-2xl font-semibold text-white">
                      {localizedText(about.research.engineering.title, language)}
                    </h3>
                    <div className="mt-4 grid gap-4 sm:grid-cols-3">
                      {about.research.engineering.items.map((item, index) => (
                        <div key={localizedText(item.label, language)} className="metric-rail p-4">
                          <p className="font-mono text-[0.68rem] uppercase tracking-[0.18em] text-cyan-100/52">
                            {localizedText(item.label, language)}
                          </p>
                          <CountUpNumber
                            end={item.value}
                            suffix={item.unit}
                            duration={1400}
                            delay={index * 120}
                            className="mt-3 font-display text-4xl font-semibold text-white"
                          />
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </article>

              <article className="section-frame p-7 md:p-8">
                <div className="mb-6">
                  <p className="section-kicker">{localizedText(about.market.title, language)}</p>
                  <p className="mt-3 text-sm leading-7 text-slate-300/74">
                    {localizedText(about.market.subtitle, language)}
                  </p>
                </div>

                <div className="space-y-4">
                  {about.market.regions.map((region) => (
                    <div
                      key={localizedText(region.region, language)}
                      className="cut-corner-card p-4"
                    >
                      <div className="flex items-center gap-3">
                        <span className="text-2xl">{region.flag}</span>
                        <div>
                          <p className="font-display text-xl font-semibold text-white">
                            {localizedText(region.region, language)}
                          </p>
                          <p className="text-sm text-slate-300/72">
                            {localizedText(about.market.projects, language)}: {region.projects}
                          </p>
                        </div>
                      </div>
                      <div className="mt-4 flex flex-wrap gap-2">
                        {region.locations.map((location) => (
                          <span
                            key={localizedText(location, language)}
                            className="border border-cyan-300/14 bg-cyan-300/[0.04] px-3 py-1.5 font-mono text-[0.7rem] uppercase tracking-[0.14em] text-slate-200/76"
                          >
                            {localizedText(location, language)}
                          </span>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-6 border-t border-cyan-300/12 pt-5">
                  <p className="font-mono text-[0.68rem] uppercase tracking-[0.18em] text-cyan-100/52">
                    {localizedText(about.market.label, language)}
                  </p>
                  <p className="mt-3 font-display text-2xl text-white">
                    {localizedText(about.market.totalProjects, language)}
                  </p>
                </div>
              </article>
            </div>
          </ScrollReveal>
        </section>
      </div>
    </>
  );
};

export default AboutPage;
