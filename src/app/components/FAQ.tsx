'use client'

import { faArrowDown, faArrowUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";

export default function FAQ(){
    const [isOpen, setIsOpen] = useState<Boolean>(false);
    
    return(
        <div className="flex flex-col gap-10 items-center">
            <div className="bg-[#F0F7E7] rounded-[25px] px-8 py-6 w-10/12 flex flex-row justify-between">
                <h1 className="font-poppins font-[500] text-[28px] text-[#47621F]">Apa yang dimaksud dengan polusi plastik?</h1>
                <div className="w-10 h-10 bg-[#88A825] rounded-full shadow-[0_10px_35px_1px_black] flex justify-center items-center">
                    <FontAwesomeIcon icon={faArrowDown} className="text-white"/>
                </div>
            </div>
        </div>
    );
}