# Design QA

## Comparison target

- Source visual truth: `/Users/tarang/.codex/generated_images/019f5d82-a372-7ce2-8e09-c502ba5dbc1d/call_3Zsznoq1dMhzKw7XWnpu2He4.png`
- Rendered implementation: `http://127.0.0.1:4173/`
- Desktop implementation capture: `/tmp/tarang-recruiter-build/home-v3.png`
- Mobile homepage capture: `/tmp/tarang-recruiter-build/mobile-home.png`
- Mobile recruiter-journey capture: `/tmp/tarang-recruiter-build/mobile-work.png`
- Combined comparison: `/tmp/tarang-recruiter-build/comparison-v3.jpg`
- State: homepage at initial load and the first flagship project after the
  primary CTA

## Normalization

- Source pixels: 1487 × 1058
- Implementation pixels: 1440 × 1024
- Desktop CSS viewport: 1440 × 1024
- Mobile CSS viewport: 390 × 844
- Device scale factor: 1
- The source was normalized to 1440 × 1024 for side-by-side comparison. The
  aspect-ratio difference is negligible and did not introduce a meaningful crop.

## Full-view comparison evidence

The combined comparison confirms the selected recruiter evidence-ledger
direction: warm paper background, compact utility navigation, oversized
outcome-led headline, cobalt emphasis, four proof columns, thin structural
rules, and a tangible product artifact immediately after the evidence strip.

The implementation intentionally uses the existing real Studentlytics product
screenshot instead of the generated mock's approximate artifact. This preserves
the source hierarchy while keeping every visible product claim grounded in
actual work.

## Focused-region evidence

- Desktop hero: navigation density, headline wrapping, context line, CTA group,
  evidence ledger, and first flagship entry were compared at 1440 × 1024.
- Mobile homepage: headline, current context, primary action, résumé, and email
  remain readable without clipping or horizontal overflow at 390 × 844.
- Mobile recruiter journey: the primary CTA scrolls directly to a sharp,
  fully-contained Studentlytics artifact and a concise four-line proof summary.
- Direct hash navigation: a fresh load at `/#experience` settles with the
  Experience section 66px below the sticky navigation.

## Required fidelity surfaces

- Fonts and typography: Manrope remains consistent. The display scale matches
  the editorial source while utility labels and recruiter-facing microcopy were
  increased for readability.
- Spacing and layout rhythm: the compact hero, four-column proof ledger, and
  immediate flagship entry reproduce the selected direction. Mobile collapses
  cleanly to one column and a two-column evidence ledger.
- Colors and visual tokens: warm paper, near-black, cobalt, muted gray, and thin
  rules match the source. No gradients, glass effects, or decorative AI-style
  treatments were introduced.
- Image quality and asset fidelity: flagship imagery uses real project
  screenshots with preserved aspect ratios and `object-fit: contain`.
- Copy and content: the homepage now prioritizes award, business outcome,
  benchmark, ownership, speed, and shipping proof before process detail. Full
  reasoning remains available inside each case study.

## Interaction and runtime checks

- Routes tested: `/`, `/work/studentlytics`, `/work/morphic`, `/work/locus`
- All routes rendered at 390px without broken images or horizontal overflow.
- Homepage navigation, résumé, email, primary CTA, project evidence, and
  case-study links have valid destinations.
- The primary CTA and fresh-load hash links were exercised.
- Browser console was checked after route visits; no warnings or errors were
  present.
- Production build, TypeScript compilation, ESLint, and whitespace validation
  passed.

## Comparison history

### Iteration 1

- [P2] The first implementation's desktop hero and evidence ledger were taller
  than the selected visual, pushing most flagship proof below the fold.
- [P2] A fresh `/#experience` load stopped above the target after page media
  settled.
- [P3] Several visible mobile utility labels were only 8–10px.

Fixes:

- Reduced desktop headline scale, hero padding, and evidence-ledger height.
- Re-applied hash scrolling after page load and layout settlement.
- Increased the primary utility, evidence, project, and mobile-menu labels.

Post-fix evidence:

- `/tmp/tarang-recruiter-build/comparison-v3.jpg`
- `/tmp/tarang-recruiter-build/mobile-home.png`
- `/tmp/tarang-recruiter-build/mobile-work.png`

### Iteration 2

No actionable P0, P1, or P2 differences remain.

## Findings

No actionable P0, P1, or P2 findings remain.

## Open questions

None.

## Implementation checklist

- [x] Lead with recruiter-scannable evidence.
- [x] Keep real product artifacts in the critical path.
- [x] Preserve deep case studies without overloading the homepage.
- [x] Validate desktop and mobile layout behavior.
- [x] Verify direct case-study and section routes.
- [x] Check browser console and runtime output.

final result: passed
