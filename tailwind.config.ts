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
        // Exemple de couleurs personnalisées
        background: "#f8fafc", // Couleur de fond personnalisée
        foreground: "#111827", // Couleur de texte personnalisée
      },
    },
  },
  plugins: [
    // Ajoutez vos plugins ici si nécessaire
  ],
};

export default config;
