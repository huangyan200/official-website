import React from 'react';
import { MailIcon, MapPinIcon, MessageSquareTextIcon } from 'lucide-react';
import { UniversalLink } from '@lark-apaas/client-toolkit/components/UniversalLink';
import SEO from '@/components/SEO';
import ScrollReveal from '@/components/ScrollReveal';
import { localizedText, siteContent } from '@/content/site-content';
import { useLanguage } from '@/components/LanguageContext';

const ContactPage: React.FC = () => {
  const { language } = useLanguage();
  const seo = siteContent.seo.contact;
  const contact = siteContent.contact;
  const breadcrumbs = [
    { name: localizedText(siteContent.navigation[0].label, language), path: '/' },
    { name: localizedText(siteContent.navigation[5].label, language), path: '/contact' },
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
                {localizedText(contact.heading, language)}
              </h1>
              <p className="max-w-3xl text-base leading-8 text-slate-300/82 md:text-lg">
                {localizedText(contact.summary, language)}
              </p>
            </div>
          </ScrollReveal>
        </section>

        <section className="relative mx-auto max-w-7xl px-6 pb-24 md:px-12 lg:px-20">
          <div className="grid gap-6 lg:grid-cols-[1.18fr_0.92fr]">
            <ScrollReveal direction="from-bottom" delay={160}>
              <div className="terminal-panel h-full p-7 md:p-8">
                <div className="mb-6 flex items-center gap-3">
                  <div className="flex size-11 items-center justify-center border border-cyan-300/18 bg-cyan-300/8 text-cyan-100">
                    <MailIcon className="size-5" />
                  </div>
                  <h2 className="font-display text-3xl font-semibold text-white">
                    {localizedText(contact.channelsTitle, language)}
                  </h2>
                </div>

                <div className="space-y-5">
                  {contact.channels.map((channel) => (
                    <article key={channel.label.en} className="metric-rail p-5">
                      <p className="font-mono text-[0.68rem] uppercase tracking-[0.18em] text-cyan-100/52">
                        {localizedText(channel.label, language)}
                      </p>
                      {channel.href ? (
                        <UniversalLink
                          to={channel.href}
                          className="mt-3 block font-display text-2xl text-white transition-colors hover:text-cyan-100"
                        >
                          {channel.value}
                        </UniversalLink>
                      ) : (
                        <p className="mt-3 font-display text-2xl text-white">{channel.value}</p>
                      )}
                      {channel.note ? (
                        <p className="mt-3 text-sm leading-7 text-slate-300/74">
                          {localizedText(channel.note, language)}
                        </p>
                      ) : null}
                    </article>
                  ))}
                </div>
              </div>
            </ScrollReveal>

            <div className="grid gap-6">
              <ScrollReveal direction="from-bottom" delay={220}>
                <div className="cut-corner-card p-6 md:p-7">
                  <div className="mb-5 flex size-11 items-center justify-center border border-cyan-300/18 bg-cyan-300/8 text-cyan-100">
                    <MessageSquareTextIcon className="size-5" />
                  </div>
                  <h2 className="font-display text-3xl font-semibold text-white">
                    {localizedText(contact.inquiryTitle, language)}
                  </h2>
                  <ul className="mt-5 space-y-3 text-sm leading-7 text-slate-300/76">
                    {contact.inquiryTypes.map((item) => (
                      <li key={item.en} className="border-l border-cyan-300/16 pl-3">
                        {localizedText(item, language)}
                      </li>
                    ))}
                  </ul>
                </div>
              </ScrollReveal>

              <ScrollReveal direction="from-bottom" delay={280}>
                <div className="section-frame p-6 md:p-7">
                  <div className="mb-5 flex size-11 items-center justify-center border border-cyan-300/18 bg-cyan-300/8 text-cyan-100">
                    <MapPinIcon className="size-5" />
                  </div>
                  <h2 className="font-display text-3xl font-semibold text-white">
                    {localizedText(contact.noteTitle, language)}
                  </h2>
                  <p className="mt-4 text-sm leading-7 text-slate-300/76">
                    {localizedText(contact.noteBody, language)}
                  </p>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default ContactPage;
