import "./styles/About.css";

const About = () => {
  return (
    <div className="about-section" id="about">
      <div className="about-me">
        <h3 className="title">About Me</h3>
        <p className="para">
          AI Product Engineer with an M.S. in Business Analytics from Santa Clara University.
          I build and ship AI-powered products end-to-end, from computer vision pipelines and AI agents
          to full-stack platforms deployed on AWS and Vercel. Co-author of an arXiv research paper
          on time-series forecasting with Amazon Chronos-2.
        </p>
        <div className="about-stats">
          <div className="about-stat">
            <span className="about-stat-number">91%</span>
            <span className="about-stat-label">Face-Match Accuracy</span>
          </div>
          <div className="about-stat">
            <span className="about-stat-number">4x</span>
            <span className="about-stat-label">Hackathon Winner</span>
          </div>
          <div className="about-stat">
            <span className="about-stat-number">100K+</span>
            <span className="about-stat-label">Records Analyzed</span>
          </div>
          <div className="about-stat">
            <span className="about-stat-number">40%</span>
            <span className="about-stat-label">Processing Reduced</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
