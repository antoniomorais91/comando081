import { inter, righteous } from "@/pages";
import dynamic from 'next/dynamic'
const ReactPlayer = dynamic(() => import("react-player/youtube"), { ssr: false });

export default function Command() {
    return (
        <div
            id="Command"
            className={`
                flex justify-center items-center w-full h-[91vh]
                2xl:p-36 xl:p-10 lg:p-8 md:p-6 sm:p-4 xsm:p-2
                lg:flex-row lg:h-[91vh]
                md:flex-col md:h-fit
                sm:flex-col sm:h-fit  
                xsm:flex-col xsm:h-fit
                overflow-hidden             
            `}
            style={{
                backgroundImage: `url(bg_pattern.png)`
            }}
        >
            <div
                data-aos="fade-right" data-aos-duration="1000" data-easing="linear"
                className={`
                m-10 rounded-lg bg-gradient-to-r from-white via-yellow-400 to-black
                3xl:w-2/6 2xl:w-2/6 xl:w-2/6 lg:w-2/6 md:w-11/12 sm:w-11/12 xsm:w-11/12
                md:m-8 sm:m-8 xsm:m-8
            `}>
                <div className={`
                    mt-2 bg-zinc-950 rounded-sm
                    3xl:h-[62vh]
                `}>
                    <h1 className={`
                        pt-4 pb-2 ${righteous.className} text-3xl text-center text-yellow-400
                        2xl:text-3xl xl:text-2xl lg:text-lg md:text-xl xsm:text-lg
                        md:pb-0
                    `}>COMANDO ZERO81</h1>
                    <p className={`
                        p-4 py-9 ${inter.className} text-xl text-justify text-gray-200
                        2xl:text-lg xl:text-base lg:text-base md:text-base xsm:text-base
                        md:py-6
                    `}>Inicialmente com o nome de Power Paintball, a empresa foi fundada em 2008 por apaixonados pelo
                        esporte para ser um espaço de excelência na prática do paintball.
                    </p>
                    <hr className="h-[2px] rounded-3xl mx-40 bg-gradient-to-r from-white via-yellow-400 to-black" />
                    <p className={`
                        p-4 py-9 ${inter.className} text-xl text-justify text-gray-200
                        2xl:text-lg xl:text-base lg:text-base md:text-base xsm:text-base
                        md:py-6
                    `}>Ficamos sempre em locais de fácil acesso, e oferecemos aos nossos clientes e amigos sempre os
                        melhores equipamentos, acompanhado de um elevado atendimento que só nós oferecemos.
                    </p>
                    <hr className="h-[2px] rounded-3xl mx-40 bg-gradient-to-r from-white via-yellow-400 to-black" />
                    <p className={`
                        p-4 py-9 ${inter.className} text-xl text-justify text-gray-200
                        2xl:text-lg xl:text-base lg:text-base md:text-base xsm:text-base
                        md:py-6
                    `}>Não perca mais tempo! Junte sua turma e venha curtir toda essa adrenalina conosco, mas
                        alertamos...
                        o vício será inevitável.
                    </p>
                </div>
            </div>
            <div
                data-aos="fade-left" data-aos-duration="1000" data-easing="linear"
                className={`
                w-4/6 m-10 rounded-lg bg-gradient-to-r from-white via-yellow-400 to-black
                3xl:w-4/6 2xl:w-4/6 xl:w-4/6 lg:w-4/6 md:w-11/12 sm:w-11/12 xsm:w-11/12
                md:m-8
                sm:m-8 sm:mt-2
                xsm:m-8 xsm:mt-1
            `}>
                <div className={`
                    h-[62vh] mt-2 bg-zinc-950 rounded-sm 
                `}>
                    <ReactPlayer
                        url='https://www.youtube.com/watch?v=HjlWbk_CR4A'
                        width={'100%'}
                        height={'100%'}
                        controls
                        />
                </div>
            </div>
        </div>
    )
}