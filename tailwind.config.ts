import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      height: {
        '587': '36rem',
      },
      lenght: {
        '1px': '0.063rem',
      },
      screens: {
        'lg': {'max': '1023px'},
        'md': {'max': '800px'},
        'md-min':{'min': '1000px'},
        'sm': {'max': '600px'},
        'sm-min': {'min': '599px'},
      },
    },
  },
  plugins: [],
};
export default config;
