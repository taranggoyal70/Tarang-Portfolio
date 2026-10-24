import {
  archiveProjects,
  awardWinningProjects,
  experience,
  flagshipProjects,
} from "./portfolioData";

export type VoiceSource = {
  label: string;
  href?: string;
};

export type PortfolioAnswer = {
  title: string;
  body: string;
  targetId: "top" | "work" | "experience" | "about" | "archive" | "contact";
  focusProject?: string;
  sources: VoiceSource[];
};

const clean = (value: string) =>
  value
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, " ")
    .trim();

const projectKey = (title: string) => clean(title).replace(/\s+/g, "-");

const projectAnswer = (title: string): PortfolioAnswer | undefined => {
  const project = archiveProjects.find(
    (candidate) => clean(candidate.title) === clean(title),
  );
  if (!project) return undefined;

  const flagship = flagshipProjects.find(
    (candidate) => clean(candidate.title) === clean(project.title),
  );

  return {
    title: project.title,
    body: `${project.contribution} The input was ${project.input.toLowerCase()}, and the shipped outcome was ${project.output.toLowerCase()}. ${project.status}.`,
    targetId: flagship ? "work" : "archive",
    focusProject: projectKey(project.title),
    sources: [
      { label: project.status, href: project.link },
      ...(flagship
        ? [{ label: `${flagship.title} case study`, href: `/work/${flagship.slug}` }]
        : []),
    ],
  };
};

const answerFromProjectSearch = (question: string): PortfolioAnswer | undefined => {
  const normalized = clean(question);
  const words = normalized.split(" ").filter((word) => word.length > 2);

  const ranked = archiveProjects
    .map((project) => {
      const haystack = clean(
        [
          project.title,
          project.category,
          project.status,
          project.contribution,
          project.input,
          project.output,
          project.role,
          project.year,
        ].join(" "),
      );
      const score = words.reduce(
        (total, word) => total + (haystack.includes(word) ? 1 : 0),
        0,
      );
      return { project, score };
    })
    .filter(({ score }) => score > 0)
    .sort((a, b) => b.score - a.score)
    .slice(0, 3);

  if (!ranked.length) return undefined;
  if (ranked.length === 1) return projectAnswer(ranked[0].project.title);

  const names = ranked.map(({ project }) => project.title).join(", ");
  return {
    title: "Closest portfolio evidence",
    body: `The strongest matches are ${names}. ${ranked[0].project.contribution}`,
    targetId: "archive",
    focusProject: projectKey(ranked[0].project.title),
    sources: ranked.map(({ project }) => ({
      label: `${project.title} · ${project.status}`,
      href: project.link,
    })),
  };
};

export const portfolioSuggestions = [
  "What is Tarang's strongest project?",
  "How does Locus work?",
  "Show me the eight wins.",
  "What has Tarang shipped with AI agents?",
  "Why should I interview Tarang?",
];

export const answerPortfolioQuestion = (question: string): PortfolioAnswer => {
  const normalized = clean(question);

  if (/\b(locus|context engine|coding agent context)\b/.test(normalized)) {
    return {
      title: "Locus",
      body:
        "Locus finds the smallest useful slice of a repository for a coding task. Its public benchmark reports a 65 percent median context reduction while retaining 100 percent focused fix-file recall across 13 localized cases. It ships through web, REST, CLI, and MCP surfaces.",
      targetId: "work",
      focusProject: "locus",
      sources: [
        {
          label: "Locus benchmark method",
          href: "https://github.com/taranggoyal70/locus/tree/main/benchmarks",
        },
        { label: "Locus case study", href: "/work/locus" },
      ],
    };
  }

  const exactProject = archiveProjects.find((project) =>
    normalized.includes(clean(project.title)),
  );
  if (exactProject) return projectAnswer(exactProject.title)!;

  if (/\b(hackathon|award|winner|wins|competition)\b/.test(normalized)) {
    return {
      title: "Eight verified wins",
      body:
        "Tarang's portfolio records eight hackathon and competition wins across Stanford University, AWS with INRIX, YC Stack Auth, Beta Fund with GMI Cloud, AgentForge, A10 Networks, Syndicate by Maximor, and the SCU Analytical Showdown. The portfolio distinguishes first place, winner, and track-specific awards instead of flattening them into one claim.",
      targetId: "archive",
      sources: awardWinningProjects.map((project) => ({
        label: `${project.award} · ${project.title}`,
        href: project.link,
      })),
    };
  }

  if (/\b(agent|agents|agentic|governance|approval)\b/.test(normalized)) {
    return {
      title: "Agent systems with boundaries",
      body:
        "The clearest agent work is Locus for task-scoped context, Morphic for repository-grounded execution, Gatekit for policy and human approval, Agent Access for scoped credentials and signed receipts, and Ghost Hand for apprenticeship-style learning. The common pattern is measurable automation with an explicit human boundary.",
      targetId: "archive",
      focusProject: "gatekit",
      sources: [
        { label: "Locus", href: "/work/locus" },
        { label: "Morphic", href: "/work/morphic" },
        { label: "Gatekit", href: "https://gatekit.vercel.app" },
      ],
    };
  }

  if (/\b(voice|speech|audio|conversation)\b/.test(normalized)) {
    return {
      title: "Speech and real-time interaction",
      body:
        "The strongest portfolio evidence is Studentlytics, which joins classroom video and speech analysis into attendance and engagement evidence. Crowd Symphony adds synchronized real-time audio controlled through hand tracking and QR onboarding. This interview console itself demonstrates browser speech input, spoken answers, interruption, and evidence-linked navigation.",
      targetId: "work",
      focusProject: "studentlytics",
      sources: [
        { label: "Studentlytics case study", href: "/work/studentlytics" },
        {
          label: "Crowd Symphony",
          href: "https://crowd-symphony.vercel.app",
        },
      ],
    };
  }

  if (/\b(research|paper|chronos|forecast|forecasting)\b/.test(normalized)) {
    return {
      title: "Published forecasting research",
      body:
        "Tarang co-authored research evaluating Amazon Chronos-2 for multivariate economic and financial forecasting across seven major technology equities and U.S. Treasury rates. The work is published on arXiv and paired with an interactive lab.",
      targetId: "archive",
      focusProject: "chronos-2",
      sources: [
        {
          label: "Multivariate Forecasting with Foundation Models",
          href: "https://arxiv.org/pdf/2605.21504",
        },
      ],
    };
  }

  if (/\b(experience|worked|work history|highview|box|hashroot)\b/.test(normalized)) {
    return {
      title: "Product, engineering, and analytics",
      body: experience
        .map(
          (item) =>
            `${item.company}: ${item.role}. ${item.result} Evidence: ${item.proof}.`,
        )
        .join(" "),
      targetId: "experience",
      sources: experience.map((item) => ({
        label: `${item.company} · ${item.proof}`,
      })),
    };
  }

  if (/\b(stack|technology|technologies|skills|tools)\b/.test(normalized)) {
    return {
      title: "Full-stack AI product delivery",
      body:
        "Tarang works across TypeScript, Python, React, Next.js, FastAPI, Postgres, AWS, agent tooling, analytics, and evaluation. The important part is the loop: understand the workflow, make the product decision, build the system, and validate it with evidence.",
      targetId: "about",
      sources: [
        { label: "How Tarang operates" },
        { label: "Ranked project archive" },
      ],
    };
  }

  if (/\b(strongest|best|proud|flagship)\b/.test(normalized)) {
    return {
      title: "Three flagship builds",
      body:
        "Locus is the strongest developer-tool proof, Studentlytics is the strongest end-to-end customer workflow, and Morphic is the strongest product-and-agent interface experiment. Together they show product judgment, full-stack implementation, and evidence rather than isolated demos.",
      targetId: "work",
      focusProject: "locus",
      sources: flagshipProjects.map((project) => ({
        label: `${project.title} case study`,
        href: `/work/${project.slug}`,
      })),
    };
  }

  if (/\b(interview|hire|role|contact|email|reach)\b/.test(normalized)) {
    return {
      title: "Why interview Tarang",
      body:
        "Tarang is strongest when a team has an unclear AI workflow and needs one owner to move from user problem and product decision through implementation, deployment, and evaluation. He combines product judgment with the ability to ship the full stack and explain the evidence honestly.",
      targetId: "contact",
      sources: [
        { label: "Email Tarang", href: "mailto:taranggoyal2000@gmail.com" },
        { label: "Résumé", href: "/resume.pdf" },
      ],
    };
  }

  if (/\b(resume|résumé|cv)\b/.test(normalized)) {
    return {
      title: "Résumé",
      body:
        "Tarang's résumé covers AI product engineering at Highview, data science at Box, business analytics at Hashroot, eight competition wins, and published forecasting research. Use the source below to open the current PDF.",
      targetId: "contact",
      sources: [{ label: "Open Tarang's résumé", href: "/resume.pdf" }],
    };
  }

  if (
    /\b(who is tarang|tell me about tarang|introduce tarang|about tarang|what does tarang do|who are you|tell me about yourself|what do you do)\b/.test(
      normalized,
    )
  ) {
    return {
      title: "Tarang Goyal",
      body:
        "Tarang is an AI Product Engineer and forward-deployed builder in the San Francisco Bay Area. He turns ambiguous workflows into useful AI products and stays with the work from discovery and product decisions through implementation, deployment, and measurable validation.",
      targetId: "top",
      sources: [
        { label: "Flagship work" },
        { label: "Selected experience" },
      ],
    };
  }

  return (
    answerFromProjectSearch(question) ?? {
      title: "Ask from the evidence",
      body:
        "I could not tie that question to a claim in Tarang's published portfolio. Ask about Locus, the eight wins, AI agents, experience, research, the technology stack, or why Tarang fits an AI product engineering role.",
      targetId: "top",
      sources: [{ label: "No unsupported answer generated" }],
    }
  );
};

export { projectKey };
