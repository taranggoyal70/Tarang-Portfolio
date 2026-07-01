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
          <h2>I turn ambiguous problems into deployed AI products.</h2>
          <p className="landing-summary">
            I work across product discovery, full-stack engineering, AI systems,
            and analytics to take useful ideas from a conversation to production.
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
              <strong>91%</strong>
              <span>face-match accuracy</span>
            </div>
            <div>
              <strong>4</strong>
              <span>award-winning builds</span>
            </div>
            <div>
              <strong>100K+</strong>
              <span>records analyzed</span>
            </div>
          </div>
        </div>

        <div className="landing-status">
          <span className="landing-status-dot" aria-hidden="true"></span>
          <p>
            Open to opportunities in the Bay Area, New York, and across the U.S.
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
