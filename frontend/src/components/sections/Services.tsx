import {useEffect, useRef, useState} from "react";
import {ChevronLeft, ChevronRight} from "lucide-react";
import SectionTitle from "../ui/SectionTitle.tsx";
import {type CategoryId, type ServiceId, serviceCategories, services, worksData} from "../../data/index.ts";
import ServiceModal from "../services/ServiceModal.tsx";
import ServiceCard from "../services/ServiceCard.tsx";
import {requestQuote} from "../../lib/quote.ts";

const Services = () => {
    const [category, setCategory] = useState<CategoryId>(serviceCategories[0].id);
    const [selected, setSelected] = useState<ServiceId | null>(null);
    const [scrollEdges, setScrollEdges] = useState({left: false, right: false});
    const tabsRef = useRef<HTMLDivElement | null>(null);

    // Shows arrows and edge fades only while there are tabs hidden on that side.
    useEffect(() => {
        const tabs = tabsRef.current;
        if (!tabs) return;

        const update = () => {
            const max = tabs.scrollWidth - tabs.clientWidth;
            setScrollEdges({left: tabs.scrollLeft > 4, right: tabs.scrollLeft < max - 4});
        };

        const frame = requestAnimationFrame(update);
        tabs.addEventListener("scroll", update, {passive: true});
        window.addEventListener("resize", update);

        return () => {
            cancelAnimationFrame(frame);
            tabs.removeEventListener("scroll", update);
            window.removeEventListener("resize", update);
        };
    }, []);

    const nudgeTabs = (direction: 1 | -1) => {
        tabsRef.current?.scrollBy({left: direction * 180, behavior: "smooth"});
    };

    const activeCategory = serviceCategories.find((item) => item.id === category) ?? serviceCategories[0];
    const visibleServices = services.filter((service) => service.category === activeCategory.id);

    return (
        <section id="servicios" className="container-max mx-auto px-gutter py-section-gap">
            <SectionTitle center className="mb-10">
                Nuestros Servicios
            </SectionTitle>

            <div data-reveal>
                <div className="service-tabs-wrap">
                    {scrollEdges.left && (
                        <button type="button" className="service-tabs-arrow is-left" aria-label="Ver categorías anteriores" onClick={() => nudgeTabs(-1)}>
                            <ChevronLeft className="h-4 w-4"/>
                        </button>
                    )}

                    <div
                        ref={tabsRef}
                        className={`service-tabs${scrollEdges.left ? " fade-left" : ""}${scrollEdges.right ? " fade-right" : ""}`}
                        role="tablist"
                        aria-label="Categorías de servicios"
                    >
                        {serviceCategories.map((item) => (
                            <button
                                key={item.id}
                                type="button"
                                role="tab"
                                id={`tab-${item.id}`}
                                aria-selected={item.id === activeCategory.id}
                                aria-controls="service-panel"
                                className="service-tab cursor-pointer"
                                onClick={(event) => {
                                    setCategory(item.id);
                                    event.currentTarget.scrollIntoView({behavior: "smooth", inline: "center", block: "nearest"});
                                }}
                            >
                                {item.title}
                            </button>
                        ))}
                    </div>

                    {scrollEdges.right && (
                        <button type="button" className="service-tabs-arrow is-right" aria-label="Ver más categorías" onClick={() => nudgeTabs(1)}>
                            <ChevronRight className="h-4 w-4"/>
                        </button>
                    )}
                </div>

                <p className="mx-auto mb-8 mt-5 max-w-xl text-center text-xs leading-relaxed text-on-surface-variant">
                    {activeCategory.description}
                </p>

                <div
                    key={activeCategory.id}
                    id="service-panel"
                    role="tabpanel"
                    aria-labelledby={`tab-${activeCategory.id}`}
                    className="service-grid animate-modal-in"
                >
                    {visibleServices.map((service) => (
                        <ServiceCard
                            key={service.id}
                            service={service}
                            hasWorks={Boolean(worksData[service.id]?.length)}
                            onViewWorks={() => setSelected(service.id)}
                            onQuote={() => requestQuote({serviceId: service.id})}
                        />
                    ))}
                </div>
            </div>

            <ServiceModal
                serviceId={selected}
                open={selected !== null}
                onClose={() => setSelected(null)}
            />
        </section>
    );
};

export default Services;
