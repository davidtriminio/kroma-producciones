import SectionTitle from "../ui/SectionTitle.tsx";
import {ChevronLeft, ChevronRight} from "lucide-react";
import {useRef} from "react";
import KromaImage from "../ui/KromaImage.tsx";
import {portfolioItems} from "../../data/portfolio.ts";

export default function Portfolio() {
    const carouselRef = useRef<HTMLDivElement | null>(null);

    const scrollPortfolio = (direction: "left" | "right") => {
        const carousel = carouselRef.current;
        if (!carousel) return;

        const card = carousel.querySelector<HTMLElement>("article");
        const cardWidth = card?.offsetWidth ?? carousel.clientWidth;
        const gap = 16;

        carousel.scrollBy({
            left: direction === "right" ? cardWidth + gap : -(cardWidth + gap),
            behavior: "smooth",
        });
    };
    return (
        <section className="container-max mx-auto overflow-hidden px-gutter py-section-gap" id="portfolio">
            <div className="mb-12 flex items-end justify-between gap-6">
                <SectionTitle className="mb-0">Nuestro Trabajo</SectionTitle>

                <div className="flex gap-2 md:hidden">
                    <button
                        type="button"
                        aria-label="Ver proyecto anterior"
                        onClick={() => scrollPortfolio("left")}
                        className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-fg/15 bg-fg/5 text-fg/70 transition hover:border-fg/30 hover:bg-fg/10 hover:text-fg"
                    >
                        <ChevronLeft className="h-4 w-4"/>
                    </button>

                    <button
                        type="button"
                        aria-label="Ver siguiente proyecto"
                        onClick={() => scrollPortfolio("right")}
                        className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-fg/15 bg-fg/5 text-fg/70 transition hover:border-fg/30 hover:bg-fg/10 hover:text-fg"
                    >
                        <ChevronRight className="h-4 w-4"/>
                    </button>
                </div>
            </div>

            <div
                ref={carouselRef}
                data-reveal
                className="
    flex snap-x snap-mandatory gap-4 overflow-x-auto scroll-smooth pb-5
    [-ms-overflow-style:none] [scrollbar-width:none]
    [&::-webkit-scrollbar]:hidden
    md:grid md:h-[600px] md:grid-cols-4 md:grid-rows-2 md:overflow-visible md:pb-0
  "
            >
                {portfolioItems.map((item) => (
                    <article
                        key={item.title}
                        className={`
              ${item.span}
              group relative h-[390px] min-w-[82%] snap-center overflow-hidden rounded-kp
              border border-fg/10 bg-fg/[0.035]
              sm:min-w-[58%]
              md:h-auto md:min-w-0
            `}
                    >
                        <KromaImage
                            src={item.image}
                            alt={`${item.title} - proyecto de ${item.tag} por Kroma - Agencia Publicitaria`}
                            className="absolute inset-0 h-full w-full object-cover brightness-[0.72] saturate-[0.85] transition duration-700 group-hover:scale-105 group-hover:brightness-100 group-hover:saturate-100"
                        />

                        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/35 to-transparent"/>

                        <div className="absolute inset-x-0 bottom-0 p-5 md:p-8">
              <span className="mb-2 block text-[10px] font-black uppercase tracking-[0.2em] text-[#d9c8ec]">
                {item.tag}
              </span>
                            <h3 className="font-headline text-xl font-black uppercase leading-none text-white md:text-3xl">
                                {item.title}
                            </h3>
                        </div>
                    </article>
                ))}
            </div>
        </section>
    );
}