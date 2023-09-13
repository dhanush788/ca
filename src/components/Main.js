import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { VRMLLoader } from 'three/examples/jsm/loaders/VRMLLoader.js';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import modelpath from '../wrl/model.wrl';
import '../App.css'; // Import your CSS file

const Main = () => {
  useEffect(() => {
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    camera.position.set(0, 0, 0); // Set the camera position above the center
    const lookAtPoint = new THREE.Vector3(0, 60, 0);
    camera.lookAt(lookAtPoint);

    const initialCenter = new THREE.Vector3(0, 60, 0);
    camera.lookAt(initialCenter);
    
    const renderer = new THREE.WebGLRenderer();
    renderer.setSize(window.innerWidth, window.innerHeight);

    const canvasElement = renderer.domElement;
    canvasElement.classList.add('BackgroundCanvas');

    document.body.appendChild(canvasElement);

    const loader = new VRMLLoader();
    loader.load(modelpath, (vrmlScene) => {
      vrmlScene.rotation.y = Math.PI;
      scene.add(vrmlScene);

      const ambientLight = new THREE.AmbientLight(0x404040);
      scene.add(ambientLight);

      const directionalLight = new THREE.DirectionalLight(0xffffff);
      directionalLight.position.set(1, 1, 1).normalize();
      scene.add(directionalLight);

      // Controls with zoom disabled
      const controls = new OrbitControls(camera, canvasElement);
      controls.enableZoom = false; // Disable zooming
      // controls.enableRotate = false; // Disable rotation

      const animate = () => {
        requestAnimationFrame(animate);
        vrmlScene.rotation.y += -0.0005; // Adjust the rotation speed
        controls.update();
        renderer.render(scene, camera);
      };
      animate();
    });

    const handleResize = () => {
      const newWidth = window.innerWidth;
      const newHeight = window.innerHeight;

      camera.aspect = newWidth / newHeight;
      camera.updateProjectionMatrix();

      renderer.setSize(newWidth, newHeight);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      document.body.removeChild(canvasElement);
    };
  }, []);


  return null
}

export default Main;
