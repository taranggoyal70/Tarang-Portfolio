import {
  MdArrowBack,
  MdArrowForward,
  MdArrowOutward,
} from "react-icons/md";
import {
  flagshipProjects,
  type CaseStudyProject,
} from "../data/portfolioData";
import "./styles/Portfolio.css";

type CaseStudyPageProps = {
  project: CaseStudyProject;
};

const CaseStudyPage = ({ project }: CaseStudyPageProps) => {
  const projectIndex = flagshipProjects.findIndex(
    (item) => item.slug === project.slug,
  );
  const nextProject =
    flagshipProjects[(projectIndex + 1) % flagshipProjects.length];

  return (
    <main className="portfolio-site case-page">
      <header className="case-nav">
        <a href="/#work" className="case-back">
          <MdArrowBack aria-hidden="true" /> All work
        </a>
        <a href="/" className="case-brand" aria-label="Tarang Goyal, home">
          <strong>Tarang Goyal</strong>
          <span>AI Product Engineer / FDE</span>
        </a>
        <a
          href={project.externalUrl}
          target="_blank"
          rel="noreferrer"
          className="case-external"
        >
          {project.externalLabel} <MdArrowOutward aria-hidden="true" />
        </a>
      </header>

      <article>
        <section className="case-hero">
          <div className="case-hero-copy">
            <p className="eyebrow">{project.category}</p>
            <h1>{project.title}</h1>
            <p className="case-descriptor">{project.descriptor}</p>
            <p className="case-summary">{project.summary}</p>
            <div className="case-hero-links">
              <a
                href={project.externalUrl}
                target="_blank"
                rel="noreferrer"
                className="primary-action"
              >
                {project.externalLabel} <MdArrowOutward aria-hidden="true" />
              </a>
              <a
                href={project.sourceUrl}
                target="_blank"
                rel="noreferrer"
                className="text-action"
              >
                {project.sourceLabel} <MdArrowOutward aria-hidden="true" />
              </a>
            </div>
          </div>

          <dl className="case-facts">
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
            <div>
              <dt>Status</dt>
              <dd>{project.status}</dd>
            </div>
          </dl>

          <figure className="case-hero-figure">
            <img src={project.image} alt={project.imageAlt} />
            <figcaption>
              <span>Product evidence</span>
              <span>{project.status}</span>
            </figcaption>
          </figure>
        </section>

        <section className="case-section trace-section" aria-labelledby="trace-title">
          <div className="case-section-intro">
            <p className="eyebrow">Decision trace</p>
            <h2 id="trace-title">The shortest honest version.</h2>
          </div>
          <div className="decision-trace">
            {project.trace.map((step, index) => (
              <div key={step.label}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                <h3>{step.label}</h3>
                <p>{step.body}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="case-section overview-section">
          <div className="case-section-intro">
            <p className="eyebrow">Context</p>
            <h2>What made this worth solving.</h2>
          </div>
          <div className="overview-copy">
            <p>{project.overview}</p>
            <div>
              <h3>Constraints that shaped the work</h3>
              <ul>
                {project.constraints.map((constraint) => (
                  <li key={constraint}>{constraint}</li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        <section className="case-section decisions-section">
          <div className="case-section-intro">
            <p className="eyebrow">Pivotal decisions</p>
            <h2>The choices behind the interface.</h2>
          </div>
          <div className="decision-list">
            {project.decisions.map((decision, index) => (
              <article key={decision.title}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                <h3>{decision.title}</h3>
                <p>{decision.body}</p>
                <div>
                  <strong>Tradeoff accepted</strong>
                  <p>{decision.tradeoff}</p>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="case-section ownership-section">
          <div className="case-section-intro">
            <p className="eyebrow">Ownership</p>
            <h2>What I personally drove.</h2>
          </div>
          <ol className="ownership-list">
            {project.ownership.map((item, index) => (
              <li key={item}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                <p>{item}</p>
              </li>
            ))}
          </ol>
        </section>

        <section className="case-section progression-section">
          <div className="case-section-intro">
            <p className="eyebrow">Build progression</p>
            <h2>From framing to evidence.</h2>
          </div>
          <div className="progression-list">
            {project.progression.map((item) => (
              <article key={item.phase}>
                <span>{item.phase}</span>
                <h3>{item.title}</h3>
                <p>{item.body}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="case-section evidence-section">
          <div className="case-section-intro">
            <p className="eyebrow">Results & proof</p>
            <h2>Evidence, with its limits intact.</h2>
          </div>
          <div className="evidence-layout">
            <a
              href={project.proofUrl}
              target="_blank"
              rel="noreferrer"
              className="evidence-lead"
            >
              <span>Primary proof</span>
              <strong>{project.proof}</strong>
              <div>
                {project.proofLabel} <MdArrowOutward aria-hidden="true" />
              </div>
            </a>
            <div className="evidence-list">
              {project.evidence.map((item) => (
                <article key={item.title}>
                  <h3>{item.title}</h3>
                  <p>{item.body}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="case-section reflection-section">
          <div>
            <p className="eyebrow">Reflection</p>
            <h2>What I would prove next.</h2>
          </div>
          <p>{project.reflection}</p>
          <div className="case-tool-list" aria-label={`${project.title} tools`}>
            {project.tools.map((tool) => (
              <span key={tool}>{tool}</span>
            ))}
          </div>
        </section>
      </article>

      <footer className="next-case">
        <p>Next flagship case study</p>
        <a href={`/work/${nextProject.slug}`}>
          <span>{nextProject.title}</span>
          <MdArrowForward aria-hidden="true" />
        </a>
      </footer>
    </main>
  );
};

export default CaseStudyPage;
