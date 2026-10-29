import type {ServiceCard} from "./types.ts"

export const serviceCards: ServiceCard[] = [
    {
        id: "audiovisual",
        title: "Audiovisual",
        description: "Producción visual cinematográfica para marcas.",
        icon: "movie",
        accentClass: "text-brand",
        images: [
            "/services/audiovisual.webp",
        ]
    },
    {
        id: "social",
        title: "Redes Sociales",
        description: "Estrategia y contenido para crecimiento orgánico.",
        icon: "share",
        accentClass: "text-highlight-text",
        images: [
            "/services/social-media.webp"
        ]
    },
    // {
    //     id: "web",
    //     title: "Páginas Web",
    //     description: "Sitios modernos, rápidos y convertidores.",
    //     icon: "language",
    //     accentClass: "text-highlight-text",
    //     images: [
    //         "https://images.unsplash.com/photo-1498050108023-c5249f4df085",
    //         "https://images.unsplash.com/photo-1551288049-bebda4e38f71",
    //     ]
    // },
    {
        id: "branding",
        title: "Branding",
        description: "Identidad visual completa para marcas.",
        icon: "architecture",
        accentClass: "text-fg",
        images: [
            "/services/branding.webp",
        ]
    }
]
