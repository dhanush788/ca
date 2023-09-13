import React, { useState, useEffect } from 'react';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import '../App.css';


const Box = () => {
    useEffect(() => {
      // Create a scene
      const scene = new THREE.Scene();
  
      // Create a camera
      const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
      camera.position.z = 5;
  
      // Create a renderer
      const renderer = new THREE.WebGLRenderer();
      renderer.setSize(window.innerWidth, window.innerHeight);
      document.body.appendChild(renderer.domElement);
  
      // Create a box geometry
      const geometry = new THREE.BoxGeometry();
      const material = new THREE.MeshBasicMaterial({ color: 0x000000 });
  
      // Create a box mesh
      const box = new THREE.Mesh(geometry, material);
      scene.add(box);
  
      // Add lighting
      const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
      scene.add(ambientLight);
  
      // Add controls
      const controls = new OrbitControls(camera, renderer.domElement);
      controls.update();
  
      // Animation loop
      const animate = () => {
        requestAnimationFrame(animate);
  
        // Rotate the box
        box.rotation.x += 0.01;
        box.rotation.y += 0.01;
  
        // Render the scene
        renderer.render(scene, camera);
      };
  
      animate();
  
      return () => {
        // Clean up
        controls.dispose();
        document.body.removeChild(renderer.domElement);
      };
    }, []);
  
    return null; // Return null as the component renders Three.js content directly
  };
  