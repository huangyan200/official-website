import { siteContent } from '../../client/src/content/site-content';

describe('siteContent public-safe website contract', () => {
  it('keeps the public brand and launch navigation shell', () => {
    expect(siteContent.identity.name.zh).toBe('任能量化');
    expect(siteContent.identity.name.en).toBe('EnergyQuant Research');
    expect(siteContent.identity.email).toBe('info@enyquant.com');
    expect(siteContent.navigation.map((item) => item.key)).toEqual([
      'home',
      'projects',
      'news',
      'knowledge',
      'about',
      'contact',
    ]);
    expect(siteContent.navigation.find((item) => item.key === 'projects')?.label.zh).toBe('解决方案');
  });

  it('uses a public-safe home and solutions structure without evidence metrics', () => {
    expect(siteContent.home.hero.slogan.zh).toBe('建模。定价。执行。');
    expect(siteContent.home.hero.subtitle.zh).toContain('任能量化构建可审计的 AI 与量化决策系统');
    expect('evidence' in siteContent.home).toBe(false);
    expect('stats' in siteContent.home.cta).toBe(false);
    expect(siteContent.projects.title.zh).toBe('解决方案');
    expect(siteContent.projects.solutions).toHaveLength(3);
    expect(siteContent.projects.solutions.map((item) => item.key)).toEqual(['vpp', 'algo', 'bess']);
  });

  it('uses approved milestones and excludes the rejected Yancheng award', () => {
    expect(siteContent.news.items).toHaveLength(6);
    expect(siteContent.news.items.map((item) => item.date.zh)).toEqual([
      '2024.10',
      '2024.11',
      '2025.05',
      '2025.12',
      '2026.01',
      '2026',
    ]);
    expect(siteContent.news.items.some((item) => item.title.zh.includes('盐城'))).toBe(false);
    expect(siteContent.news.items.some((item) => item.summary.zh.includes('盐城'))).toBe(false);
  });

  it('turns knowledge into a public-safe knowledge entry', () => {
    expect(siteContent.knowledge.tracks).toHaveLength(3);
    expect(siteContent.knowledge.tracks.flatMap((track) => track.topics)).toHaveLength(6);
    expect(siteContent.knowledge.safetyNote.zh).toContain('不涉及交易策略');
    expect(siteContent.knowledge.safetyNote.zh).toContain('不涉及模型参数');
  });

  it('keeps about and contact focused on public positioning and outreach', () => {
    expect(siteContent.about.serviceTargets.items).toContainEqual({
      zh: '储能企业',
      en: 'Energy storage companies',
    });
    expect(siteContent.about.marketFocus.items).toContainEqual({
      zh: '中国电力市场',
      en: 'China power markets',
    });
    expect(siteContent.contact.inquiryTypes).toHaveLength(4);
    expect(siteContent.contact.inquiryTypes.map((item) => item.zh)).toEqual([
      '商务合作与场景交流',
      '研究与咨询沟通',
      '行业交流与内容合作',
      '人才加入',
    ]);
  });
});
