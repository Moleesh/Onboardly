/**
 * @module TailwindConfig
 * @description Tailwind content and theme configuration.
 * @author auto
 * @since 1.0.0
 */
import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{ts,tsx}", "../../packages/ui/src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        ink: "#172033",
        surface: "#f6f7f9",
        accent: "#0f766e",
      },
    },
  },
  plugins: [],
};

export default config;
