type Props = {
    variant?: "white" | "black";
    size?: "sm" | "md";
    className?: string;
    alt?: string;
};

export default function Logo({variant = "white", size = "md", className = "", alt = "Kroma"}: Props) {
    const src = size === "sm" ? `/brand/kroma-${variant}-512.webp` : `/brand/kroma-${variant}.webp`;

    return (
        <img
            src={src}
            alt={alt}
            decoding="async"
            className={className}
        />
    );
}
