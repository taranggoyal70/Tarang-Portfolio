import { useState, useCallback } from "react";
import "./styles/Work.css";
import { MdArrowBack, MdArrowForward, MdArrowOutward } from "react-icons/md";

const projects = [
  {
    title: "AWS X INRIX - Studentlytics",
    category: "1st Place Winner - AI Video Analytics Platform",
    tools: "AWS Lambda, Step Functions, S3, Rekognition, DynamoDB, React, TypeScript",
    emoji: "🎓",
    gradient: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
    highlight: "91% Accuracy",
    link: "https://devpost.com/software/studentlytics",
  },
  {
    title: "YC Stack Auth - Crowd Symphony",
    category: "1st Place Winner - Real-Time Audience Music",
    tools: "Next.js, MediaPipe Hands, Socket.IO, Web Audio API, QR Codes",
    emoji: "🎵",
    gradient: "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)",
    highlight: "Real-Time Sync",
    link: "https://github.com/taranggoyal70/crowd-symphony",
  },
  {
    title: "A10 Networks AI Hackathon",
    category: "1st Place Winner - AI Product Strategy",
    tools: "AI Security, Prompt Injection Defense, GTM, ARR Modeling, OKRs",
    emoji: "🛡️",
    gradient: "linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)",
    highlight: "Enterprise AI",
    link: "https://github.com/taranggoyal70/a10-ai-firewall-hackathon-2025",
  },
  {
    title: "SCU Analytical Showdown",
    category: "Winner - Decision-Support Analytics Product",
    tools: "Sales Forecasting, Customer Segmentation, Campaign ROI, Executive Dashboards",
    emoji: "📊",
    gradient: "linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)",
    highlight: "Top Recognition",
    link: "https://github.com/taranggoyal70/SCU-Analytical-Showdown-Winner-2025",
  },
  {
    title: "Chronos-2 Research Publication",
    category: "arXiv Paper - Time-Series Forecasting",
    tools: "Amazon Chronos-2, Multivariate Forecasting, RMSE, MAPE",
    emoji: "📄",
    gradient: "linear-gradient(135deg, #fa709a 0%, #fee140 100%)",
    highlight: "Published Paper",
    link: "https://arxiv.org/pdf/2605.21504",
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
                    <div className="carousel-info">
                      <div className="carousel-number">
                        <h3>0{index + 1}</h3>
                      </div>
                      <div className="carousel-details">
                        <h4>{project.title}</h4>
                        <p className="carousel-category">
                          {project.category}
                        </p>
                        <div className="carousel-tools">
                          <span className="tools-label">Tools & Features</span>
                          <p>{project.tools}</p>
                        </div>
                      </div>
                    </div>
                    <div className="carousel-image-wrapper">
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="project-card-link"
                        data-cursor="disable"
                      >
                        <div
                          className="project-card"
                          style={{ background: project.gradient }}
                        >
                          <span className="project-card-emoji">{project.emoji}</span>
                          <span className="project-card-highlight">{project.highlight}</span>
                          <span className="project-card-github">
                            {project.link.includes("arxiv") ? "Read Paper" : project.link.includes("devpost") ? "View on Devpost" : "View on GitHub"} <MdArrowOutward />
                          </span>
                        </div>
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
