import * as fs from 'node:fs';
import * as path from 'node:path';

const projectRoot = path.resolve(__dirname, '../..');
const pagesRoot = path.join(projectRoot, 'client', 'src', 'pages');

const pageFiles = [
  path.join(pagesRoot, 'HomePage', 'HomePage.tsx'),
  path.join(pagesRoot, 'ProjectsPage', 'ProjectsPage.tsx'),
  path.join(pagesRoot, 'NewsPage', 'NewsPage.tsx'),
  path.join(pagesRoot, 'KnowledgeBasePage', 'KnowledgeBasePage.tsx'),
  path.join(pagesRoot, 'AboutPage', 'AboutPage.tsx'),
  path.join(pagesRoot, 'ContactPage', 'ContactPage.tsx'),
];

describe('site pages launch contract', () => {
  it.each(pageFiles)('%s imports centralized site content', (filePath) => {
    const content = fs.readFileSync(filePath, 'utf8');

    expect(content).toContain("from '@/content/site-content'");
  });

  it.each(pageFiles)('%s does not keep mock launch data', (filePath) => {
    const content = fs.readFileSync(filePath, 'utf8');

    expect(content).not.toMatch(/mockProjects|mockResources|mockNewsData/);
  });

  it('contact page no longer renders fake form workflow', () => {
    const content = fs.readFileSync(path.join(pagesRoot, 'ContactPage', 'ContactPage.tsx'), 'utf8');

    expect(content).not.toMatch(/useForm|zodResolver|toast\.success|setTimeout/);
  });
  it('home page renders restored hero and evidence sections from centralized content', () => {
    const content = fs.readFileSync(path.join(pagesRoot, 'HomePage', 'HomePage.tsx'), 'utf8');

    expect(content).toContain('home.hero.slogan');
    expect(content).toContain('home.evidence');
  });

  it('projects page renders restored portfolio sections from centralized content', () => {
    const content = fs.readFileSync(path.join(pagesRoot, 'ProjectsPage', 'ProjectsPage.tsx'), 'utf8');

    expect(content).toContain('projects.caseStudiesTitle');
    expect(content).toContain('projects.solutionsTitle');
  });

  it('news page treats the route as a milestones list instead of a dated article detail', () => {
    const content = fs.readFileSync(path.join(pagesRoot, 'NewsPage', 'NewsPage.tsx'), 'utf8');

    expect(content).not.toContain('type="article"');
    expect(content).not.toContain('publishedTime=');
    expect(content).not.toContain('modifiedTime=');
  });

  it('about page renders restored company and mission sections from centralized content', () => {
    const content = fs.readFileSync(path.join(pagesRoot, 'AboutPage', 'AboutPage.tsx'), 'utf8');

    expect(content).toContain('about.company');
    expect(content).toContain('about.mission');
  });

  it('removes template-like headings and filler from about/contact page shells', () => {
    const about = fs.readFileSync(path.join(pagesRoot, 'AboutPage', 'AboutPage.tsx'), 'utf8');
    const contact = fs.readFileSync(path.join(pagesRoot, 'ContactPage', 'ContactPage.tsx'), 'utf8');

    expect(about).not.toContain('about.tagline');
    expect(contact).not.toContain('Good reasons to reach out');
    expect(contact).not.toContain('Public-info note');
  });
});
