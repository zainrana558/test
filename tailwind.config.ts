import type { Config } from "tailwindcss";
export default {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: { colors: { background: "#09090b", foreground: "#fafafa" } },
  },
  plugins: [],
} satisfies Config;
