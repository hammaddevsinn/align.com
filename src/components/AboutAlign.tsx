"use client";

import dynamic from "next/dynamic";
import { useEffect, useRef } from "react";

import "./AboutAlign.css";

const Player = dynamic(() => import("@lottiefiles/react-lottie-player").then(mod => ({ default: mod.Player })), {
    ssr: false,
    loading: () => <div style={{ width: '100%', height: '400px' }} />
});

export default function AboutAlign() {
    const textRef = useRef<HTMLDivElement>(null);
    const animationRef = useRef<HTMLDivElement>(null);

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

        if (textRef.current) observer.observe(textRef.current);
        if (animationRef.current) observer.observe(animationRef.current);

        return () => observer.disconnect();
    }, []);

    return (
        <>
            <div className="about-align-style-0" data-bis-skin-checked="1">
                <div className="about-section-style-0" data-bis-skin-checked="1">
                    <div className="about-section-style-1" data-bis-skin-checked="1">
                        <div ref={textRef} data-aos="fade-right" data-aos-delay="200" className="about-section-style-2" data-colname="" data-type="text" data-colsize="6" data-bis-skin-checked="1">
                            <div className="about-section-style-3" data-bis-skin-checked="1">
                                <div className="about-section-style-4" data-bis-skin-checked="1">
                                    <div className="about-section-style-5" data-bis-skin-checked="1">
                                        About Align
                                    </div>
                                    <h2 className="about-section-style-6">

                                        <span className="about-section-style-7">Turnkey Technology Infrastructure Solutions</span>
                                    </h2>
                                    <div className="about-section-style-8" data-bis-skin-checked="1">
                                        <p className="about-section-style-9">The rise of AI has had a massive impact on the IT industry - from increasing demands on data center infrastructure, to creating increasing risk from a cybersecurity standpoint, and even enabling more advanced workplace technology solutions. Align is uniquely equipped to address all of these facets of the AI revolution with our team of experts.</p>
                                        <p className="about-section-style-10">From strategy to delivery, our winning combination of comprehensive IT solutions and experienced professionals unite to accelerate change from the data center to the workplace and into the cloud.&nbsp;</p>
                                    </div>
                                </div>
                            </div>
                            <div className="about-section-style-11" data-bis-skin-checked="1">
                                <a href="https://www.align.com/about?hsLang=en" className="about-section-style-12">About Align</a>
                            </div>
                        </div>
                        <div ref={animationRef} data-aos="fade" data-aos-delay="400" className="about-section-style-13" data-colname="" data-type="lottie" data-colsize="6" data-bis-skin-checked="1">
                            <div className="about-section-style-14" data-bis-skin-checked="1">
                                <Player
                                    autoplay
                                    loop
                                    src="/animations/data.json" // path from public folder
                                    style={{ width: '100%', height: 'auto' }}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
