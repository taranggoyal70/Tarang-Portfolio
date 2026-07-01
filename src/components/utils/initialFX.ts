import { SplitText } from "gsap/SplitText";
import gsap from "gsap";
import { smoother } from "../Navbar";

export function initialFX() {
  document.body.style.overflowY = "auto";
  smoother.paused(false);
  document.getElementsByTagName("main")[0].classList.add("main-active");
  gsap.to("body", {
    backgroundColor: "#0a0e17",
    duration: 0.5,
    delay: 1,
  });

  const landingText = new SplitText(".landing-copy h1", {
    type: "chars,lines",
    linesClass: "split-line",
  });
  gsap.fromTo(
    landingText.chars,
    { opacity: 0, y: 32 },
    {
      opacity: 1,
      duration: 0.65,
      ease: "power3.inOut",
      y: 0,
      stagger: 0.02,
      delay: 0.15,
    }
  );

  gsap.fromTo(
    [
      ".landing-eyebrow",
      ".landing-copy h2",
      ".landing-summary",
      ".landing-actions",
      ".landing-proof",
      ".landing-status",
    ],
    { opacity: 0, y: 24 },
    {
      opacity: 1,
      duration: 0.7,
      ease: "power2.out",
      y: 0,
      stagger: 0.08,
      delay: 0.35,
    }
  );
  gsap.fromTo(
    [".header", ".nav-fade"],
    { opacity: 0 },
    {
      opacity: 1,
      duration: 1.2,
      ease: "power1.inOut",
      delay: 0.1,
    }
  );
}
