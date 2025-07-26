import {
  Accessibility,
  Bed,
  BedDouble,
  Heater,
  Refrigerator,
  TowerControl,
  Tv,
  Wifi,
  Wind,
} from "lucide-react";
import Image from "next/image";
import { notFound } from "next/navigation";
import { use } from "react";

const roomDetails = {
  chambre_carole: {
    title: "Chambre Carole",
    description:
      "La chambre Carole de 22 m², peut accueillir quant à elles, qu'un seul couple. Elle est plus moderne avec comme revêtement du tadelakt sur les murs et sols de la salle d'eau (enduit à la chaux traditionnelle marocaine)",
    image1: "/chambre-carole/carole1.png",
  },
  chambre_elise: {
    title: "Chambre Elise",
    description:
      "La chambre Elise de 24 m², peut accueillir quant à elles, qu'un seul couple. Elle est plus moderne avec comme revêtement du tadelakt sur les murs et sols de la salle d'eau (enduit à la chaux traditionnelle marocaine)",
    image1: "/chambre-elise/elise1.png",
    image2: "/chambre-elise/elise2.png",
  },
  chambre_shaine: {
    title: "Chambre Shaïne",
    description:
      "La chambre Shaïne de 26 m², est ornée de grands plafonds voutés. Elle dispose d'un lit double et d'une mezzanine pouvant accueillir un enfant. En dessous de celle-ci, une salle d'eau a été aménagée : une douche à l'italienne tout en marbre blanc, d'un lavabo et d'une toilette.",
    image1: "/chambre-shaine/shaine1.png",
    image2: "/chambre-shaine/shaine2.png",
    image3: "/chambre-shaine/shaine3.png",
    image4: "/chambre-shaine/shaine4.png",
  },
  chambre_sarah: {
    title: "Chambre Sarah",
    description:
      "La chambre Sarah de 30 m², est ornée de grands plafonds voutés. Elle dispose d'un lit double et d'une mezzanine pouvant accueillir un enfant. En dessous de celle-ci, une salle d'eau a été aménagée : une douche à l'italienne tout en marbre blanc, d'un lavabo et d'une toilette.",
    image1: "/chambre-sarah/sarah1.png",
    image2: "/chambre-sarah/sarah2.png",
    image3: "/chambre-sarah/sarah3.png",
    image4: "/chambre-sarah/sarah4.png",
  },
  chambre_royale: {
    title: "SUITE ROYALE ALYSSA",
    description: `Portant bien son nom, la Suite Royale Alyssa, est la plus grande chambre de Dar Benti avec plus de 48m², elle est le parfait exemple de la conception architecturale traditionnelle. On y retrouve une grande arcade spectaculaire en pierre naturelle du pays, toute sculptée et portant la gravure de l'ancien propriétaire. De l'autre côté de celle-ci, un mejles, salon typique tunisien, avec ses banquettes en bois sculptées invite à l'hospitalité autour d'un verre de thé à la menthe.\nUne mezzanine pouvant accueillir un enfant a été conçue au-dessus de la salle d'eau. Celle-ci est équipée d'une douche à l'italienne tout en marbre blanc, d'un lavabo et d'une toilette.\nCette chambre a été élaborée afin de répondre à tout type de clientèle. En effet, la salle d'eau a été étudiée de manière à accueillir des personnes à mobilité réduite.`,
    image1: "/chambre-royale/royale1.png",
    image2: "/chambre-royale/royale2.png",
    image3: "/chambre-royale/royale3.png",
    image4: "/chambre-royale/royale4.png",
    image5: "/chambre-royale/royale5.png",
  },
};

const carateristics = [
  {
    icon: <Wind />,
    title: "Climatisation",
  },
  {
    icon: <Wifi />,
    title: "Wi-Fi",
  },
  {
    icon: <Tv />,
    title: "Télévision",
  },
  {
    icon: <Heater />,
    title: "Chauffage",
  },
  {
    icon: <Refrigerator />,
    title: "Refrigerator",
  },
  {
    icon: <TowerControl />,
    title: "Serviettes et linges de lit",
  },
  {
    icon: <Accessibility />,
    title: "Accessibilité PMR",
  },
];
function ChambrePage(asyncProps) {
  const { chambre } = use(asyncProps.params);

  const data = roomDetails[chambre];

  console.log(data);

  if (!data) return notFound();

  return (
    <div className="w-full flex flex-col items-center md:px-[5rem] sm:px-[3rem] px-[1rem] py-[2rem] h-full">
      <div className="flex w-full justify-start mt-[80px]">
        <h2 className="sm:text-3xl text-2xl font-semibold text-gray-600 mb-5">
          {data.title}
        </h2>
      </div>{" "}
      <div className="flex flex-wrap justify-center items-center sm:gap-6 mt-2 sm:h-[500px] w-full">
        <div
          href={`/chambres/chambre_royale`}
          className="sm:flex-[3] h-full overflow-hidden sm:rounded-lg rounded-t-lg relative basis-[300px]"
        >
          <Image
            src={data.image1}
            width={300}
            height={500}
            alt="royale"
            className="w-full h-full object-cover sm:rounded-lg rounded-t-lg cursor-pointer  hover:scale-105  transition-all duration-500"
          />
        </div>

        <div className="flex sm:flex-col justify-between sm:flex-[4] h-full basis-[300px] ">
          {data.image2 && (
            <div className="h-[240px] sm:w-full w-[50%] overflow-hidden sm:rounded-lg relative">
              <Image
                src={data.image2}
                width={300}
                height={240}
                alt="royale"
                className="w-full h-full object-cover sm:rounded-lg cursor-pointer  hover:scale-105  transition-all duration-500"
              />
            </div>
          )}
          <div className="h-[240px] sm:w-full w-[50%] overflow-hidden sm:rounded-lg  relative">
            {data.image3 && (
              <Image
                src={data.image3}
                width={300}
                height={240}
                alt="royale"
                className="w-full h-full object-cover sm:rounded-lg cursor-pointer  hover:scale-105  transition-all duration-500"
              />
            )}
          </div>
        </div>

        <div className="flex sm:flex-col justify-between sm:flex-[4] h-full basis-[300px]">
          <div className="h-[240px] sm:w-full w-[50%] overflow-hidden sm:rounded-lg rounded-bl-lg relative">
            {data.image4 && (
              <Image
                src={data.image4}
                width={300}
                height={240}
                alt="royale"
                className="w-full h-full object-cover sm:rounded-lg rounded-bl-lg cursor-pointer hover:scale-105  transition-all duration-500"
              />
            )}
          </div>
          <div className="h-[240px] sm:w-full w-[50%] overflow-hidden sm:rounded-lg rounded-br-lg relative">
            {data.image5 && (
              <Image
                src={data.image5}
                width={300}
                height={240}
                alt="royale"
                className="w-full h-full object-cover sm:rounded-lg rounded-br-lg cursor-pointer hover:scale-105  transition-all duration-500"
              />
            )}
          </div>
        </div>
      </div>
      <div className="flex flex-wrap gap-7 w-full my-[50px]">
        <div className="w-full sm:w-[45%]">
          <h2 className="sm:text-3xl text-2xl font-semibold text-gray-600 mb-5">
            Description
          </h2>
          <p className="text-lg">{data.description}</p>
        </div>
        <div className="w-full sm:w-[45%]">
          <h2 className="sm:text-3xl text-2xl font-semibold text-gray-600 mb-5">
            Points Forts
          </h2>
          <div className="flex gap-5 items-center justify-start my-[25px]">
            <div className="flex items-center gap-3">
              <BedDouble className="text-[#0478bb]" size={35} />
              <p>160cm/190cm</p>
            </div>
            <div className="flex items-center gap-3">
              <BedDouble className="text-[#0478bb]" size={30} />
              <p>90cm/200cm</p>
            </div>
          </div>
          <div className="flex flex-wrap w-full sm:justify-center justify-start gap-5 items-center">
            {carateristics.map((item, index) => (
              <div key={index} className="flex flex-col gap-3 items-center">
                <div className="text-[#0478bb]">{item.icon}</div>
                <div>{item.title}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ChambrePage;
