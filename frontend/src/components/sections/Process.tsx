import SectionTitle from "../ui/SectionTitle.tsx";
import {processSteps} from "../../data/process.ts";

export default function Process() {
    return (
        <section className="overflow-hidden bg-fg/5 px-gutter py-section-gap">
            <div className="container-max mx-auto">
                <SectionTitle center className="mb-24 text-center">
                    Nuestro Proceso
                </SectionTitle>

                <div data-reveal className="relative grid grid-cols-1 gap-12 md:grid-cols-4">
                    {processSteps.map((step) => (
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