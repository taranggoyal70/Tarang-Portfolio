import "./styles/WhatIDo.css";

const capabilities = [
  {
    number: "01",
    title: "Discover",
    description:
      "Start with the user workflow, the expensive friction, and the decision the product must improve.",
    tools: ["User research", "PRDs", "Success metrics"],
  },
  {
    number: "02",
    title: "Build",
    description:
      "Own the interface, model behavior, backend, data, integrations, and deployment as one product system.",
    tools: ["React", "TypeScript", "Python", "AWS"],
  },
  {
    number: "03",
    title: "Prove",
    description:
      "Instrument the outcome, test the failure modes, and leave behind evidence—not a polished demo alone.",
    tools: ["Evaluation", "Analytics", "Iteration"],
  },
];

const WhatIDo = () => (
  <section className="whatIDO section-container" id="about">
    <div className="what-heading">
      <p className="section-label">Operating range</p>
      <div>
        <h2>One owner across the product loop.</h2>
        <p>
          I work best where the brief is incomplete, the interfaces cross teams,
          and a useful product matters more than a perfect handoff.
        </p>
      </div>
    </div>
    <div className="what-box-in">
      {capabilities.map((capability) => (
        <article className="what-content" key={capability.number}>
          <span className="what-number">{capability.number}</span>
          <h3>{capability.title}</h3>
          <p>{capability.description}</p>
          <div className="what-content-flex">
            {capability.tools.map((tool) => (
              <span className="what-tags" key={tool}>
                {tool}
              </span>
            ))}
          </div>
        </article>
      ))}
    </div>
  </section>
);

export default WhatIDo;
