'use client'

import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
    const [isActive, setIsActive] = useState(false);

    const activateNavbar = () => {
        setIsActive(true);
    }
    return (
        <>
            <div className="absolute flex flex-col gap-1 left-3 top-3 sm:hidden" onClick={activateNavbar}>
                <div className="w-6 h-1 bg-[#88A825] rounded-full"></div>
                <div className="w-6 h-1 bg-[#88A825] rounded-full"></div>
                <div className="w-6 h-1 bg-[#88A825] rounded-full"></div>
            </div>
            <div className={`${isActive ? 'translate-x-0' : '-translate-x-full'} sm:translate-x-0 z-10 flex w-10/12 h-[100vh] sm:h-auto sm:w-full fixed transition sm:absolute bg-[#88A825] sm:bg-white font-medium text-[21px] gap-14 text-black py-5 flex-col sm:flex-row sm:justify-end px-32 font-poppins`}>
                <Link href={"#"}>Beranda</Link>
                <Link href={"#"}>Tentang</Link>
                <Link href={"#"}>Artikel</Link>
                <Link href={"#"}>Quiz</Link>
            </div>
        </>
    );
}
