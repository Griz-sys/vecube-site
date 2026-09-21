import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import tailwindcss from '@tailwindcss/vite';
import { fileURLToPath } from 'node:url';
import { realpathSync } from 'node:fs';

// Resolve the project folder to its canonical path. On some setups this folder
// is reached through a junction/symlink, which would otherwise make Vite load
// React twice (breaking hooks) and mis-handle CSS. Pinning root to the real
// path collapses that to a single, consistent module graph.
const root = realpathSync(fileURLToPath(new URL('.', import.meta.url)));

// https://astro.build
export default defineConfig({
  root,
  integrations: [react()],
  vite: {
    plugins: [tailwindcss()],
    resolve: {
      dedupe: ['react', 'react-dom'],
    },
    server: {
      fs: {
        strict: false,
      },
    },
  },
});
