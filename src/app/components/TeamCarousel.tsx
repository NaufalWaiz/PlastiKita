'use client'

import React, { useMemo, useState } from "react";

interface CardData {
  id: number;
  name: string;
  role: string;
  focus: string;
  instagram?: string;
  linkedin?: string;
  github?: string;
}

const cardData: CardData[] = [
  {
    id: 1,
    name: "Naufal Waiz",
    role: "Lead Developer",
    focus: "Arsitektur frontend & integrasi data",
    instagram: "https://instagram.com",
    github: "https://github.com",
    linkedin: "https://linkedin.com",
  },
  {
    id: 2,
    name: "Leonard Alfareno",
    role: "Frontend Developer",
    focus: "Animasi, UI interaktif, aksesibilitas",
    instagram: "https://instagram.com",
    github: "https://github.com",
  },
  {
    id: 3,
    name: "Revani Kholirunnisa A",
    role: "UI/UX Designer",
    focus: "Sistem desain & riset pengguna",
    instagram: "https://instagram.com",
    github: "https://github.com",
    linkedin: "https://linkedin.com",
  },
];

const socialIcons = {
  linkedin: (
    <svg className="h-5 w-5" viewBox="0 0 512 512" fill="currentColor" aria-hidden>
      <path d="M444.17 32H67.83C49.2 32 32 49.2 32 67.83v376.34C32 462.8 49.2 480 67.83 480h376.34C462.8 480 480 462.8 480 444.17V67.83C480 49.2 462.8 32 444.17 32ZM180 396H116V204h64Zm-32-220a36 36 0 1 1 36-36 36 36 0 0 1-36 36Zm248 220H332V288c0-20.17-16.42-36-36.59-36S260 267.83 260 288v108h-64V204h64v27.69C274.69 216.66 295 204 317.24 204 359 204 396 237 396 288Z" />
    </svg>
  ),
  github: (
    <svg className="h-5 w-5" viewBox="0 0 512 512" fill="currentColor" aria-hidden>
      <path d="M255.9 32C132.3 32 32 134.7 32 261.7c0 101.6 64.2 187.7 153.2 218 11.2 2.1 15.3-5 15.3-11.2 0-5.5-.2-23.8-.3-43.1-62.3 13.9-75.5-27-75.5-27-10.2-26.4-24.9-33.4-24.9-33.4-20.4-14.4 1.5-14.1 1.5-14.1 22.6 1.6 34.5 23.8 34.5 23.8 20 35 52.4 24.9 65.2 19 2-14.8 7.8-24.9 14.1-30.6-49.7-5.8-102-25.5-102-113.8 0-25.1 8.7-45.5 23-61.5-2.3-5.8-10-29.2 2.1-60.9 0 0 18.8-6.2 61.6 23.5 17.9-5.1 37-7.6 56-7.7 19 .1 38.1 2.6 56 7.7 42.8-29.7 61.5-23.5 61.5-23.5 12.1 31.7 4.4 55.1 2.1 60.9 14.3 16 23 36.4 23 61.5 0 88.5-52.4 107.9-102.3 113.6 8 7.1 15.2 21.1 15.2 42.7 0 30.8-.3 55.7-.3 63.2 0 6.2 4 13.5 15.4 11.2 89-30.3 153-116.4 153-218C480 134.7 379.7 32 255.9 32Z" />
    </svg>
  ),
  instagram: (
    <svg className="h-5 w-5" viewBox="0 0 512 512" fill="currentColor" aria-hidden>
      <path d="M349.33 69.33H162.67C117.79 69.33 80 107.12 80 152v208c0 44.88 37.79 82.67 82.67 82.67h186.66c44.88 0 82.67-37.79 82.67-82.67V152c0-44.88-37.79-82.67-82.67-82.67Zm26 290.67a26 26 0 0 1-26 26H162.67a26 26 0 0 1-26-26V152a26 26 0 0 1 26-26h186.66a26 26 0 0 1 26 26Z" />
      <path d="M256 170a86 86 0 1 0 86 86 86.1 86.1 0 0 0-86-86Zm0 132a46 46 0 1 1 46-46 46 46 0 0 1-46 46Z" />
      <circle cx="365.44" cy="146.56" r="20.48" />
    </svg>
  ),
};

const TeamCarousel: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const visibleCards = useMemo(() => {
    return cardData.map((card, index) => {
      const offset = (index - currentIndex + cardData.length) % cardData.length;
      if (offset === 0) return { card, position: "center" as const };
      if (offset === 1) return { card, position: "right" as const };
      if (offset === cardData.length - 1) return { card, position: "left" as const };
      return { card, position: "hidden" as const };
    });
  }, [currentIndex]);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + cardData.length) % cardData.length);
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % cardData.length);
  };

  const cardClass = (position: "center" | "left" | "right" | "hidden") => {
    if (position === "center") return "z-30 scale-100 opacity-100 translate-x-0";
    if (position === "left") return "z-10 -translate-x-20 scale-90 opacity-70 blur-[1px]";
    if (position === "right") return "z-10 translate-x-20 scale-90 opacity-70 blur-[1px]";
    return "pointer-events-none scale-75 opacity-0";
  };

  return (
    <section className="relative isolate overflow-hidden rounded-[32px] bg-gradient-to-br from-[#f4f9e8] via-white to-[#eef5d6] px-6 py-12 shadow-[0_28px_80px_rgba(63,79,19,0.12)]">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_18%_20%,rgba(136,168,37,0.14),transparent_32%),radial-gradient(circle_at_80%_18%,rgba(246,165,0,0.14),transparent_38%),radial-gradient(circle_at_50%_90%,rgba(66,112,14,0.08),transparent_34%)]" />
      <div className="relative mx-auto flex max-w-6xl flex-col gap-8">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div className="space-y-2">
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[#4a5f1b]">Tim inti</p>
            <h3 className="font-sora text-3xl font-semibold text-[#1f2c10] sm:text-4xl">
              Kenalan dengan tim yang meramu PlastiKita
            </h3>
            <p className="text-sm text-slate-700 sm:text-base">
              Peneliti, desainer, dan developer yang menjaga konten tetap relevan, ringan, dan mudah diakses.
            </p>
          </div>
          <div className="flex items-center gap-3">
            <button
              onClick={handlePrev}
              className="grid h-11 w-11 place-items-center rounded-full border border-[#dfeac3] bg-white text-[#2f4f12] shadow-[0_12px_30px_rgba(63,79,19,0.12)] transition hover:-translate-y-[2px] hover:shadow-[0_16px_40px_rgba(63,79,19,0.16)]"
              aria-label="Sebelumnya"
            >
              <span className="text-lg">&lt;</span>
            </button>
            <button
              onClick={handleNext}
              className="grid h-11 w-11 place-items-center rounded-full border border-[#dfeac3] bg-white text-[#2f4f12] shadow-[0_12px_30px_rgba(63,79,19,0.12)] transition hover:-translate-y-[2px] hover:shadow-[0_16px_40px_rgba(63,79,19,0.16)]"
              aria-label="Berikutnya"
            >
              <span className="text-lg">&gt;</span>
            </button>
          </div>
        </div>

        <div className="relative flex h-[440px] items-center justify-center overflow-visible">
          {visibleCards.map(({ card, position }) => (
            <div
              key={card.id}
              className={`absolute transform-gpu transition-all duration-500 ease-[cubic-bezier(.4,0,.2,1)] ${cardClass(position)}`}
            >
              <div className="relative w-[280px] sm:w-[300px] overflow-hidden rounded-[28px] border border-[#e4efcb] bg-white px-6 py-7 shadow-[0_22px_64px_rgba(63,79,19,0.14)]">
                <div className="absolute inset-0 bg-gradient-to-br from-white via-transparent to-[#f7fbe9]" />
                <div className="relative flex flex-col gap-4">
                  <div className="flex items-center gap-3">
                    <div className="grid h-14 w-14 place-items-center rounded-2xl bg-gradient-to-br from-[#f6a500]/70 to-[#88a825]/80 text-lg font-semibold text-white shadow-[0_14px_36px_rgba(246,165,0,0.24)]">
                      {card.name
                        .split(" ")
                        .map((part) => part.charAt(0))
                        .join("")
                        .slice(0, 2)}
                    </div>
                    <div>
                      <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#4a5f1b]">{card.role}</p>
                      <p className="text-xl font-semibold text-[#1f2c10]">{card.name}</p>
                    </div>
                  </div>

                  <p className="text-sm text-slate-600 leading-relaxed">{card.focus}</p>

                  <div className="flex flex-wrap gap-3">
                    {["Frontend", "UI/UX", "DevOps"].map((tag, idx) => (
                      <span
                        key={`${card.id}-${tag}-${idx}`}
                        className="rounded-full bg-[#f6fbe9] px-3 py-1 text-xs font-semibold text-[#2f4f12] shadow-[0_8px_20px_rgba(136,168,37,0.12)]"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="h-px w-full bg-gradient-to-r from-transparent via-[#dfeac3] to-transparent" />

                  <div className="flex items-center justify-between">
                    <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#4a5f1b]">Terhubung</p>
                    <div className="flex items-center gap-3">
                      {card.linkedin && (
                        <a
                          aria-label={`${card.name} LinkedIn`}
                          className="grid h-10 w-10 place-items-center rounded-full border border-[#dfeac3] bg-white text-[#4a5f1b] shadow-[0_10px_24px_rgba(63,79,19,0.12)] transition hover:-translate-y-[2px] hover:bg-[#f6fbe9]"
                          href={card.linkedin}
                          target="_blank"
                          rel="noreferrer"
                        >
                          {socialIcons.linkedin}
                        </a>
                      )}
                      {card.github && (
                        <a
                          aria-label={`${card.name} Github`}
                          className="grid h-10 w-10 place-items-center rounded-full border border-[#dfeac3] bg-white text-[#4a5f1b] shadow-[0_10px_24px_rgba(63,79,19,0.12)] transition hover:-translate-y-[2px] hover:bg-[#f6fbe9]"
                          href={card.github}
                          target="_blank"
                          rel="noreferrer"
                        >
                          {socialIcons.github}
                        </a>
                      )}
                      {card.instagram && (
                        <a
                          aria-label={`${card.name} Instagram`}
                          className="grid h-10 w-10 place-items-center rounded-full border border-[#dfeac3] bg-white text-[#4a5f1b] shadow-[0_10px_24px_rgba(63,79,19,0.12)] transition hover:-translate-y-[2px] hover:bg-[#f6fbe9]"
                          href={card.instagram}
                          target="_blank"
                          rel="noreferrer"
                        >
                          {socialIcons.instagram}
                        </a>
                      )}
                    </div>
                  </div>
                </div>
                <div className="pointer-events-none absolute -left-12 -top-16 h-24 w-24 rounded-full bg-[#f6a500]/25 blur-3xl" />
                <div className="pointer-events-none absolute -right-10 bottom-0 h-20 w-20 rounded-full bg-[#88a825]/20 blur-3xl" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamCarousel;
