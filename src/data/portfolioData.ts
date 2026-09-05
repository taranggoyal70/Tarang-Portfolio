export type ProjectSlug = "studentlytics" | "morphic" | "locus";

export type TraceStep = {
  label: string;
  body: string;
};

export type CaseStudyDecision = {
  title: string;
  body: string;
  tradeoff: string;
};

export type CaseStudyProject = {
  slug: ProjectSlug;
  title: string;
  descriptor: string;
  category: string;
  status: string;
  role: string;
  team: string;
  timeline: string;
  image: string;
  imageAlt: string;
  externalUrl: string;
  externalLabel: string;
  sourceUrl: string;
  sourceLabel: string;
  summary: string;
  trace: TraceStep[];
  proof: string;
  proofUrl: string;
  proofLabel: string;
  overview: string;
  constraints: string[];
  decisions: CaseStudyDecision[];
  ownership: string[];
  progression: {
    phase: string;
    title: string;
    body: string;
  }[];
  evidence: {
    title: string;
    body: string;
  }[];
  reflection: string;
  tools: string[];
};

const flagshipProjectCatalog: Record<ProjectSlug, CaseStudyProject> = {
  studentlytics: {
    slug: "studentlytics",
    title: "Studentlytics",
    descriptor: "AI-powered classroom engagement prototype",
    category: "AWS × INRIX · First place",
    status: "Deployed prototype",
    role: "Product lead & full-stack builder",
    team: "Hackathon team → Highview continuation",
    timeline: "24-hour build · 2025 → Present",
    image: "/project-media/studentlytics.png",
    imageAlt: "Studentlytics project page showing the classroom analytics product",
    externalUrl: "https://devpost.com/software/studentlytics",
    externalLabel: "View Devpost",
    sourceUrl: "https://github.com/taranggoyal70/Studentlytics",
    sourceLabel: "View source",
    summary:
      "Educators need less manual attendance work and clearer engagement signals from session recordings.",
    trace: [
      {
        label: "Observed problem",
        body: "Manual roll calls capture presence, but miss check-in, check-out, participation, and engagement context.",
      },
      {
        label: "Product decision",
        body: "Organize the product around educator workflows and actionable session evidence—not a computer-vision demo.",
      },
      {
        label: "Shipped",
        body: "A deployed full-stack prototype spanning recording analysis, attendance, engagement, and instructor-facing results.",
      },
      {
        label: "Proof",
        body: "First place at the AWS × INRIX Hackathon; the project led to a Highview internship to continue the platform.",
      },
    ],
    proof:
      "First place at the AWS × INRIX Hackathon 2025; shipped as a deployed prototype in 24 hours.",
    proofUrl: "https://devpost.com/software/studentlytics",
    proofLabel: "Award and project evidence",
    overview:
      "Studentlytics began as a 24-hour challenge: turn classroom recordings into useful attendance and engagement evidence without forcing instructors into another manual workflow. I framed the product, translated the workflow into user stories, and helped deliver the end-to-end prototype. The work later continued at Highview, where I have shaped the roadmap and built instructor-facing product surfaces.",
    constraints: [
      "A working, judgeable product had to ship within a 24-hour hackathon window.",
      "Video and audio analysis had to resolve into outputs an educator could actually use.",
      "The first build needed a narrow workflow while leaving room for later course and session analytics.",
      "Prototype functionality and later Highview development must remain clearly distinguished.",
    ],
    decisions: [
      {
        title: "Start with the educator workflow",
        body: "The product was framed around attendance, session timelines, participation, and at-risk signals instead of exposing raw model output.",
        tradeoff:
          "This reduced the number of technical controls in the first release, but made the prototype easier to evaluate as a product.",
      },
      {
        title: "Combine visual and audio evidence",
        body: "Presence alone could not explain camera-off participation or verbal engagement, so the system joined video analysis with transcription.",
        tradeoff:
          "A multi-signal pipeline increased implementation complexity inside an already compressed build window.",
      },
      {
        title: "Treat the hackathon as a product wedge",
        body: "The 24-hour version proved the workflow; later work at Highview expanded scheduling, course analytics, and an AI analytics assistant.",
        tradeoff:
          "The public case study labels the original as a deployed prototype rather than implying the hackathon build was the finished institutional product.",
      },
    ],
    ownership: [
      "Defined the product vision, roadmap, user stories, and acceptance criteria.",
      "Shaped the instructor journey and the attendance-and-engagement information model.",
      "Built product surfaces including session scheduling, course analytics, and an AI analytics assistant.",
      "Connected product delivery to the later Highview continuation rather than presenting the award as the end state.",
    ],
    progression: [
      {
        phase: "01",
        title: "Frame the workflow",
        body: "Converted a broad classroom analytics prompt into a specific instructor journey and success criteria.",
      },
      {
        phase: "02",
        title: "Ship the prototype",
        body: "Delivered the full-stack hackathon flow from recording analysis to educator-facing output in 24 hours.",
      },
      {
        phase: "03",
        title: "Earn external validation",
        body: "Won first place at the AWS × INRIX Hackathon in 2025.",
      },
      {
        phase: "04",
        title: "Continue the product",
        body: "The project led to a Highview internship and continued roadmap, analytics, and product-engineering work.",
      },
    ],
    evidence: [
      {
        title: "External result",
        body: "First place at the AWS × INRIX Hackathon 2025.",
      },
      {
        title: "Delivery constraint",
        body: "A deployed full-stack prototype delivered in 24 hours.",
      },
      {
        title: "Continuation",
        body: "The project led directly to a Highview internship to continue developing the platform.",
      },
    ],
    reflection:
      "The strongest next step is a public evaluation note for any accuracy claim: test-set composition, matching threshold, sample size, and the exact relationship between prototype and later Highview results. Until that exists, this case study leads with the award, shipped workflow, and product continuation.",
    tools: [
      "Product strategy",
      "React",
      "TypeScript",
      "FastAPI",
      "Computer vision",
      "Speech analysis",
      "AWS",
    ],
  },
  morphic: {
    slug: "morphic",
    title: "Morphic",
    descriptor: "Adaptive AI software workspace",
    category: "Beta Fund × GMI Cloud · Hackathon winner",
    status: "Winning live prototype",
    role: "Product strategy, design & engineering",
    team: "Independent build",
    timeline: "2026",
    image: "/project-media/morphic.png",
    imageAlt: "Morphic adaptive workspace showing objective-centered software delivery",
    externalUrl: "https://morphic-murex.vercel.app/",
    externalLabel: "Open live prototype",
    sourceUrl: "https://github.com/taranggoyal70/Morphic",
    sourceLabel: "View source",
    summary:
      "Objectives, repository evidence, and agent execution fragment across tools, making software delivery hard to supervise.",
    trace: [
      {
        label: "Observed problem",
        body: "Plans drift away from repository reality while agent work happens in a separate, low-context interface.",
      },
      {
        label: "Product decision",
        body: "Make the objective—not chat—the persistent interface, grounded in live GitHub evidence and explicit approvals.",
      },
      {
        label: "Shipped",
        body: "A live prototype with GitHub sync, durable workspaces, structured planning, isolated Codex runs, and pull-request creation.",
      },
      {
        label: "Evidence",
        body: "Approved runs produced real branches, commits, and GitHub pull requests; 26 automated tests now cover the approval and PR boundaries.",
      },
    ],
    proof:
      "Verified approval → durable workflow → isolated Codex run → branch → GitHub pull request, backed by a 26-test quality gate.",
    proofUrl: "https://github.com/taranggoyal70/Morphic",
    proofLabel: "Product and architecture evidence",
    overview:
      "Morphic explores a different interface for AI-assisted software delivery. Instead of starting from an empty chat, it starts from the intended outcome, compiles a workspace from live repository evidence, and keeps agent execution behind explicit approval boundaries. I designed the product model and implemented the full workflow from authentication and persistence through isolated Codex execution and pull-request handoff.",
    constraints: [
      "The experience had to stay grounded in changing GitHub evidence rather than a one-time prompt.",
      "Agent execution needed explicit approval, isolation, and an auditable handoff.",
      "Large repositories required bounded evidence so workspace compilation stayed within context limits.",
      "The live deployment still uses Clerk development credentials; its health endpoint reports productionReady: false until production keys are installed.",
    ],
    decisions: [
      {
        title: "Make the objective the interface",
        body: "Morphic compiles a persistent workspace around the desired outcome, repository state, critical path, and unresolved decisions.",
        tradeoff:
          "This requires more structure than a blank chat, but keeps the product aligned with the work that must actually ship.",
      },
      {
        title: "Ground every workspace in repository evidence",
        body: "GitHub issues, pull requests, and the file tree feed versioned workspace generation instead of becoming optional attachments.",
        tradeoff:
          "Evidence is truncated for very large repositories, so the interface must reveal where context may be incomplete.",
      },
      {
        title: "Keep execution governed",
        body: "Every Codex run is approved, isolated, auditable, and designed to end in a reviewable branch and pull request.",
        tradeoff:
          "The workflow favors human control over maximum autonomous speed.",
      },
    ],
    ownership: [
      "Defined the objective-centered product model and adaptive workspace interaction.",
      "Designed the product boundaries for repository sync, decisions, approvals, and agent execution.",
      "Implemented authentication, durable state, rate limiting, workflows, sandboxed Codex runs, and GitHub pull-request creation.",
      "Documented go-live requirements, domain language, and the production-foundation decision.",
    ],
    progression: [
      {
        phase: "01",
        title: "Define the product model",
        body: "Reframed AI software work around the objective, evidence, and critical path rather than a generic conversation.",
      },
      {
        phase: "02",
        title: "Ground the workspace",
        body: "Connected authenticated GitHub evidence to structured workspace compilation and durable versions.",
      },
      {
        phase: "03",
        title: "Govern execution",
        body: "Added approval gates, isolated Codex runs, audit logging, and the branch-to-pull-request handoff.",
      },
      {
        phase: "04",
        title: "Verify the system",
        body: "Built 26 automated tests around approval, rejection, startup and tracking failures, and pull-request payloads; CI, production build, and dependency audit pass.",
      },
    ],
    evidence: [
      {
        title: "Real handoff",
        body: "Approved Morphic runs created reviewable branches, commits, and GitHub pull requests—not simulated artifacts.",
      },
      {
        title: "Quality gate",
        body: "26 automated tests, a passing production build, and no known production-dependency vulnerabilities.",
      },
      {
        title: "Known blocker",
        body: "Database connectivity is healthy, but production authentication remains blocked on installing live Clerk credentials.",
      },
    ],
    reflection:
      "Morphic currently proves the workflow and system boundaries, not adoption or productivity lift. The next product milestone is structured user validation with builders: completion rate, approval friction, review quality, and where the adaptive workspace reduces—or adds—coordination cost.",
    tools: [
      "Next.js",
      "TypeScript",
      "OpenAI",
      "Codex",
      "GitHub API",
      "Neon",
      "Upstash",
      "Vercel Workflow",
      "Vercel Sandbox",
    ],
  },
  locus: {
    slug: "locus",
    title: "Locus",
    descriptor: "Task-sized context for coding agents",
    category: "Stanford University AI Hackathon · Winner",
    status: "Winning live product",
    role: "Product strategy & engineering",
    team: "Independent build",
    timeline: "2026",
    image: "/project-media/locus.png",
    imageAlt: "Locus interface showing task-scoped dependency localization",
    externalUrl: "https://locus-five-iota.vercel.app",
    externalLabel: "Open live product",
    sourceUrl: "https://github.com/taranggoyal70/locus",
    sourceLabel: "View source",
    summary:
      "Coding agents often ingest repository context unrelated to the current task, increasing cost and distracting reasoning.",
    trace: [
      {
        label: "Observed problem",
        body: "Whole-repository context is noisy, but aggressive filtering can silently remove the file that matters.",
      },
      {
        label: "Product decision",
        body: "Build a deterministic task-to-code slice with dependency closure, cited evidence, and a conservative whole-repo fallback.",
      },
      {
        label: "Shipped",
        body: "A web app, REST API, CLI, and MCP server for locating and packing task-relevant JavaScript and TypeScript context.",
      },
      {
        label: "Proof",
        body: "Fifteen historical fixes across three repositories: 87% task localization, 100% focused fix-file recall, 65% median estimated context reduction, and two conservative fallbacks.",
      },
    ],
    proof:
      "Reproducible benchmark across 15 historical fixes in three repositories: 87% task localization, 100% focused fix-file recall, and 65% median estimated context reduction.",
    proofUrl: "https://github.com/taranggoyal70/locus/tree/main/benchmarks",
    proofLabel: "Read benchmark method",
    overview:
      "Locus maps a natural-language task to a focused code slice: matching files, their dependency closure, nearby integration points, and relevant recent changes. The core product decision is conservative localization. When evidence is weak, Locus returns the whole repository instead of presenting a confident but incomplete slice.",
    constraints: [
      "The locator must reduce irrelevant context without hiding the file a historical fix actually changed.",
      "The same product logic needs to work across web, API, CLI, and MCP surfaces.",
      "Hosted imports must be bounded, while the local CLI needs to support larger repositories.",
      "The benchmark must be reproducible from historical repository snapshots rather than hand-picked current-state examples.",
    ],
    decisions: [
      {
        title: "Prefer deterministic localization",
        body: "Locus parses imports, aliases, dependencies, direct consumers, task words, and recent changes into an explainable code slice.",
        tradeoff:
          "A deterministic graph is easier to audit than an opaque ranking model, but initially supports a narrower set of source languages.",
      },
      {
        title: "Fail wide when evidence is weak",
        body: "If anchors are insufficient, the tool returns the whole loaded repository rather than a speculative small slice.",
        tradeoff:
          "Some tasks save no context, but the product avoids trading correctness for an attractive reduction number.",
      },
      {
        title: "Meet agents where they work",
        body: "The same locator ships through a web app, REST API, CLI, and MCP server with multiple export formats.",
        tradeoff:
          "Four delivery surfaces create more integration work, but make the product useful across different coding-agent workflows.",
      },
    ],
    ownership: [
      "Defined the conservative localization product principle and evidence model.",
      "Built the dependency graph, task matching, context packing, and fallback behavior.",
      "Shipped the web app, API, CLI, and MCP delivery surfaces.",
      "Created the reproducible historical-task benchmark and documented every case.",
    ],
    progression: [
      {
        phase: "01",
        title: "Model repository evidence",
        body: "Parsed imports, aliases, paths, source terms, dependency closures, consumers, and recent changes.",
      },
      {
        phase: "02",
        title: "Design the conservative fallback",
        body: "Returned the whole repository when the system could not build a sufficiently supported slice.",
      },
      {
        phase: "03",
        title: "Ship four surfaces",
        body: "Delivered the locator through web, REST, CLI, and MCP workflows.",
      },
      {
        phase: "04",
        title: "Benchmark historical fixes",
        body: "Replayed 15 real fixes from parent snapshots across three repositories and published the method and cases.",
      },
    ],
    evidence: [
      {
        title: "Fix-file recall",
        body: "19 of 19 fix files found across 13 localized cases; two weak-signal tasks widened conservatively.",
      },
      {
        title: "Context reduction",
        body: "65% median estimated reduction across the same benchmark.",
      },
      {
        title: "Runtime and safety",
        body: "52 automated tests cover the core locator plus real CLI and MCP processes; two weak-signal cases widened to the whole repository.",
      },
    ],
    reflection:
      "The benchmark proves localization recall and estimated context reduction, not autonomous task completion or code quality. The next evidence step is a larger multi-language suite with latency, measured token use, and agent-level completion baselines.",
    tools: [
      "Next.js",
      "TypeScript",
      "Dependency graphs",
      "REST API",
      "CLI",
      "MCP",
      "Clerk",
      "Supabase",
      "Vitest",
    ],
  },
};

export const flagshipProjects: CaseStudyProject[] = [
  flagshipProjectCatalog.studentlytics,
  flagshipProjectCatalog.locus,
  flagshipProjectCatalog.morphic,
];

export const projectBySlug = Object.fromEntries(
  flagshipProjects.map((project) => [project.slug, project]),
) as Record<ProjectSlug, CaseStudyProject>;

export const awardWinningProjects = [
  {
    title: "Locus",
    award: "Stanford AI Hackathon",
    link: "https://locus-five-iota.vercel.app",
  },
  {
    title: "Studentlytics",
    award: "AWS × INRIX",
    link: "https://devpost.com/software/studentlytics",
  },
  {
    title: "Morphic",
    award: "Beta Fund × GMI Cloud",
    link: "https://morphic-murex.vercel.app/",
  },
  {
    title: "Crowd Symphony",
    award: "YC Stack Auth",
    link: "https://crowd-symphony.vercel.app",
  },
  {
    title: "Gatekit",
    award: "AgentForge",
    link: "https://gatekit.vercel.app",
  },
  {
    title: "A10 AI Firewall",
    award: "A10 Networks AI PM",
    link: "https://a10-taupe.vercel.app",
  },
  {
    title: "Nazava Analytics",
    award: "SCU Analytical Showdown",
    link: "https://scu-analytical-showdown.vercel.app",
  },
];

export const archiveProjects = [
  {
    title: "Chronos-2",
    input: "7 equities + Treasury rates",
    output: "Comparative forecast",
    category: "Research",
    year: "2026",
    role: "Co-author",
    status: "Published on arXiv",
    contribution:
      "Evaluated multivariate forecasting across Magnificent 7 equities and U.S. Treasury rates.",
    link: "https://arxiv.org/pdf/2605.21504",
  },
  {
    title: "Crowd Symphony",
    input: "Phone + hand gestures",
    output: "Synchronized crowd audio",
    category: "Real-time product",
    year: "2025",
    role: "Product & engineering",
    status: "YC Stack Auth Hackathon Winner",
    contribution:
      "Shipped QR onboarding, synchronized sessions, MediaPipe hand tracking, and Web Audio controls.",
    link: "https://crowd-symphony.vercel.app",
  },
  {
    title: "A10 AI Firewall",
    input: "Untrusted AI request",
    output: "Blocked with reason",
    category: "AI security",
    year: "2025",
    role: "AI Product Manager",
    status: "A10 AI Product Manager Hackathon Winner",
    contribution:
      "Defined the vision, PRD, OKRs, backlog, GTM strategy, and ARR model.",
    link: "https://a10-taupe.vercel.app",
  },
  {
    title: "Nazava Analytics",
    input: "Customer + sales data",
    output: "Segment and ROI decision",
    category: "Analytics",
    year: "2025",
    role: "Analytics & product strategy",
    status: "SCU Analytical Showdown Winner",
    contribution:
      "Delivered segmentation, predictive modeling, ROI forecasting, and executive decisions.",
    link: "https://scu-analytical-showdown.vercel.app",
  },
  {
    title: "Gatekit",
    input: "Proposed agent action",
    output: "Allow, deny, or review",
    category: "Agent governance",
    year: "2026",
    role: "Product & engineering",
    status: "AgentForge Hackathon Winner",
    contribution:
      "Built a policy engine that allows, denies, or routes agent actions to human approval with immutable audit records.",
    link: "https://gatekit.vercel.app",
  },
  {
    title: "Cortex",
    input: "Scattered company docs",
    output: "Cited executable knowledge",
    category: "Knowledge systems",
    year: "2026",
    role: "Product & engineering",
    status: "Live product",
    contribution:
      "Built a cited, versioned company brain with an anti-hallucination gate.",
    link: "https://cortex-lyart-rho.vercel.app",
  },
  {
    title: "Agent Access",
    input: "Agent asks for access",
    output: "Scoped signed receipt",
    category: "Agent infrastructure",
    year: "2026",
    role: "Product & engineering",
    status: "Live product",
    contribution:
      "Built scoped credentials, idempotent invocation, and signed agent receipts.",
    link: "https://agent-access.vercel.app",
  },
  {
    title: "Ghost Hand",
    input: "Expert demonstrates task",
    output: "Agent learns to step back",
    category: "Learning agents",
    year: "2026",
    role: "Product & engineering",
    status: "Live prototype",
    contribution:
      "Designed an apprenticeship agent that deliberately teaches itself out of a job.",
    link: "https://ghost-hand-virid.vercel.app",
  },
  {
    title: "Box Retention",
    input: "44K+ account signals",
    output: "Retention risk playbook",
    category: "Data product",
    year: "2025",
    role: "Data science & product",
    status: "Internship case study",
    contribution:
      "Turned retention analysis into an interactive operations workspace for exploring account risk and adoption signals.",
    link: "https://tarang-box-retention.vercel.app",
  },
  {
    title: "SceneGuard",
    input: "Camera-space context",
    output: "Private safety boundary",
    category: "Spatial AI",
    year: "2026",
    role: "Product & engineering",
    status: "Open-source prototype",
    contribution:
      "Built privacy-first spatial memory and explainable safety boundaries for vision-enabled agents.",
    link: "https://github.com/taranggoyal70/sceneguard",
  },
  {
    title: "Project EVOLVE",
    input: "Competing page variants",
    output: "Holdout-validated winner",
    category: "AI evaluation",
    year: "2026",
    role: "Product & engineering",
    status: "Schole AI Challenge",
    contribution:
      "Designed an inspectable landing-page evolution system using seeded simulations, Bayesian selection, and holdout validation.",
    link: "https://github.com/taranggoyal70/Schole-AI-challenge",
  },
  {
    title: "Ghost Commit",
    input: "Dormant repository",
    output: "Actionable recovery plan",
    category: "Developer tools",
    year: "2026",
    role: "Product & engineering",
    status: "YC Stack Auth build",
    contribution:
      "Built a workflow for diagnosing abandoned repositories and turning the next useful change into an actionable recovery plan.",
    link: "https://ghost-commit-roan.vercel.app",
  },
];

export const experience = [
  {
    period: "Jan 2026—Present",
    company: "Highview",
    role: "AI Product Engineer",
    result:
      "Define product vision, roadmap, PRDs, user stories, and releases while building scheduling, course analytics, and an AI analytics assistant.",
    proof: "Studentlytics continuation",
  },
  {
    period: "Jan—Jun 2025",
    company: "Box",
    role: "Data Science Intern",
    result:
      "Built PySpark and SQL workflows across 100K+ records and 10K+ accounts, supporting four cross-functional teams.",
    proof: "40% less manual processing",
  },
  {
    period: "Jul 2023—Jun 2024",
    company: "Hashroot Limited",
    role: "Business Data Analyst",
    result:
      "Connected customer, pricing, marketing, and operations data into reusable decision workflows.",
    proof: "20+ weekly reporting hours eliminated",
  },
];

export const processSteps = [
  {
    number: "01",
    title: "Understand the workflow",
    body: "Find the user problem, constraints, and success signal.",
  },
  {
    number: "02",
    title: "Make the product decision",
    body: "Define the smallest useful intervention and the tradeoffs behind it.",
  },
  {
    number: "03",
    title: "Build the working system",
    body: "Ship reliable software with clear ownership and guardrails.",
  },
  {
    number: "04",
    title: "Validate with evidence",
    body: "Use deployments, awards, reproducible benchmarks, and observed outcomes.",
  },
];
