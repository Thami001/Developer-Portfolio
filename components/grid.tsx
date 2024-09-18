import React from 'react';
import {BentoGrid, BentoGridItem} from "@/components/ui/bento-grid";
import {GridItems} from "@/components/data";

const Grid = () => {
    return (
        <section id={"about"}>
            <BentoGrid>
                {GridItems.map(({id, description, title, className, imgClassName, img, spareImg, titleClassName}) => (
                    <BentoGridItem id={id} key={id} description={description} title={title} className={className} img={img} imgClassName={imgClassName} spareImg={spareImg} titleClassName={titleClassName} />
                ))}
            </BentoGrid>
        </section>
    );
};

export default Grid;