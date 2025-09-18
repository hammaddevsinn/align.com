"use client";

import { useEffect, useRef, useState } from "react";

export default function Results() {
  const [zoomed, setZoomed] = useState(false);
  const sectionRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setZoomed(true);
          } else {
            setZoomed(false); // 👈 scroll out hone par reverse karega
          }
        });
      },
      { threshold: 0.3 }
    );

    const current = sectionRef.current;
    if (current) observer.observe(current);

    return () => {
      if (current) observer.unobserve(current);
      observer.disconnect();
    };
  }, []);

  return (
    <div
      ref={sectionRef}
      className="relative w-full overflow-hidden min-h-[600px] pb-20"
    >
      {/* Background Layer */}
      <div
        className={`absolute inset-0 bg-cover bg-center bg-no-repeat transition-transform duration-[2500ms] ease-out ${
          zoomed ? "scale-110" : "scale-90"
        }`}
        style={{
          backgroundImage:
            "linear-gradient(rgba(20,20,20,0.7), rgba(20,20,20,0)), url('/images/results.jpg')",
        }}
      ></div>

      {/* Content */}
      <div className="relative z-auto">
        {/* Arrow */}
        <div className="relative mx-auto max-w-[1200px] px-9 pb-9 fill-white">
          <svg
            width="24"
            height="70"
            viewBox="0 0 24 70"
            xmlns="http://www.w3.org/2000/svg"
            className="block w-6"
          >
            <path
              d="M10.9393 69.4069C11.5251 69.9926 12.4749 69.9926 13.0607 69.4069L22.6066 59.8609C23.1924 59.2751 23.1924 58.3254 22.6066 57.7396C22.0208 57.1538 21.0711 57.1538 20.4853 57.7396L12 66.2249L3.51476 57.7396C2.92897 57.1538 1.97922 57.1538 1.39344 57.7396C0.807654 58.3254 0.807654 59.2751 1.39344 59.8609L10.9393 69.4069ZM10.5 0.5V68.3462H13.5V0.5H10.5Z"
              className="box-border"
            />
          </svg>
        </div>

        <div className="relative mx-auto max-w-[1200px] px-9 text-white">
          <div className="flex flex-row gap-[3.3333%] max-md:flex-col max-md:gap-10">
            <div
              className="w-[48.33%] max-md:w-full"
              data-aos="fade-right"
              data-aos-delay="200"
            >
              <div className="mb-9">
                <div className="mb-2.5 flex items-center text-[16px] font-normal uppercase leading-[26px] tracking-[1px]">
                  Results
                </div>
                <h2 className="mb-4 text-4xl md:text-5xl font-semibold leading-[50.6px]">
                  <span className="font-semibold block">
                    IT Transformation—Done
                    <br className="hidden sm:block" /> Right.
                  </span>
                </h2>
                <ul className="list-none pl-[13.5px]">
                  <li className="mb-2.5 ml-[15px] pl-[9px] text-lg before:content-['≫'] before:pr-2">
                    Flexible solutions designed by experts, built with the
                    future in mind.
                  </li>
                  <li className="mb-2.5 ml-[15px] pl-[9px] text-lg before:content-['≫'] before:pr-2">
                    Our history makes us credible. Our work keeps us competitive.
                  </li>
                  <li className="mb-2.5 ml-[15px] pl-[9px] text-lg before:content-['≫'] before:pr-2">
                    Whether you need to minimize overhead, modernize your
                    workloads, accelerate change, or scale your business
                    <span>—</span>we have you covered.
                  </li>
                </ul>
              </div>

              {/* Button */}
              <a
                href="#"
                className="inline-block rounded-md bg-gradient-to-r from-[#FFA500] to-[#FF7F50] px-6 py-4 text-center text-[18px] font-bold leading-[18px] text-[#141414] shadow-[0_3px_9px_rgba(20,20,20,0.25)] transition-all duration-300 hover:shadow-lg"
              >
                Explore our Success Stories
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
