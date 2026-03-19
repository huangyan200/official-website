import React from 'react';
import { BookOpenTextIcon, FileTextIcon, LibraryBigIcon } from 'lucide-react';
import ScrollReveal from '@/components/ScrollReveal';
import SEO from '@/components/SEO';
import { localizedText, siteContent } from '@/content/site-content';
import { useLanguage } from '@/components/LanguageContext';

const icons = [FileTextIcon, LibraryBigIcon, BookOpenTextIcon];

const KnowledgeBasePage: React.FC = () => {
  const { language } = useLanguage();
  const seo = siteContent.seo.knowledge;
  const knowledge = siteContent.knowledge;
  const breadcrumbs = [
    { name: localizedText(siteContent.navigation[0].label, language), path: '/' },
    { name: localizedText(siteContent.navigation[3].label, language), path: '/knowledge' },
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
                {localizedText(knowledge.heading, language)}
              </h1>
              <p className="max-w-3xl text-base leading-8 text-slate-300/82 md:text-lg">
                {localizedText(knowledge.summary, language)}
              </p>
            </div>
          </ScrollReveal>
        </section>

        <section className="relative mx-auto max-w-7xl px-6 pb-24 md:px-12 lg:px-20">
          <ScrollReveal direction="from-bottom" delay={160}>
            <div className="section-frame p-7 md:p-8 lg:p-10">
              <div className="flex flex-wrap items-end justify-between gap-6">
                <div>
                  <p className="section-kicker">{localizedText(knowledge.upcomingTitle, language)}</p>
                  <p className="mt-4 max-w-2xl text-sm leading-7 text-slate-300/72">
                    {localizedText(knowledge.contactNote, language)}
                  </p>
                </div>
                <p className="font-mono text-[0.74rem] uppercase tracking-[0.18em] text-cyan-100/52">
                  Quant Lab / Public Notes
                </p>
              </div>

              <div className="mt-8 grid gap-5 lg:grid-cols-3">
                {knowledge.upcomingItems.map((item, index) => {
                  const Icon = icons[index] ?? FileTextIcon;

                  return (
                    <article key={localizedText(item, language)} className="cut-corner-card p-6 md:p-7">
                      <p className="font-display text-5xl text-white/18">0{index + 1}</p>
                      <div className="mt-6 flex size-11 items-center justify-center border border-cyan-300/18 bg-cyan-300/8 text-cyan-100">
                        <Icon className="size-5" />
                      </div>
                      <p className="mt-6 text-base leading-8 text-slate-200/84">
                        {localizedText(item, language)}
                      </p>
                    </article>
                  );
                })}
              </div>
            </div>
          </ScrollReveal>
        </section>
      </div>
    </>
  );
};

export default KnowledgeBasePage;
