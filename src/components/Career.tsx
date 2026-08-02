import "./styles/Career.css";

const experience = [
  {
    role: "AI Product Manager & Product Engineer Intern",
    company: "Highview",
    period: "2026 - present",
    proof: "Hackathon win → continued product",
    summary:
      "Building Studentlytics, an AI education platform spanning product planning, full-stack delivery, computer vision, speech, analytics, and deployment.",
    highlights: [
      "Shipped role-based staff, student, course, session, profile, and analytics workflows with React, TypeScript, Vite, and Tailwind.",
      "Built FastAPI, OpenCV, Whisper, and AWS Rekognition workflows that process class recordings with 91% face-match accuracy.",
      "Connected Supabase authentication, database-backed workflows, Vercel, and AWS Lambda/API Gateway analytics endpoints.",
    ],
  },
  {
    role: "Data Science Intern",
    company: "Box",
    period: "2025",
    proof: "40% less manual processing",
    summary:
      "Built data products for retention analysis, forecasting, stakeholder reporting, and product decision-making.",
    highlights: [
      "Reduced manual processing by 40% with scalable PySpark and SQL data pipelines across four cross-functional teams.",
      "Modeled churn and forecast-versus-actual performance across 100K+ records and 10K+ accounts using BigQuery and XGBoost.",
      "Created Tableau and Power BI reporting that contributed to a 15% increase in feature adoption.",
    ],
  },
  {
    role: "Business Data Analyst",
    company: "Hashroot Limited",
    period: "2023 - 2024",
    proof: "20+ hours saved weekly",
    summary:
      "Combined analytics, internal tooling, and business modeling for customer, pricing, marketing, and operations teams.",
    highlights: [
      "Used SQL and Python segmentation to surface upsell opportunities that supported 10% revenue growth.",
      "Automated Tableau reporting across sales, marketing, and operations, saving more than 20 hours each week.",
      "Connected customer, pricing, and operations data into reusable decision workflows for cross-functional teams.",
    ],
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
        <details
          className="career-info-box"
          key={`${item.company}-${item.period}`}
          open={index === 0}
        >
          <summary data-cursor="disable">
            <p className="career-period">{item.period}</p>
            <div className="career-meta">
              <p className="career-company">{item.company}</p>
              <h3>{item.role}</h3>
            </div>
            <strong>{item.proof}</strong>
            <span aria-hidden="true">+</span>
          </summary>
          <div className="career-details">
            <p className="career-summary">{item.summary}</p>
            <ul>
              {item.highlights.map((highlight) => (
                <li key={highlight}>{highlight}</li>
              ))}
            </ul>
          </div>
        </details>
      ))}
    </div>
  </section>
);

export default Career;
