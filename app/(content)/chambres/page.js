import Image from "next/image";
import Link from "next/link";
import React from "react";

const ChambresPage = () => {
  return (
    <div className="w-full flex flex-col items-center md:px-[5rem] sm:px-[3rem] px-[1rem] py-[2rem] h-full">
      <div className="flex w-full justify-start mt-[100px]">
        <h2 className="sm:text-3xl text-2xl font-semibold text-gray-600 mb-5">
          Nos Chambres
        </h2>
      </div>

      <div className="flex flex-wrap justify-center items-center gap-6 mt-2 h-[500px] w-full">
        {/* Column 1: Single tall image */}
        <Link
          href={`/chambres/chambre_royale`}
          className="sm:flex-[3] h-full overflow-hidden rounded-lg relative basis-[300px]"
        >
          <Image
            src="/chambre-royale/royale1.png"
            width={300}
            height={500}
            alt="royale"
            className="w-full h-full object-cover rounded-lg cursor-pointer  hover:scale-105  transition-all duration-500"
          />
          <div className="absolute bottom-0 left-0 w-full bg-[#0478bb]/50 text-white font-semibold text-center py-2 rounded-b-lg">
            <p>SUITE ROYALE ALYSSA</p>
          </div>
        </Link>

        {/* Column 2: Two stacked images matching height of Column 1 */}
        <div className="flex flex-col justify-between sm:flex-[4] h-full basis-[300px]">
          <Link
            href={`/chambres/chambre_sarah`}
            className="h-[240px] overflow-hidden rounded-lg relative"
          >
            <Image
              src="/chambre-sarah/sarah1.png"
              width={300}
              height={240}
              alt="royale"
              className="w-full h-full object-cover rounded-lg cursor-pointer  hover:scale-105  transition-all duration-500"
            />
            <div className="absolute bottom-0 left-0 w-full bg-[#0478bb]/50 text-white font-semibold text-center py-2 rounded-b-lg">
              <p>CHAMBRE SARAH</p>
            </div>
          </Link>
          <Link
            href={`/chambres/chambre_shaine`}
            className="h-[240px] overflow-hidden rounded-lg relative"
          >
            <Image
              src="/chambre-shaine/shaine1.png"
              width={300}
              height={240}
              alt="royale"
              className="w-full h-full object-cover rounded-lg cursor-pointer  hover:scale-105  transition-all duration-500"
            />
            <div className="absolute bottom-0 left-0 w-full bg-[#0478bb]/50 text-white font-semibold text-center py-2 rounded-b-lg">
              <p>CHAMBRE SHAÏNE</p>
            </div>
          </Link>
        </div>

        {/* Column 3: Same as Column 2 */}
        <div className="flex flex-col justify-between sm:flex-[4] h-full basis-[300px]">
          <Link
            href={`/chambres/chambre_elise`}
            className="h-[240px] overflow-hidden rounded-lg relative"
          >
            <Image
              src="/chambre-elise/elise1.png"
              width={300}
              height={240}
              alt="royale"
              className="w-full h-full object-cover rounded-lg cursor-pointer hover:scale-105  transition-all duration-500"
            />
            <div className="absolute bottom-0 left-0 w-full bg-[#0478bb]/50 text-white font-semibold text-center py-2 rounded-b-lg">
              <p>CHAMBRE ELISE</p>
            </div>
          </Link>
          <Link
            href={`/chambres/chambre_carole`}
            className="h-[240px] overflow-hidden rounded-lg relative"
          >
            <Image
              src="/chambre-carole/carole1.png"
              width={300}
              height={240}
              alt="royale"
              className="w-full h-full object-cover rounded-lg cursor-pointer hover:scale-105  transition-all duration-500"
            />
            <div className="absolute bottom-0 left-0 w-full bg-[#0478bb]/50 text-white font-semibold text-center py-2 rounded-b-lg">
              <p>CHAMBRE CAROLE</p>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ChambresPage;
