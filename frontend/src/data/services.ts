import type {Service, ServiceCategory} from "./types.ts"

export const serviceCategories: ServiceCategory[] = [
    {
        id: "marketing",
        title: "Marketing digital",
        description: "Estrategia y gestión para que tu marca crezca en redes.",
    },
    {
        id: "audiovisual",
        title: "Producción audiovisual",
        description: "Foto, video y tomas aéreas con calidad profesional.",
    },
    {
        id: "diseno",
        title: "Diseño y branding",
        description: "Identidad e imagen coherente, del entorno digital al físico.",
    },
    {
        id: "empresarial",
        title: "Soluciones empresariales",
        description: "Herramientas y formación para que tu negocio opere mejor.",
    },
]

export const services: Service[] = [
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
    {
        id: "fotografia",
        category: "audiovisual",
        title: "Fotografía profesional",
        description: "Productos, servicios, espacios, retratos y sesiones comerciales que transmiten calidad y confianza.",
        icon: "camera",
    },
    {
        id: "video-comercial",
        category: "audiovisual",
        title: "Producción de video comercial",
        description: "Videos publicitarios y reels dinámicos que captan la atención y conectan con tu público.",
        icon: "video",
    },
    {
        id: "produccion-audiovisual",
        category: "audiovisual",
        title: "Producción audiovisual de alta calidad",
        description: "Comerciales, campañas, presentaciones corporativas y eventos, desde la planificación hasta la edición final.",
        icon: "clapperboard",
    },
    {
        id: "dron",
        category: "audiovisual",
        title: "Tomas aéreas con dron",
        description: "Negocios, propiedades e instalaciones mostrados desde una perspectiva diferente.",
        icon: "drone",
    },
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
    {
        id: "rotulacion",
        category: "diseno",
        title: "Rotulación y material publicitario",
        description: "Rótulos, lonas, viniles y banners para llevar tu marca al entorno físico.",
        icon: "signpost",
    },
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
