import {useState} from 'react'
import {serviceCards, type ServiceId} from "../data/kroma.ts";
import ServiceModal from "./ServiceModal.tsx";

const Services = () => {
    const [selected, setSelected] = useState<ServiceId | null>(null)

    return (
        <section id="servicios" className="py-32">
            <div className="mx-auto grid max-w-6xl grid-cols-1 gap-6 md:grid-cols-4">
                {serviceCards.map((s) => (
                    <div key={s.id} className="glass-card flex flex-col p-6">
                        <div className="grid grid-cols-2 gap-2">
                            {s.images.slice(0, 2).map((img, i) => (
                                <img key={i} src={img} className="h-20 w-full rounded-lg object-cover"/>
                            ))}
                        </div>

                        <div className="mt-4 flex items-center gap-2">
              <span className={`material-symbols-outlined ${s.accentClass}`}>
                {s.icon}
              </span>
                            <h3 className="font-bold">{s.title}</h3>
                        </div>

                        <p className="mt-2 flex-1 text-sm text-white/60">
                            {s.description}
                        </p>

                        <button
                            onClick={() => setSelected(s.id)}
                            className="mt-4 rounded-full border py-2 text-xs uppercase"
                        >
                            Ver trabajos
                        </button>
                    </div>
                ))}
            </div>

            <ServiceModal
                serviceId={selected}
                open={selected !== null}
                onClose={() => setSelected(null)}
            />
        </section>
    )
}
export default Services
