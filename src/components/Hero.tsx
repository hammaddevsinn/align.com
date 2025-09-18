"use client";

import Image from "next/image";
import Headernew from "./Headernew";

export default function Hero() {
  return (
    <div className="relative w-full h-[263px] sm:h-[302px] md:h-[223px] lg:h-[353px] overflow-hidden">
      {/* Hero Image */}
      <Image
        src="/images/hero.jpeg"
        alt="Hero"
        fill
        className="object-cover"
        priority
      />

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/40 z-10"></div>

      {/* Header */}
      <Headernew />

      {/* Text Container */}
      <div className="relative z-30 w-full max-w-[1500px] px-6 md:px-9 pt-[8rem] md:pt-[6rem] lg:pt-[13rem] mx-auto text-center">
        <div className="max-w-[950px] mx-auto">
          {/* Decorative SVG */}
          <svg
            className="hidden mx-auto mb-4 max-w-[80px]"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 59 2"
          >
            <path d="M4 1h54" stroke="url(#a)" strokeWidth="2"></path>
            <path stroke="#99A9FF" strokeWidth="2" d="M2 1H0"></path>
            <defs>
              <linearGradient
                x1="58"
                y1="1"
                x2="4"
                y2="-.4"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#66FFE5"></stop>
                <stop offset="1" stopColor="#99A9FF"></stop>
              </linearGradient>
            </defs>
          </svg>

          {/* Heading */}
          <h2 className="font-bold text-4xl lg:text-5xl text-white mt-0">
            Powering <span className="text-orange-500">Digital</span> Transformation
          </h2>
        </div>
      </div>
    </div>
  );
}
