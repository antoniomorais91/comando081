import { inter, righteous } from "@/pages";
import Swiper2 from "./Swiper2";
import Units from "./Units";

export default function How() {
    return (
        <div
            id="How"
            className={`
                flex justify-center items-center w-full h-[91vh] pt-20
                2xl:p-36 xl:p-10 lg:p-8 md:p-6 sm:p-4 xsm:p-2
                lg:flex-row lg:h-[91vh]
                md:flex-col md:h-fit
                sm:flex-col sm:h-fit  
                xsm:flex-col xsm:h-fit             
            `}
            style={{
                backgroundImage: `url(bg_pattern.png)`
            }}
        >
            <div
                data-aos="fade-right" data-aos-duration="1000" data-easing="linear"
                className={`
                m-10 rounded-lg bg-gradient-to-r from-white via-yellow-400 to-black
                3xl:w-[25vw] 2xl:w-[21vw] xl:w-[23vw] lg:w-[27vw] md:w-10/12 sm:w-11/12 xsm:w-11/12
                md:m-8 sm:m-8 xsm:m-8
            `}>
                <div className={`
                    mt-2 bg-zinc-950 rounded-sm
                    3xl:h-[87vh] 2xl:h-[76vh] xl:h-[76vh] lg:h-[76vh] md:h-full
                `}>
                    <Swiper2 />
                </div>
            </div>
            <div
                data-aos="fade-left" data-aos-duration="1000" data-easing="linear"
                className={`
                w-4/6 m-10 rounded-lg bg-gradient-to-r from-white via-yellow-400 to-black
                3xl:w-[51vw] 2xl:w-[51vw] xl:w-[51vw] lg:w-[51vw] md:w-11/12 sm:w-11/12 xsm:w-11/12
                md:m-8
                sm:m-8 sm:mt-2
                xsm:m-8 xsm:mt-1
            `}>
                <div className={`
                    mt-2 bg-zinc-950 rounded-sm overflow-auto
                    3xl:h-[87vh] 2xl:h-[76vh] xl:h-[76vh] lg:h-[76vh]
                `}>
                    <Units />
                </div>
            </div>
        </div>
    )
}