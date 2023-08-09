import { righteous } from "@/pages"
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai'
import { useState } from "react"
import Logo from "./Logo"
import Icons from "./Icons"
import NavItem from "./NavItem"

export default function Navbar() {

    const [nav, setNav] = useState(false)

    const handleNav = () => {
        setNav(!nav)
    }

    return (
        <div className={`
                flex justify-evenly items-center p-3
                2xl:px-44 xl:px-32 lg:px-24 md:px-20 sm:px-14
                w-full bg-repeat bg-fixed bg-top-center
                opacity-95 text-white shadow-lg shadow-yellow-400/30
                
            `}
            style={{
                backgroundImage: `url(bg_pattern.png)`
            }}>
            <Logo />
            {/* Navbar */}
            <ul className={`
                justify-center items-center
                flex-grow
                hidden lg:flex align-center
                list-none ${righteous.className}
            `}>
                <NavItem url="#Command" text="COMANDO ZERO81" title="Nossa história..." />
                <NavItem url="#How" text="COMO FUNCIONA" title="Como jogar conosco?!" />
                <NavItem url="https://www.instagram.com/comandozer081/reels/" target="_blank" text="REELS" title="Clique aqui e veja nossos reels!" />
                <NavItem url="#Footer" text="CONTATO" title="Entre em contato e agende seu jogo agora!" />
            </ul>
            <div className="flex flex-col items-center p-2">
                {/* Mobile Button */}
                <div className={`
                                block lg:hidden z-10
                                cursor-pointer hover:scale-125
                                animate-pulse transition duration-500 ease-in-out
                                `}
                    onClick={handleNav}>
                    {nav ? <AiOutlineClose size={26} />
                        : <AiOutlineMenu size={26} />}
                </div>
                <div
                    className={
                        nav
                            ? `absolute lg:hidden top-0 right-0
                                flex justify-center items-center w-full h-screen
                                bg-black text-center
                                ease-in`
                            : `absolute hidden top-0 right-[-100%]
                                justify-center items-center w-full h-screen
                                bg-black text-center
                                ease-in`
                    }
                >
                    <ul onClick={handleNav} className={`
                    flex flex-col items-center
                    ${righteous.className}
                `}>
                        <NavItem url="#Command" text="COMANDO ZERO81" title="Nossa história..." />
                        <NavItem url="#How" text="COMO FUNCIONA" title="Como jogar conosco?!" />
                        <NavItem url="https://www.instagram.com/comandozer081/reels/" target="_blank" text="REELS" title="Clique aqui e veja nossos reels!" />
                        <NavItem url="#Footer" text="CONTATO" title="Entre em contato e agende seu jogo agora!" />
                    </ul>
                </div>
            </div>
            <Icons />
        </div>
    )
}