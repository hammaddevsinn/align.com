"use client"

import { useEffect } from "react"
import AOS from "aos"
import "aos/dist/aos.css"
import Image from "next/image"

export default function Services() {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: false, // allow repeat animations
      easing: "ease-in-out",
    })

    // 🔥 Force refresh after mount
    const timer = setTimeout(() => {
      AOS.refresh()
    }, 200)

    // 🔥 Refresh also on scroll + resize
    const handleScroll = () => AOS.refresh()
    const handleResize = () => AOS.refresh()

    window.addEventListener("scroll", handleScroll)
    window.addEventListener("resize", handleResize)

    return () => {
      clearTimeout(timer)
      window.removeEventListener("scroll", handleScroll)
      window.removeEventListener("resize", handleResize)
    }
  }, [])
  const cards = [
    {
      title: "Data and AI",
      desc: "We design intelligent ecosystems that transform raw data into actionable intelligence using scalable cloud-native platforms and cutting-edge AI.",
      img: "/icons/icon3.svg",
      link: "https://infinet-worx-latest.vercel.app/services/data-ai-services",
    },
    {
      title: "SAP Services and Implementation",
      desc: "We deliver SAP consulting, implementation, and integration, helping businesses optimize operations with SAP S/4HANA, SAP BTP, and related modules.",
      img: "/icons/icon2.svg",
      link: "https://infinet-worx-latest.vercel.app/services/sap-services-implementation",
    },
    {
      title: "Professional Services",
      desc: "Our Professional Services team provides strategic guidance, technical delivery, and on-ground execution to help enterprises meet business goals with precision and speed.",
      img: "/icons/icon2.svg",
      link: "https://www.align.com/managed-services?hsLang=en",
    },
    {
      title:"Intelligent Automation & Integration",
      desc:"We bridge system silos and streamline operations with smart integration patterns and AI-powered process automation frameworks.",
      img:"/icons/icon1.svg",
      link:"/"
    },
    {
      title:"Governance , Security & Compliance",
      desc:"We help organizations establish a foundation of trust, compliance, and control across the entire data and application landscape.",
      img:"/icons/icon1.svg",
      link:"/"
    },
    
    {
      title:"Industries We Serve",
      desc:"At Infinetworx, our mission is to be your digital transformation partner of choice, delivering results with precision, agility, and innovation.",
      img:"/icons/icon1.svg",
      link:"/"
    }
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
            className="bg-gradient-to-r from-[#FFA500] to-[#FF7F50] rounded p-0.5 shadow-lg group relative"
          >
            {/* Inner box */}
            <div className="bg-white rounded h-full p-8 sm:p-10 flex flex-col justify-between transition-all duration-300 relative overflow-hidden">
              
              {/* Top content */}
              <div className="transition-all duration-300 group-hover:opacity-0">
                <Image
                  src={card.img}
                  alt={card.title}
                  width={50}
                  height={50}
                  className="w-12 h-12 sm:w-16 sm:h-16 mb-4"
                />
                <h4 className="text-lg sm:text-xl lg:text-2xl font-bold mb-4 text-gray-900">
                  {card.title}
                </h4>
                <a
                  href="#"
                  className="font-semibold text-sm sm:text-base lg:text-lg inline-flex items-center mt-4 relative z-10"
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
              <div className="absolute inset-0 bg-gradient-to-r from-[#FFA500] to-[#FF7F50] p-3 sm:p-4 flex flex-col justify-center opacity-0 group-hover:opacity-100 transition-all duration-500 ease-in-out rounded">
                
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
                  className="text-sm sm:text-base lg:text-lg font-semibold inline-flex items-center text-white  relative z-10 
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
