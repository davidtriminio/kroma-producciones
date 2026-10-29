import Logo from "./Logo";
import { useEffect, useRef, useState } from "react";

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
    const settledRef = useRef(false);
    const timeoutRef = useRef<number | null>(null);
    const wrapRef = useRef<HTMLDivElement | null>(null);

    const clearMediaTimeout = () => {
        if (timeoutRef.current) {
            window.clearTimeout(timeoutRef.current);
            timeoutRef.current = null;
        }
    };

    const finishLoad = () => {
        if (settledRef.current) return;

        settledRef.current = true;
        clearMediaTimeout();
        setLoaded(true);
        setFailed(false);
        onLoad?.();
    };

    const failLoad = () => {
        if (settledRef.current) return;

        settledRef.current = true;
        clearMediaTimeout();
        setLoaded(false);
        setFailed(true);
        onLoad?.();
    };

    useEffect(() => {
        settledRef.current = false;
        setLoaded(false);
        setFailed(false);
        clearMediaTimeout();

        const startTimeout = () => {
            timeoutRef.current = window.setTimeout(() => {
                failLoad();
            }, 12000);
        };

        const wrap = wrapRef.current;

        // A lazy image below the fold never starts loading, so only start the
        // fallback timer once it is close to the viewport.
        if (loading === "eager" || !wrap || !("IntersectionObserver" in window)) {
            startTimeout();
            return clearMediaTimeout;
        }

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (!entry.isIntersecting) return;

                observer.disconnect();
                startTimeout();
            },
            {rootMargin: "300px"}
        );

        observer.observe(wrap);

        return () => {
            observer.disconnect();
            clearMediaTimeout();
        };
    }, [src]);

    return (
        <div className="kroma-image-wrap" ref={wrapRef}>
            {!loaded && !failed && (
                <div className="kroma-image-loader">
                    <Logo size="sm" alt="" />
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