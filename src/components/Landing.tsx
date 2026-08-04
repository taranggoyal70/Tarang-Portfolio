import { MdArrowDownward, MdArrowOutward, MdDescription } from "react-icons/md";
import "./styles/Landing.css";

const productPreviews = [
  {
    name: "Locus",
    note: "65% less context",
    image: "https://tarang-portfolio-pink.vercel.app/project-media/locus.png",
  },
  {
    name: "Morphic",
    note: "Idea → governed PR",
    image: "https://tarang-portfolio-pink.vercel.app/project-media/morphic.png",
  },
  {
    name: "Studentlytics",
    note: "AWS × INRIX winner",
    image: "https://tarang-portfolio-pink.vercel.app/project-media/studentlytics.png",
  },
];

const Landing = () => {
  return (
    <section className="landing-section" id="top">
      <div className="landing-container">
        <div className="landing-copy">
          <p className="landing-eyebrow">AI Product Engineer · Forward-Deployed Builder</p>
          <h1>Tarang Goyal</h1>
          <h2>I turn unclear workflows into shipped AI products.</h2>
          <p className="landing-summary">
            Product judgment, full-stack execution, and measurable evidence—from
            the first user conversation to production.
          </p>
          <p className="landing-now">
            Building at Highview · San Francisco Bay Area · M.S. Business
            Analytics, Santa Clara University
          </p>
          <div className="landing-actions">
            <a href="#work" className="landing-primary-action">
              View case studies <MdArrowDownward aria-hidden="true" />
            </a>
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="landing-secondary-action"
            >
              Résumé <MdDescription aria-hidden="true" />
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

        <div className="landing-evidence" aria-label="Selected product previews">
          <p className="landing-evidence-label">Selected product evidence</p>
          {productPreviews.map((product, index) => (
            <figure className={`evidence-window evidence-window-${index + 1}`} key={product.name}>
              <div className="evidence-browser" aria-hidden="true">
                <span></span><span></span><span></span>
              </div>
              <img src={product.image} alt={`${product.name} product interface`} />
              <figcaption>
                <strong>{product.name}</strong>
                <span>{product.note}</span>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
      <div className="landing-credibility" aria-label="Selected experience and recognition">
        <span>HIGHVIEW</span>
        <span>BOX</span>
        <span>AWS × INRIX</span>
        <span>SANTA CLARA UNIVERSITY</span>
        <a href="mailto:taranggoyal2000@gmail.com">
          Open to AI product &amp; FDE roles <MdArrowOutward aria-hidden="true" />
        </a>
      </div>
    </section>
  );
};

export default Landing;
