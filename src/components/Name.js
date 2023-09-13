import React, { useEffect } from 'react';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';

const RotatingCarousel = () => {
  useEffect(() => {
    const scene = new THREE.Scene();

    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    camera.position.set(2, 0, 5);

    const renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    //make its position absolute and center it
    renderer.domElement.style.position = 'absolute';
    renderer.domElement.style.top = '50%';
    renderer.domElement.style.left = '50%';
    renderer.domElement.style.transform = 'translate(-50%, -50%)';
    //there are two canvas remove one canvas


    document.body.appendChild(renderer.domElement);

    const controls = new OrbitControls(camera, renderer.domElement);
    //lock the camera to the y axis
    controls.minPolarAngle = Math.PI / 2;
    controls.maxPolarAngle = Math.PI / 2;
    controls.enableZoom=false;
    controls.enableRotate=false;
    //rotate camera in a periodic fashion
    controls.autoRotate = true;
    controls.autoRotateSpeed += 0.005;
    //make background transparent
    renderer.setClearColor(0x000000, 0);
    const images = [
      'https://plus.unsplash.com/premium_photo-1692911035392-74cf29523390',
      'https://plus.unsplash.com/premium_photo-1692911035392-74cf29523390',
      'https://plus.unsplash.com/premium_photo-1692911035392-74cf29523390',
      'https://plus.unsplash.com/premium_photo-1692911035392-74cf29523390',
      
    ];

    const imagePlanes = [];
    const angleIncrement = (2 * Math.PI) / images.length;
    let angle = 0;

    images.forEach((imageUrl) => {
      const texture = new THREE.TextureLoader().load(imageUrl);
      const geometry = new THREE.PlaneGeometry(-1.5, 2);
      const material = new THREE.MeshBasicMaterial({ map: texture });
      const plane = new THREE.Mesh(geometry, material);
      
      plane.position.set(Math.cos(angle) * 2, 0, Math.sin(angle) * 2);
      plane.lookAt(new THREE.Vector3(0, 0, 0));
      
      scene.add(plane);
      imagePlanes.push(plane);
      
      angle += angleIncrement;
    });

    const animate = () => {
      requestAnimationFrame(animate);
      controls.update();
      renderer.render(scene, camera);
    };

    animate();

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
    };
  }, []);

  return (
    <div class="flex flex-col p-5 w-full h-screen">
      <p className="text-[#dfd9ff] font-bold lg:text-[40px] sm:text-[26px] xs:text-[20px] text-[16px] lg:leading-[40px] mt-20 text-white-100 flex gap-4 justify-center">
        <span className='text-[#50C878]'>Art </span>
        Gallery<br className='sm:block hidden' />
      </p>
      <div className='flex justify-center p-10 z-10 mt-auto'>
        <button 
        style={{ background: 'linear-gradient(to bottom, #333, #000)' }}
        className="px-6 py-3 text-white font-semibold text-lg rounded "
        // onClick={handleNextClick}
        >
          Next
        </button>
      </div>
      <div style={{ position: 'fixed', top: 0, left: 0, zIndex: -1 }}>
        <canvas id="three-canvas"></canvas>
      </div>
    </div>
  )
};

export default RotatingCarousel;
