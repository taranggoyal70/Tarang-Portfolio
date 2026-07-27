import {
  MdArrowDownward,
  MdArrowForward,
  MdArrowOutward,
  MdDescription,
  MdMailOutline,
  MdMenu,
} from "react-icons/md";
import {
  archiveProjects,
  experience,
  flagshipProjects,
  processSteps,
} from "../data/portfolioData";
import "./styles/Portfolio.css";

const MainContainer = () => (
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
      </nav>
      <a className="contact-nav" href="mailto:taranggoyal2000@gmail.com">
        Email Tarang <MdArrowOutward aria-hidden="true" />
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
        <p className="eyebrow">
          AI Product Engineer · Forward-Deployed Builder
        </p>
        <h1>
          I turn ambiguous workflows into
          <span> useful</span> AI products.
        </h1>
        <p className="hero-intro">
          I work from user problem and product decision through implementation,
          deployment, and validation.
        </p>
        <p className="hero-now">
          AI Product Manager & Product Engineer at Highview · M.S. Business
          Analytics, Santa Clara University · Graduated Dec 2025
        </p>
        <div className="hero-actions">
          <a className="primary-action" href="#work">
            View flagship work <MdArrowDownward aria-hidden="true" />
          </a>
          <a href="/resume.pdf" target="_blank" className="text-action">
            Résumé <MdDescription aria-hidden="true" />
          </a>
        </div>
      </div>

      <aside className="hero-trace" aria-label="How Tarang builds products">
        <div className="hero-trace-heading">
          <span>TG / Product loop</span>
          <strong>From ambiguity to evidence</strong>
        </div>
        <ol>
          {processSteps.map((step) => (
            <li key={step.number}>
              <span>{step.number}</span>
              <div>
                <h2>{step.title}</h2>
                <p>{step.body}</p>
              </div>
            </li>
          ))}
        </ol>
      </aside>
    </section>

    <section className="credibility-rail" aria-label="Selected credentials">
      <div>
        <strong>Highview</strong>
        <span>AI product engineering · Present</span>
      </div>
      <div>
        <strong>Box</strong>
        <span>Data science · 2025</span>
      </div>
      <div>
        <strong>Santa Clara University</strong>
        <span>M.S. Business Analytics · Dec 2025</span>
      </div>
      <a
        href="https://devpost.com/software/studentlytics"
        target="_blank"
        rel="noreferrer"
      >
        <strong>AWS × INRIX</strong>
        <span>Hackathon · First place</span>
      </a>
      <a
        href="https://arxiv.org/pdf/2605.21504"
        target="_blank"
        rel="noreferrer"
      >
        <strong>arXiv</strong>
        <span>Chronos-2 · Research co-author</span>
      </a>
    </section>

    <section className="section work-section" id="work">
      <div className="section-heading">
        <div>
          <p className="eyebrow">Flagship work</p>
          <h2>Three products. Decisions included.</h2>
        </div>
        <p>
          Each story separates the observed problem, the pivotal decision, what
          I shipped, and the evidence that exists today.
        </p>
      </div>

      <div className="flagship-list">
        {flagshipProjects.map((project, index) => (
          <article className="flagship-project" key={project.slug}>
            <a
              className="flagship-visual"
              href={`/work/${project.slug}`}
              aria-label={`Read ${project.title} case study`}
            >
              <img src={project.image} alt={project.imageAlt} />
              <span>{project.status}</span>
            </a>

            <div className="flagship-copy">
              <div className="flagship-kicker">
                <span>{String(index + 1).padStart(2, "0")}</span>
                <p>{project.category}</p>
              </div>
              <h3>{project.title}</h3>
              <p className="flagship-descriptor">{project.descriptor}</p>

              <dl className="flagship-meta">
                <div>
                  <dt>Role</dt>
                  <dd>{project.role}</dd>
                </div>
                <div>
                  <dt>Team</dt>
                  <dd>{project.team}</dd>
                </div>
                <div>
                  <dt>Timeline</dt>
                  <dd>{project.timeline}</dd>
                </div>
              </dl>

              <div className="flagship-trace">
                {project.trace.map((step, stepIndex) => (
                  <div key={step.label}>
                    <span>{String(stepIndex + 1).padStart(2, "0")}</span>
                    <div>
                      <strong>{step.label}</strong>
                      <p>{step.body}</p>
                    </div>
                  </div>
                ))}
              </div>

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
      <div className="section-heading compact-heading">
        <div>
          <p className="eyebrow">Supporting work</p>
          <h2 id="archive-title">Range after depth.</h2>
        </div>
        <p>
          Research, award-winning product strategy, real-time systems, and AI
          infrastructure.
        </p>
      </div>
      <div className="archive-table">
        <div className="archive-header" aria-hidden="true">
          <span>Project</span>
          <span>Role / status</span>
          <span>Contribution</span>
          <span>Year</span>
        </div>
        {archiveProjects.map((project) => (
          <a
            href={project.link}
            target="_blank"
            rel="noreferrer"
            key={project.title}
          >
            <div>
              <strong>{project.title}</strong>
              <span>{project.category}</span>
            </div>
            <div>
              <strong>{project.role}</strong>
              <span>{project.status}</span>
            </div>
            <p>{project.contribution}</p>
            <div className="archive-year">
              <span>{project.year}</span>
              <MdArrowOutward aria-hidden="true" />
            </div>
          </a>
        ))}
      </div>
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

export default MainContainer;
