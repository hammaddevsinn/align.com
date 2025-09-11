"use client"

import Image from "next/image"
import Link from "next/link"

export default function Footer() {
  return (
    <div className="box-border">
      {/* Main Footer */}
      <footer className="max-w-[1200px] mx-auto w-full px-6 sm:px-9 py-[54px]">
        <div className="flex flex-col md:flex-row md:flex-wrap gap-y-12 md:gap-y-0 gap-x-[3.3333%] max-w-[1500px] mx-auto">
          
          {/* Logo + Subscribe */}
          <div className="w-full md:w-[31.11%]">
            <Link href="/" className="inline-block">
              <Image
                src={'/headerIcon/logo.png'}
                alt={"align-fullcolor-logo"}
                width={60}
                height={90}
                className={"max-w-full h-auto"}
              />
            </Link>

            {/* Subscribe */}
            <div className="mt-8 mb-6">
              <h3 className="text-[18px] font-semibold leading-[28px] font-['IBM Plex Sans'] mb-3">
                Subscribe to our blog!
              </h3>
              <form className="flex flex-col sm:flex-row gap-3 sm:gap-0">
                {/* Email input */}
                <input
                  type="email"
                  placeholder="Email*"
                  required
                  className="h-[48px] w-full px-5 text-[18px] font-['IBM Plex Sans'] border-2 border-[#FFA500] rounded-md sm:rounded-l-md sm:rounded-r-none outline-none"
                />

                {/* Button */}
                <button
                  type="submit"
                  className="bg-gradient-to-r from-[#FFA500] to-[#FF7F50] h-[48px] px-6 text-[18px] font-semibold rounded-md sm:rounded-r-md sm:rounded-l-none text-white shadow-md hover:opacity-90 transition"
                >
                  Subscribe
                </button>
              </form>
            </div>
          </div>

          {/* Footer Links */}
          <div className="w-full md:w-[65.55%] flex flex-col sm:flex-row gap-8 md:gap-[3.3333%]">
            <div className="w-full sm:w-[48.33%] flex flex-col gap-4 text-[18px] font-semibold">
              <a href="https://www.align.com/solutions/data-center-solutions?hsLang=en">Data Center Infrastructure Solutions</a>
              <a href="https://www.align.com/professional-services/workplace-technology?hsLang=en">Workplace Technology</a>
              <a href="https://www.align.com/managed-services?hsLang=en">Managed Services</a>
              <a href="https://www.align.com/about?hsLang=en">About Align</a>
              <a href="https://www.align.com/align-locations?hsLang=en">Locations</a>
              <a href="https://www.align.com/press?hsLang=en">Press</a>
            </div>

            <div className="w-full sm:w-[31.11%] flex flex-col gap-4 text-[18px] font-semibold">
              <a href="https://www.align.com/resource-library?hsLang=en">Resource Center</a>
              <a href="https://www.align.com/blog?hsLang=en">Blog</a>
              <a href="https://www.align.com/success-stories?hsLang=en">Success Stories</a>
              <a href="https://www.align.com/align-partners-clients?hsLang=en">Clients and Partners</a>
              <a href="https://www.align.com/leadership?hsLang=en">Leadership</a>
              <a href="https://www.align.com/it-careers-align?hsLang=en">Careers</a>
              <a href="https://www.align.com/awards?hsLang=en">Awards</a>
            </div>
          </div>
        </div>
      </footer>

      {/* Secondary Footer */}
      <div className="bg-[#f3f3f3] py-9 text-[12px] font-semibold font-['IBM Plex Sans']">
        <div className="max-w-[1200px] mx-auto px-6 sm:px-9 flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
          <div className="flex items-center gap-2">
            <a href="https://www.align.com/legal?hsLang=en">Privacy</a>
            <span>|</span>
            <a href="https://www.align.com/billing_tc?hsLang=en">Terms and Conditions</a>
          </div>
          <div>©2025 | All Rights Reserved | Align Communications, Inc.</div>
        </div>
      </div>
    </div>
  )
}
