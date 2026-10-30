import SectionTitle from "../ui/SectionTitle.tsx";
import Select, {type SelectGroup} from "../ui/Select.tsx";
import {SiWhatsapp} from "@icons-pack/react-simple-icons";
import {CircleAlert} from "lucide-react";
import {type ChangeEvent, type FormEvent, useEffect, useState} from "react";
import {kroma, type PackageId, serviceCategories, servicePackages, services} from "../../data/index.ts";
import {buildLeadMessage, buildWhatsAppUrl} from "../../lib/whatsapp.ts";
import {QUOTE_EVENT, type QuoteRequest} from "../../lib/quote.ts";

type FieldName = "fullName" | "company" | "serviceType" | "message";
type Values = Record<FieldName, string>;
type Errors = Partial<Record<FieldName, string>>;

const FIELD_ORDER: FieldName[] = ["fullName", "company", "serviceType", "message"];
const LIMITS = {name: 80, company: 60, message: 600};
// Inputs accept a couple of extra characters so the limit error can show, but never unlimited text.
const OVERFLOW = 2;
const emptyValues: Values = {fullName: "", company: "", serviceType: "", message: ""};

function validate(values: Values): Errors {
    const errors: Errors = {};
    const name = values.fullName.trim();
    const company = values.company.trim();
    const message = values.message.trim();

    if (!name) errors.fullName = "Escribe tu nombre completo.";
    else if (!/\p{L}/u.test(name)) errors.fullName = "Usa letras en tu nombre.";
    else if (name.length < 3) errors.fullName = "El nombre es muy corto (mínimo 3 caracteres).";
    else if (name.length > LIMITS.name) errors.fullName = `Máximo ${LIMITS.name} caracteres.`;

    if (company.length > LIMITS.company) errors.company = `Máximo ${LIMITS.company} caracteres.`;

    if (!values.serviceType) errors.serviceType = "Selecciona un tipo de servicio.";

    if (!message) errors.message = "Cuéntanos sobre tu proyecto.";
    else if (message.length < 10) errors.message = "Cuéntanos un poco más (mínimo 10 caracteres).";
    else if (message.length > LIMITS.message) errors.message = `Máximo ${LIMITS.message} caracteres.`;

    return errors;
}

const serviceGroups: SelectGroup[] = serviceCategories.map((category) => ({
    label: category.title,
    options: services
        .filter((service) => service.category === category.id)
        .map((service) => ({value: service.title, label: service.title})),
}));

function FieldError({id, message}: { id: string; message?: string }) {
    if (!message) return null;

    return (
        <p id={id} className="form-error-message" role="alert">
            <CircleAlert className="h-3.5 w-3.5 shrink-0" aria-hidden="true"/>
            {message}
        </p>
    );
}

export default function Contact() {
    const [values, setValues] = useState<Values>(emptyValues);
    const [touched, setTouched] = useState<Partial<Record<FieldName, boolean>>>({});
    const [submitted, setSubmitted] = useState(false);
    const [status, setStatus] = useState<"idle" | "opened">("idle");
    const [packageId, setPackageId] = useState<PackageId | null>(null);

    // Service cards and package cards ask for a quote through this event.
    useEffect(() => {
        const onQuote = (event: Event) => {
            const {serviceId, packageId: requestedPackage} = (event as CustomEvent<QuoteRequest>).detail;
            const service = services.find((item) => item.id === serviceId);
            if (!service) return;

            setValues((current) => ({...current, serviceType: service.title}));
            setTouched((current) => ({...current, serviceType: true}));
            setPackageId(requestedPackage ?? null);
            setStatus("idle");

            window.setTimeout(() => document.getElementById("fullName")?.focus({preventScroll: true}), 700);
        };

        window.addEventListener(QUOTE_EVENT, onQuote);
        return () => window.removeEventListener(QUOTE_EVENT, onQuote);
    }, []);

    const selectedPackage = servicePackages.find((item) => item.id === packageId);

    const errors = validate(values);
    const isValid = Object.keys(errors).length === 0;

    const visibleError = (field: FieldName) => (touched[field] || submitted ? errors[field] : undefined);

    const controlClass = (field: FieldName) => {
        const showValid = touched[field] && !errors[field] && values[field].trim() !== "";
        return `form-control${showValid ? " is-valid" : ""}`;
    };

    const fieldProps = (field: FieldName) => ({
        value: values[field],
        "aria-invalid": visibleError(field) ? (true as const) : undefined,
        "aria-describedby": visibleError(field) ? `${field}-error` : undefined,
        onChange: (event: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
            setValues((current) => ({...current, [field]: event.target.value}));
            setStatus("idle");
        },
        onBlur: () => setTouched((current) => ({...current, [field]: true})),
    });

    const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        setSubmitted(true);

        const firstInvalid = FIELD_ORDER.find((field) => errors[field]);

        if (firstInvalid) {
            setStatus("idle");
            document.getElementById(firstInvalid)?.focus();
            return;
        }

        const lead = {
            name: values.fullName.trim(),
            company: values.company.trim(),
            service: values.serviceType,
            packageName: selectedPackage?.title,
            message: values.message.trim(),
        };

        // Opened synchronously inside the submit handler so mobile browsers don't block it.
        window.open(buildWhatsAppUrl(kroma.whatsapp.number, buildLeadMessage(lead)), "_blank", "noopener,noreferrer");

        setValues(emptyValues);
        setPackageId(null);
        setTouched({});
        setSubmitted(false);
        setStatus("opened");
    };

    return (
        <section className="container-max mx-auto px-gutter py-section-gap" id="contacto">
            <div data-reveal className="relative overflow-hidden glass-card p-6 sm:p-12 md:p-24">
                <div className="relative z-10 grid gap-12 md:grid-cols-2 md:gap-20">
                    <div>
                        <SectionTitle>Impulsa tu Marca</SectionTitle>
                        <p className="mb-10 text-base text-on-surface-variant md:mb-16 md:text-lg">
                            Estamos listos para llevar tu contenido al siguiente nivel. Cuéntanos sobre tu proyecto.
                        </p>

                        <div className="space-y-10">
                            <a className="group flex items-center gap-6" href={`https://wa.me/${kroma.whatsapp.number}`} target="_blank" rel="noopener noreferrer">
                <span className="icon-shell text-brand">
  <SiWhatsapp className="h-5 w-5" strokeWidth={2.4} color={"#25D366"}/>
</span>
                                <div>
                                    <p className="mb-1 text-[10px] font-black uppercase tracking-[0.2em] text-on-surface-variant">WhatsApp</p>
                                    <p className="whitespace-nowrap font-headline text-base font-bold sm:text-xl">{kroma.whatsapp.display}</p>
                                </div>
                            </a>
                        </div>
                    </div>

                    <form className="space-y-5" onSubmit={handleSubmit} noValidate>
                        <div className="form-field">
                            <label className="form-label" htmlFor="fullName">
                                Nombre completo
                            </label>
                            <input
                                {...fieldProps("fullName")}
                                id="fullName"
                                name="fullName"
                                className={controlClass("fullName")}
                                placeholder="Ej. Juan Pérez"
                                type="text"
                                autoComplete="name"
                                maxLength={LIMITS.name + OVERFLOW}
                            />
                            <FieldError id="fullName-error" message={visibleError("fullName")}/>
                        </div>

                        <div className="form-field">
                            <label className="form-label" htmlFor="company">
                                Empresa o marca (opcional)
                            </label>
                            <input
                                {...fieldProps("company")}
                                id="company"
                                name="company"
                                className={controlClass("company")}
                                placeholder="Ej. Mi Marca"
                                type="text"
                                autoComplete="organization"
                                maxLength={LIMITS.company + OVERFLOW}
                            />
                            <FieldError id="company-error" message={visibleError("company")}/>
                        </div>

                        <div className="form-field">
                            <label className="form-label" htmlFor="serviceType">
                                Tipo de servicio
                            </label>

                            <Select
                                id="serviceType"
                                value={values.serviceType}
                                groups={serviceGroups}
                                placeholder="Selecciona un servicio"
                                invalid={Boolean(visibleError("serviceType"))}
                                valid={Boolean(touched.serviceType && !errors.serviceType && values.serviceType)}
                                describedBy={visibleError("serviceType") ? "serviceType-error" : undefined}
                                onChange={(next) => {
                                    setValues((current) => ({...current, serviceType: next}));
                                    setStatus("idle");
                                }}
                                onBlur={() => setTouched((current) => ({...current, serviceType: true}))}
                            />
                            <FieldError id="serviceType-error" message={visibleError("serviceType")}/>
                        </div>

                        <div className="form-field">
                            <label className="form-label" htmlFor="message">
                                Mensaje
                            </label>
                            <textarea
                                {...fieldProps("message")}
                                id="message"
                                name="message"
                                className={`${controlClass("message")} form-textarea`}
                                placeholder="Cuéntanos sobre tu proyecto"
                                rows={5}
                                maxLength={LIMITS.message + OVERFLOW}
                            />
                            <div className="mt-2 flex items-start justify-between gap-4">
                                <FieldError id="message-error" message={visibleError("message")}/>
                                <span className={`form-counter ${values.message.length > LIMITS.message ? "is-over" : ""}`}>
                                    {values.message.length}/{LIMITS.message}
                                </span>
                            </div>
                        </div>

                        {selectedPackage && (
                            <p className="form-package-chip">
                                <span>{selectedPackage.title} · {selectedPackage.posts}</span>
                                <button type="button" onClick={() => setPackageId(null)} aria-label="Quitar paquete seleccionado">
                                    Quitar
                                </button>
                            </p>
                        )}

                        <button
                            className="pill-button-primary mt-3 flex w-full cursor-pointer items-center justify-center gap-3 font-black uppercase tracking-[0.2em]"
                            type="submit"
                        >
                            <SiWhatsapp className="h-4 w-4"/>
                            Enviar por WhatsApp
                        </button>

                        {submitted && !isValid && (
                            <p className="form-status form-status-error" role="alert">
                                Revisa los campos marcados en rojo antes de continuar.
                            </p>
                        )}

                        {status === "opened" && (
                            <p className="form-status form-status-success" role="status">
                                Abrimos WhatsApp. Pulsa enviar para que te respondamos pronto.
                            </p>
                        )}

                        <p className="text-center text-[11px] leading-relaxed text-on-surface-variant">
                            Se abrirá WhatsApp con tu solicitud lista para enviar.
                        </p>
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