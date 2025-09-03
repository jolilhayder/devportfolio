// @ts-check
import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";

// https://astro.build/config
export default defineConfig({
  vite: {
    plugins: [tailwindcss()],
  },
});

// astro.config.mjs
import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://jolilhayder.github.io',
  base: '/devportfolio', // repo name
});
