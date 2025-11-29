"use client";

import Image from "next/image";
import { useMemo } from "react";

const items = [
  { src: "/img/trash-underwater.jpg", alt: "Botol plastik di air", delay: 0 },
  { src: "/img/burning-trash.jpg", alt: "Kantong plastik terbakar", delay: 0.2 },
  { src: "/img/demo-sampah.jpg", alt: "Sampah plastik di kota", delay: 0.4 },
];

export default function HeroFloat() {
  const visibleItems = useMemo(() => items.slice(0, 2 + Math.floor(Math.random() * 2)), []);

  return (
    <div className="relative flex h-full items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,rgba(243,144,0,0.08),transparent_38%),radial-gradient(circle_at_40%_70%,rgba(136,168,37,0.08),transparent_40%)]" />
      <div className="relative grid w-full max-w-lg grid-cols-2 gap-6">
        {visibleItems.map((item, idx) => (
          <div
            key={item.src}
            className="relative overflow-hidden rounded-3xl border border-[#e8f2d4] bg-white shadow-[0_14px_42px_rgba(63,79,19,0.12)]"
            style={{
              animation: `floatY 6s ease-in-out ${item.delay}s infinite`,
            }}
          >
            <Image
              src={item.src}
              alt={item.alt}
              width={420}
              height={280}
              className="h-full w-full object-cover"
              priority
            />
          </div>
        ))}
      </div>
      <style jsx global>{`
        @keyframes floatY {
          0% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-12px);
          }
          100% {
            transform: translateY(0px);
          }
        }
      `}</style>
    </div>
  );
}
