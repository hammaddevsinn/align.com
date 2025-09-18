"use client";

export default function Blog() {
  return (
    <div className="flex items-center justify-center w-full overflow-hidden h-[950px] bg-gradient-to-b from-white to-neutral-100 md:min-h-[600px] md:h-[700px] md:py-10">
      <div className="relative z-[1] w-full max-w-[1200px] mx-auto px-9 md:px-5">
        <div className="flex flex-col-reverse md:flex-row-reverse items-center justify-center w-full gap-8">
          
          {/* Left text section */}
          <div className="w-full md:w-[calc(50%-15px)] md:order-2">
            <div
              className="mb-9 transition-opacity  duration-800 ease"
              data-aos="fade-left"
            >
              <div className="text-[#545454] mb-2.5 text-lg">January 15, 2025</div>
              <h2 className="text-[36px] leading-[40px] md:text-[44px] md:leading-[48px] font-bold text-orange-400 mb-4">
                <a
                  href="#"
                  className="no-underline hover:text-orange-600 transition-colors duration-200"
                >
                  5 Critical Data Center Trends Reshaping the Industry in 2025
                </a>
              </h2>
              <div className="text-lg">
                The data center industry is experiencing unprecedented
                transformation driven by multiple factors—from AI workloads and
                power constraints to economic pressures. Through their work with
                clients across various sectors, Align&apos;s experts have
                observed five key trends that are reshaping infrastructure
                requirements and operational strategies.
              </div>
            </div>
            <p
              data-aos="fade-left"
              className="mt-4 transition-opacity  duration-800 ease"
            >
              <a
                href="#"
                className="inline-flex items-center text-orange-400 font-semibold text-lg leading-[18px] no-underline hover:text-orange-500 transition-colors duration-200"
              >
                <span className="mr-2.5">Read our Blog</span>
                <span className="-mt-1">
                  <svg
                    width="26"
                    height="8"
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
                </span>
              </a>
            </p>
          </div>

          {/* Right image section */}
          <div className="w-full md:w-[calc(50%-15px)] md:order-3">
            <img
              data-aos="fade"
              src="https://www.align.com/hs-fs/hubfs/social-suggested-images/www.align.comhubfsGenerated%20imagesAn%20interpretation%20of%20network%20infrastructure-1.jpeg?width=1792&height=1024&name=www.align.comhubfsGenerated%20imagesAn%20interpretation%20of%20network%20infrastructure-1.jpeg"
              alt="An interpretation of network infrastructure"
              className="w-full max-w-full rounded-lg object-cover object-center transition-opacity duration-800 ease"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
