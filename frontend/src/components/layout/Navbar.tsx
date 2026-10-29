import Logo from "../ui/Logo.tsx";
import ThemeToggle from "../ui/ThemeToggle.tsx";

export default function Navbar() {
    return (
        <nav
            id="navbar"
            className="sticky top-0 z-50 flex w-full items-center justify-between px-4 py-4 transition-all sm:px-gutter sm:py-6 duration-300 nav-sticky"
        >
            <a href="#" className="flex min-w-0 items-center gap-2 sm:gap-3" aria-label="Kroma - Agencia Publicitaria">
                <Logo size="sm" className="h-10 w-auto" />
                <span className="flex flex-col leading-none">
                    <span className="font-headline text-xl font-black tracking-wide text-on-background sm:text-2xl">KROMA</span>
                    <span className="mt-1 hidden text-[9px] font-light uppercase tracking-[0.32em] text-on-surface-variant sm:block">Agencia Publicitaria</span>
                </span>
            </a>

            <div className="hidden items-center gap-8 md:flex">
                <a className="text-xs font-bold uppercase tracking-widest text-on-surface-variant transition-colors hover:text-fg" href="#quienes-somos">
                    ¿Quiénes Somos?
                </a>
                <a className="text-xs font-bold uppercase tracking-widest text-on-surface-variant transition-colors hover:text-fg" href="#servicios">
                    Servicios
                </a>
                <a className="text-xs font-bold uppercase tracking-widest text-on-surface-variant transition-colors hover:text-fg" href="#contacto">
                    Contacto
                </a>
            </div>

            <div className="flex items-center gap-2 sm:gap-3">
                <ThemeToggle />
                <a
                    className="pill-button-primary whitespace-nowrap uppercase max-sm:px-4"
                    href="#contacto">
                    <span className="sm:hidden">Cotizar</span>
                    <span className="hidden sm:inline">Cotizar ahora</span>
                </a>
            </div>
        </nav>
    );
}