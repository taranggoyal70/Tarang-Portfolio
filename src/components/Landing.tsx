import { PropsWithChildren } from "react";
import { MdArrowDownward, MdArrowOutward, MdDescription } from "react-icons/md";
import "./styles/Landing.css";

const Landing = ({ children }: PropsWithChildren) => {
  return (
    <section className="landing-section" id="landingDiv">
      <div className="landing-container">
        <div className="landing-copy">
          <p className="landing-eyebrow">AI Product Engineer · Forward Deployed Builder</p>
          <h1>Tarang Goyal</h1>
          <h2>I turn unclear workflows into AI products people can use.</h2>
          <p className="landing-summary">
            From customer problem and product decision through implementation,
            deployment, and evidence.
          </p>
          <p className="landing-now">
            Currently at Highview · San Francisco Bay Area · M.S. Business
            Analytics, Santa Clara University
          </p>
          <div className="landing-actions">
            <a href="#work" className="landing-primary-action" data-cursor="disable">
              View selected work <MdArrowDownward aria-hidden="true" />
            </a>
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="landing-secondary-action"
              data-cursor="disable"
            >
              Resume <MdDescription aria-hidden="true" />
            </a>
          </div>
          <div className="landing-proof" aria-label="Selected impact">
            <div>
              <strong>1st</strong>
              <span>AWS × INRIX</span>
            </div>
            <div>
              <strong>40%</strong>
              <span>less manual processing at Box</span>
            </div>
            <div>
              <strong>65%</strong>
              <span>median context reduction in Locus</span>
            </div>
          </div>
        </div>

        <div className="landing-status">
          <span className="landing-status-dot" aria-hidden="true"></span>
          <p>
            Open to AI product engineering and FDE opportunities across the U.S.
          </p>
          <a href="mailto:taranggoyal2000@gmail.com" aria-label="Email Tarang">
            <MdArrowOutward aria-hidden="true" />
          </a>
        </div>
      </div>
      {children}
    </section>
  );
};

export default Landing;
