import React, { useEffect } from 'react';
import * as THREE from 'three';

const Round = () => {
  useEffect(() => {
    let camera, scene, renderer,mesh,mesh2;

    const init = () => {
      renderer = new THREE.WebGLRenderer({ alpha: true });
      renderer.setSize(window.innerWidth / 2, window.innerWidth / 2);
      document.body.appendChild(renderer.domElement);
      //show canvas in the top left corner
      renderer.domElement.style.position = 'absolute';
      renderer.domElement.style.top = '0px';
      renderer.domElement.style.left = '0px';

      scene = new THREE.Scene();
      camera = new THREE.OrthographicCamera(-10, 10, 10, -10, -10, 10);


      // Create a canvas with text
      const canvas= document.createElement('canvas');
      const canvas2 = document.createElement('canvas');
      const context = canvas.getContext('2d');
      const context2 = canvas2.getContext('2d');
      canvas.width = 1024;
      canvas2.width = 1024;
      canvas.height = 512;
      canvas2.height = 512;

      context.font = 'bold 75px Arial'; // Adjust the font size as needed
      context2.font = 'bold 75px Arial'; // Adjust the font size as needed
      context.fillStyle = 'white';
      context2.fillStyle = 'white';
      context.fillText('DISHNA   DISHNA  DISHNA', 75, 187);
      context.fillText('DISHNA   DISHNA  DISHNA', 75, 362);
      context2.fillText('NA  DISHNA   DISHNA  DISH', 75, 100);
      context2.fillText('DISHNA   DISHNA  DISHNA', 75, 275);
      context2.fillText('SHNA  DISHNA   DISHNA  DI', 75, 450);

      // Load the canvas as a texture using TextureLoader
      const texture = new THREE.CanvasTexture(canvas);
      const texture2 = new THREE.CanvasTexture(canvas2);

      // Create a sphere geometry
        const geometry = new THREE.SphereGeometry(5, 20, 20);
        const material = new THREE.MeshBasicMaterial({
          map: texture,
          transparent: true,
          alphaTest: 0.5,
        });
        const material2 = new THREE.MeshBasicMaterial({
          map: texture2,
          transparent: true,
          alphaTest: 0.5,


        });
        mesh = new THREE.Mesh(geometry, material);
        mesh2 = new THREE.Mesh(geometry, material2);
        scene.add(mesh);
        scene.add(mesh2);
    };

    const animate = () => {
      requestAnimationFrame(animate);
      render();
    };

    const render = () => {
      renderer.render(scene, camera);
      mesh.rotation.y += 0.005;
      mesh2.rotation.y += -0.005;
    };

    init();
    animate();
  }, []);

  return null
};

export default Round;
