export default function Hero() {
    return (
        <section className="relative flex h-screen items-center justify-center overflow-hidden px-gutter">
            <div className="pointer-events-none absolute inset-0 z-0 opacity-20">
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background to-background" />
                <img
                    className="h-full w-full scale-110 object-cover blur-sm grayscale brightness-50"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuBdq81gsmxMUkl0_uPaUdAoF7nM2-MJJmYG6hSjxhWrPqX99WKU6CvOKdqsYHf0_12xe-jyT0SQHiwvM73inB-q9dCSnccpohmsThLaiyBYIBikZXNHvYXwbZhDyGm7wnc7R-6AlGFBjsaNw-XNC7wKA1RqDEUxTismFDDecDoMOgIrKTD1jLsBZCYsw9b8FdpZdao7tB_drLIQePQrlixiEoWe89t5yCqcZL46s7gFNer3X9hxSzeqn_mhk2ZXlolAGbgHg-EXE4-j"
                    alt="Hero background"
                />
            </div>

            <div className="container-max relative z-10 mx-auto text-center">
                <h1 className="mx-auto mb-8 max-w-5xl text-5xl font-black leading-tight tracking-tight md:text-8xl font-headline">
                    Producción visual que hace que tu marca se vea{" "}
                    <span className="decoration-kp-cyan underline decoration-4 underline-offset-8">profesional.</span>
                </h1>

                <p className="mx-auto mb-12 max-w-2xl text-body-lg text-on-surface-variant">
                    Diseñamos contenido, identidad y presencia digital con la precisión que el mercado de alto nivel exige.
                    Elevamos tu visión a estándares cinematográficos.
                </p>

                <div className="flex flex-col items-center justify-center gap-6 md:flex-row">
                    <a className="pill-button-primary w-full md:w-auto" href="#contacto">
                        Cotizar ahora
                    </a>
                    <a className="pill-button-secondary w-full md:w-auto" href="#servicios">
                        Ver servicios
                    </a>
                </div>
            </div>

            <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce opacity-40">
                <span className="material-symbols-outlined text-4xl">expand_more</span>
            </div>
        </section>
    );
}