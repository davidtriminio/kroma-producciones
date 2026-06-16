export type ServiceId = "audiovisual" | "social" | "web" | "branding"

export type WorkItem = {
    title: string
    desc: string
    images: string[]
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
        title: "Audovisual",
        description: "Producción visual cinematográfica para marcas.",
        icon: "movie",
        accentClass: "text-cyan-400",
        images: [
            "https://images.unsplash.com/photo-1504384308090-c894fdcc538d",
            "https://images.unsplash.com/photo-1526498460520-4c246339dccb",
            "https://images.unsplash.com/photo-1492724441997-5dc865305da7",
        ]
    },
    {
        id: "social",
        title: "Redes Sociales",
        description: "Estrategia y contenido para crecimiento orgánico.",
        icon: "share",
        accentClass: "text-red-400",
        images: [
            "https://images.unsplash.com/photo-1557804506-669a67965ba0",
            "https://images.unsplash.com/photo-1611162617213-6d7f2e8c0b7b",
            "https://images.unsplash.com/photo-1556761175-4b46a572b786",
        ]
    },
    {
        id: "web",
        title: "Páginas Web",
        description: "Sitios modernos, rápidos y convertidores.",
        icon: "language",
        accentClass: "text-yellow-400",
        images: [
            "https://images.unsplash.com/photo-1498050108023-c5249f4df085",
            "https://images.unsplash.com/photo-1551288049-bebda4e38f71",
        ]
    },
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
            title: "Campaña Cinemática",
            desc: "Producción en 4K para marca local.",
            images: [
                "https://images.unsplash.com/photo-1492691527719-9d1e07e534b4",
                "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee",
            ]
        }
    ],
    social: [
        {
            title: "Campaña Viral",
            desc: "Estrategia de crecimiento digital +300%.",
            images: [
                "https://images.unsplash.com/photo-1611162616305-c69b3fa7fbe0",
                "https://images.unsplash.com/photo-1557804506-669a67965ba0",
            ],
        }
    ],
    web: [
        {
            title: "E-commerce Premium",
            desc: "UI/UX optimizada para conversión.",
            images: [
                "https://images.unsplash.com/photo-1460925895917-afdab827c52f",
                "https://images.unsplash.com/photo-1551288049-bebda4e38f71",
            ]
        }
    ],
    branding: [
        {
            title: "Rebranding Tech",
            desc: "Identidad moderna para empresa global.",
            images: [
                "https://images.unsplash.com/photo-1529336953121-a0ce7f1a59d1",
                "https://images.unsplash.com/photo-1542744094-3a31f272c490",
            ],
        }
    ]
}