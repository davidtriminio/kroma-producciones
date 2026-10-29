import {useCallback, useEffect, useRef, useState} from "react";
import type {ProjectMedia} from "../../data/types.ts";
import KromaImage from "./KromaImage.tsx";
import Logo from "./Logo.tsx";

type Props = {
    media: ProjectMedia;
    className?: string;
    onLoad?: () => void;
};

type VideoMedia = Extract<ProjectMedia, { type: "video" }>;

const VIDEO_TIMEOUT_MS = 9000;

function KromaVideo({media, className = "", onLoad}: Props & { media: VideoMedia }) {
    const [status, setStatus] = useState<"loading" | "ready" | "failed">("loading");
    const settledRef = useRef(false);
    const onLoadRef = useRef(onLoad);

    useEffect(() => {
        onLoadRef.current = onLoad;
    });

    const settle = useCallback((next: "ready" | "failed") => {
        if (settledRef.current) return;

        settledRef.current = true;
        setStatus(next);
        onLoadRef.current?.();
    }, []);

    useEffect(() => {
        const timer = window.setTimeout(() => settle("failed"), VIDEO_TIMEOUT_MS);
        return () => window.clearTimeout(timer);
    }, [settle]);

    return (
        <div className="kroma-video-wrap">
            {status === "loading" && (
                <div className="kroma-image-loader">
                    <Logo size="sm" alt=""/>
                </div>
            )}

            {status === "failed" ? (
                <div className="media-fallback">
                    <span>{media.title}</span>
                </div>
            ) : (
                <video
                    className={`${className} transition-opacity duration-500 ${status === "ready" ? "opacity-100" : "opacity-0"}`}
                    src={media.src}
                    poster={media.poster}
                    controls
                    preload="metadata"
                    playsInline
                    onLoadedMetadata={() => settle("ready")}
                    onCanPlay={() => settle("ready")}
                    onError={() => settle("failed")}
                />
            )}
        </div>
    );
}

export default function KromaMedia({media, className = "", onLoad}: Props) {
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

    // Keyed by src so a new video starts from a clean loading state.
    return <KromaVideo key={media.src} media={media} className={className} onLoad={onLoad}/>;
}
