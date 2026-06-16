import { useEffect } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import WhoWeAre from "./components/WhoWeAre";
import Services from "./components/Services";
import Portfolio from "./components/Portfolio";
import Process from "./components/Process";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function App() {
  useEffect(() => {
    const navbar = document.getElementById("navbar");
    const reveals = document.querySelectorAll<HTMLElement>(".section-reveal");

    const onScroll = () => {
      if (!navbar) return;
      navbar.classList.toggle("scrolled", window.scrollY > 50);
    };

    const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) entry.target.classList.add("visible");
          });
        },
        { threshold: 0.1 }
    );

    reveals.forEach((reveal) => observer.observe(reveal));
    window.addEventListener("scroll", onScroll);
    onScroll();

    return () => {
      window.removeEventListener("scroll", onScroll);
      observer.disconnect();
    };
  }, []);

  return (
      <div className="dark min-h-screen overflow-x-hidden bg-background text-white">
        <div className="grain-overlay" />
        <Navbar />
        <main>
          <Hero />
          <WhoWeAre />
          <Services />
          <Portfolio />
          <Process />
          <Contact />
        </main>
        <Footer />
      </div>
  );
}