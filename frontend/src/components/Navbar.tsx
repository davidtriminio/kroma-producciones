import Logo from "./Logo";

export default function Navbar() {
    return (
        <nav
            id="navbar"
            className="sticky top-0 z-50 flex w-full items-center justify-between px-gutter py-6 transition-all duration-300 nav-sticky"
        >
            <a href="#" className="flex items-center gap-3" aria-label="Kroma - Agencia Publicitaria">
                <Logo size="sm" className="h-10 w-auto" />
                <span className="flex flex-col leading-none">
                    <span className="font-headline text-2xl font-black tracking-wide text-on-background">KROMA</span>
                    <span className="mt-1 text-[9px] font-light uppercase tracking-[0.32em] text-on-surface-variant">Agencia Publicitaria</span>
                </span>
            </a>

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