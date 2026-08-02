import { MdArrowOutward } from "react-icons/md";
import "./styles/Work.css";

const projects = [
  {
    title: "Locus",
    category: "Live developer tool",
    description:
      "Task-sized context for coding agents, delivered through a web app, REST API, CLI, and MCP server.",
    problem:
      "Whole-repository context is noisy, but aggressive filtering can hide the file that matters.",
    decision:
      "Use deterministic dependency closure and return the whole repository whenever evidence is weak.",
    proof:
      "15 historical fixes · 87% task localization · 100% focused fix-file recall · 65% median context reduction.",
    tools: ["Next.js", "TypeScript", "MCP", "CLI", "Vercel"],
    stat: "65%",
    statLabel: "median context reduction",
    link: "https://locus-five-iota.vercel.app",
    linkLabel: "Open live product",
  },
  {
    title: "Morphic",
    category: "Live AI product",
    description:
      "An objective-centered software workspace grounded in GitHub evidence, with governed Codex runs and pull-request handoff.",
    problem:
      "Plans drift from repository reality while agent work happens in a separate, low-context interface.",
    decision:
      "Make the objective—not chat—the persistent interface and keep execution behind explicit approval.",
    proof:
      "Real branches, commits, and GitHub pull requests · 26 automated tests across approval and PR boundaries.",
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
      "A deployed classroom analytics prototype that turns recordings into attendance and engagement evidence for educators.",
    problem:
      "Manual roll calls record presence but miss participation, check-in, check-out, and engagement context.",
    decision:
      "Organize the product around the educator workflow instead of exposing raw computer-vision output.",
    proof:
      "First place at AWS × INRIX · deployed in 24 hours · continued as product work at Highview.",
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
    title: "Box Retention Intelligence",
    category: "Data science internship",
    description:
      "Retention analysis and forecasting workflows across 100K+ records and 10K+ accounts, translated into decision-ready reporting.",
    tools: ["PySpark", "SQL", "BigQuery", "XGBoost", "Tableau"],
    stat: "40%",
    statLabel: "less manual processing",
    link: "https://tarang-box-retention.vercel.app",
    linkLabel: "Open project",
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

const featuredProjects = projects.slice(0, 3);
const archiveProjects = projects.slice(3);

const Work = () => (
  <section className="work-section" id="work">
    <div className="work-container section-container">
      <div className="work-heading">
        <div>
          <p className="section-label">Selected work</p>
          <h2>Three builds. Three kinds of proof.</h2>
        </div>
        <p>
          Start with the problem, see the product call, then inspect what
          actually shipped.
        </p>
      </div>
      <div className="project-grid project-grid-featured">
        {featuredProjects.map((project, index) => (
          <article className="project-card project-card-featured" key={project.title}>
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
            <dl className="project-receipt">
              <div>
                <dt>Problem</dt>
                <dd>{project.problem}</dd>
              </div>
              <div>
                <dt>Product call</dt>
                <dd>{project.decision}</dd>
              </div>
              <div>
                <dt>Proof</dt>
                <dd>{project.proof}</dd>
              </div>
            </dl>
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
      <details className="project-archive">
        <summary data-cursor="disable">
          Explore {archiveProjects.length} more products, awards, and research
          <span aria-hidden="true">+</span>
        </summary>
        <div className="project-grid project-grid-archive">
          {archiveProjects.map((project, index) => (
            <article className="project-card project-card-archive" key={project.title}>
              <div className="project-card-topline">
                <span className="project-number">
                  {String(index + 4).padStart(2, "0")}
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
      </details>
    </div>
  </section>
);

export default Work;
