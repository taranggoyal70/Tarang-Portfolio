import { PropsWithChildren } from "react";
import {
  MdArrowDownward,
  MdArrowOutward,
  MdDescription,
  MdMailOutline,
} from "react-icons/md";
import "./styles/Portfolio.css";

const featuredProjects = [
  {
    title: "Morphic",
    category: "Live AI product",
    problem:
      "Builders lose context when objectives, repositories, and agent execution live in separate tools.",
    contribution:
      "Product strategy, adaptive workspace UX, full-stack delivery, and a governed Codex-to-PR workflow.",
    proof: "Production app",
    image: "/project-media/morphic.png",
    link: "https://morphic-murex.vercel.app/",
    linkLabel: "Open live app",
  },
  {
    title: "Studentlytics",
    category: "AWS × INRIX · 1st place",
    problem:
      "Faculty need reliable attendance and engagement signals from classroom recordings—not manual roll calls.",
    contribution:
      "Product planning, event-driven AI pipeline, analytics workflows, and full-stack delivery in 24 hours.",
    proof: "91% face match",
    image: "/project-media/studentlytics.png",
    link: "https://devpost.com/software/studentlytics",
    linkLabel: "View on Devpost",
  },
  {
    title: "Crowd Symphony",
    category: "YC Stack Auth winner",
    problem:
      "Make a crowd part of the music without apps, instruments, or complicated onboarding.",
    contribution:
      "Real-time product UX, hand tracking, synchronized sessions, and Web Audio controls across devices.",
    proof: "Live multi-device",
    image: "/project-media/crowd-symphony.png",
    link: "https://crowd-symphony.vercel.app",
    linkLabel: "Open live app",
  },
  {
    title: "Chronos-2",
    category: "Forecasting research · arXiv",
    problem:
      "Test whether multivariate context improves financial forecasting across equities and U.S. Treasury rates.",
    contribution:
      "Research design, experiments, evaluation, and paper co-authorship with Amazon Chronos-2.",
    proof: "Published paper",
    image: "/project-media/chronos-2.png",
    link: "https://arxiv.org/pdf/2605.21504",
    linkLabel: "Read the paper",
  },
  {
    title: "Locus",
    category: "Live developer tool",
    problem:
      "Coding agents waste context on unrelated files, increasing token cost and reasoning noise.",
    contribution:
      "Product strategy, task-scoped dependency localization, and CLI + MCP delivery.",
    proof: "67% fewer tokens",
    image: "/project-media/locus.png",
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
    number: "01",
    title: "Find the real problem",
    body: "Customer discovery, workflow mapping, product strategy, PRDs, and success metrics.",
  },
  {
    number: "02",
    title: "Build the useful thing",
    body: "React, TypeScript, Next.js, FastAPI, Python, APIs, agents, and real-time systems.",
  },
  {
    number: "03",
    title: "Prove that it worked",
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
  <main className="ledger-site">
    <header className="ledger-nav">
      <a className="ledger-mark" href="#top" aria-label="Tarang Goyal, home">
        TG
      </a>
      <div className="ledger-title">
        <strong>Proof Ledger</strong>
        <span>Product + Engineering</span>
      </div>
      <nav aria-label="Primary navigation">
        <a href="#about">About</a>
        <a href="#experience">Experience</a>
        <a href="#work">Work</a>
        <a href="#contact">Contact</a>
      </nav>
      <a className="ledger-id" href="/resume.pdf" target="_blank">
        TG_01 <MdArrowOutward aria-hidden="true" />
      </a>
    </header>

    <section className="ledger-hero" id="top">
      <div className="hero-copy">
        <p className="ledger-kicker">AI product engineer · Forward-deployed builder</p>
        <h1>
          Tarang
          <br />
          Goyal<span>.</span>
        </h1>
        <p className="hero-thesis">
          I turn ambiguous problems into deployed AI products—across discovery,
          interface, systems, data, and measurable outcomes.
        </p>
        <div className="hero-actions">
          <a className="primary-action" href="#work">
            See the proof <MdArrowDownward aria-hidden="true" />
          </a>
          <a href="/resume.pdf" target="_blank" className="text-action">
            Résumé <MdDescription aria-hidden="true" />
          </a>
        </div>
      </div>

      <div className="hero-evidence" aria-label="Selected career metrics">
        <div className="evidence-status">
          <span className="status-dot" />
          <span>Open to opportunities</span>
        </div>
        <div className="evidence-metric">
          <strong>91%</strong>
          <span>AI vision accuracy</span>
        </div>
        <div className="evidence-metric">
          <strong>4</strong>
          <span>award-winning builds</span>
        </div>
        <div className="evidence-metric">
          <strong>100K+</strong>
          <span>records modeled</span>
        </div>
        <p>Bay Area · New York · U.S.</p>
      </div>

      <div className="identity-frame" aria-label="Interactive portrait of Tarang">
        <span className="frame-label frame-label-top">Builder / Analyst / PM</span>
        <span className="frame-label frame-label-side">Santa Clara, CA</span>
        <div className="character-shell">{children}</div>
        <div className="identity-caption">
          <span>Current mode</span>
          <strong>Shipping</strong>
        </div>
      </div>
    </section>

    <section className="ledger-section work-ledger" id="work">
      <div className="section-heading">
        <div>
          <p className="ledger-kicker">Selected entries · 2025—26</p>
          <h2>Proof, not promises.</h2>
        </div>
        <p>
          Production products, award-winning builds, and published research.
          Each entry starts with the problem and ends with what I shipped.
        </p>
      </div>

      <div className="ledger-column-labels" aria-hidden="true">
        <span>Project</span>
        <span>Problem / decision</span>
        <span>My contribution</span>
        <span>Evidence</span>
      </div>

      <div className="project-ledger">
        {featuredProjects.map((project, index) => (
          <article className="project-entry" key={project.title}>
            <div className="project-identity">
              <span className="entry-number">
                {String(index + 1).padStart(2, "0")}
              </span>
              <div>
                <h3>{project.title}</h3>
                <p>{project.category}</p>
              </div>
            </div>
            <div className="entry-copy">
              <span>Problem / decision</span>
              <p>{project.problem}</p>
            </div>
            <div className="entry-copy">
              <span>My contribution</span>
              <p>{project.contribution}</p>
            </div>
            <a
              className="project-proof"
              href={project.link}
              target="_blank"
              rel="noreferrer"
              aria-label={`${project.linkLabel}: ${project.title}`}
            >
              <img src={project.image} alt="" />
              <span className="proof-badge">{project.proof}</span>
              <span className="proof-link">
                {project.linkLabel} <MdArrowOutward aria-hidden="true" />
              </span>
            </a>
          </article>
        ))}
      </div>
    </section>

    <section className="ledger-section more-work" aria-labelledby="more-work-title">
      <div className="section-heading compact-heading">
        <div>
          <p className="ledger-kicker">More shipped work</p>
          <h2 id="more-work-title">The wider build log.</h2>
        </div>
        <p>Five more products spanning analytics, learning agents, infrastructure, and AI security.</p>
      </div>
      <div className="more-work-list">
        {additionalProjects.map((project, index) => (
          <a
            href={project.link}
            target="_blank"
            rel="noreferrer"
            className="more-work-row"
            key={project.title}
          >
            <span>{String(index + 6).padStart(2, "0")}</span>
            <strong>{project.title}</strong>
            <span>{project.category}</span>
            <p>{project.detail}</p>
            <MdArrowOutward aria-hidden="true" />
          </a>
        ))}
      </div>
    </section>

    <section className="ledger-section experience-ledger" id="experience">
      <div className="section-heading">
        <div>
          <p className="ledger-kicker">Experience</p>
          <h2>Built across the whole loop.</h2>
        </div>
        <p>
          Product judgment, engineering execution, and analytical rigor—used
          together, not handed off between silos.
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

    <section className="ledger-section operating-range" id="about">
      <div className="section-heading">
        <div>
          <p className="ledger-kicker">Operating range</p>
          <h2>One builder. Three modes.</h2>
        </div>
        <p>
          Most useful where the problem crosses boundaries: I can find the
          workflow, shape the product, build it, and measure whether it works.
        </p>
      </div>
      <div className="mode-grid">
        {operatingModes.map((mode) => (
          <article key={mode.number}>
            <span>{mode.number}</span>
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

    <footer className="ledger-footer" id="contact">
      <div>
        <p className="ledger-kicker">Next entry</p>
        <h2>Have a hard problem that needs a builder?</h2>
      </div>
      <div className="footer-contact">
        <p>
          Open to AI product engineering, forward-deployed engineering,
          full-stack, and technical product roles.
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
