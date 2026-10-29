import type {CSSProperties} from "react";
import SectionTitle from "../ui/SectionTitle.tsx";
import {activeClients, type ClientLogo} from "../../data/index.ts";

function ClientTile({client, hidden = false}: { client: ClientLogo; hidden?: boolean }) {
    return (
        <li className={`client-tile${client.tone === "white" ? " on-dark" : ""}`} aria-hidden={hidden || undefined}>
            <img
                className="client-logo"
                src={client.logo}
                alt={hidden ? "" : client.name}
                title={client.name}
                decoding="async"
                draggable={false}
            />
        </li>
    );
}

export default function Clients() {
    if (activeClients.length === 0) return null;

    // The track shifts by exactly one copy, so it needs enough copies to always fill the screen.
    const copies = activeClients.length >= 12 ? 2 : 4;
    const style = {
        "--marquee-copies": copies,
        "--marquee-duration": `${activeClients.length * 4}s`,
    } as CSSProperties;

    return (
        <section id="clientes" className="py-section-gap">
            <div className="container-max mx-auto px-gutter">
                <SectionTitle center className="mb-4">
                    Nuestros Clientes
                </SectionTitle>

                <p className="mx-auto mb-12 max-w-xl text-center text-sm leading-relaxed text-on-surface-variant">
                    Marcas que confían en Kroma para comunicar, crecer y verse profesionales.
                </p>
            </div>

            <div className="clients-marquee" data-reveal>
                <ul className="clients-track" style={style}>
                    {Array.from({length: copies}, (_, copy) =>
                        activeClients.map((client) => (
                            <ClientTile key={`${client.id}-${copy}`} client={client} hidden={copy > 0}/>
                        ))
                    )}
                </ul>
            </div>
        </section>
    );
}
