import React from 'react';
import {InfiniteMovingCards} from "@/components/ui/infinite-moving-cards";
import {companies, testimonials} from "@/components/data";

const Clients = () => {
    return (
        <div className={"py-20"} id={"testimonials"}>
            <h1 className={"heading"}>
                A few words from <span className={"text-purple"}>Satisfied Clients</span>
            </h1>
            <div className={"flex flex-col items-center max-lg:mt-10"}>
                    <InfiniteMovingCards className={"h-[50vh] md:h-[30rem] rounded-md flex flex-col antialiased items-center relative overflow-hidden"} items={testimonials} direction={"right"} speed={"slow"}/>
                <div className={"flex flex-wrap items-center justify-center gap-4 md:gap-16 max-lg mt-10"}>
                    {companies.map(({id, img, name, nameImg})  => (
                        <div key={id} className={"flex md:max-w-60 max-w-32 gap-2"}>
                            <img src={img} alt={name} className={"md:w-10 w-5"}/>
                            <img src={nameImg} alt={name} className={"md:w-24 w-20"}/>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};


export default Clients;