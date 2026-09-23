# Tarang Goyal — Portfolio

Evidence-first portfolio for an AI Product Engineer / Forward-Deployed Engineer.

**Live site:** https://tarang-portfolio-pink.vercel.app

## What is included

- A focused homepage organized around product decisions and evidence
- Dedicated case studies for Studentlytics, Morphic, and Locus
- A compact archive of additional products, research, and hackathon work
- Responsive layouts, reduced-motion support, and keyboard focus states
- Vercel rewrites for direct case-study URLs

## Local development

```bash
npm install
npm run dev
```

## Validation

```bash
npm run build
npx eslint src/App.tsx src/components/MainContainer.tsx src/components/CaseStudyPage.tsx src/data/portfolioData.ts
```

## Content governance

The portfolio brief, claim registry, decision log, résumé-to-portfolio matrix,
glossary, maintenance guide, and visual QA record live in the project root.

## Stack

React, TypeScript, Vite, GSAP, and Vercel.

## License

This project is open source and available under the [MIT License](LICENSE).
