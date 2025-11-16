"use client";

import dynamic from "next/dynamic";
import type { ComponentPropsWithoutRef, ReactNode } from "react";
import { Component, useEffect, useRef, useState } from "react";

type PlasticsSceneComponent = (props: {
  className?: string;
}) => JSX.Element | null;

const DynamicPlasticsScene = dynamic<PlasticsSceneComponent>(() =>
  import("./PlasticsScene").then((mod) => mod.PlasticsScene),
);

type LoaderProps = ComponentPropsWithoutRef<PlasticsSceneComponent>;
type WebGLState = "checking" | "ready" | "unsupported";

class WebGLErrorBoundary extends Component<
  {
    fallback: ReactNode;
    onError: () => void;
    children: ReactNode;
  },
  { hasError: boolean }
> {
  state = { hasError: false };

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error: Error) {
    this.props.onError();
    if (process.env.NODE_ENV !== "production") {
      console.error("WebGL scene crashed:", error);
    }
  }

  render() {
    if (this.state.hasError) {
      return this.props.fallback;
    }
    return this.props.children;
  }
}

const verifyWebGLRenderer = async () => {
  if (typeof window === "undefined") return false;
  const originalError = console.error;
  let suppressed = false;
  console.error = (...args: unknown[]) => {
    if (
      typeof args[0] === "string" &&
      args[0].includes("THREE.WebGLRenderer") &&
      args[0].includes("WebGL context could not be created")
    ) {
      suppressed = true;
      return;
    }
    originalError(...args);
  };
  try {
    const canvas = document.createElement("canvas");
    const { WebGLRenderer } = await import("three");
    const renderer = new WebGLRenderer({
      canvas,
      antialias: true,
      preserveDrawingBuffer: false,
      powerPreference: "high-performance",
    });
    renderer.dispose();
    return !suppressed;
  } catch {
    return false;
  } finally {
    console.error = originalError;
  }
};

const FallbackCard = ({
  className,
  variant,
}: {
  className?: string;
  variant: "checking" | "unsupported";
}) => {
  const baseClass =
    "flex flex-col items-center justify-center gap-4 rounded-[32px] border border-dashed border-white/20 bg-white/5 text-center text-white/70 shadow-[0_0_30px_rgba(15,23,42,0.6)]";
  return (
    <div className={`${baseClass} ${className ?? ""}`}>
      <p className="text-xs font-semibold uppercase tracking-[0.5em]">
        {variant === "checking" ? "Memeriksa WebGL" : "WebGL tidak tersedia"}
      </p>
      <p className="max-w-sm text-sm text-white/60">
        {variant === "checking"
          ? "Sedang mengecek dukungan grafis perangkat Anda..."
          : "Gunakan perangkat/peramban yang mendukung WebGL untuk menikmati visual 3D PlastiKita."}
      </p>
    </div>
  );
};

export function PlasticsSceneLoader(props: LoaderProps) {
  const [webglState, setWebglState] = useState<WebGLState>("checking");
  const verificationRef = useRef<Promise<boolean> | null>(null);

  useEffect(() => {
    if (typeof window === "undefined") return;
    if (webglState !== "checking") return;
    if (!verificationRef.current) {
      verificationRef.current = verifyWebGLRenderer();
    }
    let cancelled = false;
    verificationRef.current
      .then((supported) => {
        if (!cancelled) {
          setWebglState(supported ? "ready" : "unsupported");
        }
      })
      .catch(() => {
        if (!cancelled) {
          setWebglState("unsupported");
        }
      });
    return () => {
      cancelled = true;
    };
  }, [webglState]);

  const fallbackElement = (
    <FallbackCard
      variant={webglState === "checking" ? "checking" : "unsupported"}
      className={props.className}
    />
  );

  if (webglState !== "ready") {
    return fallbackElement;
  }

  return (
    <WebGLErrorBoundary
      fallback={fallbackElement}
      onError={() => setWebglState("unsupported")}
    >
      <DynamicPlasticsScene {...props} />
    </WebGLErrorBoundary>
  );
}
