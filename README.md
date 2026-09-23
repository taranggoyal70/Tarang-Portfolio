# Tarang Goyal — Portfolio

Interactive portfolio for an AI Product Engineer / Forward-Deployed Engineer.

**Live site:** https://tarang-portfolio-pink.vercel.app

## What is included

- The original dark, interactive homepage and 3D character experience
- Current work, experience, skills, and contact sections
- Preserved case studies for Studentlytics, Morphic, and Locus
- Current achievements, including eight hackathon wins and Tickmark
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
