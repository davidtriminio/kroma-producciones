import type { Config } from "tailwindcss";

export default {
    darkMode: "class",
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            colors: {
                background: "var(--bg)",
                fg: "var(--fg)",
                surface: "var(--surface)",
                brand: "var(--brand)",
                purple: "var(--purple)",
                highlight: "var(--highlight)",
                "highlight-text": "var(--highlight-text)",
                "kp-green": "#22C55E",
                "kp-red": "#EF4444",
                "surface-border": "color-mix(in srgb, var(--fg) 12%, transparent)",
                "on-surface-variant": "var(--muted)",
                "on-background": "var(--fg)",
            },
            borderRadius: {
                kp: "14px",
            },
            spacing: {
                gutter: "1.75rem",
                "section-gap": "5.5rem",
                "container-max": "1160px",
            },
            fontFamily: {
                headline: ["Sackers Gothic", "sans-serif"],
                body: ["Krona One", "Sackers Gothic", "sans-serif"],
            },
        },
    },
    plugins: [],
} satisfies Config;