import { ChevronDown } from "lucide-react";

export default function Hero() {
    return (
        <section className="relative flex min-h-[620px] items-center justify-center overflow-hidden px-gutter pt-16">
            <div className="pointer-events-none absolute left-1/2 top-1/2 h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full bg-kp-cyan/10 blur-[90px] animate-glow-pulse" />
            <div className="pointer-events-none absolute inset-0 z-0 opacity-25">
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/90 to-background" />
                <img
                    className="h-full w-full scale-110 object-cover blur-[2px] grayscale brightness-40"
                    src="YOUR_BACKGROUND_IMAGE"
                    alt="Producción visual Kroma"
                />
            </div>

            <div className="container-max relative z-10 mx-auto animate-fade-up text-center">
                <h1 className="mx-auto mb-6 max-w-3xl font-headline text-4xl font-black leading-[0.86] tracking-normal md:text-6xl">
                    Producción visual que hace que tu marca se vea{" "}
                    <span className="underline decoration-kp-cyan decoration-4 underline-offset-8">
            profesional.
          </span>
                </h1>

                <p className="mx-auto mb-9 max-w-xl text-sm leading-relaxed text-on-surface-variant">
                    Diseñamos contenido, identidad y presencia digital con precisión, estética y estrategia.
                </p>

                <div className="flex flex-col items-center justify-center gap-4 md:flex-row">
                    <a
                        className="pill-button-primary w-full uppercase md:w-auto"
                        href="#contacto">
                        Cotizar ahora
                    </a>
                    <a className="pill-button-secondary w-full uppercase md:w-auto" href="#servicios">
                        Ver servicios
                    </a>
                </div>
            </div>

            <ChevronDown className="absolute bottom-8 left-1/2 h-7 w-7 -translate-x-1/2 animate-soft-float text-white/35" />
        </section>
    );
}