'use client'

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight, faArrowRight } from "@fortawesome/free-solid-svg-icons";

export default function CTAButton({section, text}: {section : string, text : string}){
    return(
        <a className="group w-fit flex flex-row items-center gap-5 transform transition bg-transparent hover:bg-[#88A825] rounded-full cursor-pointer" href={`${section}`}>
            <div className="flex bg-[#88A825] w-10 h-10 justify-center items-center rounded-full">
                <FontAwesomeIcon icon={faAngleRight} className="text-white pointer-events-none absolute transition-all duration-300 group-hover:-translate-x-2 group-hover:opacity-0"/>
                <FontAwesomeIcon icon={faArrowRight} className="text-white pointer-events-none absolute transition-all duration-300 opacity-0 group-hover:opacity-100 group-active:translate-x-[190px] group-hover:translate-x-1"/>
            </div>
            <span className="group-hover:text-white group-active:-translate-x-full group-active:opacity-0 text-[#88A825] font-semibold text-[18px] transition mr-5">{text}</span>
        </a>
    );
}