import type {ServiceId, WorkItem} from "./types.ts"

// Only services that already have portfolio work appear here.
export const worksData: Partial<Record<ServiceId, WorkItem[]>> = {
    "redes-sociales": [
        {
            id: "perfiles-instagram",
            title: "Perfiles y feed de Instagram",
            desc: "Perfiles y feeds de las cuentas que gestionamos para nuestros clientes.",
            thumbnail: "/services/redes-sociales/perfiles-thumb.webp",
            media: [
                {
                    type: "image",
                    src: "/services/redes-sociales/perfil-pebbles.webp",
                    alt: "Perfil de Instagram de Pebbles and Stones",
                    layout: "phone",
                },
                {
                    type: "image",
                    src: "/services/redes-sociales/perfil-smartec.webp",
                    alt: "Perfil de Instagram de Smartec",
                    layout: "phone",
                },
                {
                    type: "image",
                    src: "/services/redes-sociales/perfil-yoyitas-joyeria.webp",
                    alt: "Perfil de Instagram de Yoyita's Joyería y Perfumería",
                    layout: "phone",
                },
                {
                    type: "image",
                    src: "/services/redes-sociales/perfil-yoyitas-market.webp",
                    alt: "Perfil de Instagram de Yoyita's Market",
                    layout: "phone",
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
                    alt: "Fotografía de producto 1",
                },
                {
                    type: "image",
                    src: "/services/fotos-producto/destacados-01.webp",
                    alt: "Fotografía de producto 2",
                },
                {
                    type: "image",
                    src: "/services/fotos-producto/destacados-03.webp",
                    alt: "Fotografía de producto 3",
                },
                {
                    type: "image",
                    src: "/services/fotos-producto/productos-joyeria-02.webp",
                    alt: "Fotografía de cadenas y aritos",
                },
                {
                    type: "image",
                    src: "/services/fotos-producto/relojes-yoyitas.webp",
                    alt: "Fotografía de relojes de Yoyita's",
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
            id: "sesion-moda",
            title: "Moda y catálogo",
            desc: "Sesión comercial de moda para tiendas y marcas de ropa.",
            thumbnail: "/services/sesiones-fotograficas/moda-comercial-thumb.webp",
            media: [
                {
                    type: "image",
                    src: "/services/sesiones-fotograficas/moda-comercial.webp",
                    alt: "Sesión fotográfica de moda",
                }
            ]
        },
        {
            id: "sesion-restaurante",
            title: "Restaurantes y negocios",
            desc: "Fotografía de espacios comerciales y restaurantes.",
            thumbnail: "/services/sesiones-fotograficas/restaurante-thumb.webp",
            media: [
                {
                    type: "image",
                    src: "/services/sesiones-fotograficas/restaurante.webp",
                    alt: "Sesión fotográfica de restaurante",
                }
            ]
        },
        {
            id: "sesion-servicios",
            title: "Servicios y oficios",
            desc: "Sesión que muestra a tu equipo y tus servicios en acción.",
            thumbnail: "/services/sesiones-fotograficas/servicios-flores-thumb.webp",
            media: [
                {
                    type: "image",
                    src: "/services/sesiones-fotograficas/servicios-flores.webp",
                    alt: "Sesión fotográfica de servicio de flores",
                }
            ]
        }
    ]
}
