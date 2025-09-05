"use client"

import { useEffect } from "react"
import AOS from "aos"
import "aos/dist/aos.css"

export default function Services() {
  useEffect(() => {
    AOS.init({
      duration: 800, 
      easing: "ease-in-out",
      once: false,
    })
  }, [])

  const cards = [
    {
      title: "Data Center Technology Infrastructure Solutions",
      desc: "We assess, design, deploy, and optimize data centers built for today's AI and HPC demands",
      img: "https://www.align.com/hubfs/Icon2.svg",
      link: "https://www.align.com/solutions/data-center-solutions?hsLang=en",
    },
    {
      title: "Workplace Technology & AV Solutions",
      desc: "Right-size your workplace with technology built for the connected enterprise",
      img: "https://www.align.com/hubfs/Icon.svg",
      link: "https://www.align.com/professional-services/workplace-technology?hsLang=en",
    },
    {
      title: "Managed IT Services & Cybersecurity",
      desc: "Align Managed Services delivers the highest level of stability and transparency across your IT operations",
      img: "https://www.align.com/hubfs/Group%204.svg",
      link: "https://www.align.com/managed-services?hsLang=en",
    },
  ]

  return (
    <div className="w-full py-12">
      {/* Heading */}
      <div className="max-w-4xl mx-auto text-center mb-12 px-4">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold">
          Explore our <br /> Professional & Managed Services
        </h2>
        <p className="mt-4 text-base sm:text-lg lg:text-xl">
          From strategy to delivery, our winning combination of comprehensive IT
          solutions and experienced professionals unite to accelerate change
          from the data center to the workplace and into the cloud.
        </p>
      </div>

      {/* Cards */}
      <section className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 max-w-6xl mx-auto pt-10 px-4">
        {cards.map((card, i) => (
          <div
            key={i}
            data-aos="fade-right"
            data-aos-delay={i * 150}
            className="bg-gradient-to-r from-[#415fb0] to-[#35c6f7] rounded p-0.5 shadow-lg group relative"
          >
            {/* Inner box */}
            <div className="bg-white rounded h-full p-6 sm:p-8 flex flex-col justify-between transition-all duration-300 relative overflow-hidden">
              
              {/* Top content */}
              <div className="transition-all duration-300 group-hover:opacity-0">
                <img
                  src={card.img}
                  alt={card.title}
                  className="w-12 h-12 sm:w-16 sm:h-16 mb-4"
                />
                <h4 className="text-lg sm:text-xl lg:text-2xl font-bold mb-4 text-gray-900">
                  {card.title}
                </h4>
                <a
                  href={card.link}
                  className="font-semibold text-sm sm:text-base lg:text-lg inline-flex items-center mt-6 relative z-10"
                >
                  Learn more
                  <svg
                    className="ml-2 w-4 h-4 sm:w-5 sm:h-5"
                    fill="none"
                    viewBox="0 0 26 7"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M25.155 3.68043C25.2978 3.53759 25.2978 3.30599 25.155 3.16315L22.8273 0.835478C22.6844 0.692637 22.4529 0.692637 22.31 0.835478C22.1672 0.97832 22.1672 1.20989 22.31 1.35274L24.3791 3.42179L22.31 5.49084C22.1672 5.63368 22.1672 5.86527 22.31 6.0081C22.4529 6.15094 22.6844 6.15094 22.8273 6.0081L25.155 3.68043ZM1 3.78755L24.8963 3.78755L24.8963 3.05603L1 3.05603L1 3.78755Z"
                      fill="currentColor"
                      stroke="currentColor"
                      strokeWidth="0.5"
                    />
                  </svg>
                </a>
              </div>

              {/* Hover overlay */}
              <div className="absolute inset-0 bg-gradient-to-tr from-[#007BFF] to-[#35c6f7] p-6 sm:p-8 flex flex-col justify-center opacity-0 group-hover:opacity-100 transition-all duration-500 ease-in-out rounded">
                
                <h4
                  className="text-lg sm:text-xl lg:text-2xl font-bold mb-3 transform translate-y-6 opacity-0 
                  group-hover:translate-y-0 group-hover:opacity-100 
                  transition-all duration-500 ease-in-out"
                >
                  {card.title}
                </h4>

                <p
                  className="text-sm sm:text-base lg:text-lg mb-6 transform translate-y-6 opacity-0 
                  group-hover:translate-y-0 group-hover:opacity-100 
                  transition-all duration-500 ease-in-out delay-100"
                >
                  {card.desc}
                </p>

                <a
                  href={card.link}
                  className="text-sm sm:text-base lg:text-lg font-semibold inline-flex items-center text-white mt-6 relative z-10 
                    transform translate-y-6 opacity-0 
                    group-hover:translate-y-0 group-hover:opacity-100 
                    transition-all duration-500 ease-in-out delay-200"
                >
                  Learn more
                  <svg
                    className="ml-2 w-4 h-4 sm:w-5 sm:h-5"
                    fill="none"
                    viewBox="0 0 26 7"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M25.155 3.68043C25.2978 3.53759 25.2978 3.30599 25.155 3.16315L22.8273 0.835478C22.6844 0.692637 22.4529 0.692637 22.31 0.835478C22.1672 0.97832 22.1672 1.20989 22.31 1.35274L24.3791 3.42179L22.31 5.49084C22.1672 5.63368 22.1672 5.86527 22.31 6.0081C22.4529 6.15094 22.6844 6.15094 22.8273 6.0081L25.155 3.68043ZM1 3.78755L24.8963 3.78755L24.8963 3.05603L1 3.05603L1 3.78755Z"
                      fill="currentColor"
                      stroke="currentColor"
                      strokeWidth="0.5"
                    />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        ))}
      </section>
    </div>
  )
}
