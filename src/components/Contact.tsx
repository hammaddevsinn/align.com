"use client";
import { ChevronDown } from "lucide-react";


export default function Contact() {
  return (
    <section className="relative w-full min-h-[1020px] bg-[rgba(20,20,20,0.4)] overflow-hidden pb-20 ">
      {/* Background Video */}
      <video
        className="absolute top-0 left-0 w-full h-full object-cover"
        autoPlay
        muted
        loop
        playsInline
      >
        <source src="/videos/contact.mp4" type="video/mp4" />
      </video>

      {/* Arrow */}
      <div className="relative z-auto max-w-[1200px] w-full mx-auto px-9 pb-9 fill-white">
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
          ></path>
        </svg>
      </div>

      {/* Form & Locations */}
      <div className="relative z-auto max-w-[1200px] w-full mx-auto px-9">
        <div className="flex flex-row gap-[3.3%] flex-nowrap max-md:flex-col max-md:gap-8">
          {/* Left - Locations */}
          <div
            className="w-[31%] text-white max-md:w-full"
            data-aos="fade"
          >
            <div className="mb-9">
              <h2 className="text-[25px] font-semibold leading-[33px] mb-4">
                Locations
              </h2>
              <ul className="flex flex-row flex-wrap md:flex-col gap-2.5">
                {[
                  "Texas",
                  "New York",
                  "London",
                  "New Jersey",
                  "Virginia",
                  "Arizona",
                  "Chicago",
                  "San Francisco",
                ].map((loc, i) => (
                  <li key={i}>
                    <a
                      href="#"
                      className="text-white font-semibold text-lg leading-[35px] transition-colors duration-200 hover:text-cyan-400"
                    >
                      {loc}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Right - Form */}
          <div className="w-[65%] bg-white rounded-lg shadow-lg p-12 flex flex-col min-h-[820px] max-md:w-full max-md:min-h-[600px]">
            {/* Heading */}
            <div className="mb-12">
              <h2 className="text-[44px] font-bold leading-[53px]">
                <span className="text-orange-500 font-normal block">
                  <strong className="font-bold">Connect With Us</strong>
                </span>
              </h2>
            </div>

            {/* Form */}
            <form className="space-y-5">
              {/* First Name */}
              <div>
                <label className="block font-bold mb-1">
                  <span className="text-lg">First Name</span>
                  <span className="text-gray-800 ml-1">*</span>
                </label>
                <div className="bg-gradient-to-r from-[#FFA500] to-[#FF7F50] p-0.5 rounded-md h-[52px]">
                  <input
                    type="text"
                    name="firstname"
                    required
                    autoComplete="given-name"
                    className="w-full h-full px-5 py-3 rounded-md text-base bg-white text-black focus:outline-none"
                  />
                </div>
              </div>

              {/* Last Name */}
              <div>
                <label className="block font-bold mb-1">
                  <span className="text-lg">Last Name</span>
                  <span className="text-gray-800 ml-1">*</span>
                </label>
                <div className="bg-gradient-to-r from-[#FFA500] to-[#FF7F50] p-0.5 rounded-md h-[52px]">
                  <input
                    type="text"
                    name="lastname"
                    required
                    autoComplete="family-name"
                    className="w-full h-full px-5 py-3 rounded-md text-base bg-white text-black focus:outline-none"
                  />
                </div>
              </div>

              {/* Email */}
              <div>
                <label className="block font-bold mb-1">
                  <span className="text-lg">Email</span>
                  <span className="text-gray-800 ml-1">*</span>
                </label>
                <div className="bg-gradient-to-r from-[#FFA500] to-[#FF7F50] p-0.5 rounded-md h-[52px]">
                  <input
                    type="email"
                    name="email"
                    required
                    autoComplete="email"
                    className="w-full h-full px-5 py-3 rounded-md text-base bg-white text-black focus:outline-none"
                  />
                </div>
              </div>

              {/* Service */}
             <div className="relative bg-gradient-to-r from-[#FFA500] to-[#FF7F50] p-0.5 rounded-md h-[52px]">
  <select
    name="service"
    required
    className="w-full h-full px-5 py-3 rounded-md text-base bg-white text-black appearance-none focus:outline-none"
  >
    <option disabled value="">Please Select</option>
    <option>Data Center Design, Procure, Build</option>
    <option>Data Center Assess &amp; Modernize</option>
    <option>Workplace Technology</option>
    <option>Managed Services</option>
    <option>Align Cybersecurity</option>
    <option>Other</option>
  </select>

  {/* Dropdown icon (React component) */}
  <span className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none">
    <ChevronDown size={18} className="text-black" />
  </span>
</div>

              {/* Message */}
              <div>
                <label className="block font-bold mb-1">
                  <span className="text-lg">
                    Please provide any additional information, comments, or
                    requests:
                  </span>
                </label>
                <div className="bg-gradient-to-r from-[#FFA500] to-[#FF7F50] p-0.5 rounded-md h-[120px]">
                  <textarea
                    name="message"
                    className="w-full h-full px-5 py-3 rounded-md text-base bg-white text-black resize-none focus:outline-none"
                  />
                </div>
              </div>

              {/* Submit */}
              <div className="pt-6">
                <button
                  type="submit"
                  className=" w-full md:w-auto bg-gradient-to-r from-[#FFA500] to-[#FF7F50]  text-black font-bold text-lg py-4 px-6 rounded-md hover:shadow-lg transition"
                >
                  Contact Us
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
