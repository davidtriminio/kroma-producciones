import {ArrowUpRight, Images} from "lucide-react";
import type {Service} from "../../data/types.ts";
import {serviceIcons} from "./serviceIcons.ts";

type Props = {
    service: Service
    hasWorks: boolean
    onViewWorks: () => void
    onQuote: () => void
}

export default function ServiceCard({service, hasWorks, onViewWorks, onQuote}: Props) {
    const Icon = serviceIcons[service.icon];

    return (
        <article className="glass-card flex h-full flex-col p-5">
            <span className="icon-shell mb-5 text-brand">
                <Icon className="h-4 w-4" strokeWidth={2.2}/>
            </span>

            <h3 className="font-headline text-sm font-black uppercase leading-snug">{service.title}</h3>

            <p className="mt-3 flex-1 text-xs leading-relaxed text-fg/60">{service.description}</p>

            <div className="mt-6 flex flex-wrap items-center gap-x-4 gap-y-3">
                <button type="button" onClick={onQuote} className="service-cta cursor-pointer">
                    Cotiza tu proyecto
                    <ArrowUpRight className="h-3.5 w-3.5" aria-hidden="true"/>
                </button>

                {hasWorks && (
                    <button type="button" onClick={onViewWorks} className="service-link cursor-pointer">
                        <Images className="h-3.5 w-3.5" aria-hidden="true"/>
                        Ver trabajos
                    </button>
                )}
            </div>
        </article>
    );
}
