"use client";

import { useRef, useMemo } from 'react';
import { Canvas, useFrame, useLoader } from '@react-three/fiber';
import { OrbitControls, Sphere, Text, Float } from '@react-three/drei';
import { TextureLoader } from 'three';
import * as THREE from 'three';

function Globe({ ...props }) {
  const meshRef = useRef<THREE.Mesh>(null);
  const [colorMap, normalMap, specularMap] = useLoader(TextureLoader, [
    'https://raw.githubusercontent.com/mrdoob/three.js/master/examples/textures/planets/earth_atmos_2048.jpg',
    'https://raw.githubusercontent.com/mrdoob/three.js/master/examples/textures/planets/earth_normal_2048.jpg',
    'https://raw.githubusercontent.com/mrdoob/three.js/master/examples/textures/planets/earth_specular_2048.jpg'
  ]);
  
  useFrame(() => {
    if (meshRef.current) {
      meshRef.current.rotation.y += 0.002;
    }
  });

  return (
    <Sphere args={[1.5, 64, 64]} {...props} ref={meshRef}>
      <meshPhongMaterial
        map={colorMap}
        normalMap={normalMap}
        specularMap={specularMap}
        shininess={5}
      />
    </Sphere>
  );
}

function Atmosphere() {
  return (
    <Sphere args={[1.65, 64, 64]}>
      <meshStandardMaterial
        color="#10b981" // Emerald 500
        transparent
        opacity={0.1}
        side={THREE.BackSide}
      />
    </Sphere>
  );
}

function FloatingCurrency({ symbol, position, color = "#34d399" }: { symbol: string; position: [number, number, number]; color?: string }) {
  return (
    <Float speed={1.5} rotationIntensity={1} floatIntensity={1}>
      <Text
        font="https://fonts.gstatic.com/s/inter/v12/UcCO3FwrK3iLTeHuS_fvQtMwCp50KnMw2boKoduKmMEVuLyfAZ9hjp-Ek-_EeA.woff"
        position={position}
        fontSize={0.5}
        color={color}
        anchorX="center"
        anchorY="middle"
      >
        {symbol}
      </Text>
    </Float>
  );
}

function Scene() {
  const currencies = useMemo(() => [
    { symbol: "$", position: [1.4, 1.1, 0.8] },
    { symbol: "€", position: [-1.4, -0.8, 1.1] },
    { symbol: "£", position: [1.1, -1.3, -0.8] },
    { symbol: "₹", position: [-1.1, 1.5, -0.8] },
    { symbol: "¥", position: [1.6, 0, -1.1] },
  ], []);

  return (
    <>
      <ambientLight intensity={1.5} />
      <directionalLight position={[5, 3, 5]} intensity={2} />
      <pointLight position={[-5, -5, -5]} intensity={1} />
      <Globe />
      <Atmosphere />
      {currencies.map((curr, i) => (
        <FloatingCurrency key={i} symbol={curr.symbol} position={curr.position as [number, number, number]} />
      ))}
      <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={0.5} enablePan={false} />
    </>
  );
}

export function Globe3D() {
  return (
    <div className="w-full h-full min-h-[400px]">
      <Canvas camera={{ position: [0, 0, 4.5], fov: 45 }}>
        <Scene />
      </Canvas>
    </div>
  );
}
