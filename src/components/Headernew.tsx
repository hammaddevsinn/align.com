"use client";

import Image from "next/image";
import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const navItems = [
  { id: 1, name: "Home", link: "hero" },
  { id: 2, name: "Services", link: "services" },
  { id: 3, name: "Workplace", link: "workplace" },
  { id: 4, name: "About", link: "about" },
  { id: 5, name: "Blog", link: "blog" },
  { id: 6, name: "Contact Us", link: "contact" },
];

export const Headernew = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [sticky, setSticky] = useState(false);

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
    setMenuOpen(false);
  };

  // Sticky header on scroll
  useEffect(() => {
    const handleScroll = () => {
      setSticky(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        sticky
          ? "md:bg-white/95 shadow-md bg-gradient-to-r from-[#FFA500] to-[#FF7F50]"
          : "bg-transparent"
      }`}
    >
      <div className="flex justify-between items-center px-6 py-4">
        {/* Logo */}
        <div className="flex items-center gap-3 md:gap-2">
          <div className="relative w-12 h-12">
            <Image
              src="/headerIcon/logo.png"
              alt="Logo"
              fill
              priority
              className="object-contain"
            />
          </div>
          <h1
            className={`font-bold text-lg ${
              sticky ? "md:text-black text-white" : "text-white"
            }`}
          >
            InfinetWorx
          </h1>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex gap-6 md:gap-3 font-medium">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.link)}
              className={`relative px-3 py-1 rounded group cursor-pointer ${
                sticky ? "md:text-black text-white" : "text-white"
              } hover:text-blue-400 transition-colors`}
            >
              {item.name}
              <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-blue-400 group-hover:w-full transition-all"></span>
            </button>
          ))}
        </nav>

        {/* Mobile Hamburger */}
        <div className="md:hidden z-50">
          <button onClick={() => setMenuOpen(!menuOpen)} className="text-white">
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`fixed top-0 left-0 h-full w-64 bg-gray-900/95 z-40 transform transition-transform duration-300 ${
          menuOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <ul className="flex flex-col mt-20 gap-6 md:gap-4 px-6">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.link)}
              className="text-white text-lg hover:text-blue-400 cursor-pointer transition-colors text-left"
            >
              {item.name}
            </button>
          ))}
        </ul>
      </div>
    </header>
  );
};

export default Headernew;
