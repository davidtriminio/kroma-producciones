import {useState} from "react";

type Props = {
    src: string,
    alt: string,
    className?: string,
    loading?: "lazy" | "eager",
    fetchPriority?: "high" | "low" | "auto"
}

export default function KromaImage({
                                       src,
                                       alt,
                                       className = "",
                                       loading = 'lazy',
                                       fetchPriority = "auto"
                                   }: Props) {
    const [loaded, setLoaded] = useState(false)
    return (
        <div className="kroma-image-wrap">
            {!loaded && (
                <div className="kroma-image-loader">
                    <img src="/chroma.svg" alt="" aria-hidden="true"/>
                </div>
            )}

            <img
                src={src}
                alt={alt}
                loading={loading}
                decoding="async"
                fetchPriority={fetchPriority}
                onLoad={() => setLoaded(true)}
                className={`${className} transition-opacity duration-500 ${loaded ? "opacity-100" : "opacity-0"}`}
            />
        </div>
    )
}