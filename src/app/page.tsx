import Image from "next/image";
import Hero from "../components/Hero";
import Procedure from "../components/Procedure";
import Services from "../components/Services";
import AboutAlign from "../components/AboutAlign";
import Trust from "../components/Trust";
import Testimony from "../components/Testimony";
import Expertise from "../components/Expertise";
import Blog from "../components/Blog";
import Results from "../components/Results";
import Stats from "../components/Stats";
import SuccessStories from "../components/SuccessStories";
import Communication from "../components/Communication";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
export default function Home() {
  return (
    <>
    <section id="hero">
      <Hero />
      </section>
      <Procedure />
      <Services />
      <AboutAlign />
      <Trust />
      <Testimony />
      <Expertise />
      <Blog />
      <Results />
      <Stats />
      <SuccessStories />
      <Communication />
      <section id="contact">
      <Contact />
      </section>
      <Footer />
    </>
  );
}
