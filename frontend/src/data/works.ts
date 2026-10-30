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
            ]
        },
        {
            id: "redes-atelier",
            title: "Atelier Floral: wedding planner",
            desc: "Contenido para redes sociales de Atelier Floral.",
            thumbnail: "/services/redes-sociales/redes-atelier-01-thumb.webp",
            media: [
                {
                    type: "image",
                    src: "/services/redes-sociales/redes-atelier-01.webp",
                    alt: "Publicación de Atelier Floral 1",
                },
                {
                    type: "image",
                    src: "/services/redes-sociales/redes-atelier-02.webp",
                    alt: "Publicación de Atelier Floral 2",
                },
                {
                    type: "image",
                    src: "/services/redes-sociales/redes-atelier-03.webp",
                    alt: "Publicación de Atelier Floral 3",
                },
                {
                    type: "image",
                    src: "/services/redes-sociales/redes-atelier-04.webp",
                    alt: "Publicación de Atelier Floral 4",
                },
                {
                    type: "image",
                    src: "/services/redes-sociales/redes-atelier-05.webp",
                    alt: "Publicación de Atelier Floral 5",
                }
            ]
        },
        {
            id: "redes-pebbles-artes",
            title: "Pebbles and Stones: evento de artes",
            desc: "Contenido para el evento de artes de Pebbles and Stones.",
            thumbnail: "/services/redes-sociales/redes-pebbles-artes-01-thumb.webp",
            media: [
                {
                    type: "image",
                    src: "/services/redes-sociales/redes-pebbles-artes-01.webp",
                    alt: "Publicación de Pebbles and Stones 1",
                },
                {
                    type: "image",
                    src: "/services/redes-sociales/redes-pebbles-artes-02.webp",
                    alt: "Publicación de Pebbles and Stones 2",
                },
                {
                    type: "image",
                    src: "/services/redes-sociales/redes-pebbles-artes-03.webp",
                    alt: "Publicación de Pebbles and Stones 3",
                },
                {
                    type: "image",
                    src: "/services/redes-sociales/redes-pebbles-artes-04.webp",
                    alt: "Publicación de Pebbles and Stones 4",
                }
            ]
        },
        {
            id: "redes-academia-dia-nino",
            title: "Academia Tools for Life: Día del Niño",
            desc: "Publicación para el Día del Niño de Academia Tools for Life.",
            thumbnail: "/services/redes-sociales/redes-academia-dia-nino-01-thumb.webp",
            media: [
                {
                    type: "image",
                    src: "/services/redes-sociales/redes-academia-dia-nino-01.webp",
                    alt: "Publicación de Academia Tools for Life 1",
                }
            ]
        }
    ],
    "cobertura-eventos": [
        {
            id: "evento-corporativo",
            title: "Evento corporativo",
            desc: "Cobertura fotográfica de eventos corporativos.",
            thumbnail: "/services/cobertura-eventos/evento-1-thumb.webp",
            media: [
                {
                    type: "image",
                    src: "/services/cobertura-eventos/evento-1.webp",
                    alt: "Evento corporativo",
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
        },
        {
            id: "evento-educativo",
            title: "Evento educativo",
            desc: "Cobertura fotográfica de eventos educativos.",
            thumbnail: "/services/cobertura-eventos/evento-educativo-01-thumb.webp",
            media: [
                {
                    type: "image",
                    src: "/services/cobertura-eventos/evento-educativo-01.webp",
                    alt: "Evento educativo 1",
                },
                {
                    type: "image",
                    src: "/services/cobertura-eventos/evento-educativo-02.webp",
                    alt: "Evento educativo 2",
                },
                {
                    type: "image",
                    src: "/services/cobertura-eventos/evento-educativo-03.webp",
                    alt: "Evento educativo 3",
                },
                {
                    type: "image",
                    src: "/services/cobertura-eventos/evento-educativo-04.webp",
                    alt: "Evento educativo 4",
                },
                {
                    type: "image",
                    src: "/services/cobertura-eventos/evento-educativo-05.webp",
                    alt: "Evento educativo 5",
                }
            ]
        }
    ],
    "fotos-producto": [
        {
            id: "fotografias-productos",
            title: "Fotografías de Productos",
            desc: "Producción en alta calidad para distintas empresas y productos.",
            thumbnail: "/services/fotos-producto/destacados-01-thumb.webp",
            media: [
                {
                    type: "image",
                    src: "/services/fotos-producto/producto-1.webp",
                    alt: "Fotografía de producto",
                },
                {
                    type: "image",
                    src: "/services/fotos-producto/destacados-01.webp",
                    alt: "Fotografía de producto 1",
                },
                {
                    type: "image",
                    src: "/services/fotos-producto/destacados-02.webp",
                    alt: "Fotografía de producto 2",
                },
                {
                    type: "image",
                    src: "/services/fotos-producto/destacados-03.webp",
                    alt: "Fotografía de producto 3",
                },
                {
                    type: "image",
                    src: "/services/fotos-producto/destacados-04.webp",
                    alt: "Fotografía de producto 4",
                },
                {
                    type: "image",
                    src: "/services/fotos-producto/destacados-05.webp",
                    alt: "Fotografía de producto 5",
                },
            ]
        },
        {
            id: "productos-joyeria",
            title: "Cadenas y aritos",
            desc: "Fotografía de joyería para catálogo y redes.",
            thumbnail: "/services/fotos-producto/productos-joyeria-01-thumb.webp",
            media: [
                {
                    type: "image",
                    src: "/services/fotos-producto/productos-joyeria-01.webp",
                    alt: "Fotografía de cadenas y aritos 1",
                },
                {
                    type: "image",
                    src: "/services/fotos-producto/productos-joyeria-02.webp",
                    alt: "Fotografía de cadenas y aritos 2",
                },
                {
                    type: "image",
                    src: "/services/fotos-producto/productos-joyeria-03.webp",
                    alt: "Fotografía de cadenas y aritos 3",
                }
            ]
        },
        {
            id: "productos-variados",
            title: "Más productos",
            desc: "Fotografía de producto para vinos, lentes y stickers.",
            thumbnail: "/services/fotos-producto/productos-variados-01-thumb.webp",
            media: [
                {
                    type: "image",
                    src: "/services/fotos-producto/productos-variados-01.webp",
                    alt: "Fotografía de producto 1",
                },
                {
                    type: "image",
                    src: "/services/fotos-producto/productos-variados-02.webp",
                    alt: "Fotografía de producto 2",
                },
                {
                    type: "image",
                    src: "/services/fotos-producto/productos-variados-03.webp",
                    alt: "Fotografía de producto 3",
                }
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
        },
        {
            id: "mama-linda-branding",
            title: "Mama Linda: identidad completa",
            desc: "Aplicaciones de la identidad visual de Mama Linda.",
            thumbnail: "/services/branding/mama-linda-branding-01-thumb.webp",
            media: [
                {
                    type: "image",
                    src: "/services/branding/mama-linda-branding-01.webp",
                    alt: "Branding de Mama Linda 1",
                }
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
        },
        {
            id: "artes-clientes",
            title: "Artes para campañas de clientes",
            desc: "Piezas gráficas para redes sociales de Academia Tools for Life, Distribuidora Rocío, Yoyita's, Pebbles and Stones y Smartec.",
            thumbnail: "/services/diseno-grafico/artes-clientes-01-thumb.webp",
            media: [
                {
                    type: "image",
                    src: "/services/diseno-grafico/artes-clientes-01.webp",
                    alt: "Arte para campaña de cliente 1",
                },
                {
                    type: "image",
                    src: "/services/diseno-grafico/artes-clientes-02.webp",
                    alt: "Arte para campaña de cliente 2",
                },
                {
                    type: "image",
                    src: "/services/diseno-grafico/artes-clientes-03.webp",
                    alt: "Arte para campaña de cliente 3",
                },
                {
                    type: "image",
                    src: "/services/diseno-grafico/artes-clientes-04.webp",
                    alt: "Arte para campaña de cliente 4",
                },
                {
                    type: "image",
                    src: "/services/diseno-grafico/artes-clientes-05.webp",
                    alt: "Arte para campaña de cliente 5",
                },
                {
                    type: "image",
                    src: "/services/diseno-grafico/artes-clientes-06.webp",
                    alt: "Arte para campaña de cliente 6",
                },
                {
                    type: "image",
                    src: "/services/diseno-grafico/artes-clientes-07.webp",
                    alt: "Arte para campaña de cliente 7",
                },
                {
                    type: "image",
                    src: "/services/diseno-grafico/artes-clientes-08.webp",
                    alt: "Arte para campaña de cliente 8",
                }
            ]
        },
        {
            id: "artes-yoyitas-market",
            title: "Yoyita's Market: productos hondureños",
            desc: "Artes para la línea de productos hondureños de Yoyita's Market.",
            thumbnail: "/services/diseno-grafico/artes-yoyitas-market-01-thumb.webp",
            media: [
                {
                    type: "image",
                    src: "/services/diseno-grafico/artes-yoyitas-market-01.webp",
                    alt: "Arte de Yoyita's Market 1",
                },
                {
                    type: "image",
                    src: "/services/diseno-grafico/artes-yoyitas-market-02.webp",
                    alt: "Arte de Yoyita's Market 2",
                }
            ]
        },
        {
            id: "publicaciones-kroma",
            title: "Publicaciones Kroma",
            desc: "Publicaciones propias de Kroma para redes sociales.",
            thumbnail: "/services/diseno-grafico/publicaciones-kroma-01-thumb.webp",
            media: [
                {
                    type: "image",
                    src: "/services/diseno-grafico/publicaciones-kroma-01.webp",
                    alt: "Publicación de Kroma 1",
                },
                {
                    type: "image",
                    src: "/services/diseno-grafico/publicaciones-kroma-02.webp",
                    alt: "Publicación de Kroma 2",
                },
                {
                    type: "image",
                    src: "/services/diseno-grafico/publicaciones-kroma-03.webp",
                    alt: "Publicación de Kroma 3",
                },
                {
                    type: "image",
                    src: "/services/diseno-grafico/publicaciones-kroma-04.webp",
                    alt: "Publicación de Kroma 4",
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
    ],
    "catalogos-digitales": [
        {
            id: "catalogos-digitales-ejemplos",
            title: "Catálogos digitales",
            desc: "Catálogos y menús digitales fáciles de compartir.",
            thumbnail: "/services/catalogos-digitales/catalogos-digitales-ejemplos-01-thumb.webp",
            media: [
                {
                    type: "image",
                    src: "/services/catalogos-digitales/catalogos-digitales-ejemplos-01.webp",
                    alt: "Catálogo digital 1",
                },
                {
                    type: "image",
                    src: "/services/catalogos-digitales/catalogos-digitales-ejemplos-02.webp",
                    alt: "Catálogo digital 2",
                },
                {
                    type: "image",
                    src: "/services/catalogos-digitales/catalogos-digitales-ejemplos-03.webp",
                    alt: "Catálogo digital 3",
                }
            ]
        }
    ],
    "paginas-web": [
        {
            id: "paginas-web-ejemplos",
            title: "Ejemplos de landing pages",
            desc: "Ejemplos de landing pages y páginas web.",
            thumbnail: "/services/paginas-web/paginas-web-ejemplos-01-thumb.webp",
            media: [
                {
                    type: "image",
                    src: "/services/paginas-web/paginas-web-ejemplos-01.webp",
                    alt: "Ejemplo de landing page 1",
                },
                {
                    type: "image",
                    src: "/services/paginas-web/paginas-web-ejemplos-02.webp",
                    alt: "Ejemplo de landing page 2",
                },
                {
                    type: "image",
                    src: "/services/paginas-web/paginas-web-ejemplos-03.webp",
                    alt: "Ejemplo de landing page 3",
                },
                {
                    type: "image",
                    src: "/services/paginas-web/paginas-web-ejemplos-04.webp",
                    alt: "Ejemplo de landing page 4",
                },
                {
                    type: "image",
                    src: "/services/paginas-web/paginas-web-ejemplos-05.webp",
                    alt: "Ejemplo de landing page 5",
                }
            ]
        }
    ],
    "sesiones-fotograficas": [
        {
            id: "sesiones-fotograficas-1",
            title: "Sesiones fotográficas",
            desc: "Sesiones fotográficas comerciales.",
            thumbnail: "/services/sesiones-fotograficas/sesiones-fotograficas-1-01-thumb.webp",
            media: [
                {
                    type: "image",
                    src: "/services/sesiones-fotograficas/sesiones-fotograficas-1-01.webp",
                    alt: "Sesión fotográfica 1",
                },
                {
                    type: "image",
                    src: "/services/sesiones-fotograficas/sesiones-fotograficas-1-02.webp",
                    alt: "Sesión fotográfica 2",
                }
            ]
        }
    ]
}
