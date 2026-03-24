import React from 'react';
import { Link, useParams } from 'react-router-dom';
import ScrollReveal from '@/components/ScrollReveal';
import SEO from '@/components/SEO';
import { localizedText, siteContent } from '@/content/site-content';
import { useLanguage } from '@/components/LanguageContext';

const KnowledgeArticlePage: React.FC = () => {
  const { language } = useLanguage();
  const { slug } = useParams<{ slug: string }>();
  const knowledge = siteContent.knowledge;
  const article = knowledge.articles.find((entry) => entry.slug === slug);

  if (!article) {
    const fallbackBreadcrumbs = [
      { name: localizedText(siteContent.navigation[0].label, language), path: '/' },
      { name: localizedText(siteContent.navigation[3].label, language), path: '/knowledge' },
    ];

    return (
      <>
        <SEO
          title={localizedText(siteContent.seo.knowledge.title, language)}
          description={localizedText(siteContent.seo.knowledge.description, language)}
          keywords={localizedText(siteContent.seo.knowledge.keywords, language)}
          breadcrumbs={fallbackBreadcrumbs}
        />
        <section className="mx-auto max-w-4xl px-6 py-28 md:px-12 lg:px-20">
          <div className="surface-panel editorial-stack rounded-[2rem] p-8 md:p-10">
            <p className="section-kicker">{localizedText(siteContent.identity.name, language)}</p>
            <h1 className="font-display text-4xl font-semibold text-slate-950 md:text-5xl">
              {language === 'zh' ? '文章未找到' : 'Article Not Found'}
            </h1>
            <p className="text-[1rem] leading-8 text-slate-700">
              {language === 'zh'
                ? '当前文章链接不可用，你可以返回知识中心查看其他公开内容。'
                : 'This article link is unavailable. Please return to the knowledge hub to browse other public materials.'}
            </p>
            <Link
              to="/knowledge"
              className="inline-flex w-fit items-center rounded-full border border-slate-300 px-4 py-2 text-[0.95rem] font-semibold text-slate-900 transition-colors hover:border-slate-950 hover:bg-slate-950 hover:text-white"
            >
              {localizedText(knowledge.labels.backToKnowledge, language)}
            </Link>
          </div>
        </section>
      </>
    );
  }

  const breadcrumbs = [
    { name: localizedText(siteContent.navigation[0].label, language), path: '/' },
    { name: localizedText(siteContent.navigation[3].label, language), path: '/knowledge' },
    { name: localizedText(article.title, language), path: `/knowledge/${article.slug}` },
  ];

  return (
    <>
      <SEO
        title={`${localizedText(article.title, language)} | ${localizedText(siteContent.identity.name, language)}`}
        description={localizedText(article.summary, language)}
        keywords={`${localizedText(article.category, language)}, ${localizedText(siteContent.seo.knowledge.keywords, language)}`}
        breadcrumbs={breadcrumbs}
        type="article"
        publishedTime={article.publishedTime}
        modifiedTime={article.publishedTime}
      />

      <div className="relative overflow-hidden">
        <section className="mx-auto max-w-4xl px-6 py-24 md:px-12 md:py-28 lg:px-20">
          <ScrollReveal direction="from-bottom" delay={100}>
            <div className="editorial-stack">
              <div className="flex flex-wrap items-center gap-3 text-[0.88rem] font-semibold tracking-[0.03em] text-slate-500">
                <span>{localizedText(article.category, language)}</span>
                <span className="text-slate-300">/</span>
                <span>{localizedText(article.readTime, language)}</span>
                <span className="text-slate-300">/</span>
                <span>{localizedText(article.publishedAt, language)}</span>
              </div>
              <p className="section-kicker">{localizedText(siteContent.identity.name, language)}</p>
              <h1 className="font-display text-[clamp(2.7rem,7vw,5rem)] font-semibold leading-[0.98] text-slate-950">
                {localizedText(article.title, language)}
              </h1>
              <p className="text-[1.08rem] leading-8 text-slate-700 md:text-[1.16rem]">
                {localizedText(article.summary, language)}
              </p>
              <div className="inline-flex w-fit rounded-full border border-sky-200 bg-sky-50 px-3 py-1 text-[0.82rem] font-semibold text-sky-700">
                {localizedText(article.safeScopeLabel, language)}
              </div>
            </div>
          </ScrollReveal>
        </section>

        <section className="mx-auto max-w-4xl px-6 pb-28 md:px-12 lg:px-20">
          <ScrollReveal direction="from-bottom" delay={140}>
            <article className="surface-panel editorial-stack rounded-[2rem] p-8 md:p-10">
              <p className="border-l border-slate-200 pl-4 text-[1rem] leading-8 text-slate-700">
                {localizedText(article.heroNote, language)}
              </p>

              {article.sections.map((section) => (
                <section key={localizedText(section.heading, language)} className="editorial-stack">
                  <h2 className="font-display text-[1.8rem] font-semibold text-slate-950">
                    {localizedText(section.heading, language)}
                  </h2>
                  <div className="space-y-5 text-[1rem] leading-8 text-slate-700">
                    {section.body.map((paragraph) => (
                      <p key={localizedText(paragraph, language)}>{localizedText(paragraph, language)}</p>
                    ))}
                  </div>
                </section>
              ))}

              <section className="editorial-stack">
                <p className="section-kicker">{localizedText(knowledge.labels.keyTakeaways, language)}</p>
                <ul className="space-y-3 text-[1rem] leading-7 text-slate-700">
                  {article.keyTakeaways.map((item) => (
                    <li key={localizedText(item, language)} className="border-l border-slate-200 pl-4">
                      {localizedText(item, language)}
                    </li>
                  ))}
                </ul>
              </section>

              <section className="light-stage editorial-stack rounded-[1.6rem] p-6">
                <p className="section-kicker">{localizedText(knowledge.labels.boundaryTitle, language)}</p>
                <p className="text-[1rem] leading-8 text-slate-700">
                  {localizedText(article.boundaryNote, language)}
                </p>
              </section>

              <Link
                to="/knowledge"
                className="inline-flex w-fit items-center rounded-full border border-slate-300 px-4 py-2 text-[0.95rem] font-semibold text-slate-900 transition-colors hover:border-slate-950 hover:bg-slate-950 hover:text-white"
              >
                {localizedText(knowledge.labels.backToKnowledge, language)}
              </Link>
            </article>
          </ScrollReveal>
        </section>
      </div>
    </>
  );
};

export default KnowledgeArticlePage;
