import Link from "next/link";
import { PlasticsSceneLoader } from "@/components/PlasticsSceneLoader";

const stats = [
  { label: "Botol plastik dialihkan", value: "1,2 Juta" },
  { label: "Relawan aktif", value: "3.500+" },
  { label: "Kota dampingan", value: "24 Kota" },
  { label: "Titik drop-off", value: "130 lokasi" },
];

const highlights = [
  {
    title: "Edukasi circular design",
    desc: "Toolkit visual dan lokakarya untuk sekolah serta komunitas agar memahami daur ulang plastik bernilai tinggi.",
  },
  {
    title: "Integrasi data real-time",
    desc: "Pelacakan penjemputan sampah, algoritma pemilahan, hingga dashboard dampak bagi brand mitra secara transparan.",
  },
  {
    title: "Laboratorium material",
    desc: "Eksperimen bioplastik berbasis pati, plastik daur ulang, serta kolaborasi UMKM untuk menghasilkan produk baru.",
  },
];

const programs = [
  {
    title: "Ekspedisi Sungai Nusantara",
    summary:
      "Memonitor 18 DAS prioritas melalui sensor IoT, drone mapping, dan kampanye warga untuk menutup titik bocor plastik.",
    tags: ["Sensor Air", "Riset Warga", "Pelibatan Desa"],
  },
  {
    title: "Studio Daur Plastik",
    summary:
      "Mengubah sampah plastik pasca konsumsi menjadi bahan baku desain interior, kacamata, dan papan bangunan ringan.",
    tags: ["Produk Sirkular", "Kolaborasi Desainer", "Pelatihan UMKM"],
  },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <div className="absolute inset-x-0 top-0 -z-10 h-[800px] bg-[radial-gradient(circle_at_top,_rgba(56,189,248,0.35),_transparent_60%)]" />
      <main className="relative mx-auto flex max-w-6xl flex-col gap-16 px-6 py-16 sm:px-10 lg:px-0">
        <section className="grid gap-10 lg:grid-cols-[1.1fr,0.9fr] lg:items-center">
          <div className="space-y-8">
            <div className="inline-flex items-center rounded-full border border-sky-400/40 bg-sky-400/10 px-3 py-1 text-xs uppercase tracking-[0.3em] text-sky-100">
              Gerakan PlastiKita
            </div>
            <div className="space-y-5">
              <h1 className="font-semibold text-4xl leading-tight text-white sm:text-5xl lg:text-6xl">
                Selamatkan plastik, hidupkan ekonomi sirkular di seluruh
                nusantara.
              </h1>
              <p className="text-base leading-relaxed text-slate-200 sm:text-lg">
                Kami menghadirkan ekosistem edukasi, teknologi pelacakan, dan
                ruang kolaborasi kreatif untuk memastikan plastik tidak lagi
                berakhir di laut, tetapi kembali menjadi sumber daya bermanfaat.
              </p>
            </div>
            <div className="flex flex-wrap gap-4">
              <Link
                href="#program"
                className="flex items-center justify-center rounded-full bg-sky-400 px-6 py-3 text-base font-semibold text-slate-950 shadow-lg shadow-sky-500/30 transition hover:bg-sky-300"
              >
                Lihat program terbaru
              </Link>
              <a
                href="https://drive.google.com"
                className="flex items-center justify-center rounded-full border border-white/30 px-6 py-3 text-base font-semibold text-white/90 transition hover:border-white hover:text-white"
                target="_blank"
                rel="noreferrer"
              >
                Unduh paket edukasi
              </a>
            </div>
            <div className="grid gap-6 rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur">
              <p className="text-sm uppercase tracking-[0.4em] text-white/60">
                Dampak 2024
              </p>
              <div className="grid gap-6 sm:grid-cols-2">
                {stats.map((stat) => (
                  <div key={stat.label} className="space-y-1">
                    <p className="text-3xl font-semibold text-white sm:text-4xl">
                      {stat.value}
                    </p>
                    <p className="text-sm text-slate-300">{stat.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <PlasticsSceneLoader className="h-[420px]" />
        </section>

        <section id="program" className="space-y-10">
          <div className="space-y-3">
            <p className="text-sm uppercase tracking-[0.4em] text-white/60">
              Fokus inisiatif
            </p>
            <h2 className="text-3xl font-semibold sm:text-4xl">
              Dari kampanye, data, hingga eksperimen material.
            </h2>
            <p className="text-base text-slate-300 sm:text-lg">
              Setiap program PlastiKita didesain lintas disiplin agar komunitas,
              pelajar, dan brand dapat bergerak bersama.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {highlights.map((highlight) => (
              <article
                key={highlight.title}
                className="rounded-3xl border border-white/10 bg-white/5 p-6 shadow-[0_20px_80px_rgba(15,23,42,0.45)] transition hover:-translate-y-1 hover:border-sky-300/20"
              >
                <h3 className="text-xl font-semibold text-white">
                  {highlight.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-slate-300">
                  {highlight.desc}
                </p>
              </article>
            ))}
          </div>
        </section>

        <section className="grid gap-6 lg:grid-cols-2">
          {programs.map((program) => (
            <article
              key={program.title}
              className="flex h-full flex-col justify-between rounded-3xl border border-white/10 bg-gradient-to-b from-slate-800/40 to-slate-900/70 p-8 shadow-[0_25px_80px_rgba(15,23,42,0.55)]"
            >
              <div className="space-y-4">
                <h3 className="text-2xl font-semibold text-white">
                  {program.title}
                </h3>
                <p className="text-base leading-relaxed text-slate-200">
                  {program.summary}
                </p>
              </div>
              <div className="mt-6 flex flex-wrap gap-3">
                {program.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-sky-400/30 bg-sky-400/10 px-4 py-2 text-xs uppercase tracking-[0.3em] text-sky-100"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </section>

        <section className="rounded-[32px] border border-white/10 bg-gradient-to-r from-sky-400/20 via-sky-500/10 to-transparent p-10 text-center backdrop-blur">
          <div className="mx-auto max-w-3xl space-y-6">
            <h3 className="text-3xl font-semibold text-white">
              Mari wujudkan Indonesia bebas sampah plastik melalui data, desain,
              dan aksi kolektif.
            </h3>
            <p className="text-base text-slate-200">
              Gabung sebagai relawan riset, fasilitator sekolah, atau brand
              challenger untuk menguji solusi material baru.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a
                href="mailto:hello@plastikita.id"
                className="rounded-full bg-white px-6 py-3 text-base font-semibold text-slate-900 shadow-lg shadow-white/30 transition hover:bg-slate-100"
              >
                Kirim proposal kolaborasi
              </a>
              <Link
                href="https://wa.me/6200000000"
                className="rounded-full border border-white/40 px-6 py-3 text-base font-semibold text-white/90 transition hover:border-white"
              >
                Hubungi tim lapangan
              </Link>
            </div>
          </div>
        </section>
      </main>
      <footer className="border-t border-white/10 px-6 py-8 text-xs uppercase tracking-[0.4em] text-white/50 sm:px-10 lg:px-0">
        PlastiKita • Platform kolaborasi plastik bertanggung jawab
      </footer>
    </div>
  );
}
