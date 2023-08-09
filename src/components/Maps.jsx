import { useLoadScript } from "@react-google-maps/api";
import MapItem from "./MapItem";

export default function Maps() {

    function LoadMap() {

        const { isLoaded } = useLoadScript({
            googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY,
        })

        const piedade = { lat: -8.1538506, lng: -34.9162057 };
        const peixinhos = { lat: -8.0171851, lng: -34.8754143 };
        const mariafarinha = { lat: -7.864566, lng: -34.8358036 };

        if (!isLoaded) return <div>Loading...</div>;
        return (
            <div
                className={`
                flex justify-center items-center w-full
                lg:flex-row lg:h-screen
                md:flex-col md:h-fit
                sm:flex-col sm:h-fit  
                xsm:flex-col xsm:h-fit
                `}
            >
                    <MapItem
                        id="Piedade"
                        unit="UNIDADE PIEDADE"
                        title="Clique aqui e abra o mapa da Unidade Piedade"
                        adress="R. José Félix Damasceno, 479 - Piedade, Jaboatão dos Guararapes - PE, 54400-340"
                        url="https://www.google.com/maps/place/COMANDO+ZER081+-+UNIDADE+PIEDADE/@-8.1538551,-34.9162095,15z/data=!4m5!3m4!1s0x0:0xde68c9195795fbbd!8m2!3d-8.1538506!4d-34.9162057"
                        center={piedade}
                        zoom={14}
                        marker={piedade}
                    />
                    <MapItem
                        id="Peixinhos"
                        unit="UNIDADE PEIXINHOS"
                        title="Clique aqui e abra o mapa da Unidade Peixinhos"
                        adress="Av. Brasília, 275 - Peixinhos, Olinda - PE, 53220-140"
                        url="https://www.google.com/maps/place/COMANDO+ZER081+-+UNIDADE+PEIXINHOS/@-8.0171964,-34.8753263,17z/data=!3m1!4b1!4m5!3m4!1s0x7ab3d43c298faf7:0xc9c1e8ffc74314d0!8m2!3d-8.0171851!4d-34.8754143"
                        center={peixinhos}
                        zoom={14}
                        marker={peixinhos}
                    />
                    <MapItem
                        id="MariaFarinha"
                        unit="UNIDADE MARIA FARINHA"
                        title="Clique aqui e abra o mapa da Unidade Maria Farinha"
                        adress="Av. Dr. Cláudio José Gueiros Leite, 10500 - Maria Farinha, Paulista - PE, 53427-085"
                        url="https://www.google.com/maps/place/Paintball+Maria+Farinha/@-7.8645635,-34.8379381,17z/data=!3m1!4b1!4m5!3m4!1s0x7ab3f8c2554d5eb:0xcd45a662013ef563!8m2!3d-7.864566!4d-34.8358036"
                        center={mariafarinha}
                        zoom={14}
                        marker={mariafarinha}
                    />
            </div>
        );
    }

    return (
        <div
            id="Maps"
            className={`
                flex justify-center items-center w-full h-screen
                2xl:p-36 xl:p-10 lg:p-8 md:p-6 sm:p-4 xsm:p-2
                lg:flex-row lg:h-screen
                md:flex-col md:h-fit
                sm:flex-col sm:h-fit  
                xsm:flex-col xsm:h-fit
                overflow-hidden             
            `}
            style={{
                backgroundImage: `url(bg_pattern.png)`
            }}
        >
            {LoadMap()}
        </div>
    )

}