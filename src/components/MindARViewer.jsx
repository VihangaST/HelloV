import React, { useEffect } from "react";
import { MindARThree } from "mind-ar/dist/mindar-image-three.prod.js";
import * as THREE from "three";

const MindARViewer = () => {
  useEffect(() => {
    const start = async () => {
      // Setup MindAR
      const mindarThree = new MindARThree({
        container: document.querySelector("#ar-container"),
        imageTargetSrc: "/targets/birthday.mind",
      });

      const { renderer, scene, camera } = mindarThree;

      // Add light
      const light = new THREE.HemisphereLight(0xffffff, 0xbbbbff, 1);
      scene.add(light);

      // Load 3D model (optional, we’ll use a box for demo)
      const geometry = new THREE.BoxGeometry(0.5, 0.5, 0.5);
      const material = new THREE.MeshStandardMaterial({ color: 0xff69b4 });
      const cube = new THREE.Mesh(geometry, material);

      // Create anchor (where model appears)
      const anchor = mindarThree.addAnchor(0);
      anchor.group.add(cube);

      await mindarThree.start();
      renderer.setAnimationLoop(() => {
        cube.rotation.y += 0.02;
        renderer.render(scene, camera);
      });
    };
    start();
  }, []);

  return (
    <div id="ar-container" style={{ width: "100%", height: "100vh" }}></div>
  );
};

export default MindARViewer;
