import * as fs from 'node:fs';
import * as path from 'node:path';

const projectRoot = path.resolve(__dirname, '../..');
const pagesRoot = path.join(projectRoot, 'client', 'src', 'pages');

const pageFiles = [
  path.join(pagesRoot, 'HomePage', 'HomePage.tsx'),
  path.join(pagesRoot, 'ProjectsPage', 'ProjectsPage.tsx'),
  path.join(pagesRoot, 'NewsPage', 'NewsPage.tsx'),
  path.join(pagesRoot, 'KnowledgeBasePage', 'KnowledgeBasePage.tsx'),
  path.join(pagesRoot, 'KnowledgeArticlePage', 'KnowledgeArticlePage.tsx'),
  path.join(pagesRoot, 'AboutPage', 'AboutPage.tsx'),
  path.join(pagesRoot, 'ContactPage', 'ContactPage.tsx'),
];

describe('site pages public-safe launch contract', () => {
  it.each(pageFiles)('%s imports centralized site content', (filePath) => {
    const content = fs.readFileSync(filePath, 'utf8');

    expect(content).toContain("from '@/content/site-content'");
  });

  it.each(pageFiles)('%s does not keep mock launch data', (filePath) => {
    const content = fs.readFileSync(filePath, 'utf8');

    expect(content).not.toMatch(/mockProjects|mockResources|mockNewsData/);
  });

  it('home page no longer references the removed evidence block', () => {
    const content = fs.readFileSync(path.join(pagesRoot, 'HomePage', 'HomePage.tsx'), 'utf8');

    expect(content).toContain('home.hero.slogan');
    expect(content).toContain('projects.solutions');
    expect(content).not.toContain('home.evidence');
  });

  it('projects page renders three solution sections instead of case-study buckets and stats', () => {
    const content = fs.readFileSync(path.join(pagesRoot, 'ProjectsPage', 'ProjectsPage.tsx'), 'utf8');

    expect(content).toContain('projects.solutions.map');
    expect(content).not.toContain('caseStudies');
    expect(content).not.toContain('projects.stats');
    expect(content).not.toContain('projects.caseStudiesTitle');
  });

  it('news page remains a milestones list and excludes article metadata behavior', () => {
    const content = fs.readFileSync(path.join(pagesRoot, 'NewsPage', 'NewsPage.tsx'), 'utf8');

    expect(content).toContain('news.items.map');
    expect(content).not.toContain('type="article"');
    expect(content).not.toContain('publishedTime=');
    expect(content).not.toContain('modifiedTime=');
  });

  it('knowledge page renders knowledge tracks and topic lists instead of placeholder cards', () => {
    const content = fs.readFileSync(path.join(pagesRoot, 'KnowledgeBasePage', 'KnowledgeBasePage.tsx'), 'utf8');

    expect(content).toContain('knowledge.articles.map');
    expect(content).not.toContain('knowledge.upcomingItems');
  });

  it('app routes include the knowledge article detail page', () => {
    const content = fs.readFileSync(path.join(projectRoot, 'client', 'src', 'app.tsx'), 'utf8');

    expect(content).toContain('KnowledgeArticlePage');
    expect(content).toContain('path="knowledge/:slug"');
  });

  it('knowledge article page renders article navigation and related articles', () => {
    const content = fs.readFileSync(
      path.join(pagesRoot, 'KnowledgeArticlePage', 'KnowledgeArticlePage.tsx'),
      'utf8'
    );

    expect(content).toContain('previousArticle');
    expect(content).toContain('nextArticle');
    expect(content).toContain('relatedArticles');
    expect(content).toContain('relatedFallbackSlugs');
    expect(content).toContain('knowledge.labels.continueReading');
    expect(content).toContain('knowledge.labels.relatedArticles');
  });

  it('about page no longer renders quantitative counters or market project totals', () => {
    const content = fs.readFileSync(path.join(pagesRoot, 'AboutPage', 'AboutPage.tsx'), 'utf8');

    expect(content).not.toContain('CountUpNumber');
    expect(content).not.toContain('about.market.totalProjects');
    expect(content).not.toContain('about.research.algorithm.items');
    expect(content).not.toContain('about.research.engineering.items');
  });

  it('contact page keeps direct contact and does not reintroduce fake forms', () => {
    const content = fs.readFileSync(path.join(pagesRoot, 'ContactPage', 'ContactPage.tsx'), 'utf8');

    expect(content).toContain('contact.inquiryTypes');
    expect(content).not.toMatch(/useForm|zodResolver|toast\.success|setTimeout/);
  });
});
