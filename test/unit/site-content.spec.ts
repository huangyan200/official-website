import { siteContent } from '../../client/src/content/site-content';

describe('siteContent content-preserved contract', () => {
  it('uses Reneng identity and keeps the launch navigation shell', () => {
    expect(siteContent.identity.name.zh).toBe('任能科技');
    expect(siteContent.identity.name.en).toBe('Reneng Technology');
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

  it('restores the original high-signal home, projects, and about copy', () => {
    expect(siteContent.home.hero.slogan.zh).toBe('建模。定价。执行。');
    expect(siteContent.home.hero.subtitle.zh).toContain('EnergyQuant 构建可审计的 AI 与量化决策系统');
    expect(siteContent.projects.title.zh).toBe('项目展示');
    expect(siteContent.projects.subtitle.zh).toContain('AI+能源市场的落地案例与标准化解决方案');
    expect(siteContent.about.title.zh).toBe('关于任能');
    expect(siteContent.about.company.title.zh).toBe('任能是谁');
    expect(siteContent.about.company.content.zh).toContain('围绕电价预测、储能优化、虚拟电厂与算法交易等方向持续建设能力');
  });

  it('de-templates knowledge, about, and contact copy', () => {
    expect(siteContent.knowledge.upcomingTitle.zh).toBe('正在整理的公开内容');
    expect(siteContent.knowledge.summary.zh).toContain('研究文章、方法说明和项目实践材料');
    expect(siteContent.contact.summary.zh).toContain('欢迎通过以下方式联系我们');
    expect(siteContent.contact.channelsTitle.zh).toBe('联系方式');
    expect(siteContent.contact.noteTitle.zh).toBe('沟通说明');
    expect(siteContent.about.mission.title.zh).toBe('我们的判断与坚持');
  });

  it('uses the news route as a company milestones timeline instead of a website changelog', () => {
    expect(siteContent.navigation.find((item) => item.key === 'news')?.label.zh).toBe('发展历程');
    expect(siteContent.news.heading.en).toBe('Milestones');
    expect(siteContent.news.summary.en).toMatch(/milestones|journey/i);
    expect(siteContent.seo.news.description.en).toMatch(/milestones|development journey/i);
    expect(siteContent.news.items[0]?.category.zh).not.toBe('站点更新');
    expect(typeof siteContent.news.items[0]?.date).toBe('object');
  });
});
