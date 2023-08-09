import Image from "next/image";
import Link from "next/link";

import logo from "../../public/logo.png"

export default function Logo() {
    return (
        <div
            className={`
                        flex items-center
                        lg:w-64 md:w-44 sm:w-40
                        opacity-50 transition-transform duration-300
                        hover:opacity-100 hover:scale-110`}
        >
            <Link href='/'>
                <Image
                    src={logo}
                    alt="Logo Comando 081"
                    width={190}
                    height={59}
                    style={{minWidth: "150px"}}
                />
            </Link>
        </div>
    )
}