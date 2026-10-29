// export type ServiceId = "audiovisual" | "social" | "web" | "branding"
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

export const worksData: Record<ServiceId, WorkItem[]> = {
    audiovisual: [
        {
            id: "foto-video",
            title: "Fotografía y video",
            desc: "Producción en 4K y foto de alta calidad, para nuestros clientes.",
            thumbnail: "/services/audiovisual.webp",
            media: [
                {
                    type: "image",
                    src: "/services/dia-padre-pebbles/img1.webp",
                    alt: "Día del padre Pebbles imagen 1",
                },
                {
                    type: "image",
                    src: "/services/dia-padre-pebbles/img2.webp",
                    alt: "Día del padre Pebbles imagen 2",
                },
                {
                    type: "image",
                    src: "/services/dia-padre-pebbles/img3.webp",
                    alt: "Día del padre Pebbles imagen 3",
                },
                {
                    type: "image",
                    src: "/services/dia-padre-pebbles/img4.webp",
                    alt: "Día del padre Pebbles imagen 4",
                },
                {
                    type: "image",
                    src: "/services/dia-padre-pebbles/img5.webp",
                    alt: "Día del padre Pebbles imagen 5",
                },
            ]
        },
        {
            id: "tomas-drones",
            title: "Tomas de Drones",
            desc: "Producción en 4K con tomas de drones.",
            thumbnail: "/services/tomas-drones/poster-drones.webp",
            media: [
                {
                    type: "video",
                    src: "/services/tomas-drones/Come.mp4",
                    poster: "/services/tomas-drones/poster-drones.webp",
                    title: "Tomas Drones Para Pebbles and Stones"
                },
                {
                    type: "video",
                    src: "/services/tomas-drones/Galeria-Miraflor.mp4",
                    poster: "/services/tomas-drones/poster-drones.webp",
                    title: "Tomas Drones para Galeria Miraflor"
                },
                {
                    type: "image",
                    src: "/services/tomas-drones/img1.webp",
                    alt: "Toma de Dron - 1",
                },
                {
                    type: "image",
                    src: "/services/tomas-drones/img2.webp",
                    alt: "Toma de Dron - 2",
                },
                {
                    type: "image",
                    src: "/services/tomas-drones/img3.webp",
                    alt: "Toma de Dron - 3",
                }
            ]
        },
        {
            id: "fotografias-productos",
            title: "Fotografías de Productos",
            desc: "Producción en alta calidad para distintas empresas y productos.",
            thumbnail: "/services/audiovisual/fotos-productos/img1.webp",
            media: [
                {
                    type: "image",
                    src: "/services/audiovisual/fotos-productos/img1.webp",
                    alt: "Fotografía de producto 1",
                },
                {
                    type: "image",
                    src: "/services/audiovisual/fotos-productos/img2.webp",
                    alt: "Fotografía de producto 2",
                },
                {
                    type: "image",
                    src: "/services/audiovisual/fotos-productos/img3.webp",
                    alt: "Fotografía de producto 3",
                },
                {
                    type: "image",
                    src: "/services/audiovisual/fotos-productos/img4.webp",
                    alt: "Fotografía de producto 4",
                },
                {
                    type: "image",
                    src: "/services/audiovisual/fotos-productos/img5.webp",
                    alt: "Fotografía de producto 5",
                },
            ]
        }
    ],
    social: [
        {
            id: "campanias",
            title: "Artes Gráficos",
            desc: "Artes gráficos para campañas publicitarias de distintos colaboradores.",
            thumbnail: "/services/artes/img1.webp",
            media: [
                {
                    type: "image",
                    src: "/services/artes/img1.webp",
                    alt: "Arte Programa Juniors Pebbles and Stones",
                }, {
                    type: "image",
                    src: "/services/artes/img2.webp",
                    alt: "Arte Campaña Publicitaria Mirador Bella Vista",
                },
                {
                    type: "image",
                    src: "/services/artes/img3.webp",
                    alt: "Arte Campaña Día de la madre Smartec",
                }
            ]
        },
        {
            id: "dia-madres",
            title: "Campaña Día de la madre",
            desc: "Campaña en redes sociales para Día de la madre.",
            thumbnail: "/services/social-media/dia-madres/img1.webp",
            media: [
                {
                    type: "image",
                    src: "/services/social-media/dia-madres/img1.webp",
                    alt: "Foto para Día de la madre",
                }, {
                    type: "image",
                    src: "/services/social-media/dia-madres/img2.webp",
                    alt: "Arte cajas para Día de la madre",
                },
                {
                    type: "video",
                    src: "/services/tomas-drones/Come.mp4",
                    poster: "https://res.cloudinary.com/kzo9w9gr/video/upload/Box_Madres_1_qryfm4.mp4",
                    title: "Video promocional Box Día de las madres Smartec"
                },
            ]
        }
    ],
    // web: [
    //     {
    //         id: "ecommerce-premium",
    //         title: "E-commerce Premium",
    //         desc: "UI/UX optimizada para conversión.",
    //         thumbnail: "https://images.unsplash.com/photo-1460925895917-afdab827c52f",
    //         media: [
    //             {
    //                 type: "image",
    //                 src: "https://images.unsplash.com/photo-1460925895917-afdab827c52f",
    //                 alt: "Día del padre Pebbles imagen 1",
    //             }, {
    //                 type: "image",
    //                 src: "https://images.unsplash.com/photo-1551288049-bebda4e38f71",
    //                 alt: "Día del padre Pebbles imagen 1",
    //             },
    //         ]
    //     }
    // ],
    branding: [
        {
            id: "rebranding-mama-linda",
            title: "Branding Mama Linda",
            desc: "Identidad moderna para restaurante local.",
            thumbnail: "/services/branding/mama-linda/img1.webp",
            media: [
                {
                    type: "image",
                    src: "/services/branding/mama-linda/img1.webp",
                    alt: "Branding para restaurante Mama Linda",
                },
            ]
        }
    ]
}
export const WHATSAPP_NUMBER = "50488434254"
export const WHATSAPP_DISPLAY = "+504 8843 4254"
