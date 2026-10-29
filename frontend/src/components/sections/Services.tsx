import {useState} from "react";
import SectionTitle from "../ui/SectionTitle.tsx";
import {type CategoryId, type ServiceId, serviceCategories, services, worksData} from "../../data/index.ts";
import ServiceModal from "../services/ServiceModal.tsx";
import ServiceCard from "../services/ServiceCard.tsx";
import {requestQuote} from "../../lib/quote.ts";

const Services = () => {
    const [category, setCategory] = useState<CategoryId>(serviceCategories[0].id);
    const [selected, setSelected] = useState<ServiceId | null>(null);

    const activeCategory = serviceCategories.find((item) => item.id === category) ?? serviceCategories[0];
    const visibleServices = services.filter((service) => service.category === activeCategory.id);

    return (
        <section id="servicios" className="container-max mx-auto px-gutter py-section-gap">
            <SectionTitle center className="mb-10">
                Nuestros Servicios
            </SectionTitle>

            <div data-reveal>
                <div className="service-tabs" role="tablist" aria-label="Categorías de servicios">
                    {serviceCategories.map((item) => (
                        <button
                            key={item.id}
                            type="button"
                            role="tab"
                            id={`tab-${item.id}`}
                            aria-selected={item.id === activeCategory.id}
                            aria-controls="service-panel"
                            className="service-tab cursor-pointer"
                            onClick={() => setCategory(item.id)}
                        >
                            {item.title}
                        </button>
                    ))}
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
