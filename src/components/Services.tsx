"use client"

import "./Services.css"
import { useEffect, useRef } from "react"

export default function Services() {
    const card1Ref = useRef<HTMLDivElement>(null);
    const card2Ref = useRef<HTMLDivElement>(null);
    const card3Ref = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('animate');
                    } else {
                        entry.target.classList.remove('animate');
                    }
                });
            },
            { 
                threshold: 0.3,
                rootMargin: '0px 0px -20% 0px'
            }
        );

        if (card1Ref.current) observer.observe(card1Ref.current);
        if (card2Ref.current) observer.observe(card2Ref.current);
        if (card3Ref.current) observer.observe(card3Ref.current);

        return () => observer.disconnect();
    }, []);

    return (
        <>
            <div className="service-heading-style-0" bis_skin_checked="1">
                <div className="service-text-style-0" bis_skin_checked="1">
                    <div className="service-text-style-1" bis_skin_checked="1">
                        <svg className="service-text-style-2" fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 59 2">
                            <path d="M4 1h54" stroke="url(#a)" stroke-width="2" className="service-text-style-3"></path>
                            <path stroke="#99A9FF" stroke-width="2" d="M2 1H0" className="service-text-style-4"></path>
                            <defs className="service-text-style-5">
                                <linearGradient x1="58" y1="1" x2="4" y2="-.4" gradientUnits="userSpaceOnUse" className="service-text-style-6">
                                    <stop stop-color="#66FFE5" className="service-text-style-7"></stop>
                                    <stop offset="1" stop-color="#99A9FF" className="service-text-style-8"></stop>
                                </linearGradient>
                            </defs>
                        </svg>
                        <h2 className="service-text-style-9">
                            Explore our<br className="service-text-style-10" />Professional &amp; Managed Services
                        </h2>
                        <div className="service-text-style-11" bis_skin_checked="1">
                            <p className="service-text-style-12"><span className="service-text-style-13">From strategy to delivery, our winning combination of comprehensive IT solutions and experienced professionals unite to accelerate change from the data center to the workplace and into the cloud.&nbsp;</span></p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="service-card-container-style-0" data-hs-cos-general-type="widget" data-hs-cos-type="module" bis_skin_checked="1">
                <section className="service-card-container-style-1">
                    <div className="service-card-style-0" bis_skin_checked="1">
                        <div ref={card1Ref} className="service-card-style-1" data-aos="fade-right" data-aos-delay="300" bis_skin_checked="1">
                            <div className="service-card-style-2" bis_skin_checked="1">
                                <div className="service-card-style-3" bis_skin_checked="1">
                                    <div className="service-card-style-4" bis_skin_checked="1">
                                        <img className="service-card-style-5" src="https://www.align.com/hubfs/Icon2.svg" alt="Icon2" loading="lazy" width="78" height="60" />
                                    </div>
                                    <h4 className="service-card-style-6">Data Center Technology<br className="service-card-style-7" />Infrastructure Solutions</h4>
                                    <p className="service-card-style-8">
                                        <a href="https://www.align.com/solutions/data-center-solutions?hsLang=en" className="service-card-style-9">
                                            Learn more
                                            <svg className="service-card-style-10" width="26" height="7" viewBox="0 0 26 7" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M25.155 3.68043C25.2978 3.53759 25.2978 3.30599 25.155 3.16315L22.8273 0.835478C22.6844 0.692637 22.4529 0.692637 22.31 0.835478C22.1672 0.97832 22.1672 1.20989 22.31 1.35274L24.3791 3.42179L22.31 5.49084C22.1672 5.63368 22.1672 5.86527 22.31 6.0081C22.4529 6.15094 22.6844 6.15094 22.8273 6.0081L25.155 3.68043ZM1 3.78755L24.8963 3.78755L24.8963 3.05603L1 3.05603L1 3.78755Z" fill="currentColor" stroke="currentColor" stroke-width="0.5" className="service-card-style-11"></path>
                                            </svg>
                                            <path d="M32 8.3c.4-.4.4-1 0-1.5L25.6.5a1 1 0 0 0-1.4 1.4L30 7.6l-5.7 5.6a1 1 0 0 0 1.4 1.4L32 8.3ZM.8 8.6h30.5v-2H.8v2Z" fill="currentColor" />
                                        </a>
                                    </p>
                                </div>
                                <div className="service-card-style-12" bis_skin_checked="1">
                                    <div className="service-card-style-13" bis_skin_checked="1">
                                        <h4 className="service-card-style-14">Data Center Technology<br className="service-card-style-15" />Infrastructure Solutions</h4>
                                        <p className="service-card-style-16">We assess, design, deploy, and optimize data centers built for today's AI and HPC demands</p>
                                    </div>
                                    <p className="service-card-style-17">
                                        <a href="https://www.align.com/solutions/data-center-solutions?hsLang=en" className="service-card-style-18">
                                            Learn more
                                            <svg className="service-card-style-19" width="26" height="7" viewBox="0 0 26 7" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M25.155 3.68043C25.2978 3.53759 25.2978 3.30599 25.155 3.16315L22.8273 0.835478C22.6844 0.692637 22.4529 0.692637 22.31 0.835478C22.1672 0.97832 22.1672 1.20989 22.31 1.35274L24.3791 3.42179L22.31 5.49084C22.1672 5.63368 22.1672 5.86527 22.31 6.0081C22.4529 6.15094 22.6844 6.15094 22.8273 6.0081L25.155 3.68043ZM1 3.78755L24.8963 3.78755L24.8963 3.05603L1 3.05603L1 3.78755Z" fill="#000000" stroke="currentColor" stroke-width="0.5" className="service-card-style-20"></path>
                                            </svg>
                                            <path d="M32 8.3c.4-.4.4-1 0-1.5L25.6.5a1 1 0 0 0-1.4 1.4L30 7.6l-5.7 5.6a1 1 0 0 0 1.4 1.4L32 8.3ZM.8 8.6h30.5v-2H.8v2Z" fill="currentColor" />
                                        </a>
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div ref={card2Ref} className="service-card-style-21" data-aos="fade-right" data-aos-delay="600" bis_skin_checked="1">
                            <div className="service-card-style-22" bis_skin_checked="1">
                                <div className="service-card-style-23" bis_skin_checked="1">
                                    <div className="service-card-style-24" bis_skin_checked="1">
                                        <img className="service-card-style-25" src="https://www.align.com/hubfs/Icon.svg" alt="Icon" loading="lazy" width="78" height="60" />
                                    </div>
                                    <h4 className="service-card-style-26">Workplace Technology<br className="service-card-style-27" />&amp; AV Solutions</h4>
                                    <p className="service-card-style-28">
                                        <a href="https://www.align.com/professional-services/workplace-technology?hsLang=en" className="service-card-style-29">
                                            Learn more
                                            <svg className="service-card-style-30" width="26" height="7" viewBox="0 0 26 7" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M25.155 3.68043C25.2978 3.53759 25.2978 3.30599 25.155 3.16315L22.8273 0.835478C22.6844 0.692637 22.4529 0.692637 22.31 0.835478C22.1672 0.97832 22.1672 1.20989 22.31 1.35274L24.3791 3.42179L22.31 5.49084C22.1672 5.63368 22.1672 5.86527 22.31 6.0081C22.4529 6.15094 22.6844 6.15094 22.8273 6.0081L25.155 3.68043ZM1 3.78755L24.8963 3.78755L24.8963 3.05603L1 3.05603L1 3.78755Z" fill="currentColor" stroke="currentColor" stroke-width="0.5" className="service-card-style-31"></path>
                                            </svg>
                                            <path d="M32 8.3c.4-.4.4-1 0-1.5L25.6.5a1 1 0 0 0-1.4 1.4L30 7.6l-5.7 5.6a1 1 0 0 0 1.4 1.4L32 8.3ZM.8 8.6h30.5v-2H.8v2Z" fill="currentColor" />
                                        </a>
                                    </p>
                                </div>
                                <div className="service-card-style-32" bis_skin_checked="1">
                                    <div className="service-card-style-33" bis_skin_checked="1">
                                        <h4 className="service-card-style-34">Workplace Technology<br className="service-card-style-35" />&amp; AV Solutions</h4>
                                        <p className="service-card-style-36">Right-size your workplace for today's professional with technology built for the connected enterprise</p>
                                    </div>
                                    <p className="service-card-style-37">
                                        <a href="https://www.align.com/professional-services/workplace-technology?hsLang=en" className="service-card-style-38">
                                            Learn more
                                            <svg className="service-card-style-39" width="26" height="7" viewBox="0 0 26 7" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M25.155 3.68043C25.2978 3.53759 25.2978 3.30599 25.155 3.16315L22.8273 0.835478C22.6844 0.692637 22.4529 0.692637 22.31 0.835478C22.1672 0.97832 22.1672 1.20989 22.31 1.35274L24.3791 3.42179L22.31 5.49084C22.1672 5.63368 22.1672 5.86527 22.31 6.0081C22.4529 6.15094 22.6844 6.15094 22.8273 6.0081L25.155 3.68043ZM1 3.78755L24.8963 3.78755L24.8963 3.05603L1 3.05603L1 3.78755Z" fill="#000000" stroke="currentColor" stroke-width="0.5" className="service-card-style-40"></path>
                                            </svg>
                                            <path d="M32 8.3c.4-.4.4-1 0-1.5L25.6.5a1 1 0 0 0-1.4 1.4L30 7.6l-5.7 5.6a1 1 0 0 0 1.4 1.4L32 8.3ZM.8 8.6h30.5v-2H.8v2Z" fill="currentColor" />
                                        </a>
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div ref={card3Ref} className="service-card-style-41" data-aos="fade-right" data-aos-delay="900" bis_skin_checked="1">
                            <div className="service-card-style-42" bis_skin_checked="1">
                                <div className="service-card-style-43" bis_skin_checked="1">
                                    <div className="service-card-style-44" bis_skin_checked="1">
                                        <img className="service-card-style-45" src="https://www.align.com/hubfs/Group%204.svg" alt="Group 4" loading="lazy" width="78" height="60" />
                                    </div>
                                    <h4 className="service-card-style-46">Managed IT Services<br className="service-card-style-47" />&amp; Cybersecurity</h4>
                                    <p className="service-card-style-48">
                                        <a href="https://www.align.com/managed-services?hsLang=en" className="service-card-style-49">
                                            Learn more
                                            <svg className="service-card-style-50" width="26" height="7" viewBox="0 0 26 7" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M25.155 3.68043C25.2978 3.53759 25.2978 3.30599 25.155 3.16315L22.8273 0.835478C22.6844 0.692637 22.4529 0.692637 22.31 0.835478C22.1672 0.97832 22.1672 1.20989 22.31 1.35274L24.3791 3.42179L22.31 5.49084C22.1672 5.63368 22.1672 5.86527 22.31 6.0081C22.4529 6.15094 22.6844 6.15094 22.8273 6.0081L25.155 3.68043ZM1 3.78755L24.8963 3.78755L24.8963 3.05603L1 3.05603L1 3.78755Z" fill="currentColor" stroke="currentColor" stroke-width="0.5" className="service-card-style-51"></path>
                                            </svg>
                                            <path d="M32 8.3c.4-.4.4-1 0-1.5L25.6.5a1 1 0 0 0-1.4 1.4L30 7.6l-5.7 5.6a1 1 0 0 0 1.4 1.4L32 8.3ZM.8 8.6h30.5v-2H.8v2Z" fill="currentColor" />
                                        </a>
                                    </p>
                                </div>
                                <div className="service-card-style-52" bis_skin_checked="1">
                                    <div className="service-card-style-53" bis_skin_checked="1">
                                        <h4 className="service-card-style-54">Managed IT Services<br className="service-card-style-55" />&amp; Cybersecurity</h4>
                                        <p className="service-card-style-56">Align Managed Services delivers the highest level of stability and transparency across your IT operations</p>
                                    </div>
                                    <p className="service-card-style-57">
                                        <a href="https://www.align.com/managed-services?hsLang=en" className="service-card-style-58">
                                            Learn more
                                            <svg className="service-card-style-59" width="26" height="7" viewBox="0 0 26 7" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M25.155 3.68043C25.2978 3.53759 25.2978 3.30599 25.155 3.16315L22.8273 0.835478C22.6844 0.692637 22.4529 0.692637 22.31 0.835478C22.1672 0.97832 22.1672 1.20989 22.31 1.35274L24.3791 3.42179L22.31 5.49084C22.1672 5.63368 22.1672 5.86527 22.31 6.0081C22.4529 6.15094 22.6844 6.15094 22.8273 6.0081L25.155 3.68043ZM1 3.78755L24.8963 3.78755L24.8963 3.05603L1 3.05603L1 3.78755Z" fill="#000000" stroke="currentColor" stroke-width="0.5" className="service-card-style-60"></path>
                                            </svg>
                                            <path d="M32 8.3c.4-.4.4-1 0-1.5L25.6.5a1 1 0 0 0-1.4 1.4L30 7.6l-5.7 5.6a1 1 0 0 0 1.4 1.4L32 8.3ZM.8 8.6h30.5v-2H.8v2Z" fill="currentColor" />
                                        </a>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </>
    )
}