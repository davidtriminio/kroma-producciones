import {type ServiceId, type WorkItem, worksData} from "../data/kroma.ts";
import {useState} from "react";
import {ArrowLeft, X} from "lucide-react";

type Props = {
    serviceId: ServiceId | null
    open: boolean
    onClose: () => void
}


const ServiceModal = ({serviceId, open, onClose}: Props) => {
    const [selectedProject, setSelectedProject] = useState<WorkItem | null>(null)
    if (!open || !serviceId) return null

    const works = worksData[serviceId]

    const closeModal = () => {
        setSelectedProject(null)
        onClose()
    }

    return (
        <div
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 p-4 backdrop-blur-xl"
            onClick={closeModal}
        >
            <div
                className="modal-panel max-h-[86vh] w-full max-w-5xl overflow-y-auto p-5 md:p-8"
                onClick={(e) => e.stopPropagation()}
            >
                <div className="mb-6 flex items-center justify-between">
                    {selectedProject ? (
                        <button className="modal-icon-button" onClick={() => setSelectedProject(null)}>
                            <ArrowLeft className="h-4 w-4"/>
                            Volver
                        </button>
                    ) : (
                        <h3 className="font-headline text-xl font-black uppercase md:text-2xl">
                            Proyectos
                        </h3>
                    )}

                    <button className="modal-close-button" onClick={closeModal}>
                        <X className="h-5 w-5"/>
                    </button>
                </div>

                {!selectedProject ? (
                    <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
                        {works.map((work, index) => (
                            <button
                                key={work.id}
                                className="project-card group text-left"
                                style={{"--reveal-delay": `${index * 80}ms`} as React.CSSProperties}
                                onClick={() => setSelectedProject(work)}
                            >
                                <img
                                    src={work.thumbnail}
                                    alt={work.title}
                                    className="h-52 w-full rounded-xl object-cover brightness-[0.72] transition duration-500 group-hover:scale-[1.025] group-hover:brightness-100"
                                />

                                <div className="mt-4">
                                    <h4 className="font-headline text-sm font-black uppercase">
                                        {work.title}
                                    </h4>
                                    <p className="mt-2 text-xs leading-relaxed text-white/55">
                                        {work.desc}
                                    </p>
                                </div>
                            </button>
                        ))}
                    </div>
                ) : (
                    <div className="animate-modal-in">
                        <div className="mb-6">
                            <h3 className="font-headline text-2xl font-black uppercase md:text-4xl">
                                {selectedProject.title}
                            </h3>
                            <p className="mt-3 max-w-2xl text-sm leading-relaxed text-white/60">
                                {selectedProject.desc}
                            </p>
                        </div>

                        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                            {selectedProject.images.map((img, index) => (
                                <img
                                    key={img}
                                    src={img}
                                    alt={`${selectedProject.title} ${index + 1}`}
                                    className="h-64 w-full rounded-xl object-cover"
                                />
                            ))}
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};
export default ServiceModal
