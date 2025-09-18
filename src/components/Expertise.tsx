"use client";

import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect, useRef, useState } from "react";

export default function Expertise() {
  const [zoomed, setZoomed] = useState(false);
  const sectionRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => setZoomed(entry.isIntersecting));
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

  useEffect(() => {
    AOS.init({ duration: 800, once: true });
    AOS.refresh();
  }, []);

  return (
    <section ref={sectionRef} className="relative overflow-hidden">
      {/* Background Image */}
      <div
        className={`absolute inset-0 bg-cover transition-transform duration-1000 ease-in-out ${
          zoomed ? "scale-110" : "scale-90"
        }`}
        style={{ backgroundImage: "url('/images/expertise.webp')" }}
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/40" />

      {/* Arrow */}
      <div className="relative px-5 xl:px-52 top-0">
        <svg
          width="24"
          height="74"
          viewBox="0 0 24 74"
          xmlns="http://www.w3.org/2000/svg"
          className="text-white"
        >
          <path
            d="M10.9393 69.4069C11.5251 69.9926 12.4749 69.9926 13.0607 69.4069L22.6066 59.8609C23.1924 59.2751 23.1924 58.3254 22.6066 57.7396C22.0208 57.1538 21.0711 57.1538 20.4853 57.7396L12 66.2249L3.51476 57.7396C2.92897 57.1538 1.97922 57.1538 1.39344 57.7396C0.807654 58.3254 0.807654 59.2751 1.39344 59.8609L10.9393 69.4069ZM10.5 0.5V68.3462H13.5V0.5H10.5Z"
            fill="currentColor"
          />
        </svg>
      </div>

      {/* Content */}
      <div className="px-5 xl:px-52 relative flex flex-col md:flex-row items-start py-10 xl:py-20 text-white z-auto">
        <div className="flex-1" data-aos="fade-right" data-aos-delay="200">
          <div className="max-w-sm xl:max-w-2xl space-y-2 xl:space-y-4">
            <p className="text-lg uppercase">Expertise</p>
            <h2 className="text-3xl md:text-5xl font-medium xl:leading-tight">
              Seasoned professionals for <br className="hidden md:block" /> every project.
            </h2>
            <ul className="list-disc list-inside text-left text-lg space-y-3 text-gray-100">
              
              <li>Solving your internal IT challenges has never been easier.</li>
              <li>
                Our professionals are certified on everything that we implement—from the physical
                to the application layer.
              </li>
              <li>Award-winning and industry-recognized subject matter experts.</li>
            </ul>
            <a
              href="#"
              className="inline-block mt-6 md:mt-8 px-6 text-center py-3 font-bold rounded text-black w-full md:w-auto"
              style={{
                background: "linear-gradient(88.89deg, #FFA500 10.61%, #FF7F50 64.08%)",
              }}
              target="_blank"
              rel="noopener noreferrer"
            >
              Access the Resource Center
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
