// Base brand data. Everything that is not content of a specific section lives here.
export const kroma = {
    name: "Kroma",
    legalName: "Kroma - Agencia Publicitaria",
    tagline: "Agencia Publicitaria",
    domain: "https://kroma-producciones.vercel.app",
    whatsapp: {
        number: "50488434254",
        display: "+504 8843 4254",
    },
    social: {
        instagram: "https://www.instagram.com/kroma_producciones",
        facebook: "https://www.facebook.com/profile.php?id=61578765474884",
    },
    nav: [
        {label: "¿Quiénes Somos?", href: "#quienes-somos"},
        {label: "Servicios", href: "#servicios"},
        {label: "Paquetes", href: "#paquetes"},
        {label: "Contacto", href: "#contacto"},
    ],
} as const
