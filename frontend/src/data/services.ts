import type {Service, ServiceCategory} from "./types.ts"

export const serviceCategories: ServiceCategory[] = [
    {
        id: "marketing",
        title: "Marketing digital",
        description: "Estrategia y gestión para que tu marca crezca en redes.",
    },
    {
        id: "fotografia",
        title: "Fotografía profesional",
        description: "Imágenes que resaltan los detalles de tu marca, tus productos y tus eventos.",
    },
    {
        id: "video",
        title: "Video",
        description: "Desde reels para redes hasta producciones para televisión y proyecciones.",
    },
    {
        id: "diseno",
        title: "Diseño y branding",
        description: "Identidad e imagen coherente para que tu marca se reconozca.",
    },
    {
        id: "empresarial",
        title: "Soluciones empresariales",
        description: "Herramientas y formación para que tu negocio opere mejor.",
    },
]

export const services: Service[] = [
    // Marketing digital
    {
        id: "redes-sociales",
        category: "marketing",
        title: "Manejo de redes sociales",
        description: "Estrategia, contenido, diseño y gestión de principio a fin para mantener tus perfiles activos cada semana.",
        icon: "share",
    },
    {
        id: "asesoria-marketing",
        category: "marketing",
        title: "Asesoría y estrategia de marketing",
        description: "Analizamos tu negocio y desarrollamos estrategias para fortalecer tu marca y alcanzar tus objetivos comerciales.",
        icon: "target",
    },

    // Fotografía profesional
    {
        id: "sesiones-fotograficas",
        category: "fotografia",
        title: "Sesiones fotográficas",
        description: "Sesiones comerciales de tus servicios, espacios y equipo que transmiten calidad y confianza.",
        icon: "camera",
    },
    {
        id: "cobertura-eventos",
        category: "fotografia",
        title: "Cobertura de eventos",
        description: "Registramos tus eventos con fotografía profesional para que los momentos importantes no se pierdan.",
        icon: "calendar",
    },
    {
        id: "fotos-producto",
        category: "fotografia",
        title: "Fotos de producto",
        description: "Fotografías que resaltan la esencia y los detalles de tus productos para catálogos, redes y tienda en línea.",
        icon: "package",
    },
    {
        id: "sesiones-personales",
        category: "fotografia",
        title: "Sesiones personales",
        description: "Retratos y sesiones personales para emprendedores, equipos y marcas personales.",
        icon: "user",
    },

    // Video
    {
        id: "video-organico",
        category: "video",
        title: "Video orgánico",
        description: "Reels y videos cortos para redes sociales que captan la atención y conectan con tu público.",
        icon: "smartphone",
    },
    {
        id: "video-profesional",
        category: "video",
        title: "Video profesional",
        description: "Producciones en formato horizontal para televisión, proyecciones y presentaciones, desde la planificación hasta la edición final.",
        icon: "clapperboard",
        includes: ["Eventos especiales", "Campañas", "Presentaciones corporativas", "Eventos"],
    },
    {
        id: "dron",
        category: "video",
        title: "Tomas aéreas con dron",
        description: "Negocios, propiedades e instalaciones mostrados desde una perspectiva diferente.",
        icon: "drone",
    },

    // Diseño y branding
    {
        id: "branding",
        category: "diseno",
        title: "Branding e identidad de marca",
        description: "Creamos marcas desde cero y renovamos identidades: logotipo, colores, tipografías y elementos visuales.",
        icon: "pen-tool",
    },
    {
        id: "diseno-grafico",
        category: "diseno",
        title: "Diseño gráfico publicitario",
        description: "Artes para redes, afiches, flyers, banners, presentaciones y piezas para campañas comerciales.",
        icon: "palette",
    },

    // Soluciones empresariales
    {
        id: "paginas-web",
        category: "empresarial",
        title: "Diseño y desarrollo de páginas web",
        description: "Páginas profesionales con asesoría de dominio, catálogos, formularios de contacto o compra en línea.",
        icon: "globe",
    },
    {
        id: "catalogos-digitales",
        category: "empresarial",
        title: "Catálogos y menús digitales",
        description: "Tu oferta organizada y fácil de compartir por WhatsApp, redes sociales o tu página web.",
        icon: "book-open",
    },
    {
        id: "capacitaciones",
        category: "empresarial",
        title: "Capacitaciones empresariales",
        description: "Coordinamos formaciones en servicio al cliente, ventas, marketing digital y comunicación con especialistas.",
        icon: "graduation-cap",
    },
]
