import type { Config } from "tailwindcss";
export default { content: ["./app/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"], theme: { extend: { colors: { ink: "#17251f", lime: "#e98b35", paper: "#f7f5ef" }, fontFamily: { sans: ["Arial", "sans-serif"] } } }, plugins: [] } satisfies Config;
