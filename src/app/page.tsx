import Image from "next/image";
import Link from "next/link";
import FAQ from "./components/FAQ";
import NewsletterForm from "./components/NewsletterForm";
import ScrollReveal from "./components/ScrollReveal";

const highlightStats = [
  { value: "7,8 jt", label: "Ton per tahun", icon: "📊" },
  { value: "3,2 jt", label: "Bocor ke laut", icon: "🌊" },
  { value: "200+", label: "Kota terdampak", icon: "📍" },
];

export default function Home() {
  return (
    <div className="bg-white text-slate-900">
      <ScrollReveal />
      <main className="flex flex-col">
        <section className="relative isolate overflow-hidden bg-white pb-14 pt-28">
          <div className="pointer-events-none absolute left-1/2 top-10 h-80 w-80 -translate-x-1/2 rounded-full bg-[#e5eec8]/40 blur-3xl hero-glow -z-10" />
          <div className="pointer-events-none absolute right-0 top-14 h-40 w-40 rounded-full bg-[#f6a500]/35 blur-3xl hero-glow -z-10" />
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,rgba(246,165,0,0.08),transparent_42%),radial-gradient(circle_at_80%_20%,rgba(136,168,37,0.12),transparent_40%)] opacity-0 hero-sheen -z-10" />
          <div className="mx-auto flex max-w-6xl flex-col items-center gap-12 px-6 sm:px-10 lg:flex-row lg:items-start lg:justify-between">
            <div className="max-w-2xl space-y-6 hero-entrance">
              <p className="text-sm font-semibold uppercase tracking-[0.4em] text-[#88a825]">
                Ekspansi Literasi Plastik
              </p>
              <h1 className="font-sora text-4xl font-semibold leading-tight text-slate-900 sm:text-5xl lg:text-[44px]">
                Bagaimana Kondisi Polusi Plastik yang Kian Memprihatinkan di
                <span className="block mt-1 text-[#f39000] typing-word">Indonesia?</span>
              </h1>
              <p className="text-lg leading-relaxed text-slate-700">
                Polusi plastik adalah masalah lingkungan yang semakin mengkhawatirkan di Indonesia. Sampah plastik yang tidak
                terkelola dengan baik mencemari tanah, sungai, dan laut, serta membahayakan ekosistem dan kesehatan manusia.
                Menurut data dari{" "}
                <a
                  href="https://www.worldbank.org/"
                  className="font-semibold text-[#2f4f12] underline decoration-[#f6a500]/60 decoration-2 underline-offset-4 hover:text-[#1f360c]"
                  target="_blank"
                  rel="noreferrer"
                >
                  World Bank tahun 2021
                </a>
                , Indonesia menghasilkan lebih dari 7,8 juta ton sampah plastik setiap tahun.
              </p>
              <div className="flex flex-wrap items-center gap-4">
                <Link
                  href="#program"
                  className="group inline-flex items-center gap-3 rounded-full bg-[#e5eec8] px-6 py-3 text-sm font-semibold text-[#2f4f12] shadow-[0_16px_36px_rgba(80,120,40,0.16)] transition hover:-translate-y-[1px] hover:shadow-[0_20px_44px_rgba(80,120,40,0.2)]"
                >
                  <span className="grid h-5 w-5 place-items-center rounded-full bg-[#f6a500] text-[11px] text-white shadow-sm">
                    ●
                  </span>
                  Jelajahi Sekarang
                </Link>
                <Link
                  href="#laporan"
                  className="inline-flex items-center gap-2 rounded-full border border-[#dfeac3] px-5 py-3 text-sm font-semibold text-[#2f4f12] transition hover:-translate-y-[1px] hover:border-[#88a825] hover:bg-[#f7fde8]"
                >
                  Laporkan lokasi
                </Link>
              </div>
              <div className="flex flex-wrap gap-3 pt-2">
                {highlightStats.map((item, idx) => (
                  <div
                    key={item.label}
                    className="inline-flex items-center gap-2 rounded-full bg-white/90 px-4 py-2 text-sm font-semibold text-[#2f4f12] shadow-[0_14px_32px_rgba(63,79,19,0.12)] backdrop-blur animate-on-scroll"
                    data-animate
                    style={{ ["--a-delay" as any]: `${0.1 + idx * 0.05}s` }}
                  >
                    <span className="grid h-8 w-8 place-items-center rounded-full bg-[#f6a500]/20 text-[#c47500]">
                      {item.icon}
                    </span>
                    <div className="leading-tight">
                      <p className="text-base">{item.value}</p>
                      <p className="text-xs font-normal text-slate-600">{item.label}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative w-full max-w-[520px] lg:max-w-[500px] hero-entrance delayed-1">
              <div className="pointer-events-none absolute inset-0 -z-10 scale-[1.08] rounded-full bg-[radial-gradient(circle_at_30%_30%,rgba(246,165,0,0.22),transparent_40%),radial-gradient(circle_at_70%_70%,rgba(136,168,37,0.28),transparent_45%)] blur-2xl" />
              <div className="overflow-hidden rounded-full border-4 border-white shadow-[0_24px_80px_rgba(0,0,0,0.15)] hero-float translate-y-12">
                <Image
                  src="/img/trash-underwater.jpg"
                  alt="Sampah plastik di bawah laut"
                  width={800}
                  height={800}
                  className="h-auto w-full object-cover "
                  priority
                />
              </div>
            </div>
          </div>
        </section>

        <div className="relative mx-auto mt-6 flex w-full max-w-8xl items-center justify-center px-6 sm:px-10">
          <div className="h-12 w-full rounded-[999px] bg-gradient-to-r from-transparent via-[#e7f1d6] to-transparent blur-[1px]" />
          <div className="pointer-events-none absolute inset-x-12 h-8 rounded-full bg-gradient-to-r from-[#f6a500]/20 via-transparent to-[#88a825]/25" />
        </div>

        <section id="program" className="px-6 py-16 sm:px-10 lg:py-20">
          <div className="mx-auto flex max-w-6xl flex-col gap-12">
            <div className="grid gap-10 lg:grid-cols-[1.1fr,0.9fr] lg:items-center">
              <div
                className="space-y-4 text-center lg:text-left animate-on-scroll"
                data-animate
                style={{ ["--a-delay" as any]: "0.1s" }}
              >
                <span className="inline-flex items-center gap-2 rounded-full bg-[#e5eec8] px-4 py-2 text-xs font-semibold uppercase tracking-[0.28em] text-[#2f4f12]">
                  Program PlastiKita
                </span>
                <p className="font-poppins text-[18px] leading-relaxed text-[#3f3313] sm:text-xl">
                  Mengingat Indonesia masih menjadi salah satu penyumbang sampah plastik terbesar di dunia, platform ini hadir
                  untuk meningkatkan literasi lingkungan masyarakat. Melalui materi edukatif tentang dampak dan penanganan
                  sampah plastik, pengguna diharapkan dapat membangun kebiasaan minim sampah dan menerapkan prinsip reduce,
                  reuse, recycle.
                </p>
                <p className="font-poppins text-[18px] leading-relaxed text-[#3f3313] sm:text-xl">
                  Dengan demikian, platform ini turut mendukung target Indonesia Bebas Sampah Plastik 2030 dan upaya pelestarian
                  lingkungan. Bergabunglah untuk membangun ekonomi sirkular yang lebih bersih.
                </p>
                <div className="flex flex-wrap gap-3">
                  {["Edukasi", "Kampanye", "Riset", "Kolaborasi"].map((tag, idx) => (
                    <span
                      key={tag}
                      className="rounded-full bg-[#e5eec8] px-4 py-2 text-sm font-semibold text-[#3f4f13] shadow-[0_12px_26px_rgba(120,160,60,0.18)] animate-pop"
                      style={{ animationDelay: `${0.18 + idx * 0.05}s` }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
              <div className="grid gap-6 sm:grid-cols-3">
                {[
                  { bg: "bg-tumpukan-sampah", label: "Pantai", height: "h-[260px]" },
                  { bg: "bg-sampah-bakar", label: "Daratan", height: "h-[300px]" },
                  { bg: "bg-sampah-air", label: "Laut", height: "h-[260px]" },
                ].map((item, idx) => (
                  <div
                    key={item.bg}
                    className={`group relative overflow-hidden rounded-[30px] ${item.height} bg-cover bg-center ${item.bg} shadow-[0_18px_38px_rgba(0,0,0,0.18)] transition duration-700 hover:-translate-y-2 hover:shadow-[0_28px_60px_rgba(0,0,0,0.24)] animate-on-scroll`}
                    data-animate
                    style={{ ["--a-delay" as any]: `${0.18 + idx * 0.08}s` }}
                  >
                    <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-black/5 to-transparent" />
                    <div className="absolute inset-[-20%] bg-[radial-gradient(circle_at_30%_30%,rgba(255,255,255,0.2),transparent_35%),radial-gradient(circle_at_70%_0%,rgba(255,255,255,0.15),transparent_30%)] opacity-70 transition duration-700 group-hover:scale-110 group-hover:opacity-90" />
                    <span className="absolute left-3 top-3 rounded-full bg-white/85 px-3 py-1 text-xs font-semibold text-[#2f4f12] shadow-[0_10px_25px_rgba(0,0,0,0.15)]">
                      {item.label}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="bg-[#f5f9ec] px-6 py-20 sm:px-10">
          <div className="mx-auto flex max-w-5xl flex-col gap-12">
            <div className="space-y-4 text-center animate-on-scroll" data-animate style={{ ["--a-delay" as any]: "0.1s" }}>
              <h2 className="font-sora text-3xl font-semibold text-[#3f3313] sm:text-4xl">
                Pertanyaan yang Sering Diajukan
              </h2>
            </div>
            <FAQ />
          </div>
        </section>

        <section id="laporan" className="relative isolate overflow-hidden bg-white">
          <div className="absolute left-0 right-0 top-0 text-[#f5f9ec]">
            <svg viewBox="0 0 1440 120" xmlns="http://www.w3.org/2000/svg" className="h-[120px] w-full" preserveAspectRatio="none">
              <path
                fill="currentColor"
                d="M0,96 C240,64 480,64 720,96 C960,128 1200,128 1440,96 L1440,0 L0,0 Z"
              />
            </svg>
          </div>
          <div className="relative overflow-hidden bg-white px-6 pb-20 pt-16 text-slate-900 sm:px-10">
            <div className="pointer-events-none absolute left-1/2 top-[-18%] h-72 w-72 -translate-x-1/2 rounded-full bg-[#e5eec8]/70 blur-3xl -z-10" />
            <div className="pointer-events-none absolute right-[-12%] top-8 h-64 w-64 rounded-full bg-[#f6a500]/25 blur-3xl -z-10" />
            <div className="pointer-events-none absolute left-[-8%] bottom-[-28%] h-80 w-80 rounded-full bg-[#e5eec8]/80 blur-3xl -z-10" />
            <div className="relative mx-auto flex max-w-5xl flex-col gap-10">
              <div className="space-y-3 text-center lg:text-left animate-rise" style={{ animationDelay: "0.1s" }}>
                <span className="inline-flex rounded-full bg-[#e5eec8] px-4 py-2 text-xs font-semibold uppercase tracking-[0.35em] text-[#2f4f12] shadow-[0_10px_30px_rgba(136,168,37,0.15)]">
                  Form Laporan
                </span>
                <h2 className="text-3xl font-semibold text-[#2f4f12] sm:text-4xl">
                  Temukan Polusi Plastik? Sampaikan Laporan Anda!
                </h2>
                <p className="text-base leading-relaxed text-slate-700 lg:max-w-3xl">
                  Kami siap menerima laporan Anda terkait sampah plastik yang mengotori lingkungan. Isi data berikut
                  untuk membantu tim kami mengidentifikasi area yang membutuhkan tindakan cepat.
                </p>
              </div>

              <div
                className="relative mx-auto w-full max-w-4xl overflow-hidden rounded-[28px] border border-[#c8d99b] bg-gradient-to-br from-white via-white to-[#f7fde8] p-6 sm:p-8 shadow-[0_28px_80px_rgba(136,168,37,0.14)] backdrop-blur animate-rise"
                style={{ animationDelay: "0.2s" }}
              >
                <div className="absolute inset-x-10 top-6 h-[1px] bg-gradient-to-r from-transparent via-[#e5eec8] to-transparent" />
                <div className="mb-6 flex flex-wrap items-center gap-3 text-xs uppercase tracking-[0.25em] text-[#2f4f12]">
                  <span className="rounded-full border border-[#d8e9b9] bg-white px-4 py-2 font-semibold shadow-[0_10px_24px_rgba(136,168,37,0.14)]">
                    Isi detail
                  </span>
                  <span className="rounded-full border border-[#d8e9b9] bg-white px-4 py-2 font-semibold shadow-[0_10px_24px_rgba(136,168,37,0.14)]">
                    Unggah bukti
                  </span>
                  <span className="rounded-full border border-[#d8e9b9] bg-white px-4 py-2 font-semibold shadow-[0_10px_24px_rgba(136,168,37,0.14)]">
                    Kirim
                  </span>
                </div>
                <form className="grid gap-4">
                  <div className="grid gap-4 md:grid-cols-2">
                    <div className="grid gap-2">
                      <label className="text-sm font-semibold text-[#2f4f12]">Nama</label>
                      <input
                        className="h-12 rounded-xl border border-[#dfeac3] bg-white px-4 text-sm text-[#2f4f12] placeholder:text-slate-400 focus:border-[#88a825] focus:outline-none focus:ring-2 focus:ring-[#88a825]/30"
                        placeholder="Masukkan Nama"
                      />
                    </div>
                    <div className="grid gap-2">
                      <label className="text-sm font-semibold text-[#2f4f12]">Email</label>
                      <input
                        className="h-12 rounded-xl border border-[#dfeac3] bg-white px-4 text-sm text-[#2f4f12] placeholder:text-slate-400 focus:border-[#88a825] focus:outline-none focus:ring-2 focus:ring-[#88a825]/30"
                        placeholder="Masukkan Email"
                      />
                    </div>
                  </div>
                  <div className="grid gap-4 md:grid-cols-2">
                    <div className="grid gap-2">
                      <label className="text-sm font-semibold text-[#2f4f12]">Nomor telepon (opsional)</label>
                      <input
                        className="h-12 rounded-xl border border-[#dfeac3] bg-white px-4 text-sm text-[#2f4f12] placeholder:text-slate-400 focus:border-[#88a825] focus:outline-none focus:ring-2 focus:ring-[#88a825]/30"
                        placeholder="Masukkan nomor telepon"
                      />
                    </div>
                    <div className="grid gap-2">
                      <label className="text-sm font-semibold text-[#2f4f12]">Lokasi kejadian</label>
                      <input
                        className="h-12 rounded-xl border border-[#dfeac3] bg-white px-4 text-sm text-[#2f4f12] placeholder:text-slate-400 focus:border-[#88a825] focus:outline-none focus:ring-2 focus:ring-[#88a825]/30"
                        placeholder="Masukkan lokasi kejadian"
                      />
                    </div>
                  </div>
                  <div className="grid gap-2">
                    <label className="text-sm font-semibold text-[#2f4f12]">Deskripsi laporan</label>
                    <textarea
                      className="min-h-[140px] rounded-xl border border-[#dfeac3] bg-white px-4 py-3 text-sm text-[#2f4f12] placeholder:text-slate-400 focus:border-[#88a825] focus:outline-none focus:ring-2 focus:ring-[#88a825]/30"
                      placeholder="Ceritakan kronologi, waktu, dan kondisi sekitar lokasi"
                    />
                  </div>
                  <div className="grid gap-3 rounded-xl border border-dashed border-[#c8d99b] bg-white p-4 text-sm text-[#2f4f12] shadow-[0_14px_40px_rgba(0,0,0,0.05)] transition hover:-translate-y-[1px] hover:bg-[#f7fde8]">
                    <div className="flex flex-wrap items-center gap-3">
                      <span className="grid h-10 w-10 place-items-center rounded-full bg-[#e5eec8] text-[#2f4f12] font-semibold shadow-[0_8px_18px_rgba(136,168,37,0.18)]">
                        +
                      </span>
                      <div>
                        <p className="font-semibold text-[#2f4f12]">Unggah gambar sebagai bukti</p>
                        <p className="text-slate-500 text-xs">Format JPG/PNG, maks 5MB</p>
                      </div>
                    </div>
                    <button className="inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-[#f6a500] to-[#f7b733] px-4 py-2 text-sm font-semibold text-slate-900 shadow-[0_12px_32px_rgba(247,183,51,0.32)] transition hover:-translate-y-[1px]">
                      <span>Click to upload atau drag and drop</span>
                    </button>
                  </div>
                  <div className="flex flex-wrap justify-between gap-3 text-xs text-slate-600">
                    <span>Data Anda aman dan hanya digunakan untuk verifikasi lapangan.</span>
                    <span className="text-[#2f4f12] font-semibold">Estimasi tanggapan: &lt; 24 jam</span>
                  </div>
                  <button className="mt-4 inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-[#f9a826] via-[#f7b733] to-[#f6a500] px-8 py-3 text-sm font-semibold text-slate-900 shadow-[0_14px_42px_rgba(249,168,38,0.32)] transition hover:translate-y-[-2px] hover:shadow-[0_18px_54px_rgba(249,168,38,0.38)]">
                    <span>kirim</span>
                    <span className="text-base">-&gt;</span>
                  </button>
                </form>
              </div>
            </div>
          </div>

          <div className="relative bg-gradient-to-b from-[#2f3d25] via-[#3e552d] to-[#2f4520] text-white">
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
                  <span>© 2025 PlastiKita. All rights reserved</span>
                  <div className="flex items-center gap-2">
                    <span className="h-2 w-2 rounded-full bg-emerald-300" />
                    <span>Respons 24/7</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
