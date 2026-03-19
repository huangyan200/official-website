import React from 'react';
import { CalendarIcon } from 'lucide-react';
import ScrollReveal from '@/components/ScrollReveal';
import SEO from '@/components/SEO';
import { localizedText, siteContent } from '@/content/site-content';
import { useLanguage } from '@/components/LanguageContext';

const NewsPage: React.FC = () => {
  const { language } = useLanguage();
  const seo = siteContent.seo.news;
  const news = siteContent.news;
  const breadcrumbs = [
    { name: localizedText(siteContent.navigation[0].label, language), path: '/' },
    { name: localizedText(siteContent.navigation[2].label, language), path: '/news' },
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
                {localizedText(news.heading, language)}
              </h1>
              <p className="max-w-3xl text-base leading-8 text-slate-300/82 md:text-lg">
                {localizedText(news.summary, language)}
              </p>
            </div>
          </ScrollReveal>
        </section>

        <section className="relative mx-auto max-w-7xl px-6 pb-24 md:px-12 lg:px-20">
          <div className="space-y-5">
            {news.items.map((item, index) => (
              <ScrollReveal key={`${item.date.en}-${index}`} direction="from-bottom" delay={160 + index * 70}>
                <article className="case-band p-6 md:p-7">
                  <div className="grid gap-6 md:grid-cols-[190px_1fr]">
                    <div className="border-b border-cyan-300/12 pb-4 md:border-b-0 md:border-r md:pb-0 md:pr-6">
                      <div className="flex items-center gap-2 font-mono text-[0.72rem] uppercase tracking-[0.16em] text-cyan-100/62">
                        <CalendarIcon className="size-4" />
                        <span>{localizedText(item.date, language)}</span>
                      </div>
                      <p className="mt-4 inline-flex border border-cyan-300/14 bg-cyan-300/[0.04] px-3 py-1.5 font-mono text-[0.7rem] uppercase tracking-[0.14em] text-slate-200/76">
                        {localizedText(item.category, language)}
                      </p>
                    </div>

                    <div className="space-y-3">
                      <h2 className="font-display text-3xl font-semibold text-white">
                        {localizedText(item.title, language)}
                      </h2>
                      <p className="text-sm leading-7 text-slate-300/78 md:text-base">
                        {localizedText(item.summary, language)}
                      </p>
                    </div>
                  </div>
                </article>
              </ScrollReveal>
            ))}
          </div>
        </section>
      </div>
    </>
  );
};

export default NewsPage;
