"use client"

import { Splide, SplideSlide } from '@splidejs/react-splide';
import "./Testimony.css";

export default function Testimony() {
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
    ];
    
    return (
        <>
            <section className="testimony-style-0">
                <div className="testimony-heading-style-1" data-aos="fade">
                    <h2 className="testimony-heading-style-2">Client Testimonials</h2>
                    <div className="testimony-heading-style-3"></div>
                </div>
                <div className="testimony-carousel-container">
                    <Splide 
                        options={{
                            perPage: 3,
                            perMove: 1,
                            breakpoints: {
                                1499: { perPage: 2, perMove: 1, gap: '20px' },
                                1199: { perPage: 1, perMove: 1, gap: '25px' }
                            },
                            gap: '20px',
                            arrows: false,
                            pagination: false,
                            type: 'loop',
                            autoplay: false,
                            drag: true,
                            keyboard: true,
                            autoWidth: false,
                            autoHeight: false,
                            fixedWidth: false,
                            fixedHeight: false
                        }}
                        className="testimony-carousel"
                    >
                        {testimonials.map((testimonial) => (
                            <SplideSlide key={testimonial.id}>
                                <div className="testimony-card">
                                    <div className="testimony-card-inner">
                                        <div className="testimony-avatar">
                                            <img 
                                                loading="lazy" 
                                                src={testimonial.image} 
                                                alt={testimonial.name} 
                                                className="testimony-avatar-img"
                                            />
                                        </div>
                                        <div className="testimony-content">
                                            <p className="testimony-quote">"{testimonial.quote}"</p>
                                            <h6 className="testimony-name">{testimonial.name}</h6>
                                            <p 
                                                className="testimony-title"
                                                dangerouslySetInnerHTML={{ __html: testimonial.title }}
                                            />
                                        </div>
                                    </div>
                                </div>
                            </SplideSlide>
                        ))}
                    </Splide>
                </div>
                <div className="testimony-btn-style-161" data-aos="fade">
                    <p className="testimony-btn-style-162">
                        <a href="https://www.align.com/testimonials?hsLang=en" className="testimony-btn-style-163">View All Testimonials</a>
                    </p>
                </div>
            </section>
        </>
    );
}
