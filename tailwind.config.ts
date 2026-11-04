import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        surface: "var(--surface)",
        muted: "var(--muted)",
        navy: {
          DEFAULT: "var(--navy)",
          dark: "var(--navy-dark)",
        },
        teal: {
          DEFAULT: "var(--teal)",
          hover: "var(--teal-hover)",
          muted: "var(--teal-muted)",
        },
        bronze: {
          DEFAULT: "var(--bronze)",
          decorative: "var(--bronze-decorative)",
          muted: "var(--bronze-muted)",
        },
        border: "var(--border)",
      },
      fontFamily: {
        sans: [
          "Inter",
          "-apple-system",
          "BlinkMacSystemFont",
          "'Segoe UI'",
          "Roboto",
          "'Helvetica Neue'",
          "Arial",
          "sans-serif",
        ],
        serif: [
          "'Source Serif 4'",
          "Charter",
          "'Bitstream Charter'",
          "'Sitka Text'",
          "Cambria",
          "Georgia",
          "serif",
        ],
        mono: [
          "'JetBrains Mono'",
          "'SF Mono'",
          "SFMono-Regular",
          "Menlo",
          "Monaco",
          "Consolas",
          "'Liberation Mono'",
          "monospace",
        ],
      },
    },
  },
  plugins: [],
};

export default config;
