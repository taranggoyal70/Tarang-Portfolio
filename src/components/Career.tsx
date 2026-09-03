import "./styles/Career.css";

const experience = [
  {
    role: "AI Product Engineer",
    company: "Highview",
    period: "2026 - present",
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
      {experience.map((item) => (
        <article className="career-info-box" key={`${item.company}-${item.period}`}>
          <div className="career-meta">
            <p className="career-period">{item.period}</p>
            <h3>{item.role}</h3>
            <p className="career-company">{item.company}</p>
          </div>
          <div className="career-details">
            <p className="career-summary">{item.summary}</p>
            <ul>
              {item.highlights.map((highlight) => (
                <li key={highlight}>{highlight}</li>
              ))}
            </ul>
          </div>
        </article>
      ))}
    </div>
  </section>
);

export default Career;
