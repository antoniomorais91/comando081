import Link from "next/link"

interface PropsNavItem {
    text: string
    url?: string
    title: string
    target?: string
    className?: string
    onClick?: (evento: any) => void
}

export default function NavItem(props: PropsNavItem) {
    function renderLink() {
        return (
            <a target={props.target}
                title={props.title}
                className={`
                flex items-center tracking-widest mx-7 py-2
                no-underline text-white text-center duration-300
                hover:scale-110 hover:text-yellow-400/80
                xl:text-xl lg:text-lg
                md:text-lg sm:text-sm
            `}>
                <span className={`
                `}>
                    {props.text}
                </span>
            </a>
        )
    }

    return (
            <li>
                {props.url ? (
                    <Link legacyBehavior href={props.url}>
                        {renderLink()}
                    </Link>
                ) : (
                    renderLink()
                )}
            </li>
    )
}