# Content Preserved UI Upgrade Implementation Plan

> **For Claude:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task.

**Goal:** Restore the stronger original website copy while keeping the new launch-safe structure, then improve presentation quality and keep the implementation maintainable.

**Architecture:** Keep the centralized content-source approach introduced in the launch refactor, but repopulate it with the original high-signal copy from `origin/develop` for the core pages. Preserve the simplified routing and launch-safe interaction model, while upgrading section composition and visual hierarchy in the page components.

**Tech Stack:** React 19, TypeScript, React Router, Tailwind CSS, Jest, Rspack

---

### Task 1: Rebuild the content baseline

**Files:**
- Modify: `official-website/client/src/content/site-content.ts`
- Reference: `origin/develop:official-website/client/src/pages/HomePage/HomePage.tsx`
- Reference: `origin/develop:official-website/client/src/pages/ProjectsPage/ProjectsPage.tsx`
- Reference: `origin/develop:official-website/client/src/pages/AboutPage/AboutPage.tsx`

**Step 1: Write the failing test**
- Add assertions for original high-signal phrases on Home, Projects, and About content.

**Step 2: Run test to verify it fails**
- Run: `npm test -- --runInBand test/unit/site-content.spec.ts`

**Step 3: Write minimal implementation**
- Rebuild `siteContent` sections so the core copy preserves the original voice and stronger business detail.

**Step 4: Run test to verify it passes**
- Run: `npm test -- --runInBand test/unit/site-content.spec.ts`

### Task 2: Recompose core pages without flattening content

**Files:**
- Modify: `official-website/client/src/pages/HomePage/HomePage.tsx`
- Modify: `official-website/client/src/pages/ProjectsPage/ProjectsPage.tsx`
- Modify: `official-website/client/src/pages/AboutPage/AboutPage.tsx`
- Test: `official-website/test/unit/site-pages.spec.ts`

**Step 1: Write the failing test**
- Add expectations that page components render the restored content blocks and keep the simplified launch-safe structure.

**Step 2: Run test to verify it fails**
- Run: `npm test -- --runInBand test/unit/site-pages.spec.ts`

**Step 3: Write minimal implementation**
- Rebuild the page sections around the restored content, improving layout hierarchy and readability without restoring the old fragile page-local translation blobs.

**Step 4: Run test to verify it passes**
- Run: `npm test -- --runInBand test/unit/site-pages.spec.ts`

### Task 3: Visual cleanup and component-level polish

**Files:**
- Modify: `official-website/client/src/components/Layout.tsx`
- Modify: `official-website/client/src/pages/HomePage/HomePage.tsx`
- Modify: `official-website/client/src/pages/ProjectsPage/ProjectsPage.tsx`
- Modify: `official-website/client/src/pages/AboutPage/AboutPage.tsx`
- Modify: `official-website/client/src/index.css`

**Step 1: Verify current behavior**
- Use local preview to capture the existing visual baseline.

**Step 2: Write minimal implementation**
- Tighten hero spacing, section headers, card rhythm, footer density, and page-level composition without changing the approved site structure.

**Step 3: Run targeted verification**
- Run: `npm run type:check`
- Run: `npm run build`

### Task 4: Docs and launch verification sync

**Files:**
- Modify: `official-website/logs/progress/CURRENT.md`
- Modify: `official-website/docs/official-website-content-remediation-plan.md`
- Reference: `official-website/docs/official-website-release-runbook.md`

**Step 1: Update progress notes**
- Record that the content-preserved revision replaced the over-compressed launch copy.

**Step 2: Run final verification**
- Run: `npm run test:content`
- Run: `npm run type:check`
- Run: `npm test -- --runInBand test/unit/site-content.spec.ts test/unit/site-pages.spec.ts`
- Run: `npm run build`
- Run: `npm run preview:client:win`
