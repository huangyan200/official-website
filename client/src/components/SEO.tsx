import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { useLanguage } from './LanguageContext';
import { localizedText, siteContent } from '@/content/site-content';

interface ISEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  image?: string;
  type?: 'website' | 'article';
  breadcrumbs?: Array<{ name: string; path: string }>;
  publishedTime?: string;
  modifiedTime?: string;
  author?: string;
}

const SITE_URL = 'https://energyquant.org';
const DEFAULT_IMAGE = `${SITE_URL}/images/og/og-default.jpg`;

const SEO: React.FC<ISEOProps> = ({
  title,
  description,
  keywords,
  image = DEFAULT_IMAGE,
  type = 'website',
  breadcrumbs,
  publishedTime,
  modifiedTime,
  author,
}) => {
  const { language } = useLanguage();
  const location = useLocation();
  const currentUrl = `${SITE_URL}${location.pathname}`;
  const locale = language === 'zh' ? 'zh-CN' : 'en-US';
  const alternateLocale = language === 'zh' ? 'en-US' : 'zh-CN';
  const identityName = localizedText(siteContent.identity.name, language);
  const defaultSeo = siteContent.seo.default;
  const resolvedTitle = title ?? localizedText(defaultSeo.title, language);
  const resolvedDescription = description ?? localizedText(defaultSeo.description, language);
  const resolvedKeywords = keywords ?? localizedText(defaultSeo.keywords, language);
  const resolvedAuthor = author ?? identityName;

  useEffect(() => {
    document.documentElement.lang = locale;
    document.title = resolvedTitle;

    const previousNodes = document.querySelectorAll('[data-seo="true"]');
    previousNodes.forEach((node) => node.remove());

    const appendMeta = (key: string, content: string, useProperty = false) => {
      const meta = document.createElement('meta');
      meta.setAttribute('data-seo', 'true');
      meta.setAttribute(useProperty ? 'property' : 'name', key);
      meta.setAttribute('content', content);
      document.head.appendChild(meta);
    };

    const appendLink = (rel: string, href: string, hreflang?: string) => {
      const link = document.createElement('link');
      link.setAttribute('data-seo', 'true');
      link.setAttribute('rel', rel);
      link.setAttribute('href', href);
      if (hreflang) {
        link.setAttribute('hreflang', hreflang);
      }
      document.head.appendChild(link);
    };

    appendMeta('description', resolvedDescription);
    appendMeta('keywords', resolvedKeywords);
    appendMeta('author', resolvedAuthor);
    appendMeta('og:type', type, true);
    appendMeta('og:site_name', localizedText(siteContent.identity.name, language), true);
    appendMeta('og:title', resolvedTitle, true);
    appendMeta('og:description', resolvedDescription, true);
    appendMeta('og:url', currentUrl, true);
    appendMeta('og:image', image, true);
    appendMeta('og:locale', locale, true);
    appendMeta('og:locale:alternate', alternateLocale, true);
    appendMeta('twitter:card', 'summary_large_image');
    appendMeta('twitter:title', resolvedTitle);
    appendMeta('twitter:description', resolvedDescription);
    appendMeta('twitter:image', image);

    appendLink('canonical', currentUrl);
    appendLink('alternate', currentUrl, locale);
    appendLink('alternate', currentUrl, alternateLocale);
    appendLink('alternate', currentUrl, 'x-default');

    const schema: Record<string, unknown>[] = [
      {
        '@context': 'https://schema.org',
        '@type': 'Organization',
        name: identityName,
        url: SITE_URL,
        logo: `${SITE_URL}/logo.svg`,
        description: resolvedDescription,
      },
      {
        '@context': 'https://schema.org',
        '@type': 'WebSite',
        name: identityName,
        url: SITE_URL,
        description: resolvedDescription,
      },
    ];

    if (breadcrumbs && breadcrumbs.length > 0) {
      schema.push({
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        itemListElement: breadcrumbs.map((item, index) => ({
          '@type': 'ListItem',
          position: index + 1,
          name: item.name,
          item: `${SITE_URL}${item.path}`,
        })),
      });
    }

    if (type === 'article') {
      schema.push({
        '@context': 'https://schema.org',
        '@type': 'Article',
        headline: resolvedTitle,
        description: resolvedDescription,
        image,
        datePublished: publishedTime,
        dateModified: modifiedTime ?? publishedTime,
        author: resolvedAuthor,
      });
    }

    const schemaScript = document.createElement('script');
    schemaScript.setAttribute('data-seo', 'true');
    schemaScript.setAttribute('type', 'application/ld+json');
    schemaScript.textContent = JSON.stringify(schema);
    document.head.appendChild(schemaScript);
  }, [
    alternateLocale,
    breadcrumbs,
    currentUrl,
    identityName,
    image,
    language,
    locale,
    modifiedTime,
    publishedTime,
    resolvedAuthor,
    resolvedDescription,
    resolvedKeywords,
    resolvedTitle,
    type,
  ]);

  return null;
};

export default SEO;
