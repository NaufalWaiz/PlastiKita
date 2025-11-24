import Trash from "./components/Trash";
import CTAButton from "./components/CTAButton";
import { text } from "stream/consumers";

export default function Home() {
  return (
    <>
    {/** First Section */}
      <section className="min-h-screen bg-none text-black pt-14 px-3 sm:px-12 sm:pt-36 font-poppins flex flex-row" id="beranda">
        <div className="w-8/12">
          <h1 className="font-semibold text-[28px] sm:text-[32px] w-11/12 sm:w-11/12 mb-6">
            Bagaimana Kondisi Polusi Plastik yang Kian Memprihatinkan di {" "}
            <span className="bg-[#F89B11] inline-block text-white">Indonesia</span>?
          </h1>
            <p className="opacity-50 w-full sm:w-10/12 text-[15px] sm:text-[16px] mb-5 leading-relaxed">
              Polusi plastik adalah masalah lingkungan yang semakin mengkhawatirkan
              di Indonesia. Sampah plastik yang tidak terkelola dengan baik
              mencemari tanah, sungai, dan laut, serta membahayakan ekosistem dan
              kesehatan manusia. Menurut data dari World Bank tahun 2021, Indonesia
              menghasilkan lebih dari 7,8 juta ton sampah plastik setiap tahun, dan
              sekitar 3,2 juta ton di antaranya berakhir di laut.
            </p>
            <CTAButton section="#section-2" text="Jelajahi Sekarang"/>
        </div>
        <div className="w-3/12">
          <Trash />
        </div>
        <svg xmlns="http://www.w3.org/2000/svg" className="absolute -bottom-1 left-0 w-full -z-10" preserveAspectRatio="none" viewBox="0 0 1440 320">
          <path fill="#2F4F12" fillOpacity="1" d="M0 240 C180 255, 350 270, 550 270 C780 270, 920 245, 1160 175 C1280 135, 1370 125, 1440 145 L1440 320 L0 320 Z"></path>
        </svg>
      </section>

      {/** Second Section */}
      <section className="bg-linear-to-b from-[#2F4F12] to-[#66863E] min-h-screen pt-16 font-semibold" id="section-2">
        <h1 className="font-sora text-[44px] text-center">Tingkat Polusi Plastik di Indonesia</h1>
      </section>
    </>
  );
}