"use client";

import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function Procedure() {
  useEffect(() => {
    // Init AOS
    AOS.init({
      duration: 800,
      once: false, // allow repeat
      easing: "ease-in-out",
    });

    // Refresh AOS
    const refresh = () => AOS.refresh();
    window.addEventListener("load", refresh);
    window.addEventListener("resize", refresh);

    // 👇 Force remove aos-animate when element leaves viewport
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) {
            entry.target.classList.remove("aos-animate");
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = document.querySelectorAll<HTMLElement>("[data-aos]");
    elements.forEach((el) => io.observe(el));

    return () => {
      window.removeEventListener("load", refresh);
      window.removeEventListener("resize", refresh);
      io.disconnect();
    };
  }, []);

  return (
    <section className="relative w-full min-h-[400px] font-['IBM Plex Sans'] overflow-x-hidden">
      <div className="relative w-full px-6 md:px-6 lg:px-12 max-w-[1500px] mx-auto">
        {/* Heading */}
        <div className="w-full text-center">
          <svg
            className="hidden mx-auto mb-4 max-w-[80px] md:block"
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
                <stop stopColor="#66FFE5" />
                <stop offset="1" stopColor="#99A9FF" />
              </linearGradient>
            </defs>
          </svg>
          <h4 className="text-2xl px-4 font-bold mb-6 leading-snug">
            Proven Success with Align's World-Class People, Process &amp; Tools
          </h4>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 sm:gap-4 lg:gap-10 mt-8 w-full">
          {cards.map((card, i) => (
            <div
              key={i}
              data-aos="fade-right"
              data-aos-delay={200 * (i + 1)}
              className="bg-gradient-to-r from-[#FFA500] to-[#FF7F50] rounded-lg p-0.75 shadow-md 
                         flex w-[90%] sm:w-[85%] mx-auto md:w-full"
            >
              <div
                className="rounded-lg bg-white w-full flex flex-col justify-between 
                           p-4 md:p-6 lg:p-8 
                           min-h-[200px] md:min-h-[240px] lg:min-h-[295px]"
              >
                <h4 className="text-2xl md:text-lg lg:text-2xl mb-3 font-bold break-words whitespace-normal">
                  <a
                    href={card.href}
                    className="text-[#FFA500] underline underline-offset-2 decoration-dotted hover:text-[#FF7F50] transition"
                  >
                    {card.title}
                  </a>
                </h4>
                <p className="text-base md:text-base lg:text-lg text-black mb-4">
                  {card.desc}
                </p>
                {/* <a
                  href="#"
                  className="inline-flex items-center font-semibold text-lg md:text-base text-orange-300 hover:text-orange-500 transition-colors"
                >
                  <span className="mr-2">Learn More</span>
                  <ArrowIcon />
                </a> */}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* Cards Data */
const cards = [
  {
    title: "Assess & Modernize",
    desc: "A comprehensive approach to IT environment assessments, enterprise AI readiness and facility upgrades.",
    href: "/assess-modernize?hsLang=en",
  },
  {
    title: "Design & Plan",
    desc: "Conceptual design & drawings, full project planning & management, including trade orchestration & vendor management.",
    href: "/design-procure?hsLang=en",
  },
  {
    title: "Procure & Build",
    desc: "Procurement, budgets, & lead time considerations resulting in project buildout that bridges the gap between IT assets & facilities.",
    href: "/build-optimize?hsLang=en",
  },
  {
    title: "Manage & Optimize",
    desc: "Manage your IT with Asset Point & optimize your environment with physical and logical migrations and decommissioning services.",
    href: "/en-us/asset-point?hsLang=en"  },
];

/* Reusable arrow icon */
function ArrowIcon() {
  return (
    <svg
      width="22"
      height="8"
      viewBox="0 0 26 8"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="flex-shrink-0"
    >
      <path
        d="M25.155 5.14235C25.2978 4.99951 25.2978 4.76791 25.155 4.62506L22.8273 2.29739C22.6844 2.15455 22.4529 2.15455 22.31 2.29739C22.1672 2.44023 22.1672 2.67181 22.31 2.81465L24.3791 4.88371L22.31 6.95276C22.1672 7.09559 22.1672 7.32718 22.31 7.47002C22.4529 7.61286 22.6844 7.61286 22.8273 7.47002L25.155 5.14235ZM1 5.24947L24.8963 5.24947L24.8963 4.51795L1 4.51795L1 5.24947Z"
        fill="currentColor"
        stroke="currentColor"
        strokeWidth="0.5"
      />
    </svg>
  );
}
