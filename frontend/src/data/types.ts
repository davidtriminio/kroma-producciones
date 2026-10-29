export type CategoryId = "marketing" | "audiovisual" | "diseno" | "empresarial"

export type ServiceId =
    | "redes-sociales"
    | "asesoria-marketing"
    | "fotografia"
    | "video-comercial"
    | "produccion-audiovisual"
    | "dron"
    | "branding"
    | "diseno-grafico"
    | "rotulacion"
    | "paginas-web"
    | "catalogos-digitales"
    | "capacitaciones"

export type ServiceIconKey =
    | "share"
    | "target"
    | "camera"
    | "video"
    | "clapperboard"
    | "drone"
    | "pen-tool"
    | "palette"
    | "signpost"
    | "globe"
    | "book-open"
    | "graduation-cap"

export type ServiceCategory = {
    id: CategoryId
    title: string
    description: string
}

export type PackageId = "base" | "general" | "completo"

export type ServicePackage = {
    id: PackageId
    title: string
    posts: string
    features: string[]
    note?: string
    highlighted?: boolean
}

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

export type Service = {
    id: ServiceId
    category: CategoryId
    title: string
    description: string
    icon: ServiceIconKey
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
