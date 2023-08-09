import { inter, righteous } from "@/pages";
import { AiOutlineWhatsApp } from "react-icons/ai";

export default function Footer() {
    return (
        <div
            className={`
                flex flex-col
                justify-center items-center w-full h-fit
                lg:h-fit
                md:h-fit
                sm:h-fit  
                xsm:h-fit
                overflow-hidden         
            `}
            style={{
                backgroundImage: `url(bg_pattern.png)`
            }}
        >
            <div
                className={`
                flex justify-center items-center w-full h-fit
                lg:flex-row lg:h-fit
                md:h-fit
                sm:flex-col sm:h-fit  
                xsm:flex-col xsm:h-fit
                bg-zinc-800/50         
            `}
            >
                <footer
                    id="Footer"
                    className={`
                    flex flex-col justify-center items-center p-6 py-10
                    text-center
                `}
                data-aos="fade-up" data-aos-duration="1000" data-easing="linear"
                >
                    <h1
                        className={`
                        ${righteous.className} text-3xl text-center text-yellow-400
                        2xl:text-3xl xl:text-2xl lg:text-lg md:text-xl xsm:text-lg
                    `}
                    >
                        CONTATO
                    </h1>
                    <p
                        className={`
                        p-8
                        ${inter.className} text-2xl text-center text-gray-200 tracking-widest font-extrabold
                        2xl:text-xl xl:text-lg lg:text-base md:text-base xsm:text-base
                        `}
                    >
                        Agende seu jogo agora clicando aqui:
                    </p>
                    <div className="flex">
                        <a
                            href="https://api.whatsapp.com/send?phone=5581999615209&text=Oi,%20vim%20atrav%C3%A9s%20do%20site%20do%20Comando%20081..."
                            title="Clique aqui e agende conosco!"
                            className={`
                            flex justify-center items-center
                            ${inter.className} text-2xl text-justify text-gray-200 tracking-widest font-extrabold p-2
                            2xl:text-xl xl:text-lg lg:text-base md:text-base xsm:text-base
                            no-underline duration-300
                            hover:scale-110 hover:text-yellow-400/80
                        `}
                        >
                            <AiOutlineWhatsApp
                                size={26}
                                className="mx-2"
                            />
                            99961-5209
                        </a>
                        <a
                            href="https://api.whatsapp.com/send?phone=5581986649719&text=Oi,%20vim%20atrav%C3%A9s%20do%20site%20do%20Comando%20081..."
                            title="Clique aqui e agende conosco!"
                            className={`
                            flex justify-center items-center
                            ${inter.className} text-2xl text-justify text-gray-200 tracking-widest font-extrabold p-2
                            2xl:text-xl xl:text-lg lg:text-base md:text-base xsm:text-base
                            no-underline duration-300
                            hover:scale-110 hover:text-yellow-400/80
                        `}
                        >
                            <AiOutlineWhatsApp
                                size={26}
                                className="mx-2"
                            />
                            98664-9719
                        </a>
                    </div>
                </footer>
            </div>
            <div
                className={`
                    flex justify-center items-center p-4
                    text-center
                `}
                data-aos="fade-up" data-aos-duration="1300" data-easing="linear" data-aos-anchor="#Footer"
            >
                <p
                    className={`
                    p-2
                    ${inter.className} text-base text-justify text-gray-200 tracking-widest font-extrabold
                    2xl:text-base xl:text-base lg:text-base md:text-base xsm:text-base
                    `}
                >
                    copyright ©2023
                </p>
                <a
                    className={`
                    p-2
                    ${inter.className} text-base text-justify text-gray-200 tracking-widest font-extrabold
                    2xl:text-base xl:text-base lg:text-base md:text-base xsm:text-base
                    no-underline duration-300
                    hover:scale-110 hover:text-yellow-400/80
                    `}
                    href="https://api.whatsapp.com/send?phone=5581996395721&text=Oi,%20vim%20atrav%C3%A9s%20do%20site%20do%20Comando%20081..."
                    target="_blank"
                    title="Soluções em tecnologia para você, clique aqui e peça seu orçamento!"
                >
                    viniDev
                </a>
            </div>
        </div>
    )
}