import Logo from "../ui/Logo.tsx";
import {type ProjectMedia, type ServiceId, type WorkItem, serviceCategories, services, worksData} from "../../data/index.ts";
import {Fragment, useEffect, useState} from "react";
import {ArrowLeft, ArrowRight, ChevronRight, X} from "lucide-react";
import KromaImage from "../ui/KromaImage.tsx";
import KromaMedia from "../ui/KromaMedia.tsx";
import ImageLightbox from "./ImageLightbox.tsx";

type Props = {
    serviceId: ServiceId | null
    open: boolean
    onClose: () => void
}

type ImageMedia = Extract<ProjectMedia, { type: "image" }>;

const REQUIRED_MEDIA_LOADS = 4

const ServiceModal = ({serviceId, open, onClose}: Props) => {
    const [selectedProject, setSelectedProject] = useState<WorkItem | null>(null)
    const [loadedProjectMedia, setLoadedProjectMedia] = useState(0);
    const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

    const works = serviceId ? worksData[serviceId] ?? [] : []
    const service = services.find((item) => item.id === serviceId)
    const category = serviceCategories.find((item) => item.id === service?.category)
    const images = (selectedProject?.media.filter((item) => item.type === "image") ?? []) as ImageMedia[]

    const selectProject = (project: WorkItem | null) => {
        setLoadedProjectMedia(0)
        setLightboxIndex(null)
        setSelectedProject(project)
    }

    const closeModal = () => {
        selectProject(null)
        onClose()
    };

    // Escape steps back one level (photo viewer, then project, then modal); arrows move between photos.
    useEffect(() => {
        if (!open) return;

        const onKeyDown = (event: KeyboardEvent) => {
            if (event.key === "Escape") {
                if (lightboxIndex !== null) setLightboxIndex(null);
                else if (selectedProject) selectProject(null);
                else closeModal();
                return;
            }

            if (lightboxIndex === null || images.length < 2) return;

            // Functional updates so held or fast key presses never act on a stale index.
            if (event.key === "ArrowRight") setLightboxIndex((current) => (current === null ? null : (current + 1) % images.length));
            if (event.key === "ArrowLeft") setLightboxIndex((current) => (current === null ? null : (current - 1 + images.length) % images.length));
        };

        window.addEventListener("keydown", onKeyDown);
        return () => window.removeEventListener("keydown", onKeyDown);
    });

    if (!open || !serviceId) return null

    // A project with one piece of media gets a full-width, uncropped viewer.
    const single = selectedProject?.media.length === 1
    const allPhone = Boolean(selectedProject?.media.every((item) => item.type === "image" && item.layout === "phone"))
    const totalProjectMedia = selectedProject?.media.length ?? 0;
    // Only the first items gate the loader: the rest are lazy and may sit far below the fold.
    const projectMediaLoaded = selectedProject
        ? loadedProjectMedia >= Math.min(totalProjectMedia, REQUIRED_MEDIA_LOADS)
        : true

    const projectIndex = selectedProject ? works.findIndex((work) => work.id === selectedProject.id) : -1
    const previousProject = projectIndex > 0 ? works[projectIndex - 1] : null
    const nextProject = projectIndex >= 0 && projectIndex < works.length - 1 ? works[projectIndex + 1] : null

    // Breadcrumb: the last item is the current page, the others take you back.
    const crumbs: { label: string; onClick?: () => void }[] = [
        {label: "Servicios", onClick: closeModal},
        ...(category ? [{label: category.title, onClick: closeModal}] : []),
        {label: service?.title ?? "Proyectos", onClick: selectedProject ? () => selectProject(null) : undefined},
        ...(selectedProject ? [{label: selectedProject.title}] : []),
    ]

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
                    className="sticky top-0 z-20 flex items-center justify-between gap-4 border-b border-fg/10 bg-surface/95 p-5 backdrop-blur-xl md:p-8">
                    <div className="flex min-w-0 items-center gap-3">
                        {selectedProject && (
                            <button
                                type="button"
                                className="modal-icon-button shrink-0 cursor-pointer"
                                aria-label="Volver a los proyectos"
                                onClick={() => selectProject(null)}
                            >
                                <ArrowLeft className="h-4 w-4"/>
                                <span className="max-sm:hidden">Volver</span>
                            </button>
                        )}

                        <nav aria-label="Migas de pan" className="min-w-0">
                            <ol className="breadcrumbs">
                                {crumbs.map((crumb, index) => {
                                    const isLast = index === crumbs.length - 1

                                    return (
                                        <Fragment key={`${crumb.label}-${index}`}>
                                            <li className={`breadcrumb${isLast ? " is-current" : ""}`}>
                                                {crumb.onClick && !isLast ? (
                                                    <button type="button" onClick={crumb.onClick}>{crumb.label}</button>
                                                ) : (
                                                    <span aria-current={isLast ? "page" : undefined}>{crumb.label}</span>
                                                )}
                                            </li>
                                            {!isLast && (
                                                <li className="breadcrumb-separator" aria-hidden="true">
                                                    <ChevronRight className="h-3.5 w-3.5"/>
                                                </li>
                                            )}
                                        </Fragment>
                                    )
                                })}
                            </ol>
                        </nav>
                    </div>

                    <button className="modal-close-button shrink-0 cursor-pointer" aria-label="Cerrar" onClick={closeModal}>
                        <X className="h-5 w-5"/>
                    </button>
                </div>

                <div className="modal-scroll-area flex-1 overflow-y-auto p-5 md:p-8">
                    {!selectedProject ? (
                        <>
                            <h3 className="mb-6 font-headline text-xl font-black uppercase md:mb-8 md:text-3xl">
                                {service?.title ?? "Proyectos"}
                            </h3>

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
                        </>
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
                                                onClick={() => setLightboxIndex(images.findIndex((image) => image.src === media.src))}
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

                            {(previousProject || nextProject) && (
                                <nav aria-label="Otros proyectos" className="project-pager">
                                    {previousProject ? (
                                        <button type="button" className="project-pager-button" onClick={() => selectProject(previousProject)}>
                                            <ArrowLeft className="h-4 w-4 shrink-0" aria-hidden="true"/>
                                            <span>
                                                <small>Anterior</small>
                                                {previousProject.title}
                                            </span>
                                        </button>
                                    ) : <span/>}

                                    {nextProject ? (
                                        <button type="button" className="project-pager-button is-next" onClick={() => selectProject(nextProject)}>
                                            <span>
                                                <small>Siguiente</small>
                                                {nextProject.title}
                                            </span>
                                            <ArrowRight className="h-4 w-4 shrink-0" aria-hidden="true"/>
                                        </button>
                                    ) : <span/>}
                                </nav>
                            )}
                        </div>
                    )}

                    {lightboxIndex !== null && (
                        <ImageLightbox
                            images={images}
                            index={lightboxIndex}
                            onIndexChange={setLightboxIndex}
                            onClose={() => setLightboxIndex(null)}
                        />
                    )}
                </div>
            </div>
        </div>
    );
};
export default ServiceModal
