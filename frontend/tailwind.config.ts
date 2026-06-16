import type { Config } from "tailwindcss";

export default {
    darkMode: "class",
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            colors: {
                background: "#050506",
                "kp-blue": "#2563EB",
                "kp-yellow": "#FACC15",
                "kp-cyan": "#06B6D4",
                "kp-green": "#22C55E",
                "kp-red": "#EF4444",
                "kp-graphite": "#111216",
                "surface-border": "rgba(255,255,255,0.12)",
                "on-surface-variant": "#c8c5ca",
                "on-background": "#e2e1eb",
            },
            borderRadius: {
                kp: "28px",
            },
            spacing: {
                gutter: "1.75rem",
                "section-gap": "8rem",
                "container-max": "1160px",
            },
            fontFamily: {
                headline: ["Montserrat", "sans-serif"],
                body: ["Montserrat", "sans-serif"],
            },
        },
    },
    plugins: [],
} satisfies Config;