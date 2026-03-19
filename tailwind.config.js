const { createTailwindPresetOfSimple } = require('@lark-apaas/fullstack-presets');

module.exports = {
  presets: [createTailwindPresetOfSimple()],
  content: [
    './client/src/app.tsx',
    './client/src/index.css',
    './client/src/tailwind-theme.css',
    './client/src/typography.css',
    './client/src/components/CountUpNumber.tsx',
    './client/src/components/DataFlowParticles.tsx',
    './client/src/components/LanguageContext.tsx',
    './client/src/components/Layout.tsx',
    './client/src/components/ScrollReveal.tsx',
    './client/src/components/SEO.tsx',
    './client/src/components/ui/badge.tsx',
    './client/src/components/ui/button.tsx',
    './client/src/components/ui/card.tsx',
    './client/src/components/ui/input.tsx',
    './client/src/pages/AboutPage/**/*.tsx',
    './client/src/pages/ContactPage/**/*.tsx',
    './client/src/pages/HomePage/**/*.tsx',
    './client/src/pages/KnowledgeBasePage/**/*.tsx',
    './client/src/pages/NewsPage/**/*.tsx',
    './client/src/pages/NotFound/**/*.tsx',
    './client/src/pages/ProjectsPage/**/*.tsx',
  ],
  plugins: [],
};
