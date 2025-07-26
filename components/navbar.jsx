"use client";

import { Menu, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";

const Navbar = () => {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  const navbarRef = useRef(null);
  const drawerRef = useRef(null);
  const desktopLinksRef = useRef([]);
  const mobileLinksRef = useRef([]);

  const links = [
    {
      label: "Chambres",
      href: "/chambres",
    },
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

  useEffect(() => {
    gsap.fromTo(
      navbarRef.current,
      { y: -50, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.6,
        ease: "power3.out",
      }
    );

    gsap.fromTo(
      desktopLinksRef.current,
      { y: 10, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.6,
        stagger: 0.1,
        ease: "power3.out",
      }
    );
  }, []);

  // Animate mobile drawer open
  useEffect(() => {
    if (isOpen) {
      gsap.fromTo(
        drawerRef.current,
        { x: "100%" },
        { x: 0, duration: 0.4, ease: "power2.out" }
      );

      gsap.fromTo(
        mobileLinksRef.current,
        { x: 30, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 0.4,
          stagger: 0.1,
          delay: 0.2,
          ease: "power2.out",
        }
      );
    }
  }, [isOpen]);

  return (
    <nav className="w-full fixed h-[5vh] flex items-center justify-between sm:px-[3rem] md:px-[5rem] px-[1rem] py-[2rem] bg-white z-50 shadow-lg">
      <Link href="/">
        <Image src="/logo.png" width={100} height={50} alt="logo" />
      </Link>

      <ul ref={navbarRef} className="sm:flex hidden items-center gap-10 ">
        {links.map((link, index) => (
          <li
            key={link.label}
            ref={(el) => (desktopLinksRef.current[index] = el)}
            className={`text-black font-[500] hover:text-[#0478bb] ${
              pathname === link.href ? "text-[#0478bb] font-bold" : ""
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
        ref={drawerRef}
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
          {links.map((link, index) => (
            <li
              key={link.label}
              ref={(el) => (mobileLinksRef.current[index] = el)}
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
