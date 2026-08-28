import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        paper: "#EBE3D3",
        "paper-dim": "#DED2B8",
        ink: "#24231D",
        "ink-soft": "#4A4638",
        line: "#C9BCA0",
        ledger: {
          green: "#4B5D45",
          "green-dark": "#374533",
          rust: "#A1472F",
          "rust-dark": "#7E3623",
        },
        stamp: "#8A6E3F",
      },
      fontFamily: {
        display: ["var(--font-fraunces)", "Georgia", "serif"],
        body: ["var(--font-plex-sans)", "system-ui", "sans-serif"],
        mono: ["var(--font-plex-mono)", "ui-monospace", "monospace"],
      },
      backgroundImage: {
        grain: "radial-gradient(circle at 1px 1px, rgba(36,35,29,0.05) 1px, transparent 0)",
      },
    },
  },
  plugins: [],
};
export default config;
