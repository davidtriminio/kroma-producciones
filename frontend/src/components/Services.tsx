import {useState} from "react";
import {Clapperboard, Share2, Globe2, PenTool} from "lucide-react";
import SectionTitle from "./SectionTitle";
import {serviceCards, type ServiceId} from "../data/kroma.ts";
import ServiceModal from "./ServiceModal.tsx";
import KromaImage from "./KromaImage.tsx";

const icons = {
    audiovisual: Clapperboard,
    social: Share2,
    web: Globe2,
    branding: PenTool,
};

const Services = () => {
    const [selected, setSelected] = useState<ServiceId | null>(null);

    return (
        <section id="servicios" className="container-max mx-auto px-gutter py-section-gap">
            <SectionTitle center className="mb-14">
                Nuestros Servicios
            </SectionTitle>

            <div data-reveal className="grid grid-cols-1 gap-5 md:grid-cols-4">
                {serviceCards.map((s, index) => {
                    const Icon = icons[s.id];

                    return (
                        <button
                            key={s.id}
                            onClick={() => setSelected(s.id)}
                            data-reveal
                            style={{ "--reveal-delay": `${index * 90}ms` } as React.CSSProperties}
                            className="glass-card group flex min-h-[290px] flex-col p-4 text-left"
                        >
                            <div className="mb-4 h-32 rounded-xl">
                                <KromaImage
                                    src={s.images[0]}
                                    alt={s.title}
                                    className="h-full w-full rounded-xl object-cover brightness-[0.72] saturate-[0.85] transition duration-500 group-hover:scale-[1.025] group-hover:brightness-100 group-hover:saturate-100"
                                />
                            </div>

                            <div className="mb-3 flex items-center gap-3">
                                <Icon className={`h-5 w-5 ${s.accentClass}`} strokeWidth={2.2}/>
                                <h3 className="font-headline text-sm font-black uppercase">{s.title}</h3>
                            </div>

                            <p className="text-xs leading-relaxed text-fg/55">
                                {s.description}
                            </p>

                            <span
                                className="mt-5 inline-flex items-center text-[10px] font-black uppercase tracking-[0.18em] text-fg/45 transition group-hover:text-fg">Ver trabajos</span>
                        </button>
                    );
                })}
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