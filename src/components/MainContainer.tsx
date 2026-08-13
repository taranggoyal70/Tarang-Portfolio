import { useEffect } from "react";
import {
  MdArrowDownward,
  MdArrowForward,
  MdArrowOutward,
  MdCheckCircleOutline,
  MdCode,
  MdDescription,
  MdEmojiEvents,
  MdMailOutline,
  MdMenu,
  MdOutlineAccessTime,
  MdPersonOutline,
  MdTrendingUp,
} from "react-icons/md";
import {
  awardWinningProjects,
  archiveProjects,
  experience,
  flagshipProjects,
  processSteps,
  type ProjectSlug,
} from "../data/portfolioData";
import "./styles/Portfolio.css";

type ProductArtifactProps = {
  project: ProjectSlug;
  compact?: boolean;
};

const ProductArtifact = ({ project, compact = false }: ProductArtifactProps) => {
  if (project === "studentlytics") {
    return (
      <div className={`product-artifact studentlytics-artifact${compact ? " is-compact" : ""}`}>
        <div className="artifact-bar">
          <span className="artifact-brand">Studentlytics</span>
          <span className="artifact-live"><i /> Live session</span>
        </div>
        <div className="student-dashboard">
          <section className="student-summary">
            <span>Period 3 · Product Design</span>
            <strong>26 of 28</strong>
            <p>students checked in</p>
            <div className="student-signal">
              <span>Engagement</span><strong>82%</strong>
            </div>
          </section>
          <section className="student-timeline">
            <div className="timeline-heading">
              <span>Session signals</span><strong>10:24 AM</strong>
            </div>
            <div className="engagement-bars" aria-hidden="true">
              {[44, 62, 58, 76, 88, 72, 91, 84, 68, 79, 94, 87].map((height, index) => (
                <i key={index} style={{ "--bar-height": `${height}%` } as React.CSSProperties} />
              ))}
            </div>
            <div className="student-insight">
              <span>AI insight</span>
              <p>Participation rose after the live poll. Two students may need a follow-up.</p>
            </div>
          </section>
        </div>
      </div>
    );
  }

  if (project === "morphic") {
    return (
      <div className={`product-artifact morphic-artifact${compact ? " is-compact" : ""}`}>
        <div className="artifact-bar">
          <span className="artifact-brand">Morphic / Workspace</span>
          <span className="artifact-repo">taranggoyal70 / product</span>
        </div>
        <div className="morphic-workspace">
          <div className="objective-card">
            <span>Objective</span>
            <strong>Ship the billing recovery flow</strong>
            <p>Grounded in issue #42, repository state, and acceptance criteria.</p>
          </div>
          <ol className="delivery-rail">
            <li className="is-done"><span>1</span><p>Repository synced</p></li>
            <li className="is-done"><span>2</span><p>Plan compiled</p></li>
            <li className="is-active"><span>3</span><p>Approval required</p></li>
            <li><span>4</span><p>Branch + pull request</p></li>
          </ol>
          <div className="approval-card">
            <div><span>Execution boundary</span><strong>3 files · 8 changes · 26 checks</strong></div>
            <span className="approval-button">Approve &amp; open PR <MdArrowForward aria-hidden="true" /></span>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className={`product-artifact locus-artifact${compact ? " is-compact" : ""}`}>
      <div className="artifact-bar">
        <span className="artifact-brand">Locus / Context trace</span>
        <span className="artifact-repo">15 fixes benchmarked</span>
      </div>
      <div className="locus-workspace">
        <div className="locus-query">
          <span>Engineering task</span>
          <strong>Fix the dashboard chart loading state</strong>
        </div>
        <div className="locus-flow" aria-label="Locus narrows a repository graph into focused task context">
          <div className="repository-cloud">
            <span className="flow-label">Repository graph</span>
            <svg className="repository-graph" viewBox="0 0 260 220" aria-hidden="true">
              <path d="M36 42 94 71 145 34 212 66 225 130 174 184 101 174 42 137Z" />
              <path d="m94 71 7 103m44-140 29 150M42 137 212 66M36 42l189 88M94 71l118-5M42 137l132 47" />
              <circle cx="36" cy="42" r="8" />
              <circle cx="94" cy="71" r="7" />
              <circle className="graph-node-focus" cx="145" cy="34" r="10" />
              <circle cx="212" cy="66" r="7" />
              <circle cx="225" cy="130" r="8" />
              <circle cx="174" cy="184" r="7" />
              <circle className="graph-node-focus" cx="101" cy="174" r="10" />
              <circle cx="42" cy="137" r="7" />
              <circle className="graph-node-focus" cx="134" cy="112" r="11" />
            </svg>
            <span className="graph-file graph-file-primary">DashboardChart.tsx</span>
            <span className="graph-file graph-file-secondary">useMetrics.ts</span>
          </div>

          <div className="context-lens" aria-hidden="true">
            <div className="lens-orbit"><i /><i /><i /></div>
            <span>Task signal</span>
            <strong>65%</strong>
            <small>less context</small>
          </div>

          <div className="focus-pack">
            <span className="flow-label">Focused context</span>
            <div className="focus-file is-match"><span>Task match</span><strong>DashboardChart.tsx</strong></div>
            <div className="focus-file"><span>Dependency</span><strong>useMetrics.ts</strong></div>
            <div className="focus-file"><span>Test</span><strong>DashboardChart.test.tsx</strong></div>
          </div>
        </div>
        <div className="context-result">
          <div><span>Task localization</span><strong>87%</strong></div>
          <div className="context-saving"><span>Fix-file recall</span><strong>100%</strong></div>
          <div><span>Historical fixes</span><strong>15</strong></div>
        </div>
      </div>
    </div>
  );
};

const projectHighlights = {
  studentlytics: [
    { icon: MdPersonOutline, text: "Product lead & full-stack builder" },
    { icon: MdOutlineAccessTime, text: "Built in 24 hours" },
    { icon: MdEmojiEvents, text: "AWS × INRIX first place" },
    { icon: MdTrendingUp, text: "Continued at Highview" },
  ],
  morphic: [
    { icon: MdPersonOutline, text: "Product strategy, design & engineering" },
    { icon: MdEmojiEvents, text: "Beta Fund × GMI Cloud winner" },
    { icon: MdCode, text: "26-test approval & PR boundary" },
    { icon: MdArrowForward, text: "Approval → branch → pull request" },
  ],
  locus: [
    { icon: MdPersonOutline, text: "Product strategy & engineering" },
    { icon: MdEmojiEvents, text: "Stanford University AI Hackathon winner" },
    { icon: MdTrendingUp, text: "65% median context reduction" },
    { icon: MdCheckCircleOutline, text: "100% focused fix-file recall" },
  ],
};

const archiveMotionLabels: Record<string, [string, string]> = {
  forecast: ["Forecast window", "Signal resolved"],
  sound: ["Crowd input", "Session synced"],
  shield: ["Threat surface", "Request blocked"],
  analytics: ["Decision model", "Pattern found"],
  policy: ["Agent action", "Policy enforced"],
  knowledge: ["Source graph", "Answer grounded"],
  access: ["Scoped identity", "Receipt signed"],
  learning: ["Guidance level", "Autonomy rising"],
  retention: ["Account cohort", "Risk surfaced"],
  spatial: ["Private space", "Boundary clear"],
  evolve: ["Variant trial", "Evidence selected"],
  commit: ["Dormant repo", "Next move found"],
};

const ArchiveMotion = ({ motion }: { motion: string }) => {
  const [label, result] = archiveMotionLabels[motion];

  return (
    <div className={`archive-motion is-${motion}`} aria-hidden="true">
      <span>{label}</span>
      <div className="archive-motion-stage">
        {Array.from({ length: 7 }, (_, index) => (
          <i key={index} />
        ))}
        <b />
      </div>
      <strong>{result}</strong>
    </div>
  );
};

const MainContainer = () => {
  useEffect(() => {
    const scrollToHash = () => {
      const targetId = window.location.hash.slice(1);
      if (!targetId) return;
      document.getElementById(targetId)?.scrollIntoView({ block: "start" });
    };

    const frame = window.requestAnimationFrame(scrollToHash);
    const settledFrame = window.setTimeout(scrollToHash, 350);
    const mediaFrame = window.setTimeout(scrollToHash, 900);
    window.addEventListener("load", scrollToHash);
    window.addEventListener("hashchange", scrollToHash);

    return () => {
      window.cancelAnimationFrame(frame);
      window.clearTimeout(settledFrame);
      window.clearTimeout(mediaFrame);
      window.removeEventListener("load", scrollToHash);
      window.removeEventListener("hashchange", scrollToHash);
    };
  }, []);

  return (
    <main className="portfolio-site">
    <header className="site-nav">
      <a className="site-mark" href="#top" aria-label="Tarang Goyal, home">
        TG
      </a>
      <div className="site-name">
        <strong>Tarang Goyal</strong>
        <span>AI Product Engineer / FDE</span>
      </div>
      <nav className="desktop-nav" aria-label="Primary navigation">
        <a href="#work">Work</a>
        <a href="#experience">Experience</a>
        <a href="#about">About</a>
        <a href="/resume.pdf" target="_blank">
          Résumé
        </a>
        <a href="mailto:taranggoyal2000@gmail.com">Email Tarang</a>
      </nav>
      <a className="contact-nav" href="#work">
        View flagship work <MdArrowDownward aria-hidden="true" />
      </a>
      <details className="mobile-nav">
        <summary>
          <MdMenu aria-hidden="true" /> Menu
        </summary>
        <nav aria-label="Mobile navigation">
          {[
            ["Work", "#work"],
            ["Experience", "#experience"],
            ["About", "#about"],
            ["Contact", "#contact"],
          ].map(([label, href]) => (
            <a
              key={label}
              href={href}
              onClick={(event) =>
                event.currentTarget.closest("details")?.removeAttribute("open")
              }
            >
              {label}
            </a>
          ))}
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
        <div className="hero-status">
          <i aria-hidden="true" />
          7× Hackathon &amp; Competition Winner
        </div>
        <p className="eyebrow">
          AI Product Engineer · Forward-Deployed Builder
        </p>
        <h1>
          I turn ambiguous workflows into <span>useful AI products.</span>
        </h1>
        <p className="hero-role">
          AI Product Engineer &amp;
          <br />
          Forward-Deployed Builder.
        </p>
        <p className="hero-intro">
          From user problem and product decision through implementation,
          deployment, and evidence.
        </p>
        <div className="hero-lower">
          <p className="hero-now">
            Currently AI Product Manager & Product Engineer at Highview · San
            Francisco Bay Area · M.S. Business Analytics, Santa Clara
            University, Dec 2025
          </p>
          <div className="hero-actions">
            <a className="primary-action" href="#work">
              View flagship work <MdArrowDownward aria-hidden="true" />
            </a>
            <a href="/resume.pdf" target="_blank" className="text-action">
              Résumé <MdDescription aria-hidden="true" />
            </a>
            <a
              href="mailto:taranggoyal2000@gmail.com"
              className="text-action"
            >
              Email Tarang <MdArrowOutward aria-hidden="true" />
            </a>
          </div>
        </div>
      </div>

      <aside className="hero-proof" aria-label="Selected product proof">
        <article className="proof-frame">
          <div className="proof-frame-label">
            <span>Observed problem</span>
            <strong>Studentlytics</strong>
          </div>
          <a href="/work/studentlytics" aria-label="Read the Studentlytics case study">
            <ProductArtifact project="studentlytics" compact />
          </a>
        </article>

        <article className="proof-frame">
          <div className="proof-frame-label">
            <span>Product call</span>
            <strong>Morphic</strong>
          </div>
          <a href="/work/morphic" aria-label="Read the Morphic case study">
            <ProductArtifact project="morphic" compact />
          </a>
        </article>

        <article className="proof-frame">
          <div className="proof-frame-label">
            <span>Shipped system</span>
            <strong>Locus</strong>
          </div>
          <a href="/work/locus" aria-label="Read the Locus case study">
            <ProductArtifact project="locus" compact />
          </a>
        </article>

        <article className="proof-frame proof-frame-evidence">
          <div className="proof-frame-label">
            <span>Evidence</span>
            <strong>Verified outcomes</strong>
          </div>
          <dl>
            <div>
              <dt>AWS × INRIX</dt>
              <dd>First place</dd>
            </div>
            <div>
              <dt>Box</dt>
              <dd>40% less manual processing</dd>
            </div>
            <div>
              <dt>Locus</dt>
              <dd>100% focused fix-file recall</dd>
            </div>
          </dl>
        </article>
        <hr className="proof-scanner" aria-hidden="true" />
      </aside>
    </section>

    <section className="capability-ribbon" aria-label="Hackathon and competition wins">
      <div className="capability-track">
        {[0, 1].map((copy) => (
          <div aria-hidden={copy === 1} key={copy}>
            <span>Stanford University AI Hackathon · Locus</span><i />
            <span>AWS × INRIX · Studentlytics</span><i />
            <span>Beta Fund × GMI Cloud · Morphic</span><i />
            <span>YC Stack Auth · Crowd Symphony</span><i />
            <span>AgentForge · Gatekit</span><i />
            <span>SCU Analytical Showdown · Nazava</span><i />
            <span>A10 AI Product Manager Hackathon</span><i />
          </div>
        ))}
      </div>
    </section>

    <section className="evidence-ledger" aria-label="Selected evidence">
      <a
        href="https://devpost.com/software/studentlytics"
        target="_blank"
        rel="noreferrer"
      >
        <span>Evidence</span>
        <strong>AWS × INRIX</strong>
        <p>First place</p>
      </a>
      <div>
        <span>Evidence</span>
        <strong>Box</strong>
        <p>40% less manual processing</p>
      </div>
      <a
        href="https://github.com/taranggoyal70/locus/tree/main/benchmarks"
        target="_blank"
        rel="noreferrer"
      >
        <span>Evidence</span>
        <strong>Locus</strong>
        <p>65% median context reduction</p>
      </a>
      <a
        href="https://github.com/taranggoyal70/locus/tree/main/benchmarks"
        target="_blank"
        rel="noreferrer"
      >
        <span>Evidence</span>
        <strong>Locus</strong>
        <p>100% focused recall across 13 localized cases</p>
      </a>
    </section>

    <section className="section work-section" id="work">
      <div className="flagship-list">
        {flagshipProjects.map((project, index) => (
          <article
            className="flagship-project"
            data-project={project.slug}
            key={project.slug}
          >
            <a
              className="flagship-visual"
              href={`/work/${project.slug}`}
              aria-label={`Read ${project.title} case study`}
            >
              <ProductArtifact project={project.slug} />
              <span>{project.status}</span>
            </a>

            <div className="flagship-copy">
              <div className="flagship-kicker">
                <span>{String(index + 1).padStart(2, "0")}</span>
                <p>{project.category}</p>
              </div>
              <h3>{project.title}</h3>
              <p className="flagship-descriptor">{project.descriptor}</p>

              <ul className="flagship-highlights">
                {projectHighlights[project.slug].map((highlight) => {
                  const Icon = highlight.icon;
                  return (
                    <li key={highlight.text}>
                      <Icon aria-hidden="true" />
                      <span>{highlight.text}</span>
                    </li>
                  );
                })}
              </ul>

              <div className="flagship-actions">
                <a className="case-study-action" href={`/work/${project.slug}`}>
                  Read case study <MdArrowForward aria-hidden="true" />
                </a>
                <a
                  className="artifact-action"
                  href={project.proofUrl}
                  target="_blank"
                  rel="noreferrer"
                >
                  {project.proofLabel} <MdArrowOutward aria-hidden="true" />
                </a>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>

    <section className="section experience-section" id="experience">
      <div className="section-heading">
        <div>
          <p className="eyebrow">Selected experience</p>
          <h2>Product judgment backed by real operating context.</h2>
        </div>
        <p>
          Roles across AI product delivery, data science, and business
          analytics—the disciplines I now bring together.
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
          <p className="eyebrow">How I operate</p>
          <h2>One loop, end to end.</h2>
        </div>
        <p>
          I am most useful where a team needs someone to understand the
          workflow, make the product call, and stay through implementation and
          evidence.
        </p>
      </div>
      <div className="process-grid">
        {processSteps.map((step) => (
          <article key={step.number}>
            <span>{step.number}</span>
            <h3>{step.title}</h3>
            <p>{step.body}</p>
          </article>
        ))}
      </div>
      <div className="about-note">
        <p>
          Product management is the differentiator—not a competing identity. I
          use discovery, engineering, and analytics together to make AI systems
          useful, observable, and honest about their limits.
        </p>
        <a href="mailto:taranggoyal2000@gmail.com">
          Discuss a role <MdArrowOutward aria-hidden="true" />
        </a>
      </div>
    </section>

    <section className="section archive-section" aria-labelledby="archive-title">
      <div className="section-heading archive-heading">
        <div>
          <p className="eyebrow">More shipped work</p>
          <h2 id="archive-title">
            More products I’ve <em>shipped.</em>
          </h2>
        </div>
        <p>
          A curated selection from 31 public repositories. Award labels appear
          only on projects that won.
        </p>
      </div>

      <div className="award-ledger" aria-label="Seven award-winning projects">
        <div className="award-ledger-intro">
          <MdEmojiEvents aria-hidden="true" />
          <div>
            <strong>7× winner</strong>
            <span>Across the full portfolio</span>
          </div>
        </div>
        <div className="award-ledger-list">
          {awardWinningProjects.map((project) => (
            <a
              href={project.link}
              target="_blank"
              rel="noreferrer"
              key={project.title}
            >
              <span>{project.award}</span>
              <strong>{project.title}</strong>
              <MdArrowOutward aria-hidden="true" />
            </a>
          ))}
        </div>
      </div>

      <div className="archive-showcase">
        {archiveProjects.map((project, index) => {
          const isWinner = project.status.includes("Winner");
          const isResearch = project.category === "Research";
          const StatusIcon = isWinner
            ? MdEmojiEvents
            : isResearch
              ? MdDescription
              : MdCode;

          return (
            <a
              className={`archive-card${isWinner ? " is-winner" : ""}${isResearch ? " is-research" : ""}`}
              href={project.link}
              target="_blank"
              rel="noreferrer"
              key={project.title}
              aria-label={`View ${project.title}: ${project.status}`}
            >
              <div className="archive-card-top">
                <span className="archive-index">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <span className="archive-proof">
                  <StatusIcon aria-hidden="true" />
                  {project.status}
                </span>
              </div>

              <ArchiveMotion motion={project.motion} />

              <div className="archive-card-copy">
                <p>{project.category}</p>
                <h3>{project.title}</h3>
                <p>{project.contribution}</p>
              </div>

              <div className="archive-card-meta">
                <span>{project.role}</span>
                <span>{project.year}</span>
                <strong>
                  View project <MdArrowOutward aria-hidden="true" />
                </strong>
              </div>
            </a>
          );
        })}
      </div>

      <a
        className="archive-github"
        href="https://github.com/taranggoyal70?tab=repositories"
        target="_blank"
        rel="noreferrer"
      >
        <span>Want the full build history?</span>
        <strong>
          Explore all 31 public repositories
          <MdArrowOutward aria-hidden="true" />
        </strong>
      </a>
    </section>

    <footer className="site-footer" id="contact">
      <div>
        <p className="eyebrow">AI Product Engineer / FDE</p>
        <h2>
          Hiring someone to turn an unclear AI workflow into a working product?
        </h2>
      </div>
      <div className="footer-contact">
        <p>
          I’m open to AI product engineering and forward-deployed roles where I
          can work from customer problem through deployed software and
          validation.
        </p>
        <a href="mailto:taranggoyal2000@gmail.com">
          <MdMailOutline aria-hidden="true" />
          Email Tarang
        </a>
      </div>
      <div className="footer-links">
        <a
          href="https://linkedin.com/in/tarang-goyal"
          target="_blank"
          rel="noreferrer"
        >
          LinkedIn <MdArrowOutward aria-hidden="true" />
        </a>
        <a
          href="https://github.com/taranggoyal70"
          target="_blank"
          rel="noreferrer"
        >
          GitHub <MdArrowOutward aria-hidden="true" />
        </a>
        <a href="/resume.pdf" target="_blank">
          Résumé <MdArrowOutward aria-hidden="true" />
        </a>
      </div>
      <div className="footer-base">
        <span>San Francisco Bay Area</span>
        <span>© 2026 Tarang Goyal</span>
      </div>
    </footer>
    </main>
  );
};

export default MainContainer;
