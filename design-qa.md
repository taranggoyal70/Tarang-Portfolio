# Design QA

## Comparison target

- Source visual truth: `/Users/tarang/.codex/generated_images/019f5d82-a372-7ce2-8e09-c502ba5dbc1d/call_4EwGwHQz8xY7d2SBHH5RyMUG.png`
- Rendered implementation: `http://127.0.0.1:4173/`
- Desktop implementation capture: `/tmp/tarang-portfolio-redesign/implementation-home-viewport-v2.jpg`
- Mobile case-study capture: `/tmp/tarang-portfolio-redesign/implementation-mobile-case-v2b.jpg`
- Mobile flagship capture: `/tmp/tarang-portfolio-redesign/implementation-mobile-visual-v2.jpg`
- Combined comparison: `/tmp/tarang-portfolio-redesign/home-comparison-v2.jpg`
- State: homepage at initial load; Studentlytics case-study hero; first flagship card

## Normalization

- Source pixels: 1487 × 1058
- Implementation pixels: 1440 × 1024
- CSS viewport: 1440 × 1024
- Device scale factor: 1
- The source was normalized to 1440 × 1024 for the combined comparison. Its
  original aspect ratio differs by less than 0.1%, so no meaningful crop or
  compositional distortion was introduced.
- Mobile validation used a 390 × 844 CSS viewport at device scale factor 1.

## Full-view comparison evidence

The combined comparison shows that the implementation preserves the selected
Evidence Editorial direction: warm paper background, near-black typography,
cobalt emphasis, a compact utility header, oversized outcome-led headline,
evidence rail, hard grid lines, and a deliberately restrained visual system.
The product loop on the right replaces decorative imagery with the agreed
decision structure.

The source mock placed a flagship teaser slightly higher. The implementation
keeps the flagship label visible at the fold while giving the four-step product
loop enough room to remain readable. This is an intentional product-content
tradeoff rather than accidental drift.

## Focused-region evidence

- Desktop hero: hierarchy, navigation density, two-column split, credibility
  rail, buttons, and copy wrapping were inspected at 1440 × 1024.
- Mobile case-study hero: `Studentlytics` fits without clipping or horizontal
  overflow at 390 × 844.
- Mobile flagship imagery: the source product screenshot is fully contained,
  sharp, and legible instead of being cropped to a decorative fragment.
- Focused evidence is sufficient because the design uses one typography system,
  a single border treatment, and no decorative image assets outside the real
  product screenshots.

## Required fidelity surfaces

- Fonts and typography: Manrope is used consistently. Display and utility text
  have distinct optical weights, clear line-height, controlled tracking, and no
  truncation at the tested desktop and mobile breakpoints.
- Spacing and layout rhythm: the desktop 2/3–1/3 hero grid, evidence rail, and
  section spacing match the editorial reference. Mobile collapses to one column
  without hidden controls or horizontal overflow.
- Colors and visual tokens: warm paper, near-black, cobalt, muted gray, and thin
  rules map directly to the source direction. No gradients, glass effects, or
  decorative AI-style glows were introduced.
- Image quality and asset fidelity: all flagship imagery uses real product
  screenshots. Images preserve their aspect ratios and use `object-fit: contain`.
  No visible asset was replaced with CSS art, an emoji, or a placeholder.
- Copy and content: the primary lane is explicit. Every flagship story separates
  the observed problem, product decision, shipped system, and current evidence.
  Claims are bounded by the claim registry.

## Interaction and runtime checks

- Routes tested: `/`, `/work/studentlytics`, `/work/morphic`, `/work/locus`
- All route headings and titles rendered.
- No broken images or horizontal overflow were found on any tested route.
- Primary external evidence links returned HTTP 200.
- Homepage navigation, résumé links, email CTA, internal case-study links, and
  mobile disclosure navigation are present with valid destinations.
- Browser console was checked after all route visits. It contained only Vite,
  React DevTools, and Vercel Analytics development messages; no warnings or
  errors were present.

## Comparison history

### Iteration 1

- [P1] Mobile case-study title overflowed and clipped.
- [P2] Flagship product screenshots were cropped by `object-fit: cover`.
- [P2] The desktop hero consumed too much of the first viewport, leaving no
  flagship signal at the fold.

Fixes:

- Added mobile title wrapping and a viewport-aware case-study title scale.
- Changed flagship product imagery to `object-fit: contain`.
- Reduced desktop hero height, display scale, and internal vertical padding.

Post-fix evidence:

- `/tmp/tarang-portfolio-redesign/implementation-mobile-case-v2b.jpg`
- `/tmp/tarang-portfolio-redesign/implementation-mobile-visual-v2.jpg`
- `/tmp/tarang-portfolio-redesign/home-comparison-v2.jpg`

### Iteration 2

No actionable P0, P1, or P2 differences remain.

## Findings

No actionable P0, P1, or P2 findings remain.

## Open questions

None.

## Implementation checklist

- [x] Preserve the Evidence Editorial visual hierarchy.
- [x] Keep real product evidence in the critical path.
- [x] Validate desktop and mobile layout behavior.
- [x] Verify direct case-study routes.
- [x] Check external evidence links and browser console.

## Follow-up polish

- [P3] Replace the résumé PDF's large third-party verification banner when the
  source résumé is next revised; this is outside the website implementation.

final result: passed
