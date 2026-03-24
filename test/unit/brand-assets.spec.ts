import * as fs from 'node:fs';
import * as path from 'node:path';

const projectRoot = path.resolve(__dirname, '../..');
const read = (relativePath: string) =>
  fs.readFileSync(path.join(projectRoot, relativePath), 'utf8');

describe('brand assets', () => {
  it('publish the new logo as a light lockup and keep a compact favicon mark', () => {
    const logo = read('client/public/logo.svg');
    const favicon = read('client/public/favicon.svg');
    const layout = read('client/src/components/Layout.tsx');

    expect(logo).toContain('任能量化');
    expect(logo).toContain('EnergyQuant Research');
    expect(logo).toContain('fill="#ffffff"');
    expect(logo).toContain('rx="28"');
    expect(favicon).toContain('任能量化 mark');
    expect(favicon).toContain('url(#accent)');
    expect(layout).toContain('src="/favicon.svg"');
    expect(layout).toContain('min-w-0');
    expect(layout).not.toContain('max-w-[228px]');
  });

  it('rewrites all og assets and metadata to the new domain and brand', () => {
    const indexHtml = read('client/index.html');
    const seoComponent = read('client/src/components/SEO.tsx');
    const ogFiles = [
      'client/public/images/og/og-default.svg',
      'client/public/images/og/og-image.svg',
      'client/public/images/og/og-about.svg',
      'client/public/images/og/og-contact.svg',
      'client/public/images/og/og-knowledge.svg',
      'client/public/images/og/og-news.svg',
      'client/public/images/og/og-projects.svg',
    ];

    expect(indexHtml).toContain('https://enyquant.com');
    expect(indexHtml).toContain('任能量化');
    expect(seoComponent).toContain("const SITE_URL = 'https://enyquant.com';");
    expect(seoComponent).toContain('logo: `${SITE_URL}/logo.svg`');

    for (const file of ogFiles) {
      const content = read(file);
      expect(content).toContain('任能量化');
      expect(content).toContain('EnergyQuant Research');
      expect(content).toContain('enyquant.com');
    }
  });
});
