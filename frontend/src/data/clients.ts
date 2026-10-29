import type {ClientLogo} from "./types.ts"

const logo = (id: string, name: string, tile?: ClientLogo["tile"]): ClientLogo => ({
    id,
    name,
    logo: `/clients/${id}.webp`,
    tile,
})

// Logos files live in public/clients. Most frequent clients first.
export const clients: ClientLogo[] = [
    logo("smartec", "Smartec"),
    logo("yoyitas-joyeria", "Yoyita's Joyería y Perfumería"),
    logo("yoyitas-market", "Yoyita's Market"),
    logo("academia-tools-for-life", "Academia Tools for Life"),
    logo("atelier-floral", "Atelier Floral", "dark"),
    logo("pebbles-and-stones", "Pebbles and Stones"),
    logo("distribuidora-rocio", "Distribuidora Rocío"),
    logo("camara-comercio-danli", "Cámara de Comercio e Industrias de Danlí"),
    logo("compras-ya", "Compras YA"),
    logo("rincon-de-antojos", "Rincón de Antojos"),
    logo("todo-aqui-servicios", "Todo Aquí Servicios"),
    logo("bella-vista", "Centro Turístico Bella Vista"),
    logo("tactical-world", "Tactical World"),
    logo("el-palomar", "El Palomar"),
    logo("idol-fashion", "Idol Fashion"),
    logo("mencas-corredores", "Mencas Corredores"),
    logo("papi-papito", "Papi-papito", "dark"),
]
