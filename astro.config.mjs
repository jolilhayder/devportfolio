// astro.config.mjs
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  site: 'https://jolilhayder.github.io',
  base: '/devportfolio',
  vite: {
    plugins: [tailwindcss()],
  },
});
