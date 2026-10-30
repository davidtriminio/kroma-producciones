import {type MouseEvent, type TouchEvent, useRef, useState} from "react";
import {ChevronLeft, ChevronRight, X, ZoomIn, ZoomOut} from "lucide-react";
import type {ProjectMedia} from "../../data/types.ts";

type ImageMedia = Extract<ProjectMedia, { type: "image" }>;

type Props = {
    images: ImageMedia[]
    index: number
    onIndexChange: (index: number) => void
    onClose: () => void
}

const SWIPE_DISTANCE = 50;
const ZOOM_SCALE = 1.8;

// Click or tap toggles a small zoom; while zoomed the pointer pans the photo.
// Keyed by src from the parent, so every photo starts unzoomed.
function ZoomableImage({image}: { image: ImageMedia }) {
    const [zoomed, setZoomed] = useState(false);
    const [origin, setOrigin] = useState({x: 50, y: 50});

    const updateOrigin = (event: MouseEvent<HTMLElement>) => {
        const box = event.currentTarget.getBoundingClientRect();
        setOrigin({
            x: Math.min(100, Math.max(0, ((event.clientX - box.left) / box.width) * 100)),
            y: Math.min(100, Math.max(0, ((event.clientY - box.top) / box.height) * 100)),
        });
    };

    return (
        <div
            className={`lightbox-zoom ${zoomed ? "is-zoomed" : ""}`}
            onMouseMove={zoomed ? updateOrigin : undefined}
            onClick={(event) => {
                if (!zoomed) updateOrigin(event);
                setZoomed((current) => !current);
            }}
        >
            <img
                src={image.src}
                alt={image.alt}
                className="fullscreen-image"
                draggable={false}
                style={{transformOrigin: `${origin.x}% ${origin.y}%`, transform: zoomed ? `scale(${ZOOM_SCALE})` : "scale(1)"}}
            />
            <span className="lightbox-zoom-hint" aria-hidden="true">
                {zoomed ? <ZoomOut className="h-4 w-4"/> : <ZoomIn className="h-4 w-4"/>}
            </span>
        </div>
    );
}

// Fullscreen photo viewer with previous/next buttons, a counter, zoom and swipe support.
// Keyboard handling (arrows and Escape) lives in ServiceModal so there is a single listener.
export default function ImageLightbox({images, index, onIndexChange, onClose}: Props) {
    const touchStartX = useRef<number | null>(null);
    const image = images[index];
    const total = images.length;

    if (!image) return null;

    const go = (step: number) => onIndexChange((index + step + total) % total);

    const onTouchStart = (event: TouchEvent) => {
        touchStartX.current = event.touches[0].clientX;
    };

    const onTouchEnd = (event: TouchEvent) => {
        if (touchStartX.current === null) return;

        const distance = event.changedTouches[0].clientX - touchStartX.current;
        touchStartX.current = null;

        if (Math.abs(distance) < SWIPE_DISTANCE) return;
        go(distance > 0 ? -1 : 1);
    };

    return (
        <div
            className="fullscreen-media-viewer"
            role="dialog"
            aria-modal="true"
            aria-label={image.alt}
            onClick={onClose}
        >
            <button type="button" className="fullscreen-close-button" aria-label="Cerrar visor" onClick={onClose}>
                <X className="h-5 w-5"/>
            </button>

            {total > 1 && (
                <button
                    type="button"
                    className="lightbox-nav is-prev"
                    aria-label="Foto anterior"
                    onClick={(event) => {
                        event.stopPropagation();
                        go(-1);
                    }}
                >
                    <ChevronLeft className="h-6 w-6"/>
                </button>
            )}

            <div
                className="fullscreen-image-stage"
                onClick={(event) => event.stopPropagation()}
                onTouchStart={onTouchStart}
                onTouchEnd={onTouchEnd}
            >
                <ZoomableImage key={image.src} image={image}/>
                <p>
                    {image.alt}
                    {total > 1 && <span className="lightbox-counter">{index + 1} / {total}</span>}
                </p>
            </div>

            {total > 1 && (
                <button
                    type="button"
                    className="lightbox-nav is-next"
                    aria-label="Foto siguiente"
                    onClick={(event) => {
                        event.stopPropagation();
                        go(1);
                    }}
                >
                    <ChevronRight className="h-6 w-6"/>
                </button>
            )}
        </div>
    );
}
