'use client'

import { useEffect, useState } from "react";

interface TipeArtikel{
    image : string,
    title : string,
    description: string,
    artikel: string,
}

const artikel: TipeArtikel[] = [
    {
        image: 'bg-sampah-gorontalo',
        title: 'Laut Terdampak Plastik',
        description: 'Menurut United Nations Environment Programme (UNEP) atau Badan PBB yang mengurus program lingkungan, tahun lalu dunia menghasilkan sekitar 400 juta ton limbah plastik. Banjir botol air dan sham ...',
        artikel : 'https://mongabay.co.id/2025/06/05/hari-lingkungan-hidup-2025-polusi-plastik-kian-penuhi-laut/'
    }
    ,
    {
        image: 'bg-demo-sampah',
        title: 'Plastik Ubah Bumi',
        description: 'Tim peneliti menunjukkan bahwa polusi plastik mengubah proses seluruh sistem bumi, dan memengaruhi semua masalah lingkungan global yang mendesak, termasuk perubahan iklim, hilangnya ...',
        artikel: 'https://betahita.id/news/detail/10692/polusi-plastik-mengubah-sistem-bumi-riset.html?v=1731200256'
    }
    ,
    {
        image: 'bg-people-grouping',
        title: 'UB Teliti Polusi Plastik',
        description: 'Masalah polusi plastik semakin memprihatinkan. Berdasarkan data Sistem Informasi Pengelolaan Sampah Nasional KLHK (2023), sampah plastik menempati urutan tertinggi kedua setelah sam...',
        artikel: 'https://www.brin.go.id/news/125226/air-hujan-jakarta-mengandung-mikroplastik-brin-ingatkan-bahaya-polusi-dari-langit'
    }
    ,
    {
        image: 'bg-aliansi-anti-polusi',
        title: 'Aliansi Antipolusi',
        description: 'Indonesia melakukan penandatanganan nota kesepahaman atau MoU dengan Britania Raya terkait penanganan polusi plastik. Ini menjadi fokus karena kebijakannya bel...',
        artikel: 'https://news.detik.com/berita/d-8216158/indonesia-dan-britania-raya-teken-mou-penanganan-polusi-plastik'
    }
    ,
    {
        image: 'bg-cigarettes',
        title: 'Polusi Plastik dari Rokok',
        description: 'PELUNCURAN hasil brand audit sampah rokok di Jabodetabek pada peringatan Hari Kesehatan Nasional 2025 mengungkap temuan mencengangkan bahwa puntung dan kema...',
        artikel: 'https://mediaindonesia.com/humaniora/831296/sampah-rokok-jadi-sumber-polusi-plastik-paling-persisten-di-perkotaan#google_vignette'
    }
    ,
    {
        image: 'bg-langit-mendung',
        title: 'Mikroplastik pada Air Hujan',
        description: 'Rata-rata, peneliti menemukan sekitar 15 partikel mikroplastik per meter persegi per hari pada sampel hujan di kawasan pesisir Jakarta. Menurut Reza, fenomena ini terjadi karena siklus plastik kini telah ...',
        artikel: 'https://ppsub.ub.ac.id/polusi-plastik-kian-memprihatinkan-tim-dosen-ub-teliti-persepsi-mahasiswa/'
    }
    ,
    {
        image: 'bg-produksi-sampah',
        title: 'Plastik: Kebutuhan vs Masalah',
        description: 'Pemerintah Indonesia sangat berkomitmen untuk mengatasi permasalahan sampah plastik di Tanah Air. "Indonesia sangat kuat tekad untuk kemudian mengurangi secara ...',
        artikel: 'https://dlh.bulelengkab.go.id/informasi/detail/artikel/17_sampah-plastik-di-sekitar-kita-antara-kebutuhan-dan-masalah-yang-ditimbulkan'
    }
    ,
    {
        image: 'bg-sampah-plastik',
        title: 'Kolaborasi Plastik COP30',
        description: 'Di Indonesia masih banyak ditemukan pemakaian plastik yang merupakan salah satu material digunakan untuk kemasan sekali pakai. Namun sayang, pengelolaan sampah plastik di Indonesia belum ...',
        artikel: 'https://esgnow.republika.co.id/berita/t5nl3e416/indonesianorwegia-bahas-solusi-sampah-plastik-di-cop30'
    }
];


export default function ArtikelCarousel(){
    const [currentPage, setCurrentPage] = useState(0);

    const startIndex = currentPage * 3;
    const lastindex = startIndex + 3;

    const next = () => {
        setCurrentPage((prev) => prev === 2 ? 0 : prev + 1);
    }

    const before = () => {
        setCurrentPage((prev) => prev === 0 ? 2 : prev - 1);
    }

    const displayArticles = artikel.slice(startIndex, lastindex);

    return(
        <div className="w-11/12 lg:w-10/12 mx-auto relative z-10">
            <div className="mb-24 flex flex-col md:flex-row gap-10 justify-center">
                {displayArticles.map((item, index) => (
                <div className="w-full md:w-4/12 lg:w-3/12 h-[392px]" key={index}>
                    <div className={`${item.image} bg-cover bg-center w-full h-[144px] lg:h-[174px] rounded-t-[20px]`}></div>
                    <div className="w-full px-4 py-2 lg:py-3 bg-[#C8F29D]">
                        <h1 className="font-poppins font-[600] text-[#3F3313] text-[14px] lg:text-[16px]">{item.title}</h1>
                    </div> 
                    <div className="bg-[#F9FFE9] border-2 border-[#C8F29D] py-4 px-2 rounded-b-[20px]">
                        <p className="text-[#3F3313] font-poppins font-[400] text-[12px] mb-7">
                           {item.description}
                        </p>
                        <div className="mx-auto w-fit">
                            <a className="bg-[#4A3A1D] py-2 px-8 font-poppins text-[9px] font-semibold rounded-full text-center" href={item.artikel} target="_blank">
                                Baca Selengkapnya
                            </a>
                        </div>
                    </div>
                </div>
                ))}
            </div>
            <div className="flex flex-row justify-between items-center w-full md:w-5/12 mx-auto">
                <button className="rounded-full w-[35px] h-[35px] p-2 bg-[#88A825] active:scale-90 shadow-2xl flex justify-center items-center text-2xl text-white cursor-pointer" onClick={before}>
                    ‹
                </button>
                <div className="bg-[#F4F4F4] rounded-full shadow-2xl flex flex-row gap-8 px-5 py-3">
                    <div onClick={() => setCurrentPage(0)} className={`${currentPage === 0 ? 'bg-[#88A825] text-white' : 'bg-none text-black'} active:scale-90 rounded-full h-[23px] w-[23px] flex justify-center items-center p-4 cursor-pointer`}>1</div>
                    <div onClick={() => setCurrentPage(1)} className={`${currentPage === 1 ? 'bg-[#88A825] text-white' : 'bg-none text-black'} active:scale-90 rounded-full h-[23px] w-[23px] flex justify-center items-center p-4 cursor-pointer`}>2</div>
                    <div onClick={() => setCurrentPage(2)} className={`${currentPage === 2 ? 'bg-[#88A825] text-white' : 'bg-none text-black'} active:scale-90 rounded-full h-[23px] w-[23px] flex justify-center items-center p-4 cursor-pointer`}>3</div>
                </div>
                <button className="rounded-full w-[35px] h-[35px] p-2 bg-[#88A825] active:scale-90 shadow-2xl flex justify-center items-center text-2xl text-white cursor-pointer" onClick={next}>
                    ›
                </button>
            </div>
        </div>
    );
}