import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        GreenLighter: "hsl(148, 38%, 91%)",
        GreenMedium: "hsl(169, 82%, 27%)",
        Red: "hsl(0, 66%, 54%)",
        White: "hsl(0, 0%, 100%)",
        GreyMedium: "hsl(186, 15%, 59%)",
        GreyDarker: "hsl(187, 24%, 22%)",
      },
      fontFamily: {
        Karla: ["Karla", "sans-serif"]
      },
    },
  },
  plugins: [],
};
export default config;
