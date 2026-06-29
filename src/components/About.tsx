import "./styles/About.css";

const About = () => {
  return (
    <div className="about-section" id="about">
      <div className="about-me">
        <h3 className="title">About Me</h3>
        <p className="para">
          AI Product Engineer with an M.S. in Business Analytics from Santa Clara University (GPA: 3.7).
          I build and ship AI-powered products end-to-end — from computer vision pipelines and AI agents to full-stack platforms and data systems.
          Currently at Highview, where I built Studentlytics, an AI education platform with 91% face-matching attendance accuracy using OpenCV, AWS Rekognition, and FastAPI.
          Previously at Box, where I built PySpark/SQL pipelines reducing manual processing by 40% and churn prediction models across 100K+ records.
          4x hackathon winner (AWS x INRIX, YC Stack Auth, A10 Networks, SCU Analytical Showdown) and co-author of an arXiv research paper on time-series forecasting with Amazon Chronos-2.
        </p>
      </div>
    </div>
  );
};

export default About;
