import Logo from "./components/ui/Logo.tsx";
import {useEffect, useState} from "react";
import Navbar from "./components/layout/Navbar.tsx";
import Hero from "./components/sections/Hero.tsx";
import WhoWeAre from "./components/sections/WhoWeAre.tsx";
import Services from "./components/sections/Services.tsx";
import Packages from "./components/sections/Packages.tsx";
import Clients from "./components/sections/Clients.tsx";
import Portfolio from "./components/sections/Portfolio.tsx";
import Process from "./components/sections/Process.tsx";
import Contact from "./components/sections/Contact.tsx";
import Footer from "./components/layout/Footer.tsx";

export default function App() {
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        const minLoadTime = window.setTimeout(() => {
            setIsLoading(false);
        }, 700);

        const onLoad = () => {
            window.setTimeout(() => {
                setIsLoading(false);
            }, 300);
        };

        if (document.readyState === "complete") {
            onLoad();
        } else {
            window.addEventListener("load", onLoad);
        }

        return () => {
            window.clearTimeout(minLoadTime);
            window.removeEventListener("load", onLoad);
        };
    }, []);

    useEffect(() => {
        const navbar = document.getElementById("navbar");

        const onScroll = () => {
            if (!navbar) return;
            navbar.classList.toggle("scrolled", window.scrollY > 50);
        };

        const revealItems = document.querySelectorAll<HTMLElement>("[data-reveal]");

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    const element = entry.target as HTMLElement;

                    if (entry.isIntersecting) {
                        element.classList.add("is-visible");
                        observer.unobserve(element);
                    }
                });
            },
            {
                threshold: 0.18,
                rootMargin: "0px 0px -8% 0px",
            }
        );

        revealItems.forEach((item, index) => {
            item.style.setProperty("--reveal-delay", `${index * 70}ms`);
            observer.observe(item);
        });

        window.addEventListener("scroll", onScroll, { passive: true });
        onScroll();

        return () => {
            window.removeEventListener("scroll", onScroll);
            observer.disconnect();
        };
    }, []);

  return (
      <div className="min-h-screen overflow-x-hidden bg-background text-fg">
          {isLoading && (
              <div className="app-loader">
                  <Logo size="sm" alt="Kroma cargando" className="app-loader-logo" />
              </div>
          )}
        <Navbar />
        <main>
          <Hero />
          <WhoWeAre />
          <Services />
          <Packages />
          <Portfolio />
          <Clients />
          <Process />
          <Contact />
        </main>
        <Footer />
      </div>
  );
}