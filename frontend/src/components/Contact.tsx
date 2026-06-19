import SectionTitle from "./SectionTitle";
import {SiFacebook, SiInstagram, SiWhatsapp} from "@icons-pack/react-simple-icons";

export default function Contact() {
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
                            <a className="group flex items-center gap-6" href="https://wa.me/yournumber">
                <span className="icon-shell text-kp-cyan">
  <SiWhatsapp className="h-5 w-5" strokeWidth={2.4} color={"#25D366"}/>
</span>
                                <div>
                                    <p className="mb-1 text-[10px] font-black uppercase tracking-[0.2em] text-on-surface-variant">WhatsApp</p>
                                    <p className="font-headline text-xl font-bold">+57 300 000 0000</p>
                                </div>
                            </a>

                            <div className="flex items-center gap-6">

                                <div className="flex gap-6">
                                    <a className="text-on-surface-variant transition-colors hover:text-white" href="#">
                                        <span className="icon-shell text-kp-cyan"><SiInstagram className="h-5 w-5"
                                                                                               strokeWidth={2.4}
                                                                                               color={"#c1558b"}/></span>
                                    </a>
                                    <a className="text-on-surface-variant transition-colors hover:text-white" href="#">
                                        <span className="icon-shell text-kp-cyan"><SiFacebook className="h-5 w-5"
                                                                                              strokeWidth={2.4}
                                                                                              color={"#3b5998"}/></span>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>

                    <form className="space-y-5">
                        <div className="form-field">
                            <label className="form-label" htmlFor="fullName">
                                Nombre completo
                            </label>
                            <input
                                id="fullName"
                                className="form-control"
                                placeholder="Ej. David Hernández"
                                type="text"
                            />
                        </div>

                        <div className="form-field">
                            <label className="form-label" htmlFor="email">
                                Email corporativo
                            </label>
                            <input
                                id="email"
                                className="form-control"
                                placeholder="correo@empresa.com"
                                type="email"
                            />
                        </div>

                        <div className="form-field">
                            <label className="form-label" htmlFor="serviceType">
                                Tipo de servicio
                            </label>

                            <div className="form-select-wrap">
                                <select id="serviceType" className="form-control appearance-none pr-12">
                                    <option value="">Selecciona una opción</option>
                                    <option value="audiovisual">Producción Audiovisual</option>
                                    <option value="social">Manejo de Redes</option>
                                    <option value="web">Diseño Web</option>
                                    <option value="branding">Branding</option>
                                </select>
                            </div>
                        </div>

                        <button
                            className="pill-button-primary mt-3 w-full font-black uppercase tracking-[0.24em] cursor-pointer"
                            type="submit"
                        >
                            Enviar propuesta
                        </button>
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