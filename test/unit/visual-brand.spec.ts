import * as fs from 'node:fs';
import * as path from 'node:path';

const projectRoot = path.resolve(__dirname, '../..');

const read = (relativePath: string) =>
  fs.readFileSync(path.join(projectRoot, relativePath), 'utf8');

describe('quant brand visual shell', () => {
  it('switches the theme fonts to Space Grotesk + Noto Sans SC + JetBrains Mono', () => {
    const theme = read('client/src/tailwind-theme.css');

    expect(theme).toContain('Space Grotesk');
    expect(theme).toContain('Noto Sans SC');
    expect(theme).not.toContain("family=Inter");
  });

  it('defines shared quant-brand visual primitives in global css', () => {
    const styles = read('client/src/index.css');

    expect(styles).toContain('.quant-shell');
    expect(styles).toContain('.ambient-glow');
    expect(styles).toContain('.signal-panel');
    expect(styles).toContain('.metric-rail');
    expect(styles).toContain('.case-band');
    expect(styles).toContain('@media (prefers-reduced-motion: reduce)');
  });

  it('applies the quant shell and differentiated brand primitives across core pages', () => {
    const layout = read('client/src/components/Layout.tsx');
    const home = read('client/src/pages/HomePage/HomePage.tsx');
    const projects = read('client/src/pages/ProjectsPage/ProjectsPage.tsx');
    const about = read('client/src/pages/AboutPage/AboutPage.tsx');
    const knowledge = read('client/src/pages/KnowledgeBasePage/KnowledgeBasePage.tsx');
    const contact = read('client/src/pages/ContactPage/ContactPage.tsx');

    expect(layout).toContain('quant-shell');
    expect(home).toContain('signal-panel');
    expect(home).toContain('metric-rail');
    expect(projects).toContain('case-band');
    expect(about).toContain('section-frame');
    expect(knowledge).toContain('cut-corner-card');
    expect(contact).toContain('terminal-panel');
  });

  it('uses valid Tailwind arbitrary grid syntax for split layouts', () => {
    const sourceFiles = [
      'client/src/components/Layout.tsx',
      'client/src/pages/HomePage/HomePage.tsx',
      'client/src/pages/ProjectsPage/ProjectsPage.tsx',
      'client/src/pages/AboutPage/AboutPage.tsx',
      'client/src/pages/NewsPage/NewsPage.tsx',
      'client/src/pages/ContactPage/ContactPage.tsx',
    ];

    for (const file of sourceFiles) {
      const content = read(file);
      expect(content).not.toMatch(/grid-cols-\[[^\]]*,[^\]]*\]/);
    }
  });
});
