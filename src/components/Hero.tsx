"use client"

import Image from "next/image"
import Header from "./Header"

export default function Hero() {
  return (
    <div className="relative w-full h-[263px] sm:h-[302px] md:h-[223px] lg:h-[353px] overflow-hidden opacity-90 z-10">

      {/* Optimized Hero Image */}
      <Image
        src="/images/hero.jpeg"
        alt="Hero"
        fill
        className="object-cover"
        priority
      />

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/40 z-0"></div>

      {/* Header */}
      <Header />

      {/* Text container */}
      <div className="relative z-10 w-full max-w-[1500px] px-9 pt-[6rem] md:pt-[6rem] lg:pt-[13rem]  mx-auto box-border">
        <div className="max-w-[950px] mx-auto mb-0 text-center">

          {/* Decorative SVG */}
          <svg className="hidden mx-auto mb-4 max-w-[80px] clear-both" fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 59 2">
            <path d="M4 1h54" stroke="url(#a)" strokeWidth="2"></path>
            <path stroke="#99A9FF" strokeWidth="2" d="M2 1H0"></path>
            <defs>
              <linearGradient x1="58" y1="1" x2="4" y2="-.4" gradientUnits="userSpaceOnUse">
                <stop stopColor="#66FFE5"></stop>
                <stop offset="1" stopColor="#99A9FF"></stop>
              </linearGradient>
            </defs>
          </svg>

          {/* Heading */}
          <h2 className="font-bold text-4xl lg:text-5xl text-white mt-0 ">
            Powering <span className="text-orange-500">Digital</span> Transformation
          </h2>

        </div>
      </div>
    </div>
  )
}
