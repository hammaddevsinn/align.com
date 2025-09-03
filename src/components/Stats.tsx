"use client"

import { useEffect, useRef, useState } from "react";
import "./Stats.css";

export default function Stats() {
    const [isVisible, setIsVisible] = useState(false);
    const [counters, setCounters] = useState({
        counter1: 0,
        counter2: 0,
        counter3: 0,
        counter4: 0,
        counter5: 0
    });
    const sectionRef = useRef<HTMLElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    if (!isVisible) {
                        setIsVisible(true);
                        startCounters();
                    }
                } else {
                    // Reset when out of view
                    setIsVisible(false);
                    resetCounters();
                }
            },
            { threshold: 0.3 }
        );

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        return () => observer.disconnect();
    }, [isVisible]);

    const animateCounter = (start: number, end: number, duration: number, callback: (value: number) => void) => {
        const startTime = performance.now();
        const animate = (currentTime: number) => {
            const elapsed = currentTime - startTime;
            const progress = Math.min(elapsed / duration, 1);
            
            // Easing function for smooth animation
            const easeOutCubic = 1 - Math.pow(1 - progress, 3);
            const current = Math.floor(start + (end - start) * easeOutCubic);
            
            callback(current);
            
            if (progress < 1) {
                requestAnimationFrame(animate);
            }
        };
        requestAnimationFrame(animate);
    };

    const resetCounters = () => {
        setCounters({
            counter1: 0,
            counter2: 0,
            counter3: 0,
            counter4: 0,
            counter5: 0
        });
    };

    const startCounters = () => {
        // Counter 1: 0 to 190 in 2000ms
        animateCounter(0, 190, 2000, (value) => 
            setCounters(prev => ({ ...prev, counter1: value }))
        );
        
        // Counter 2: 0 to 2 in 1000ms
        animateCounter(0, 2, 1000, (value) => 
            setCounters(prev => ({ ...prev, counter2: value }))
        );
        
        // Counter 3: 0 to 6000 in 5000ms
        animateCounter(0, 6000, 5000, (value) => 
            setCounters(prev => ({ ...prev, counter3: value }))
        );
        
        // Counter 4: 0 to 1000 in 3000ms
        animateCounter(0, 1000, 3000, (value) => 
            setCounters(prev => ({ ...prev, counter4: value }))
        );
        
        // Counter 5: 0 to 1 in 1000ms
        animateCounter(0, 1, 1000, (value) => 
            setCounters(prev => ({ ...prev, counter5: value }))
        );
    };

    const formatNumber = (num: number) => {
        return num.toLocaleString();
    };

    return (
        <>
            <section ref={sectionRef} className="stat-style-0">
                <div className="stat-container-style-1">
                    <div className="stat-container-style-2">
                        <div className="stat-container-style-3">
                            <div className="stat-container-style-4">
                                <span className="stat-container-style-5"></span><span className="stat-container-style-6">{formatNumber(counters.counter1)}</span><span className="stat-container-style-7"></span>
                            </div>
                            <div className="stat-container-style-8">Professionals and counting</div>
                        </div>
                        <div className="stat-container-style-9">
                            <div className="stat-container-style-10">
                                <span className="stat-container-style-11"></span><span className="stat-container-style-12">{counters.counter2}</span><span className="stat-container-style-13">+ GW</span>
                            </div>
                            <div className="stat-container-style-14">of Data Centers Built</div>
                        </div>
                        <div className="stat-container-style-15">
                            <div className="stat-container-style-16">
                                <span className="stat-container-style-17"></span><span className="stat-container-style-18">{formatNumber(counters.counter3)}</span><span className="stat-container-style-19">+</span>
                            </div>
                            <div className="stat-container-style-20">Monitored &amp; Protected Devices</div>
                        </div>
                        <div className="stat-container-style-21">
                            <div className="stat-container-style-22">
                                <span className="stat-container-style-23"></span><span className="stat-container-style-24">{formatNumber(counters.counter4)}</span><span className="stat-container-style-25">+</span>
                            </div>
                            <div className="stat-container-style-26">Applications Migrated in 2025</div>
                        </div>
                        <div className="stat-container-style-27">
                            <div className="stat-container-style-28">
                                <span className="stat-container-style-29"></span><span className="stat-container-style-30">{counters.counter5}</span><span className="stat-container-style-31">M sq. ft.</span>
                            </div>
                            <div className="stat-container-style-32">Workplaces Transformed in 2025</div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
