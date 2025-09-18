"use client";
import { CheckCircleIcon } from "@heroicons/react/24/solid";
import { useEffect, useRef, useState } from "react";

export default function Trust() {
  const [zoomed, setZoomed] = useState(false);
  const sectionRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setZoomed(true); // zoom in jab section screen me aaye
          } else {
            setZoomed(false); // optional: scroll nikalne par zoom reset
          }
        });
      },
      { threshold: 0.3 } // 30% section visible hone par trigger
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current);
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative w-full pb-12 md:pb-20 overflow-hidden min-h-full lg:min-h-[535px]"
    >
      {/* Background Image */}
      <img
  src="/images/trust.jpeg"
  alt="Trust"
  className={`absolute inset-0 w-full h-full object-cover object-top transition-transform duration-[3500ms] delay-100 ease-out ${
    zoomed ? "scale-115" : "scale-90"
  }`}
/>


      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50" />

      {/* Content */}
      <div className="relative px-5 lg:px-52 text-white space-y-6">
        {/* Arrow at Top */}
        <svg
          width="24"
          height="70"
          viewBox="0 0 24 80"
          xmlns="http://www.w3.org/2000/svg"
          className="text-white mb-6"
        >
          <path
            d="M10.9393 69.4069C11.5251 69.9926 12.4749 69.9926 13.0607 69.4069L22.6066 59.8609C23.1924 59.2751 23.1924 58.3254 22.6066 57.7396C22.0208 57.1538 21.0711 57.1538 20.4853 57.7396L12 66.2249L3.51476 57.7396C2.92897 57.1538 1.97922 57.1538 1.39344 57.7396C0.807654 58.3254 0.807654 59.2751 1.39344 59.8609L10.9393 69.4069ZM10.5 0.5V68.3462H13.5V0.5H10.5Z"
            fill="currentColor"
          />
        </svg>

        {/* Text Content */}
        <div data-aos="fade-right" data-aos-delay="200" className="space-y-6">
          <p className="text-sm uppercase tracking-widest text-gray-300">
            Trust
          </p>

          <h2 className="text-3xl md:text-5xl font-bold">
            We're built on relationships.
          </h2>

          <ul className="space-y-3 text-lg text-gray-200">
            <li className="flex items-start gap-2">
              <CheckCircleIcon className="w-6 h-6 text-white flex-shrink-0" />
              <span>
                We have delivered IT solutions across industries for over three
                decades.
              </span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircleIcon className="w-6 h-6 text-white flex-shrink-0" />
              <span>
                Our people, process, and tools have transformed technology for
                the world's top companies.
              </span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircleIcon className="w-6 h-6 text-white flex-shrink-0" />
              <span>
                We have achieved universal respect by nurturing relationships on
                a global scale.
              </span>
            </li>
          </ul>

          <a
            href="/"
            className="inline-block px-6 py-3 rounded-lg text-black font-medium transition"
            style={{
              backgroundImage:
                "linear-gradient(88.89deg, #FFA500 10.61%, #FF7F50 64.08%)",
            }}
          >
            See for Yourself
          </a>
        </div>
      </div>
    </section>
  );
}
