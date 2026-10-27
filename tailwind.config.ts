import type { Config } from "tailwindcss";
const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./lib/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        cream: "#F6F1E7", beige: "#EBE2D0", sand: "#DCCFB5", sage: "#A5A78B",
        olive: "#7A7B54", forest: "#2E3A2C", charcoal: "#2A2925", bark: "#4A3B2C", terracotta: "#A5543A",
      },
      fontFamily: {
        serif: ["var(--font-serif)", "Georgia", "serif"],
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
      },
      letterSpacing: { eyebrow: "0.22em", btn: "0.18em" },
      transitionTimingFunction: { soft: "cubic-bezier(0.22, 0.61, 0.36, 1)" },
    },
  },
  plugins: [],
};
export default config;
