import SectionTitle from "./SectionTitle";
import {SiWhatsapp} from "@icons-pack/react-simple-icons";
import emailjs from "@emailjs/browser"
import {type FormEvent, useState} from "react";

export default function Contact() {
    const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
    const browserLanguage = navigator.language.toLowerCase();
    const isSpanish = browserLanguage.startsWith("es");

    const copy = {
        requiredName: isSpanish ? "Escribe tu nombre completo." : "Enter your full name.",
        requiredEmail: isSpanish ? "Escribe tu correo electrónico." : "Enter your email address.",
        invalidEmail: isSpanish ? "Escribe un correo válido." : "Enter a valid email address.",
        requiredService: isSpanish ? "Selecciona un tipo de servicio." : "Choose a service type.",
        requiredMessage: isSpanish ? "Escribe un mensaje." : "Enter a message.",
        success: isSpanish
            ? "Mensaje enviado correctamente. Te contactaremos pronto."
            : "Message sent successfully. We will contact you soon.",
        error: isSpanish
            ? "No pudimos enviar el mensaje. Intenta nuevamente."
            : "We could not send the message. Please try again.",
        loading: isSpanish ? "Enviando..." : "Sending...",
        submit: isSpanish ? "Enviar propuesta" : "Send proposal",
    };

    const [errors, setErrors] = useState<Record<string, string>>({});

    const isValidEmail = (email: string) => {
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    };
    const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        const form = event.currentTarget;
        const formData = new FormData(form);

        const rawServiceType = String(formData.get("serviceType") || "");

        const payload = {
            from_name: String(formData.get("fullName") || "").trim(),
            from_email: String(formData.get("email") || "").trim(),
            service_type: rawServiceType.trim(),
            message: String(formData.get("message") || "").trim(),
        };

        const nextErrors: Record<string, string> = {};

        if (!payload.from_name) {
            nextErrors.fullName = copy.requiredName;
        }

        if (!payload.from_email) {
            nextErrors.email = copy.requiredEmail;
        } else if (!isValidEmail(payload.from_email)) {
            nextErrors.email = copy.invalidEmail;
        }

        if (!payload.service_type) {
            nextErrors.serviceType = copy.requiredService;
        }

        if (!payload.message) {
            nextErrors.message = copy.requiredMessage;
        }

        if (Object.keys(nextErrors).length > 0) {
            setErrors(nextErrors);
            setStatus("idle");
            return;
        }

        setErrors({});

        const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
        const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
        const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

        if (!serviceId || !templateId || !publicKey) {
            console.error("Missing EmailJS environment variables", {
                hasServiceId: Boolean(serviceId),
                hasTemplateId: Boolean(templateId),
                hasPublicKey: Boolean(publicKey),
            });

            setStatus("error");
            return;
        }

        try {
            setStatus("loading");

            await emailjs.send(
                serviceId,
                templateId,
                payload,
                {
                    publicKey: publicKey,
                }
            );

            form.reset();
            setStatus("success");
            setErrors({});
        } catch (error) {
            console.error("EmailJS send failed:", error);
            setStatus("error");
        }
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
                            <a className="group flex items-center gap-6" href="https://wa.me/50488434254" target="_blank" rel="noopener noreferrer">
                <span className="icon-shell text-kp-cyan">
  <SiWhatsapp className="h-5 w-5" strokeWidth={2.4} color={"#25D366"}/>
</span>
                                <div>
                                    <p className="mb-1 text-[10px] font-black uppercase tracking-[0.2em] text-on-surface-variant">WhatsApp</p>
                                    <p className="font-headline text-xl font-bold">+504 8843 4254</p>
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
                            <label className="form-label" htmlFor="email">
                                Email corporativo
                            </label>
                            <input
                                id="email"
                                name="email"
                                className="form-control"
                                placeholder="correo@empresa.com"
                                type="email"
                                required
                            />
                        </div>
                        {errors.email && (
                            <p className="form-error-message">{errors.email}</p>
                        )}

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
                                    <option value="">Selecciona una opción</option>
                                    <option value="audiovisual">Producción Audiovisual</option>
                                    <option value="social">Manejo de Redes</option>
                                    <option value="web">Diseño Web</option>
                                    <option value="branding">Branding</option>
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
                                placeholder={isSpanish ? "Cuéntanos sobre tu proyecto" : "Tell us about your project"}
                                rows={5}
                            />

                            {errors.message && (
                                <p className="form-error-message">{errors.message}</p>
                            )}
                        </div>

                        <button
                            className="pill-button-primary mt-3 w-full cursor-pointer font-black uppercase tracking-[0.24em] disabled:cursor-not-allowed disabled:opacity-60"
                            type="submit"
                            disabled={status === "loading"}
                        >
                            {status === "loading" ? copy.loading : copy.submit}
                        </button>

                        {status === "success" && (
                            <p className="form-status form-status-success">
                                {copy.success}
                            </p>
                        )}

                        {status === "error" && (
                            <p className="form-status form-status-error">
                                {copy.error}
                            </p>
                        )}
                    </form>
                </div>

                <div
                    className="pointer-events-none absolute -right-40 -bottom-40 h-[600px] w-[600px] rounded-full bg-kp-cyan/5 blur-[120px]"/>
                <div
                    className="pointer-events-none absolute -left-40 -top-40 h-[600px] w-[600px] rounded-full bg-kp-red/5 blur-[120px]"/>
            </div>
        </section>
    );
}