type Props = {
    variant?: "auto" | "white" | "black";
    size?: "sm" | "md";
    className?: string;
    alt?: string;
};

const srcFor = (variant: "white" | "black", size: "sm" | "md") =>
    size === "sm" ? `/brand/kroma-${variant}-512.webp` : `/brand/kroma-${variant}.webp`;

// "auto" renders both variants and lets the theme tokens show the one with contrast.
export default function Logo({variant = "auto", size = "md", className = "", alt = "Kroma"}: Props) {
    if (variant !== "auto") {
        return <img src={srcFor(variant, size)} alt={alt} decoding="async" className={className}/>;
    }

    return (
        <>
            <img src={srcFor("white", size)} alt={alt} decoding="async" className={`${className} logo-on-dark`}/>
            <img src={srcFor("black", size)} alt={alt} decoding="async" className={`${className} logo-on-light`}/>
        </>
    );
}
