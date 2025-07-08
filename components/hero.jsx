import React from "react";
import Navbar from "./navbar";
import ReservationCard from "./reservation-card";

const HeroSection = () => {
  return (
    <section className="hero relative max-h-[100vh] mt-[5vh] h-[80vh] overflow-visible">
      <video
        autoPlay
        muted
        loop
        playsInline
        id="bg-video"
        className="absolute top-0 left-0 min-w-full max-h-[80vh] h-full object-cover -z-10"
      >
        <source src="./dar-benti-video.mp4" type="video/mp4" />
      </video>
      <div className="absolute top-0 left-0 w-full h-full bg-black/50 z-0" />

      <div className="relative z-10 w-full h-full text-white ">
        <div className="md:px-[5rem] sm:px-[3rem] px-[1rem] py-[2rem] h-full">
          <div className="flex flex-col gap-3 w-full h-full sm:mt-[-50px] mt-[-100px] items-center justify-center">
            <h1 className="sm:text-4xl text-2xl text-white font-semibold">
              Dar Benti
            </h1>
            <p className="text-white sm:text-[22px] text-[18px] max-w-full sm:max-w-[450px] text-center">
              La première maison d'hôtes dans la Médina de Monastir Dar Benti
              est agréée par l'ONTT (Office National du Tourisme Tunisien)
            </p>
          </div>
          <div className="absolute left-1/2 bottom-[-50px] transform -translate-x-1/2 z-100 ">
            <ReservationCard />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
