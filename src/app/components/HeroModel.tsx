"use client";

import { Canvas } from "@react-three/fiber";
import { ContactShadows, Environment, PresentationControls, useGLTF } from "@react-three/drei";
import React, { Suspense, useEffect, useRef, useState } from "react";

function Model() {
  const { scene } = useGLTF("/3D/buatlomba.glb");
  return <primitive object={scene} scale={0.9} rotation={[0, Math.PI / 10, 0]} position={[0, -0.4, 0]} />;
}

useGLTF.preload("/3D/buatlomba.glb");

class CanvasErrorBoundary extends React.Component<{ children: React.ReactNode }, { hasError: boolean }> {
  constructor(props: { children: React.ReactNode }) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch() {
    this.setState({ hasError: true });
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="relative grid h-[340px] w-full place-items-center rounded-[32px] border border-[#e8f2d4] bg-gradient-to-br from-white to-[#f7fde8] text-center text-sm font-semibold text-[#3f4f13] shadow-[0_18px_50px_rgba(63,79,19,0.08)]">
          <div className="pointer-events-none absolute inset-0 rounded-[32px] border border-white/40" />
          Model 3D tidak bisa dimuat pada perangkat/driver ini.
        </div>
      );
    }
    return this.props.children;
  }
}

export default function HeroModel() {
  const [webglSupported, setWebglSupported] = useState(false);
  const [checked, setChecked] = useState(false);
  const [contextLost, setContextLost] = useState(false);
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    let supported = false;
    try {
      const canvas = document.createElement("canvas");
      const gl =
        (canvas.getContext("webgl", { failIfMajorPerformanceCaveat: true }) as WebGLRenderingContext | null) ||
        (canvas.getContext("experimental-webgl") as WebGLRenderingContext | null);
      if (!gl) throw new Error("no-webgl");
      const version = gl.getParameter(gl.VERSION) as string;
      const rendererInfo = gl.getExtension("WEBGL_debug_renderer_info");
      const rendererStr = rendererInfo
        ? gl.getParameter(rendererInfo.UNMASKED_RENDERER_WEBGL)
        : version;

      const blacklist = ["Direct3D9", "ps_3_0", "vs_3_0"];
      const isBlacklisted = blacklist.some((term) => rendererStr?.includes(term) || version?.includes(term));
      supported = !isBlacklisted;
    } catch (err) {
      supported = false;
    }
    setWebglSupported(supported);
    setChecked(true);
  }, []);

  useEffect(() => {
    const handleLost = () => setContextLost(true);
    const c = canvasRef.current;
    if (c) {
      c.addEventListener("webglcontextlost", handleLost);
    }
    return () => {
      if (c) c.removeEventListener("webglcontextlost", handleLost);
    };
  }, [canvasRef.current]);

  if (!checked) {
    return (
      <div className="relative grid h-[340px] w-full place-items-center rounded-[32px] border border-[#e8f2d4] bg-gradient-to-br from-white to-[#f7fde8] text-center text-sm font-semibold text-[#3f4f13] shadow-[0_18px_50px_rgba(63,79,19,0.08)]">
        <div className="pointer-events-none absolute inset-0 rounded-[32px] border border-white/40" />
        Memeriksa dukungan 3D...
      </div>
    );
  }

  if (!webglSupported || contextLost) {
    return (
      <div className="relative grid h-[360px] w-full place-items-center overflow-hidden rounded-[32px] border border-[#e8f2d4] bg-gradient-to-br from-white to-[#f7fde8] text-center text-sm font-semibold text-[#3f4f13] shadow-[0_18px_50px_rgba(63,79,19,0.08)]">
        <div className="pointer-events-none absolute inset-0 rounded-[32px] border border-white/40" />
        <img
          src="/img/trash-underwater.jpg"
          alt="Ilustrasi lingkungan bebas plastik"
          className="absolute inset-0 h-full w-full object-cover opacity-55"
          loading="lazy"
        />
        <div className="relative z-10 space-y-2 rounded-2xl bg-white/85 px-4 py-3 shadow-sm backdrop-blur">
          <p>Model 3D tidak bisa dimuat pada perangkat/driver ini.</p>
          <p className="text-xs font-normal text-[#4a5f18]">Gunakan perangkat lain atau update driver GPU untuk melihat versi interaktif.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="relative h-[340px] w-full rounded-[32px] border border-[#e8f2d4] bg-gradient-to-br from-white to-[#f7fde8] shadow-[0_18px_50px_rgba(63,79,19,0.08)]">
      <div className="pointer-events-none absolute inset-0 rounded-[32px] border border-white/40" />
      <Suspense fallback={<div className="grid h-full place-items-center text-sm text-[#4a5f18]">Memuat 3D...</div>}>
        <CanvasErrorBoundary>
          <Canvas
            ref={canvasRef}
            camera={{ position: [2.6, 1.6, 2.6], fov: 45 }}
            dpr={[1, 1.5]}
            shadows
            className="rounded-[32px]"
          >
            <color attach="background" args={["transparent"]} />
            <ambientLight intensity={0.7} />
            <directionalLight position={[3, 5, 2]} intensity={1.2} />
            <PresentationControls
              global
              snap
              speed={1.1}
              zoom={1}
              damping={0.35}
              rotation={[0, 0.2, 0]}
              polar={[-0.1, 0.4]}
              azimuth={[-0.4, 0.8]}
            >
              <Model />
            </PresentationControls>
            <ContactShadows
              position={[0, -0.8, 0]}
              opacity={0.45}
              scale={5}
              blur={2.4}
              far={2.8}
            />
            <Environment preset="sunset" />
          </Canvas>
        </CanvasErrorBoundary>
      </Suspense>
    </div>
  );
}
