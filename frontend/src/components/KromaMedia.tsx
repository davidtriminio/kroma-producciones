import type { ProjectMedia } from "../data/kroma.ts";
import { useEffect, useState } from "react";
import KromaImage from "./KromaImage.tsx";

type Props = {
    media: ProjectMedia;
    className?: string;
    onLoad?: () => void;
};

export default function KromaMedia({ media, className = "", onLoad }: Props) {
    const [videoReady, setVideoReady] = useState(false);
    const [videoFailed, setVideoFailed] = useState(false);

    const finishVideo = () => {
        if (videoReady || videoFailed) return;
        setVideoReady(true);
        onLoad?.();
    };

    const failVideo = () => {
        if (videoReady || videoFailed) return;
        setVideoFailed(true);
        onLoad?.();
    };

    useEffect(() => {
        setVideoReady(false);
        setVideoFailed(false);

        if (media.type !== "video") return;

        const timeout = window.setTimeout(() => {
            failVideo();
        }, 9000);

        return () => window.clearTimeout(timeout);
    }, [media]);

    if (media.type === "image") {
        return (
            <KromaImage
                src={media.src}
                alt={media.alt}
                className={className}
                onLoad={onLoad}
            />
        );
    }

    return (
        <div className="kroma-video-wrap">
            {!videoReady && !videoFailed && (
                <div className="kroma-image-loader">
                    <img src="/chroma.svg" alt="" aria-hidden="true" />
                </div>
            )}

            {videoFailed ? (
                <div className="media-fallback">
                    <span>{media.title}</span>
                </div>
            ) : (
                <video
                    className={`${className} transition-opacity duration-500 ${videoReady ? "opacity-100" : "opacity-0"}`}
                    src={media.src}
                    poster={media.poster}
                    controls
                    preload="metadata"
                    playsInline
                    onLoadedMetadata={finishVideo}
                    onCanPlay={finishVideo}
                    onError={failVideo}
                />
            )}
        </div>
    );
}