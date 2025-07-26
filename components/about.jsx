"use client";

import Image from "next/image";
import React, { useEffect, useLayoutEffect, useRef } from "react";
import { gsap } from "gsap";
import { SplitText } from "gsap/all";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const About = () => {
  const titleRef = useRef(null);
  const paraRef = useRef(null);
  const imageRef = useRef(null);

  useLayoutEffect(() => {
    gsap.registerPlugin(SplitText, ScrollTrigger);

    let splitTitleInstance;

    // Always reset opacity (for back navigation)
    if (titleRef.current) titleRef.current.style.opacity = "1";
    if (paraRef.current) paraRef.current.style.opacity = "1";
    if (imageRef.current) imageRef.current.style.opacity = "1";

    // Clean previous split if any
    splitTitleInstance?.revert();
    titleRef.current.innerHTML = titleRef.current.textContent || "";

    splitTitleInstance = new SplitText(titleRef.current, { type: "words" });

    const ctx = gsap.context(() => {
      gsap.from(splitTitleInstance.words, {
        y: 80,
        autoAlpha: 0,
        ease: "power2.out",
        stagger: 0.05,
        duration: 0.8,
        scrollTrigger: {
          trigger: titleRef.current,
          start: "top center",
          end: "bottom top",
          scrub: false,
        },
      });

      gsap.from(imageRef.current, {
        x: -100,
        autoAlpha: 0,
        duration: 0.8,
        ease: "power2.out",
        scrollTrigger: {
          trigger: imageRef.current,
          start: "top center",
          scrub: false,
        },
      });

      gsap.from(paraRef.current, {
        y: 50,
        autoAlpha: 0,
        duration: 0.8,
        ease: "power2.out",
        scrollTrigger: {
          trigger: paraRef.current,
          start: "top center",
          scrub: false,
        },
      });
    });

    return () => {
      splitTitleInstance?.revert();
      ctx.revert();
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <div className="w-full flex flex-col items-center  md:px-[5rem] sm:px-[3rem] px-[1rem] py-[2rem] h-full">
      <div className="flex w-full justify-start">
        <h2
          ref={titleRef}
          className="sm:text-3xl text-2xl font-semibold text-left  text-gray-600 mb-5"
        >
          À PROPOS DE DAR BENTI
        </h2>
      </div>

      <div className="flex md:flex-nowrap flex-wrap justify-center gap-5">
        <Image
          ref={imageRef}
          alt="hotel"
          src="/about.png"
          width={400}
          height={400}
        />
        <p
          ref={paraRef}
          className="sm:max-w-[50%] leading-relaxed "
          style={{ overflow: "hidden" }}
        >
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
