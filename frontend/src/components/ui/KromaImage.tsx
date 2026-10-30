import {useCallback, useEffect, useRef, useState} from "react";
import Logo from "./Logo.tsx";

type Props = {
    src: string;
    alt: string;
    className?: string;
    loading?: "lazy" | "eager";
    fetchPriority?: "high" | "low" | "auto";
    onLoad?: () => void;
};

const LOAD_TIMEOUT_MS = 12000;

function KromaImageContent({
                               src,
                               alt,
                               className = "",
                               loading = "lazy",
                               fetchPriority = "auto",
                               onLoad,
                           }: Props) {
    const [status, setStatus] = useState<"loading" | "loaded" | "failed">("loading");
    const wrapRef = useRef<HTMLDivElement | null>(null);
    const settledRef = useRef(false);
    const onLoadRef = useRef(onLoad);

    useEffect(() => {
        onLoadRef.current = onLoad;
    });

    const settle = useCallback((next: "loaded" | "failed") => {
        if (settledRef.current) return;

        settledRef.current = true;
        setStatus(next);
        onLoadRef.current?.();
    }, []);

    useEffect(() => {
        let timer: number | undefined;

        const startTimeout = () => {
            timer = window.setTimeout(() => settle("failed"), LOAD_TIMEOUT_MS);
        };

        const wrap = wrapRef.current;

        // A lazy image below the fold never starts loading, so only start the
        // fallback timer once it is close to the viewport.
        if (loading === "eager" || !wrap || !("IntersectionObserver" in window)) {
            startTimeout();
            return () => window.clearTimeout(timer);
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
            window.clearTimeout(timer);
        };
    }, [loading, settle]);

    return (
        <div className="kroma-image-wrap" ref={wrapRef}>
            {status === "loading" && (
                <div className="kroma-image-loader">
                    <Logo size="sm" alt=""/>
                </div>
            )}

            {status === "failed" ? (
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
                    onLoad={() => settle("loaded")}
                    onError={() => settle("failed")}
                    className={`${className} transition-opacity duration-500 ${status === "loaded" ? "opacity-100" : "opacity-0"}`}
                />
            )}
        </div>
    );
}

// Keyed by src so a new image starts from a clean loading state.
export default function KromaImage(props: Props) {
    return <KromaImageContent key={props.src} {...props}/>;
}
