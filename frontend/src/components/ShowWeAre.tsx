import SectionTitle from "./SectionTitle";

type Feature = {
    icon: string;
    iconClass: string;
    title: string;
    text: string;
};

const features: Feature[] = [
    {
        icon: "verified",
        iconClass: "text-kp-cyan",
        title: "Calidad visual",
        text: "Estándares de cine aplicados a la comunicación comercial diaria.",
    },
    {
        icon: "insights",
        iconClass: "text-kp-red",
        title: "Creatividad con propósito",
        text: "Cada color y cada corte tiene un objetivo estratégico claro.",
    },
    {
        icon: "settings_input_component",
        iconClass: "text-kp-green",
        title: "Producción integral",
        text: "Desde el primer boceto hasta la entrega final del contenido.",
    },
];

export default function WhoWeAre() {
    return (
        <section className="container-max mx-auto px-gutter py-section-gap" id="quienes-somos">
            <div className="grid items-start gap-16 md:grid-cols-12 section-reveal">
                <div className="md:col-span-6">
                    <SectionTitle>¿Quiénes Somos?</SectionTitle>
                    <p className="mb-6 leading-relaxed text-on-surface-variant">
                        KROMA PRODUCCIONES no es solo una agencia de marketing; somos arquitectos visuales dedicados a
                        transformar la percepción de las marcas a través de la excelencia técnica y artística.
                    </p>
                    <p className="leading-relaxed text-on-surface-variant">
                        Nuestra misión es fusionar la tecnología de vanguardia con narrativas potentes para que cada proyecto no
                        solo sea visto, sino recordado.
                    </p>
                </div>

                <div className="grid gap-6 md:col-span-6">
                    {features.map((feature) => (
                        <div key={feature.title} className="glass-card p-8">
                            <div className="mb-4 flex items-center gap-6">
                                <span className={`material-symbols-outlined text-4xl ${feature.iconClass}`}>{feature.icon}</span>
                                <h3 className="font-headline text-xl font-bold">{feature.title}</h3>
                            </div>
                            <p className="text-sm leading-relaxed text-on-surface-variant">{feature.text}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}