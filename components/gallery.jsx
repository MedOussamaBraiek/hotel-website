"use client";

import { ChevronLeft, ChevronRight, X } from "lucide-react";
import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";

import { gsap } from "gsap";
import { SplitText } from "gsap/all";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const Gallery = () => {
  const interieurImages = [
    "/gallery/interieur1.png",
    "/gallery/interieur2.png",
    "/gallery/interieur3.png",
    "/gallery/interieur4.png",
    "/gallery/interieur5.png",
    "/gallery/interieur6.png",
    "/gallery/interieur7.png",
  ];

  const exterieurImages = [
    "/gallery/exterieur1.png",
    "/gallery/exterieur2.png",
    "/gallery/exterieur3.png",
    "/gallery/exterieur4.png",
    "/gallery/exterieur5.png",
    "/gallery/exterieur6.png",
    "/gallery/exterieur7.png",
  ];

  const allImages = [...interieurImages, ...exterieurImages];

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [screenWidth, setScreenWidth] = useState(1200);

  const titleRef = useRef(null);
  const titleRef2 = useRef(null);
  const imagesRef = useRef(null);
  const imagesRef2 = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(SplitText, ScrollTrigger);

    const splitTitle = new SplitText(titleRef.current, { type: "words" });
    const splitTitle2 = new SplitText(titleRef2.current, { type: "words" });

    gsap.from(splitTitle.words, {
      y: 80,
      opacity: 0,
      ease: "power2.out",
      stagger: 0.05,
      duration: 0.8,
      scrollTrigger: {
        trigger: titleRef.current,
        start: "top-=80% 90%",
        end: "top 30%",
      },
    });

    gsap.fromTo(
      splitTitle2.words,
      { y: 80, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        ease: "power2.out",
        stagger: 0.05,
        duration: 0.8,
        scrollTrigger: {
          trigger: titleRef2.current,
          start: "top-=80% 90%",
          end: "top 30%",
        },
      }
    );

    gsap.fromTo(
      imagesRef.current,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: "power2.out",
        scrollTrigger: {
          trigger: imagesRef.current,
          start: "top-=80% 30%",
          end: "top 30%",
        },
      }
    );

    gsap.fromTo(
      imagesRef2.current,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: "power2.out",
        scrollTrigger: {
          trigger: imagesRef2.current,
          start: "top-=30% 50%",
          end: "top 30%",
        },
      }
    );

    // Force refresh after animations are added
    setTimeout(() => {
      ScrollTrigger.refresh();
    }, 0);

    return () => {
      // Revert both SplitTexts
      splitTitle.revert();
      splitTitle2.revert();
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  useEffect(() => {
    const handleResize = () => setScreenWidth(window.innerWidth);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const openModal = (index) => {
    setCurrentIndex(index);
    setIsModalOpen(true);
  };

  const closeModal = () => setIsModalOpen(false);

  const showPrev = () =>
    setCurrentIndex((prev) => (prev === 0 ? allImages.length - 1 : prev - 1));

  const showNext = () =>
    setCurrentIndex((prev) => (prev === allImages.length - 1 ? 0 : prev + 1));

  const renderImageGrid = (images, offset = 0) => {
    const isMobile = screenWidth < 640;
    const isTablet = screenWidth >= 640 && screenWidth < 1024;
    const visibleCount = isMobile ? 3 : isTablet ? 5 : images.length;

    return images.slice(0, visibleCount).map((image, index) => (
      <div
        key={index}
        className="group basis-1/2 sm:basis-1/3 md:basis-1/4 lg:basis-1/6 flex-grow transition-all duration-500 hover:basis-1/2 cursor-pointer"
        onClick={() => openModal(index + offset)}
      >
        <Image
          src={image}
          alt={`image-${index}`}
          width={1000}
          height={600}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>
    ));
  };

  return (
    <div className="w-full flex flex-col items-center  md:px-[5rem] sm:px-[3rem] px-[1rem] py-[2rem] h-full">
      <div className="flex w-full justify-start">
        <h2
          ref={titleRef}
          className="sm:text-3xl text-2xl font-semibold text-left  text-gray-600 mb-5"
        >
          Gallerie Photo (INTÉRIEUR)
        </h2>
      </div>

      <div ref={imagesRef} className="flex w-full h-[400px] overflow-hidden">
        {renderImageGrid(interieurImages)}
      </div>

      <div className="flex w-full justify-start mt-[100px]">
        <h2
          ref={titleRef2}
          className="sm:text-3xl text-2xl font-semibold text-left  text-gray-600 mb-5"
        >
          Gallerie Photo (EXTÉRIEUR)
        </h2>
      </div>

      <div ref={imagesRef2} className="flex w-full h-[400px] overflow-hidden">
        {renderImageGrid(exterieurImages)}
      </div>

      {/* MODAL */}
      {isModalOpen && (
        <div className="fixed inset-0 z-[200] bg-black bg-opacity-80 flex items-center justify-center p-4">
          <button
            onClick={closeModal}
            className="absolute top-4 right-4 text-white cursor-pointer"
          >
            <X size={32} />
          </button>

          <button
            onClick={showPrev}
            className="absolute left-4 text-white bg-black/50 p-2 rounded-full cursor-pointer"
          >
            <ChevronLeft size={32} />
          </button>

          <div className="max-w-4xl w-full h-auto">
            <Image
              src={allImages[currentIndex]}
              alt="modal"
              width={1200}
              height={800}
              className="w-full h-auto object-contain rounded"
            />
          </div>

          <button
            onClick={showNext}
            className="absolute right-4 text-white bg-black/50 p-2 rounded-full cursor-pointer"
          >
            <ChevronRight size={32} />
          </button>
        </div>
      )}
    </div>
  );
};

export default Gallery;
