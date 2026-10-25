import { defineConfig, Plugin } from 'vite';
import react from '@vitejs/plugin-react';
import { readFileSync, readdirSync } from 'node:fs';
import { fileURLToPath } from 'node:url';

const root = fileURLToPath(new URL('.', import.meta.url));
const legalPages = readdirSync(`${root}legal`).filter((f) => f.endsWith('.html')).map((f) => f.replace('.html', ''));

// Writes each policy's text into its HTML so crawlers that don't run JavaScript
// (app-review bots, search engines) still read it; React replaces it on load.
const legalContent = (): Plugin => ({
  name: 'legal-content',
  transformIndexHtml(html, ctx) {
    const match = ctx.filename.replace(/\\/g, '/').match(/\/legal\/([a-z-]+)\.html$/);
    if (!match) return html;
    const body = readFileSync(`${root}src/legal/content/${match[1]}.html`, 'utf8');
    return html.replace('<!--legal-content-->', `<main>${body}</main>`);
  },
});

// https://vitejs.dev/config/
export default defineConfig({
  // Served from the custom domain root (syncall.ai), not a GitHub Pages subpath.
  base: '/',
  plugins: [react(), legalContent()],
  build: {
    rollupOptions: {
      input: {
        main: `${root}index.html`,
        about: `${root}about.html`,
        ...Object.fromEntries(legalPages.map((page) => [`legal-${page}`, `${root}legal/${page}.html`])),
      },
    },
  },
  server: {
    port: 3000,
    open: false,
  },
});
