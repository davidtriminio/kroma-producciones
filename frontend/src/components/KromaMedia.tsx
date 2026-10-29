import Logo from "./Logo";
import type { ProjectMedia } from "../data/kroma.ts";
import { useEffect, useRef, useState } from "react";
import KromaImage from "./KromaImage.tsx";

type Props = {
    media: ProjectMedia;
    className?: string;
    onLoad?: () => void;
};

export default function KromaMedia({ media, className = "", onLoad }: Props) {
    const [videoReady, setVideoReady] = useState(false);
    const [videoFailed, setVideoFailed] = useState(false);
    const settledRef = useRef(false);
    const timeoutRef = useRef<number | null>(null);

    const clearMediaTimeout = () => {
        if (timeoutRef.current) {
            window.clearTimeout(timeoutRef.current);
            timeoutRef.current = null;
        }
    };

    const finishVideo = () => {
        if (settledRef.current) return;

        settledRef.current = true;
        clearMediaTimeout();
        setVideoReady(true);
        setVideoFailed(false);
        onLoad?.();
    };

    const failVideo = () => {
        if (settledRef.current) return;

        settledRef.current = true;
        clearMediaTimeout();
        setVideoReady(false);
        setVideoFailed(true);
        onLoad?.();
    };

    useEffect(() => {
        settledRef.current = false;
        setVideoReady(false);
        setVideoFailed(false);
        clearMediaTimeout();

        if (media.type !== "video") return;

        timeoutRef.current = window.setTimeout(() => {
            failVideo();
        }, 9000);

        return clearMediaTimeout;
    }, [media.type, media.type === "video" ? media.src : ""]);

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
                    <Logo size="sm" alt="" />
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