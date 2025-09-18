
'use client';

import { Splide, SplideSlide } from '@splidejs/react-splide';
import "./Testimony.css";
import Image from 'next/image';
import { useRef } from 'react';


export default function Testimony() {
     const carouselRef = useRef<any>(null);
    const testimonials = [
        {
            id: 1,
            image: "https://www.align.com/hubfs/_Client%20and%20Partner%20Logos/Testimonials/1516356706458-1.jfif",
            quote: "Great technical expertise and strong communication. Our SaaS platform runs smoothly thanks to their backend architecture.",
            name: "Infobridge Technologies",
            title: "Seoul, South Korea"
        },
        {
            id: 2,
            image: "https://www.align.com/hs-fs/hubfs/Verizon%20Logo.jpg?width=800&height=1200&name=Verizon%20Logo.jpg",
            quote:"We were looking for a dependable dev partner for our MVP, and Arham's team delivered. They’ve earned our trust for future work.",            
            name:"BrightLayer Innovations",
            title: "Dubai, UAE"
        },
        {
            id: 3,
            image: "https://www.align.com/hs-fs/hubfs/Circle%20Headshots%20(6).png?width=500&height=500&name=Circle%20Headshots%20(6).png",
            quote:"Working with Arham Solutions was a game-changer for our app launch. Their team demonstrated outstanding technical skills and project ownership throughout.",
            name: "TechNova Inc.",
            title: "San Fransico, USA"
        },
        {
            id: 4,
            image: "https://www.align.com/hs-fs/hubfs/_Web%20Assets/Testimonial%20Assets/Karl%20Cole-Frieman.png?width=300&height=300&name=Karl%20Cole-Frieman.png",
            quote:"The collaboration was seamless. Timely updates, clean code, and scalable backend design. Highly recommended for startups looking for rapid development.",
            name: "VelocitySoft",
            title: "Berlin, Germany"
        },
        {
            id: 5,
            image: "https://www.align.com/hs-fs/hubfs/_Client%20and%20Partner%20Logos/Testimonials/A%26M_Kelly%20Gargiulio.png?width=600&height=600&name=A%26M_Kelly%20Gargiulio.png",
            quote:"We've worked with multiple dev teams, but this was by far our best outsourcing experience. Quality-driven and incredibly responsive.",
            name: "CloudCore Ltd.",
            title: "London, UK"
        },
        {
            id: 6,
            image: "https://www.align.com/hs-fs/hubfs/_Web%20Assets/Testimonial%20Assets/calcagno_vincent-250x250.png?width=250&height=250&name=calcagno_vincent-250x250.png",
            quote:"From initial consultation to final delivery, the team was extremely professional. They exceeded our expectations in both design and performance.",
            name: "NeoGrid Solutions",
            title: "Toronto, Canada"
        },
        {
            id: 7,
            image: "https://www.align.com/hs-fs/hubfs/_Web%20Assets/Testimonial%20Assets/calcagno_vincent-250x250.png?width=250&height=250&name=calcagno_vincent-250x250.png",
            quote:"They delivered a flawless enterprise dashboard with complex API integrations, all within our tight timeline. We're impressed with the results.",
            name: "Quantix Analytics",
            title: "Amsterdam, Netherlands"
        },
        {
            id: 8,
            image: "https://www.align.com/hs-fs/hubfs/_Web%20Assets/Testimonial%20Assets/calcagno_vincent-250x250.png?width=250&height=250&name=calcagno_vincent-250x250.png",
            quote:"Reliable, talented, and easy to work with. Their attention to detail and UX considerations made a real difference in our product.",
            name: "PixelWorks",
            title: "Melbourne, Australia"
        },
        
    ]; return (
    <section className="w-full px-6 lg:px-18 py-12 bg-gray-50 relative">
      {/* Heading */}
      <div className="text-center mb-10" data-aos="fade" data-aos-duration='600'>
        <h2 className="text-3xl font-bold text-orange-400 mb-2">Client Testimonials</h2>
        <div className="w-20 h-1 bg-orange-400 mx-auto rounded"></div>
      </div>

      {/* Carousel + Arrows */}
      <div className="relative flex items-center justify-center">
        {/* Left Arrow */}
        <button
          className="hidden md:block absolute left-0 z-30"
          onClick={() => carouselRef.current?.splide.go('<')}
        >
          <svg width="27" height="21" viewBox="0 0 27 21" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0.397725 9.46063C-0.132515 9.99096 -0.132515 10.8508 0.397725 11.3812L9.03981 20.0232C9.57014 20.5535 10.4299 20.5535 10.9602 20.0232C11.4906 19.4928 11.4906 18.633 10.9602 18.1027L3.27842 10.4209L10.9602 2.73909C11.4906 2.20877 11.4906 1.34895 10.9602 0.81864C10.4299 0.288317 9.57014 0.288317 9.03981 0.818639L0.397725 9.46063ZM26.7067 9.06293L1.35799 9.06293L1.35799 11.7789L26.7067 11.7789L26.7067 9.06293Z" fill="#008AD4"/>
          </svg>
        </button>

        {/* Splide Carousel */}
        <div className="w-full max-w-[1200px]">
          <Splide
            data-aos='fade-right'
            data-aos-duration='600'
            ref={carouselRef}
            options={{
              perPage: 2,
              perMove: 1,
              gap: '20px',
              type: 'loop',
              drag: true,
              keyboard: true,
              arrows: false,
              pagination: false,
              breakpoints: {
                1024: { perPage: 1, gap: '12px', focus: 'center' },
              },
            }}
            className="w-full"
          >
            {testimonials.map((testimonial) => (
              <SplideSlide key={testimonial.id} className="flex justify-center">
                <div className="w-full max-w-[563px] bg-gradient-to-r from-[#FFA500] to-[#FF7F50] p-0.5 rounded z-10">
                  <div className="bg-white h-full w-full rounded p-4 shadow-md flex flex-col">
                    <Image
                      src={testimonial.image}
                      alt={testimonial.name}
                      width={80}
                      height={80}
                      className="rounded-full"
                    />
                    <div className="mt-8 mb-9 text-gray-700 text-lg">{testimonial.quote}</div>
                    <div className="font-semibold mt-2">{testimonial.name}</div>
                    <div
                      className="text-sm text-gray-500"
                      dangerouslySetInnerHTML={{ __html: testimonial.title }}
                    />
                  </div>
                </div>
              </SplideSlide>
            ))}
          </Splide>
        </div>

        {/* Right Arrow */}
        <button
          className="hidden md:block absolute right-0 z-30"
          onClick={() => carouselRef.current?.splide.go('>')}
        >
          <svg width="27" height="21" viewBox="0 0 27 21" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M26.6024 11.3812C27.1326 10.8508 27.1326 9.99097 26.6024 9.46064L17.9603 0.818645C17.43 0.288314 16.5702 0.288314 16.0399 0.818645C15.5095 1.34898 15.5095 2.20875 16.0399 2.73908L23.7217 10.4209L16.0399 18.1027C15.5095 18.633 15.5095 19.4928 16.0399 20.0232C16.5702 20.5535 17.43 20.5535 17.9603 20.0232L26.6024 11.3812ZM0.293457 11.7789L25.6421 11.7789L25.6421 9.06294L0.293457 9.06294L0.293457 11.7789Z" fill="#008AD4"/>
          </svg>
        </button>
      </div>

      {/* View All Button */}
      <div 
      data-aos='fade'
      data-aos-duration='300'
      className="w-full mx-0  bg-gradient-to-r from-[#FFA500] to-[#FF7F50] p-0.5 rounded mt-10 md:w-max md:mx-auto">
  {/* <a
    href="#"
    className="block bg-white text-black font-bold px-6 py-3 rounded transition"
  >
    View All Testimonials
  </a> */}
</div>

    </section>
  );
}