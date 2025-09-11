"use client";

import { useEffect, useRef, useState } from "react";

export default function Communication() {
  const [zoomed, setZoomed] = useState(false);
  const sectionRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setZoomed(true);
          } else {
            setZoomed(false);
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
      className="relative w-full overflow-hidden h-[650px] md:h-[700px] lg:h-[750px]"
    >
      {/* Background layer */}
      <div
        className={`absolute inset-0 bg-cover bg-top bg-no-repeat transition-transform duration-[3000ms] ease-out ${
          zoomed ? "scale-110" : "scale-90"
        }`}
        style={{
          backgroundImage:
            "linear-gradient(rgba(20,20,20,0.7), rgba(20,20,20,0.2)), url('/images/communication.jpeg')",
        }}
      ></div>

      {/* Overlay Content */}
      <div className="relative z-auto">
        {/* Arrow */}
        <div className="mx-auto max-w-[1200px] w-full px-9 pb-9 fill-white">
          <svg
            width="24"
            height="70"
            viewBox="0 0 24 70"
            xmlns="http://www.w3.org/2000/svg"
            className="block w-6"
          >
            <path d="M10.9393 69.4069C11.5251 69.9926 12.4749 69.9926 13.0607 69.4069L22.6066 59.8609C23.1924 59.2751 23.1924 58.3254 22.6066 57.7396C22.0208 57.1538 21.0711 57.1538 20.4853 57.7396L12 66.2249L3.51476 57.7396C2.92897 57.1538 1.97922 57.1538 1.39344 57.7396C0.807654 58.3254 0.807654 59.2751 1.39344 59.8609L10.9393 69.4069ZM10.5 0.5V68.3462H13.5V0.5H10.5Z" />
          </svg>
        </div>

        {/* Text Content */}
        <div className="mx-auto max-w-[1200px] w-full px-9">
          <div className="flex flex-row gap-[3.3333%] max-md:flex-col max-md:gap-10">
            <div
              data-aos="fade-right"
              data-aos-delay="200"
              className="w-[56.94%] max-md:w-full transition-opacity duration-800 ease-in-out"
            >
              <div className="text-white">
                <div className="mb-9">
                  <div className="mb-2.5 flex items-center text-[16px] font-normal uppercase leading-[26px] tracking-[1px]">
                    Communication
                  </div>
                  <h2 className="mb-4 text-[46px] font-semibold leading-[50.6px]">
                    <span className="font-semibold block">
                      Keeping you connected every{" "}
                      <br className="hidden sm:block" />
                      step of the way.
                    </span>
                  </h2>
                  <div>
                    <ul className="pl-[13.5px]">
                      <li className="mb-2.5 ml-[15px] pl-[9px] text-lg before:content-['≫'] before:pr-2">
                        From continual project updates to successful
                        implementation, we help keep your team on track to get
                        the job done.
                      </li>
                      <li className="mb-2.5 ml-[15px] pl-[9px] text-lg before:content-['≫'] before:pr-2">
                        Our team is responsive, transparent, and builds trust
                        from the start—so there are never any surprises.
                      </li>
                      <li className="mb-2.5 ml-[15px] pl-[9px] text-lg before:content-['≫'] before:pr-2">
                        With offices coast to coast and abroad, we act as an
                        extension of your team no matter where you are.
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div> 
    </div>
  );
}
