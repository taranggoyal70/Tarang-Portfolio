import { MdArrowOutward } from "react-icons/md";
import "./styles/Work.css";

const projects = [
  {
    title: "Morphic",
    category: "Live AI product",
    description:
      "An adaptive software workspace that turns a builder's objective into a GitHub-grounded interface, then lets users supervise approved Codex runs through pull request creation.",
    tools: [
      "Next.js",
      "React",
      "OpenAI",
      "Clerk",
      "Neon",
      "Vercel Workflow",
      "Vercel Sandbox",
    ],
    stat: "Live",
    statLabel: "Vercel app",
    link: "https://morphic-murex.vercel.app/",
    linkLabel: "Open live app",
  },
  {
    title: "AWS × INRIX Studentlytics",
    category: "1st place · 24-hour build",
    description:
      "An event-driven video pipeline that processed classroom recordings, matched student faces, calculated attendance and engagement, and stored analytics results.",
    tools: ["AWS Lambda", "Step Functions", "S3", "Rekognition", "DynamoDB"],
    stat: "1st",
    statLabel: "hackathon winner",
    link: "https://devpost.com/software/studentlytics",
    linkLabel: "View on Devpost",
  },
  {
    title: "Crowd Symphony",
    category: "YC Stack Auth winner",
    description:
      "A real-time audience music experience using hand tracking, QR-code onboarding, Socket.IO sessions, and Web Audio controls synchronized across devices.",
    tools: ["Next.js", "TypeScript", "MediaPipe", "Socket.IO", "Web Audio API"],
    stat: "Live",
    statLabel: "multi-device sync",
    link: "https://crowd-symphony.vercel.app",
    linkLabel: "Open live app",
  },
  {
    title: "Nazava Analytics Platform",
    category: "SCU Analytical Showdown winner",
    description:
      "A full-stack decision product built from Shopee marketplace data, covering forecasting, customer segmentation, campaign ROI, recommendations, and executive dashboards.",
    tools: ["Python", "FastAPI", "Streamlit", "Forecasting", "Segmentation"],
    stat: "Top",
    statLabel: "recognition",
    link: "https://scu-analytical-showdown.vercel.app",
    linkLabel: "Open live app",
  },
  {
    title: "Chronos-2 Forecasting Research",
    category: "arXiv publication",
    description:
      "Co-authored research evaluating Amazon Chronos-2 for multivariate economic and financial forecasting across major equities and U.S. Treasury rates.",
    tools: ["Amazon Chronos-2", "Time series", "RMSE", "MAPE"],
    stat: "arXiv",
    statLabel: "published",
    link: "https://arxiv.org/pdf/2605.21504",
    linkLabel: "Read the paper",
  },
  {
    title: "Locus",
    category: "Live dev tool",
    description:
      "Task-scoped dependency localization that shows an AI coding agent only the code it needs, cutting input tokens by widening never narrowing so quality never drops. Ships as a CLI and MCP server.",
    tools: ["Next.js", "TypeScript", "Tailwind CSS v4", "MCP", "Vercel"],
    stat: "67%",
    statLabel: "fewer tokens",
    link: "https://locus-five-iota.vercel.app",
    linkLabel: "Open live app",
  },
  {
    title: "Cortex",
    category: "Live AI product",
    description:
      "The company brain: extracts scattered operational knowledge into a living, cited, versioned skills file that AI agents can execute, with a verbatim-citation gate that guards against hallucination.",
    tools: ["Next.js", "TypeScript", "Neon", "Drizzle", "Clerk", "Vercel"],
    stat: "Live",
    statLabel: "Vercel app",
    link: "https://cortex-lyart-rho.vercel.app",
    linkLabel: "Open live app",
  },
  {
    title: "Ghost Hand",
    category: "Live learning agent",
    description:
      "An AI apprenticeship agent that teaches by letting go, shifting from demonstration to hints to silent observation as the learner's autonomy grows. The metric is how much the learner can do without AI.",
    tools: ["Next.js 16", "React 19", "Learning agents", "Vercel"],
    stat: "Live",
    statLabel: "Vercel app",
    link: "https://ghost-hand-virid.vercel.app",
    linkLabel: "Open live app",
  },
  {
    title: "Agent Access",
    category: "Live infra product",
    description:
      "The account and access layer for AI-agent customers: discoverable machine contracts, scoped delegated credentials, idempotent invocation via REST or MCP, and signed receipts for every action.",
    tools: ["Next.js 16", "TypeScript", "Clerk", "Neon", "Vitest", "Vercel"],
    stat: "Live",
    statLabel: "Vercel app",
    link: "https://agent-access.vercel.app",
    linkLabel: "Open live app",
  },
  {
    title: "A10 AI Firewall",
    category: "1st place · AI product strategy",
    description:
      "Product strategy and technical architecture for an AI workload-protection platform covering prompt injection, data leakage, agent guardrails, GTM, and ARR modeling.",
    tools: ["AI security", "PRD", "Architecture", "GTM", "ARR modeling"],
    stat: "1st",
    statLabel: "product award",
    link: "https://a10-taupe.vercel.app",
    linkLabel: "View case study",
  },
];

const Work = () => (
  <section className="work-section" id="work">
    <div className="work-container section-container">
      <div className="work-heading">
        <div>
          <p className="section-label">Selected work</p>
          <h2>Products with proof behind them.</h2>
        </div>
        <p>
          Production work, award-winning builds, and research across AI,
          real-time systems, product strategy, and analytics.
        </p>
      </div>
      <div className="project-grid">
        {projects.map((project, index) => (
          <article className="project-card" key={project.title}>
            <div className="project-card-topline">
              <span className="project-number">
                {String(index + 1).padStart(2, "0")}
              </span>
              <span className="project-category">{project.category}</span>
            </div>
            <div className="project-stat">
              <strong>{project.stat}</strong>
              <span>{project.statLabel}</span>
            </div>
            <h3>{project.title}</h3>
            <p className="project-description">{project.description}</p>
            <div className="project-tools">
              {project.tools.map((tool) => (
                <span key={tool}>{tool}</span>
              ))}
            </div>
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="project-link"
              data-cursor="disable"
            >
              {project.linkLabel} <MdArrowOutward aria-hidden="true" />
            </a>
          </article>
        ))}
      </div>
    </div>
  </section>
);

export default Work;
