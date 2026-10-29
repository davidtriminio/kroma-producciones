export type ServiceId = "audiovisual" | "social" | "branding"

export type ProjectMedia =
    | {
    type: "image"
    src: string
    alt: string
}
    | {
    type: "video"
    src: string
    poster: string
    title: string
}

export type WorkItem = {
    id: string;
    title: string;
    desc: string;
    thumbnail: string;
    media: ProjectMedia[]
}

export type ServiceCard = {
    id: ServiceId
    title: string
    description: string
    icon: string
    accentClass: string
    images: string[]
}

export type PortfolioItem = {
    span: string
    image: string
    tag: string
    title: string
}

export type ProcessStep = {
    n: string
    title: string
    text: string
    color: string
}

export type AboutFeature = {
    icon: "badge-check" | "lightbulb" | "clapperboard"
    iconClass: string
    title: string
    text: string
}
