import { useState, useCallback } from "react";
import "./styles/Work.css";
import { MdArrowBack, MdArrowForward, MdArrowOutward } from "react-icons/md";

const projects = [
  {
    title: "AWS X INRIX - Studentlytics",
    category: "1st Place Winner",
    description: "AI video analytics platform that matches student faces, calculates attendance and engagement scores, and stores results. Built in 24 hours.",
    tools: ["AWS Lambda", "Step Functions", "S3", "Rekognition", "DynamoDB", "React"],
    stat: "91%",
    statLabel: "accuracy",
    link: "https://devpost.com/software/studentlytics",
    linkLabel: "Devpost",
  },
  {
    title: "YC Stack Auth - Crowd Symphony",
    category: "1st Place Winner",
    description: "Real-time audience music platform using hand tracking to sync gesture-driven volume changes across devices via QR-code joining.",
    tools: ["Next.js", "MediaPipe Hands", "Socket.IO", "Web Audio API"],
    stat: "Real-Time",
    statLabel: "sync",
    link: "https://github.com/taranggoyal70/crowd-symphony",
    linkLabel: "GitHub",
  },
  {
    title: "A10 Networks AI Hackathon",
    category: "1st Place Winner",
    description: "Product strategy and technical architecture for an AI workload-protection platform covering prompt-injection defense, data-leakage prevention, and agent guardrails.",
    tools: ["AI Security", "PRD", "GTM Strategy", "ARR Modeling", "OKRs"],
    stat: "1st",
    statLabel: "place",
    link: "https://github.com/taranggoyal70/a10-ai-firewall-hackathon-2025",
    linkLabel: "GitHub",
  },
  {
    title: "SCU Analytical Showdown",
    category: "Winner",
    description: "Decision-support analytics product for Nazava using Shopee marketplace data: sales forecasting, customer segmentation, campaign ROI, and executive dashboards.",
    tools: ["Python", "Forecasting", "Segmentation", "ROI Modeling"],
    stat: "Top",
    statLabel: "recognition",
    link: "https://github.com/taranggoyal70/SCU-Analytical-Showdown-Winner-2025",
    linkLabel: "GitHub",
  },
  {
    title: "Chronos-2 Research Publication",
    category: "arXiv Paper",
    description: "Co-authored paper evaluating Amazon Chronos-2 for multivariate economic and financial forecasting across Magnificent 7 equities and U.S. Treasury rates.",
    tools: ["Amazon Chronos-2", "Time-Series", "RMSE", "MAPE"],
    stat: "arXiv",
    statLabel: "published",
    link: "https://arxiv.org/pdf/2605.21504",
    linkLabel: "Read Paper",
  },
];

const Work = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const goToSlide = useCallback(
    (index: number) => {
      if (isAnimating) return;
      setIsAnimating(true);
      setCurrentIndex(index);
      setTimeout(() => setIsAnimating(false), 500);
    },
    [isAnimating]
  );

  const goToPrev = useCallback(() => {
    const newIndex =
      currentIndex === 0 ? projects.length - 1 : currentIndex - 1;
    goToSlide(newIndex);
  }, [currentIndex, goToSlide]);

  const goToNext = useCallback(() => {
    const newIndex =
      currentIndex === projects.length - 1 ? 0 : currentIndex + 1;
    goToSlide(newIndex);
  }, [currentIndex, goToSlide]);

  return (
    <div className="work-section" id="work">
      <div className="work-container section-container">
        <h2>
          Hackathon <span>Wins & Projects</span>
        </h2>

        <div className="carousel-wrapper">
          {/* Navigation Arrows */}
          <button
            className="carousel-arrow carousel-arrow-left"
            onClick={goToPrev}
            aria-label="Previous project"
            data-cursor="disable"
          >
            <MdArrowBack />
          </button>
          <button
            className="carousel-arrow carousel-arrow-right"
            onClick={goToNext}
            aria-label="Next project"
            data-cursor="disable"
          >
            <MdArrowForward />
          </button>

          {/* Slides */}
          <div className="carousel-track-container">
            <div
              className="carousel-track"
              style={{
                transform: `translateX(-${currentIndex * 100}%)`,
              }}
            >
              {projects.map((project, index) => (
                <div className="carousel-slide" key={index}>
                  <div className="carousel-content">
                    <div className="carousel-left">
                      <div className="carousel-number">
                        <h3>0{index + 1}</h3>
                      </div>
                      <div className="carousel-stat">
                        <span className="carousel-stat-value">{project.stat}</span>
                        <span className="carousel-stat-label">{project.statLabel}</span>
                      </div>
                    </div>
                    <div className="carousel-right">
                      <span className="carousel-badge">{project.category}</span>
                      <h4>{project.title}</h4>
                      <p className="carousel-description">{project.description}</p>
                      <div className="carousel-tools-row">
                        {project.tools.map((tool, i) => (
                          <span className="carousel-tool-tag" key={i}>{tool}</span>
                        ))}
                      </div>
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="carousel-link"
                        data-cursor="disable"
                      >
                        {project.linkLabel} <MdArrowOutward />
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Dot Indicators */}
          <div className="carousel-dots">
            {projects.map((_, index) => (
              <button
                key={index}
                className={`carousel-dot ${index === currentIndex ? "carousel-dot-active" : ""
                  }`}
                onClick={() => goToSlide(index)}
                aria-label={`Go to project ${index + 1}`}
                data-cursor="disable"
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Work;
