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
              <h3>2023</h3>
            </div>
            <p>
              Analyzed product and customer data using SQL, Python, and NLP to uncover upsell drivers, increasing revenue by 10%.
              Automated Tableau dashboards across 3 departments, reducing manual reporting by 25% and enabling real-time decisions.
              Conducted pricing A/B tests and consolidated disparate datasets into a unified analytics platform.
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
              Designed ETL pipelines using Python and SQL, cutting data latency by 40% and enabling near real-time dashboards.
              Built Tableau dashboards for 4+ teams, accelerating product feedback loops and increasing feature adoption by 15%.
              Reduced churn by 12% by analyzing 10M+ customer records using cohort analysis and retention modeling.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Graduate Teaching Assistant</h4>
                <h5>Santa Clara University</h5>
              </div>
              <h3>NOW</h3>
            </div>
            <p>
              Supporting instruction across two graduate-level courses (Python-based analytics + MBA operations), assisting 100+ students
              with analytics, coding, and quantitative problem-solving. Holding office hours and grading assignments using detailed rubrics,
              providing constructive feedback that improved student understanding and course outcomes.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
