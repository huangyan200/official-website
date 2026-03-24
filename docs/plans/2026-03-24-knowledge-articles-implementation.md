# Knowledge Articles Implementation Plan

> **For Claude:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task.

**Goal:** Add a first batch of public-safe knowledge articles with standalone article pages to the official website.

**Architecture:** Keep all article content in the centralized typed content layer, add a new knowledge article route, and evolve the knowledge list page from placeholder tracks to an article-first entry page. Preserve the existing bilingual and SEO patterns and enforce the public-safe boundary through tests.

**Tech Stack:** React, React Router, TypeScript, centralized site content, Jest test suite, repo-local content QA scripts

---

### Task 1: Lock The New Content Contract

**Files:**
- Modify: `client/src/content/site-content.ts`
- Test: `test/unit/site-content.spec.ts`

**Step 1: Write the failing test**

Add assertions that:
- `siteContent.knowledge.articles` exists
- it has exactly 4 items
- all article `slug` values are unique
- each article has `sections`, `keyTakeaways`, and `boundaryNote`

Example:

```ts
const articles = siteContent.knowledge.articles;

expect(articles).toHaveLength(4);
expect(new Set(articles.map((article) => article.slug)).size).toBe(4);
expect(articles.every((article) => article.sections.length > 0)).toBe(true);
```

**Step 2: Run test to verify it fails**

Run: `npm test -- --runInBand test/unit/site-content.spec.ts`

Expected: FAIL because `knowledge.articles` does not exist yet.

**Step 3: Write minimal implementation**

Add the `KnowledgeArticle` type and placeholder-safe article structures to `client/src/content/site-content.ts`.

**Step 4: Run test to verify it passes**

Run: `npm test -- --runInBand test/unit/site-content.spec.ts`

Expected: PASS for the new content contract assertions.

**Step 5: Commit**

```bash
git add test/unit/site-content.spec.ts client/src/content/site-content.ts
git commit -m "test: lock knowledge article content contract"
```

### Task 2: Lock Route And Page Expectations

**Files:**
- Modify: `client/src/app.tsx`
- Modify: `client/src/pages/KnowledgeBasePage/KnowledgeBasePage.tsx`
- Create: `client/src/pages/KnowledgeArticlePage/KnowledgeArticlePage.tsx`
- Test: `test/unit/site-pages.spec.ts`

**Step 1: Write the failing test**

Add assertions that:
- `app.tsx` defines the `/knowledge/:slug` route
- `KnowledgeBasePage.tsx` uses `knowledge.articles.map`
- `KnowledgeArticlePage.tsx` imports centralized content

Example:

```ts
expect(appContent).toContain('path="knowledge/:slug"');
expect(knowledgePageContent).toContain('knowledge.articles.map');
expect(articlePageContent).toContain("from '@/content/site-content'");
```

**Step 2: Run test to verify it fails**

Run: `npm test -- --runInBand test/unit/site-pages.spec.ts`

Expected: FAIL because the route and article page do not exist yet.

**Step 3: Write minimal implementation**

Create the new page file and wire the route in `app.tsx`.

**Step 4: Run test to verify it passes**

Run: `npm test -- --runInBand test/unit/site-pages.spec.ts`

Expected: PASS for the new routing and page expectations.

**Step 5: Commit**

```bash
git add test/unit/site-pages.spec.ts client/src/app.tsx client/src/pages/KnowledgeBasePage/KnowledgeBasePage.tsx client/src/pages/KnowledgeArticlePage/KnowledgeArticlePage.tsx
git commit -m "test: lock knowledge article routing contract"
```

### Task 3: Implement The Article Content

**Files:**
- Modify: `client/src/content/site-content.ts`

**Step 1: Write the failing test**

Extend the content test to assert:
- article categories cover the mixed portfolio
- every boundary note includes a public-safe restriction
- every article has at least two sections

**Step 2: Run test to verify it fails**

Run: `npm test -- --runInBand test/unit/site-content.spec.ts`

Expected: FAIL until the real article content is added.

**Step 3: Write minimal implementation**

Populate the four bilingual articles using screened Feishu knowledge:
- fundamentals article 1
- fundamentals article 2
- market observation article
- system framework article

**Step 4: Run test to verify it passes**

Run: `npm test -- --runInBand test/unit/site-content.spec.ts`

Expected: PASS with the full article batch in place.

**Step 5: Commit**

```bash
git add client/src/content/site-content.ts test/unit/site-content.spec.ts
git commit -m "feat: add public-safe knowledge article batch"
```

### Task 4: Implement The Knowledge List Page

**Files:**
- Modify: `client/src/pages/KnowledgeBasePage/KnowledgeBasePage.tsx`
- Test: `test/unit/site-pages.spec.ts`

**Step 1: Write the failing test**

Add assertions that:
- the page maps `knowledge.articles`
- it no longer depends only on track cards for the main content body

**Step 2: Run test to verify it fails**

Run: `npm test -- --runInBand test/unit/site-pages.spec.ts`

Expected: FAIL until the page structure changes.

**Step 3: Write minimal implementation**

Render article cards with:
- title
- summary
- category
- read time
- publish date
- safe-scope label
- link to the detail page

Keep the current safety framing and demote the tracks block to supporting context.

**Step 4: Run test to verify it passes**

Run: `npm test -- --runInBand test/unit/site-pages.spec.ts`

Expected: PASS with the updated knowledge entry page.

**Step 5: Commit**

```bash
git add client/src/pages/KnowledgeBasePage/KnowledgeBasePage.tsx test/unit/site-pages.spec.ts
git commit -m "feat: turn knowledge page into article entry"
```

### Task 5: Implement The Article Detail Page

**Files:**
- Create: `client/src/pages/KnowledgeArticlePage/KnowledgeArticlePage.tsx`
- Modify: `client/src/app.tsx`

**Step 1: Write the failing test**

Add assertions that the article page:
- reads the route slug
- resolves an article from centralized content
- includes SEO breadcrumbs
- exposes a not-found fallback for unknown slugs

**Step 2: Run test to verify it fails**

Run: `npm test -- --runInBand test/unit/site-pages.spec.ts`

Expected: FAIL until the page implements the route behavior.

**Step 3: Write minimal implementation**

Build the article page with:
- metadata header
- section rendering
- key takeaways
- boundary note
- return navigation

If the slug is unknown, fall back to the existing not-found behavior or a safe inline fallback.

**Step 4: Run test to verify it passes**

Run: `npm test -- --runInBand test/unit/site-pages.spec.ts`

Expected: PASS with a working article detail route.

**Step 5: Commit**

```bash
git add client/src/pages/KnowledgeArticlePage/KnowledgeArticlePage.tsx client/src/app.tsx test/unit/site-pages.spec.ts
git commit -m "feat: add knowledge article detail pages"
```

### Task 6: Run Repo Gates And Final Review

**Files:**
- Review only: `docs/official-website-content-remediation-plan.md`
- Review only: `docs/PLAN_INDEX.md`

**Step 1: Run targeted tests**

Run:

```bash
npm test -- --runInBand test/unit/site-content.spec.ts test/unit/site-pages.spec.ts
```

Expected: PASS

**Step 2: Run content QA**

Run: `npm run test:content`

Expected: PASS

**Step 3: Run type check**

Run: `npm run type:check`

Expected: PASS

**Step 4: Run build**

Run: `npm run build`

Expected: PASS

**Step 5: Commit**

```bash
git add client/src/app.tsx client/src/content/site-content.ts client/src/pages/KnowledgeBasePage/KnowledgeBasePage.tsx client/src/pages/KnowledgeArticlePage/KnowledgeArticlePage.tsx test/unit/site-content.spec.ts test/unit/site-pages.spec.ts docs/plans/2026-03-24-knowledge-articles-design.md docs/plans/2026-03-24-knowledge-articles-implementation.md
git commit -m "feat: add public-safe knowledge articles"
```
