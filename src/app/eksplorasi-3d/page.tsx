import Link from "next/link";

const assets = [
  {
    title: "Plastik botol minum sekali pakai",
    description:
      "Model ini menampilkan botol PET transparan yang umum ditemukan pada rantai konsumsi harian. Visualnya membantu tim fasilitator menjelaskan anatomi material dan potensi desain ulang tutup-hingga-label.",
    embedUrl: "https://sketchfab.com/models/2e5132fabf7943d9b39743a966e2a1a7/embed",
    insight:
      "Gunakan untuk workshop audit merek atau simulasi penimbangan sehingga peserta memahami volume plastik yang paling sering bocor.",
    creditUrl: "https://sketchfab.com/3d-models/none-2e5132fabf7943d9b39743a966e2a1a7",
    author: "adrian reynish via Sketchfab",
  },
  {
    title: "Karung sampah plastik campuran",
    description:
      "Kumpulan kantong bertekstur low-poly menggambarkan residu plastik campur kategori 3-7. Sangat cocok sebagai ilustrasi titik kumpul sementara sebelum memasuki fasilitas pemilahan PlastiKita.",
    embedUrl: "https://sketchfab.com/models/51cb07645ffa494e9bb67b292f4df86e/embed",
    insight:
      "Sisipkan saat presentasi tentang pentingnya standardisasi warna kantong dan pencatatan berat per jenis resin.",
    creditUrl: "https://sketchfab.com/3d-models/none-51cb07645ffa494e9bb67b292f4df86e",
    author: "X Almazov via Sketchfab",
  },
  {
    title: "Tempat sampah plastik terpilah kota",
    description:
      "Kontainer komunal berkapasitas besar untuk menampung plastik konsumen sebelum diangkut ke fasilitas material recovery.",
    embedUrl: "https://sketchfab.com/models/cb278948a28a440d8e26573bbc8483df/embed",
    insight:
      "Gunakan visual ini saat meninjau desain titik drop-off permanen atau diskusi sponsorship infrastruktur dengan pemerintah daerah.",
    creditUrl: "https://sketchfab.com/3d-models/none-cb278948a28a440d8e26573bbc8483df",
    author: "LightSwitch via Sketchfab",
  },
  {
    title: "Taman edukasi material daur ulang",
    description:
      "Taman modular yang dibangun dari panel plastik daur ulang, lengkap dengan papan informasi dan zona bermain komunitas.",
    embedUrl: "https://sketchfab.com/models/3244a91ad93746ebbdcfa78eefaabaf9/embed",
    insight:
      "Cocok untuk memvisualisasikan bagaimana plastik pasca konsumsi dapat kembali ke ruang kota sebagai fasilitas belajar.",
    creditUrl: "https://sketchfab.com/3d-models/none-3244a91ad93746ebbdcfa78eefaabaf9",
    author: "pozza via Sketchfab",
  },
];

export const metadata = {
  title: "Eksplorasi 3D Plastik | PlastiKita",
  description:
    "Galeri interaktif berisi tiga aset 3D bertema plastik untuk membantu edukasi reuse dan daur ulang di lapangan.",
};

export default function Eksplorasi3DPage() {
  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <div className="absolute inset-x-0 top-0 -z-10 h-[420px] bg-[radial-gradient(circle_at_top,_rgba(56,189,248,0.3),_transparent_65%)]" />
      <main className="relative mx-auto flex max-w-6xl flex-col gap-14 px-6 py-16 sm:px-10 lg:px-0">
        <header className="space-y-7 text-center">
          <p className="text-xs uppercase tracking-[0.5em] text-sky-100">
            Visual Edukatif
          </p>
          <h1 className="mx-auto max-w-3xl text-4xl font-semibold leading-tight text-white sm:text-5xl">
            Galeri 3D plastik untuk menguatkan cerita riset dan kampanye
            PlastiKita.
          </h1>
          <p className="mx-auto max-w-2xl text-base leading-relaxed text-slate-200 sm:text-lg">
            Gunakan aset 3D berikut saat memfasilitasi lokakarya, menyusun
            proposal mitra, atau sekadar menginspirasi tim kreatif mengenai
            potensi sirkular plastik.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/"
              className="rounded-full border border-white/20 px-6 py-3 text-sm font-semibold uppercase tracking-[0.4em] text-white/80 transition hover:border-white hover:text-white"
            >
              Kembali ke beranda
            </Link>
            <a
              href="https://sketchfab.com/tags/plastic"
              target="_blank"
              rel="noreferrer"
              className="rounded-full bg-sky-400 px-6 py-3 text-base font-semibold text-slate-950 shadow-lg shadow-sky-500/30 transition hover:bg-sky-300"
            >
              Lihat aset lainnya
            </a>
          </div>
        </header>

        <section className="space-y-10">
          <div className="rounded-[32px] border border-sky-400/20 bg-white/5 p-8 text-left shadow-[0_25px_80px_rgba(15,23,42,0.6)] backdrop-blur">
            <h2 className="text-2xl font-semibold text-white sm:text-3xl">
              Cara menggunakan galeri
            </h2>
            <ul className="mt-6 list-disc space-y-3 pl-6 text-sm text-slate-200 sm:text-base">
              <li>
                Putar kamera langsung di dalam iframe Sketchfab untuk menyorot
                detail plastik yang ingin dijelaskan.
              </li>
              <li>
                Aktifkan mode layar penuh saat presentasi agar peserta dapat
                mengamati tekstur dan warna material secara jelas.
              </li>
              <li>
                Klik tautan kredit untuk mengunduh file asli jika membutuhkan
                modifikasi lebih lanjut pada perangkat Blender atau webGL lain.
              </li>
            </ul>
          </div>

          <div className="grid gap-10 md:grid-cols-2">
            {assets.map((asset) => (
              <article
                key={asset.title}
                className="flex flex-col gap-6 rounded-[36px] border border-white/10 bg-gradient-to-b from-slate-900/70 to-slate-950 p-6 shadow-[0_30px_100px_rgba(15,23,42,0.65)]"
              >
                <div className="relative w-full overflow-hidden rounded-3xl border border-white/10 bg-black/20 shadow-inner shadow-sky-500/10">
                  <div className="aspect-video">
                    <iframe
                      src={asset.embedUrl}
                      title={asset.title}
                      className="h-full w-full"
                      allow="autoplay; fullscreen; xr-spatial-tracking"
                      allowFullScreen
                      loading="lazy"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                </div>
                <div className="space-y-4">
                  <div>
                    <p className="text-xs uppercase tracking-[0.5em] text-sky-200/80">
                      Aset 3D Plastik
                    </p>
                    <h3 className="mt-2 text-2xl font-semibold text-white">
                      {asset.title}
                    </h3>
                  </div>
                  <p className="text-sm leading-relaxed text-slate-200 sm:text-base">
                    {asset.description}
                  </p>
                  <div className="rounded-2xl border border-sky-200/20 bg-sky-200/5 p-4">
                    <p className="text-xs uppercase tracking-[0.4em] text-sky-100">
                      Insight lapangan
                    </p>
                    <p className="mt-2 text-sm text-slate-100">{asset.insight}</p>
                  </div>
                  <div className="flex flex-wrap items-center gap-3 text-xs text-slate-400">
                    <span className="uppercase tracking-[0.4em]">
                      Kredit:
                    </span>
                    <a
                      href={asset.creditUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="text-sky-300 underline underline-offset-4 transition hover:text-sky-200"
                    >
                      {asset.author}
                    </a>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}
