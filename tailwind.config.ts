import type { Config } from "tailwindcss";

const asyncTheme = async () => {
  return new Promise((res) =>
    res({
      extend: {
        colors: {
          "custom-color": "#ffa600",
        },
        backgroundImage: {
          "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
          "gradient-conic":
            "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        },
      },
    })
  );
};

const syncTheme = () => {
  return {
    extend: {
      colors: {
        "custom-color": "#ffa600",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  };
};

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: asyncTheme(),
  plugins: [],
} satisfies Config;
