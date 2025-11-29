import Image from "next/image";
import Link from "next/link";
import NewsletterForm from "./NewsletterForm";

export default function SiteFooter() {
  return (
    <footer className="relative bg-gradient-to-b from-[#2f3d25] via-[#3e552d] to-[#2f4520] text-white">
      <div className="px-6 pb-12 pt-8 sm:px-10">
        <div className="mx-auto flex max-w-6xl flex-col gap-10">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-2">
            <div
              className="rounded-2xl bg-white/10 p-5 shadow-[0_18px_38px_rgba(0,0,0,0.25)] backdrop-blur animate-on-scroll"
              data-animate
              style={{ ["--a-delay" as any]: "0.05s" }}
            >
              <div className="flex items-center gap-3 sm:translate-x-7">
                <Image
                  src="/img/logo.png"
                  alt="PlastiKita"
                  width={44}
                  height={44}
                  className="object-contain origin-center scale-[1.4] sm:scale-[1.8] lg:scale-[2]"
                />
              </div>
              <div className="mt-4 space-y-2 text-white/80">
                <p>Universitas Negeri Jakarta</p>
                <a href="mailto:plastikita@gmail.com" className="text-white underline hover:text-white">
                  plastikita@gmail.com
                </a>
              </div>
              <div className="mt-5 flex flex-wrap gap-2">
                {[
                  {
                    id: "instagram",
                    label: "Instagram",
                    icon: (
                      <svg viewBox="0 0 512 512" className="h-5 w-5 fill-white" aria-hidden>
                        <path d="M349.33 69.33H162.67C117.79 69.33 80 107.12 80 152v208c0 44.88 37.79 82.67 82.67 82.67h186.66c44.88 0 82.67-37.79 82.67-82.67V152c0-44.88-37.79-82.67-82.67-82.67Zm26 290.67a26 26 0 0 1-26 26H162.67a26 26 0 0 1-26-26V152a26 26 0 0 1 26-26h186.66a26 26 0 0 1 26 26Z" />
                        <path d="M256 170a86 86 0 1 0 86 86 86.1 86.1 0 0 0-86-86Zm0 132a46 46 0 1 1 46-46 46 46 0 0 1-46 46Z" />
                        <circle cx="365.44" cy="146.56" r="20.48" />
                      </svg>
                    ),
                  },
                  {
                    id: "facebook",
                    label: "Facebook",
                    icon: (
                      <svg viewBox="0 0 512 512" className="h-5 w-5 fill-white" aria-hidden>
                        <path d="M368 32H144A112 112 0 0 0 32 144v224a112 112 0 0 0 112 112h112V320h-64v-64h64v-48c0-61.76 44.48-112 100.19-112H400v64h-43.81C338.56 160 320 180.47 320 205v51h80l-16 64h-64v192h48a112 112 0 0 0 112-112V144A112 112 0 0 0 368 32Z" />
                      </svg>
                    ),
                  },
                  {
                    id: "google",
                    label: "Google",
                    icon: (
                      <svg viewBox="0 0 512 512" className="h-5 w-5 fill-white" aria-hidden>
                        <path d="M400 214.5H248v83h87c-13 40-50 69-95 69a103 103 0 1 1 0-206 104 104 0 0 1 65.6 24.1l62-62.6A186 186 0 0 0 240 64C137.4 64 54 147.4 54 250s83.4 186 186 186c93.4 0 172-67.8 172-186a170 170 0 0 0-1.2-19.5Z" />
                      </svg>
                    ),
                  },
                  {
                    id: "linkedin",
                    label: "LinkedIn",
                    icon: (
                      <svg viewBox="0 0 512 512" className="h-5 w-5 fill-white" aria-hidden>
                        <path d="M444.17 32H67.83C49.2 32 32 49.2 32 67.83v376.34C32 462.8 49.2 480 67.83 480h376.34C462.8 480 480 462.8 480 444.17V67.83C480 49.2 462.8 32 444.17 32ZM180 396H116V204h64Zm-32-220a36 36 0 1 1 36-36 36 36 0 0 1-36 36Zm248 220H332V288c0-20.17-16.42-36-36.59-36S260 267.83 260 288v108h-64V204h64v27.69C274.69 216.66 295 204 317.24 204 359 204 396 237 396 288Z" />
                      </svg>
                    ),
                  },
                ].map((item) => (
                  <span
                    key={item.id}
                    className="grid h-9 w-9 place-items-center rounded-full bg-white/18 text-white text-sm font-semibold transition hover:bg-white/28"
                    aria-label={item.label}
                  >
                    {item.icon}
                  </span>
                ))}
              </div>
            </div>

            <div data-animate className="animate-on-scroll" style={{ ["--a-delay" as any]: "0.12s" }}>
              <NewsletterForm />
            </div>
          </div>

          <div className="grid gap-6 text-white/90 sm:grid-cols-2 lg:grid-cols-2">
            <div className="space-y-3">
              <p className="font-semibold text-white">Akses Konten</p>
              <div className="flex flex-wrap gap-3 text-sm">
                <Link href="/" className="rounded-lg bg-white/10 px-3 py-2 hover:bg-white/20">
                  Beranda
                </Link>
                <Link href="#program" className="rounded-lg bg-white/10 px-3 py-2 hover:bg-white/20">
                  Tentang
                </Link>
                <Link href="/eksplorasi-3d" className="rounded-lg bg-white/10 px-3 py-2 hover:bg-white/20">
                  Artikel
                </Link>
                <Link href="/quiz" className="rounded-lg bg-white/10 px-3 py-2 hover:bg-white/20">
                  Quiz
                </Link>
              </div>
            </div>
            <div className="space-y-3">
              <p className="font-semibold text-white">Sumber Data</p>
              <div className="flex flex-wrap gap-3 text-sm">
                {["Mongabay", "Datahita", "BRIN", "Media Indonesia", "Republic ESG Now"].map((item) => (
                  <span key={item} className="rounded-lg bg-white/10 px-3 py-2">
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <div className="flex flex-wrap items-center justify-between gap-3 border-t border-white/20 pt-6 text-xs text-white/80">
            <span>Ac 2025 PlastiKita. All rights reserved</span>
            <div className="flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-emerald-300" />
              <span>Respons 24/7</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
