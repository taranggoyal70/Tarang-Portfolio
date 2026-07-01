import "./styles/About.css";

const About = () => {
  return (
    <section className="about-section section-container" id="about">
      <div className="about-heading">
        <p className="section-label">Profile</p>
        <h2>One builder, three useful modes.</h2>
      </div>
      <div className="about-me">
        <p className="about-lead">
          I am most useful when a problem crosses boundaries. I can discover the
          workflow, shape the product, build the interface and APIs, connect the
          data, and measure whether the result works.
        </p>
        <p className="about-detail">
          My recent work spans an AI education platform, computer-vision and
          speech workflows, real-time web experiences, predictive analytics,
          and executive decision tools. I hold an M.S. in Business Analytics
          from Santa Clara University and co-authored research on Amazon
          Chronos-2.
        </p>
      </div>
      <div className="about-stats" aria-label="Career highlights">
        <div className="about-stat">
          <span className="about-stat-number">91%</span>
          <span className="about-stat-label">AI vision accuracy</span>
        </div>
        <div className="about-stat">
          <span className="about-stat-number">15%</span>
          <span className="about-stat-label">feature adoption lift</span>
        </div>
        <div className="about-stat">
          <span className="about-stat-number">20+</span>
          <span className="about-stat-label">hours saved weekly</span>
        </div>
        <div className="about-stat">
          <span className="about-stat-number">10%</span>
          <span className="about-stat-label">revenue growth supported</span>
        </div>
      </div>
    </section>
  );
};

export default About;
