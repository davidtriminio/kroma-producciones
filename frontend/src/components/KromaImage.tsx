import { useEffect, useState } from "react";

type Props = {
    src: string;
    alt: string;
    className?: string;
    loading?: "lazy" | "eager";
    fetchPriority?: "high" | "low" | "auto";
    onLoad?: () => void;
};

export default function KromaImage({
                                       src,
                                       alt,
                                       className = "",
                                       loading = "lazy",
                                       fetchPriority = "auto",
                                       onLoad,
                                   }: Props) {
    const [loaded, setLoaded] = useState(false);
    const [failed, setFailed] = useState(false);

    const finishLoad = () => {
        if (loaded || failed) return;
        setLoaded(true);
        onLoad?.();
    };

    const failLoad = () => {
        if (loaded || failed) return;
        setFailed(true);
        onLoad?.();
    };

    useEffect(() => {
        setLoaded(false);
        setFailed(false);

        const timeout = window.setTimeout(() => {
            failLoad();
        }, 7000);

        return () => window.clearTimeout(timeout);
    }, [src]);

    return (
        <div className="kroma-image-wrap">
            {!loaded && !failed && (
                <div className="kroma-image-loader">
                    <img src="/chroma.svg" alt="" aria-hidden="true" />
                </div>
            )}

            {failed ? (
                <div className="media-fallback">
                    <span>{alt}</span>
                </div>
            ) : (
                <img
                    src={src}
                    alt={alt}
                    loading={loading}
                    decoding="async"
                    fetchPriority={fetchPriority}
                    onLoad={finishLoad}
                    onError={failLoad}
                    className={`${className} transition-opacity duration-500 ${loaded ? "opacity-100" : "opacity-0"}`}
                />
            )}
        </div>
    );
}