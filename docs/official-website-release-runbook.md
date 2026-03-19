# Official Website Release Runbook

Audience: both
Purpose: runbook
Owner: Web Platform Team
Source-of-Truth: yes
Status: active
Last-Updated: 2026-03-09

## Goal
Provide one manual release checklist for the 任能官网首发版本.

## Preconditions
1. Work from the launch branch after syncing with latest `develop`.
2. Confirm no unreviewed public copy remains in `client/src/content/site-content.ts`.
3. Confirm no public-facing metrics, case results, fake downloads, or fake form flows have been reintroduced.

## Release Gate
Run in `official-website/`:

```bash
npm run test:content
npm run type:check
npm run build
```

For local visual review on Windows:

```bash
npm run preview:client:win
```

Expected:
1. all commands exit `0`,
2. preview opens on `http://127.0.0.1:4173`,
3. no page shows legacy brand copy or mock launch content.

## Manual Review Checklist
1. Home clearly explains who 任能 is and what the site is for.
2. Solutions page contains only solution scope, scenarios, and deliverables.
3. About page keeps only public-safe company positioning and methods.
4. Knowledge page is an explicit placeholder with no fake downloads.
5. Updates page contains only public-safe update items.
6. Contact page has no online form and only approved contact channels.
7. Chinese and English navigation, footer, and SEO titles stay aligned.

## Build Output
1. `npm run build` produces the distributable bundle under `dist/`.
2. If server packaging is required, follow the existing deployment notes in `DEPLOY_ENERGYQUANT.md`.

## Release Steps
1. Run the release gate commands.
2. Open preview locally and complete the manual review checklist.
3. Push the launch branch.
4. Open or update the PR to `develop`.
5. After merge, deploy the latest release artifact using the agreed manual infrastructure workflow.

## Rollback
1. Revert the launch PR if the release needs to be rolled back at code level.
2. Redeploy the previous stable artifact on the hosting server if the issue is deployment-specific.
3. Record the reason and affected page scope in the repo progress log or incident channel.

## Notes
1. This runbook intentionally does not include automatic deployment.
2. Public downloads, public social links, and public metrics require separate business confirmation before a later release can enable them.
