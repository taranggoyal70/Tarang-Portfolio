import "./styles/WhatIDo.css";

const capabilities = [
  {
    number: "01",
    title: "AI product engineering",
    description:
      "Build applied AI workflows with LLMs, agents, computer vision, speech, APIs, and measurable quality.",
    tools: ["LLMs", "AI agents", "RAG", "OpenCV", "Whisper", "FastAPI"],
  },
  {
    number: "02",
    title: "Full-stack delivery",
    description:
      "Own responsive interfaces, backend services, authentication, data models, integrations, and deployment.",
    tools: ["React", "TypeScript", "Next.js", "Python", "Supabase", "AWS"],
  },
  {
    number: "03",
    title: "Product and analytics",
    description:
      "Turn user workflows into product requirements, decision tools, experiments, and clear success metrics.",
    tools: ["PRDs", "Roadmaps", "SQL", "PySpark", "Tableau", "A/B testing"],
  },
];

const WhatIDo = () => (
  <section className="whatIDO section-container" id="how">
    <div className="what-heading">
      <p className="section-label">How I work</p>
      <h2>Technical enough to build. Product-minded enough to choose well.</h2>
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
