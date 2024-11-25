"use client"

import React from 'react';
import {MagicButton} from "@/components/ui/magicButton";
import {FaLocationArrow} from "react-icons/fa";
import {socialMedia} from "@/components/data";

const Footer = () => {
    return (
        <footer className={"w-full mb-[100px] pb-10 md:mb-5"} id={"contact"}>
            <div className={"w-full absolute left-0 -bottom-72 min-h-96"}>
                <img src={"/footer-grid.svg"} alt={"grid"} className={"w-full h-full opacity-50"}/>
            </div>
            <div className={"flex flex-col items-center"}>
                <h1 className={"heading lg:max-w-[45vw]"}>
                    Ready to take <span className={"text-purple"}>your </span> digital presence to the next level
                </h1>
                <p className={"text-white text-center md:mt-10 my-5"}>
                    Reach out to me today and let&apos;s discuss how I can Help you achieve your goals
                </p>
                <a href={"mailto:tshegofatsorasodi@gmail.com"}>
                    <MagicButton title={"Let's Get in Touch"} icon={<FaLocationArrow/>} position={"right"}/>
                </a>
            </div>
            <div className={"flex mt-16 md:flex-row flex-col justify-between items-center"}>
               <p className={"md:text-base text-sm md:font-normal font-light"}>
                   Copyright © 2024 Tshegofatso
               </p>

                <div className={"flex items-center md:gap-3 gap-6"}>
                    {socialMedia.map(({id,img, link}) => (
                        <div key={id} className={"w-10 h-10 cursor-pointer flex justify-center items-center backdrop-filter backdrop-blur-lg saturate-180 bg-opacity-75 bg-black-200 rounded-lg border border-black-300"}>
                            <img src={img} alt={img} width={20} height={20} onClick={() => window.open(link, '_blank')}/>
                        </div>
                    ))}
                </div>
            </div>
        </footer>
    );
};

export default Footer;