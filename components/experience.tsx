import React from 'react';
import {workExperience} from "@/components/data";
import {Button} from "@/components/ui/moving-border";

const Experience = () => {
    return (
        <div className={"py-20"} id={""}>
            <h1 className={"heading"}>
                My <span className={"text-purple"}>Work Experience</span>
            </h1>
            <div className={"flex flex-col items-center max-lg:mt-10"}>

            </div>
            <div className={"w-full mt-12 grid lg:grid-cols-4 grid-cols-1 gap-10"}>
                {workExperience.map(({id, title,thumbnail, desc}) => (
                        <Button key={id} borderRadius={"1.75rem"} className={"flex-1 text-white border-neutral-100 dark:border-slate-800"}>
                            <div className={"flex lg:flex-row lg:items-center p-3 py-6 md:p-5 lg:p*10 gap-2"}>
                                <img src={thumbnail} alt={title} className={"lg:w-32 md:w-20 w-16"}/>
                                <div className={"lg:ms-5"}>
                                    <h1 className={"text-start text-xl md:text-2xl font-bold"}>
                                        {title}
                                    </h1>
                                    <p className={"text-start text-white-100 mt-3 font-semibold"}>
                                        {desc}
                                    </p>
                                </div>
                            </div>
                        </Button>
                ))}
            </div>
        </div>
    );
};

export default Experience;