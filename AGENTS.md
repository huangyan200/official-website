# EnergyQuant Group - 页面功能拆解

## 产品概述

- **产品类型**: 企业官网
- **目标用户**: 投资者、政府机构、学术机构、企业合作伙伴
- **核心价值**: 展示 EnergyQuant 在 AI+能源市场的专业研究能力与工程交付实力，建立跨欧洲与中国市场的专业形象
- **界面语言**: 中英双语 - 用户明确要求中英双语支持及语言切换功能
- **应用类型**: 多页应用 (MPA)
- **导航类型**: 路径导航

---

## 页面结构总览

```
[首页] `HomePage.tsx` → `/`
├── [项目展示页] `ProjectsPage.tsx` → `/projects`
├── [新闻动态页] `NewsPage.tsx` → `/news`
├── [知识库页] `KnowledgeBasePage.tsx` → `/knowledge`
├── [关于我们页] `AboutPage.tsx` → `/about`
└── [联系我们页] `ContactPage.tsx` → `/contact`
```

**页面关系**:
```
首页 → 各功能模块页（Projects/News/Knowledge/About/Contact）
各功能模块页 → 通过顶部导航相互跳转
Projects 页 → 支持筛选查看不同类型项目
Contact 页 → 表单提交后显示成功状态（当前页反馈）
```

---

## 导航配置

### 全局导航链接

- 首页: `/` ← 对应页面:[首页]
- Projects: `/projects` ← 对应页面:[项目展示页]
- News: `/news` ← 对应页面:[新闻动态页]
- Knowledge Base: `/knowledge` ← 对应页面:[知识库页]
- About Us: `/about` ← 对应页面:[关于我们页]
- Contact Us: `/contact` ← 对应页面:[联系我们页]

### 非导航页面

- 无独立非导航页面

---

## 数据共享配置

| 存储键名 | 数据说明 | 使用页面 |
|---------|---------|---------|
| `__global_energyquant_lang` | 当前界面语言状态 | 所有页面 |

---

## 页面功能列表

- 页面 :[首页]
  - **路由**: `/`
  - **文件名**: `HomePage.tsx`
  - **页面目标**: 总览公司定位、核心能力与方法论，强调 AI + 能源市场 + 工程闭环，引导访问核心业务模块
  - 功能列表
    - Hero 区域: 展示公司核心价值主张与定位，包含进入 Projects 和 Knowledge Base 的行动按钮
    - 核心能力展示: 展示 AI 技术能力、能源市场研究深度、工程交付能力的三大支柱
    - 市场覆盖说明: 强调跨欧洲与中国市场的结构性位置与业务覆盖
    - 最新动态预览: 展示最新 2-3 条新闻或项目更新，引导点击查看详情
    - 语言切换器: 顶部导航栏提供中/英文语言切换功能

- 页面 :[项目展示页]
  - **路由**: `/projects`
  - **文件名**: `ProjectsPage.tsx`
  - **页面目标**: 展示项目案例与解决方案，支持按维度筛选，强调"可交付、可复用、可验证"的项目特征
  - 功能列表
    - 筛选器: 支持按领域、区域、类型进行项目筛选
    - 项目卡片列表: 展示项目封面、标题、简介、标签及详情链接
    - Case Studies 区块: 展示具体落地案例，包含背景、解决方案、成果
    - Solutions 区块: 展示标准化解决方案，包含技术架构与应用场景
    - 项目详情查看: 点击卡片跳转至详情（可展开模态框或跳转详情页，建议模态框保持单页体验）

- 页面 :[新闻动态页]
  - **路由**: `/news`
  - **文件名**: `NewsPage.tsx`
  - **页面目标**: 发布公司动态、研究进展、合作与重要里程碑，采用时间线形式呈现
  - 功能列表
    - 时间线布局: 按时间倒序排列新闻，左侧时间轴右侧内容卡片
    - 新闻分类标签: 区分公司动态、研究进展、合作公告、里程碑
    - 新闻卡片: 展示发布日期、标题、摘要、分类标签
    - 搜索功能: 支持按关键词搜索新闻标题和内容
    - 加载更多: 分页或"加载更多"按钮展示历史新闻

- 页面 :[知识库页]
  - **路由**: `/knowledge`
  - **文件名**: `KnowledgeBasePage.tsx`
  - **页面目标**: 集中展示白皮书、技术说明、研究材料，作为对外可分享的知识资产入口
  - 功能列表
    - 资源分类导航: 白皮书、技术文档、研究资料的分类标签
    - 资源列表: 展示文档封面、标题、简介、发布日期、语言版本
    - 下载功能: 提供文档下载链接（PDF/其他格式）
    - 摘要预览: 点击文档展开查看详细摘要或目录
    - 搜索与筛选: 支持按关键词、文档类型、语言筛选资源

- 页面 :[关于我们页]
  - **路由**: `/about`
  - **文件名**: `AboutPage.tsx`
  - **页面目标**: 介绍公司简介、使命愿景、研究与工程导向，强化专业可信度
  - 功能列表
    - 公司简介: 文字介绍公司历史、定位、核心业务
    - 使命愿景: 展示公司使命、愿景及价值观
    - 核心团队: 展示核心成员或团队架构（如需要）
    - 研究与工程导向: 强调研究驱动与工程交付的能力说明
    - 市场布局: 可视化展示欧洲与中国市场的业务布局

- 页面 :[联系我们页]
  - **路由**: `/contact`
  - **文件名**: `ContactPage.tsx`
  - **页面目标**: 提供对外联系渠道与表单，支持潜在合作伙伴与投资人发起联系
  - 功能列表
    - 联系信息展示: 公司地址、邮箱、电话、社交媒体链接
    - 联系表单: 姓名、邮箱、机构/公司、咨询类型、留言内容字段
    - 表单验证: 必填项校验、邮箱格式校验
    - 表单提交: 集成 Resend 发送邮件，提交后显示成功提示
    - 地图展示: 嵌入地图显示公司位置（可选）

-------

# UI 设计指南

## 1. Design Archetype (设计原型)
- **Aesthetic Direction**: **Industrial Scientific (工业科学风)**。参考严谨的学术期刊排版与高精尖工程蓝图，结合现代 SaaS 的清晰度。
- **Visual Signature**:
    1.  **数据可视化纹理**: 使用微弱的网格线 和等高线作为背景装饰，暗示"建模"与"分析"。
    2.  **工程级排版**: 极高的信息密度与对比度，使用大字号标题与紧凑的正文，类似技术文档。
    3.  **冷峻金属质感**: 使用带有细微噪点的深灰与青色，模拟精密仪器或数据中心的质感。
- **Emotional Tone**: **Rational (理性)** & **Robust (稳健)**。通过秩序感传达对能源市场的掌控力。
- **Application Type**: Marketing Site (Corporate) - 顶部导航，全宽流式布局，强调视觉冲击力与信息层级。

## 2. Design Principles (设计理念)
- **Content First, Decoration Last**: 每一个像素都应服务于信息的传达，装饰性元素（如背景纹理）必须处于极低对比度层级，绝不干扰阅读。
- **Structured Clarity**: 使用严格的栅格系统 和对齐方式，体现工程思维的严谨性。
- **Evidence-Based Design**: 避免空洞的营销口号，通过数据图表、时间线、文档列表等"证据型"组件建立信任。

## 3. Color System (色彩系统)
### 3.1 Core Colors
- **Primary**: `hsl(210, 80%, 25%)` - **Deep Energy Blue**。用于主导航、主按钮、重要标题。象征深海的能源储备与科技深度。
- **Secondary**: `hsl(180, 70%, 40%)` - **Teal Data**。用于图表、高亮数据、链接。代表电力、清洁能源与数据流动。

### 3.2 Neutral Colors
- **Background**: `hsl(220, 20%, 97%)` - **Off-White Lab**。极淡的冷灰，比纯白更护眼且更有质感。
- **Surface / Card**: `hsl(0, 0%, 100%)` - **Pure White**。用于内容卡片，与背景形成微弱区分。
- **Foreground / Text**: `hsl(215, 25%, 15%)` - **Charcoal Ink**。主要文字颜色，高对比度。
- **Muted / Line**: `hsl(210, 15%, 85%)` - **Grid Line**。用于分割线、边框、背景网格。

### 3.3 Semantic Colors
- **Success**: `hsl(150, 60%, 35%)` - **Verified Green**。用于表单提交成功、验证通过。
- **Warning**: `hsl(35, 90%, 45%)` - **Amber Alert**。用于注意事项。
- **Error**: `hsl(0, 70%, 45%)` - **System Red**。用于表单错误。

## 4. Typography (字体排版)
- **Heading**: **'Inter', 'Helvetica Neue', Arial, sans-serif**。强调几何感与现代性，字重使用 600-800。
- **Body**: **'Inter', system-ui, -apple-system, sans-serif**。极佳的屏幕阅读体验，字重使用 400-500。
- **Monospace (Data)**: **'JetBrains Mono', 'Fira Code', monospace**。专门用于数字、日期、代码片段、技术参数，强化"工程"属性。
- **字体导入**:
    ```css
    @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=JetBrains+Mono:wght@400;500&display=swap');
    ```

## 5. Global Layout Structure (全局布局结构)

### 5.1 Navigation Strategy
> **Topbar Layout** - 适合企业官网的线性浏览体验。
- **Desktop Specs (≥1024px)**:
  - 高度: `80px`，Fixed 定位，背景 `hsla(220, 20%, 97%, 0.95)` + 背部模糊 (`backdrop-blur-md`)。
  - Logo 居左，导航链接居中，语言切换与 CTA 居右。
  - 底部边框: `1px solid hsl(210, 15%, 90%)`。
- **Mobile Specs (<768px)**:
  - 高度: `64px`。
  - 导航链接收起至 Hamburger Menu (右侧抽屉 Drawer)。
- **Footer**: 需要 — height=`auto`，background=`hsl(215, 25%, 10%)`，文字白色。

### 5.2 Global Spacing Contract
> 定义全局容器与页面内容的边距契约，确保一致性。
- **Container Padding (Shell)**: `px-6 md:px-12 lg:px-20`。两侧留白充足，营造高端感。
- **Content Max Width**: `max-w-7xl mx-auto`。限制内容最大宽度，保证长文阅读体验。
- **Content Responsibility**: 页面内容必须填充容器 (`w-full`)，禁止自行设置 `margin-left/right`。

## 6. Page Patterns (Context-Aware)
> 基于页面类型推导具体的页面布局模式。

### 6.1 Common Patterns
- **Home (Landing)**: **Z-Pattern Layout**。Hero 区域全宽背景 -> 核心能力三列布局 -> 数据/案例宽幅展示 -> CTA。
- **Projects (Showcase)**: **Masonry or Grid with Sidebar Filters**。左侧/顶部为筛选器，右侧为卡片网格。卡片强调封面图与技术标签。
- **News (Timeline)**: **Vertical Centered Timeline**。时间轴居中或居左，卡片交替排列，强调日期的 Monospace 字体展示。
- **Knowledge Base (List)**: **Document List Layout**。类似文件管理器的列表视图，左侧图标，中间标题摘要，右侧下载按钮与日期。
- **Contact (Form)**: **Split Layout**。左侧联系信息（大字号、深色背景），右侧表单（白色卡片）。

### 6.2 Alignment & Spacing
- **Header Alignment**: `flex justify-between items-center`。
- **Internal Spacing**: `section` 间距 `py-20`，组件间距 `gap-8`。

## 7. Visual Effects & Motion (视觉效果与动效)
- **圆角**: `rounded-sm (0.125rem)` 或 `rounded-md (0.375rem)`。拒绝大圆角，保持硬朗的工程感。
- **阴影**: `shadow-sm` (仅用于卡片悬浮)，主要依靠边框 (`border border-[hsl(210,15%,85%)]`) 定义区域。
- **复杂背景文字处理**:
    - 深色图片背景上必须添加 `bg-gradient-to-t from-black/80 to-transparent` 遮罩。
    - 文字使用白色或 `hsl(210, 10%, 95%)`。
- **缓动函数**: `cubic-bezier(0.4, 0, 0.2, 1)` (Material Ease)，沉稳不突兀。
- **微交互**: 按钮悬停时背景色加深 10%，卡片悬停时轻微上移 `translate-y-[-2px]` 并加深阴影。

## 8. Components (组件指南)

### Buttons
- **Primary (Solid)**:
  - 背景: `hsl(210, 80%, 25%)` / 文字: `White`
  - Hover: 背景 `hsl(210, 80%, 20%)`
  - 圆角: `rounded-sm`
- **Secondary (Outline)**:
  - 背景: `Transparent` / 边框: `1px solid hsl(210, 80%, 25%)` / 文字: `hsl(210, 80%, 25%)`
  - Hover: 背景 `hsl(210, 80%, 5%)`

### Form Elements
- **输入框**: 背景 `White` / 边框 `1px solid hsl(210, 15%, 80%)` / Focus 边框色 `hsl(210, 80%, 40%)` + Ring。
- **Placeholder**: `hsl(210, 15%, 60%)` (对比度 ≥ 4.5:1)。

### Cards
- 背景: `White`
- 阴影: `shadow-sm`
- 圆角: `rounded-sm`
- 内边距: `p-6`
- 边框: `border border-[hsl(210,15%,90%)]`

## 9. Signature & Constraints (设计签名与禁区)

### DO (视觉签名)
1.  **Grid Background**: 在 Hero 或 Section 背景中使用 CSS 绘制淡蓝色网格线。
    ```css
    background-image: linear-gradient(hsl(210, 15%, 92%) 1px, transparent 1px),
    linear-gradient(90deg, hsl(210, 15%, 92%) 1px, transparent 1px);
    background-size: 40px 40px;
    ```
2.  **Monospace Tags**: 所有技术标签（如 "AI Model", "Grid Optimization"）使用 `font-mono text-xs bg-slate-100 text-slate-600 px-2 py-1` 样式。
3.  **Sharp Edges**: 全局统一使用 `rounded-sm`，避免 `rounded-xl` 或 `rounded-full`，体现工业硬朗感。

### DON'T (禁止做法)
1.  **禁止渐变色块**: 严禁使用紫色、粉色等高饱和度渐变作为主背景或按钮色。
2.  **禁止卡通插画**: 图标应使用线性图标，避免 3D 插画或手绘风格。
3.  **禁止全屏弹窗**: 除非查看大图，否则内容应在当前页面展开或跳转，避免覆盖式模态框打断阅读流。

## 10. Image Assets (图片资源清单)
> 风格定位：真实、高精度、冷色调、工业与科技结合。

| 位置 | 内容描述 | 比例 |
|:--|:--|:--|
| **Home Hero** | 抽象的全球能源网络连接图，深蓝色调，数据流光点，覆盖世界地图轮廓。 | 16:9 |
| **Home Capabilities** | 三张图：1. 服务器机房/代码屏幕（AI）；2. 风力/光伏电站实景（能源）；3. 工程师在控制室操作（交付）。 | 4:3 |
| **Projects List** | 真实的能源设施照片（变电站、风电场、交易大厅），需后期处理为冷色调，叠加微弱网格纹理。 | 3:2 |
| **News Timeline** | 配合新闻的小图标（如：握手、奖杯、文档），线性风格，单色。 | 1:1 |
| **About Team** | 专业商务肖像，背景虚化，穿着正装或实验服，光线均匀。 | 3:4 |
| **Contact** | 极简风格的公司大楼外观或现代办公区入口，低饱和度。 | 16:9 |