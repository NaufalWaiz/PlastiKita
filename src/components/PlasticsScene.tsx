"use client";

import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import {
  Environment,
  Html,
  OrbitControls,
  useGLTF,
} from "@react-three/drei";

const MODEL_URL =
  "https://raw.githubusercontent.com/KhronosGroup/glTF-Sample-Models/master/2.0/WaterBottle/glTF-Binary/WaterBottle.glb";

type PlasticsSceneProps = {
  className?: string;
};

function BottleModel() {
  const { scene } = useGLTF(MODEL_URL);
  return (
    <primitive
      object={scene}
      scale={1.4}
      position={[0, -0.6, 0]}
      rotation={[0, Math.PI / 4, 0]}
    />
  );
}

useGLTF.preload(MODEL_URL);

export function PlasticsScene({ className = "" }: PlasticsSceneProps) {
  const wrapperClass =
    "relative w-full h-[360px] rounded-[32px] border border-white/20 bg-gradient-to-b from-sky-900/80 via-slate-900 to-slate-950 shadow-[0_0_40px_rgba(15,23,42,0.45)] overflow-hidden " +
    className;

  return (
    <div className={wrapperClass}>
      <Canvas camera={{ position: [2.5, 1.8, 3], fov: 45 }} shadows>
        <color attach="background" args={["#030816"]} />
        <ambientLight intensity={0.6} />
        <directionalLight
          position={[4, 5, 3]}
          intensity={1.2}
          castShadow
          color="#8cd3ff"
        />
        <spotLight
          position={[-2, 4, -3]}
          angle={0.6}
          penumbra={0.5}
          intensity={0.8}
          color="#f6f1d5"
        />
        <Suspense
          fallback={
            <Html center>
              <div className="rounded-full border border-white/30 px-4 py-2 text-xs tracking-wide text-white/80 backdrop-blur">
                Memuat model 3D…
              </div>
            </Html>
          }
        >
          <Environment preset="warehouse" />
          <BottleModel />
        </Suspense>
        <mesh
          receiveShadow
          rotation={[-Math.PI / 2, 0, 0]}
          position={[0, -1.05, 0]}
        >
          <circleGeometry args={[3.5, 64]} />
          <meshStandardMaterial color="#061225" />
        </mesh>
        <OrbitControls
          enablePan={false}
          minDistance={2}
          maxDistance={6}
          autoRotate
          autoRotateSpeed={0.4}
        />
      </Canvas>
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-slate-950 to-transparent" />
    </div>
  );
}
