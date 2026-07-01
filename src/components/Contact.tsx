import { useEffect, useState } from "react";
import { MdArrowOutward, MdCopyright, MdMailOutline } from "react-icons/md";
import { supabase } from "../lib/supabase";
import "./styles/Contact.css";

const Contact = () => {
  const [views, setViews] = useState<number | null>(null);

  useEffect(() => {
    const trackVisit = async () => {
      try {
        const { data } = await supabase.rpc("increment_site_views");
        if (typeof data === "number") {
          setViews(data);
        }
      } catch {
        // silently fail — counter is non-critical
      }
    };

    trackVisit();
  }, []);

  return (
    <footer className="contact-section" id="contact">
      <div className="contact-container section-container">
        <div className="contact-cta">
          <p className="section-label">Contact</p>
          <h2>Have a hard problem that needs a builder?</h2>
          <p>
            I am open to AI product engineering, forward deployed engineering,
            full-stack, and technical product opportunities.
          </p>
          <a
            href="mailto:taranggoyal2000@gmail.com"
            className="contact-email"
            data-cursor="disable"
          >
            <MdMailOutline aria-hidden="true" /> taranggoyal2000@gmail.com
          </a>
        </div>
        <div className="contact-links">
          <a
            href="https://linkedin.com/in/tarang-goyal"
            target="_blank"
            rel="noopener noreferrer"
            data-cursor="disable"
          >
            LinkedIn <MdArrowOutward aria-hidden="true" />
          </a>
          <a
            href="https://github.com/taranggoyal70"
            target="_blank"
            rel="noopener noreferrer"
            data-cursor="disable"
          >
            GitHub <MdArrowOutward aria-hidden="true" />
          </a>
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            data-cursor="disable"
          >
            Resume <MdArrowOutward aria-hidden="true" />
          </a>
        </div>
        <div className="contact-footer">
          <p>Santa Clara, CA · Open to Bay Area, New York, and U.S. opportunities</p>
          <div>
            {views !== null && <span>{views.toLocaleString()} visits</span>}
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
