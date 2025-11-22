import Link from "next/link";
import { PlasticsSceneLoader } from "@/components/PlasticsSceneLoader";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight, faArrowRight } from "@fortawesome/free-solid-svg-icons";


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
    <div>
      <section className="min-h-screen bg-white text-black px-12 pt-20 font-poppins">
        <h1 className="font-semibold text-[32px] w-7/12 mb-6">
          Bagaimana Kondisi Polusi Plastik yang Kian Memprihatinkan di{" "}
          <span className="bg-[#F89B11] inline-block text-white">Indonesia</span>?
        </h1>
        <p className="opacity-50 w-8/12 text-lg mb-5">
          Polusi plastik adalah masalah lingkungan yang semakin mengkhawatirkan
          di Indonesia. Sampah plastik yang tidak terkelola dengan baik
          mencemari tanah, sungai, dan laut, serta membahayakan ekosistem dan
          kesehatan manusia. Menurut data dari World Bank tahun 2021, Indonesia
          menghasilkan lebih dari 7,8 juta ton sampah plastik setiap tahun, dan
          sekitar 3,2 juta ton di antaranya berakhir di laut.
        </p>
        <div className="flex flex-row items-center gap-5">
            <div className="rounded-full bg-[#88A825] w-11 h-11 flex justify-center items-center shadow-xl/30">
                <FontAwesomeIcon icon={faAngleRight} className="text-white"/>
            </div>
            <h1 className="text-[#88A825] font-semibold text-[20px]">Jelajahi Sekarang</h1>
        </div>
      </section>
    </div>
  );
}
