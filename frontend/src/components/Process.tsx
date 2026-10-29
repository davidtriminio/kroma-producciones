import SectionTitle from "./SectionTitle";

const steps = [
    {
        n: "01",
        title: "Consultoría",
        text: "Entendemos tus objetivos, audiencia y el mensaje central que deseas transmitir.",
        color: "text-brand",
    },
    {
        n: "02",
        title: "Estrategia",
        text: "Creamos un roadmap detallado y conceptos creativos que se alinean con tu marca.",
        color: "text-highlight-text",
    },
    {
        n: "03",
        title: "Producción",
        text: "Ejecutamos con la más alta tecnología y atención al detalle en cada toma y píxel.",
        color: "text-brand",
    },
    {
        n: "04",
        title: "Lanzamiento",
        text: "Entregamos material optimizado y listo para impactar en tus canales digitales.",
        color: "text-fg",
    },
];

export default function Process() {
    return (
        <section className="overflow-hidden bg-fg/5 px-gutter py-section-gap">
            <div className="container-max mx-auto">
                <SectionTitle center className="mb-24 text-center">
                    Nuestro Proceso
                </SectionTitle>

                <div data-reveal className="relative grid grid-cols-1 gap-12 md:grid-cols-4">
                    {steps.map((step) => (
                        <div key={step.n} className="relative z-10">
                            <div className="mb-6 text-7xl font-black text-fg/90">{step.n}</div>
                            <h4 className={`mb-4 font-headline text-2xl font-black ${step.color}`}>{step.title}</h4>
                            <p className="text-sm leading-relaxed text-on-surface-variant">{step.text}</p>
                        </div>
                    ))}
                    <div className="absolute left-0 top-16 -z-0 hidden h-px w-full bg-fg/5 md:block" />
                </div>
            </div>
        </section>
    );
}