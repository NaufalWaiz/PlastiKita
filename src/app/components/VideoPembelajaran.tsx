'use client'

import { useState } from "react";

export default function VideoPembelajaran(){
    const[currentVideo, setCurrentVideo] = useState(0);
    const video = [
        {
            title: 'Video 1',
            id: 1,
            embed: 'O3dbLmxsS1Q'
        },
        {
            title: 'Video 2',
            id: 2,
            embed: 'CGd3lgxReFE'
        },
        {
            title: 'Video 3',
            id: 3,
            embed: 'JFXYKJi-33M'
        },
        {
            title: 'Video 4',
            id: 4,
            embed: '_6xlNyWPpB8'
        },
    ]

    return(
        <div>
            <div className="flex flex-row justify-center mb-18">
                {video.map((item, index) => {
                    const distance = Math.abs(index - currentVideo);
                    return(
                    <div key={index} className="relative">
                        <button 
                            className={`${index === currentVideo ? 'scale-110 shadow-[0_0px_20px_#59D979] inset-shadow-none bg-[#7ED957]' : 'scale-95 shadow-[0_0px_20px_black] brightness-75 bg-[#558B2F] -ml-4'} relative font-poppins font-medium text-[13px] text-white rounded-[10px] px-6 py-3`}
                            style={{
                                zIndex: 10 - distance,
                            }}
                            onClick={() => setCurrentVideo(index)}>
                            {item.title}
                        </button>
                    </div>
                )})}
            </div>
            <div className="w-11/12 md:w-6/12 bg-white flex justify-center items-center mx-auto py-[46px] rounded-[25px]">
                <iframe
                    className="w-[360px] h-[215px] md:w-[560px] md:h-[315px]"
                    src={`https://www.youtube.com/embed/${video[currentVideo].embed}`}
                    title="YouTube video player"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    >
                        
                </iframe>
            </div>
        </div>
    );
}