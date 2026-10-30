import Logo from "../ui/Logo.tsx";
import {type ServiceId, type WorkItem, services, worksData} from "../../data/index.ts";
import {useState} from "react";
import {ArrowLeft, X} from "lucide-react";
import KromaImage from "../ui/KromaImage.tsx";
import KromaMedia from "../ui/KromaMedia.tsx";

type Props = {
    serviceId: ServiceId | null
    open: boolean
    onClose: () => void
}


const REQUIRED_MEDIA_LOADS = 4

const ServiceModal = ({serviceId, open, onClose}: Props) => {
    const [selectedProject, setSelectedProject] = useState<WorkItem | null>(null)
    const [loadedProjectMedia, setLoadedProjectMedia] = useState(0);
    const [fullscreenImage, setFullscreenImage] = useState<{ src: string; alt: string } | null>(null);

    const selectProject = (project: WorkItem | null) => {
        setLoadedProjectMedia(0)
        setSelectedProject(project)
    }

    if (!open || !serviceId) return null

    const works = worksData[serviceId] ?? []
    const service = services.find((item) => item.id === serviceId)

    // A project with one piece of media gets a full-width, uncropped viewer.
    const single = selectedProject?.media.length === 1
    const allPhone = Boolean(selectedProject?.media.every((item) => item.type === "image" && item.layout === "phone"))
    const totalProjectMedia = selectedProject?.media.length ?? 0;
    // Only the first items gate the loader: the rest are lazy and may sit far below the fold.
    const projectMediaLoaded = selectedProject
        ? loadedProjectMedia >= Math.min(totalProjectMedia, REQUIRED_MEDIA_LOADS)
        : true

    const closeModal = () => {
        setFullscreenImage(null)
        selectProject(null)
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
                <div
                    className="sticky top-0 z-20 flex items-center justify-between border-b border-fg/10 bg-surface/95 p-5 backdrop-blur-xl md:p-8">
                    {selectedProject ? (
                        <button
                            className="modal-icon-button cursor-pointer"
                            onClick={() => {
                                setFullscreenImage(null);
                                selectProject(null);
                            }}
                        >
                            <ArrowLeft className="h-4 w-4"/>
                            Volver
                        </button>
                    ) : (
                        <h3 className="font-headline text-lg font-black uppercase md:text-2xl">
                            {service?.title ?? "Proyectos"}
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
                                    style={{"--reveal-delay": `${index * 80}ms`} as React.CSSProperties}
                                    onClick={() => selectProject(work)}
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
                                        <p className="mt-2 text-xs leading-relaxed text-fg/55">
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
                                    <Logo size="sm" alt="" />
                                    <span>Cargando proyecto</span>
                                </div>
                            )}
                            <div className="mb-8">
                                <h3 className="font-headline text-2xl font-black uppercase md:text-4xl spectrum-heading">
                                    {selectedProject.title}
                                </h3>
                                <p className="mt-5 max-w-2xl text-sm leading-relaxed text-fg/60">
                                    {selectedProject.desc}
                                </p>
                            </div>

                            <div className={`grid gap-4 ${allPhone ? "grid-cols-2 md:grid-cols-4" : single ? "grid-cols-1" : "grid-cols-1 md:grid-cols-2"}`}>
                                {selectedProject.media.map((media) => (
                                    <div
                                        key={`${media.type}-${media.src}`}
                                        className={`rounded-xl bg-black/40 ${media.type === "image" && media.layout === "phone" ? "aspect-[1/2]" : single ? "h-80 md:h-[30rem]" : "h-56 md:h-72"}`}
                                    >
                                        {media.type === "image" ? (
                                            <button
                                                type="button"
                                                className="h-full w-full cursor-zoom-in overflow-hidden rounded-xl"
                                                onClick={() => setFullscreenImage({src: media.src, alt: media.alt})}
                                            >
                                                <KromaMedia
                                                    media={media}
                                                    className={`h-full w-full rounded-xl ${media.layout === "phone" ? "object-cover object-top" : single ? "object-contain" : "object-cover"}`}
                                                    onLoad={() => setLoadedProjectMedia((count) => count + 1)}
                                                />
                                            </button>
                                        ) : (
                                            <KromaMedia
                                                media={media}
                                                className="h-full w-full rounded-xl bg-black object-contain"
                                                onLoad={() => setLoadedProjectMedia((count) => count + 1)}
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
                                <X className="h-5 w-5"/>
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
