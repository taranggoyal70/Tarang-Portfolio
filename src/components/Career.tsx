import "./styles/Career.css";

const experience = [
  {
    role: "AI Product Manager & Product Engineer Intern",
    company: "Highview",
    period: "2026 - present",
    proof: "Hackathon win → continued product",
    summary:
      "Building Studentlytics, an AI education platform spanning product planning, full-stack delivery, computer vision, speech, analytics, and deployment.",
    skills: ["Product engineering", "Computer vision", "AWS"],
  },
  {
    role: "Data Science Intern",
    company: "Box",
    period: "2025",
    proof: "40% less manual processing",
    summary:
      "Built data products for retention analysis, forecasting, stakeholder reporting, and product decision-making.",
    skills: ["PySpark", "BigQuery", "XGBoost"],
  },
  {
    role: "Business Data Analyst",
    company: "Hashroot Limited",
    period: "2023 - 2024",
    proof: "20+ hours saved weekly",
    summary:
      "Combined analytics, internal tooling, and business modeling for customer, pricing, marketing, and operations teams.",
    skills: ["SQL", "Python", "Tableau"],
  },
];

const Career = () => (
  <section className="career-section section-container" id="experience">
    <div className="career-heading">
      <p className="section-label">Experience</p>
      <h2>Built across the full product loop.</h2>
    </div>
    <div className="career-info">
      {experience.map((item, index) => (
        <article className="career-info-box" key={`${item.company}-${item.period}`}>
          <p className="career-period">{item.period}</p>
          <div className="career-meta">
            <p className="career-company">{item.company}</p>
            <h3>{item.role}</h3>
          </div>
          <div className="career-impact">
            <strong><span>{String(index + 1).padStart(2, "0")}</span>{item.proof}</strong>
            <p className="career-summary">{item.summary}</p>
            <div className="career-skills">
              {item.skills.map((skill) => <span key={skill}>{skill}</span>)}
            </div>
          </div>
        </article>
      ))}
    </div>
  </section>
);

export default Career;
