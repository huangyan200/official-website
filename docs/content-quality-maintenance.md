# Official Website Content Quality Maintenance

Audience: both
Purpose: execution
Owner: Web Platform Team
Source-of-Truth: yes
Status: active
Last-Updated: 2026-03-03

## Why This File Exists
Define the minimum quality gate for bilingual website content updates so content regressions are blocked before merge.

## Scope
This guide applies to:
1. `client/src/components/**/*.ts(x)` content-related updates,
2. `client/src/pages/**/*.ts(x)` copy, links, and static asset references,
3. any PR that changes user-facing website text or metadata.

## Required Pre-Merge Checks
Run:
1. `npm run test:content`
2. `npm run type:check:client`

Recommended combined command:
1. `npm run test:website`

## Guardrail Rules
The content QA script (`scripts/check-content-quality.js`) currently blocks:
1. mojibake/encoding artifacts (`\uFFFD` and high-risk Latin-1 garble tokens),
2. placeholder links (`href="#"` or `to="#"`),
3. missing local image references under `/images/*`.

## Failure Handling
1. Fix root cause in source files; do not suppress script errors.
2. Re-run `npm run test:content` until clean.
3. Re-run `npm run type:check:client` before push.

## Change Management
When guardrail logic changes:
1. update this file in the same PR,
2. update `docs/official-website-content-remediation-plan.md` execution snapshot if behavior changes.
