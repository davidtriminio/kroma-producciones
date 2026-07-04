import type {ProjectMedia} from "../data/kroma.ts";
import {useState} from "react";
import KromaImage from "./KromaImage.tsx";

type Props = {
    media: ProjectMedia
    className?: string
    onLoad?: () => void
}

export default function KromaMedia({media, className = "", onLoad} : Props) {
    const [videoReady, setVideoReady] = useState(false)

    if (media.type === "image"){
        return <KromaImage src={media.src} alt={media.alt} className={className} onLoad={onLoad}/>
    }

    return (
        <div className="kroma-video-wrap">
            {!videoReady && (
                <div className="kroma-image-loader">
                    <img src="/chroma.svg" alt="" aria-hidden="true" />
                </div>
            )}

            <video
                className={`${className} transition-opacity duration-500 ${videoReady ? "opacity-100" : "opacity-0"}`}
                src={media.src}
                poster={media.poster}
                controls
                preload="metadata"
                playsInline
                onLoadedMetadata={() => {
                    setVideoReady(true);
                    onLoad?.();
                }}
            />
        </div>
    )
}
