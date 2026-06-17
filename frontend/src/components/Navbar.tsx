export default function Navbar() {
    return (
        <nav
            id="navbar"
            className="sticky top-0 z-50 flex w-full items-center justify-between px-gutter py-6 transition-all duration-300 nav-sticky"
        >
            <div className="flex items-center gap-3">
                <img
                    alt="Logo Kroma Producciones"
                    className="h-10 w-auto"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuDfk7388uAWvtpkxT2I0xIYyGd5sgZEpsYxPgBNiZ71mooaVMhkeNNVpEldnpaEp9MWdrI350HyzNQi--7ozmHJSGW9ATywBeRRkG9nhHyU_-owcYXAices-9xeT5WVz1PGLGYgAOB_91B2xbDzvQ7AC3oDgBQ5qZp3Qbjg3jLFfMKOBcH_mFUhGw0viiVpRxKU5lzFAjDgV3bgC19_gbgdju2oBUl0HAuYjwQyhiyvfufoqt_lkQ-6nhNclSEEdQJ7Se8QTpSMGqS2"
                />
                <span className="font-headline text-2xl font-black tracking-tighter text-on-background">KROMA</span>
            </div>

            <div className="hidden items-center gap-8 md:flex">
                <a className="text-xs font-bold uppercase tracking-widest text-on-surface-variant transition-colors hover:text-white" href="#quienes-somos">
                    ¿Quiénes Somos?
                </a>
                <a className="text-xs font-bold uppercase tracking-widest text-on-surface-variant transition-colors hover:text-white" href="#servicios">
                    Servicios
                </a>
                <a className="text-xs font-bold uppercase tracking-widest text-on-surface-variant transition-colors hover:text-white" href="#contacto">
                    Contacto
                </a>
            </div>

            <a
                className="pill-button-primary uppercase"
                href="#contacto">
                Cotizar ahora
            </a>
        </nav>
    );
}