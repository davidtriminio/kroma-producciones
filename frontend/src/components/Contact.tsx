import SectionTitle from "./SectionTitle";
import {SiWhatsapp} from "@icons-pack/react-simple-icons";
import {type FormEvent, useState} from "react";
import {WHATSAPP_DISPLAY, WHATSAPP_NUMBER} from "../data/kroma.ts";
import {buildLeadMessage, buildWhatsAppUrl} from "../lib/whatsapp.ts";

export default function Contact() {
    const [status, setStatus] = useState<"idle" | "opened">("idle");
    const [errors, setErrors] = useState<Record<string, string>>({});

    const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        const form = event.currentTarget;
        const formData = new FormData(form);

        const lead = {
            name: String(formData.get("fullName") || "").trim(),
            company: String(formData.get("company") || "").trim(),
            service: String(formData.get("serviceType") || "").trim(),
            message: String(formData.get("message") || "").trim(),
        };

        const nextErrors: Record<string, string> = {};

        if (!lead.name) nextErrors.fullName = "Escribe tu nombre completo.";
        if (!lead.service) nextErrors.serviceType = "Selecciona un tipo de servicio.";
        if (!lead.message) nextErrors.message = "Cuéntanos sobre tu proyecto.";

        if (Object.keys(nextErrors).length > 0) {
            setErrors(nextErrors);
            setStatus("idle");
            return;
        }

        setErrors({});

        // Opened synchronously inside the submit handler so mobile browsers don't block it.
        window.open(buildWhatsAppUrl(WHATSAPP_NUMBER, buildLeadMessage(lead)), "_blank", "noopener,noreferrer");

        form.reset();
        setStatus("opened");
    };

    return (
        <section className="container-max mx-auto px-gutter py-section-gap" id="contacto">
            <div data-reveal className="relative overflow-hidden glass-card p-12 md:p-24">
                <div className="relative z-10 grid gap-20 md:grid-cols-2">
                    <div>
                        <SectionTitle>Impulsa tu Marca</SectionTitle>
                        <p className="mb-16 text-lg text-on-surface-variant">
                            Estamos listos para llevar tu contenido al siguiente nivel. Cuéntanos sobre tu proyecto.
                        </p>

                        <div className="space-y-10">
                            <a className="group flex items-center gap-6" href={`https://wa.me/${WHATSAPP_NUMBER}`} target="_blank" rel="noopener noreferrer">
                <span className="icon-shell text-brand">
  <SiWhatsapp className="h-5 w-5" strokeWidth={2.4} color={"#25D366"}/>
</span>
                                <div>
                                    <p className="mb-1 text-[10px] font-black uppercase tracking-[0.2em] text-on-surface-variant">WhatsApp</p>
                                    <p className="font-headline text-xl font-bold">{WHATSAPP_DISPLAY}</p>
                                </div>
                            </a>
                        </div>
                    </div>

                    <form className="space-y-5" onSubmit={handleSubmit}>
                        <div className="form-field">
                            <label className="form-label" htmlFor="fullName">
                                Nombre completo
                            </label>
                            <input
                                id="fullName"
                                name="fullName"
                                className="form-control"
                                placeholder="Ej. John Doe"
                                type="text"
                                required
                            />
                        </div>
                        {errors.fullName && (
                            <p className="form-error-message">{errors.fullName}</p>
                        )}

                        <div className="form-field">
                            <label className="form-label" htmlFor="company">
                                Empresa o marca (opcional)
                            </label>
                            <input
                                id="company"
                                name="company"
                                className="form-control"
                                placeholder="Ej. Mi Marca"
                                type="text"
                            />
                        </div>

                        <div className="form-field">
                            <label className="form-label" htmlFor="serviceType">
                                Tipo de servicio
                            </label>

                            <div className="form-select-wrap">
                                <select
                                    id="serviceType"
                                    name="serviceType"
                                    className="form-control appearance-none pr-12"
                                    required
                                >
                                    <option value="PRODUCCIÓN AUDIOVISUAL">Producción Audiovisual</option>
                                    <option value="MANEJO DE REDES">Manejo de Redes</option>
                                    <option value="DISEÑO WEB">Diseño Web</option>
                                    <option value="BRANDING">Branding</option>
                                </select>
                            </div>
                        </div>

                        <div className="form-field">
                            <label className="form-label" htmlFor="message">
                                Mensaje
                            </label>
                            <textarea
                                id="message"
                                name="message"
                                className="form-control form-textarea"
                                placeholder="Cuéntanos sobre tu proyecto"
                                rows={5}
                                required
                            />

                            {errors.message && (
                                <p className="form-error-message">{errors.message}</p>
                            )}
                        </div>

                        <button
                            className="pill-button-primary mt-3 flex w-full cursor-pointer items-center justify-center gap-3 font-black uppercase tracking-[0.2em]"
                            type="submit"
                        >
                            <SiWhatsapp className="h-4 w-4"/>
                            Enviar por WhatsApp
                        </button>

                        <p className="text-center text-[11px] leading-relaxed text-on-surface-variant">
                            Se abrirá WhatsApp con tu solicitud lista para enviar.
                        </p>

                        {status === "opened" && (
                            <p className="form-status form-status-success" role="status">
                                Abrimos WhatsApp. Pulsa enviar para que te respondamos pronto.
                            </p>
                        )}
                    </form>
                </div>

                <div
                    className="pointer-events-none absolute -right-40 -bottom-40 h-[600px] w-[600px] rounded-full bg-brand/5 blur-[120px]"/>
                <div
                    className="pointer-events-none absolute -left-40 -top-40 h-[600px] w-[600px] rounded-full bg-brand/10 blur-[120px]"/>
            </div>
        </section>
    );
}