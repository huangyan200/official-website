export type SiteLanguage = 'zh' | 'en';

export interface LocalizedText {
  zh: string;
  en: string;
}

export interface NavItem {
  key: 'home' | 'projects' | 'news' | 'knowledge' | 'about' | 'contact';
  path: string;
  label: LocalizedText;
}

export interface SeoEntry {
  title: LocalizedText;
  description: LocalizedText;
  keywords: LocalizedText;
}

export interface ContactChannel {
  label: LocalizedText;
  value: string;
  href?: string;
  note?: LocalizedText;
}

export interface NewsItem {
  date: LocalizedText;
  category: LocalizedText;
  title: LocalizedText;
  summary: LocalizedText;
}

export interface SolutionTrack {
  key: 'vpp' | 'algo' | 'bess';
  title: LocalizedText;
  subtitle: LocalizedText;
  summary: LocalizedText;
  audience: LocalizedText[];
  scenarios: LocalizedText[];
  outputs: LocalizedText[];
  value: LocalizedText;
  accent: string;
}

export interface KnowledgeTrack {
  key: string;
  title: LocalizedText;
  summary: LocalizedText;
  topics: LocalizedText[];
}

export interface KnowledgeArticleSection {
  heading: LocalizedText;
  body: LocalizedText[];
}

export interface KnowledgeArticle {
  slug: string;
  category: LocalizedText;
  title: LocalizedText;
  summary: LocalizedText;
  publishedAt: LocalizedText;
  publishedTime: string;
  readTime: LocalizedText;
  safeScopeLabel: LocalizedText;
  heroNote: LocalizedText;
  sections: KnowledgeArticleSection[];
  keyTakeaways: LocalizedText[];
  boundaryNote: LocalizedText;
}

export interface AboutNarrativeCard {
  key: string;
  title: LocalizedText;
  body: LocalizedText;
  bullets?: LocalizedText[];
}

export interface AboutListSection {
  title: LocalizedText;
  summary: LocalizedText;
  items: LocalizedText[];
}

export interface AboutHighlight {
  label: LocalizedText;
  value: LocalizedText;
}

export const localizedText = (text: LocalizedText, language: SiteLanguage) => text[language];

const solutionTracks: SolutionTrack[] = [
  {
    key: 'vpp',
    title: {
      zh: '虚拟电厂聚合',
      en: 'Virtual Power Plant Aggregation',
    },
    subtitle: {
      zh: 'VPP Aggregation',
      en: 'VPP Aggregation',
    },
    summary: {
      zh: '聚合分布式光伏、充电桩与工业负荷，参与需求响应、调峰调频与灵活性价值管理。',
      en: 'Aggregate distributed solar, charging assets, and industrial loads to support demand response, balancing services, and flexibility value management.',
    },
    audience: [
      { zh: '园区运营方', en: 'Industrial parks' },
      { zh: '工商业用户', en: 'Commercial and industrial users' },
      { zh: '虚拟电厂运营主体', en: 'VPP operators' },
    ],
    scenarios: [
      { zh: '需求响应参与', en: 'Demand response participation' },
      { zh: '调峰调频协同', en: 'Balancing and frequency coordination' },
      { zh: '分布式资源聚合', en: 'Distributed resource aggregation' },
    ],
    outputs: [
      { zh: '聚合策略设计', en: 'Aggregation strategy design' },
      { zh: '调度与收益分析', en: 'Dispatch and value analysis' },
      { zh: '项目实施支持', en: 'Project implementation support' },
    ],
    value: {
      zh: '帮助灵活性资产形成可管理、可运营、可解释的市场参与能力。',
      en: 'Build manageable, operable, and explainable market participation capability for flexible assets.',
    },
    accent: '#22c55e',
  },
  {
    key: 'algo',
    title: {
      zh: '电力交易算法服务',
      en: 'Power Market Algorithm Service',
    },
    subtitle: {
      zh: 'Algo-Trading Service',
      en: 'Algo-Trading Service',
    },
    summary: {
      zh: '面向发电集团与售电公司提供现货辅助决策、报价优化、风险控制与执行支持。',
      en: 'Provide spot-market decision support, bid optimization, risk control, and execution support for generators and retailers.',
    },
    audience: [
      { zh: '发电集团', en: 'Generation groups' },
      { zh: '售电公司', en: 'Retail electricity companies' },
      { zh: '能源集团交易团队', en: 'Energy trading teams' },
    ],
    scenarios: [
      { zh: '现货报价支持', en: 'Spot bid support' },
      { zh: '中长期组合优化', en: 'Contract portfolio optimization' },
      { zh: '风险敞口分析', en: 'Risk exposure analysis' },
    ],
    outputs: [
      { zh: '算法服务接口', en: 'Algorithm service interfaces' },
      { zh: '策略研究与咨询', en: 'Strategy research and advisory' },
      { zh: '执行支持流程', en: 'Execution support workflows' },
    ],
    value: {
      zh: '把市场经验、算法研究与工程系统连接起来，提升交易决策质量与执行效率。',
      en: 'Connect market experience, algorithm research, and engineering systems to improve trading decision quality and execution efficiency.',
    },
    accent: '#3b82f6',
  },
  {
    key: 'bess',
    title: {
      zh: '储能资产增值',
      en: 'BESS Optimization',
    },
    subtitle: {
      zh: 'BESS Optimization',
      en: 'BESS Optimization',
    },
    summary: {
      zh: '围绕峰谷套利、辅助服务、容量收益与需求响应，提升储能资产利用效率与运营可解释性。',
      en: 'Improve storage asset utilization and operating explainability across arbitrage, ancillary services, capacity value, and demand response.',
    },
    audience: [
      { zh: '工商业储能业主', en: 'Commercial and industrial storage owners' },
      { zh: '源网侧储能项目方', en: 'Grid-side storage developers' },
      { zh: '储能平台与运营团队', en: 'Storage operators and platforms' },
    ],
    scenarios: [
      { zh: '峰谷价差利用', en: 'Peak-valley spread utilization' },
      { zh: '辅助服务参与', en: 'Ancillary-service participation' },
      { zh: '容量与调度协同', en: 'Capacity and dispatch coordination' },
    ],
    outputs: [
      { zh: '收益结构诊断', en: 'Value-stack diagnostics' },
      { zh: '运营策略建议', en: 'Operating strategy recommendations' },
      { zh: '全生命周期管理支持', en: 'Lifecycle management support' },
    ],
    value: {
      zh: '帮助储能项目建立更稳健、更可持续的运营框架，而不是依赖单一收益假设。',
      en: 'Help storage projects build a steadier and more sustainable operating framework instead of depending on a single revenue assumption.',
    },
    accent: '#f59e0b',
  },
];

const milestoneItems: NewsItem[] = [
  {
    date: { zh: '2024.10', en: '2024.10' },
    category: { zh: '基金支持', en: 'Fund Support' },
    title: {
      zh: '获得代尔夫特能源倡议创业发展基金支持',
      en: 'Received support from the Delft energy-initiative startup fund',
    },
    summary: {
      zh: '完成早期项目支持，为后续技术验证与团队建设提供了启动基础。',
      en: 'Secured early-stage support that helped establish the basis for technical validation and team formation.',
    },
  },
  {
    date: { zh: '2024.11', en: '2024.11' },
    category: { zh: '机构成立', en: 'Institution Launch' },
    title: {
      zh: '成立 Energy Quant Research Institution',
      en: 'Established Energy Quant Research Institution',
    },
    summary: {
      zh: '形成围绕算法开发、电力市场建模与能源经济分析的研发实体。',
      en: 'Established a research entity focused on algorithm development, power-market modeling, and energy-economics analysis.',
    },
  },
  {
    date: { zh: '2025.05', en: '2025.05' },
    category: { zh: '合作拓展', en: 'Partnerships' },
    title: {
      zh: '与电力交易公司、英国高校及 BESS 企业达成合作',
      en: 'Built partnerships with a power-trading company, a UK university, and BESS companies',
    },
    summary: {
      zh: '围绕交易、研究与储能场景展开合作，为后续跨市场能力建设提供基础。',
      en: 'Expanded collaboration across trading, research, and storage scenarios to support cross-market capability building.',
    },
  },
  {
    date: { zh: '2025.12', en: '2025.12' },
    category: { zh: '赛事奖项', en: 'Recognition' },
    title: {
      zh: '深圳创新创业大赛海外分站赛一等奖',
      en: 'Won first prize at the Shenzhen innovation competition overseas regional event',
    },
    summary: {
      zh: '获得创新创业赛事认可，提升了公司在能源 AI 方向的外部可见度。',
      en: 'Received external recognition that strengthened the company’s visibility in energy AI.',
    },
  },
  {
    date: { zh: '2026.01', en: '2026.01' },
    category: { zh: '赛事奖项', en: 'Recognition' },
    title: {
      zh: '全国人工智能应用场景创新挑战赛种子组一等奖',
      en: 'Won first prize in the seed group of the national AI application innovation challenge',
    },
    summary: {
      zh: '在人工智能应用场景方向获得公开认可，进一步强化技术品牌叙事。',
      en: 'Received public recognition in AI application scenarios, strengthening the technology narrative.',
    },
  },
  {
    date: { zh: '2026', en: '2026' },
    category: { zh: '中国布局', en: 'China Launch' },
    title: {
      zh: '北京任能量化启动中国市场布局',
      en: 'EnergyQuant Research launched its China market presence in Beijing',
    },
    summary: {
      zh: '围绕中国能源市场改革窗口期，正式启动本地化运营、技术适配与市场合作布局。',
      en: 'Started localized operations, technical adaptation, and market-facing collaboration around the China power-market reform window.',
    },
  },
];

const knowledgeTracks: KnowledgeTrack[] = [
  {
    key: 'foundation',
    title: {
      zh: '电力市场基础',
      en: 'Power Market Fundamentals',
    },
    summary: {
      zh: '建立对电力市场、交易机制与常见参与主体的基础理解。',
      en: 'Build a shared understanding of power markets, trading mechanisms, and market participants.',
    },
    topics: [
      { zh: '什么是电力市场', en: 'What is a power market?' },
      { zh: '现货市场、辅助服务与虚拟电厂是什么', en: 'What are spot markets, ancillary services, and VPPs?' },
    ],
  },
  {
    key: 'observation',
    title: {
      zh: '市场机制与行业观察',
      en: 'Market Structure And Observation',
    },
    summary: {
      zh: '围绕中国与欧洲市场机制演进，整理公开、可分享的行业认知。',
      en: 'Organize public, shareable observations on how Chinese and European market structures evolve.',
    },
    topics: [
      { zh: '中国电力市场改革的关键阶段', en: 'Key phases of China power-market reform' },
      { zh: '欧洲与中国电力市场有哪些关键差异', en: 'Key differences between European and Chinese power markets' },
    ],
  },
  {
    key: 'framework',
    title: {
      zh: '方法框架与系统认知',
      en: 'Frameworks And System Thinking',
    },
    summary: {
      zh: '只展示高层方法框架与系统认知，不展开交易细节与敏感实现。',
      en: 'Show only high-level frameworks and system thinking without exposing trading details or sensitive implementation logic.',
    },
    topics: [
      { zh: '储能项目有哪些公开可理解的收益来源', en: 'What are the public and explainable value sources for storage projects?' },
      { zh: '从数据到预测到执行：能源 AI 系统的高层框架', en: 'From data to forecast to execution: a high-level framework for energy AI systems' },
    ],
  },
];

const knowledgeArticles: KnowledgeArticle[] = [
  {
    slug: 'what-is-a-power-market',
    category: { zh: '市场基础', en: 'Market Fundamentals' },
    title: {
      zh: '什么是电力市场：从计划调度到市场化交易',
      en: 'What Is A Power Market: From Planned Dispatch To Market Trading',
    },
    summary: {
      zh: '用公开、可理解的语言解释电力市场为什么出现、解决什么问题，以及中长期、现货与辅助服务之间的关系。',
      en: 'Explain why power markets exist, what problems they solve, and how long-term contracts, spot markets, and ancillary services work together.',
    },
    publishedAt: { zh: '2026.03', en: '2026.03' },
    publishedTime: '2026-03-24',
    readTime: { zh: '约 6 分钟', en: '6 min read' },
    safeScopeLabel: { zh: '公开科普', en: 'Public Primer' },
    heroNote: {
      zh: '电力市场不是把电当成普通商品简单买卖，而是在电网约束下用价格信号协调发电、用电与灵活性资源。',
      en: 'A power market is not a simple commodity exchange. It uses price signals under grid constraints to coordinate generation, demand, and flexible resources.',
    },
    sections: [
      {
        heading: { zh: '为什么需要电力市场', en: 'Why Power Markets Exist' },
        body: [
          {
            zh: '传统电力系统长期依赖计划调度与行政定价，但随着电源结构复杂化、用户需求变化和新能源占比提升，单一计划体系越来越难同时兼顾效率、成本和灵活性。',
            en: 'Traditional power systems relied on planned dispatch and administrative pricing, but a more complex generation mix, changing demand, and higher renewable penetration make it harder for a single planning regime to balance efficiency, cost, and flexibility.',
          },
          {
            zh: '市场化并不意味着完全放任，而是在安全约束、调度规则和结算体系之内，用价格帮助系统表达稀缺性和调节价值。',
            en: 'Marketization does not mean removing control. It means using prices within reliability constraints, dispatch rules, and settlement systems to express scarcity and the value of flexibility.',
          },
        ],
      },
      {
        heading: { zh: '中长期、现货与辅助服务如何衔接', en: 'How Long-Term, Spot, And Ancillary Layers Connect' },
        body: [
          {
            zh: '中长期市场更强调锁定电量与价格，为参与者提供稳定预期；现货市场承担更接近交割时点的供需平衡与价格发现；辅助服务则补足频率、备用和爬坡等系统稳定需求。',
            en: 'Long-term markets focus on locking in volume and prices, spot markets handle balancing and price discovery closer to delivery, and ancillary services cover stability needs such as frequency response, reserve, and ramping.',
          },
          {
            zh: '这三层不是彼此替代，而是围绕同一交割体系分层协同运行。理解这种衔接关系，是理解储能、虚拟电厂和交易系统为什么会越来越重要的起点。',
            en: 'These layers do not replace each other. They operate around the same delivery system at different horizons. Understanding that linkage is the starting point for understanding why storage, VPPs, and trading systems matter more over time.',
          },
        ],
      },
    ],
    keyTakeaways: [
      { zh: '电力市场的目标是提升资源配置效率，而不是取消系统约束。', en: 'Power markets aim to improve resource allocation, not remove system constraints.' },
      { zh: '中长期、现货和辅助服务是同一体系中的不同层次。', en: 'Long-term, spot, and ancillary services are different layers of the same system.' },
      { zh: '价格信号的价值在于表达稀缺性、灵活性和实时平衡压力。', en: 'Price signals matter because they express scarcity, flexibility, and real-time balancing pressure.' },
    ],
    boundaryNote: {
      zh: '本文仅用于公开知识分享，不构成交易建议、投资建议或项目实施建议。',
      en: 'This article is for public knowledge sharing only and does not constitute trading, investment, or project implementation advice.',
    },
  },
  {
    slug: 'public-value-stack-of-storage',
    category: { zh: '储能框架', en: 'Storage Framework' },
    title: {
      zh: '储能项目的公开价值框架：不仅是峰谷套利',
      en: 'The Public Value Framework For Storage: More Than Energy Arbitrage',
    },
    summary: {
      zh: '从公开可解释的角度梳理储能项目的价值来源，说明为什么储能不能只按单一价差逻辑理解。',
      en: 'Outline the public and explainable value sources of storage projects and show why storage cannot be understood only through a single spread-arbitrage lens.',
    },
    publishedAt: { zh: '2026.03', en: '2026.03' },
    publishedTime: '2026-03-24',
    readTime: { zh: '约 7 分钟', en: '7 min read' },
    safeScopeLabel: { zh: '公开方法框架', en: 'Public Framework' },
    heroNote: {
      zh: '储能的价值常常来自多种市场与调节职责的叠加，而不是某一个收益点的短期放大。',
      en: 'Storage often creates value by stacking multiple market and balancing roles instead of relying on one narrowly defined revenue source.',
    },
    sections: [
      {
        heading: { zh: '为什么单一套利视角不够', en: 'Why A Single-Arbitrage View Is Not Enough' },
        body: [
          {
            zh: '在公开讨论里，储能经常被简化为“低价充电、高价放电”。这种描述有帮助，但它忽略了储能同时面对功率、能量、状态区间和履约义务等多重约束。',
            en: 'In public discussions, storage is often simplified as charge low and discharge high. That framing is useful, but it ignores the fact that storage operates under power, energy, state-of-charge, and delivery constraints at the same time.',
          },
          {
            zh: '现实中的储能价值通常由多层收益组成，例如能量套利、辅助服务、容量补偿、需求响应或园区级灵活性支持。',
            en: 'In practice, storage value usually comes from several layers, including energy arbitrage, ancillary services, capacity value, demand response, or site-level flexibility support.',
          },
        ],
      },
      {
        heading: { zh: '更稳健的公开价值栈理解', en: 'A More Robust Public Value Stack' },
        body: [
          {
            zh: '更稳健的理解方式，是把储能看成一种可以在不同时间尺度上提供灵活性的资源。短周期里，它帮助系统平衡波动；更长周期里，它帮助资产管理者组织收益结构与运营节奏。',
            en: 'A more robust lens is to treat storage as a flexibility resource operating across different time scales. At short horizons it helps the system absorb volatility, and at longer horizons it helps operators organize revenue structure and operating cadence.',
          },
          {
            zh: '因此，讨论储能价值时，更适合使用“价值栈”和“适用场景”两个概念，而不是直接跳到某个项目的具体收益数字。',
            en: 'That is why public discussions of storage are better framed in terms of value stack and deployment scenarios rather than project-specific revenue figures.',
          },
        ],
      },
    ],
    keyTakeaways: [
      { zh: '储能的价值通常来自多市场、多职责的叠加。', en: 'Storage value often comes from stacking multiple markets and operating roles.' },
      { zh: '公开表达应聚焦价值框架和适用场景，而不是项目收益参数。', en: 'Public communication should focus on value frameworks and deployment scenarios, not project-level revenue parameters.' },
      { zh: '单一价差逻辑无法完整解释储能在新型电力系统中的角色。', en: 'A single spread-arbitrage story cannot fully explain the role of storage in modern power systems.' },
    ],
    boundaryNote: {
      zh: '本文仅用于公开知识分享，不构成交易建议、投资建议或项目实施建议。',
      en: 'This article is for public knowledge sharing only and does not constitute trading, investment, or project implementation advice.',
    },
  },
  {
    slug: 'china-vs-europe-power-markets',
    category: { zh: '行业观察', en: 'Market Observation' },
    title: {
      zh: '中国与欧洲电力市场有哪些关键差异',
      en: 'What Are The Key Differences Between Chinese And European Power Markets',
    },
    summary: {
      zh: '从市场组织方式、价格形成和阅读方法三个角度，解释中国与欧洲电力市场为什么不能机械类比。',
      en: 'Explain why Chinese and European power markets should not be compared mechanically, focusing on market organization, price formation, and how to read them.',
    },
    publishedAt: { zh: '2026.03', en: '2026.03' },
    publishedTime: '2026-03-24',
    readTime: { zh: '约 6 分钟', en: '6 min read' },
    safeScopeLabel: { zh: '公开行业观察', en: 'Public Observation' },
    heroNote: {
      zh: '跨市场视角的价值，不在于把一个地区的机制模板直接复制到另一个地区，而在于理解各自制度为何形成、如何演进。',
      en: 'The value of a cross-market lens is not copying one region’s template into another, but understanding why each market design emerged and how it evolves.',
    },
    sections: [
      {
        heading: { zh: '共同点：都在解决同一类系统问题', en: 'Shared Ground: Both Solve Similar System Problems' },
        body: [
          {
            zh: '无论是中国还是欧洲，电力市场都要处理同样的核心问题：如何在可靠供电前提下完成价格发现、资源协调和灵活性激励。',
            en: 'Both Chinese and European power markets must solve the same core problems: price discovery, resource coordination, and flexibility incentives under reliability constraints.',
          },
          {
            zh: '因此，两边都会出现中长期安排、现货出清、辅助服务和跨区域协调这些共同主题。',
            en: 'That is why both regions feature recurring themes such as long-term contracting, spot clearing, ancillary services, and cross-regional coordination.',
          },
        ],
      },
      {
        heading: { zh: '差异点：制度成熟度、价格颗粒度与运行单元', en: 'Where They Differ: Maturity, Granularity, And Operating Units' },
        body: [
          {
            zh: '欧洲自由化市场的发展更早，跨国耦合、分区定价和连续交易等机制形成了较成熟的共同语言。中国市场则更强调全国统一框架下的省级和区域运行单元，不同省份所处阶段和机制差异仍然很大。',
            en: 'European liberalized markets developed earlier, so cross-border coupling, zonal pricing, and continuous trading form a more mature shared language. China, by contrast, operates through provincial and regional units inside a national reform framework, with large differences across provinces and market stages.',
          },
          {
            zh: '这意味着阅读中国市场时，不能把某一省份的运行方式误认为全国统一机制；阅读欧洲市场时，也不能忽略国家之间在约束、耦合和产品设计上的差异。',
            en: 'That means a single Chinese province should not be mistaken for a national template, and European markets should not be treated as if national differences in constraints, coupling, and product design do not matter.',
          },
        ],
      },
    ],
    keyTakeaways: [
      { zh: '中国与欧洲市场在核心目标上相通，但在制度路径上差异显著。', en: 'Chinese and European markets share core objectives but differ sharply in institutional pathways.' },
      { zh: '跨市场比较应该比较机制逻辑，而不是机械复制术语。', en: 'Cross-market comparison should focus on mechanism logic rather than copying terminology mechanically.' },
      { zh: '公开内容更适合讲框架差异，不适合延伸成具体交易判断。', en: 'Public-facing content should explain structural differences, not drift into concrete trading judgments.' },
    ],
    boundaryNote: {
      zh: '本文仅用于公开知识分享，不构成交易建议、投资建议或项目实施建议。',
      en: 'This article is for public knowledge sharing only and does not constitute trading, investment, or project implementation advice.',
    },
  },
  {
    slug: 'from-data-to-forecast-to-execution',
    category: { zh: '系统框架', en: 'System Framework' },
    title: {
      zh: '从数据到预测到执行：能源 AI 系统的高层框架',
      en: 'From Data To Forecast To Execution: A High-Level Energy AI System Framework',
    },
    summary: {
      zh: '用公开、非敏感的方式说明能源 AI 系统通常由哪些层次构成，以及为什么可审计与可解释性是长期关键。',
      en: 'Explain, in a public and non-sensitive way, the typical layers of an energy AI system and why auditability and explainability matter over time.',
    },
    publishedAt: { zh: '2026.03', en: '2026.03' },
    publishedTime: '2026-03-24',
    readTime: { zh: '约 6 分钟', en: '6 min read' },
    safeScopeLabel: { zh: '公开系统框架', en: 'Public System View' },
    heroNote: {
      zh: '能源 AI 系统的价值，不只是模型预测得更准，而是把数据、判断、执行和反馈连接成可持续演进的闭环。',
      en: 'The value of an energy AI system is not only in better forecasting, but in connecting data, decisions, execution, and feedback into an evolvable loop.',
    },
    sections: [
      {
        heading: { zh: '高层系统分层', en: 'The High-Level Stack' },
        body: [
          {
            zh: '一个能源 AI 系统通常可以从上到下分成数据层、预测层、决策层、执行层和监控反馈层。不同团队会有不同命名，但底层逻辑相似：先把信息组织好，再把不确定性转成可执行判断。',
            en: 'An energy AI system can usually be described as a stack of data, forecasting, decision, execution, and monitoring-feedback layers. Teams may name them differently, but the logic is similar: structure information first, then turn uncertainty into executable decisions.',
          },
          {
            zh: '在公开表达中，更重要的是说明这些层为什么需要协同，而不是暴露任何具体模型结构或参数。',
            en: 'For public communication, it matters more to explain why these layers must work together than to expose any concrete model structure or parameter choices.',
          },
        ],
      },
      {
        heading: { zh: '为什么可审计和可解释性重要', en: 'Why Auditability And Explainability Matter' },
        body: [
          {
            zh: '能源系统天然受规则、交付、结算和安全约束影响，因此一个系统不仅要能输出判断，还要让团队知道判断从何而来、可以怎样复核、何时需要人工干预。',
            en: 'Energy systems are shaped by rules, settlement, delivery, and safety constraints. A usable system must not only produce decisions, but also make it possible to understand where they came from, how to review them, and when human intervention is required.',
          },
          {
            zh: '这也是为什么能源 AI 不能只被理解成一个单点模型，而更像是一套围绕真实运行场景组织起来的工作框架。',
            en: 'That is also why energy AI should not be understood as a single model. It is better understood as an operating framework built around real-world workflows.',
          },
        ],
      },
    ],
    keyTakeaways: [
      { zh: '能源 AI 系统通常由数据、预测、决策、执行和反馈几层组成。', en: 'Energy AI systems usually combine data, forecasting, decision, execution, and feedback layers.' },
      { zh: '公开表达应强调系统协同与审计能力，而不是模型细节。', en: 'Public communication should emphasize system coordination and auditability rather than model details.' },
      { zh: '可解释性是系统长期可用性的组成部分，不是附加装饰。', en: 'Explainability is part of long-term usability, not an optional layer of polish.' },
    ],
    boundaryNote: {
      zh: '本文仅用于公开知识分享，不构成交易建议、投资建议或项目实施建议。',
      en: 'This article is for public knowledge sharing only and does not constitute trading, investment, or project implementation advice.',
    },
  },
];

export const siteContent = {
  identity: {
    name: {
      zh: '任能量化',
      en: 'EnergyQuant Research',
    },
    shortName: {
      zh: '任能量化',
      en: 'EnergyQuant Research',
    },
    mark: 'EQ',
    footerSummary: {
      zh: '任能量化围绕能源市场智能化、算法体系与工程化交付展开长期建设，官网用于承接公司介绍、解决方案与公开知识内容分发。',
      en: 'EnergyQuant Research builds long-term capability around energy-market intelligence, algorithm systems, and engineering delivery. This site introduces the company, its solution directions, and public knowledge materials.',
    },
    address: {
      zh: '中国 · 北京',
      en: 'Beijing, China',
    },
    email: 'info@enyquant.com',
    rights: {
      zh: '保留所有权利。',
      en: 'All rights reserved.',
    },
  },
  navigation: [
    { key: 'home', path: '/', label: { zh: '首页', en: 'Home' } },
    { key: 'projects', path: '/projects', label: { zh: '解决方案', en: 'Solutions' } },
    { key: 'news', path: '/news', label: { zh: '发展历程', en: 'Milestones' } },
    { key: 'knowledge', path: '/knowledge', label: { zh: '知识中心', en: 'Knowledge' } },
    { key: 'about', path: '/about', label: { zh: '关于我们', en: 'About' } },
    { key: 'contact', path: '/contact', label: { zh: '联系我们', en: 'Contact' } },
  ] as NavItem[],
  home: {
    hero: {
      tagline: {
        zh: '研究驱动的能源量化系统',
        en: 'Research-Led Energy Market Intelligence',
      },
      slogan: {
        zh: '建模。定价。执行。',
        en: 'We model. We price. We execute.',
      },
      subtitle: {
        zh: '任能量化构建可审计的 AI 与量化决策系统，连接欧洲市场验证与中国改革驱动的增长机会。',
        en: "EnergyQuant Research builds auditable AI and quantitative systems for energy markets, bridging European market validation and China's reform-driven growth.",
      },
      ctaProjects: {
        zh: '查看项目',
        en: 'View Solutions',
      },
      ctaKnowledge: {
        zh: '进入知识库',
        en: 'Explore Knowledge Base',
      },
    },
    solutionsPreview: {
      title: {
        zh: '三大业务解决方案',
        en: 'Three Solution Directions',
      },
      subtitle: {
        zh: '围绕虚拟电厂、电力交易算法服务与储能资产增值，提供公开可解释的能力边界与合作入口。',
        en: 'Public-facing solution directions across VPP aggregation, algorithmic market services, and storage optimization.',
      },
    },
    cta: {
      title: {
        zh: '查看我们的解决方案',
        en: 'Explore Our Solution Directions',
      },
      subtitle: {
        zh: '浏览围绕能源市场场景构建的解决方案边界与公开能力说明。',
        en: 'Review public-facing solution directions and capability boundaries for energy-market scenarios.',
      },
      button: {
        zh: '浏览解决方案',
        en: 'Browse Solutions',
      },
      secondaryButton: {
        zh: '联系任能量化',
        en: 'Contact EnergyQuant Research',
      },
    },
  },
  projects: {
    title: {
      zh: '解决方案',
      en: 'Solutions',
    },
    subtitle: {
      zh: '围绕虚拟电厂聚合、电力交易算法服务与储能资产增值，提供公开可解释的业务边界与合作入口。',
      en: 'Present public-facing business directions across VPP aggregation, power-market algorithm services, and storage optimization.',
    },
    tagline: {
      zh: 'SOLUTION DIRECTIONS',
      en: 'SOLUTION DIRECTIONS',
    },
    labels: {
      audience: { zh: '适用对象', en: 'Audience' },
      scenarios: { zh: '典型场景', en: 'Scenarios' },
      outputs: { zh: '输出内容', en: 'Outputs' },
      value: { zh: '核心价值', en: 'Core Value' },
    },
    solutions: solutionTracks,
    cta: {
      title: {
        zh: '需要进一步沟通解决方案边界？',
        en: 'Need a closer discussion on solution scope?',
      },
      subtitle: {
        zh: '如果你想进一步了解任能量化的能力边界、合作方式与适用场景，可以通过联系页面与我们沟通。',
        en: 'If you want to discuss capability boundaries, collaboration formats, or fit-for-purpose scenarios in more detail, please reach out through the contact page.',
      },
      button: {
        zh: '联系任能量化',
        en: 'Contact EnergyQuant Research',
      },
    },
  },
  about: {
    title: {
      zh: '关于任能量化',
      en: 'About EnergyQuant Research',
    },
    subtitle: {
      zh: '围绕能源市场研究、算法建模与工程交付持续建设能力。',
      en: 'We continue to build capability across energy-market research, algorithmic modeling, and engineering delivery.',
    },
    company: {
      title: {
        zh: '任能量化是谁',
        en: 'Who We Are',
      },
      content: {
        zh: '任能量化聚焦能源市场智能化与工程化落地，围绕电价预测、储能优化、虚拟电厂与交易辅助决策等方向持续建设能力。',
        en: 'EnergyQuant Research focuses on intelligent systems and engineering delivery for energy markets, with long-term capability building across price forecasting, storage optimization, virtual power plants, and trading decision support.',
      },
      history: {
        zh: '我们长期关注电力市场改革、新型电力系统和灵活性资源运营带来的变化，强调研究、建模与交付之间的闭环，而不是停留在概念表达层面。',
        en: 'We pay close attention to power-market reform, new power-system operations, and flexibility-resource participation, with a working style that closes the loop between research, modeling, and delivery rather than stopping at abstract positioning.',
      },
      coreBusiness: [
        { zh: '电力市场研究', en: 'Power-market research' },
        { zh: '储能与灵活性优化', en: 'Storage and flexibility optimization' },
        { zh: '虚拟电厂与调度场景', en: 'VPP and dispatch scenarios' },
        { zh: '交易辅助决策', en: 'Trading decision support' },
      ],
      highlights: [
        {
          label: { zh: '公司使命', en: 'Mission' },
          value: {
            zh: '让算法成为能源系统第二运行机制',
            en: 'Make algorithms the second operating mechanism of energy systems',
          },
        },
        {
          label: { zh: '能力路径', en: 'Capability Path' },
          value: {
            zh: '从数据到模型到策略到执行',
            en: 'From data to models to strategy to execution',
          },
        },
        {
          label: { zh: '服务方式', en: 'Delivery Mode' },
          value: {
            zh: '研究驱动与工程交付并重',
            en: 'Research-led with strong engineering delivery',
          },
        },
        {
          label: { zh: '合作原则', en: 'Collaboration' },
          value: {
            zh: '先理解问题，再展开方案',
            en: 'Understand the problem before shaping the solution',
          },
        },
      ] as AboutHighlight[],
    },
    mission: {
      title: {
        zh: '我们的判断与坚持',
        en: 'What We Believe In',
      },
      cards: [
        {
          key: 'mission',
          title: { zh: '判断', en: 'Viewpoint' },
          body: {
            zh: '我们相信算法不只是辅助工具，而应该成为能源系统里可审计、可验证的一部分，真正参与到建模、定价与执行中。',
            en: 'We believe algorithms should become an auditable and verifiable part of energy systems, participating directly in modeling, pricing, and execution.',
          },
        },
        {
          key: 'vision',
          title: { zh: '方向', en: 'Direction' },
          body: {
            zh: '持续建设面向能源市场的算法与工程能力，在真实场景里把方法做深，把系统做稳。',
            en: 'We aim to keep building algorithmic and engineering capability for energy markets, making the methods deeper and the systems steadier in real operating environments.',
          },
        },
        {
          key: 'values',
          title: { zh: '工作方式', en: 'How We Work' },
          body: {
            zh: '研究、建模与交付必须闭环，公开表达也必须对得起真实能力边界。',
            en: 'Research, modeling, and delivery must form a closed loop, and public communication must respect real capability boundaries.',
          },
          bullets: [
            { zh: '先理解市场问题，再设计模型与系统。', en: 'Understand the market problem first, then design the model and system.' },
            { zh: '尊重事实与数据，避免空泛判断。', en: 'Stay grounded in facts and data instead of generic claims.' },
            { zh: '重视长期建设，而不是短期包装。', en: 'Favor long-term capability building over short-term packaging.' },
          ],
        },
      ] as AboutNarrativeCard[],
    },
    serviceTargets: {
      title: {
        zh: '服务对象',
        en: 'Who We Serve',
      },
      summary: {
        zh: '围绕能源市场中的关键参与者，提供从研究到系统化落地的能力支持。',
        en: 'Support key participants in energy markets with capability that spans from research to systems delivery.',
      },
      items: [
        { zh: '储能企业', en: 'Energy storage companies' },
        { zh: '电厂与发电集团', en: 'Power plants and generation groups' },
        { zh: '售电公司', en: 'Electricity retailers' },
        { zh: '产业园区与工商业场景', en: 'Industrial parks and C&I scenarios' },
        { zh: '能源集团与项目开发方', en: 'Energy groups and project developers' },
      ],
    } as AboutListSection,
    marketFocus: {
      title: {
        zh: '关注市场',
        en: 'Markets We Follow',
      },
      summary: {
        zh: '围绕欧洲验证经验与亚洲市场落地机会，持续观察电力市场结构演进与应用边界。',
        en: 'Track both European validation experience and Asian implementation opportunities across changing power-market structures.',
      },
      items: [
        { zh: '中国电力市场', en: 'China power markets' },
        { zh: '日本电力市场', en: 'Japan power markets' },
        { zh: '欧洲自由化电力市场经验', en: 'European liberalized power-market experience' },
        { zh: '储能、虚拟电厂与灵活性场景', en: 'Storage, VPP, and flexibility scenarios' },
      ],
    } as AboutListSection,
    workStyle: {
      title: {
        zh: '工作方式',
        en: 'Working Style',
      },
      summary: {
        zh: '把研究、建模、策略与执行连接成可以协同推进的工作框架。',
        en: 'Connect research, modeling, strategy, and execution into one coordinated working framework.',
      },
      items: [
        { zh: '数据 → 模型 → 策略 → 执行 的闭环框架', en: 'A closed loop from data to models to strategy to execution' },
        { zh: '研究驱动的系统设计', en: 'Research-led system design' },
        { zh: '工程化交付与持续迭代', en: 'Engineering delivery with continuous iteration' },
        { zh: '对外表达坚持公开、安全、可解释', en: 'Public communication that stays safe, explainable, and responsible' },
      ],
    } as AboutListSection,
  },
  news: {
    heading: {
      zh: '发展历程',
      en: 'Milestones',
    },
    summary: {
      zh: '这里展示任能量化在技术验证、机构建设与中国市场布局方面的重要公开节点。',
      en: 'This page outlines the public milestones behind technical validation, institutional build-out, and China market launch.',
    },
    items: milestoneItems,
  },
  knowledge: {
    heading: {
      zh: '知识中心',
      en: 'Knowledge Hub',
    },
    summary: {
      zh: '知识中心用于整理任能量化对外公开、可分享、可复用的知识内容，帮助合作伙伴与关注者建立共同语言。',
      en: 'The knowledge hub organizes public, shareable, and reusable materials that help partners and readers build a shared language around energy markets.',
    },
    tagline: {
      zh: 'PUBLIC KNOWLEDGE / SAFE SCOPE',
      en: 'PUBLIC KNOWLEDGE / SAFE SCOPE',
    },
    safetyNote: {
      zh: '本页仅收录公开知识，不涉及交易策略，不涉及模型参数，不涉及收益承诺或其他敏感商业信息。',
      en: 'This section contains public knowledge only. It does not include trading strategies, model parameters, return commitments, or other sensitive business information.',
    },
    tracks: knowledgeTracks,
    articles: knowledgeArticles,
    contactNote: {
      zh: '如果你希望围绕公开知识主题进一步交流，可以通过联系页面与我们沟通。',
      en: 'If you want to discuss any of these public topics further, please reach out through the contact page.',
    },
    labels: {
      featuredTitle: { zh: '首批公开文章', en: 'Featured Public Articles' },
      featuredSubtitle: {
        zh: '以下文章基于公开知识整理与改写，只保留基础机制、行业观察和高层框架。',
        en: 'The articles below are curated and rewritten from public-safe knowledge, preserving only fundamentals, market observation, and high-level frameworks.',
      },
      trackTitle: { zh: '知识覆盖范围', en: 'Knowledge Coverage' },
      trackSubtitle: {
        zh: '这些主题说明我们会持续公开讨论的知识范围，但不展开敏感实现与执行细节。',
        en: 'These tracks define the themes we discuss publicly without exposing sensitive implementation or execution details.',
      },
      articleCategory: { zh: '分类', en: 'Category' },
      articleReadTime: { zh: '阅读时长', en: 'Read Time' },
      articlePublishedAt: { zh: '发布日期', en: 'Published' },
      articleAction: { zh: '阅读全文', en: 'Read Article' },
      keyTakeaways: { zh: '关键要点', en: 'Key Takeaways' },
      boundaryTitle: { zh: '公开边界说明', en: 'Public Boundary Note' },
      backToKnowledge: { zh: '返回知识中心', en: 'Back To Knowledge Hub' },
    },
  },
  contact: {
    heading: {
      zh: '联系任能量化',
      en: 'Contact EnergyQuant Research',
    },
    summary: {
      zh: '如果你希望了解公司情况、讨论合作场景或交流公开知识内容，欢迎通过以下方式联系我们。',
      en: 'If you want to learn more about the company, discuss collaboration scenarios, or talk through public knowledge topics, please reach out through the channels below.',
    },
    channelsTitle: {
      zh: '联系方式',
      en: 'Contact Channels',
    },
    inquiryTitle: {
      zh: '可以交流的话题',
      en: 'Topics We Can Discuss',
    },
    noteTitle: {
      zh: '沟通说明',
      en: 'Communication Notes',
    },
    noteBody: {
      zh: '来信时可以简单说明你的背景、关注的问题和合作场景，我们会基于公开边界尽快回复。',
      en: 'When you write to us, a short note about your background, topics of interest, and collaboration context will help us respond more efficiently within public communication boundaries.',
    },
    channels: [
      {
        label: { zh: '邮箱', en: 'Email' },
        value: 'info@enyquant.com',
        href: 'mailto:info@enyquant.com',
        note: {
          zh: '适用于公司介绍、合作沟通、研究与咨询交流。',
          en: 'Use this for company introductions, collaboration, research, and advisory discussions.',
        },
      },
      {
        label: { zh: '所在地', en: 'Location' },
        value: 'Beijing, China',
        note: {
          zh: '团队当前在北京办公。',
          en: 'The team is currently based in Beijing.',
        },
      },
    ] as ContactChannel[],
    inquiryTypes: [
      { zh: '商务合作与场景交流', en: 'Business collaboration and scenario discussions' },
      { zh: '研究与咨询沟通', en: 'Research and advisory discussions' },
      { zh: '行业交流与内容合作', en: 'Industry exchange and content collaboration' },
      { zh: '人才加入', en: 'Talent and career conversations' },
    ],
  },
  seo: {
    default: {
      title: {
        zh: '任能量化 | 能源市场算法与工程化服务',
        en: 'EnergyQuant Research | Energy-market algorithms and engineering services',
      },
      description: {
        zh: '任能量化官网围绕公司介绍、解决方案、发展历程与公开知识内容展开。',
        en: 'The EnergyQuant Research website presents the company, solution directions, milestones, and public knowledge materials.',
      },
      keywords: {
        zh: '任能量化, EnergyQuant Research, 能源市场, 储能优化, 虚拟电厂, 电力交易算法, 知识中心',
        en: 'EnergyQuant Research, energy markets, storage optimization, virtual power plants, power market algorithms, knowledge hub',
      },
    },
    home: {
      title: {
        zh: '任能量化 | AI 驱动的能源量化交易平台',
        en: 'EnergyQuant Research | AI-powered energy quantitative trading platform',
      },
      description: {
        zh: '任能量化构建可审计的 AI 与量化决策系统，连接欧洲市场验证与中国改革驱动的增长机会。',
        en: "EnergyQuant Research builds auditable AI and quantitative systems for energy markets, bridging European market validation and China's reform-driven growth.",
      },
      keywords: {
        zh: '能源量化, AI交易, 电力市场, 储能优化, 虚拟电厂, 能源算法, 量化系统',
        en: 'energy quantification, AI trading, power markets, storage optimization, virtual power plants, energy algorithms, quantitative systems',
      },
    },
    projects: {
      title: {
        zh: '任能量化 | 解决方案',
        en: 'EnergyQuant Research | Solutions',
      },
      description: {
        zh: '浏览任能量化围绕虚拟电厂聚合、电力交易算法服务与储能资产增值构建的公开解决方案方向。',
        en: 'Browse public-facing solution directions across VPP aggregation, power-market algorithm services, and storage optimization.',
      },
      keywords: {
        zh: '任能量化, 解决方案, 虚拟电厂, 储能优化, 电力交易算法服务',
        en: 'EnergyQuant Research, solutions, virtual power plant, storage optimization, algorithmic market services',
      },
    },
    news: {
      title: {
        zh: '任能量化 | 发展历程',
        en: 'EnergyQuant Research | Milestones',
      },
      description: {
        zh: '查看任能量化在技术验证、机构建设与中国市场布局方面的重要公开节点。',
        en: 'Review public milestones across technical validation, institutional build-out, and China market launch.',
      },
      keywords: {
        zh: '任能量化, 发展历程, 公开里程碑, 能源 AI',
        en: 'EnergyQuant Research, milestones, public timeline, energy AI',
      },
    },
    knowledge: {
      title: {
        zh: '任能量化 | 知识中心',
        en: 'EnergyQuant Research | Knowledge Hub',
      },
      description: {
        zh: '知识中心汇总任能量化对外公开、可分享、可复用的市场基础、行业观察与方法框架内容。',
        en: 'The knowledge hub collects public, shareable, and reusable materials across market fundamentals, industry observation, and framework thinking.',
      },
      keywords: {
        zh: '任能量化, 知识中心, 电力市场基础, 行业观察, 方法框架',
        en: 'EnergyQuant Research, knowledge hub, power market fundamentals, industry observation, system frameworks',
      },
    },
    about: {
      title: {
        zh: '任能量化 | 关于我们',
        en: 'EnergyQuant Research | About Us',
      },
      description: {
        zh: '了解任能量化的公司使命、服务对象、关注市场与工作方式。',
        en: 'Learn about EnergyQuant Research mission, audiences, markets of focus, and working style.',
      },
      keywords: {
        zh: '任能量化, 关于我们, 公司使命, 服务对象, 能源市场',
        en: 'EnergyQuant Research, about us, mission, audiences, energy markets',
      },
    },
    contact: {
      title: {
        zh: '任能量化 | 联系我们',
        en: 'EnergyQuant Research | Contact',
      },
      description: {
        zh: '通过联系页面与任能量化交流公司情况、合作场景、研究与咨询话题。',
        en: 'Use the contact page to discuss company information, collaboration scenarios, and research or advisory topics with EnergyQuant Research.',
      },
      keywords: {
        zh: '任能量化, 联系方式, 商务合作, 研究咨询',
        en: 'EnergyQuant Research, contact, business collaboration, research and advisory',
      },
    },
  } as Record<string, SeoEntry>,
} as const;
