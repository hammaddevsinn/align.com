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
                About InfinetWorx
              </span>
              <h2 className="mt-2  text-4xl  lg:text-5xl font-semibold text-orange-400 leading-[1.2]">
                <span className="block">
                  Powering Digital Trasformation
                </span>
              </h2>
              <div className="mt-4 space-y-4 text-lg leading-relaxed">
                <p>
                  Infinet Worx,is a next-generation technology company specializing in Data Intelligence, Artificial Intelligence, and Digital Systems Architecture. We are committed to driving enterprise innovation through intelligent, data-first strategies that transform operations, accelerate insights, and enable autonomous decision-making at scale.

                </p>
                <p>                  From AI-driven automation to cloud solutions, we deliver cutting-edge services tailored to your needs.

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
                    "linear-gradient(88.89deg, #FFA500 10.61%, #FF7F50 64.08%)",
                }}
              >
                About InfinetWorx
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
