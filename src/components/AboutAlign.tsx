"use client";

import dynamic from "next/dynamic";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const Player = dynamic(
  () =>
    import("@lottiefiles/react-lottie-player").then((mod) => ({
      default: mod.Player,
    })),
  {
    ssr: false,
    loading: () => <div className="w-full h-[400px]" />,
  }
);

export default function AboutAlign() {
  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: "ease-in-out",
      once: false,
    });
  }, []);

  return (
    <section className="w-full bg-white py-12 md:py-20">
      <div className="max-w-7xl mx-auto ">
        <div className="grid grid-cols-1 md:grid-cols-2 px-6 md:px-10 items-center">
          {/* Text Section */}
          <div
            data-aos="fade-right"
            data-aos-delay="200"
            className="space-y-6 px-4 md:px-8"
          >
            <div>
              <span className="text-base font-medium tracking-wide uppercase">
                About Align
              </span>
              <h2 className="mt-2  text-4xl  lg:text-5xl font-semibold text-[#008AD4] leading-[1.2]">
                <span className="block">
                  Turnkey Technology Infrastructure Solutions
                </span>
              </h2>
              <div className="mt-4 space-y-4 text-lg leading-relaxed">
                <p>
                  The rise of AI has had a massive impact on the IT industry -
                  from increasing demands on data center infrastructure, to
                  creating increasing risk from a cybersecurity standpoint, and
                  even enabling more advanced workplace technology solutions.
                  Align is uniquely equipped to address all of these facets of
                  the AI revolution with our team of experts.
                </p>
                <p>
                  From strategy to delivery, our winning combination of
                  comprehensive IT solutions and experienced professionals unite
                  to accelerate change from the data center to the workplace and
                  into the cloud.
                </p>
              </div>
            </div>

            {/* Gradient Button */}
            <div>
             <a
  href="https://www.align.com/about?hsLang=en"
  className="w-full md:w-full lg:w-auto text-center lg:text-left px-6 py-3 rounded text-black font-medium shadow-md transition hover:opacity-90 mx-auto lg:mx-0 inline-block"
  style={{
    background:
      "linear-gradient(88.89deg, #008AD4 10.61%, #00D1FF 64.08%)",
  }}
>
  About Align
</a>



            </div>
          </div>

          {/* Animation Section */}
          <div
            data-aos="fade-in"
            data-aos-delay="200"
            className="flex justify-center items-center "
          >
            <div className="w-full max-w-2xl min-h-[300px] sm:min-h-[400px] md:min-h-[500px]">
              <Player
                autoplay
                loop
                src="/animations/data.json"
                style={{ width: "100%", height: "100%" }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
