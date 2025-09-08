"use client";

import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function SuccessStories() {
  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: "ease-in-out",
      once: false,
      mirror: true,
    });
    AOS.refresh();
  }, []);

  const cards = [
    {
      title: "Align's Workplace Technology Transformation for Financial Giant",
      link: "https://www.align.com/success-stories/align-wpt-transformation-financial-giant?hsLang=en",
      delay: 200,
    },
    {
      title: "Align Partners with Dusty Robotics to Automate Data Center Layouts",
      link: "https://www.align.com/success-stories/align-dusty-robotics?hsLang=en",
      delay: 400,
    },
    {
      title: "Align Leads Major Healthcare Player's Data Center Consolidation",
      link: "https://www.align.com/success-stories/major-healthcare-data-center-consolidation-acquisition?hsLang=en",
      delay: 600,
    },
    {
      title: "From Legacy to Leading Edge: Regional Bank Transforms into the Cloud",
      link: "https://www.align.com/success-stories/health-insurance-providers-journey-through-customized-digital-transformation?hsLang=en",
      delay: 800,
    },
  ];

  return (
    <section className="bg-white py-12 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        {/* Heading Section */}
        <div data-aos="fade" className="mb-10 text-center">
          <p className="text-sm uppercase tracking-wide text-black">
            Success Stories
          </p>
          <h2 className="text-3xl md:text-5xl font-semibold text-[#008AD4] leading-snug">
            Featured Success Stories <br /> From Across Align&apos;s Solutions
          </h2>
          <p className="mt-4 text-gray-900 text-base">
            Explore our featured success stories from Workplace Technology, Data
            Center Solutions <br className="hidden md:block" />
            to Migration and Cloud, and Managed Services.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 px-auto lg:px-20 gap-6">
          {cards.map((card, index) => (
            <div
              key={index}
              data-aos="fade-right"
              data-aos-delay={card.delay}
              className="p-0.5 rounded bg-gradient-to-r from-[#008AD4] to-[#00D1FF] shadow-md h-full lg:h-[272.2px] lg:w-[210.2px] xl:h-[248.8] xl:w-[249.8]"
            >
              <div className="flex flex-col justify-between h-full p-4 bg-white rounded">
                <h5 className="text-lg font-bold text-black mb-3">
                  {card.title}
                </h5>
                <a
                  href={card.link}
                  className="text-[#008AD4]  font-bold flex items-center gap-2 hover:underline"
                >
                  Read more
                  <svg
                    width="20"
                    height="6"
                    viewBox="0 0 26 8"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M25.155 5.14235C25.2978 4.99951 25.2978 4.76791 25.155 4.62506L22.8273 2.29739C22.6844 2.15455 22.4529 2.15455 22.31 2.29739C22.1672 2.44023 22.1672 2.67181 22.31 2.81465L24.3791 4.88371L22.31 6.95276C22.1672 7.09559 22.1672 7.32718 22.31 7.47002C22.4529 7.61286 22.6844 7.61286 22.8273 7.47002L25.155 5.14235ZM1 5.24947L24.8963 5.24947L24.8963 4.51795L1 4.51795L1 5.24947Z"
                      fill="currentColor"
                      stroke="currentColor"
                      strokeWidth="0.5"
                    />
                  </svg>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
