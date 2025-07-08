import Image from "next/image";
import React from "react";

const About = () => {
  return (
    <div className="w-full flex flex-col items-center  md:px-[5rem] sm:px-[3rem] px-[1rem] py-[2rem] h-full">
      <div className="flex w-full justify-start">
        <h2 className="sm:text-3xl text-2xl font-semibold text-left  text-gray-600 mb-5">
          À PROPOS DE DAR BENTI
        </h2>
      </div>

      <div className="flex md:flex-nowrap flex-wrap justify-center gap-5">
        <Image alt="hotel" src="/about.png" width={400} height={400} />
        <p className="sm:max-w-[50%]">
          Les chambres d’hôtes de Dar Benti, sont situées dans le cœur
          historique de la Médina de Monastir, à la porte Beb El Gharbi, dans le
          quartier des marchands d'épices où se mêlent senteurs, saveurs et
          couleurs. Logées dans une ruelle calme de la Médina, sa situation est
          idéale, à 5mn des principaux musées de la ville et de la plage. Après
          avoir arpenté la trépidante Médina, une fois passées les portes, la
          quiétude des lieux et sa douceur de vivre font de cette maison un
          havre de paix. Etant restaurée avec goût et tradition, Dar Benti
          conjugue authenticité tunisienne et confort moderne. Les matériaux
          sont nobles, délicats et typiques, oscillants entre le bois massif des
          portes sculptées, la finesse de la ferronnerie et les gravures
          entièrement artisanales. ​ Le ton est donné dès l'entrée, les
          multiples arcades, en stuc de plâtre, qui ornent la "skifa", créent
          une véritable transition entre le monde extérieur et l'intérieur de la
          maison. Ses multiples espaces calmes et chaleureux, invitent à lire, à
          se reposer et à méditer.{" "}
        </p>
      </div>
    </div>
  );
};

export default About;
