import { useEffect } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import HoverLinks from "./HoverLinks";
import { gsap } from "gsap";
import { ScrollSmoother } from "gsap/ScrollSmoother";
import "./styles/Navbar.css";

gsap.registerPlugin(ScrollSmoother, ScrollTrigger);
export let smoother: ScrollSmoother;

const Navbar = () => {
  useEffect(() => {
    smoother = ScrollSmoother.create({
      wrapper: "#smooth-wrapper",
      content: "#smooth-content",
      smooth: 1.7,
      speed: 1.7,
      effects: true,
      autoResize: true,
      ignoreMobileResize: true,
    });

    smoother.scrollTop(0);
    smoother.paused(true);

    const links = document.querySelectorAll(".header ul a");
    const handleLinkClick = (event: Event) => {
      const element = event.currentTarget as HTMLAnchorElement;
      const section = element.getAttribute("data-href");
      if (window.innerWidth > 1024 && section) {
        event.preventDefault();
        smoother.scrollTo(section, true, "top top");
      }
    };
    links.forEach((element) => element.addEventListener("click", handleLinkClick));

    const handleResize = () => {
      ScrollSmoother.refresh(true);
    };
    window.addEventListener("resize", handleResize);

    return () => {
      links.forEach((element) =>
        element.removeEventListener("click", handleLinkClick)
      );
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return (
    <>
      <div className="header">
        <a href="/#" className="navbar-title" data-cursor="disable">
          TG
        </a>
        <a
          href="mailto:taranggoyal2000@gmail.com"
          className="navbar-connect"
          data-cursor="disable"
        >
          taranggoyal2000@gmail.com
        </a>
        <ul>
          <li>
            <a data-href="#work" href="#work">
              <HoverLinks text="WORK" />
            </a>
          </li>
          <li>
            <a data-href="#experience" href="#experience">
              <HoverLinks text="EXPERIENCE" />
            </a>
          </li>
          <li>
            <a data-href="#how" href="#how">
              <HoverLinks text="HOW I WORK" />
            </a>
          </li>
          <li>
            <a data-href="#contact" href="#contact">
              <HoverLinks text="CONTACT" />
            </a>
          </li>
          <li className="navbar-resume-item">
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              data-cursor="disable"
            >
              RÉSUMÉ
            </a>
          </li>
        </ul>
      </div>

      <div className="nav-fade"></div>
    </>
  );
};

export default Navbar;
