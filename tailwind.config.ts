import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        brand: {
          primary: "#00AFC4",
          secondary: "#1E293B",
          background: "#F5F7FA",
          text: "#111827",
        },
      },
      boxShadow: {
        soft: "0 20px 60px rgba(15, 23, 42, 0.08)",
        glow: "0 12px 40px rgba(0, 175, 196, 0.18)",
      },
      backgroundImage: {
        mesh: "radial-gradient(circle at 20% 20%, rgba(0,175,196,0.18), transparent 25%), radial-gradient(circle at 80% 0%, rgba(30,41,59,0.08), transparent 20%), linear-gradient(180deg, rgba(255,255,255,0.72), rgba(245,247,250,1))",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-8px)" },
        },
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
      },
      animation: {
        float: "float 6s ease-in-out infinite",
        marquee: "marquee 24s linear infinite",
      },
      fontFamily: {
        sans: ["Inter", "ui-sans-serif", "system-ui"],
      },
    },
  },
  plugins: [],
};

export default config;