import { righteous } from "@/pages"
import { GoogleMap, Marker } from "@react-google-maps/api"
import Link from "next/link"

interface PropsMapItem {
    id: string
    unit: string
    zoom: number
    center: google.maps.LatLngLiteral
    marker: google.maps.LatLngLiteral
    title: string
    adress: string
    url: string
}

export default function MapItem(props: PropsMapItem) {
    function renderMap() {

        const image = "https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png";

        return (
            <div
                data-aos="fade-up" data-aos-duration="1000" data-easing="linear"
                className={`
                m-10 rounded-lg bg-gradient-to-r from-white via-yellow-400 to-black
                3xl:w-2/6 2xl:w-2/6 xl:w-2/6 lg:w-2/6 md:w-11/12 sm:w-11/12 xsm:w-11/12
                md:m-8 sm:m-8 xsm:m-8
            `}>
                <div id={props.id}
                    className={`
                        mt-1 p-2
                        bg-zinc-950 rounded-sm
                        shadow-lg shadow-yellow-400/30
                    `}
                >
                    <h2 className={`
                        p-2 ${righteous.className} text-2xl text-center text-yellow-400
                        2xl:text-2xl xl:text-xl lg:text-lg md:text-xl xsm:text-lg
                        `}
                    >
                        {props.unit}
                    </h2>
                    <Link
                        href={props.url}
                        target="_blank"
                        title={props.title}
                        className="flex justify-center items-center"
                    >
                        <GoogleMap
                            zoom={props.zoom}
                            center={props.center}
                            mapContainerClassName={`
                                w-100% h-[63vh]
                                3xl:h-[63vh] 2xl:h-[60vh] xl:h-[52vh] lg:h-[48vh] md:h-[60vh] sm:h-[54vh] xsm:h-[52vh]
                                md:w-11/12 sm:w-11/12 xsm:w-11/12
                            `}
                        >
                            <a
                                href={props.url}
                                target="_blank"
                            >
                                <Marker position={props.marker} icon={image} title={props.title} />
                            </a>
                        </GoogleMap>
                    </Link>
                    <Link
                        href={props.url}
                        target="_blank"
                        title={props.title}
                    >
                        <h3 className={`
                            p-4 ${righteous.className} text-xl text-center text-white
                            2xl:text-xl xl:text-xl lg:text-lg md:text-xl xsm:text-lg
                            no-underline duration-300
                            hover:scale-110 hover:text-yellow-400/80
                        `}>
                            {props.adress}
                        </h3>
                    </Link>
                </div>
            </div>

        )
    }

    return renderMap()
}