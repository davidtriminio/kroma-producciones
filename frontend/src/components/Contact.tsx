import SectionTitle from "./SectionTitle";

export default function Contact() {
    return (
        <section className="container-max mx-auto px-gutter py-section-gap" id="contacto">
            <div className="section-reveal relative overflow-hidden glass-card p-12 md:p-24">
                <div className="relative z-10 grid gap-20 md:grid-cols-2">
                    <div>
                        <SectionTitle>Impulsa tu Marca</SectionTitle>
                        <p className="mb-16 text-lg text-on-surface-variant">
                            Estamos listos para llevar tu contenido al siguiente nivel. Cuéntanos sobre tu proyecto.
                        </p>

                        <div className="space-y-10">
                            <a className="group flex items-center gap-6" href="https://wa.me/yournumber">
                <span className="flex h-16 w-16 items-center justify-center rounded-full border border-white/10 bg-white/5 text-kp-green transition-all duration-300 group-hover:bg-kp-green group-hover:text-black">
                  <span className="material-symbols-outlined text-3xl">chat</span>
                </span>
                                <div>
                                    <p className="mb-1 text-[10px] font-black uppercase tracking-[0.2em] text-on-surface-variant">WhatsApp</p>
                                    <p className="font-headline text-xl font-bold">+57 300 000 0000</p>
                                </div>
                            </a>

                            <div className="flex items-center gap-6">
                <span className="flex h-16 w-16 items-center justify-center rounded-full border border-white/10 bg-white/5 text-kp-cyan">
                  <span className="material-symbols-outlined text-3xl">public</span>
                </span>

                                <div className="flex gap-6">
                                    <a className="text-on-surface-variant transition-colors hover:text-white" href="#">
                                        <span className="material-symbols-outlined text-3xl">camera</span>
                                    </a>
                                    <a className="text-on-surface-variant transition-colors hover:text-white" href="#">
                                        <span className="material-symbols-outlined text-3xl">facebook</span>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>

                    <form className="space-y-10">
                        <div>
                            <input
                                className="w-full border-0 border-b border-surface-border bg-transparent px-0 py-6 font-bold text-white placeholder:text-on-surface-variant/30 focus:border-kp-cyan focus:ring-0"
                                placeholder="NOMBRE COMPLETO"
                                type="text"
                            />
                        </div>

                        <div>
                            <input
                                className="w-full border-0 border-b border-surface-border bg-transparent px-0 py-6 font-bold text-white placeholder:text-on-surface-variant/30 focus:border-kp-cyan focus:ring-0"
                                placeholder="EMAIL CORPORATIVO"
                                type="email"
                            />
                        </div>

                        <div>
                            <select className="w-full appearance-none border-0 border-b border-surface-border bg-transparent px-0 py-6 text-xs font-bold uppercase tracking-widest text-on-surface-variant/50 focus:border-kp-cyan focus:ring-0">
                                <option>Tipo de servicio</option>
                                <option>Producción Audiovisual</option>
                                <option>Manejo de Redes</option>
                                <option>Diseño Web</option>
                                <option>Branding</option>
                            </select>
                        </div>

                        <button className="pill-button-primary w-full py-5 text-xs font-black uppercase tracking-[0.3em]" type="submit">
                            Enviar propuesta
                        </button>
                    </form>
                </div>

                <div className="pointer-events-none absolute -right-40 -bottom-40 h-[600px] w-[600px] rounded-full bg-kp-cyan/5 blur-[120px]" />
                <div className="pointer-events-none absolute -left-40 -top-40 h-[600px] w-[600px] rounded-full bg-kp-red/5 blur-[120px]" />
            </div>
        </section>
    );
}