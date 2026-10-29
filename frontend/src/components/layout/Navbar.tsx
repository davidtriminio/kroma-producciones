import {useEffect, useState} from "react";
import {Menu, X} from "lucide-react";
import Logo from "../ui/Logo.tsx";
import ThemeToggle from "../ui/ThemeToggle.tsx";
import {kroma} from "../../data/kroma.ts";

const linkClass = "text-xs font-bold uppercase tracking-widest text-on-surface-variant transition-colors hover:text-fg";

export default function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);

    useEffect(() => {
        if (!menuOpen) return;

        const onKeyDown = (event: KeyboardEvent) => {
            if (event.key === "Escape") setMenuOpen(false);
        };
        const onResize = () => {
            if (window.innerWidth >= 768) setMenuOpen(false);
        };

        window.addEventListener("keydown", onKeyDown);
        window.addEventListener("resize", onResize);
        return () => {
            window.removeEventListener("keydown", onKeyDown);
            window.removeEventListener("resize", onResize);
        };
    }, [menuOpen]);

    return (
        <nav
            id="navbar"
            className="sticky top-0 z-50 flex w-full items-center justify-between px-4 py-4 transition-all sm:px-gutter sm:py-6 duration-300 nav-sticky"
        >
            <a href="#" className="flex min-w-0 items-center gap-2 sm:gap-3" aria-label="Kroma - Agencia Publicitaria">
                <Logo size="sm" className="h-8 w-auto sm:h-10" />
                <span className="flex flex-col leading-none max-[359px]:hidden">
                    <span className="font-headline text-base font-black tracking-wide text-on-background min-[420px]:text-xl sm:text-2xl">KROMA</span>
                    <span className="mt-1 hidden text-[9px] font-light uppercase tracking-[0.32em] text-on-surface-variant sm:block">Agencia Publicitaria</span>
                </span>
            </a>

            <div className="hidden items-center gap-8 md:flex">
                {kroma.nav.map((item) => (
                    <a key={item.href} className={linkClass} href={item.href}>
                        {item.label}
                    </a>
                ))}
            </div>

            <div className="flex shrink-0 items-center gap-1.5 sm:gap-3">
                <ThemeToggle />
                <a
                    className="pill-button-primary whitespace-nowrap uppercase max-sm:px-3.5 max-sm:py-2.5"
                    href="#contacto">
                    <span className="sm:hidden">Cotizar</span>
                    <span className="hidden sm:inline">Cotizar ahora</span>
                </a>
                <button
                    type="button"
                    className="icon-shell cursor-pointer text-fg md:hidden"
                    aria-label={menuOpen ? "Cerrar menú" : "Abrir menú"}
                    aria-expanded={menuOpen}
                    aria-controls="mobile-menu"
                    onClick={() => setMenuOpen((open) => !open)}
                >
                    {menuOpen ? <X className="h-4 w-4"/> : <Menu className="h-4 w-4"/>}
                </button>
            </div>

            {menuOpen && (
                <div id="mobile-menu" className="mobile-menu md:hidden">
                    {kroma.nav.map((item) => (
                        <a
                            key={item.href}
                            className="mobile-menu-link"
                            href={item.href}
                            onClick={() => setMenuOpen(false)}
                        >
                            {item.label}
                        </a>
                    ))}
                </div>
            )}
        </nav>
    );
}
