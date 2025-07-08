"use client";

import { Menu, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useState } from "react";

const Navbar = () => {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  console.log(pathname);

  const links = [
    {
      label: "Tarifs",
      href: "/tarifs",
    },
    {
      label: "Réservations",
      href: "/reservations",
    },
    {
      label: "Contact",
      href: "/contact",
    },
    {
      label: "Conditions Generale",
      href: "/conditions-generale",
    },
  ];
  return (
    <nav className="w-full fixed h-[5vh] flex items-center justify-between sm:px-[3rem] md:px-[5rem] px-[1rem] py-[2rem] bg-white z-50 shadow-lg">
      <Link href="/">
        <Image src="/logo.png" width={100} height={50} alt="logo" />
      </Link>

      <ul className="sm:flex hidden items-center gap-10 ">
        {links.map((link) => (
          <li
            key={link.label}
            className={`hover:text-[#0478bb] hover:scale-105 text-black font-[500] transition-all ${
              pathname === link.href ? "text-[#0478bb] font-semibold" : ""
            }`}
          >
            <Link href={link.href}>{link.label}</Link>
          </li>
        ))}
      </ul>

      {/* Mobile Menu Button */}
      <button
        className="sm:hidden block text-black"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? <X size={28} /> : <Menu size={28} />}
      </button>

      {/* Mobile Drawer */}
      <div
        className={`fixed top-0 right-0 h-full w-2/3 bg-white shadow-lg z-[100] transform transition-transform duration-300 ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex justify-end p-4">
          <X
            size={24}
            className="cursor-pointer"
            onClick={() => setIsOpen(false)}
          />
        </div>
        <ul className="flex flex-col gap-6 px-6">
          {links.map((link) => (
            <li
              key={link.label}
              className={`text-black font-[500] hover:text-[#0478bb] ${
                pathname === link.href ? "text-[#0478bb] font-bold" : ""
              }`}
              onClick={() => setIsOpen(false)}
            >
              <Link href={link.href}>{link.label}</Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
