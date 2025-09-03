"use client"

import "./Hero.css"
import Header from "./Header"

export default function Hero() {
    return (
        <>
            <div className="hero-style-0" bis_skin_checked="1">
                <div className="dark-overlay"></div>
                <Header />
                <div className="text-style-0" bis_skin_checked="1">

                    <div className="text-style-1" bis_skin_checked="1">

                        <svg className="text-style-2" fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 59 2">
                            <path d="M4 1h54" stroke="url(#a)" stroke-width="2" className="text-style-3"></path>
                            <path stroke="#99A9FF" stroke-width="2" d="M2 1H0" className="text-style-4"></path>
                            <defs className="text-style-5">
                                <linearGradient x1="58" y1="1" x2="4" y2="-.4" gradientUnits="userSpaceOnUse" className="text-style-6">
                                    <stop stop-color="#66FFE5" className="text-style-7"></stop>
                                    <stop offset="1" stop-color="#99A9FF" className="text-style-8"></stop>
                                </linearGradient>
                            </defs>
                        </svg>
                        <h2 className="text-style-9">

                            Turnkey Technology Infrastructure Solutions
                        </h2>
                    </div>
                </div>
            </div>
        </>
    )
}