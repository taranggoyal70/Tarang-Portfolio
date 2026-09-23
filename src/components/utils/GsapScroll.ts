import * as THREE from "three";

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

  character.rotation.y = 0;
  camera.position.z = 24.7;
}

export function setAllTimeline() {}
