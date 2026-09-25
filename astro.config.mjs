// astro.config.mjs
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://gianf27.github.io',
  base: '/bio/',
  integrations: [sitemap()],
  vite: {
    plugins: [tailwindcss()],
  },
});
