import { BadgeCheck, Lightbulb, Clapperboard } from "lucide-react";
import SectionTitle from "./SectionTitle";

const features = [
    {
        Icon: BadgeCheck,
        iconClass: "text-brand",
        title: "Calidad visual",
        text: "Estándares de cine aplicados a la comunicación comercial diaria.",
    },
    {
        Icon: Lightbulb,
        iconClass: "text-highlight-text",
        title: "Creatividad con propósito",
        text: "Cada decisión visual responde a un objetivo estratégico claro.",
    },
    {
        Icon: Clapperboard,
        iconClass: "text-fg",
        title: "Producción integral",
        text: "Desde el primer concepto hasta la entrega final del contenido.",
    },
];

export default function WhoWeAre() {
    return (
        <section className="container-max mx-auto px-gutter py-section-gap" id="quienes-somos">
            <div data-reveal className="grid items-start gap-14 md:grid-cols-12">
                <div className="md:col-span-5">
                    <SectionTitle>¿Quiénes Somos?</SectionTitle>
                    <p className="mb-5 max-w-md text-sm leading-relaxed text-on-surface-variant">
                        KROMA transforma marcas a través de contenido visual preciso, moderno y memorable.
                    </p>
                    <p className="max-w-md text-sm leading-relaxed text-on-surface-variant">
                        Unimos estrategia, diseño y producción para crear piezas con impacto real en plataformas digitales.
                    </p>
                </div>

                <div className="grid gap-4 md:col-span-7">
                    {features.map(({ Icon, ...feature }) => (
                        <div key={feature.title} className="glass-card p-5">
                            <div className="mb-3 flex items-center gap-4">
                                <Icon className={`h-5 w-5 ${feature.iconClass}`} strokeWidth={2.2} />
                                <h3 className="font-headline text-sm font-black uppercase">{feature.title}</h3>
                            </div>
                            <p className="text-xs leading-relaxed text-on-surface-variant">{feature.text}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}