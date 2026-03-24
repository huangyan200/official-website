# Knowledge Articles Design

**Date:** 2026-03-24
**Repo:** `huangyan-official-website`
**Status:** approved

## Context

Repo-local bootstrap at design time:
- `Status`: `active`
- `In progress`: preview review and stakeholder sign-off before release
- `Next`: complete local preview review, then release when approved
- `Blockers / Risks`: `logs/progress/CURRENT.md` is missing; public wording and visual regressions still need explicit control

Branch baseline at design time:
- remote default branch is `main`
- local `main` must be aligned with `origin/main` before task work starts
- implementation branch for this work: `codex/knowledge-articles-public-safe`

## Goal

Turn the Knowledge page from a public-safe placeholder into a real public knowledge entry with a small first batch of articles sourced from non-sensitive Feishu content, while preserving the launch governance boundary.

## Decision

Use local typed content plus independent article routes:
- knowledge list remains at `/knowledge`
- each article gets its own route at `/knowledge/:slug`
- article content stays in centralized typed site content rather than Markdown, CMS, or Feishu runtime reads

## Why This Approach

This approach fits the current repo architecture:
- content is already centralized in `client/src/content/site-content.ts`
- current pages already rely on typed bilingual content and shared SEO helpers
- launch governance explicitly avoids CMS, fake download flows, and unnecessary new infrastructure

It also keeps public-safe control tight:
- article structure is explicit and testable
- bilingual content stays deterministic
- boundary notes can be enforced in tests

## Information Architecture

### Knowledge List Page

`/knowledge` becomes the entry page for public knowledge articles.

Keep:
- current hero
- public-safe framing
- knowledge scope explanation

Replace the placeholder track-first body with:
- a featured article list of four cards
- article metadata per card: category, title, summary, read time, publish date, safe-scope label
- a lighter track/topic section as secondary context

### Knowledge Article Page

`/knowledge/:slug` becomes a dedicated article detail page.

Page structure:
1. title block
2. article metadata
3. hero note or framing statement
4. sectioned body
5. key takeaways
6. public-safe boundary note
7. return link to `/knowledge`

## First Article Batch

The first release batch should use a mixed public portfolio:

1. `什么是电力市场：从计划调度到市场化交易`
   - type: fundamentals
   - purpose: establish shared market basics for general visitors

2. `储能项目的公开价值框架：不仅是峰谷套利`
   - type: fundamentals
   - purpose: explain storage value-stack logic at a public level

3. `中国与欧洲电力市场有哪些关键差异`
   - type: market observation
   - purpose: show cross-market perspective without turning into advisory content

4. `从数据到预测到执行：能源 AI 系统的高层框架`
   - type: framework
   - purpose: expose system thinking without exposing implementation logic

## Public-Safe Rules

Allowed:
- market basics
- public mechanism explanations
- high-level industry observations
- non-sensitive systems framing
- public educational narrative

Forbidden:
- client names
- internal workflows
- strategy logic
- bidding logic
- model parameters
- forecast quality claims
- project ROI figures
- deployment metrics without approved evidence
- content that can be read as trading, investment, or implementation advice

Each article must end with a boundary note that explicitly states the article is for public knowledge sharing only and does not constitute trading, investment, or project implementation advice.

## Data Model

Add a new typed article model to centralized content:

```ts
interface KnowledgeArticle {
  slug: string;
  category: LocalizedText;
  title: LocalizedText;
  summary: LocalizedText;
  publishedAt: LocalizedText;
  readTime: LocalizedText;
  safeScopeLabel: LocalizedText;
  heroNote: LocalizedText;
  sections: {
    heading: LocalizedText;
    body: LocalizedText[];
  }[];
  keyTakeaways: LocalizedText[];
  boundaryNote: LocalizedText;
}
```

Knowledge page content should expose:
- `heading`
- `summary`
- `tagline`
- `safetyNote`
- `contactNote`
- `tracks`
- `articles`

## Routing And SEO

Routing changes:
- keep `/knowledge`
- add `/knowledge/:slug`

SEO changes:
- knowledge list page remains page-style metadata
- article pages get per-article title and description
- article pages should render breadcrumb trail: Home > Knowledge > Article

## Validation

Automated:
- update `test/unit/site-content.spec.ts`
- update `test/unit/site-pages.spec.ts`
- add targeted article page coverage if needed
- run `npm run test:content`
- run `npm run type:check`
- run `npm run build`

Manual:
- verify article cards render on `/knowledge`
- verify each article route loads correctly
- verify bilingual output
- verify public-safe note is present on all articles
- verify no fake downloads or fake submission behavior is introduced

## Out Of Scope

Not in this round:
- CMS
- search
- downloads
- article sharing widgets
- comments
- Feishu runtime sync
- article authoring system

## Docs Sync

Docs Impact: updated via local design doc for the first public-safe knowledge article batch.
