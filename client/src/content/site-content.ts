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

export interface HomeCapabilityItem {
  key: string;
  title: LocalizedText;
  subtitle: LocalizedText;
  description: LocalizedText;
  metrics: LocalizedText[];
  deliverable: LocalizedText;
  accent: string;
}

export interface EvidenceMetric {
  key: string;
  label: LocalizedText;
  value: number;
  unit: string;
  detail: LocalizedText;
  trend: LocalizedText;
  accent: string;
}

export interface PortfolioItem {
  key: string;
  type: 'case-study' | 'solution';
  domain: LocalizedText;
  region: LocalizedText;
  accent: string;
  image: string;
  title: LocalizedText;
  description: LocalizedText;
  features: LocalizedText[];
  details: {
    background: LocalizedText;
    solution: LocalizedText;
    results: LocalizedText;
  };
}

export interface StatItem {
  label: LocalizedText;
  value: string;
}

export interface NumericStatItem {
  label: LocalizedText;
  value: number;
  unit: string;
}

export interface MarketPresenceItem {
  flag: string;
  region: LocalizedText;
  locations: LocalizedText[];
  projects: number;
  highlight: boolean;
}

export const localizedText = (text: LocalizedText, language: SiteLanguage) => text[language];

export const siteContent = {
  identity: {
    name: {
      zh: '任能科技',
      en: 'Reneng Technology',
    },
    shortName: {
      zh: '任能',
      en: 'Reneng',
    },
    mark: '任',
    footerSummary: {
      zh: '任能科技围绕能源市场智能化、算法体系与工程化交付展开长期建设，官网用于承接公司介绍、项目展示与后续公开内容分发。',
      en: 'Reneng Technology builds long-term capabilities around energy-market intelligence, algorithm systems, and engineering delivery. This site is the public entry point for company positioning, project portfolio, and future knowledge distribution.',
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
    { key: 'about', path: '/about', label: { zh: '关于任能', en: 'About' } },
    { key: 'contact', path: '/contact', label: { zh: '联系任能', en: 'Contact' } },
  ] as NavItem[],
  home: {
    hero: {
      tagline: {
        zh: 'AI-Powered Quantitative Trading',
        en: 'AI-Powered Quantitative Trading',
      },
      slogan: {
        zh: '建模。定价。执行。',
        en: 'We model. We price. We execute.',
      },
      subtitle: {
        zh: 'EnergyQuant 构建可审计的 AI 与量化决策系统，连接欧洲市场验证与中国改革驱动的增长机会。',
        en: "EnergyQuant builds auditable AI and quantitative systems for energy markets, bridging European market validation and China's reform-driven growth.",
      },
      ctaProjects: {
        zh: '查看项目',
        en: 'View Projects',
      },
      ctaKnowledge: {
        zh: '进入知识库',
        en: 'Explore Knowledge Base',
      },
    },
    capabilities: {
      title: {
        zh: '核心能力',
        en: 'Core Capabilities',
      },
      subtitle: {
        zh: 'What We Do',
        en: 'What We Do',
      },
      items: [
        {
          key: 'trading',
          title: {
            zh: '交易与短期策略',
            en: 'Trading & Short-term Strategy',
          },
          subtitle: {
            zh: 'Trading & Short-term Strategy',
            en: '交易与短期策略',
          },
          description: {
            zh: '电力现货市场实时报价与日内交易优化，基于概率模型的风险对冲策略。',
            en: 'Real-time bidding and intraday optimization in spot power markets, with risk hedging based on probabilistic models.',
          },
          metrics: [
            { zh: '实盘系统', en: 'Live System' },
            { zh: '毫秒级响应', en: 'ms Response' },
            { zh: '风险对冲', en: 'Risk Hedge' },
          ],
          deliverable: {
            zh: '交付物：实盘交易系统 + 日内策略引擎',
            en: 'Deliverable: Live trading system + intraday strategy engine',
          },
          accent: '#3b82f6',
        },
        {
          key: 'bess',
          title: {
            zh: '灵活性与储能优化',
            en: 'Flexibility & BESS Optimization',
          },
          subtitle: {
            zh: 'Flexibility & BESS Optimization',
            en: '灵活性与储能优化',
          },
          description: {
            zh: '储能充放电策略优化，聚合分布式资源参与辅助服务市场。',
            en: 'BESS charge/discharge optimization and aggregated distributed-resource participation in ancillary-services markets.',
          },
          metrics: [
            { zh: '算法优化', en: 'Algorithm Optimized' },
            { zh: '聚合控制', en: 'Aggregation Control' },
            { zh: '辅助服务', en: 'Ancillary Services' },
          ],
          deliverable: {
            zh: '交付物：BESS 优化算法 + 聚合控制模块',
            en: 'Deliverable: BESS optimization algorithms + aggregation control module',
          },
          accent: '#22c55e',
        },
        {
          key: 'platform',
          title: {
            zh: '数据到执行平台',
            en: 'Data-to-Execution Platform',
          },
          subtitle: {
            zh: 'Data-to-Execution Platform',
            en: '数据到执行平台',
          },
          description: {
            zh: '从数据接入、特征工程、模型训练到交易执行的端到端自动化平台。',
            en: 'An end-to-end automation platform from data ingestion and feature engineering to model training and trade execution.',
          },
          metrics: [
            { zh: '端到端', en: 'End-to-End' },
            { zh: '可配置', en: 'Configurable' },
            { zh: 'API 接口', en: 'API Interfaces' },
          ],
          deliverable: {
            zh: '交付物：可配置流水线 + API 接口',
            en: 'Deliverable: Configurable pipelines + API interfaces',
          },
          accent: '#8b5cf6',
        },
        {
          key: 'research',
          title: {
            zh: '研究与市场机制',
            en: 'Research & Market Design',
          },
          subtitle: {
            zh: 'Research & Market Design',
            en: '研究与市场机制',
          },
          description: {
            zh: '电力市场机制设计、价格形成机制研究、政策影响量化分析。',
            en: 'Electricity market design, price-formation research, and quantitative analysis of policy impacts.',
          },
          metrics: [
            { zh: '市场设计', en: 'Market Design' },
            { zh: '政策量化', en: 'Policy Quantification' },
            { zh: '研究报告', en: 'Research Reports' },
          ],
          deliverable: {
            zh: '交付物：研究报告 + 政策建议',
            en: 'Deliverable: Research reports + policy recommendations',
          },
          accent: '#f59e0b',
        },
      ] as HomeCapabilityItem[],
    },
    evidence: {
      title: {
        zh: '验证证据',
        en: 'Verified Evidence',
      },
      subtitle: {
        zh: 'Verified Evidence',
        en: 'Verified Evidence',
      },
      tagline: {
        zh: 'Audit & Verification',
        en: 'Audit & Verification',
      },
      metrics: [
        {
          key: 'accuracy',
          label: {
            zh: '预测准确率',
            en: 'Prediction Accuracy',
          },
          value: 95,
          unit: '%',
          detail: {
            zh: '德国 EPEX 市场 2024 H1',
            en: 'Germany EPEX Market 2024 H1',
          },
          trend: {
            zh: '+2.3% YoY',
            en: '+2.3% YoY',
          },
          accent: '#3b82f6',
        },
        {
          key: 'projects',
          label: {
            zh: '已交付项目',
            en: 'Projects Delivered',
          },
          value: 75,
          unit: '+',
          detail: {
            zh: '欧洲 + 中国市场',
            en: 'Europe + China markets',
          },
          trend: {
            zh: '+18 新增',
            en: '+18 New',
          },
          accent: '#8b5cf6',
        },
        {
          key: 'volume',
          label: {
            zh: '累计交易量',
            en: 'Trading Volume',
          },
          value: 1200,
          unit: 'GWh',
          detail: {
            zh: '2023-2025 实盘数据',
            en: '2023-2025 Live Data',
          },
          trend: {
            zh: '+340% 增长',
            en: '+340% Growth',
          },
          accent: '#22c55e',
        },
        {
          key: 'efficiency',
          label: {
            zh: '算法效率',
            en: 'Algorithm Efficiency',
          },
          value: 300,
          unit: '%',
          detail: {
            zh: '相比传统方法',
            en: 'Compared to traditional methods',
          },
          trend: {
            zh: '行业领先',
            en: 'Industry Leading',
          },
          accent: '#f59e0b',
        },
      ] as EvidenceMetric[],
    },
    cta: {
      title: {
        zh: '查看我们的项目',
        en: 'Explore Our Projects',
      },
      subtitle: {
        zh: '浏览可交付、可复用、可验证的工程案例。',
        en: 'Browse deliverable, reusable, and verifiable engineering cases.',
      },
      button: {
        zh: '浏览项目',
        en: 'Browse Projects',
      },
      secondaryButton: {
        zh: '联系任能',
        en: 'Contact Reneng',
      },
      stats: {
        zh: '75+ 工程案例 · 欧洲与中国市场',
        en: '75+ Engineering Cases · Europe & China Markets',
      },
    },
  },
  projects: {
    title: {
      zh: '项目展示',
      en: 'Projects',
    },
    subtitle: {
      zh: '展示我们在 AI+能源市场的落地案例与标准化解决方案。',
      en: 'Showcasing our implementations and standardized solutions in AI+Energy markets.',
    },
    tagline: {
      zh: 'PROJECTS PORTFOLIO',
      en: 'PROJECTS PORTFOLIO',
    },
    stats: [
      {
        label: { zh: '项目总数', en: 'Total Projects' },
        value: '75+',
      },
      {
        label: { zh: '预测准确率', en: 'Prediction Accuracy' },
        value: '97%',
      },
      {
        label: { zh: '算法效率', en: 'Algorithm Efficiency' },
        value: '300%',
      },
    ] as StatItem[],
    caseStudiesTitle: {
      zh: '案例研究',
      en: 'Case Studies',
    },
    solutionsTitle: {
      zh: '解决方案',
      en: 'Solutions',
    },
    featuresLabel: {
      zh: '能力标签',
      en: 'Feature Signals',
    },
    detailsLabel: {
      background: { zh: '背景', en: 'Background' },
      solution: { zh: '解决方案', en: 'Solution' },
      results: { zh: '成果', en: 'Results' },
    },
    items: [
      {
        key: 'european-grid-analytics',
        type: 'case-study',
        domain: { zh: '电网分析', en: 'Grid Analytics' },
        region: { zh: '欧洲', en: 'Europe' },
        accent: '#3b82f6',
        image: '/images/projects/project-1.jpg',
        title: {
          zh: '欧洲电网智能分析平台',
          en: 'European Grid Analytics Platform',
        },
        description: {
          zh: '基于深度学习的电网负荷预测与异常检测系统，已在德国、法国等多国电网部署。',
          en: 'A deep-learning-based grid-load forecasting and anomaly-detection system deployed across Germany, France, and other European grids.',
        },
        features: [
          { zh: '可交付', en: 'Deliverable' },
          { zh: '可验证', en: 'Verifiable' },
        ],
        details: {
          background: {
            zh: '欧洲电网面临可再生能源接入增加带来的波动性挑战，需要更精准的预测能力。',
            en: 'European grids face rising volatility from renewable integration and need more precise forecasting capability.',
          },
          solution: {
            zh: '开发了基于 Transformer 的时序预测模型，融合多源数据（天气、历史负荷、市场信号），实现了 97% 的预测准确率。',
            en: 'A Transformer-based time-series forecasting model combines weather, historical load, and market signals to deliver 97% prediction accuracy.',
          },
          results: {
            zh: '预测误差降低 45%，异常检测响应时间缩短至 15 分钟，年节省运营成本约 320 万欧元。',
            en: 'Forecast error was reduced by 45%, anomaly-response time dropped to 15 minutes, and annual operating costs fell by about EUR 3.2 million.',
          },
        },
      },
      {
        key: 'cross-border-trading-optimization',
        type: 'case-study',
        domain: { zh: '交易系统', en: 'Trading System' },
        region: { zh: '跨境', en: 'Cross-border' },
        accent: '#22c55e',
        image: '/images/projects/project-2.jpg',
        title: {
          zh: '跨境电力交易优化系统',
          en: 'Cross-border Power Trading Optimization',
        },
        description: {
          zh: '连接中国与欧洲电力市场的实时交易撮合与风控系统。',
          en: 'A real-time trading-matching and risk-control system connecting Chinese and European power markets.',
        },
        features: [
          { zh: '可交付', en: 'Deliverable' },
          { zh: '可复用', en: 'Reusable' },
          { zh: '可验证', en: 'Verifiable' },
        ],
        details: {
          background: {
            zh: '跨境电力交易面临汇率波动、政策差异、时区协调等复杂挑战。',
            en: 'Cross-border power trading must handle exchange-rate volatility, policy differences, and timezone coordination.',
          },
          solution: {
            zh: '构建了分布式交易引擎，支持多币种结算、智能合约执行、实时风险监控，实现毫秒级撮合。',
            en: 'A distributed trading engine supports multi-currency settlement, smart-contract execution, and real-time risk monitoring with millisecond matching.',
          },
          results: {
            zh: '交易效率提升 300%，风险事件减少 80%，已处理超过 10 亿欧元交易量。',
            en: 'Trading efficiency improved by 300%, risk incidents fell by 80%, and the system has processed more than EUR 1 billion in volume.',
          },
        },
      },
      {
        key: 'wind-farm-dispatch',
        type: 'solution',
        domain: { zh: 'AI 优化', en: 'AI Optimization' },
        region: { zh: '中国', en: 'China' },
        accent: '#8b5cf6',
        image: '/images/projects/project-3.jpg',
        title: {
          zh: '风电场智能调度系统',
          en: 'Wind Farm Intelligent Dispatch System',
        },
        description: {
          zh: '基于强化学习的风电场集群优化调度，提升发电效率 15% 以上。',
          en: 'A reinforcement-learning-based dispatch system for wind-farm clusters that improves generation efficiency by more than 15%.',
        },
        features: [
          { zh: '可交付', en: 'Deliverable' },
          { zh: '可复用', en: 'Reusable' },
        ],
        details: {
          background: {
            zh: '风电场传统调度依赖经验规则，难以应对复杂气象条件和电网约束。',
            en: 'Traditional wind-farm dispatch depends on heuristics and struggles under complex weather and grid constraints.',
          },
          solution: {
            zh: '开发了多智能体强化学习算法，实时优化各风机运行状态，协同考虑发电量、设备寿命与电网安全。',
            en: 'A multi-agent reinforcement-learning algorithm optimizes turbine states in real time while balancing output, asset life, and grid safety.',
          },
          results: {
            zh: '发电量提升 15.3%，运维成本降低 22%，系统可快速复制到不同风电场。',
            en: 'Power output improved by 15.3%, O&M costs fell by 22%, and the system can be replicated rapidly across wind farms.',
          },
        },
      },
      {
        key: 'smart-storage-management',
        type: 'solution',
        domain: { zh: '储能系统', en: 'Energy Storage' },
        region: { zh: '欧洲', en: 'Europe' },
        accent: '#f59e0b',
        image: '/images/projects/project-4.jpg',
        title: {
          zh: '智能储能管理系统',
          en: 'Smart Energy Storage Management',
        },
        description: {
          zh: '集成电价预测、负荷预测的储能充放电优化，提升储能收益率 25%。',
          en: 'Storage charge/discharge optimization that combines price and load forecasting to improve storage ROI by 25%.',
        },
        features: [
          { zh: '可交付', en: 'Deliverable' },
          { zh: '可验证', en: 'Verifiable' },
        ],
        details: {
          background: {
            zh: '储能系统盈利能力高度依赖充放电时机选择，传统方法难以捕捉市场机会。',
            en: 'Storage profitability depends heavily on timing, and traditional methods often miss market opportunities.',
          },
          solution: {
            zh: '构建了 LSTM + 注意力机制混合模型，预测电价曲线与负荷需求，并用动态规划优化充放电策略。',
            en: 'A hybrid LSTM-and-attention model forecasts price curves and load demand, then uses dynamic programming to optimize storage dispatch.',
          },
          results: {
            zh: '储能收益率提升 25%，峰谷价差套利准确率达到 89%，系统已部署于 12 个储能站。',
            en: 'Storage ROI improved by 25%, peak-valley spread arbitrage hit 89% accuracy, and the system has been deployed at 12 storage sites.',
          },
        },
      },
    ] as PortfolioItem[],
    cta: {
      title: {
        zh: '需要进一步沟通解决方案边界？',
        en: 'Need a closer discussion on solution scope?',
      },
      subtitle: {
        zh: '如果你想进一步了解任能当前的能力边界、项目交付方式或合作路径，可以直接通过联系页面与我们交流。',
        en: 'If you want to discuss Reneng’s capability boundaries, delivery format, or collaboration path in more detail, please reach out through the contact page.',
      },
      button: {
        zh: '联系任能',
        en: 'Contact Reneng',
      },
    },
  },
  about: {
    title: {
      zh: '关于任能',
      en: 'About Reneng',
    },
    subtitle: {
      zh: '围绕能源市场研究、算法建模与工程交付持续建设能力。',
      en: 'We keep building capabilities across energy-market research, algorithmic modeling, and engineering delivery.',
    },
    tagline: {
      zh: 'RENENG TECHNOLOGY',
      en: 'RENENG TECHNOLOGY',
    },
    company: {
      title: {
        zh: '任能是谁',
        en: 'Who We Are',
      },
      content: {
        zh: '任能科技聚焦能源市场智能化与工程化落地，围绕电价预测、储能优化、虚拟电厂与算法交易等方向持续建设能力。',
        en: 'Reneng Technology focuses on intelligent systems and engineering delivery for energy markets, with long-term capability building across price forecasting, storage optimization, virtual power plants, and algorithmic trading.',
      },
      history: {
        zh: '我们长期关注电力市场改革、新型电力系统和灵活性资源运营带来的变化，强调研究、建模与交付之间的闭环，而不是停留在概念表达层面。',
        en: 'We pay close attention to power-market reform, new power-system operations, and flexibility-resource participation, with a working style that closes the loop between research, modeling, and delivery rather than stopping at abstract concepts.',
      },
      coreBusiness: [
        { zh: '电价预测模型', en: 'Electricity Price Forecasting' },
        { zh: '储能策略优化', en: 'Energy Storage Strategy Optimization' },
        { zh: '虚拟电厂运营', en: 'Virtual Power Plant Operation' },
        { zh: 'AI 算法交易', en: 'AI Algorithm Trading' },
      ],
      stats: [
        {
          label: { zh: '研究驱动', en: 'Research-led' },
          value: '从真实问题出发',
        },
        {
          label: { zh: '工程交付', en: 'Engineering delivery' },
          value: '强调可落地与可复用',
        },
        {
          label: { zh: '方法沉淀', en: 'Method accumulation' },
          value: '持续积累模型与工具链',
        },
        {
          label: { zh: '合作方式', en: 'Collaboration style' },
          value: '先沟通问题，再展开方案',
        },
      ] as StatItem[],
    },
    mission: {
      title: {
        zh: '我们的判断与坚持',
        en: 'What We Believe In',
      },
      mission: {
        label: { zh: '判断', en: 'Viewpoint' },
        text: {
          zh: '我们相信算法不只是辅助工具，而应该成为能源系统里可审计、可验证的一部分，真正参与到建模、定价与执行中。',
          en: 'We believe algorithms should not stay as auxiliary tools. They should become an auditable and verifiable part of energy systems, participating directly in modeling, pricing, and execution.',
        },
      },
      vision: {
        label: { zh: '方向', en: 'Direction' },
        text: {
          zh: '持续建设面向能源市场的算法与工程能力，在真实场景里把方法做深，把系统做稳。',
          en: 'We aim to keep building algorithmic and engineering capability for energy markets, making the methods deeper and the systems steadier in real operating environments.',
        },
      },
      values: {
        label: { zh: '工作方式', en: 'How We Work' },
        items: [
          { zh: '先理解问题，再设计模型与系统。', en: 'Understand the market problem first, then design the model and system.' },
          { zh: '尊重事实与数据，避免空泛判断。', en: 'Stay grounded in facts and data instead of generic claims.' },
          { zh: '重视长期建设，而不是短期包装。', en: 'Favor long-term capability building over short-term packaging.' },
        ],
      },
    },
    research: {
      title: {
        zh: '我们如何工作',
        en: 'How We Work',
      },
      subtitle: {
        zh: '把研究、建模与交付连成一条线',
        en: 'We connect research, modeling, and delivery into one line of work.',
      },
      algorithm: {
        title: {
          zh: '研究与建模',
          en: 'Research & Modeling',
        },
        items: [
          { label: { zh: '预测精度', en: 'Accuracy' }, value: 97, unit: '%' },
          { label: { zh: '响应速度', en: 'Response' }, value: 5, unit: 'ms' },
          { label: { zh: '模型数量', en: 'Models' }, value: 50, unit: '+' },
        ] as NumericStatItem[],
      },
      engineering: {
        title: {
          zh: '系统与交付',
          en: 'Systems & Delivery',
        },
        items: [
          { label: { zh: '交付项目', en: 'Projects' }, value: 75, unit: '+' },
          { label: { zh: '客户满意度', en: 'Satisfaction' }, value: 98, unit: '%' },
          { label: { zh: '复用率', en: 'Reusability' }, value: 85, unit: '%' },
        ] as NumericStatItem[],
      },
    },
    market: {
      title: {
        zh: '业务关注区域',
        en: 'Regions We Follow',
      },
      subtitle: {
        zh: '围绕欧洲与中国电力市场实践，持续观察方法迁移与落地机会。',
        en: 'We keep tracking practical opportunities across European and Chinese power markets, especially where methods can be adapted into real delivery.',
      },
      label: {
        zh: '展示范围',
        en: 'Coverage',
      },
      projects: {
        zh: '已交付项目',
        en: 'Projects Delivered',
      },
      totalProjects: {
        zh: '项目展示覆盖：75+',
        en: 'Portfolio coverage: 75+',
      },
      regions: [
        {
          flag: '🇪🇺',
          region: { zh: '欧洲', en: 'Europe' },
          locations: [
            { zh: '德国', en: 'Germany' },
            { zh: '法国', en: 'France' },
            { zh: '英国', en: 'UK' },
            { zh: '荷兰', en: 'Netherlands' },
          ],
          projects: 28,
          highlight: true,
        },
        {
          flag: '🇨🇳',
          region: { zh: '中国', en: 'China' },
          locations: [
            { zh: '北京', en: 'Beijing' },
            { zh: '上海', en: 'Shanghai' },
            { zh: '深圳', en: 'Shenzhen' },
            { zh: '杭州', en: 'Hangzhou' },
          ],
          projects: 35,
          highlight: true,
        },
        {
          flag: '🌏',
          region: { zh: '其他地区', en: 'Other Regions' },
          locations: [
            { zh: '新加坡', en: 'Singapore' },
            { zh: '日本', en: 'Japan' },
            { zh: '韩国', en: 'South Korea' },
          ],
          projects: 12,
          highlight: false,
        },
      ] as MarketPresenceItem[],
    },
  },
  news: {
    heading: {
      zh: '发展历程',
      en: 'Milestones',
    },
    summary: {
      zh: '这里展示任能面向能源市场智能化持续建设的发展历程与阶段性里程碑。',
      en: "This page outlines Reneng's development journey and key milestones in building energy-market intelligence capabilities.",
    },
    items: [
      {
        date: { zh: '2026 之前', en: 'Pre-2026' },
        category: { zh: '前期积累', en: 'Early Foundation' },
        title: {
          zh: '在成熟电力市场持续积累算法与建模经验',
          en: 'Built early algorithm and market-modeling experience in mature power markets',
        },
        summary: {
          zh: '在海外成熟电力市场持续开展价格预测、策略优化与算法验证，为后续本地化落地奠定方法与系统基础。',
          en: 'Long-term work in mature power markets accumulated practical experience in forecasting, strategy optimization, and algorithm validation before local expansion.',
        },
      },
      {
        date: { zh: '2026', en: '2026' },
        category: { zh: '中国布局', en: 'China Launch' },
        title: {
          zh: '任能在北京启动中国市场布局',
          en: 'Reneng launches its China market presence in Beijing',
        },
        summary: {
          zh: '围绕中国能源市场改革与亚太市场机会，任能作为本地化业务载体启动建设，聚焦策略中心、技术中心与生态化平台能力。',
          en: 'Reneng begins local build-out in Beijing as the operating vehicle for China-market strategy, technical delivery, and ecosystem development.',
        },
      },
      {
        date: { zh: '持续推进', en: 'Ongoing' },
        category: { zh: '持续建设', en: 'Capability Build-out' },
        title: {
          zh: '围绕能源量化与工程化交付持续扩展能力',
          en: 'Reneng continues to expand its quant and engineering capabilities',
        },
        summary: {
          zh: '当前持续围绕电价预测、储能优化、虚拟电厂、算法交易系统与研究输出等方向推进模型、系统与项目交付能力建设。',
          en: 'Ongoing work continues across price forecasting, storage optimization, virtual power plants, algorithmic trading systems, and research-led delivery.',
        },
      },
    ] as NewsItem[],
  },
  knowledge: {
    heading: {
      zh: '知识中心',
      en: 'Knowledge Hub',
    },
    summary: {
      zh: '这里会逐步整理任能对外公开的研究文章、方法说明和项目实践材料，方便合作伙伴和关注者了解我们的工作方向。',
      en: 'This section will gradually collect Reneng’s public research notes, method explainers, and project practice materials, so partners and readers can better understand how we work.',
    },
    upcomingTitle: {
      zh: '正在整理的公开内容',
      en: 'Content in Preparation',
    },
    upcomingItems: [
      {
        zh: '电力市场研究与观察',
        en: 'Power-market research and observations',
      },
      {
        zh: '算法方法与建模思路',
        en: 'Algorithm methods and modeling notes',
      },
      {
        zh: '项目实践与解决方案拆解',
        en: 'Project practice and solution breakdowns',
      },
    ],
    contactNote: {
      zh: '如果你想先了解某个方向，也可以直接通过联系页面与我们沟通。',
      en: 'If you want to explore a specific topic earlier, you can reach out through the contact page.',
    },
  },
  contact: {
    heading: {
      zh: '联系任能',
      en: 'Contact Reneng',
    },
    summary: {
      zh: '如果你希望了解任能、交流项目方向，或进一步沟通合作可能，欢迎通过以下方式联系我们。',
      en: 'If you want to learn more about Reneng, discuss project directions, or explore collaboration, please reach out through the channels below.',
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
      zh: '来信时可以简单介绍你的背景、关注的问题或合作方向，我们会根据内容尽快回复。',
      en: 'When you write to us, a short note about your background, topic of interest, or collaboration direction will help us respond more efficiently.',
    },
    channels: [
      {
        label: { zh: '邮箱', en: 'Email' },
        value: 'info@enyquant.com',
        href: 'mailto:info@enyquant.com',
        note: {
          zh: '适用于公司介绍、项目沟通与合作交流。',
          en: 'Use this for company introductions, project discussions, and collaboration inquiries.',
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
      {
        zh: '了解任能和团队当前的工作方向',
        en: 'Learn more about Reneng and the team’s current work directions',
      },
      {
        zh: '交流项目场景、方法思路与合作可能',
        en: 'Discuss project contexts, method ideas, and collaboration possibilities',
      },
      {
        zh: '沟通知识内容与后续公开材料',
        en: 'Talk about knowledge content and future public materials',
      },
    ],
  },
  seo: {
    default: {
      title: {
        zh: '任能科技 | 能源市场算法与工程化服务',
        en: 'Reneng Technology | Energy-market algorithms and engineering services',
      },
      description: {
        zh: '任能科技官网围绕公司介绍、项目展示、动态更新与后续公开内容分发入口展开。',
        en: 'The Reneng Technology website presents the company, project portfolio, updates, and future public knowledge-distribution entry points.',
      },
      keywords: {
        zh: '任能科技, EnergyQuant, 能源市场, 电价预测, 储能优化, 虚拟电厂, 项目展示',
        en: 'Reneng Technology, EnergyQuant, energy markets, price forecasting, storage optimization, virtual power plant, project portfolio',
      },
    },
    home: {
      title: {
        zh: '任能科技 | AI 驱动的能源量化交易平台',
        en: 'Reneng Technology | AI-powered energy quantitative trading platform',
      },
      description: {
        zh: 'EnergyQuant 构建可审计的 AI 与量化决策系统，连接欧洲市场验证与中国改革驱动的增长机会。',
        en: "EnergyQuant builds auditable AI and quantitative systems for energy markets, bridging European market validation and China's reform-driven growth.",
      },
      keywords: {
        zh: '能源量化, AI交易, 电力市场, 储能优化, 电价预测, 能源算法, 量化交易, EnergyQuant',
        en: 'energy quantification, AI trading, power market, storage optimization, price forecasting, energy algorithms, quantitative trading, EnergyQuant',
      },
    },
    projects: {
      title: {
        zh: '任能科技 | 项目展示',
        en: 'Reneng Technology | Projects',
      },
      description: {
        zh: '查看可交付、可复用、可验证的工程案例，覆盖欧洲与中国市场的交易系统、储能优化与智能电网解决方案。',
        en: 'Explore deliverable, reusable, and verifiable engineering cases across European and Chinese markets, including trading systems, storage optimization, and smart-grid solutions.',
      },
      keywords: {
        zh: '项目案例, 工程案例, 交易系统, 储能优化, 智能电网, 能源项目, AI 优化, 电网分析',
        en: 'project cases, engineering portfolio, trading systems, storage optimization, smart grid, energy projects, AI optimization, grid analytics',
      },
    },
    news: {
      title: {
        zh: '任能科技 | 发展历程',
        en: 'Reneng Technology | Milestones',
      },
      description: {
        zh: '查看任能科技的发展历程与阶段性里程碑，了解公司围绕能源市场智能化持续建设的路径。',
        en: "Review Reneng Technology's development journey and milestone timeline in building energy-market intelligence capabilities.",
      },
      keywords: {
        zh: '任能科技, 发展历程, 公司里程碑, 能源市场智能化, 能源量化',
        en: 'Reneng Technology, milestones, development journey, energy market intelligence, energy quant',
      },
    },
    knowledge: {
      title: {
        zh: '任能科技 | 知识中心',
        en: 'Reneng Technology | Knowledge Hub',
      },
      description: {
        zh: '知识中心会逐步整理任能对外公开的研究文章、方法说明和项目实践材料。',
        en: 'The knowledge hub will gradually collect Reneng’s public research notes, method explainers, and project practice materials.',
      },
      keywords: {
        zh: '任能科技, 知识中心, 研究文章, 方法说明, 项目实践',
        en: 'Reneng Technology, knowledge hub, research notes, method explainers, project practice',
      },
    },
    about: {
      title: {
        zh: '任能科技 | 关于任能',
        en: 'Reneng Technology | About Reneng',
      },
      description: {
        zh: '了解任能科技的工作方向、研究方式和业务关注区域。',
        en: 'Learn about Reneng Technology’s working directions, research approach, and regions of focus.',
      },
      keywords: {
        zh: '任能科技, 关于任能, 公司介绍, 研究方法, 能源市场',
        en: 'Reneng Technology, about Reneng, company overview, research approach, energy markets',
      },
    },
    contact: {
      title: {
        zh: '任能科技 | 联系任能',
        en: 'Reneng Technology | Contact',
      },
      description: {
        zh: '通过联系页面与任能科技交流公司情况、项目方向和合作可能。',
        en: 'Use the contact page to discuss company information, project directions, and collaboration possibilities with Reneng Technology.',
      },
      keywords: {
        zh: '任能科技, 联系方式, 商务合作, 项目咨询',
        en: 'Reneng Technology, contact, collaboration, project inquiries',
      },
    },
  } as Record<string, SeoEntry>,
} as const;
