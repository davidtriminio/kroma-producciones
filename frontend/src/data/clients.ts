import type {ClientLogo} from "./types.ts"

const logo = (id: string, name: string, tone?: ClientLogo["tone"]): ClientLogo => ({
    id,
    name,
    logo: `/clients/${id}.webp`,
    tone,
})

// Logo files live in public/clients. Most frequent clients first.
export const clients: ClientLogo[] = [
    logo("smartec", "Smartec"),
    logo("yoyitas-joyeria", "Yoyita's Joyería y Perfumería", "dark-ink"),
    logo("yoyitas-market", "Yoyita's Market", "dark-ink"),
    logo("academia-tools-for-life", "Academia Tools for Life"),
    logo("atelier-floral", "Atelier Floral", "white"),
    logo("pebbles-and-stones", "Pebbles and Stones"),
    logo("distribuidora-rocio", "Distribuidora Rocío"),
    logo("camara-comercio-danli", "Cámara de Comercio e Industrias de Danlí"),
    logo("compras-ya", "Compras YA"),
    logo("rincon-de-antojos", "Rincón de Antojos", "dark-ink"),
    logo("todo-aqui-servicios", "Todo Aquí Servicios"),
    logo("bella-vista", "Centro Turístico Bella Vista"),
    logo("tactical-world", "Tactical World", "dark-ink"),
    logo("el-palomar", "El Palomar", "dark-ink"),
    logo("idol-fashion", "Idol Fashion", "dark-ink"),
    logo("mencas-corredores", "Mencas Corredores"),
    logo("papi-papito", "Papi-papito", "white"),
]
