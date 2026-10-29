import type {ServiceId, WorkItem} from "./types.ts"

// Only services that already have portfolio work appear here.
export const worksData: Partial<Record<ServiceId, WorkItem[]>> = {
    "redes-sociales": [
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
    "cobertura-eventos": [
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
            id: "cobertura-eventos-general",
            title: "Cobertura de eventos",
            desc: "Registro fotográfico profesional de eventos y actividades.",
            thumbnail: "/services/cobertura-eventos/evento-1-thumb.webp",
            media: [
                {
                    type: "image",
                    src: "/services/cobertura-eventos/evento-1.webp",
                    alt: "Cobertura de evento",
                }
            ]
        },
        {
            id: "eventos-deportivos",
            title: "Eventos deportivos",
            desc: "Cobertura fotográfica de eventos deportivos.",
            thumbnail: "/services/cobertura-eventos/evento-deportivo-1-thumb.webp",
            media: [
                {
                    type: "image",
                    src: "/services/cobertura-eventos/evento-deportivo-1.webp",
                    alt: "Cobertura de evento deportivo",
                }
            ]
        }
    ],
    "fotos-producto": [
        {
            id: "fotografias-productos",
            title: "Fotografías de Productos",
            desc: "Producción en alta calidad para distintas empresas y productos.",
            thumbnail: "/services/audiovisual/fotos-productos/img1.webp",
            media: [
                {
                    type: "image",
                    src: "/services/fotos-producto/producto-1.webp",
                    alt: "Fotografía de producto",
                },
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
    "dron": [
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
        }
    ],
    "branding": [
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
    ],
    "diseno-grafico": [
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
        }
    ],
    "sesiones-personales": [
        {
            id: "sesiones-personales-1",
            title: "Sesiones personales",
            desc: "Retratos y sesiones personales para emprendedores y marcas personales.",
            thumbnail: "/services/sesiones-personales/sesion-1-thumb.webp",
            media: [
                {
                    type: "image",
                    src: "/services/sesiones-personales/sesion-1.webp",
                    alt: "Sesión personal",
                }
            ]
        }
    ],
    "video-organico": [
        {
            id: "reel-yoyitas-reloj",
            title: "Reel Yoyita's",
            desc: "Reel vertical para redes sociales de Yoyita's Joyería.",
            thumbnail: "/services/video-organico/reel-yoyitas-reloj-poster.webp",
            media: [
                {
                    type: "video",
                    src: "/services/video-organico/reel-yoyitas-reloj.mp4",
                    poster: "/services/video-organico/reel-yoyitas-reloj-poster.webp",
                    title: "Reel Yoyita's - Reloj"
                }
            ]
        }
    ],
    "video-profesional": [
        {
            id: "video-campanas-tv",
            title: "Video para campañas y TV",
            desc: "Producción horizontal para campañas publicitarias, televisión, presentaciones corporativas y eventos especiales.",
            thumbnail: "/services/video-profesional/campanas-tv-poster.webp",
            media: [
                {
                    type: "video",
                    src: "/services/video-profesional/campanas-tv.mp4",
                    poster: "/services/video-profesional/campanas-tv-poster.webp",
                    title: "Video para campañas publicitarias y TV"
                }
            ]
        }
    ]
}
