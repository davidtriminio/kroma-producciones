import type {ClientLogo} from "./types.ts"

type Options = {
    // Defaults to true. Set to false for brands that are not working with us right now.
    active?: boolean
    tone?: ClientLogo["tone"]
}

const logo = (id: string, name: string, {active = true, tone}: Options = {}): ClientLogo => ({
    id,
    name,
    logo: `/clients/${id}.webp`,
    active,
    tone,
})

// Logo files live in public/clients. Flip `active` to show or hide a brand on the site.
export const clients: ClientLogo[] = [
    logo("smartec", "Smartec"),
    logo("yoyitas-joyeria", "Yoyita's Joyería y Perfumería", {tone: "dark-ink"}),
    logo("yoyitas-market", "Yoyita's Market", {tone: "dark-ink"}),
    logo("academia-tools-for-life", "Academia Tools for Life"),
    logo("atelier-floral", "Atelier Floral", {tone: "white"}),
    logo("pebbles-and-stones", "Pebbles and Stones"),
    logo("distribuidora-rocio", "Distribuidora Rocío"),
    logo("camara-comercio-danli", "Cámara de Comercio e Industrias de Danlí", {active: false}),
    logo("compras-ya", "Compras YA", {active: false}),
    logo("rincon-de-antojos", "Rincón de Antojos", {active: false, tone: "dark-ink"}),
    logo("todo-aqui-servicios", "Todo Aquí Servicios", {active: false}),
    logo("bella-vista", "Centro Turístico Bella Vista", {active: false}),
    logo("tactical-world", "Tactical World", {active: false, tone: "dark-ink"}),
    logo("el-palomar", "El Palomar", {active: false, tone: "dark-ink"}),
    logo("idol-fashion", "Idol Fashion", {active: false, tone: "dark-ink"}),
    logo("mencas-corredores", "Mencas Corredores"),
    logo("papi-papito", "Papi-papito", {tone: "white"}),
]

export const activeClients = clients.filter((client) => client.active)
