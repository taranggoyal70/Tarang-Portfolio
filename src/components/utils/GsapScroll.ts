import * as THREE from "three";
import gsap from "gsap";

export function setCharTimeline(
  character: THREE.Object3D<THREE.Object3DEventMap> | null,
  camera: THREE.PerspectiveCamera
) {
  if (!character) {
    return;
  }

  const monitor = character.getObjectByName("Plane004");
  monitor?.children.forEach((child) => {
    if (child instanceof THREE.Mesh) {
      const materials = Array.isArray(child.material)
        ? child.material
        : [child.material];
      materials.forEach((material) => {
        material.transparent = true;
        material.opacity = 0;
        material.needsUpdate = true;
      });
    }
  });

  const screenLight = character.getObjectByName("screenlight");
  if (screenLight instanceof THREE.Mesh) {
    const materials = Array.isArray(screenLight.material)
      ? screenLight.material
      : [screenLight.material];
    materials.forEach((material) => {
      material.transparent = true;
      material.opacity = 0;
      material.needsUpdate = true;
    });
  }

  if (window.innerWidth <= 1024) {
    return;
  }

  const tl1 = gsap.timeline({
    scrollTrigger: {
      trigger: ".landing-section",
      start: "top top",
      end: "bottom top",
      scrub: true,
      invalidateOnRefresh: true,
    },
  });

  tl1
    .fromTo(character.rotation, { y: 0 }, { y: 0.45, duration: 1 }, 0)
    .to(camera.position, { z: 22 }, 0)
    .fromTo(".character-model", { x: 0 }, { x: "-12%", duration: 1 }, 0)
    .to(".landing-container", { opacity: 0, y: "18%", duration: 0.7 }, 0);
}

export function setAllTimeline() {
  if (!document.querySelector(".career-timeline")) {
    return;
  }

  const careerTimeline = gsap.timeline({
    scrollTrigger: {
      trigger: ".career-section",
      start: "top 30%",
      end: "100% center",
      scrub: true,
      invalidateOnRefresh: true,
    },
  });
  careerTimeline
    .fromTo(
      ".career-timeline",
      { maxHeight: "10%" },
      { maxHeight: "100%", duration: 0.5 },
      0
    )

    .fromTo(
      ".career-timeline",
      { opacity: 0 },
      { opacity: 1, duration: 0.1 },
      0
    )
    .fromTo(
      ".career-info-box",
      { opacity: 0 },
      { opacity: 1, stagger: 0.1, duration: 0.5 },
      0
    )
    .fromTo(
      ".career-dot",
      { animationIterationCount: "infinite" },
      {
        animationIterationCount: "1",
        delay: 0.3,
        duration: 0.1,
      },
      0
    );

  if (window.innerWidth > 1024) {
    careerTimeline.fromTo(
      ".career-section",
      { y: 0 },
      { y: "20%", duration: 0.5, delay: 0.2 },
      0
    );
  } else {
    careerTimeline.fromTo(
      ".career-section",
      { y: 0 },
      { y: 0, duration: 0.5, delay: 0.2 },
      0
    );
  }
}
