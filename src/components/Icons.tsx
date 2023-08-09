import { IconFace, IconInsta, IconWpp } from "@/icons"

export default function Icons() {
    return (
        <div className={`
                        flex items-center
        `}>
                    <a className={`
                        m-3 duration-300 ease-in
                        hover:scale-125 hover:text-yellow-400/80
                    `}
                        href="https://web.facebook.com/ComandoZer081/"
                        target="_blank"
                        title="Clique e conheça nosso perfil no Facebook!"
                    >
                        {IconFace}
                    </a>
                    <a className={`
                        m-3 duration-300
                        hover:scale-125 hover:text-yellow-400/80
                    `}
                        href="https://www.instagram.com/comandozer081/"
                        target="_blank"
                        title="Clique e conheça nosso perfil no Instagram!"
                    >
                        {IconInsta}
                    </a>
                    <a className={`
                        m-3 duration-300
                        hover:scale-125 hover:text-yellow-400/80
                    `}
                        href="https://api.whatsapp.com/send?phone=5581999615209&text=Oi,%20vim%20atrav%C3%A9s%20do%20site%20do%20Comando%20081..."
                        target="_blank"
                        title="Clique aqui e agende conosco!"
                    >
                        {IconWpp}
                    </a>
                </div>
    )
}