import React, { useState, useEffect } from 'react';
import '../App.css'
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';

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
      const material = new THREE.MeshBasicMaterial({ color: 0xffffff });

  
      // Create a box mesh
      const box = new THREE.Mesh(geometry, material);
      scene.add(box);
  
      // Add lighting
      const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
      scene.add(ambientLight);
  
      // Add controls

      const controls = new OrbitControls(camera, renderer.domElement);
      controls.enableZoom=false;
      controls.update();
  
      // Animation loop
      const animate = () => {
        requestAnimationFrame(animate);
  
        // Rotate the box
        box.rotation.x += 0.01;
  
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


const Ambassador = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY >760) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className={`flex flex-col items-center justify-center h-screen ${scrolled ? 'animate-ping duration-75 ease-in-out' : ''}`}>
      <h1 className="text-4xl text-white font-semibold mb-4">Are you ready?</h1>
      <p className="text-lg text-white text-gray-600">To be a part of the biggest tech fest in South India</p>
      <p className="text-lg text-white text-gray-600 mb-8">Get ready for an amazing experience!</p>
      <button 
        style={{ background: 'linear-gradient(298.74deg,#e91dfb 7.67%,#632dff 28.63%,#359eff 61.36%,#1bffe4 83.87%)' }}
        className="px-6 py-3 text-white font-semibold text-lg rounded">
        Sign Up
      </button>
    </div>
  );
};

export default Ambassador;
