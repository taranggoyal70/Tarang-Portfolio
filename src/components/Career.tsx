import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          My career <span>&</span>
          <br /> experience
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Business Data Analyst</h4>
                <h5>Hashroot Limited</h5>
              </div>
              <h3>2023-24</h3>
            </div>
            <p>
              Used SQL and Python for data cleaning, modeling, and customer segmentation, surfacing upsell opportunities that grew revenue by 10%.
              Automated Tableau dashboards across sales, marketing, and operations, eliminating 20+ hours of weekly reporting.
              Analyzed pricing experiments and user behavior to improve pricing alignment and support quarter-over-quarter GMV growth.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Data Science Intern</h4>
                <h5>Box</h5>
              </div>
              <h3>2025</h3>
            </div>
            <p>
              Built scalable PySpark and SQL pipelines for wrangling, modeling, and statistical analysis, reducing manual processing by 40% across four cross-functional teams.
              Developed churn prediction workflows across 100K+ records and 10K+ accounts using BigQuery, XGBoost, and feature engineering.
              Created Tableau and Power BI dashboards for stakeholder analysis, increasing feature adoption by 15%.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>AI Product Manager & Product Engineer</h4>
                <h5>Highview</h5>
              </div>
              <h3>NOW</h3>
            </div>
            <p>
              Built and deployed Studentlytics using React, TypeScript, Vite, and Tailwind, supporting role-based staff, student, and intern workflows.
              Developed AI attendance and engagement workflows using FastAPI, Python, OpenCV, Whisper, and AWS Rekognition with 91% face-matching accuracy.
              Integrated Supabase auth, Vercel deployment, and AWS Lambda/API Gateway chatbot endpoints for production analytics.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
