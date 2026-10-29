export type CategoryId = "marketing" | "fotografia" | "video" | "diseno" | "empresarial"

export type ServiceId =
    | "redes-sociales"
    | "asesoria-marketing"
    | "sesiones-fotograficas"
    | "cobertura-eventos"
    | "fotos-producto"
    | "sesiones-personales"
    | "video-organico"
    | "video-profesional"
    | "dron"
    | "branding"
    | "diseno-grafico"
    | "paginas-web"
    | "catalogos-digitales"
    | "capacitaciones"

export type ServiceIconKey =
    | "share"
    | "target"
    | "camera"
    | "calendar"
    | "package"
    | "user"
    | "smartphone"
    | "clapperboard"
    | "drone"
    | "pen-tool"
    | "palette"
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
    // Short list of what the service covers, shown on the card to make it easier to scan.
    includes?: string[]
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

export type ClientLogo = {
    id: string
    name: string
    logo: string
    // false hides the brand from the website without losing its data (seasonal clients).
    active: boolean
    // How the logo is drawn, so the monochrome filter can keep it visible in both themes:
    // "white" is drawn in white, "dark-ink" is mostly black or very dark.
    tone?: "white" | "dark-ink"
}
