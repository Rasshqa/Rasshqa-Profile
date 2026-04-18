'use client';

import { useRef, Suspense } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import {
  OrbitControls,
  Environment,
  ContactShadows,
  Float,
  useGLTF,
  MeshReflectorMaterial,
  Preload,
} from '@react-three/drei';
import { EffectComposer, Bloom, ChromaticAberration } from '@react-three/postprocessing';
import { BlendFunction } from 'postprocessing';
import * as THREE from 'three';

function CarModel() {
  // useGLTF will suspend until the model is loaded.
  // The Suspense fallback in ApolloScene will show nothing (null) while loading,
  // preventing the "less cool" boxy fallback from showing up.
  const gltf = useGLTF('/models/apollo_evo.glb');

  return (
    <group position={[0, -0.5, 0]} scale={1.2}>
      <primitive object={gltf.scene} />
    </group>
  );
}

function Floor() {
  return (
    <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -0.5, 0]}>
      <planeGeometry args={[30, 30]} />
      <MeshReflectorMaterial
        blur={[200, 100]}
        resolution={256}
        mixBlur={1}
        mixStrength={30}
        roughness={1}
        depthScale={1.2}
        minDepthThreshold={0.4}
        maxDepthThreshold={1.4}
        color="#080808"
        metalness={0.5}
        mirror={0.5}
      />
    </mesh>
  );
}

function Lights() {
  return (
    <>
      <ambientLight intensity={0.15} color="#F5DEB3" />
      {/* Key light — warm copper */}
      <spotLight
        position={[5, 8, 3]}
        intensity={50}
        color="#F15F08"
        angle={0.4}
        penumbra={0.8}
        castShadow
        shadow-mapSize={[512, 512]}
      />
      {/* Fill light — neon blue */}
      <spotLight
        position={[-5, 5, -3]}
        intensity={30}
        color="#00A6FF"
        angle={0.5}
        penumbra={0.9}
      />
      {/* Rim light */}
      <pointLight position={[0, 3, -6]} intensity={15} color="#8B5CF6" />
      {/* Ground bounce */}
      <pointLight position={[0, -1, 0]} intensity={3} color="#F15F08" />
    </>
  );
}

export default function ApolloScene() {
  return (
    <div className="w-full h-full absolute inset-0">
      <Canvas
        camera={{ position: [4, 2, 5], fov: 45 }}
        dpr={[1, 1.5]}
        gl={{
          antialias: false, // Turned off native antialias as EffectComposer handles the render pass
          toneMapping: THREE.ACESFilmicToneMapping,
          toneMappingExposure: 1.2,
          powerPreference: "high-performance",
        }}
        shadows
      >
        <Suspense fallback={null}>
          <Lights />
          <CarModel />
          <Floor />
          <Environment files="/models/studio.hdr" />
          <OrbitControls
            enablePan={false}
            enableZoom={false}
            minPolarAngle={Math.PI / 3}
            maxPolarAngle={Math.PI / 2.2}
            autoRotate
            autoRotateSpeed={0.8}
            enableDamping
            dampingFactor={0.05}
          />
          <ContactShadows
            position={[0, -0.49, 0]}
            opacity={0.4}
            scale={15}
            blur={2}
            far={4}
            resolution={256}
            frames={1} // The car geometry doesn't move (the camera moves), so we only bake the shadow ONCE! Massive performance boost.
          />
          <EffectComposer multisampling={4}>
            <Bloom 
              luminanceThreshold={0.5} 
              luminanceSmoothing={0.9} 
              intensity={1.5} 
              mipmapBlur 
            />
            <ChromaticAberration 
              blendFunction={BlendFunction.NORMAL} 
              offset={new THREE.Vector2(0.002, 0.002)} 
              radialModulation={false}
              modulationOffset={0}
            />
          </EffectComposer>
          <Preload all />
        </Suspense>
      </Canvas>
    </div>
  );
}
