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
        <section className="relative mx-auto max-w-7xl px-6 py-24 md:px-12 md:py-28 lg:px-20">
          <ScrollReveal direction="from-bottom" delay={100}>
            <div className="editorial-stack max-w-4xl">
              <p className="section-kicker">{localizedText(siteContent.identity.name, language)}</p>
              <h1 className="font-display text-[clamp(3rem,8vw,6rem)] font-semibold leading-[0.95] text-slate-950">
                {localizedText(knowledge.heading, language)}
              </h1>
              <p className="text-[1.08rem] leading-8 text-slate-700 md:text-[1.16rem]">
                {localizedText(knowledge.summary, language)}
              </p>
            </div>
          </ScrollReveal>
        </section>

        <section className="relative mx-auto max-w-7xl px-6 pb-28 md:px-12 lg:px-20">
          <ScrollReveal direction="from-bottom" delay={160}>
            <div className="surface-panel editorial-stack rounded-[2rem] p-8 md:p-10">
              <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-start">
                <div className="editorial-stack">
                  <p className="section-kicker">{localizedText(knowledge.tagline, language)}</p>
                  <h2 className="font-display text-3xl font-semibold text-slate-950 md:text-4xl">
                    {language === 'zh' ? '公开知识入口' : 'Public Knowledge Entry'}
                  </h2>
                  <p className="text-[1rem] leading-8 text-slate-700">
                    {localizedText(knowledge.safetyNote, language)}
                  </p>
                </div>
                <div className="light-stage rounded-[1.6rem] p-6">
                    <p className="text-[0.94rem] font-semibold tracking-[0.03em] text-sky-700">
                    Public Knowledge / Safe Scope
                  </p>
                  <p className="mt-4 text-[1rem] leading-8 text-slate-700">
                    {localizedText(knowledge.contactNote, language)}
                  </p>
                </div>
              </div>

              <div className="story-grid lg:grid-cols-3">
                {knowledge.tracks.map((track, index) => {
                  const Icon = icons[index] ?? FileTextIcon;

                  return (
                    <article key={track.key} className="light-stage editorial-stack rounded-[1.8rem] p-6 md:p-7">
                      <div className="flex items-center justify-between gap-4">
                        <div className="flex size-12 items-center justify-center rounded-2xl border border-slate-200 bg-white text-slate-700 shadow-sm">
                          <Icon className="size-5" />
                        </div>
                        <p className="font-display text-5xl text-slate-300">0{index + 1}</p>
                      </div>
                      <h2 className="font-display text-[2rem] font-semibold text-slate-950">
                        {localizedText(track.title, language)}
                      </h2>
                      <p className="text-[1rem] leading-8 text-slate-700">
                        {localizedText(track.summary, language)}
                      </p>
                      <ul className="space-y-3 text-[1rem] leading-7 text-slate-700">
                        {track.topics.map((topic) => (
                          <li key={localizedText(topic, language)} className="border-l border-slate-200 pl-3">
                            {localizedText(topic, language)}
                          </li>
                        ))}
                      </ul>
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
