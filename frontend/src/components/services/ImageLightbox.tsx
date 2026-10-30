import {type TouchEvent, useRef} from "react";
import {ChevronLeft, ChevronRight, X} from "lucide-react";
import type {ProjectMedia} from "../../data/types.ts";

type ImageMedia = Extract<ProjectMedia, { type: "image" }>;

type Props = {
    images: ImageMedia[]
    index: number
    onIndexChange: (index: number) => void
    onClose: () => void
}

const SWIPE_DISTANCE = 50;

// Fullscreen photo viewer with previous/next buttons, a counter and swipe support.
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
                <img key={image.src} src={image.src} alt={image.alt} className="fullscreen-image"/>
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
