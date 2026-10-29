import Logo from "./components/Logo";
import {useEffect, useState} from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import WhoWeAre from "./components/WhoWeAre";
import Services from "./components/Services";
import Portfolio from "./components/Portfolio";
import Process from "./components/Process";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

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
          <Portfolio />
          <Process />
          <Contact />
        </main>
        <Footer />
      </div>
  );
}