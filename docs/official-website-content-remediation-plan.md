# Official Website Launch Governance Plan

Audience: both
Purpose: plan
Owner: Web Platform Team
Source-of-Truth: yes
Status: active
Last-Updated: 2026-03-09

## Objective
Turn `official-website` into the first public-safe launch version for 任能科技 by:
1. replacing scattered mock copy with one centralized typed content source,
2. restructuring the site into `Corporate + Solutions`,
3. preserving the stronger original Home, Projects, and About copy inside the new structure instead of flattening it into low-signal launch prose,
4. removing fabricated flows such as fake downloads and fake form workflows,
5. making preview and release steps explicit and repeatable,
6. upgrading the site shell from a generic energy template look into a quant-brand visual system that better matches the company's positioning.

## Launch Positioning
The launch version is intentionally narrow:
1. company introduction,
2. solutions overview and portfolio-style project presentation,
3. public updates,
4. knowledge-hub placeholder,
5. direct contact channels.

Out of scope:
1. CMS integration,
2. automatic deployment,
3. downloadable whitepapers,
4. new fabricated public claims that are not already part of the reviewed site copy,
5. redesign driven by new Figma frames.

## Public Content Rules
Allowed:
1. company positioning and mission,
2. public solution directions and approved portfolio-style case narratives,
3. public-safe contact channels,
4. site updates and future content roadmap,
5. metrics and cross-region context only when intentionally preserved from the reviewed prior website copy.

Forbidden for the launch version:
1. fundraising, governance, equity, and internal operating details,
2. fake or newly invented client names, business metrics, deployment counts, or ROI claims,
3. content rewrites that erase the original business voice without stakeholder approval,
4. fake form success flows, fake downloads, or fabricated news items.

## Implementation Milestones
### M1: Centralize content and rename public brand
1. create one typed content source for navigation, page copy, SEO, and contact data,
2. switch public site naming to 任能 / 任能科技,
3. remove legacy brand copy from pages and default SEO output.

Exit criteria:
1. all launch pages consume the centralized content source,
2. page copy and meta copy no longer depend on per-page mock translations.

### M2: Restructure pages to launch-safe IA
1. Home becomes a company overview and solutions entry page while keeping the original high-signal hero and evidence language,
2. `/projects` becomes a public `Solutions` page that still preserves stronger portfolio and case-study language,
3. About becomes a China corporate positioning page without discarding the original company story and method voice,
4. Knowledge becomes a placeholder entry,
5. News becomes a short public update page,
6. Contact becomes a direct-channel page without online form behavior.

Exit criteria:
1. no mock case data remains on launch pages,
2. no fake form or fake download behavior remains,
3. original core content voice is preserved in the centralized content source.

### M3: Release validation and governance docs
1. keep `npm run test:content`, `npm run type:check`, `npm run build`, and `npm run preview:client:win` as launch gates,
2. update plan index and progress log,
3. add a manual release runbook.

Exit criteria:
1. QA and typecheck pass,
2. build passes,
3. preview and manual review are ready to be executed from one documented playbook.

### M4: Quant-brand visual shell upgrade
1. replace the generic blue glass language with a darker quant-oriented shell, signal-grid background, and sharper panel geometry,
2. move typography to `Space Grotesk` + `Noto Sans SC` + `JetBrains Mono`,
3. differentiate Home hero, Projects case bands, About brand narrative, Knowledge lab index, and Contact terminal layout without changing the content IA,
4. make motion an enhancement layer only and support `prefers-reduced-motion`.

Exit criteria:
1. Home reads as `quant + energy` at first glance,
2. Layout, footer, and page section shells share one brand system,
3. desktop split layouts and panel rhythm work correctly after build,
4. reduced-motion mode still shows all critical content without relying on animation.

## Execution Snapshot (2026-03-09)
Completed in current execution:
1. added `client/src/content/site-content.ts` as the single source for launch copy,
2. rebuilt `Layout.tsx` and `SEO.tsx` around 任能-facing navigation, footer, and metadata,
3. repopulated Home, Projects, and About with the stronger original copy and reorganized those pages into cleaner sections,
4. removed the fake contact form workflow and converted Contact into a direct-channel page,
5. added unit tests for centralized content and page launch contracts,
6. fixed `CountUpNumber` fallback behavior so preview metrics render correctly even when intersection triggers are delayed,
7. replaced the previous generic visual shell with a quant-brand theme token layer and shared visual primitives in `tailwind-theme.css` and `index.css`,
8. rebuilt Layout, Home, Projects, About, Knowledge, News, and Contact around sharper split layouts, signal panels, case bands, and terminal-style contact framing,
9. added `test/unit/visual-brand.spec.ts` to lock typography, visual primitives, and valid Tailwind arbitrary grid syntax,
10. validated:
   - `npm test -- --runInBand test/unit/visual-brand.spec.ts test/unit/site-content.spec.ts test/unit/site-pages.spec.ts`
   - `npm run test:content`
   - `npm run type:check`
   - `npm run build`
   - browser preview on `http://127.0.0.1:4173`

Remaining before release:
1. complete local preview review with `npm run preview:client:win`,
2. collect stakeholder visual and content sign-off,
3. execute release if preview is approved.

## Risks and Controls
1. Risk: public wording still overstates capabilities.
   Control: keep all copy in one typed source and review there first.
2. Risk: launch pages drift back to mock or fabricated content.
   Control: enforce unit tests and content QA in the release gate.
3. Risk: content-preserved pages retain statements that still need a final public-boundary check.
   Control: perform final manual preview review before release and trim only the specific lines that are challenged.
4. Risk: contact expectations exceed current public channels.
   Control: keep contact scope explicit and avoid fake form submission behavior.
5. Risk: visual redesign drifts back to generic SaaS or breaks split layouts during later edits.
   Control: keep brand primitives centralized and enforce regression coverage in `test/unit/visual-brand.spec.ts`.

## Validation Plan
1. Automated:
   - `npm test -- --runInBand test/unit/visual-brand.spec.ts test/unit/site-content.spec.ts test/unit/site-pages.spec.ts`
   - `npm run test:content`
   - `npm run type:check`
   - `npm run build`
2. Manual:
   - local preview review through `npm run preview:client:win`
   - bilingual check across navigation, page copy, and footer
   - SEO spot-check for title, description, and breadcrumb metadata
   - confirm preserved content remains acceptable for public release
   - confirm no public page contains fake downloads or fake submission behavior
   - confirm reduced-motion mode still presents all core information cleanly

## Exit Criteria
This plan is complete when:
1. the launch site is fully driven by the centralized content source,
2. all launch pages follow the `Corporate + Solutions` structure,
3. the approved original content voice is preserved on the core pages,
4. the quant-brand shell is stable across the launch pages,
5. no public-safe boundary violations remain,
6. preview and release steps are documented and repeatable.

## Docs Sync
Docs Impact: Updated launch governance to include the quant-brand visual upgrade, the new visual regression test gate, and the latest preview-based verification status.
