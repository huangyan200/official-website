# EnergyQuant Design Documentation

> 本文档记录 EnergyQuant 网站的设计思路、设计哲学和实现规范，为团队提供统一的设计参考。

---

## 1. Design Archetype (设计原型)

### 核心定位
**Aesthetic Direction**: **Industrial Scientific (工业科学风)**

**Design Inspiration**: 
- 瑞士国际主义排版（严谨的网格系统）
- 高精尖工程蓝图（精确的线条与测量）
- 现代 SaaS 的清晰度（信息密度与可读性）

**Visual Signature**:
1. **数据可视化纹理**: 使用微弱的网格线 和等高线作为背景装饰，暗示"建模"与"分析"
2. **工程级排版**: 极高的信息密度与对比度，使用大字号标题与紧凑的正文，类似技术文档
3. **冷峻金属质感**: 使用带有细微噪点的深灰与青色，模拟精密仪器或数据中心的质感

**Emotional Tone**: **Rational (理性)** & **Robust (稳健)**

通过秩序感传达对能源市场的掌控力，让用户感受到专业、可靠、可信赖的品牌气质。

---

## 2. Design Philosophy (设计哲学)

### 核心原则

#### 2.1 Content First, Decoration Last
- **每一个像素都应服务于信息的传达**
- 装饰性元素（如背景纹理、发光效果）必须处于极低对比度层级
- 绝不干扰阅读与核心信息的传递

#### 2.2 Structured Clarity
- **使用严格的栅格系统和对齐方式**
- 体现工程思维的严谨性
- 所有卡片、列表、区块遵循统一的间距与对齐规则

#### 2.3 Evidence-Based Design
- **避免空洞的营销口号**
- 通过数据图表、进度条、数字统计等"证据型"组件建立信任
- 每个主张都有数据支撑（如：预测准确率 97%、项目 75+）

#### 2.4 Quantitative Aesthetic (量化美学)
- **数据可视化是核心表达方式**
- 进度条、统计卡片、数字动效用于传递专业感
- 精确到小数点、毫秒、百分比，体现量化交易的严谨性

#### 2.5 Global Connectivity (全球连接感)
- **强调跨欧洲与中国市场的战略性位置**
- 通过国旗、连接线、地图式布局展示全球化视野
- 暗示数据流动、市场联动、跨境协作

---

## 3. Color System (色彩系统)

### 3.1 Core Colors (核心色)

#### Primary Color (主色)
- **Value**: `hsl(210, 80%, 25%)` → **Deep Energy Blue (#3b82f6)**
- **Usage**: 主导航、主按钮、重要标题、进度条
- **Meaning**: 象征深海的能源储备与科技深度
- **Applied**: `bg-blue-500` / `text-blue-500` / `border-blue-500`

#### Secondary Color (辅助色)
- **Value**: `hsl(180, 70%, 40%)` → **Teal Data (#22c55e)**
- **Usage**: 成功状态、增长指标、正面反馈
- **Meaning**: 代表电力、清洁能源与数据流动

### 3.2 Accent Colors (强调色)

| Color | Value | Usage | Meaning |
|-------|--------|-------|---------|
| **Purple** | `#8b5cf6` | 算法体系、研究内容 | 智慧、创新 |
| **Orange** | `#f59e0b` | 里程碑、重要指标 | 活力、成就 |
| **Red** | `#ef4444` | 错误状态、警告 | 紧急、注意 |

### 3.3 Neutral Colors (中性色)

- **Background**: `#0a0e1a` - Deep Space Dark (深空蓝)
- **Card Background**: `rgba(26, 31, 53, 0.4)` - Semi-transparent Dark (半透明深色)
- **Foreground / Text**: `white` / `rgba(255, 255, 255, 0.9)` - 高对比度白
- **Muted / Line**: `rgba(59, 130, 246, 0.15)` - Grid Line / Border (网格线/边框)

### 3.4 Gradient System (渐变系统)

- **Text Gradient**: `linear-gradient(90deg, #3b82f6 0%, #8b5cf6 50%, #3b82f6 100%)` - 用于标题文字
- **Button Gradient**: `linear-gradient(135deg, #3b82f6 0%, #2563eb 100%)` - 用于主按钮
- **Progress Gradient**: `linear-gradient(90deg, #3b82f6, #8b5cf6)` - 用于进度条
- **Divider Gradient**: `linear-gradient(90deg, transparent, rgba(59, 130, 246, 0.3), transparent)` - 用于分割线

---

## 4. Typography (字体排版)

### 4.1 Font Family

- **Heading**: **Inter, system-ui** - 强调几何感与现代性
- **Body**: **Inter, system-ui** - 极佳的屏幕阅读体验
- **Monospace (Data)**: **JetBrains Mono, monospace** - 专门用于数字、日期、代码片段

### 4.2 Type Scale (字号层级)

| Element | Size | Weight | Usage |
|---------|-------|--------|-------|
| **Hero Title** | 4xl-6xl (48-72px) | 700-800 | 首页口号 |
| **Section Title** | 3xl-4xl (36-48px) | 700 | 章节标题 |
| **Card Title** | lg-xl (18-24px) | 600 | 卡片标题 |
| **Body Text** | base-sm (14-16px) | 400-500 | 正文内容 |
| **Caption/Label** | xs-2xs (12-13px) | 400-500 | 标签、副标题 |
| **Data Number** | xl-2xl (20-28px) | 700 | 统计数字 |

### 4.3 Typography Rules

- **高对比度**: 深色背景上的文字必须使用白色或高亮色，对比度 ≥ 4.5:1
- **行高**: 标题行高 1.1-1.2，正文行高 1.6-1.7
- **字间距**: 英文标题字间距 0.05em，中文标题正常
- **发光效果**: 重要标题添加 `text-shadow: 0 0 20px rgba(59, 130, 246, 0.5)`

---

## 5. Layout Structure (布局结构)

### 5.1 Global Spacing Contract (全局间距契约)

| Element | Value | Usage |
|---------|--------|-------|
| **Container Padding** | `px-6 md:px-12 lg:px-20` | 页面两侧留白 |
| **Content Max Width** | `max-w-7xl` | 限制内容最大宽度 |
| **Section Spacing** | `py-16 md:py-24` | 章节间距 |
| **Component Gap** | `gap-5 md:gap-6` | 组件间距 |
| **Card Padding** | `p-6 md:p-8` | 卡片内边距 |

### 5.2 Grid System (栅格系统)

- **Background Grid**: 60px × 60px 网格线
- **Grid Opacity**: 0.05 (极低对比度)
- **Usage**: 仅作为背景装饰，不干扰内容

### 5.3 Card Layout (卡片布局)

**Glass Morphism Pattern (玻璃拟态)**:
```css
background: rgba(26, 31, 53, 0.4);
backdrop-filter: blur(12px);
border: 1px solid rgba(59, 130, 246, 0.2);
```

**Hover Effect**:
```css
background: rgba(26, 31, 53, 0.6);
border-color: rgba(59, 130, 246, 0.5);
transform: translateY(-2px to -4px);
box-shadow: 0 20px 40px -12px rgba(59, 130, 246, 0.3);
```

---

## 6. Visual Effects & Motion (视觉效果与动效)

### 6.1 Background Effects (背景效果)

#### Grid Background (网格背景)
- **Usage**: 所有页面的背景装饰
- **Implementation**: CSS `linear-gradient` 生成网格
- **Opacity**: 0.05 (极低对比度)

#### Glow Orbs (发光球体)
- **Usage**: Hero 区域的动态装饰
- **Animation**: 脉动式缩放 (`scale` 1 → 1.2 → 1)
- **Duration**: 8-10s
- **Opacity**: 0.1-0.2

#### Data Streams (数据流)
- **Usage**: 模拟数据传输的垂直线条
- **Animation**: 从上到下流动 (`translateY(-100vh) → translateY(100vh)`)
- **Duration**: 3s
- **Count**: 4-5 条均匀分布

#### Particles (粒子)
- **Usage**: 增强科技感的浮动粒子
- **Animation**: 随机漂浮 (`translate` + `rotate`)
- **Duration**: 6-8s
- **Count**: 4-6 个随机分布

### 6.2 Micro Interactions (微交互)

#### Hover Effects (悬停效果)
- **Translation**: `translateY(-2px to -4px)` - 向上浮动
- **Border**: 边框颜色加深
- **Background**: 背景不透明度增加
- **Shadow**: 柔和的蓝色阴影

#### Pulse Animations (脉冲动画)
- **Dot**: 缩放 + 透明度变化 (scale 1 → 1.2, opacity 1 → 0.7)
- **Line**: 左到右的流光效果
- **Duration**: 2s

#### Progress Bars (进度条)
- **Animation**: 宽度从 0 → 目标值展开
- **Easing**: `ease-out` (1s)
- **Fill Effect**: 渐变填充 + 流光动画

### 6.3 Easing Functions (缓动函数)

- **Default**: `cubic-bezier(0.4, 0, 0.2, 1)` (Material Ease)
- **Usage**: 所有过渡动画
- **Characteristics**: 沉稳不突兀，符合量化交易的专业感

---

## 7. Data Visualization (数据可视化)

### 7.1 Stat Cards (统计卡片)

**Structure**:
```
┌─────────────────────────┐
│  Icon  Label          │
│         Value          │
│         Unit           │
└─────────────────────────┘
```

**Visual Rules**:
- 数值使用 Monospace 字体
- 大数值使用 CountUpNumber 动效
- 悬停时底部渐变线条展开

### 7.2 Progress Bars (进度条)

**Structure**:
```
┌─────────────────────────┐
│ Label        Value      │
│ ▓▓▓▓▓▓▓▓░░░░░░░░  │  ← 渐变填充 + 流光
└─────────────────────────┘
```

**Visual Rules**:
- 高度 4px (细条设计)
- 渐变填充 (Blue → Purple)
- 流光动画从左到右循环

### 7.3 Market Cards (市场卡片)

**Structure**:
```
┌─────────────────────────┐
│ 🇪🇺  PRIMARY MARKET  │
│ Europe               │
│ DE · FR · UK · NL    │
│ ───────────────────── │
│ Projects: 28+        │
└─────────────────────────┘
```

**Visual Rules**:
- 国旗 emoji 增强地域识别
- 主市场用粗边框 (3px) + 蓝色
- 扩展市场用细边框 (1px)
- 虚线连接暗示全球布局

---

## 8. Components Guidelines (组件指南)

### 8.1 Buttons (按钮)

#### Primary Button (主按钮)
```css
background: linear-gradient(135deg, #3b82f6 0%, #2563eb 100%);
border: 1px solid rgba(59, 130, 246, 0.3);
color: white;
```
- **Hover**: 向上浮动 + 阴影加深
- **Shadow**: `0 4px 12px -4px rgba(59, 130, 246, 0.4)`

#### Secondary Button (次按钮)
```css
background: rgba(59, 130, 246, 0.1);
border: 1px solid rgba(59, 130, 246, 0.4);
color: #3b82f6;
```
- **Hover**: 背景加深 + 边框加深

### 8.2 Cards (卡片)

#### Glass Card (玻璃卡片)
```css
background: rgba(26, 31, 53, 0.4);
backdrop-filter: blur(12px);
border: 1px solid rgba(59, 130, 246, 0.2);
```
- **Rounded**: `rounded-sm` (0.125rem)
- **Shadow**: 仅悬停时显示
- **Transition**: 0.3s cubic-bezier

#### Stat Card (统计卡片)
```css
background: rgba(26, 31, 53, 0.3);
border: 1px solid rgba(59, 130, 246, 0.15);
```
- **Feature**: 底部渐变线条悬停展开
- **Alignment**: 居中对齐

### 8.3 Badges (标签)

**Tag Pill Style**:
```css
background: rgba(59, 130, 246, 0.1);
border: 1px solid rgba(59, 130, 246, 0.2);
color: #3b82f6;
font-family: var(--font-mono);
font-size: 0.65rem;
padding: 4px 10px;
```

**Usage**: 技术标签、状态指示、分类标识

### 8.4 Icons (图标)

**Icon Box Style**:
```css
background: rgba(255, 255, 255, 0.05);
border: 1px solid rgba(255, 255, 255, 0.1);
```
- **Size**: 10×10 (sm) 或 12×12 (md)
- **Icon**: Lucide React
- **Hover**: 背景加深 + 缩放 1.1

---

## 9. Design Signature (设计签名)

### DO (必须做的)

1. **Grid Background**: 所有页面使用 60px 网格线作为背景
2. **Monospace Data**: 所有数字、日期、技术标签使用等宽字体
3. **Sharp Edges**: 全局统一使用 `rounded-sm`，避免大圆角
4. **Glass Morphism**: 卡片使用半透明 + 毛玻璃效果
5. **Data Evidence**: 每个主张都有数据支撑（进度条、统计卡片）
6. **Global Connectivity**: 通过国旗、连接线展示全球化视野
7. **Glow Effects**: 重要标题、按钮添加发光效果
8. **Micro Interactions**: 悬停时向上浮动 + 边框发光

### DON'T (禁止做的)

1. **禁止渐变色块**: 严禁使用紫色、粉色等高饱和度渐变作为主背景
2. **禁止卡通插画**: 图标应使用线性图标，避免 3D 插画或手绘风格
3. **禁止全屏弹窗**: 内容应在当前页面展开或跳转，避免覆盖式模态框打断阅读流
4. **禁止纯白背景**: 背景必须为深色 `#0a0e1a`，避免刺眼
5. **禁止大圆角**: 避免 `rounded-xl` 或 `rounded-full`，保持硬朗感
6. **禁止无动画**: 关键元素必须有进场或悬停动画
7. **禁止低对比度**: 确保深色背景上的文字对比度 ≥ 4.5:1
8. **禁止数据缺失**: 每个关键指标都必须有可视化展示

---

## 10. Responsive Design (响应式设计)

### 10.1 Breakpoints (断点)

| Breakpoint | Value | Usage |
|------------|-------|-------|
| **Mobile** | < 768px | 单列布局 |
| **Tablet** | 768px - 1024px | 两列布局 |
| **Desktop** | ≥ 1024px | 三列布局 |

### 10.2 Responsive Rules

- **Mobile First**: 移动端优先设计，向上适配
- **Grid Adaptation**: 网格从 1 列 → 2 列 → 3 列
- **Text Scaling**: 标题字号 4xl → 5xl → 6xl
- **Spacing Adaptation**: Padding 从 `px-6` → `px-12` → `px-20`
- **No Horizontal Overflow**: 确保所有元素在 320px 宽度下无水平溢出

---

## 11. Accessibility (无障碍访问)

### 11.1 Color Contrast (色彩对比)

- **Minimum Ratio**: 4.5:1 (WCAG AA 标准)
- **Important Text**: ≥ 7:1 (WCAG AAA 标准)
- **Tool**: 使用 WebAIM Contrast Checker 验证

### 11.2 Focus States (聚焦状态)

- **Keyboard Navigation**: 所有可交互元素必须可通过键盘访问
- **Focus Ring**: 聚焦时显示蓝色光环 (`ring-2 ring-blue-500`)
- **Skip Links**: 提供跳转到主内容的链接

### 11.3 Semantic HTML (语义化 HTML)

- 使用正确的 HTML5 标签 (`<header>`, `<nav>`, `<main>`, `<section>`, `<footer>`)
- 为图片提供有意义的 `alt` 文本
- 使用 ARIA 标签增强可访问性

---

## 12. Performance (性能)

### 12.1 Animation Performance (动画性能)

- **Use Transform & Opacity**: 优先使用 `transform` 和 `opacity` 进行动画
- **Avoid Layout Thrashing**: 避免触发重排 (layout) 的属性
- **Will-Change**: 必要时使用 `will-change` 优化

### 12.2 Image Optimization (图片优化)

- **Format**: 使用 WebP 格式
- **Lazy Loading**: 非首屏图片使用懒加载
- **Responsive Images**: 使用 `srcset` 和 `sizes`

### 12.3 CSS Optimization (CSS 优化)

- **Purge Unused**: 移除未使用的 CSS
- **Minify**: 压缩 CSS 文件
- **Critical CSS**: 内联首屏关键 CSS

---

## 13. Brand Consistency (品牌一致性)

### 13.1 Logo Usage (Logo 使用)

- **Primary Logo**: 白色 EQ 文字 + 渐变背景
- **Small Logo**: 纯色图标 + 字母
- **Placement**: 左上角，固定导航栏

### 13.2 Voice & Tone (语调与风格)

- **Professional**: 专业、严谨、可靠
- **Data-Driven**: 数据驱动、证据导向
- **Global**: 全球视野、跨市场连接
- **Innovative**: 创新进取、技术领先

### 13.3 Copy Guidelines (文案指南)

- **Concise**: 简洁有力，避免冗长
- **Quantitative**: 使用数据支撑观点
- **Bilingual**: 中英双语，保持一致性
- **Action-Oriented**: 使用行动性语言引导用户

---

## 14. Implementation Checklist (实现检查清单)

在实现新页面或组件时，请确保：

- [ ] 使用深色背景 (`#0a0e1a`)
- [ ] 添加网格背景装饰
- [ ] 卡片使用玻璃拟态效果
- [ ] 数字使用等宽字体 + CountUpNumber
- [ ] 重要数据有可视化展示（进度条、统计卡片）
- [ ] 悬停时有向上浮动 + 边框发光
- [ ] 标题有渐变文字或发光效果
- [ ] 标签使用 Monospace 字体
- [ ] 圆角使用 `rounded-sm`
- [ ] 边框颜色使用 `rgba(59, 130, 246, *)`
- [ ] 有数据流动画（粒子、流线）
- [ ] 响应式布局适配移动端
- [ ] 色彩对比度 ≥ 4.5:1
- [ ] 中英双语支持
- [ ] 无障碍访问（键盘导航、ARIA 标签）

---

## 15. Design Inspiration (设计灵感)

### Reference Websites (参考网站)

1. **Yggdrasil Commodities** (https://www.yggdrasilcommodities.com/)
   - 高信息密度
   - 数据驱动设计
   - 硬朗的工程美学

2. **Stripe** (https://stripe.com/)
   - 精致的玻璃拟态
   - 流畅的动画
   - 专业金融感

3. **Linear** (https://linear.app/)
   - 深色主题
   - 细腻的微交互
   - 极简主义

### Design Books (设计书籍)

1. *Refactoring UI* by Adam Wathan
2. *Design Systems* by Alla Kholmatova
3. *Thinking with Type* by Ellen Lupton

---

## 16. Future Iterations (未来迭代)

### Planned Enhancements (计划增强)

1. **Dark Mode Optimization**: 进一步优化深色主题的可读性
2. **3D Data Visualization**: 使用 Three.js 或 WebGL 增强 3D 数据可视化
3. **Interactive Globe**: 交互式 3D 地球展示全球市场布局
4. **Real-time Data**: 实时数据流展示（如市场波动、交易量）
5. **AI Chatbot**: 集成 AI 聊天机器人提供智能客服

---

## Appendix (附录)

### A. Color Palette Reference (色板参考)

```css
/* Primary Colors */
--blue-500: #3b82f6;
--blue-400: #60a5fa;

/* Secondary Colors */
--green-500: #22c55e;
--green-400: #4ade80;

/* Accent Colors */
--purple-500: #8b5cf6;
--orange-500: #f59e0b;
--red-500: #ef4444;

/* Neutral Colors */
--bg-primary: #0a0e1a;
--bg-secondary: #1a1f35;
--bg-card: rgba(26, 31, 53, 0.4);
--text-primary: #ffffff;
--text-secondary: rgba(255, 255, 255, 0.7);
--text-muted: rgba(255, 255, 255, 0.5);
--border-color: rgba(59, 130, 246, 0.2);
```

### B. Font Stack Reference (字体栈)

```css
--font-sans: 'Inter', system-ui, -apple-system, sans-serif;
--font-mono: 'JetBrains Mono', 'Fira Code', monospace;
```

### C. Spacing Scale Reference (间距比例)

```css
--spacing-1: 4px;
--spacing-2: 8px;
--spacing-3: 12px;
--spacing-4: 16px;
--spacing-5: 20px;
--spacing-6: 24px;
--spacing-8: 32px;
--spacing-12: 48px;
--spacing-16: 64px;
--spacing-20: 80px;
```

---

**Document Version**: 1.0.0  
**Last Updated**: 2026-01-29  
**Maintained By**: EnergyQuant Design Team
