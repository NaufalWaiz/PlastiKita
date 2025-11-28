"use client";

import { faArrowDown, faArrowUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState, useRef, useLayoutEffect } from "react";

export default function FAQ() {
    const [isOpen, setIsOpen] = useState(null);

    const FAQ = [

        {
            question: 'Apa yang dimaksud dengan polusi plastik?',
            answer: 'Polusi plastik adalah kondisi ketika sampah plastik menumpuk di lingkungan karena sifatnya yang sulit terurai. Penumpukan ini dapat mencemari tanah, air, hingga udara, serta mengancam keberlangsungan ekosistem dan kesehatan manusia.'
        },
        {
            question: 'Mengapa polusi plastik menjadi masalah besar di Indonesia?',
            answer: 'Indonesia masih menghasilkan jumlah sampah plastik yang sangat besar setiap tahunnya. Sebagian tidak dikelola dengan baik, sehingga banyak yang berakhir di sungai, pesisir, dan laut. Kurangnya fasilitas daur ulang dan tingginya penggunaan plastik sekali pakai memperburuk situasi ini.'
        },
        {
            question: 'Apa yang bisa dilakukan untuk mengurangi polusi plastik?',
            answer: 'Langkah kecil seperti membawa tas belanja sendiri, menggunakan botol minum dan wadah makan reusable, memilah sampah di rumah, serta mengurangi pembelian produk berkemasan plastik dapat memberikan dampak besar jika dilakukan secara konsisten.'
        },
        {
            question: 'Apakah semua plastik bisa didaur ulang?',
            answer: 'Tidak semua jenis plastik dapat didaur ulang. Hanya beberapa tipe seperti PET dan HDPE adalah yang paling sering diproses. Plastik multilayer atau plastik dengan campuran bahan lain cenderung sulit didaur ulang dan biasanya berakhir di Tempat Pembuangan Akhir (TPA).'
        },
        {
            question: 'Apa dampak polusi plastik terhadap kesehatan manusia?',
            answer: 'Polusi plastik dapat berdampak langsung maupun tidak langsung pada kesehatan manusia. Mikroplastik yang mencemari air minum, udara, dan makanan dapat masuk ke dalam tubuh tanpa disadari. Paparan jangka panjang berpotensi memengaruhi sistem pernapasan, hormon, hingga meningkatkan risiko gangguan kesehatan tertentu karena bahan kimia berbahaya yang melekat pada partikel plastik tersebut.'
        }

    ];

    const questionRef = useRef<(HTMLDivElement | null)[]>([]);
    const answerRef = useRef<(HTMLDivElement | null)[]>([]);
    const [qHeight, setQHeight] = useState<number[]>([]);
    const [aHeight, setAHeight] = useState<number[]>([]);

    useLayoutEffect(() => {
        const q = FAQ.map((_, i) => questionRef.current[i]?.scrollHeight ?? 0);
        const a = FAQ.map((_, i) => answerRef.current[i]?.scrollHeight ?? 0);

        setQHeight(q);
        setAHeight(a);
    },[]);

    const triggerOpenAnswer = (index: any) => {
        setIsOpen(isOpen === index ? null : index);
    };

    return (
        <div className="flex flex-col gap-10 items-center">
            {FAQ.map((item, key) => {
                const qH = qHeight[key] ?? 0;
                const aH = aHeight[key] ?? 0;
                const totalHeight = qH + aH + 40;
                return(
                    <div key={key} className="w-full flex items-center flex-col gap-10 overflow-hidden duration-500 transition-all"
                        style={{
                            maxHeight: isOpen == key ? totalHeight + "px" : qH + "px",
                        }}>
                        <div
                            className="bg-[#F0F7E7] rounded-[25px] px-8 py-6 w-10/12 flex flex-row justify-between relative z-10 cursor-pointer" 
                            onClick={() => { triggerOpenAnswer(key) }}
                            ref={(el) => {(questionRef.current[key] = el)}}>
                            <h1 className="font-poppins font-[500] text-[28px] text-[#47621F]">
                                {item.question}
                            </h1>
                            <div className="w-[40px] h-[40px] bg-[#88A825] rounded-full shadow-[0_10px_35px_1px_black] flex justify-center items-center">
                                <FontAwesomeIcon icon={faArrowDown} className={`text-white transition-all  ${isOpen === key ? 'rotate-180' : 'rotate-0'}`} />
                            </div>
                        </div>
                        <div 
                            className={`bg-[#396003] w-10/12 rounded-[25px]  px-8 py-6 transition-all duration-500 duration-500 z-0 fade-in`}
                            ref={(el) => {(answerRef.current[key] = el)}}>
                            <p className="text-poppins text-[#CEE8A9] text-[23px] font-[500]">
                                {item.answer}
                            </p>
                        </div>
                    </div>
                    )
                })
            }
        </div>
    );
}
