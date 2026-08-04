import { MdArrowOutward, MdCopyright, MdMailOutline } from "react-icons/md";
import "./styles/Contact.css";

const Contact = () => {
  return (
    <footer className="contact-section" id="contact">
      <div className="contact-container section-container">
        <div className="contact-cta">
          <p className="section-label">Contact</p>
          <h2>Have a hard product problem?</h2>
          <p>
            I’m exploring AI product engineering and forward-deployed roles with
            teams that care about real users, strong systems, and shipped outcomes.
          </p>
          <a
            href="mailto:taranggoyal2000@gmail.com"
            className="contact-email"
          >
            <MdMailOutline aria-hidden="true" /> Start a conversation
          </a>
        </div>
        <div className="contact-links">
          <a
            href="https://linkedin.com/in/tarang-goyal"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn <MdArrowOutward aria-hidden="true" />
          </a>
          <a
            href="https://github.com/taranggoyal70"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub <MdArrowOutward aria-hidden="true" />
          </a>
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
          >
            Resume <MdArrowOutward aria-hidden="true" />
          </a>
        </div>
        <div className="contact-footer">
          <p>Santa Clara, CA · Open to Bay Area, New York, and U.S. opportunities</p>
          <div>
            <span>
              <MdCopyright aria-hidden="true" /> 2026 Tarang Goyal
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Contact;
