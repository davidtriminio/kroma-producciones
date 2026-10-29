import {Check} from "lucide-react";
import SectionTitle from "../ui/SectionTitle.tsx";
import {packagesNote, servicePackages} from "../../data/index.ts";
import {requestQuote} from "../../lib/quote.ts";

export default function Packages() {
    return (
        <section id="paquetes" className="container-max mx-auto px-gutter py-section-gap">
            <SectionTitle center className="mb-4">
                Paquetes de Redes
            </SectionTitle>

            <p className="mx-auto mb-14 max-w-xl text-center text-sm leading-relaxed text-on-surface-variant">
                Gestionamos tus redes sociales de principio a fin: estrategia, contenido, diseño y publicación cada mes.
            </p>

            <div data-reveal className="grid items-stretch gap-5 md:grid-cols-3">
                {servicePackages.map((pack) => (
                    <article
                        key={pack.id}
                        className={`glass-card package-card flex flex-col p-7 ${pack.highlighted ? "is-highlighted" : ""}`}
                    >
                        {pack.highlighted && <span className="package-badge">Más completo</span>}

                        <h3 className="font-headline text-base font-black uppercase">{pack.title}</h3>
                        <p className="mt-2 text-xs font-black uppercase tracking-[0.16em] text-brand">{pack.posts}</p>

                        <ul className="mt-6 flex-1 space-y-3">
                            {pack.features.map((feature) => (
                                <li key={feature} className="flex gap-3 text-xs leading-relaxed text-fg/70">
                                    <Check className="mt-0.5 h-3.5 w-3.5 shrink-0 text-highlight-text" strokeWidth={3} aria-hidden="true"/>
                                    {feature}
                                </li>
                            ))}
                        </ul>

                        <button
                            type="button"
                            className={`${pack.highlighted ? "pill-button-primary" : "pill-button-secondary"} mt-8 w-full cursor-pointer font-black uppercase`}
                            onClick={() => requestQuote({serviceId: "redes-sociales", packageId: pack.id})}
                        >
                            Cotiza tu proyecto
                        </button>
                    </article>
                ))}
            </div>

            <p className="mx-auto mt-8 max-w-2xl text-center text-[11px] leading-relaxed text-on-surface-variant">
                {packagesNote}
            </p>
        </section>
    );
}
