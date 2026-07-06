import {type ServiceId, type WorkItem, worksData} from "../data/kroma.ts";
import {useEffect, useState} from "react";
import {ArrowLeft, X} from "lucide-react";
import KromaImage from "./KromaImage.tsx";
import KromaMedia from "./KromaMedia.tsx";

type Props = {
    serviceId: ServiceId | null
    open: boolean
    onClose: () => void
}


const ServiceModal = ({serviceId, open, onClose}: Props) => {
    const [selectedProject, setSelectedProject] = useState<WorkItem | null>(null)
    const [loadedProjectImages, setLoadedProjectImages] = useState(0)
    const [fullscreenImage, setFullscreenImage] = useState<{ src: string; alt: string } | null>(null);

    useEffect(() => {
        setLoadedProjectImages(0);
    }, [selectedProject]);

    if (!open || !serviceId) return null

    const works = worksData[serviceId]

    const totalProjectMedia = selectedProject?.media.length ?? 0;
    const projectMediaLoaded = selectedProject
        ? loadedProjectImages >= totalProjectMedia
        : true

    const closeModal = () => {
        setFullscreenImage(null)
        setSelectedProject(null)
        onClose()
    };

    return (
        <div
            className="fixed inset-0 z-[100] flex items-start justify-center overflow-y-auto bg-black/80 p-4 py-6 backdrop-blur-xl md:items-center"
            onClick={closeModal}
        >
            <div
                className="modal-panel flex max-h-[calc(100vh-3rem)] w-full max-w-5xl flex-col p-0"
                onClick={(e) => e.stopPropagation()}
            >
                <div className="sticky top-0 z-20 flex items-center justify-between border-b border-white/10 bg-[#111216]/95 p-5 backdrop-blur-xl md:p-8">
                    {selectedProject ? (
                        <button className="modal-icon-button cursor-pointer" onClick={() => setSelectedProject(null)}>
                            <ArrowLeft className="h-4 w-4"/>
                            Volver
                        </button>
                    ) : (
                        <h3 className="font-headline text-xl font-black uppercase md:text-2xl">
                            Proyectos
                        </h3>
                    )}

                    <button className="modal-close-button cursor-pointer" onClick={closeModal}>
                        <X className="h-5 w-5"/>
                    </button>
                </div>

                <div className="modal-scroll-area flex-1 overflow-y-auto p-5 md:p-8">
                    {!selectedProject ? (
                        <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
                            {works.map((work, index) => (
                                <button
                                    key={work.id}
                                    className="project-card group text-left"
                                    style={{ "--reveal-delay": `${index * 80}ms` } as React.CSSProperties}
                                    onClick={() => setSelectedProject(work)}
                                >
                                    <div className="h-52 rounded-xl">
                                        <KromaImage
                                            src={work.thumbnail}
                                            alt={work.title}
                                            className="h-full w-full rounded-xl object-cover brightness-[0.72] transition duration-500 group-hover:scale-[1.025] group-hover:brightness-100"
                                        />
                                    </div>

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
                        <div className="animate-modal-in relative pb-2">
                            {!projectMediaLoaded && (
                                <div className="project-detail-loader">
                                    <img src="/chroma.svg" alt="" aria-hidden="true" />
                                    <span>Cargando proyecto</span>
                                </div>
                            )}
                            <div className="mb-8">
                                <h3 className="font-headline text-2xl font-black uppercase md:text-4xl spectrum-heading">
                                    {selectedProject.title}
                                </h3>
                                <p className="mt-5 max-w-2xl text-sm leading-relaxed text-white/60">
                                    {selectedProject.desc}
                                </p>
                            </div>

                            <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                                {selectedProject.media.map((media, index) => (
                                    <div
                                        key={`${media.type}-${index}`}
                                        className="h-56 rounded-xl md:h-72"
                                    >
                                        {media.type === "image" ? (
                                            <button
                                                type="button"
                                                className="h-full w-full cursor-zoom-in overflow-hidden rounded-xl"
                                                onClick={() => setFullscreenImage({ src: media.src, alt: media.alt })}
                                            >
                                                <KromaMedia
                                                    media={media}
                                                    className="h-full w-full rounded-xl object-cover"
                                                    onLoad={() => setLoadedProjectImages((count) => count + 1)}
                                                />
                                            </button>
                                        ) : (
                                            <KromaMedia
                                                media={media}
                                                className="h-full w-full rounded-xl object-cover"
                                                onLoad={() => setLoadedProjectImages((count) => count + 1)}
                                            />
                                        )}
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}
                    {fullscreenImage && (
                        <div
                            className="fullscreen-media-viewer"
                            onClick={() => setFullscreenImage(null)}
                        >
                            <button
                                type="button"
                                className="fullscreen-close-button"
                                onClick={() => setFullscreenImage(null)}
                            >
                                <X className="h-5 w-5" />
                            </button>

                            <div className="fullscreen-image-stage" onClick={(event) => event.stopPropagation()}>
                                <img
                                    src={fullscreenImage.src}
                                    alt={fullscreenImage.alt}
                                    className="fullscreen-image"
                                />
                                <p>{fullscreenImage.alt}</p>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};
export default ServiceModal
