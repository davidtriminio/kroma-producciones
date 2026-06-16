import React from "react";

type Props = {
    children: React.ReactNode
    center?: boolean
    className?: string
}

const SectionTitle = ({children, center = false, className = ""} : Props) => {
    return (
        <h2
            className={[
                "section-title text-4xl md:text-6xl mb-12",
                center ? "section-title-center text-center block" : "",
                className,
            ].join(" ")}
        >
            {children}
        </h2>
    )
}
export default SectionTitle
