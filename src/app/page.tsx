import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import Trash from "./components/Trash";

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
          <div className="group w-fit flex flex-row items-center gap-5 transform transition bg-transparent hover:bg-[#88A825] rounded-full cursor-pointer">
              <div className="flex bg-[#88A825] w-10 h-10 justify-center items-center rounded-full">
                  <FontAwesomeIcon icon={faAngleRight} className="text-white pointer-events-none absolute transition-all duration-300 group-hover:-translate-x-2 group-hover:opacity-0"/>
                  <FontAwesomeIcon icon={faArrowRight} className="text-white pointer-events-none absolute transition-all duration-300 opacity-0 group-hover:opacity-100 group-active:translate-x-[190px] group-hover:translate-x-1"/>
              </div>
              <span className="group-hover:text-white group-active:-translate-x-full group-active:opacity-0 text-[#88A825] font-semibold text-[18px] transition mr-5">Jelajahi Sekarang</span>
          </div>
        </div>
        <div className="w-3/12">
          <Trash />
        </div>
        <svg xmlns="http://www.w3.org/2000/svg" className="absolute -bottom-1 left-0 w-full -z-10" preserveAspectRatio="none" viewBox="0 0 1440 320">
          <path fill="#2F4F12" fillOpacity="1" d="M0 240 C180 255, 350 270, 550 270 C780 270, 920 245, 1160 175 C1280 135, 1370 125, 1440 145 L1440 320 L0 320 Z"></path>
        </svg>
      </section>

      {/** Second Section */}
      <section className="bg-linear-to-b from-[#2F4F12] to-[#66863E] min-h-screen" id="">

      </section>
    </>
  );
}