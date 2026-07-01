import "./styles/TechStack.css";

const skillGroups = [
  {
    label: "AI systems",
    tools: [
      "LLMs",
      "AI agents",
      "RAG",
      "LangChain",
      "LangGraph",
      "Prompt evaluation",
      "Computer vision",
      "Whisper",
    ],
  },
  {
    label: "Product engineering",
    tools: [
      "React",
      "TypeScript",
      "Next.js",
      "FastAPI",
      "Python",
      "REST APIs",
      "WebSockets",
      "Supabase",
    ],
  },
  {
    label: "Data and cloud",
    tools: [
      "SQL",
      "PySpark",
      "BigQuery",
      "XGBoost",
      "AWS",
      "GCP",
      "Docker",
      "CI/CD",
    ],
  },
  {
    label: "Product practice",
    tools: [
      "Customer discovery",
      "PRDs",
      "User stories",
      "Roadmaps",
      "Success metrics",
      "A/B testing",
      "GTM",
      "Stakeholder management",
    ],
  },
];

const TechStack = () => (
  <section className="techstack section-container">
    <div className="techstack-heading">
      <p className="section-label">Toolkit</p>
      <h2>Tools are useful. Shipping is the point.</h2>
    </div>
    <div className="skill-groups">
      {skillGroups.map((group) => (
        <div className="skill-group" key={group.label}>
          <h3>{group.label}</h3>
          <div>
            {group.tools.map((tool) => (
              <span key={tool}>{tool}</span>
            ))}
          </div>
        </div>
      ))}
    </div>
  </section>
);

export default TechStack;
