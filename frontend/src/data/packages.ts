import type {ServicePackage} from "./types.ts"

export const packagesNote =
    "La pauta publicitaria incluida en el Paquete Completo corresponde al presupuesto de anuncios. En los demás paquetes el presupuesto de anuncios va por separado."

export const servicePackages: ServicePackage[] = [
    {
        id: "base",
        title: "Paquete Base",
        posts: "12 publicaciones mensuales",
        features: [
            "5 videos y 7 fotografías o artes gráficos",
            "Planeación y producción de contenido",
            "Gestión de redes sociales",
            "Recomendación de pauta publicitaria",
        ],
    },
    {
        id: "general",
        title: "Paquete General",
        posts: "16 publicaciones mensuales",
        features: [
            "Planeación, producción y gestión de contenido",
            "Fotografías, videos y artes gráficos",
            "Tomas aéreas con dron",
            "Cobertura de eventos",
            "Recomendación de pauta publicitaria",
        ],
    },
    {
        id: "completo",
        title: "Paquete Completo",
        posts: "25 publicaciones mensuales",
        highlighted: true,
        features: [
            "Planeación estratégica y producción de contenido",
            "Gestión integral de redes sociales",
            "Cobertura de eventos en fotografía y video",
            "Tomas aéreas con dron",
            "Historias para mantener activa tu comunidad",
            "Pauta publicitaria de L 500 incluida mensualmente",
            "Acompañamiento estratégico y seguimiento personalizado",
        ],
    },
]
