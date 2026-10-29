import SectionTitle from "../ui/SectionTitle.tsx";
import {type ClientLogo, clients} from "../../data/index.ts";

function ClientTile({client, hidden = false}: { client: ClientLogo; hidden?: boolean }) {
    return (
        <li className="client-tile" aria-hidden={hidden || undefined}>
            <img
                className={`client-logo${client.tone ? ` tone-${client.tone}` : ""}`}
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
                <ul className="clients-track">
                    {clients.map((client) => (
                        <ClientTile key={client.id} client={client}/>
                    ))}
                    {clients.map((client) => (
                        <ClientTile key={`${client.id}-copy`} client={client} hidden/>
                    ))}
                </ul>
            </div>
        </section>
    );
}
