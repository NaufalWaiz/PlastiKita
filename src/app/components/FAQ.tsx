"use client";

import { faArrowDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState, useRef, useLayoutEffect } from "react";

type FAQItem = {
    question: string;
    answer: string;
};

const FAQ_ITEMS: FAQItem[] = [
    {
        question: "Apa yang dimaksud dengan polusi plastik?",
        answer:
            "Polusi plastik adalah kondisi ketika sampah plastik menumpuk di lingkungan karena sifatnya yang sulit terurai. Penumpukan ini dapat mencemari tanah, air, hingga udara, serta mengancam keberlangsungan ekosistem dan kesehatan manusia.",
    },
    {
        question: "Mengapa polusi plastik menjadi masalah besar di Indonesia?",
        answer:
            "Sebagai negara kepulauan dengan konsumsi plastik tinggi, banyak sampah yang berakhir di sungai dan laut karena kurangnya infrastruktur pengelolaan dan kebiasaan memilah.",
    },
    {
        question: "Apa yang bisa dilakukan untuk mengurangi polusi plastik?",
        answer:
            "Mulai dengan reduce, reuse, recycle: kurangi penggunaan plastik sekali pakai, gunakan ulang wadah yang ada, dan pastikan plastik bersih untuk didaur ulang.",
    },
    {
        question: "Apakah semua plastik bisa didaur ulang?",
        answer:
            "Tidak semua jenis plastik dapat didaur ulang di fasilitas lokal. Periksa kode resin 1 dan 2 (PET, HDPE) sebagai prioritas utama untuk daur ulang.",
    },
    {
        question: "Apa dampak polusi plastik terhadap kesehatan manusia?",
        answer:
            "Mikroplastik dapat masuk ke rantai makanan dan memengaruhi kesehatan melalui kontaminasi air dan pangan, serta membawa bahan kimia berbahaya.",
    },
];

export default function FAQ() {
    const [openIndex, setOpenIndex] = useState<number | null>(0);
    const questionRef = useRef<Array<HTMLDivElement | null>>([]);
    const answerRef = useRef<Array<HTMLDivElement | null>>([]);
    const [qHeight, setQHeight] = useState<number[]>([]);
    const [aHeight, setAHeight] = useState<number[]>([]);

    useLayoutEffect(() => {
        const q = FAQ_ITEMS.map((_, i) => questionRef.current[i]?.scrollHeight ?? 0);
        const a = FAQ_ITEMS.map((_, i) => answerRef.current[i]?.scrollHeight ?? 0);

        setQHeight(q);
        setAHeight(a);
    }, []);

    const triggerOpenAnswer = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <div className="flex flex-col items-center gap-6">
            {FAQ_ITEMS.map((item, key) => {
                const qH = qHeight[key] ?? 0;
                const aH = aHeight[key] ?? 0;
                const totalHeight = qH + aH + 36;
                const isOpen = openIndex === key;
                const delay = 0.1 + key * 0.05;

                return (
                    <div
                        key={item.question}
                        className={`w-full max-w-6xl overflow-hidden rounded-[18px] bg-gradient-to-r from-[#eaf4d7] via-[#f3f8e6] to-[#eaf4d7] shadow-[0_18px_50px_rgba(80,120,40,0.12)] transition-all duration-500 hover:shadow-[0_20px_55px_rgba(80,120,40,0.16)] ${isOpen ? "ring-2 ring-[#88a825]/40" : ""} animate-rise`}
                        style={{
                            maxHeight: isOpen ? `${totalHeight}px` : `${qH}px`,
                            animationDelay: `${delay}s`,
                        }}
                    >
                        <div
                            className="flex cursor-pointer items-center justify-between px-6 py-5 transition duration-300 hover:bg-white/40"
                            onClick={() => {
                                triggerOpenAnswer(key);
                            }}
                            ref={(el) => {
                                questionRef.current[key] = el;
                            }}
                        >
                            <div className="flex items-center gap-3">
                                <span className="grid h-8 w-8 place-items-center rounded-full bg-[#88a825]/20 text-[#304b17]">
                                    {String(key + 1).padStart(2, "0")}
                                </span>
                                <h3 className="font-poppins text-lg font-semibold text-[#304b17] sm:text-xl">
                                    {item.question}
                                </h3>
                            </div>
                            <div className={`grid h-10 w-10 place-items-center rounded-full text-white shadow-[0_10px_30px_rgba(120,168,37,0.45)] transition ${isOpen ? "bg-[#304b17]" : "bg-[#88a825]"}`}>
                                <FontAwesomeIcon
                                    icon={faArrowDown}
                                    className={`transition-all ${isOpen ? "rotate-180" : "rotate-0"}`}
                                />
                            </div>
                        </div>
                        <div
                            className="px-6 pb-6"
                            ref={(el) => {
                                answerRef.current[key] = el;
                            }}
                        >
                            <div className="rounded-[14px] bg-[#cde5a5] px-4 py-4 text-sm leading-relaxed text-[#2d4315] sm:text-base shadow-inner shadow-[#88a825]/20">
                                {item.answer}
                            </div>
                        </div>
                    </div>
                );
            })}
        </div>
    );
}
