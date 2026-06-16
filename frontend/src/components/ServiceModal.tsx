import {type ServiceId, worksData} from "../data/kroma.ts";

type Props = {
    serviceId: ServiceId | null
    open: boolean
    onClose: () => void
}


const ServiceModal = ({serviceId, open, onClose} : Props) => {
    if (!open || !serviceId) return null

    const works = worksData[serviceId]
    return (
        <div
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 p-6 backdrop-blur-xl"
            onClick={onClose}
        >
            <div
                className="glass-card max-h-[80vh] w-full max-w-5xl overflow-y-auto p-10"
                onClick={(e) => e.stopPropagation()}
            >
                <button className="mb-6 text-white/60 hover:text-white" onClick={onClose}>
                    ✕
                </button>

                <div className="space-y-10">
                    {works.map((work) => (
                        <div key={work.title}>
                            <h3 className="mb-3 text-2xl font-bold uppercase">{work.title}</h3>
                            <p className="mb-4 text-white/60">{work.desc}</p>

                            <div className="grid grid-cols-1 gap-3 md:grid-cols-2">
                                {work.images.map((img, i) => (
                                    <img
                                        key={i}
                                        src={img}
                                        className="h-48 w-full rounded-xl object-cover"
                                    />
                                ))}
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </div>
    )
}
export default ServiceModal
