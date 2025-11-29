import TeamCarousel from "../components/TeamCarousel";
import SiteFooter from "../components/SiteFooter";
import ScrollReveal from "../components/ScrollReveal";

export default function Tentang() {
  const stats = [
    { label: "7,8 juta ton", value: "plastik/tahun", note: "Diproduksi di Indonesia (WB, 2021)" },
    { label: "2030", value: "Indonesia Bebas Sampah Plastik", note: "Target nasional yang kami kawal" },
    { label: "120+", value: "komunitas", note: "Belajar & aksi bareng PlastiKita" },
  ];

  const pillars = [
    { title: "Edukasi berbasis data", body: "Konten dirangkai dari riset ilmiah, laporan pemerintah, dan liputan lapangan." },
    { title: "Aksi dekat rumah", body: "Membantu warga memetakan titik rawan dan mengirim laporan yang rapi ke dinas." },
    { title: "Kolaborasi terbuka", body: "Mahasiswa, komunitas pantai, dan UMKM lokal berkolaborasi lewat kampanye tematik." },
  ];

  const journey = [
    { title: "Mulai dari keresahan", desc: "Tumpukan sampah plastik di sungai Jakarta memicu kami membuat gerakan literasi digital." },
    { title: "Meramu konten & data", desc: "Visual interaktif, video singkat, dan carousel artikel yang mudah dipahami berbagai usia." },
    { title: "Mendorong perubahan", desc: "Setiap kunjungan diarahkan ke aksi nyata: lapor titik polusi, ikut bersih pantai, atau tantangan 30 hari minim plastik." },
  ];

  return (
    <div className="bg-white text-slate-900">
      <ScrollReveal />
      <section className="relative isolate overflow-hidden bg-gradient-to-br from-[#f4f9e8] via-white to-[#fff3db]">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_12%_20%,rgba(136,168,37,0.18),transparent_32%),radial-gradient(circle_at_80%_0%,rgba(246,165,0,0.18),transparent_34%),radial-gradient(circle_at_50%_90%,rgba(66,112,14,0.12),transparent_32%)]" />
        <div className="mx-auto flex max-w-6xl flex-col-reverse gap-12 px-6 pb-20 pt-28 lg:flex-row lg:items-center">
          <div className="space-y-6 lg:w-1/2 animate-on-scroll" data-animate style={{ ["--a-delay" as any]: "0.05s" }}>
            <div className="inline-flex items-center gap-2 rounded-full border border-[#d9ebba] bg-white/80 px-4 py-2 text-xs font-semibold uppercase tracking-[0.28em] text-[#2f4f12] shadow-[0_10px_26px_rgba(136,168,37,0.16)]">
              Tentang PlastiKita
            </div>
            <h1 className="font-sora text-4xl font-semibold leading-tight text-[#1f2c10] sm:text-5xl">
              Mengubah keresahan jadi gerakan <span className="text-[#f6a500]">literasi plastik</span> yang hidup
            </h1>
            <p className="text-lg leading-relaxed text-slate-700">
              PlastiKita adalah ruang belajar interaktif yang merangkul data, cerita warga, dan aksi komunitas untuk menekan polusi
              plastik. Kami menjembatani edukasi, laporan lapangan, serta kampanye kreatif agar setiap kunjungan berujung aksi.
            </p>
            <div className="grid gap-3 sm:grid-cols-3">
              {stats.map((item) => (
                <div
                  key={item.label}
                  className="rounded-2xl bg-white/90 px-4 py-4 shadow-[0_18px_48px_rgba(63,79,19,0.12)] backdrop-blur border border-[#e4efcb] animate-on-scroll"
                  data-animate
                  style={{ ["--a-delay" as any]: "0.12s" }}
                >
                  <p className="text-xs font-semibold uppercase tracking-[0.12em] text-[#4a5f1b]">{item.value}</p>
                  <p className="text-xl font-semibold text-[#1f2c10]">{item.label}</p>
                  <p className="text-xs text-slate-600 mt-1 leading-relaxed">{item.note}</p>
                </div>
              ))}
            </div>
            <div className="flex flex-wrap gap-3">
              <span className="rounded-full bg-[#2f4f12] px-4 py-2 text-sm font-semibold text-white shadow-[0_12px_28px_rgba(47,79,18,0.35)]">
                Literasi praktis
              </span>
              <span className="rounded-full bg-white px-4 py-2 text-sm font-semibold text-[#2f4f12] border border-[#d9ebba] shadow-[0_12px_28px_rgba(136,168,37,0.14)]">
                Peta titik polusi
              </span>
              <span className="rounded-full bg-[#f6a500] px-4 py-2 text-sm font-semibold text-[#2f2a16] shadow-[0_12px_28px_rgba(246,165,0,0.28)]">
                Aksi komunitas
              </span>
            </div>
          </div>

          <div className="relative lg:w-1/2 animate-on-scroll" data-animate style={{ ["--a-delay" as any]: "0.14s" }}>
            <div className="pointer-events-none absolute inset-0 -z-10 scale-[1.08] rounded-[38px] bg-[radial-gradient(circle_at_30%_30%,rgba(246,165,0,0.28),transparent_38%),radial-gradient(circle_at_80%_10%,rgba(136,168,37,0.28),transparent_42%)] blur-2xl" />
            <div className="overflow-hidden rounded-[32px] border border-white shadow-[0_26px_80px_rgba(0,0,0,0.15)] bg-tentang bg-cover bg-center min-h-[360px]">
              <div className="h-full w-full bg-gradient-to-br from-black/45 via-black/15 to-transparent" />
            </div>
            <div className="absolute -bottom-10 left-6 flex items-center gap-3 rounded-2xl bg-white px-4 py-3 shadow-[0_16px_48px_rgba(47,79,18,0.16)] border border-[#dfeac3]">
              <span className="grid h-10 w-10 place-items-center rounded-full bg-[#f6a500]/25 text-[#c47a00] font-semibold">^</span>
              <div>
                <p className="text-sm font-semibold text-[#1f2c10]">Kampanye bersih sungai</p>
                <p className="text-xs text-slate-600">190+ relawan aktif, 15 kota</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="relative isolate overflow-hidden px-6 py-[72px] sm:py-20">
        <div className="pointer-events-none absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-white via-white/85 to-transparent" />
        <div className="mx-auto flex max-w-6xl flex-col gap-10">
          <div className="text-center space-y-3 animate-on-scroll" data-animate style={{ ["--a-delay" as any]: "0.05s" }}>
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[#4a5f1b]">Visi, Misi, Nilai</p>
            <h2 className="font-sora text-3xl font-semibold text-[#1f2c10] sm:text-4xl">Gerakan yang fokus pada data, cerita, dan aksi</h2>
            <p className="text-base text-slate-700 sm:text-lg">
              Kami merancang pengalaman belajar yang tidak berhenti di teori. Setiap bagian terhubung dengan alat, peta, atau tantangan
              yang bisa langsung dicoba bersama komunitas sekitar.
            </p>
          </div>

          <div className="grid gap-6 lg:grid-cols-3">
            <div className="rounded-[28px] bg-gradient-to-br from-[#2f4f12] via-[#3c6120] to-[#4f7b29] px-6 py-8 text-white shadow-[0_24px_64px_rgba(47,79,18,0.35)]">
              <p className="text-xs font-semibold uppercase tracking-[0.28em] text-white/70">Visi</p>
              <h3 className="mt-2 text-2xl font-semibold">Planet bebas polusi plastik</h3>
              <p className="mt-3 text-sm text-white/80 leading-relaxed">
                Platform edukasi digital yang dipercaya masyarakat untuk menekan jejak plastik lewat konten ilmiah, panduan praktis,
                dan aksi kolaboratif.
              </p>
            </div>

            <div className="rounded-[28px] border border-[#dfeac3] bg-white px-6 py-8 shadow-[0_18px_44px_rgba(63,79,19,0.12)] animate-on-scroll" data-animate style={{ ["--a-delay" as any]: "0.08s" }}>
              <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[#4a5f1b]">Misi</p>
              <ul className="mt-3 space-y-3 text-sm text-slate-700">
                <li className="flex gap-3">
                  <span className="mt-1 h-2 w-2 rounded-full bg-[#f6a500]" />
                  <span>Mengkurasi materi edukasi yang mudah dipakai sekolah, komunitas, dan media sosial.</span>
                </li>
                <li className="flex gap-3">
                  <span className="mt-1 h-2 w-2 rounded-full bg-[#f6a500]" />
                  <span>Mendorong laporan terstruktur dari warga untuk mempercepat respon dinas terkait.</span>
                </li>
                <li className="flex gap-3">
                  <span className="mt-1 h-2 w-2 rounded-full bg-[#f6a500]" />
                  <span>Membuka ruang kolaborasi lintas kampus, komunitas pantai, dan UMKM berkelanjutan.</span>
                </li>
              </ul>
            </div>

            <div className="rounded-[28px] border border-[#f5deb3] bg-[#fff7e9] px-6 py-8 shadow-[0_18px_44px_rgba(246,165,0,0.18)] animate-on-scroll" data-animate style={{ ["--a-delay" as any]: "0.12s" }}>
              <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[#a86a00]">Cara kami</p>
              <div className="mt-3 space-y-3 text-sm text-[#3f2e0f]">
                <div className="flex gap-3">
                  <span className="mt-1 h-2 w-8 rounded-full bg-[#f6a500]/70" />
                  <span>Toolkit kampanye siap pakai untuk kegiatan lapangan.</span>
                </div>
                <div className="flex gap-3">
                  <span className="mt-1 h-2 w-8 rounded-full bg-[#f6a500]/70" />
                  <span>Visual interaktif dan video singkat untuk kelas dan media sosial.</span>
                </div>
                <div className="flex gap-3">
                  <span className="mt-1 h-2 w-8 rounded-full bg-[#f6a500]/70" />
                  <span>Pemetaan titik polusi dan tantangan aksi bulanan.</span>
                </div>
              </div>
            </div>
          </div>

          <div className="grid gap-4 rounded-[26px] border border-[#e4efcb] bg-white px-5 py-6 shadow-[0_16px_42px_rgba(63,79,19,0.08)] sm:grid-cols-3">
            {pillars.map((item) => (
              <div
                key={item.title}
                className="rounded-2xl bg-[#f6fbe9] px-4 py-5 shadow-[0_10px_28px_rgba(136,168,37,0.12)] animate-on-scroll"
                data-animate
                style={{ ["--a-delay" as any]: "0.16s" }}
              >
                <p className="text-sm font-semibold text-[#2f4f12]">{item.title}</p>
                <p className="mt-2 text-sm text-slate-700 leading-relaxed">{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-[#13260f] text-white">
        <div className="pointer-events-none absolute inset-x-0 top-0 h-16 bg-gradient-to-b from-white to-transparent" />
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_18%_20%,rgba(246,165,0,0.12),transparent_32%),radial-gradient(circle_at_80%_30%,rgba(136,168,37,0.16),transparent_38%)]" />
        <div className="mx-auto flex max-w-6xl flex-col gap-8 px-6 py-16 sm:px-8 sm:py-20">
          <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[#f6eac6]">Perjalanan singkat</p>
              <h3 className="font-sora text-3xl font-semibold">Dari keresahan ke aksi kolektif</h3>
            </div>
            <div className="rounded-full border border-white/15 bg-white/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-[#f6eac6]">
              Transparan & terukur
            </div>
          </div>

          <div className="grid gap-6 lg:grid-cols-3">
            {journey.map((item, idx) => (
              <div
                key={item.title}
                className="relative overflow-hidden rounded-[24px] border border-white/10 bg-white/5 px-5 py-6 shadow-[0_18px_54px_rgba(0,0,0,0.25)] animate-on-scroll"
                data-animate
                style={{ ["--a-delay" as any]: `${0.1 + idx * 0.06}s` }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent" />
                <div className="relative space-y-3">
                  <div className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-[#f6a500]/20 text-sm font-semibold text-[#f6eac6]">
                    {String(idx + 1).padStart(2, "0")}
                  </div>
                  <p className="text-lg font-semibold text-white">{item.title}</p>
                  <p className="text-sm text-white/80 leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative bg-[#f7e7c4] px-6 py-[72px] sm:py-20">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.45),transparent_38%),radial-gradient(circle_at_70%_80%,rgba(136,168,37,0.12),transparent_40%)]" />
        <div className="mx-auto flex max-w-6xl flex-col gap-12">
          <div className="text-center space-y-3 animate-on-scroll" data-animate style={{ ["--a-delay" as any]: "0.05s" }}>
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[#4a3a1d]">Sorotan data</p>
            <h3 className="font-sora text-3xl font-semibold text-[#3f3313] sm:text-4xl">Fakta yang memicu gerakan</h3>
            <p className="text-base text-[#3f3313]/80 sm:text-lg">
              Data nasional dan laporan lapangan jadi bahan bakar utama kurasi konten kami.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            {[
              { bg: "bg-produksi-sampah", title: "Produksi & Sampah Plastik Indonesia (2024)", badge: "Riset & Statistik" },
              { bg: "bg-sampah-gorontalo", title: "Komposisi Polusi Plastik di Indonesia (2023)", badge: "Lapangan & Media" },
            ].map((item) => (
              <div
                key={item.title}
                className={`group relative h-[360px] overflow-hidden rounded-[28px] border border-[#e4cda1] bg-cover bg-center ${item.bg} shadow-[0_22px_60px_rgba(0,0,0,0.18)] animate-on-scroll`}
                data-animate
                style={{ ["--a-delay" as any]: "0.12s" }}
              >
                <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/25 to-transparent transition duration-500 group-hover:from-black/65" />
                <div className="absolute left-0 top-0 m-6 inline-flex items-center gap-2 rounded-full bg-white/85 px-4 py-2 text-xs font-semibold text-[#3f3313] shadow-[0_12px_28px_rgba(0,0,0,0.12)]">
                  {item.badge}
                </div>
                <div className="absolute bottom-0 left-0 right-0 space-y-2 bg-gradient-to-t from-black/70 via-black/40 to-transparent px-6 pb-6 pt-12">
                  <h4 className="font-sora text-2xl font-semibold text-white drop-shadow">{item.title}</h4>
                  <p className="text-sm text-white/80">
                    Dipakai untuk menyusun materi edukasi, tantangan aksi, serta bahan advokasi komunitas.
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-white px-6 pb-20 pt-16">
        <div className="mx-auto flex max-w-6xl flex-col gap-10">
          <div className="text-center space-y-3 animate-on-scroll" data-animate style={{ ["--a-delay" as any]: "0.05s" }}>
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[#4a5f1b]">Tim</p>
            <h3 className="font-sora text-3xl font-semibold text-[#1f2c10] sm:text-4xl">
              Kenalan dengan <span className="text-[#90c444]">Tim PlastiKita</span>
            </h3>
            <p className="text-base text-slate-700">
              Di balik layar ada peneliti, desainer, dan relawan yang memastikan setiap konten relevan dan berdampak.
            </p>
          </div>
          <div className="animate-on-scroll" data-animate style={{ ["--a-delay" as any]: "0.12s" }}>
            <TeamCarousel />
          </div>
        </div>
      </section>
      <SiteFooter />
    </div>
  );
}
