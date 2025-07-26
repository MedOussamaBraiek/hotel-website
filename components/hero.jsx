"use client";
import React, { useEffect, useRef, useState } from "react";
import ReservationCard from "./reservation-card";
import Image from "next/image";
import Link from "next/link";
import { gsap } from "gsap";

const HeroSection = () => {
  const images = [
    "/hero1.jpg",
    "/hero2.jpg",
    "/hero3.jpg",
    "/hero4.jpg",
    "/hero5.jpg",
  ];
  const [current, setCurrent] = useState(0);
  const textRef = useRef(null);
  const descRef = useRef(null);
  const lineRef = useRef(null);
  const cardRef = useRef(null);
  const scoreRef = useRef(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 3000); // change image every 3 seconds

    return () => clearInterval(interval);
  }, []);

  // Animate opacity transition with gsap
  useEffect(() => {
    const TLFADE = gsap.timeline();

    TLFADE.fromTo(
      textRef.current,
      { autoAlpha: 0, y: -30 },
      { autoAlpha: 1, y: 0, duration: 0.5 }
    )
      .fromTo(
        descRef.current,
        { autoAlpha: 0, y: -30 },
        { autoAlpha: 1, y: 0, duration: 0.5, delay: 0.1 },
        "-=0.2"
      )
      .to(
        lineRef.current,
        {
          height: 50,
          duration: 0.5,
          delay: 0.2,
          ease: "power2.out",
        },
        "-=0.2"
      )
      .fromTo(
        cardRef.current,
        { autoAlpha: 0, y: -30 },
        { autoAlpha: 1, y: 0, duration: 0.5, delay: 0.3 },
        "-=0.2"
      )
      .fromTo(
        scoreRef.current,
        { x: "100vw", autoAlpha: 0 }, // ✅ Start off-screen to the right
        {
          x: 0, // ✅ Land at original position
          autoAlpha: 1,
          duration: 0.5,
          delay: 0.3,
          ease: "power2.out",
          onComplete: () => {
            // ✅ Vibration effect
            gsap.to(scoreRef.current, {
              x: 10,
              duration: 0.1,
              yoyo: true,
              repeat: 5,
              ease: "power1.inOut",
              onComplete: () => {
                gsap.to(scoreRef.current, {
                  x: 0,
                  duration: 0.1,
                  ease: "power1.inOut",
                });
              },
            });
          },
        }
      );
  }, []);

  return (
    <section className="hero relative max-h-[100vh] mt-[5vh] h-[80vh] overflow-visible">
      {/* <video
        autoPlay
        muted
        loop
        playsInline
        id="bg-video"
        className="absolute top-0 left-0 min-w-full max-h-[80vh] h-full object-cover -z-10"
      >
        <source src="./dar-benti-video.mp4" type="video/mp4" />
      </video> */}
      {images.map((src, index) => (
        <img
          key={index}
          src={src}
          alt={`bg-${index}`}
          className={`absolute top-0 left-0 w-full h-full object-cover transition-opacity duration-1000 ${
            index === current ? "opacity-100" : "opacity-0"
          }`}
        />
      ))}
      <div className="absolute top-0 left-0 w-full h-full bg-black/50 z-0" />

      <Link
        ref={scoreRef}
        href="https://www.booking.com/hotel/tn/dar-benti.fr.html?aid=311089&label=dar-benti-tvkiaSDEef6XfBpg4e8nCAS410758170670%3Apl%3Ata%3Ap1%3Ap2%3Aac%3Aap%3Aneg%3Afi%3Atikwd-852618988505%3Alp1012760%3Ali%3Adec%3Adm%3Appccp%3DUmFuZG9tSVYkc2RlIyh9YfNeh-lbHkPZZDrBVOcopBI&sid=1d22d32dd5f540177ca3d63c2e49ea02&dest_id=-728914&dest_type=city&dist=0&from_beach_non_key_ufi_sr=1&group_adults=2&group_children=0&hapos=1&hpos=1&no_rooms=1&room1=A%2CA&sb_price_type=total&sr_order=popularity&srepoch=1611596040&srpvid=6eaa7b845cec018a&type=total&ucfs=1&activeTab=main"
      >
        <Image
          alt="booking"
          src="/booking.png"
          height={80}
          width={250}
          className="absolute right-0 cursor-pointer z-50 sm:top-1/2 top-10"
        />
      </Link>

      <div className="relative z-10 w-full h-full text-white ">
        <div className="md:px-[5rem] sm:px-[3rem] px-[1rem] py-[2rem] h-full">
          <div className="flex flex-col gap-3 w-full h-full sm:mt-[-50px] mt-[-100px] items-center justify-center">
            <h1
              ref={textRef}
              className="sm:text-4xl text-2xl text-white font-semibold "
            >
              Dar Benti
            </h1>
            <div
              ref={lineRef}
              className="middle-line h-0 w-[2px] relative bg-white m-[40px auto]"
            ></div>
            <p
              ref={descRef}
              className="text-white sm:text-[22px] text-[18px] max-w-full sm:max-w-[450px] text-center"
            >
              La première maison d'hôtes dans la Médina de Monastir Dar Benti
              est agréée par l'ONTT (Office National du Tourisme Tunisien)
            </p>
          </div>
          <div className="absolute left-1/2 bottom-[-50px] transform -translate-x-1/2 z-100 ">
            <ReservationCard ref={cardRef} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
