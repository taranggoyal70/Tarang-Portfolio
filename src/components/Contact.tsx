import { MdArrowOutward, MdCopyright } from "react-icons/md";
import "./styles/Contact.css";

const Contact = () => {
  return (
    <div className="contact-section section-container" id="contact">
      <div className="contact-container">
        <h3>Contact</h3>
        <div className="contact-flex">
          <div className="contact-box">
            <h4>Email</h4>
            <p>
              <a href="mailto:taranggoyal2000@gmail.com" data-cursor="disable">
                taranggoyal2000@gmail.com
              </a>
            </p>
            <h4>Education</h4>
            <p>MS in Business Analytics - Santa Clara University</p>
          </div>
          <div className="contact-box">
            <h4>Social</h4>
            <a
              href="https://linkedin.com/in/tarang-goyal"
              target="_blank"
              data-cursor="disable"
              className="contact-social"
            >
              LinkedIn <MdArrowOutward />
            </a>
            <a
              href="tel:+16404448525"
              data-cursor="disable"
              className="contact-social"
            >
              Phone: +1 640 444 8525 <MdArrowOutward />
            </a>
            <h4 style={{ marginTop: '1rem' }}>Location</h4>
            <p>Santa Clara, CA, United States</p>
          </div>
          <div className="contact-box">
            <h2>
              Portfolio <br /> by <span>Tarang Goyal</span>
            </h2>
            <h5>
              <MdCopyright /> 2025
            </h5>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
