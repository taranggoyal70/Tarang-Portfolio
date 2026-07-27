# Portfolio Maintenance

## Quarterly

- Open every live-product, source, award, paper, LinkedIn, GitHub, email, and résumé link.
- Re-run the Locus benchmark before changing its public metric.
- Confirm Morphic’s status label against its latest go-live checklist.
- Reconcile Highview, Box, Hashroot, education, and publication dates with the résumé.
- Review the claim registry and remove stale or superseded wording.

## When adding a project

A project becomes flagship only when it has:

1. A job-relevant workflow problem.
2. Clear individual ownership.
3. At least one pivotal decision and tradeoff.
4. A real shipped artifact.
5. Contextual proof or an honest limitation.

Otherwise, add it to the archive.

## When adding a metric

Record:

- exact wording;
- source;
- baseline;
- population or sample;
- method;
- timeframe;
- individual versus team ownership;
- confidentiality or publishing constraints.

Update `CLAIM_REGISTRY.md` before updating page copy.

## Performance and accessibility

- Keep the initial JavaScript bundle free of Three.js/WebGL unless a later experience explicitly earns the cost.
- Optimize screenshots before adding them.
- Maintain keyboard navigation and visible focus states.
- Verify desktop and mobile layouts with no horizontal scrolling.
- Honor reduced-motion preferences.
- Keep body copy at 14px or larger on mobile case-study pages.

## Release checklist

1. Run `npm run build`.
2. Run ESLint on changed TypeScript files.
3. Test homepage navigation, all three case-study routes, external evidence links, résumé, and email.
4. Capture desktop and mobile screenshots.
5. Complete `design-qa.md`.
6. Push through a reviewed pull request.
7. Verify the production Vercel deployment.

