// src/App.js
import React from 'react';
import '../App.css';
// import { Canvas, useFrame } from 'react-three-fiber';
import { Canvas, useFrame } from '@react-three/fiber';
import * as THREE from 'three';

const VRModel = () => {
  const modelRef = React.useRef();

  useFrame(() => {
    if (modelRef.current) {
      modelRef.current.rotation.x += 0.005;
      modelRef.current.rotation.y += 0.01;
    }
  });

  return (
    <mesh ref={modelRef}>
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial color="blue" />
      <meshStandardMaterial color="red" />
      <meshStandardMaterial color="green" />
      <meshStandardMaterial color="yellow" />
      <meshStandardMaterial color="purple" />
      <meshStandardMaterial color="orange" />
    </mesh>
  );
};

function Landing() {
  return (
    <div className="App">
      <Canvas>
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} />
        <VRModel />
      </Canvas>
    </div>
  );
}

export default Landing;
