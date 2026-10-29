export type WhatsAppLead = {
    name: string;
    company: string;
    service: string;
    message: string;
};

const divider = "━━━━━━━━━━━━━━━━";

// WhatsApp renders *bold*, _italic_ and "> quote", so the message reads like a card.
export function buildLeadMessage({name, company, service, message}: WhatsAppLead) {
    const lines = [
        "*NUEVA SOLICITUD · KROMA*",
        "_Agencia Publicitaria_",
        divider,
        `👤 *Nombre:* ${name}`,
        company ? `🏢 *Empresa:* ${company}` : null,
        `🎯 *Servicio:* ${service}`,
        "",
        "💬 *Proyecto:*",
        ...message.split("\n").map((line) => `> ${line}`),
        divider,
        "_Enviado desde el sitio web_",
    ];

    return lines.filter((line) => line !== null).join("\n");
}

export function buildWhatsAppUrl(phone: string, text: string) {
    return `https://wa.me/${phone}?text=${encodeURIComponent(text)}`;
}
