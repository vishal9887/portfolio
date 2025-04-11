import React, { Suspense, useEffect, useState } from 'react';
import { Canvas } from '@react-three/fiber';
import {
  OrbitControls,
  Preload,
  useGLTF,
  Environment,
  ContactShadows,
} from '@react-three/drei';

const ComputerModel = ({ isMobile }) => {
  const computer = useGLTF('/desktop_pc/scene.gltf');

  return (
    <primitive
      object={computer.scene}
      scale={isMobile ? 0.6 : 0.75}
      position={isMobile ? [0, -3, -1.2] : [0, -3.25, -1.5]}
      rotation={[-0.01, -0.2, -0.1]}
    />
  );
};

const Computers = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Detect screen size
    const mediaQuery = window.matchMedia('(max-width: 768px)');

    // Set initial value
    setIsMobile(mediaQuery.matches);

    // Add listener to update on resize
    const handleMediaQueryChange = (e) => {
      setIsMobile(e.matches);
    };

    mediaQuery.addEventListener('change', handleMediaQueryChange);

    // Cleanup
    return () => {
      mediaQuery.removeEventListener('change', handleMediaQueryChange);
    };
  }, []);

  return (
    <Canvas
      frameloop="demand"
      shadows
      camera={{
        position: isMobile ? [10, 2, 4] : [20, 3, 5],
        fov: 25,
      }}
      gl={{ preserveDrawingBuffer: true }}
    >
      <Suspense fallback={null}>
        {/* 🌅 Environment light */}
        <Environment preset="city" />

        {/* 💡 Lighting */}
        <ambientLight intensity={0.3} />
        <spotLight
          position={[15, 20, 5]}
          angle={0.3}
          penumbra={1}
          intensity={1}
          castShadow
          shadow-mapSize={1024}
        />

        {/* 🎮 Controls */}
        <OrbitControls
          enableZoom={false}
          enablePan={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />

        <ComputerModel isMobile={isMobile} />

        {/* 🕶 Soft shadow */}
        <ContactShadows
          position={[0, -3.6, 0]}
          opacity={0.4}
          scale={10}
          blur={1.5}
          far={4.5}
        />

        <Preload all />
      </Suspense>
    </Canvas>
  );
};

useGLTF.preload('/desktop_pc/scene.gltf');

export default Computers;
