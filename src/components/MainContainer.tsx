import { PropsWithChildren } from "react";
import {
  MdArrowDownward,
  MdArrowOutward,
  MdDescription,
  MdMailOutline,
  MdMenu,
} from "react-icons/md";
import "./styles/Portfolio.css";

const featuredProjects = [
  {
    title: "Morphic",
    category: "Live AI product",
    problem:
      "Builders lose context when objectives, repositories, and agent execution live in separate tools.",
    contribution:
      "I shaped the product strategy, designed the adaptive workspace, and built a governed Codex workflow that carries an objective through pull-request creation.",
    proof: "Production app",
    image: "/project-media/morphic.png",
    imageAlt: "Morphic adaptive AI software workspace",
    tools: ["Product strategy", "Next.js", "OpenAI", "Vercel"],
    link: "https://morphic-murex.vercel.app/",
    linkLabel: "Open live app",
  },
  {
    title: "Studentlytics",
    category: "AWS × INRIX · 1st place",
    problem:
      "Faculty need reliable attendance and engagement signals from classroom recordings—not another manual roll call.",
    contribution:
      "I planned the product and delivered an event-driven video pipeline spanning face matching, engagement analysis, and instructor-facing results in 24 hours.",
    proof: "91% face-match accuracy",
    image: "/project-media/studentlytics.png",
    imageAlt: "Studentlytics award-winning classroom analytics project",
    tools: ["AWS", "Computer vision", "Analytics", "Product delivery"],
    link: "https://devpost.com/software/studentlytics",
    linkLabel: "View on Devpost",
  },
  {
    title: "Crowd Symphony",
    category: "YC Stack Auth winner",
    problem:
      "Turn a room full of phones into one instrument without requiring an app, account, or musical training.",
    contribution:
      "I designed the real-time audience journey and shipped hand tracking, QR onboarding, synchronized sessions, and Web Audio controls across devices.",
    proof: "Live multi-device product",
    image: "/project-media/crowd-symphony.png",
    imageAlt: "Crowd Symphony real-time audience music interface",
    tools: ["Real-time UX", "MediaPipe", "Socket.IO", "Web Audio"],
    link: "https://crowd-symphony.vercel.app",
    linkLabel: "Open live app",
  },
  {
    title: "Chronos-2",
    category: "Forecasting research · arXiv",
    problem:
      "Understand when multivariate context improves financial forecasts across equities and U.S. Treasury rates.",
    contribution:
      "I co-designed the research, ran experiments and evaluation, and co-authored the paper testing Amazon Chronos-2 across economic and financial series.",
    proof: "Published research",
    image: "/project-media/chronos-2.png",
    imageAlt: "Chronos-2 financial forecasting research paper",
    tools: ["Research design", "Time series", "Evaluation", "Amazon Chronos-2"],
    link: "https://arxiv.org/pdf/2605.21504",
    linkLabel: "Read the paper",
  },
  {
    title: "Locus",
    category: "Live developer tool",
    problem:
      "Coding agents waste context on unrelated files, increasing token cost and distracting their reasoning.",
    contribution:
      "I turned task-scoped dependency localization into a usable developer product, shipping both a CLI and an MCP server.",
    proof: "67% fewer input tokens",
    image: "/project-media/locus.png",
    imageAlt: "Locus developer tool showing task-scoped code context",
    tools: ["Product strategy", "MCP", "CLI", "Next.js"],
    link: "https://locus-five-iota.vercel.app",
    linkLabel: "Open live app",
  },
];

const additionalProjects = [
  {
    title: "Nazava Analytics",
    category: "SCU Analytical Showdown winner",
    detail: "Forecasting, segmentation, campaign ROI, and executive decisions.",
    link: "https://scu-analytical-showdown.vercel.app",
  },
  {
    title: "Cortex",
    category: "Live AI product",
    detail: "A cited, versioned company brain with an anti-hallucination gate.",
    link: "https://cortex-lyart-rho.vercel.app",
  },
  {
    title: "Ghost Hand",
    category: "Live learning agent",
    detail: "An apprenticeship agent that deliberately teaches itself out of a job.",
    link: "https://ghost-hand-virid.vercel.app",
  },
  {
    title: "Agent Access",
    category: "Live infrastructure product",
    detail: "Scoped credentials, idempotent invocation, and signed agent receipts.",
    link: "https://agent-access.vercel.app",
  },
  {
    title: "A10 AI Firewall",
    category: "1st place · product strategy",
    detail: "AI workload protection, GTM, architecture, and ARR modeling.",
    link: "https://a10-taupe.vercel.app",
  },
];

const experience = [
  {
    period: "2026—Now",
    company: "Highview",
    role: "AI Product Manager & Product Engineer Intern",
    result:
      "Shipping an AI education platform across discovery, role-based workflows, computer vision, speech, analytics, and deployment.",
    proof: "91% face-match accuracy",
  },
  {
    period: "2025",
    company: "Box",
    role: "Data Science Intern",
    result:
      "Built scalable retention, forecasting, and decision workflows across four cross-functional teams.",
    proof: "40% less manual processing",
  },
  {
    period: "2023—24",
    company: "Hashroot",
    role: "Business Data Analyst",
    result:
      "Connected customer, pricing, marketing, and operations data into reusable decision systems.",
    proof: "20+ hours saved weekly",
  },
];

const operatingModes = [
  {
    title: "Product judgment",
    body: "Customer discovery, workflow mapping, product strategy, PRDs, roadmaps, and success metrics.",
  },
  {
    title: "Engineering execution",
    body: "React, TypeScript, Next.js, FastAPI, Python, APIs, agents, and real-time systems.",
  },
  {
    title: "Analytical rigor",
    body: "SQL, experimentation, forecasting, product analytics, BigQuery, XGBoost, and dashboards.",
  },
];

const tools = [
  "React",
  "TypeScript",
  "Next.js",
  "Python",
  "FastAPI",
  "OpenAI",
  "AI agents",
  "Computer vision",
  "SQL",
  "BigQuery",
  "AWS",
  "GCP",
  "Supabase",
  "Vercel",
];

const MainContainer = ({ children }: PropsWithChildren) => (
  <main className="portfolio-site">
    <header className="site-nav">
      <a className="site-mark" href="#top" aria-label="Tarang Goyal, home">
        TG
      </a>
      <div className="site-name">
        <strong>Tarang Goyal</strong>
        <span>AI product engineer</span>
      </div>
      <nav className="desktop-nav" aria-label="Primary navigation">
        <a href="#work">Work</a>
        <a href="#experience">Experience</a>
        <a href="#about">About</a>
        <a href="#contact">Contact</a>
      </nav>
      <a className="resume-nav" href="/resume.pdf" target="_blank">
        Résumé <MdArrowOutward aria-hidden="true" />
      </a>
      <details className="mobile-nav">
        <summary>
          <MdMenu aria-hidden="true" /> Menu
        </summary>
        <nav aria-label="Mobile navigation">
          <a
            href="#work"
            onClick={(event) =>
              event.currentTarget.closest("details")?.removeAttribute("open")
            }
          >
            Work
          </a>
          <a
            href="#experience"
            onClick={(event) =>
              event.currentTarget.closest("details")?.removeAttribute("open")
            }
          >
            Experience
          </a>
          <a
            href="#about"
            onClick={(event) =>
              event.currentTarget.closest("details")?.removeAttribute("open")
            }
          >
            About
          </a>
          <a
            href="#contact"
            onClick={(event) =>
              event.currentTarget.closest("details")?.removeAttribute("open")
            }
          >
            Contact
          </a>
          <a
            href="/resume.pdf"
            target="_blank"
            onClick={(event) =>
              event.currentTarget.closest("details")?.removeAttribute("open")
            }
          >
            Résumé <MdArrowOutward aria-hidden="true" />
          </a>
        </nav>
      </details>
    </header>

    <section className="hero" id="top">
      <div className="hero-copy">
        <p className="eyebrow">Product judgment × engineering execution</p>
        <h1>
          I build AI products that make
          <span> hard decisions easier.</span>
        </h1>
        <p className="hero-intro">
          I take ambiguous problems from customer conversation to production—
          shaping the product, building the system, and proving the outcome.
        </p>
        <p className="hero-now">
          Currently building AI education products at Highview · M.S. Business
          Analytics, Santa Clara University
        </p>
        <div className="hero-actions">
          <a className="primary-action" href="#work">
            Explore selected work <MdArrowDownward aria-hidden="true" />
          </a>
          <a href="/resume.pdf" target="_blank" className="text-action">
            View résumé <MdDescription aria-hidden="true" />
          </a>
        </div>
      </div>

      <div className="hero-portrait" aria-label="Interactive portrait of Tarang">
        <div className="portrait-meta">
          <span>Tarang Goyal / TG_01</span>
          <span>Santa Clara, CA</span>
        </div>
        <div className="portrait-grid" />
        <div className="character-shell">{children}</div>
        <div className="portrait-status">
          <span className="status-dot" />
          <div>
            <small>Available for</small>
            <strong>AI product + engineering roles</strong>
          </div>
        </div>
      </div>

      <div className="proof-strip" aria-label="Selected career outcomes">
        <div>
          <strong>91%</strong>
          <span>Face-match accuracy in classroom video</span>
        </div>
        <div>
          <strong>4</strong>
          <span>Award-winning product builds</span>
        </div>
        <div>
          <strong>100K+</strong>
          <span>Records modeled for product decisions</span>
        </div>
      </div>
    </section>

    <section className="section work-section" id="work">
      <div className="section-heading">
        <div>
          <p className="eyebrow">Selected work · 2025—26</p>
          <h2>Products with decisions behind them.</h2>
        </div>
        <p>
          Five examples across AI, real-time systems, developer tooling, and
          research—focused on what changed because I was there.
        </p>
      </div>

      <div className="case-study-list">
        {featuredProjects.map((project, index) => (
          <article
            className={`case-study ${index % 2 === 1 ? "case-study-reverse" : ""}`}
            key={project.title}
          >
            <a
              className="case-visual"
              href={project.link}
              target="_blank"
              rel="noreferrer"
              aria-label={`${project.linkLabel}: ${project.title}`}
            >
              <img src={project.image} alt={project.imageAlt} />
              <span className="case-proof">{project.proof}</span>
              <span className="case-open">
                {project.linkLabel} <MdArrowOutward aria-hidden="true" />
              </span>
            </a>
            <div className="case-copy">
              <div className="case-topline">
                <span>{String(index + 1).padStart(2, "0")}</span>
                <p>{project.category}</p>
              </div>
              <h3>{project.title}</h3>
              <div className="case-detail">
                <span>The problem</span>
                <p>{project.problem}</p>
              </div>
              <div className="case-detail">
                <span>What I owned</span>
                <p>{project.contribution}</p>
              </div>
              <div className="case-tools">
                {project.tools.map((tool) => (
                  <span key={tool}>{tool}</span>
                ))}
              </div>
              <a href={project.link} target="_blank" rel="noreferrer" className="case-link">
                {project.linkLabel} <MdArrowOutward aria-hidden="true" />
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>

    <section className="section more-work" aria-labelledby="more-work-title">
      <div className="section-heading compact-heading">
        <div>
          <p className="eyebrow">More shipped work</p>
          <h2 id="more-work-title">A wider build range.</h2>
        </div>
        <p>
          Additional products spanning analytics, learning agents,
          infrastructure, and AI security.
        </p>
      </div>
      <div className="more-work-grid">
        {additionalProjects.map((project) => (
          <a
            href={project.link}
            target="_blank"
            rel="noreferrer"
            className="more-work-card"
            key={project.title}
          >
            <span>{project.category}</span>
            <h3>{project.title}</h3>
            <p>{project.detail}</p>
            <div>
              View project <MdArrowOutward aria-hidden="true" />
            </div>
          </a>
        ))}
      </div>
    </section>

    <section className="section experience-section" id="experience">
      <div className="section-heading">
        <div>
          <p className="eyebrow">Experience</p>
          <h2>Built across the whole product loop.</h2>
        </div>
        <p>
          Product judgment, engineering execution, and analytical rigor—used
          together instead of handed off between silos.
        </p>
      </div>
      <div className="experience-list">
        {experience.map((item) => (
          <article key={item.company}>
            <span className="experience-period">{item.period}</span>
            <div>
              <h3>{item.company}</h3>
              <p className="experience-role">{item.role}</p>
            </div>
            <p>{item.result}</p>
            <strong>{item.proof}</strong>
          </article>
        ))}
      </div>
    </section>

    <section className="section operating-section" id="about">
      <div className="section-heading">
        <div>
          <p className="eyebrow">How I work</p>
          <h2>Useful where disciplines overlap.</h2>
        </div>
        <p>
          My best work happens where a problem crosses boundaries: understand
          the workflow, shape the product, build the system, measure the result.
        </p>
      </div>
      <div className="mode-grid">
        {operatingModes.map((mode) => (
          <article key={mode.title}>
            <span>My range</span>
            <h3>{mode.title}</h3>
            <p>{mode.body}</p>
          </article>
        ))}
      </div>
      <div className="tool-line" aria-label="Technical toolkit">
        {tools.map((tool) => (
          <span key={tool}>{tool}</span>
        ))}
      </div>
    </section>

    <footer className="site-footer" id="contact">
      <div>
        <p className="eyebrow">Let’s build something useful</p>
        <h2>Have a hard product problem?</h2>
      </div>
      <div className="footer-contact">
        <p>
          Open to AI product engineering, forward-deployed engineering,
          full-stack, and technical product opportunities.
        </p>
        <a href="mailto:taranggoyal2000@gmail.com">
          <MdMailOutline aria-hidden="true" />
          taranggoyal2000@gmail.com
        </a>
      </div>
      <div className="footer-links">
        <a href="https://linkedin.com/in/tarang-goyal" target="_blank" rel="noreferrer">
          LinkedIn <MdArrowOutward aria-hidden="true" />
        </a>
        <a href="https://github.com/taranggoyal70" target="_blank" rel="noreferrer">
          GitHub <MdArrowOutward aria-hidden="true" />
        </a>
        <a href="/resume.pdf" target="_blank">
          Résumé <MdArrowOutward aria-hidden="true" />
        </a>
      </div>
      <div className="footer-base">
        <span>Santa Clara, California</span>
        <span>© 2026 Tarang Goyal</span>
      </div>
    </footer>
  </main>
);

export default MainContainer;
