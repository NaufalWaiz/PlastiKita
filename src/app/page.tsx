import Trash from "./components/Trash";
import CTAButton from "./components/CTAButton";
import { text } from "stream/consumers";

export default function Home() {
  return (
    <>
      {/** First Section */}
      <section
        className="min-h-screen bg-none text-black pt-14 px-3 sm:px-12 sm:pt-36 font-poppins sm:flex xl:items-center sm:flex-row"
        id="beranda"
      >
        <div className="w-full md:w-7/12 lg:w-8/12">
          <h1 className="font-semibold text-[28px] sm:text-[32px] w-11/12 sm:w-11/12 mb-6">
            Bagaimana Kondisi Polusi Plastik yang Kian Memprihatinkan di{" "}
            <span className="bg-[#F89B11] inline-block text-white">
              Indonesia
            </span>
            ?
          </h1>
          <p className="opacity-50 w-full sm:w-10/12 text-[12px] xsm:text-[15px] sm:text-[16px] mb-5 leading-relaxed">
            Polusi plastik adalah masalah lingkungan yang semakin
            mengkhawatirkan di Indonesia. Sampah plastik yang tidak terkelola
            dengan baik mencemari tanah, sungai, dan laut, serta membahayakan
            ekosistem dan kesehatan manusia. Menurut data dari World Bank tahun
            2021, Indonesia menghasilkan lebih dari 7,8 juta ton sampah plastik
            setiap tahun, dan sekitar 3,2 juta ton di antaranya berakhir di
            laut.
          </p>
          <CTAButton section="#section-2" text="Jelajahi Sekarang" />
        </div>
        <div className="w-4/12 lg:w-3/12 hidden md:block">
          <Trash />
        </div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="absolute -bottom-6 sm:-bottom-1 left-0 w-full -z-10"
          preserveAspectRatio="none"
          viewBox="0 0 1440 320"
        >
          <path
            fill="#2F4F12"
            fillOpacity="1"
            d="M0 240 C180 255, 350 270, 550 270 C780 270, 920 245, 1160 175 C1280 135, 1370 125, 1440 145 L1440 320 L0 320 Z"
          ></path>
        </svg>
      </section>

      {/** Second Section */}
      <section
        className="bg-linear-to-b from-[#2F4F12] to-[#66863E] min-h-screen py-16 font-semibold px-10"
        id="section-2"
      >
        <h1 className="font-sora text-[44px] text-center mb-14">
          Tingkat{" "}
          <span className="relative after:content-[''] after:absolute sm:after:bottom-[-2px] after:rounded-2xl after:left-0 sm:after:left-[18px] after:w-[140px] sm:after:w-[198px] after:h-[5px] after:bg-[#DDA73A]">
            Polusi Plastik
          </span>{" "}
          di Indonesia
        </h1>
        <div className="w-full flex justify-center mb-10">
          <p className="w-[80%] text-center font-[400] font-poppins text-[20px]">
            Polusi plastik adalah masalah lingkungan yang semakin
            mengkhawatirkan di Indonesia. Sampah plastik yang tidak terkelola
            dengan baik mencemari tanah, sungai, dan laut, serta membahayakan
            ekosistem dan kesehatan manusia. Menurut data dari World Bank tahun
            2021, Indonesia menghasilkan lebih dari 7,8 juta ton sampah plastik
            setiap tahun, dan sekitar 3,2 juta ton di antaranya berakhir di
            laut.
          </p>
        </div>
        <div className="w-full flex flex-col sm:flex-row gap-10 items-center sm:justify-items-normal justify-center">
          <div className="bg-sampah-gorontalo bg-cover bg-center w-[261px] h-[221px] xsm:w-[361px] xsm:h-[321px] sm:w-[461px] sm:h-[421px] rounded-2xl shadow-2xl"></div>
          <div className="bg-demo-sampah bg-cover bg-center w-[261px] h-[221px] xsm:w-[361px] xsm:h-[321px] sm:w-[461px] sm:h-[421px] rounded-2xl shadow-2xl"></div>
        </div>
      </section>

      {/** Third section */}
      <section className="min-h-screen bg-white pt-32 pb-16">
        <h1 className="font-sora text-[#3F3313] text-[44px] font-[600] text-center mb-20 lg:mb-28">
          Tujuan Kami
        </h1>
        <div className="flex flex-col lg:flex-row justify-center items-center gap-24">
          <div className="w-10/12 md:w-8/12 lg:w-6/12">
            <p className="font-poppins text-black text-[18px] md:text-[24px] text-center">
              Mengingat Indonesia masih menjadi salah satu penyumbang sampah
              plastik terbesar di dunia, platform ini hadir untuk meningkatkan
              literasi lingkungan masyarakat. Melalui materi edukatif tentang
              dampak dan penanganan sampah plastik, pengguna diharapkan dapat
              membangun kebiasaan minim sampah dan menerapkan prinsip reduce,
              reuse, recycle. Dengan demikian, platform ini turut mendukung
              target Indonesia Bebas Sampah Plastik 2030 dan upaya pelestarian
              lingkungan.
            </p>
          </div>
          <div className="flex flex-row items-center gap-5">
            <div className="bg-tumpukan-sampah bg-center bg-cover w-[68px] h-[250px] xsm:w-[88px] xsm:h-[270px] md:w-[128px] md:h-[310px] rounded-[18px] xsm:rounded-[30px]"></div>
            <div className="bg-sampah-bakar bg-center bg-cover w-[98px] h-[320px] xsm:w-[118px] xsm:h-[370px] md:w-[153px] md:h-[432px] rounded-[30px]"></div>
            <div className="bg-sampah-air bg-center bg-cover w-[68px] h-[250px] xsm:w-[88px] xsm:h-[270px] md:w-[128px] md:h-[310px] rounded-[18px] xsm:rounded-[30px]"></div>
          </div>
        </div>
      </section>
    </>
  );
}
