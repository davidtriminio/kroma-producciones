import {useEffect, useState} from "react";
import {Moon, Sun} from "lucide-react";

type Theme = "light" | "dark";

const STORAGE_KEY = "kroma-theme";
const query = "(prefers-color-scheme: dark)";

const systemTheme = (): Theme => (window.matchMedia(query).matches ? "dark" : "light");

const currentTheme = (): Theme => {
    const forced = document.documentElement.dataset.theme;
    return forced === "light" || forced === "dark" ? forced : systemTheme();
};

export default function ThemeToggle() {
    const [theme, setTheme] = useState<Theme>(currentTheme);

    useEffect(() => {
        const media = window.matchMedia(query);
        const onChange = () => {
            if (!document.documentElement.dataset.theme) setTheme(systemTheme());
        };

        media.addEventListener("change", onChange);
        return () => media.removeEventListener("change", onChange);
    }, []);

    const toggle = () => {
        const next: Theme = theme === "dark" ? "light" : "dark";

        document.documentElement.dataset.theme = next;
        try {
            localStorage.setItem(STORAGE_KEY, next);
        } catch {
            // storage can be blocked; the choice still applies for this visit
        }
        setTheme(next);
    };

    const label = theme === "dark" ? "Cambiar a tema claro" : "Cambiar a tema oscuro";

    return (
        <button type="button" onClick={toggle} aria-label={label} title={label} className="icon-shell cursor-pointer text-fg transition hover:border-brand">
            {theme === "dark" ? <Sun className="h-4 w-4"/> : <Moon className="h-4 w-4"/>}
        </button>
    );
}
