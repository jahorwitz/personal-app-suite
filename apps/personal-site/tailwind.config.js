/** @type {import('tailwindcss').Config} */
import { createTailwindConfig } from "@jahorwitz/theme/tailwind";

export default createTailwindConfig({
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    // Include UI package components
    "../../packages/ui/src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@tremor/**/*.{js,ts,jsx,tsx}",
  ],
  safelist: [
    {
      pattern:
        /^(bg|text|border|ring|fill|stroke)-(chart-[1-5]|primary|secondary|muted)$/,
    },
  ],
});
