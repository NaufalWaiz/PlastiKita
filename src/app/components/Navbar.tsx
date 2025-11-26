'use client'

import Link from "next/link";
import { useEffect, useState } from "react";

export default function Navbar() {
    const [isActiveMobile, setIsActiveMobile] = useState(false);
    const [isActiveDesktop, setIsActiveDesktop] = useState(false);

    const activateNavbarMobile = () => { // Mobile resolution only
        setIsActiveMobile(true);
    }

    useEffect(() => {
        const activateNavbarDesktop = () => {
            if(window.scrollY > 0){
                setIsActiveDesktop(true);
            }
            else{
                setIsActiveDesktop(false);
            }
        }

        window.addEventListener("scroll", activateNavbarDesktop);
    }, []);

    return (
        <div className="relative z-20">
            <div className="flex flex-col gap-1 left-3 top-3 sm:hidden sticky w-fit" onClick={activateNavbarMobile}> {/** Only appears in mobile resolution */}
                <div className="w-6 h-1 bg-[#88A825] rounded-full"></div>
                <div className="w-6 h-1 bg-[#88A825] rounded-full"></div>
                <div className="w-6 h-1 bg-[#88A825] rounded-full"></div>
            </div>
            <div className={`fixed ${isActiveMobile ? 'translate-x-0' : '-translate-x-full'} ${isActiveDesktop ? 'sm:bg-[#2F4F12] shadow-2xl text-white' : 'bg-none shadow-none text-black'} sm:translate-x-0 z-10 flex w-10/12 h-screen sm:h-auto sm:w-full fixed transition font-medium text-[21px] gap-14 py-5 flex-col sm:flex-row sm:justify-end px-32 font-poppins`}>
                <Link href={"#"}>Beranda</Link>
                <Link href={"#"}>Tentang</Link>
                <Link href={"#"}>Artikel</Link>
                <Link href={"#"}>Quiz</Link>
            </div>
        </div>
    );
}
