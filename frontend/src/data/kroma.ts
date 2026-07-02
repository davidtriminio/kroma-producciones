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
        accentClass: "text-kp-cyan",
        images: [
            "/services/audiovisual.webp",
            "https://images.unsplash.com/photo-1526498460520-4c246339dccb",
            "https://images.unsplash.com/photo-1492724441997-5dc865305da7",
        ]
    },
    {
        id: "social",
        title: "Redes Sociales",
        description: "Estrategia y contenido para crecimiento orgánico.",
        icon: "share",
        accentClass: "text-kp-red",
        images: [
            "https://images.unsplash.com/photo-1557804506-669a67965ba0",
            "https://images.unsplash.com/photo-1611162617213-6d7f2e8c0b7b",
            "https://images.unsplash.com/photo-1556761175-4b46a572b786",
        ]
    },
    // {
    //     id: "web",
    //     title: "Páginas Web",
    //     description: "Sitios modernos, rápidos y convertidores.",
    //     icon: "language",
    //     accentClass: "text-kp-yellow",
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
        accentClass: "text-white",
        images: [
            "https://images.unsplash.com/photo-1522202176988-66273c2fd55f",
            "https://images.unsplash.com/photo-1529336953121-a0ce7f1a59d1",
        ]
    }
]

export const worksData: Record<ServiceId, WorkItem[]> = {
    audiovisual: [
        {
            id: "dia-padre-pebbles",
            title: "Día del padre",
            desc: "Producción en 4K para celebrar día del padre en escuela Pebbles and Stones.",
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
            ]
        }
    ],
    social: [
        {
            id: "campanias",
            title: "Campañas para Distintas empresas",
            desc: "Artes gráficos para campañas publicitarias de distintos colaboradores.",
            thumbnail: "https://images.unsplash.com/photo-1557804506-669a67965ba0",
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
            id: "rebranding",
            title: "Rebranding Tech",
            desc: "Identidad moderna para empresa global.",
            thumbnail: "https://images.unsplash.com/photo-1529336953121-a0ce7f1a59d1",
            media: [
                {
                    type: "image",
                    src: "https://images.unsplash.com/photo-1529336953121-a0ce7f1a59d1",
                    alt: "Día del padre Pebbles imagen 1",
                },
                {
                    type: "image",
                    src: "https://images.unsplash.com/photo-1542744094-3a31f272c490",
                    alt: "Día del padre Pebbles imagen 1",
                }
            ]
        }
    ]
}