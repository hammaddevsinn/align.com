
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
            quote: "Align has been designing and overseeing all of our data center capacity increases for the past 7 years. Our capacity increase of over 100Mw has gone seamlessly due to Align's knowledge of power and cable plants and their detailed construction documents that leave no margin of error.",
            name: "Dwayne Wilson",
            title: "Vice President, Data Center Operations, Salesforce"
        },
        {
            id: 2,
            image: "https://www.align.com/hs-fs/hubfs/Verizon%20Logo.jpg?width=800&height=1200&name=Verizon%20Logo.jpg",
            quote: "When we sold one of our data center facilities, we only had four months to migrate over 1,200 devices to our new location before our lease expired. The Align team expedited the migration and decommissioning processes to get us out of our old facility right on time with extremely minimal ...",
            name: "Verizon",
            title: "Data Center Migration"
        },
        {
            id: 3,
            image: "https://www.align.com/hs-fs/hubfs/Circle%20Headshots%20(6).png?width=500&height=500&name=Circle%20Headshots%20(6).png",
            quote: "After 15 years of working with Align, they have proven to be the premier technology partner of Ted Moudis Associates—they are engrained in our organization and understand our larger technology needs. Align is on the forefront of new technology innovations and they understand how to apply ...",
            name: "Dean Ulloa",
            title: "Principal of Technology<br />Ted Moudis Associates"
        },
        {
            id: 4,
            image: "https://www.align.com/hs-fs/hubfs/_Web%20Assets/Testimonial%20Assets/Karl%20Cole-Frieman.png?width=300&height=300&name=Karl%20Cole-Frieman.png",
            quote: "At Cole-Frieman & Mallon LLP, we are proud of our reputation for innovation and collaboration. Our work is cutting edge, and our clients are discerning and expect high-quality work from our legal professionals. As our client base (like the rest of the world) was forced to make the recent ...",
            name: "Karl Cole-Frieman",
            title: "Co-Managing Partner, Cole-Frieman & Mallon"
        },
        {
            id: 5,
            image: "https://www.align.com/hs-fs/hubfs/_Client%20and%20Partner%20Logos/Testimonials/A%26M_Kelly%20Gargiulio.png?width=600&height=600&name=A%26M_Kelly%20Gargiulio.png",
            quote: "Having worked with Align at my previous company, I knew that I needed them as part of my team. They are more than a vendor, they are partners in helping us to get to a new vision of fitting out and delivering space. I could not perform my job successfully, without them at the table.",
            name: "Kelly L. Gargiulio",
            title: "Director of Global Corporate Real Estate<br />Alvarez & Marsal Holdings, LLC"
        },
        {
            id: 6,
            image: "https://www.align.com/hs-fs/hubfs/_Web%20Assets/Testimonial%20Assets/calcagno_vincent-250x250.png?width=250&height=250&name=calcagno_vincent-250x250.png",
            quote: "We continue to evolve our offerings to support the ever-expanding and changing business requirements for fund managers who are scaling their business and capital levels. Align has been a critical partner for us in terms of technology and cybersecurity—helping to improve our platform while ...",
            name: "Vincent Calcagno",
            title: "Founder & CEO, Agile Fund Solutions"
        }
    ]; return (
    <section className="w-full px-6 lg:px-18 py-12 bg-gray-50 relative">
      {/* Heading */}
      <div className="text-center mb-10" data-aos="fade" data-aos-duration='600'>
        <h2 className="text-3xl font-bold text-[#008AD4] mb-2">Client Testimonials</h2>
        <div className="w-20 h-1 bg-blue-500 mx-auto rounded"></div>
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
                <div className="w-full max-w-[563px] bg-gradient-to-r from-[#008AD4] to-[#00D1FF] p-0.5 rounded z-10">
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
      className="w-full mx-0 bg-gradient-to-r from-[#008AD4] to-[#00D1FF] p-0.5 rounded mt-10 md:w-max md:mx-auto">
  <a
    href="https://www.align.com/testimonials?hsLang=en"
    className="block bg-white text-black font-bold px-6 py-3 rounded transition"
  >
    View All Testimonials
  </a>
</div>

    </section>
  );
}