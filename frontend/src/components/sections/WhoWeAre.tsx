import { BadgeCheck, Lightbulb, Clapperboard } from "lucide-react";
import SectionTitle from "../ui/SectionTitle.tsx";
import {aboutFeatures} from "../../data/about.ts";

const icons = {
    "badge-check": BadgeCheck,
    lightbulb: Lightbulb,
    clapperboard: Clapperboard,
};
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
                    {aboutFeatures.map(({icon, ...feature}) => {
                        const Icon = icons[icon];

                        return (
                        <div key={feature.title} className="glass-card p-5">
                            <div className="mb-3 flex items-center gap-4">
                                <Icon className={`h-5 w-5 ${feature.iconClass}`} strokeWidth={2.2} />
                                <h3 className="font-headline text-sm font-black uppercase">{feature.title}</h3>
                            </div>
                            <p className="text-xs leading-relaxed text-on-surface-variant">{feature.text}</p>
                        </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}